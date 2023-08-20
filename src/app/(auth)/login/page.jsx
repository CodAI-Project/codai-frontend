'use client'
import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import Link from 'next/link';
import { CodaiIcon } from '../../components/landpage/codaiIcon';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from '../../firebase';
const provider = new GoogleAuthProvider();



export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        console.log(token)
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };


  return (



    <div className="flex h-screen overflow-hidden">
      <div className="absolute top-1 left-2 p-4">
        <CodaiIcon className="w-12 h-12" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-3/4">

          <div className='mb-16'>
            <h1 className='text-2xl	'>Vamos ser <GradientText>criativos!</GradientText></h1>
            <div className='mt-4 text-base text-gray-400'>
              <span>Faça login no CodAI para começar a criar a magia</span>
            </div>
          </div>


          <form className="space-y-2" onSubmit={handleSubmit}>


            <Input
              className='border-slate-700 border-1 mb-6 rounded-lg'
              radius='sm'
              size='lg'
              type="email"
              placeholder="email@codai.com"
              labelPlacement="outside"
              startContent={
                <img src='./mail-icon.svg' />
              }
            />

            <Input
              className='border-slate-700 border-1 rounded-lg'
              radius='sm'
              size='lg'
              type="password"
              placeholder="Password"
              labelPlacement="outside"
              startContent={
                <img src='./password-icon.svg' />
              }
            />

            <div className='flex float-right'>
              <span className='text-transparent my-4 font-semibold  bg-clip-text bg-gradient-to-r from-malibu-300 to-sulu-200'> <Link href="forget">Esqueceu a senha?</Link></span>
            </div>

            <Button
              radius='md'
              size='lg'
              type="submit"
              className="w-full font-semibold mb-4 bg-sulu-300 text-black  py-2hover:bg-sulu-300 transition duration-300"
            >
              Login
            </Button>

            <div className="pt-6 pb-6">
              <div className="flex items-center">
                <hr className="flex-grow border-t border-gray-400" />
                <span className="mx-4 text-xs text-gray-400">Ou continue com</span>
                <hr className="flex-grow border-t border-gray-400" />
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <Button
                startContent={<img src='./google-icon.svg' className='w-7' />}
                radius='sm'
                size='lg'
                type="submit"
                onClick={handleGoogleSignIn}
                className="w-full font-semibold mb-4 bg-shark-950 text-shark-400 py-2 hover:bg-gray-300 transition duration-300 mobile-hide-text"
              >
                Continue com Google
              </Button>

              <Button
                startContent={<img src='./github-icon.svg' className='w-7' />}
                radius='sm'
                size='lg'
                type="submit"
                onClick={handleGithubSignIn}
                className="w-full font-semibold mb-4 bg-shark-950 text-shark-400 py-2 hover:bg-gray-300 transition duration-300 mobile-hide-text"
              >
                Continue com GitHub
              </Button>

            </div>

          </form>
        </div>
      </div >
      <div className="hidden lg:flex flex-grow bg-cover bg-center" style={{ backgroundImage: "url('./bg-login.svg')" }}></div>
    </div >
  );
};



const GradientText = ({ children }) => (
  <span className="gradient-text font-semibold">{children}</span>
);
