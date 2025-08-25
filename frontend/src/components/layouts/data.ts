import { NavGroup } from '@/types/common.type';
import { IconBook, IconClipboardData, IconLayoutDashboard, IconUsers } from '@tabler/icons-react';

export const manageSidebarNav: NavGroup[] = [
  {
    title: 'General',
    items: [
      {
        title: 'Dashboard',
        url: '/manage/dashboard',
        icon: IconLayoutDashboard,
      },
      {
        title: 'Problems',
        url: '/manage/problems',
        icon: IconBook,
      },
      {
        title: 'Submissions',
        url: '/manage/submissions',
        icon: IconClipboardData,
      },
      {
        title: 'Users',
        url: '/manage/users',
        icon: IconUsers,
      },
    ],
  },
];
