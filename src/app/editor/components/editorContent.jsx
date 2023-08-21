'use client'
import React, { useRef } from 'react';
import EditorPanel from './editorPanel';

export default function EditorContent({ selectedChatContent }) {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef} className='border-1 border-gray-500 mx-2 h-full overflow-hidden relative'>
      {selectedChatContent ? (
        <>
        
          <div className='z-10 relative'>
            <EditorPanel selectedChatContent={selectedChatContent} parentRef={parentRef} />
          </div>

        </>
      ) : (
        <p>Selecione um chat para começar a conversa.</p>
      )}
    </div>
  );
};
