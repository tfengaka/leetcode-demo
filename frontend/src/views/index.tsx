import { NavigationProgress } from '@/components/common/navigation-progress';
import { Toaster } from '@/components/ui/sonner';
import { useApolloWithAuth } from '@/hooks/useApolloClient';
import AuthProvider from '@/providers/auth-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { ApolloProvider } from '@apollo/client';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export default function AppView() {
  const { client } = useApolloWithAuth();
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider>
          <NavigationProgress />
          <Outlet />
          <Toaster richColors duration={3000} />
          {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools position="bottom-right" />}
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
