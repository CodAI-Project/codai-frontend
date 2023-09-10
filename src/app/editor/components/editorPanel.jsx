"use client";

import React, { useState, useEffect, useRef } from "react";
import sdk from "@stackblitz/sdk";
import { useChat } from "../context/chatContext";
import { useAuthContext } from "@//authservice/AuthContext";
import { getChatById } from "@//services/api";

export default function EditorPanel() {
  const { user } = useAuthContext();
  const { selectedChat, contentEditor, setVmInstanceActual, setLoading } =
    useChat();

  const [projectInitialized, setProjectInitialized] = useState(false);
  const [projectFiles, setProjectFiles] = useState({});
  const [currentChatId, setCurrentChatId] = useState("");
  const [vmSave, setVmSave] = useState();
  const iframeRef = useRef(null);

  useEffect(() => {
    if (selectedChat && selectedChat.id && selectedChat.id !== currentChatId) {
      setLoading(true);
      setCurrentChatId(selectedChat.id);
      initializeProject();
    }
  }, [selectedChat, currentChatId]);

  useEffect(() => {
    console.log("contentEditor", contentEditor);
    if (projectInitialized && contentEditor.history?.slice(-1)) {
      applyChangesToEditor();
    }
  }, [contentEditor, projectInitialized]);

  const initializeProject = async () => {
    try {
      const response = await getChatById(selectedChat.id, user);

      let projectData = {};
      try {
        projectData = JSON.parse(response.data.history.slice(-1)[0].content);
      } catch (error) {
        console.error("Erro ao analisar o JSON do projeto:", error);
      }

      const iframe = document.getElementById("stackblitz-iframe");
      const vm = await sdk.embedProject(iframe, projectData, {
        hideNavigation: true,
      });

      setLoading(false);
      const objectToInstance = {
        vm, 
        projectData
      }
      setVmSave(vm);
      setVmInstanceActual(objectToInstance);
      setProjectFiles(projectData);
      setProjectInitialized(true);

      await vm.editor.setTheme("dark");
    } catch (error) {
      console.error("Erro ao inicializar o projeto:", error);
      setLoading(false);
    }
  };

  const applyChangesToEditor = async () => {
    try {
      const iframe = document.getElementById("stackblitz-iframe");
      const vm = await sdk.connect(iframe);

      console.log("vm", vm);

      const diff = computeFileDiff(
        JSON.parse(
          contentEditor.history[contentEditor.history.length - 1].content
        ).files,
        projectFiles.files
      );

      await vm.applyFsDiff({
        create: diff.create,
        destroy: [],
      });
    } catch (error) {
      console.error("Erro ao aplicar alterações ao editor:", error);
    }
  };

  const computeFileDiff = (newFiles, existingFiles) => {
    const diff = {
      create: {},
      destroy: [],
    };
    console.log("newFiles", newFiles);
    console.log("existingFiles", existingFiles);

    for (const file in newFiles) {
      if (!existingFiles[file] || existingFiles[file] !== newFiles[file]) {
        diff.create[file] = newFiles[file];
      }
    }

    for (const file in existingFiles) {
      if (!newFiles[file]) {
        diff.destroy.push(file);
      }
    }

    return diff;
  };

  return (
    <div className="responsive-iframe">
      <iframe
        className="responsive-iframe"
        ref={iframeRef}
        id="stackblitz-iframe"
        title="CodAI Editor"
      />
    </div>
  );
}
