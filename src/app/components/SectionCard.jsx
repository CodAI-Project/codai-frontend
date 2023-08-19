import React from "react";
import CardCustom from "./Card";


const cardInfos = [
  {
    image: "./clock.svg",
    title: "Gere rapidamente códigos e gere na hora",
    description: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar"
  },
  {
    image: "./code.svg",
    title: "Edite os códigos junto com a IA",
    description: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar"
  },
  {
    image: "./cloud.svg",
    title: "Baixe o projeto direto pra sua máquina",
    description: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar"
  }
]


const SectionCard = () => {
  return (
    <div className="relative max-w-full mx-4 md:mx-16 lg:mx-60 my-20 flex flex-col md:flex-col">
      <div className="">
        <h1 className="text-3xl">Eleve seus projetos</h1>
        <img className="ml-28 mb-4" alt="" src="/vector-498.svg" />
      </div>
      <div>
        <h2 className="text-xl">Inicialize suas ideias, de uma maneira mais prática e rápida</h2>
      </div>


      <div className="my-5 "></div>

      <div className="flex flex-row gap-5 flex-wrap justify-center">
        {cardInfos.map((item, index) => (
          <CardCustom
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </div >
  );
};



export default SectionCard;
