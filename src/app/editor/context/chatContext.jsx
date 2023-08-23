import React, { createContext, useContext, useState, useEffect } from 'react';
import { getChatsByUserId } from '@//services/api';
import { useAuthContext } from '@//authservice/AuthContext';
const ChatContext = createContext();

export function ChatProvider({ children }) {
    const { user } = useAuthContext()
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contentEditor, setContentEditor] = useState([])


    useEffect(() => {
        async function fetchChats() {
            try {
                const userId = user.uid;
                const response = await getChatsByUserId(userId, user);
                const sortedChats = response.data.sort((a, b) => b.lastModified - a.lastModified);
                setChats(sortedChats);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        }
        fetchChats();
    }, []);


    async function fetchChats() {
        try {
            const userId = user.uid;
            const response = await getChatsByUserId(userId, user);
            const sortedChats = response.data.sort((a, b) => b.lastModified - a.lastModified);
            setChats(sortedChats);
            setLoading(false);
            setSelectedChat(sortedChats[0])
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    }

    async function getChatById(id) {
        try {
            const response = await getChatById(id, user);
            
            console.log(response)
            
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    }

    return (
        <ChatContext.Provider value={{ selectedChat, setSelectedChat, chats, setChats, fetchChats, contentEditor, setContentEditor, getChatById }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    return useContext(ChatContext);
}

