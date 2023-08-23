"use client";
import React, { useState, useEffect, useRef } from "react";
import sdk from "@stackblitz/sdk";

export default function Page() {
  const [result, setResult] = useState("");
  const [editorMounted, setEditorMounted] = useState(false);
  const [projectFiles, setProjectFiles] = useState({});
  const iframeRef = useRef(null);
    const [iframeHeight, setIframeHeight] = useState(500); // Defina a altura inicial aqui


  useEffect(() => {
    if (!editorMounted) {
      createAndEmbedProject();
      setEditorMounted(true);
    }
  }, [editorMounted]);


  useEffect(() => {
    if (!editorMounted) {
      createAndEmbedProject();
      setEditorMounted(true);
    }
  }, [editorMounted]);

  const createAndEmbedProject = async () => {
    const projectData = {
      title: "My New Project",
      description: "A sample project with custom files and dependencies.",
      template: "javascript",
      dependencies: {
        lodash: "^4.17.21",
      },
      files: {
        "index.html": "<h1>Hello Custom Project!</h1>",
        "index.js": 'import _ from "lodash";',
      },
    };

    const iframe = document.getElementById("stackblitz-iframe");
    const vm = await sdk.embedProject(iframe, projectData);
    setProjectFiles(projectData.files);

    // Adicionar código para controlar a interação com o editor e atualizar arquivos
    updateFilesInEditor(vm);
  };

  const updateFilesInEditor = async (vm) => {
    const updateFiles = async () => {
      const newFiles = {
        "index.html": `${projectFiles}`,
        "index.js": 'console.log("Updated content");',
      };

      const filesToDelete = [];
      for (const path in projectFiles) {
        if (!newFiles[path]) {
          filesToDelete.push(path);
        }
      }

      await vm.applyFsDiff({
        create: newFiles,
        destroy: filesToDelete,
      });
    };

    // Executa a atualização dos arquivos após um intervalo de tempo
    setTimeout(updateFiles, 5000); // Atualizar após 5 segundos (apenas como exemplo)
  };

  const applyChangesToEditor = async () => {
    const iframe = document.getElementById("stackblitz-iframe");
    const vm = await sdk.connect(iframe);

    // Aplica as alterações diretamente ao editor

    console.log(projectFiles)
    await vm.applyFsDiff({
      create: projectFiles,
      destroy: [],
    });
  };

  const compareObjects = () => {
    // Simulação de comparação de objetos
    const newFiles = {
      ...projectFiles,
      "index.html": "<h1>HELLO WORLD</h1>",
    };

    setResult(JSON.stringify(newFiles, null, 2));
    setProjectFiles(newFiles);
  };

  return (
    <div>
      <div>
        <button onClick={compareObjects}>Compare Objects</button>
        <button onClick={applyChangesToEditor}>Apply Changes to Editor</button>
      </div>
      <div>
        <pre>{result}</pre>
      </div>
      <div className="h-full">
        <iframe
          ref={iframeRef}
          id="stackblitz-iframe"
          title="StackBlitz Editor"
          width="100%"
        />
      </div>
    </div>
  );
}
