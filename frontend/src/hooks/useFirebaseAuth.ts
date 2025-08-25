import useAuthStore from '@/store/useAuthStore';
import { LoadingHook, useLoadingValue } from '@/utils';
import {
  Auth,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export type AuthStateHook = LoadingHook<User | null, Error>;

type AuthStateOptions = {
  onUserChanged?: (user: User | null) => Promise<void>;
};

export const useFirebaseAuthState = (auth: Auth, options?: AuthStateOptions): AuthStateHook => {
  const { setIdToken } = useAuthStore();
  const { value, error, loading, setError, setValue } = useLoadingValue<User | null, Error>(() => auth.currentUser);

  useEffect(() => {
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        if (options?.onUserChanged) {
          try {
            await options.onUserChanged(user);
          } catch (e) {
            setError(e as Error);
          }
        }
        if (user) {
          const idToken = await user.getIdToken();
          setIdToken(idToken);
        } else {
          setIdToken(null);
        }
        setValue(user);
      },
      setError
    );

    return () => {
      listener();
    };
  }, [auth]);

  return [value, loading, error];
};

export const useFirebaseAuthAction = (auth: Auth) => {
  const [loading, setLoading] = useState(false);

  const signInWithPassword = async (email: string, password: string, callback?: (user: User) => void) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (callback) {
          callback(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`Error signing in: ${errorMessage} (${errorCode})`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInWithPopupProvider = async (
    provider: GoogleAuthProvider | OAuthProvider,
    callback?: (user: User) => void
  ) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        if (callback) {
          callback(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`Error signing in: ${errorMessage} (${errorCode})`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInWithGoogle = (callback?: (user: User) => void) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopupProvider(provider, callback);
  };

  return { loading, signInWithPassword, signInWithGoogle };
};
