'use client'
import { useUser } from "./userContext";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loading from "../app/loading";

export default function RotaProtegida({ children }) {
  const user = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user !== null) {
      setIsLoading(false);
      if (!user) {
        // Redireciona para a página de login se o usuário não estiver autenticado
        // Pode ser substituído pelo componente de Login ou uma página de login completa
        router.push('/login');
      }
    }
  }, [user, router]);

  if (isLoading) {
    // Renderiza um indicador de carregamento enquanto a autenticação está sendo verificada
    return <Loading/>
  }

  if (user) {
    // Renderiza o conteúdo da rota protegida se o usuário estiver autenticado
    return <div>{children}</div>;
  } else {
    // Se o usuário não estiver autenticado, o redirecionamento já foi feito acima
    return null;
  }
}
