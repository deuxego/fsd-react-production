import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/lib/utils';
import { PropsWithClassname } from '@/shared/types/react';
import { Button } from '@/shared/ui/button';
import { Link } from 'wouter';

export const Navbar = (props: PropsWithClassname) => {
  return (
    <div
      className={cn(
        'h-[var(--navbar-height)] w-full flex items-center border-b border-solid border-input px-2 gap-4',
        props.className
      )}
    >
      <Link href={ROUTES.HOME}>
        <Button variant={'link'}>Home</Button>
      </Link>
    </div>
  );
};
