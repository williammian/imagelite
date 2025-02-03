'use client'

import { useAuth } from '@/resources'
import { useEffect, useState } from 'react';
import LoginPage from './login/page'
import GaleriaPage from './galeria/page'

export default function Home() {
  const auth = useAuth();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const user = auth.getUserSession();
    setIsValid(!!user);
  }, []);

  if (isValid === null) {
    return <p>Loading...</p>; // Evita erro de renderização antes da validação do token
  }

  if(!isValid){
    return <LoginPage />
  }

  return (
    <GaleriaPage />
  )
}
