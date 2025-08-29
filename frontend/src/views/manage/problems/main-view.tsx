import { MainContent } from '@/components/layouts/main-content';
import { SiteHeader } from '@/components/layouts/site-header';
import { Button } from '@/components/ui/button';
import { IconPlus } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';
import ProblemList from './components/problem-list';
import StatisticCard from './components/statistic-card';

export default function ProblemMainView() {
  const navigate = useNavigate();

  return (
    <>
      <SiteHeader />
      <MainContent>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Problems</h2>
            <p className="text-muted-foreground">
              Manage the problems available in the system. You can create, edit, or delete problems as needed.
            </p>
          </div>
          <Button className="space-x-1 cursor-pointer" onClick={() => navigate({ to: '/manage/problems/create' })}>
            <span>Create</span> <IconPlus size={18} />
          </Button>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          {/* <StatisticCard /> */}
          <ProblemList />
        </div>
      </MainContent>
    </>
  );
}
