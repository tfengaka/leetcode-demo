import { SiteHeader } from '@/components/layouts/site-header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title="Dashboard" />
      <div>Hello "/manage/dashboard/"!</div>
    </>
  );
}
