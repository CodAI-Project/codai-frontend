'use client'
import React, { useRef } from 'react';
import EditorPanel from './editorPanel';
import MainEditor from './mainEditor';

export default function EditorContent({ selectedChatContent }) {
  const parentRef = useRef(null);


  return (
    <div ref={parentRef} className='mx-2 h-full overflow-hidden relative'>
      {selectedChatContent ? (
        <>
          <div className='z-10 relative '>
            <EditorPanel selectedChatContent={selectedChatContent} parentRef={parentRef} />
          </div>
        </>
      ) : (

        <div className='h-full'>
          <MainEditor />
        </div>

      )}
    </div>
  );
};
