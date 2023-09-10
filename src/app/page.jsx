"use client";
import Head from "next/head";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SectionTitle from "./components/sectionTitle";

import { benefitOne, benefitTwo } from "./components/data";
import Video from "./components/video";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import CodAICreators from "./components/codAICreators";
import Faq from "./components/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodAI</title>
        <meta name="description" content="CodAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="CodAI Beneficios"
        title="Por que escolher o CodAI?"
      ></SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Assista a uma demonstração"
        title="Veja como o CodAI funciona na prática"
      >
        Esta seção apresenta uma demonstração detalhada do CodAI em ação.
        Assista ao vídeo para compreender como nossa plataforma revoluciona o
        desenvolvimento de software. Não perca a oportunidade de conhecer o
        CodAI em ação.
      </SectionTitle>

      <Video />
      <SectionTitle
        pretitle="Conheça a Equipe CodAI"
        title="Criadores da CodAI"
      >
        Somos uma equipe unida e nos esforçamos muito para esse projeto
      </SectionTitle>
      <CodAICreators />

      <SectionTitle pretitle="Ainda tem dúvidas?" title="Tire Suas Dúvidas">
        Aqui estão algumas das perguntas mais comuns que nossos usuários fazem
        sobre a CodAI. Se você tiver alguma dúvida que não esteja listada aqui,
        sinta-se à vontade para nos contatar.
      </SectionTitle>
      <Faq />

      <Footer />
    </>
  );
}
