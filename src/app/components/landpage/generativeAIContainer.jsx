import React from "react";
import { Button } from "@nextui-org/react";

export default function GenerativeAIContainer() {
  return (
    <div className="bg-futurist">
      <div className="relative max-w-full mx-4 md:mx-16 lg:mx-60 my-20 bg-opacity-60 bg-slate-800	 backdrop-blur-md rounded-3xl flex flex-col md:flex-row items-center justify-center p-6 md:p-16">
        <img
          src="/bg-futuristic.svg"
          alt=""
          className="absolute top-0 left-0 w-full h-full bg-futuristic blur-0 object-cover rounded-3xl z-0"
        />
        <img
          src="/fundo-da-main.svg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl z-0"
        />
        <div className="z-10 text-center w-full">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Use o poder da{" "}
            <GradientText>IA Generativa</GradientText> e crie templates
          </h1>
          <p className="text-white text-base md:text-lg mb-8">
            Descubra como nossa tecnologia de IA generativa pode ajudar você a
            criar templates exclusivos e visualmente impressionantes para suas
            necessidades criativas.
          </p>
          <div className="flex flex-col px-12 justify-center md:flex-row gap-10 w-full">
            <StyledButton className="w-full p-7 bg-gradient-to-r text-black from-malibu-300  to-sulu-200">
              Começar a usar
            </StyledButton>
            <StyledGradientButton className="w-full p-7  md:mt-0">
              Assista a demonstração
            </StyledGradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const GradientText = ({ children }) => (
  <span className="gradient-text">{children}</span>
);

const StyledButton = ({ className, children }) => (
  <Button className={`bg-primary-gradient-logo font-bold text-lg py-2 px-4 ${className}`}>
    {children}
  </Button>
);

const StyledGradientButton = ({ className, children }) => (
  <Button
    className={`border-gradient border text-white font-bold text-lg py-2 px-4 ${className}`}
    variant="text"
  >
    {children}
  </Button>
);

