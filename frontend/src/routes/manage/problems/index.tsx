import ProblemMainView from '@/views/manage/problems/main-view';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/problems/')({
  component: ProblemMainView,
});
