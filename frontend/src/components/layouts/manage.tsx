import { Role } from '@/enum/common.enum';
import { cn } from '@/lib/utils';
import { LayoutProvider } from '@/providers/layout-provider';
import useAuthStore from '@/store/useAuthStore';
import { IconCode } from '@tabler/icons-react';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { SidebarContent, SidebarHeader, SidebarInset, SidebarProvider } from '../ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { manageSidebarNav } from './data';
import { NavGroup } from './nav-group';

export default function ManageAppLayout() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user && ![Role.Teacher, Role.Admin].includes(user.role as Role)) {
      navigate({ to: '/403' });
    }
  }, [user]);

  return (
    <SidebarProvider defaultOpen={true}>
      <LayoutProvider>
        <AppSidebar>
          <SidebarHeader className="flex flex-row items-center gap-2">
            <IconCode className="size-8" />
            <p className="font-bold text-xl group-data-[collapsible=icon]:hidden">Judge0</p>
          </SidebarHeader>
          <SidebarContent>
            {manageSidebarNav.map((props) => (
              <NavGroup key={props.title} {...props} />
            ))}
          </SidebarContent>
        </AppSidebar>
        <SidebarInset
          className={cn(
            'has-[[data-layout=fixed]]:h-svh',
            'peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]',
            '@container/content !shadow-none !rounded-lg border border-stroke/10 p-2'
          )}
        >
          <Outlet />
        </SidebarInset>
      </LayoutProvider>
    </SidebarProvider>
  );
}
