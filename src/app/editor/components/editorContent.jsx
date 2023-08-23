'use client'
import React, { useRef, useState, useEffect } from 'react';
import EditorPanel from './editorPanel';
import MainEditor from './mainEditor';
import { useChat } from '../context/chatContext';

export default function EditorContent() {
  const { selectedChat } = useChat();
  const parentRef = useRef(null);
  const [showEditorPanel, setShowEditorPanel] = useState(Boolean(selectedChat));

  useEffect(() => {
    setShowEditorPanel(Boolean(selectedChat));
  }, [selectedChat]);

  return (
    <div ref={parentRef} className='mx-2 h-full overflow-hidden relative'>
      {showEditorPanel ? (
        <div className='z-10 relative'>
          <EditorPanel parentRef={parentRef} />
        </div>
      ) : (
        <div className='h-full'>
          <MainEditor />
        </div>
      )}
    </div>
  );
}