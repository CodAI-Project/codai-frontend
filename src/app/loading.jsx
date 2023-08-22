import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-sulu-400"></div>
      <h1 className='text-sulu-400'>Aguarde</h1>
    </div>
  );
}
