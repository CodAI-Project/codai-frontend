'use client'
import React, { useEffect, useState } from 'react';
import sdk from '@stackblitz/sdk';
import { useChat } from '../context/chatContext';

export default function EditorPanel({  parentRef }) {
    const [embedHeight, setEmbedHeight] = useState(parentRef.current?.offsetHeight);
    const { contentEditor, setContentEditor, selectedChat } = useChat();
    let vmInstance = null;

    
    useEffect(() => {
        setEmbedHeight(parentRef.current?.offsetHeight);

        const handleResize = () => {
            setEmbedHeight(parentRef.current?.offsetHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
         
        };
    }, [parentRef]);

    useEffect(() => {
        if (!vmInstance) {
            async function createProject() {
                const project = objeto;
                const vm = await sdk.embedProject('stackblitz-embed', project, {
                    height: embedHeight,
                    width: '100%',
                    hideNavigation: false,
                });

                await vm.editor.setTheme('dark');
                return vm;
            }

            createProject().then(vm => {
                vmInstance = vm;
            });
        }

        return () => {
      
        };
    }, [embedHeight]);

    return selectedChat ? (
        <div className="w-full n">
            <div id="stackblitz-embed" />
        </div>
    ) : null;
}