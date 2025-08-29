import { SignInView } from '@/views/auth/sign-in';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/sign-in')({
  validateSearch: (search: Record<string, string>) => {
    if (search.redirect && typeof search.redirect !== 'string') {
      return { redirect: '/' };
    }
    return { redirect: search.redirect };
  },
  component: SignInView,
});
