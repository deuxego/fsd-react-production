import { useSidebarContext } from '../model/use-sidebar-context';
import { PropsWithClassname } from '@/shared/types/react';
import { Button } from '@/shared/ui/button';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

export const SidebarToggle = (props: PropsWithClassname) => {
  const { expanded, setExpanded } = useSidebarContext();

  return (
    <Button
      size={'icon'}
      variant={'outline'}
      onClick={() => setExpanded((prev) => !prev)}
      className={cn('bg-popover', props.className)}
    >
      <ChevronLeft
        className={cn('h-4 w-4 transition-transform ease-in-out duration-500', {
          ['rotate-180']: !expanded
        })}
      />
    </Button>
  );
};
