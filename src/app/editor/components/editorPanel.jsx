'use client'


import React, { useEffect, useState } from 'react';
import sdk from '@stackblitz/sdk';

export default function EditorPanel({ selectedChatContent, parentRef }) {
    const [embedHeight, setEmbedHeight] = useState(parentRef.current?.offsetHeight);
    const objeto = JSON.parse("{\n    \"files\": {\n        \"index.html\": \"<!DOCTYPE html>\\n<html>\\n<head>\\n<title>Login</title>\\n<link rel=\\\"stylesheet\\\" href=\\\"styles.css\\\">\\n</head>\\n<body>\\n<div class=\\\"container\\\">\\n    <h1>Login</h1>\\n    <form>\\n        <input type=\\\"text\\\" placeholder=\\\"Username\\\">\\n        <input type=\\\"password\\\" placeholder=\\\"Password\\\">\\n        <button type=\\\"submit\\\">Login</button>\\n    </form>\\n</div>\\n</body>\\n</html>\",\n        \"styles.css\": \"body {\\n    background-color: #1a1a1a;\\n    color: #fff;\\n    font-family: Arial, sans-serif;\\n}\\n\\n.container {\\n    width: 300px;\\n    margin: 0 auto;\\n    padding: 20px;\\n    text-align: center;\\n}\\n\\nh1 {\\n    margin-bottom: 20px;\\n}\\n\\ninput[type=\\\"text\\\"], input[type=\\\"password\\\"] {\\n    width: 100%;\\n    padding: 10px;\\n    margin-bottom: 10px;\\n    border: none;\\n    border-radius: 5px;\\n}\\n\\nbutton[type=\\\"submit\\\"] {\\n    width: 100%;\\n    padding: 10px;\\n    background-color: #4CAF50;\\n    color: #fff;\\n    border: none;\\n    border-radius: 5px;\\n    cursor: pointer;\\n}\"\n    },\n    \"title\": \"Login - Dark Theme\",\n    \"description\": \"This is a login screen with a dark theme design. It includes a form with input fields for username and password, and a login button. The background color is dark and the text color is white. The form elements have a modern design with rounded corners and a green submit button.\"\n}")

    useEffect(() => {
        setEmbedHeight(parentRef.current?.offsetHeight);

        const handleResize = () => {
            setEmbedHeight(parentRef.current?.offsetHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [parentRef]);

    useEffect(() => {
        async function createProject() {
            const project = {
                files: {
                    'index.html': '<html><body>Hello</body></html>',
                },
                title: 'Editor Panel',
            };

            const vm = await sdk.embedProject('stackblitz-embed', project, {
                height: embedHeight,
                width: '100%',
                hideNavigation: true,
            });

            await vm.editor.setTheme('dark');
        }

        createProject();
    }, [embedHeight]);

    return <div id="stackblitz-embed"
        className="w-full n" />;
}
