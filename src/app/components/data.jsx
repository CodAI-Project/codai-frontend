import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../../../public/low-code-rapid.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

const benefitOne = {
  title: "Destaque dos Benefícios do CodAI",
  desc: "Descubra por que o CodAI é a escolha ideal para simplificar seu fluxo de desenvolvimento de software.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Crie Código de Qualidade Rapidamente",
      desc: "Com o CodAI, você pode gerar código de alta qualidade em questão de segundos, economizando tempo valioso em seus projetos.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Assistência em Tempo Real",
      desc: "Nossa IA avançada oferece assistência em tempo real enquanto você escreve código, sugerindo melhorias e otimizações à medida que avança.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Edição Intuitiva e Eficiente",
      desc: "Nosso editor intuitivo simplifica a edição de código, tornando-a uma tarefa eficaz e até mesmo prazerosa. Diga adeus a linhas de código bagunçadas!",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mais Benefícios com o CodAI",
  desc: "Explore outros benefícios do CodAI e veja como ele pode melhorar sua experiência de desenvolvimento de software.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Template Responsivo para Dispositivos Móveis",
      desc: "O CodAI é projetado como um template responsivo para dispositivos móveis, garantindo que você possa desenvolver em qualquer lugar.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Tecnologias de Ponta",
      desc: "Este projeto é alimentado pelas tecnologias e ferramentas mais recentes, garantindo um ambiente de desenvolvimento moderno.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Modo Claro e Escuro",
      desc: "O CodAI oferece um modo claro e escuro, proporcionando uma experiência de codificação agradável em qualquer ambiente.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
