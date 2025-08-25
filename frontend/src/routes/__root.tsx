import AppView from '@/views';
import { GeneralError } from '@/views/errors/general-error';
import { NotFoundError } from '@/views/errors/not-found-error';
import { createRootRouteWithContext } from '@tanstack/react-router';

export const Route = createRootRouteWithContext()({
  component: AppView,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
});
