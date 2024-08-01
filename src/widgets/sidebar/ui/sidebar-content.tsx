import { useSidebarContent } from '../model/use-sidebar-content';
import { useSidebarContext } from '../model/use-sidebar-context';
import { PropsWithClassname } from '@/shared/types/react';
import { SIDEBAR_ITEMS } from '../constants';
import { cn } from '@/shared/lib/utils';

export const SidebarContent = (props: PropsWithClassname) => {
  const { expanded } = useSidebarContext();
  const { isActive } = useSidebarContent();

  return (
    <div
      className={cn(
        'h-full transition-all duration-300 ease-in-out border-r border-solid border-input p-4',
        {
          ['w-52']: expanded,
          ['w-20']: !expanded
        },
        props.className
      )}
    >
      <nav className="mt-20">
        {SIDEBAR_ITEMS.map(({ icon, label, href }, idx) => (
          <div
            className={cn('flex items-center w-full rounded-md cursor-pointer', {
              ['space-x-2 px-4 py-2']: expanded,
              ['p-2 justify-center']: !expanded,
              ['bg-secondary text-secondary-foreground']: isActive(href)
            })}
            key={idx}
          >
            {icon}
            {expanded && <span>{label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};
