import { SiteHeader } from '@/components/layouts/site-header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/problems/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title="Manage Problems" />
      <div>Hello "/manage/problems/"!</div>
    </>
  );
}
