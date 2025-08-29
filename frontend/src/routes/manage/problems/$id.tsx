import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/problems/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/manage/problems/$id"!</div>;
}
