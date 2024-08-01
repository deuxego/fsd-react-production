import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { Link } from 'wouter';

export const Navbar = () => {
  return (
    <div className="h-[var(--navbar-height)] w-full flex items-center border-b border-solid border-input px-2 gap-4">
      <Link href={ROUTES.HOME}>
        <Button variant={'link'}>Home</Button>
      </Link>
    </div>
  );
};
