import { MainContent } from '@/components/layouts/main-content';
import { SiteHeader } from '@/components/layouts/site-header';
import CreateProblemForm from './components/create-form';

export default function CreateProblemView() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <CreateProblemForm />
      </MainContent>
    </>
  );
}
