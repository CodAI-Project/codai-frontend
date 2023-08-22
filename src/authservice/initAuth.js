import { init } from 'next-firebase-auth'

const initAuth = () => {
    init({
        authPageURL: '/login',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        onLoginRequestError: (err) => {
            console.error(err)
        },
        onLogoutRequestError: (err) => {
            console.error(err)
        },
        authDomain: "codai-development.firebaseapp.com",
        projectId: "codai-development",
        firebaseAuthEmulatorHost: 'localhost:5000',
        firebaseAdminInitConfig: {
            credential: {
                projectId: 'codai-development',
                clientEmail: 'firebase-adminsdk-9aue3@codai-development.iam.gserviceaccount.com	',
                // The private key must not be accessible on the client side.
                privateKey: 'AIzaSyD3ySG8RyS6wix-O8noYsK9tPa1W2sPo3o',
            },
            databaseURL: 'https://my-example-app.firebaseio.com',
        },
        // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
        // useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyD3ySG8RyS6wix-O8noYsK9tPa1W2sPo3o', // required
            authDomain: 'odai-development.firebaseapp.com',
            databaseURL: 'codai-development.appspot.com',
            projectId: 'codai-development',
        },
        // tenantId: 'example-tenant-id', // Optional, only necessary in multi-tenant configuration
        cookies: {
            name: 'codai', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                "12345678911",
                '12345678911aew',
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
        onVerifyTokenError: (err) => {
            console.error(err)
        },
        onTokenRefreshError: (err) => {
            console.error(err)
        },
    })
}

export default initAuth