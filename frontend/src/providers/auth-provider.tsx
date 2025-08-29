import SwirlingSpinner from '@/components/common/swirling-spinner';
import { useGetMeLazyQuery } from '@/graphql';
import useAuthStore from '@/store/useAuthStore';
import React, { useEffect } from 'react';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, idToken, setLoading, loading } = useAuthStore();
  const [getMe] = useGetMeLazyQuery();

  useEffect(() => {
    if (idToken) {
      getMe()
        .then(({ data }) => {
          if (data && data.me) {
            setUser(data.me);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [idToken]);

  if (loading)
    return (
      <div className="h-svh">
        <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
          <SwirlingSpinner className="text-primary" />
          <p className="text-muted-foreground text-center">Please wait a moment</p>
        </div>
      </div>
    );

  return children;
}

export default AuthProvider;
