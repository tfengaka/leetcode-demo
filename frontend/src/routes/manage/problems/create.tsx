import CreateProblemView from '@/views/manage/problems/create-view';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage/problems/create')({
  component: CreateProblemView,
});
