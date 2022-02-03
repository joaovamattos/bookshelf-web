import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

// import { Container } from './styles';

const pages: React.FC = () => {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();;

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading])

  async function handeSingOut() {
    await signOut();
  }


  return (
    <div>
      <h1>My Secret Page</h1>

      <button type='button' onClick={handeSingOut}>Sing out</button>
    </div>
  );
}

export default pages;