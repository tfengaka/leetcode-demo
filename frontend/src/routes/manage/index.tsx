import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigate to="/manage/dashboard" />;
}
