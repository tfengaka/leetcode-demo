import { Role } from '@/enum/common.enum';
import useAuthStore from '@/store/useAuthStore';
import { createFileRoute, Outlet, useNavigate, useParams, useSearch } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
});

function AuthLayout() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/_auth/sign-in' });
  const { user, loading } = useAuthStore();

  useEffect(() => {
    console.log(user);
    if (user && !loading) {
      navigate({
        to: searchParams.redirect
          ? searchParams.redirect
          : [Role.Teacher, Role.Admin].includes(user.role as Role)
            ? '/manage/dashboard'
            : '/',
      });
    }
  }, [user, loading]);

  return (
    <div className="container grid h-svh max-w-none items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        <Outlet />
      </div>
    </div>
  );
}
