import { createContext, useState, useEffect, ReactNode } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL || !email) {
          throw new Error("nformações da conta do Google faltando.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email
        });

      } else {
        setLoading(false)
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    setLoading(true);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL || !email) {
        throw new Error("nformações da conta do Google faltando.");
      }

      setLoading(false);
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email
      });
    }
  }

  async function signOut() {
    setLoading(true);

    await auth.signOut();

    setLoading(false);
    setUser(undefined);

    Object.keys(localStorage).forEach((key) => {
      if (key.includes("firebase")) {
        localStorage.removeItem(key);
      }
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
}
