import { SiteHeader } from '@/components/layouts/site-header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/submissions/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title="Manage Submissions" />
      <div>Hello "/manage/submissions/"!</div>
    </>
  );
}
