import SwirlingSpinner from '@/components/common/swirling-spinner';
import { useGetMeLazyQuery } from '@/graphql/generated';
import useAuthStore from '@/store/useAuthStore';
import { GeneralError } from '@/views/errors/general-error';
import React, { useEffect } from 'react';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, idToken } = useAuthStore();
  const [getMe, { loading, error }] = useGetMeLazyQuery();

  useEffect(() => {
    if (idToken) {
      getMe().then(({ data }) => {
        if (data && data.me) {
          setUser(data.me);
        }
      });
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

  if (error) {
    return <GeneralError minimal />;
  }

  return children;
}

export default AuthProvider;
