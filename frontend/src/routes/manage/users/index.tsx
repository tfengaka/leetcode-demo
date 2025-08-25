import { SiteHeader } from '@/components/layouts/site-header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title="Manage Users" />
      <div>Hello "/manage/users/"!</div>
    </>
  );
}
