import React from 'react';

export default function Partners() {
    return (
        <div className="max-w-fullbackdrop-blur-md flex flex-col md:flex-row items-center justify-center p-6 md:p-16 relative">
            <img
                src="/fundo-partnes.svg"
                alt=""
                className="absolute w-full h-full z-0"
                style={{
                    boxShadow: "rgba(255, 255, 255, 0.1) 0px 14px 13px -1px inset",
                }}
            />

            <div className='flex flex-row gap-8 md:flex-row' >

                <img
                    src="/plusoft.svg"
                    alt=""
                    className="w-40 h-auto"
                />

                <img
                    src="/fiap.svg"
                    alt=""
                    className="w-40 h-auto"
                />
            </div>


        </div>
    );
}
