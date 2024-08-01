import { sidebarContext } from '../model/sidebar-context';
import { SidebarContent } from './sidebar-content';
import { useSidebar } from '../model/use-sidebar';
import { SidebarToggle } from './sidebar-toggle';
import { ReactNode } from 'react';

type Props = {
  action?: ReactNode;
};

export const Sidebar = ({ action }: Props) => {
  const { value } = useSidebar();

  return (
    <sidebarContext.Provider value={value}>
      <aside className="h-screen relative">
        <SidebarToggle className="absolute top-2 right-0 translate-x-1/2" />
        <SidebarContent />
        {action}
      </aside>
    </sidebarContext.Provider>
  );
};
