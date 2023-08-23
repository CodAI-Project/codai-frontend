

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_KEY_OPENAI = process.env.NEXT_PUBLIC_API_KEY_OPEN_AI
async function getAuthToken(user) {

    if (user) {
        const idToken = await user.getIdToken();
        return idToken;
    }

    return null;
}

export async function postCodeToOpenAI({ ask, template, chatId, userId, user }) {

    const authToken = await getAuthToken(user);



    if (!authToken) {
        return null;
    }

    const response = await fetch(`${API_BASE_URL}/code/code-openai`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            ask,
            template,
            chatId,
            userId,
        }),
    });

    return response.json();
}

export async function getChatsByUserId(idUser, user) {

    const authToken = await getAuthToken(user);

    console.log(authToken)
    if (!authToken) {
        return null;
    }

    const response = await fetch(`${API_BASE_URL}/chats/user/${idUser}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return response.json();
}

export async function getChatById(idChat, user) {
    const authToken = await getAuthToken(user);


    if (!authToken) {
        return null;
    }

    const response = await fetch(`${API_BASE_URL}/chats/${idChat}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return response.json();
}
export async function postOpenAI(messages) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
    };


    const messageToGFpt = [
        { role: "system", content: "Crie um titulo para um chat (deve retornar apenas o titulo) de até 20 caracteres descrito o tema pedido pelo usuario SEMPRE GERE um titulo independente do que ele mandar" },
        { role: "user", content: messages }
    ];

    const data = {
        messages: messageToGFpt,
        model: 'gpt-3.5-turbo',
        temperature: 0,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function patchChatTitle(idChat, title, userId, user) {
    const authToken = await getAuthToken(user);


    if (!authToken) {

        return null;
    }

    console.log('authToken', authToken)

    const response = await fetch(`${API_BASE_URL}/chats/title/${idChat}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            title,
            userId,
        }),
    });

    return response.json();
}

export async function deleteChat(chatId, user) {
    const authToken = await getAuthToken(user);


    if (!authToken) {

        return null;
    }

    const response = await fetch(`${API_BASE_URL}/chats/${chatId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return response.json();
}



export async function getAllFrameworkOptions(user) {
    const authToken = await getAuthToken(user);


    if (!authToken) {
        return null;
    }


    const response = await fetch(`${API_BASE_URL}/framework`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });


    return response.json();
}


export async function getFrameworkOptionById(id, user) {
    const authToken = await getAuthToken(user);

    if (!authToken) {
        return null;
    }

    const response = await fetch(`${API_BASE_URL}/framework/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return response.json();
}



export async function createFrameworkOption(title, template, user) {
    const authToken = await getAuthToken(user);


    if (!authToken) {

        return null;
    }

    const response = await fetch(`${API_BASE_URL}/framework`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            title,
            template,
        }),
    });

    return response.json();
}

export async function updateFrameworkOption(id, title, template, user) {
    const authToken = await getAuthToken(user);

    if (!authToken) {

        return null;
    }

    const response = await fetch(`${API_BASE_URL}/framework/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            title,
            template,
        }),
    });

    return response.json();
}

export async function deleteFrameworkOption(id, user) {
    const authToken = await getAuthToken(user);

    if (!authToken) {

        return null;
    }

    const response = await fetch(`${API_BASE_URL}/framework/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return response.json();
}