import ManageAppLayout from '@/components/layouts/manage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/manage')({
  component: ManageAppLayout,
});
