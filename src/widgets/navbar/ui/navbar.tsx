import { SignedIn, SignedOut, SignOutButton } from '@/features/auth';
import { PropsWithClassname } from '@/shared/types/react';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib/utils';
import { Link } from 'wouter';

export const Navbar = (props: PropsWithClassname) => {
  return (
    <div
      className={cn(
        'h-[var(--navbar-height)] w-full flex items-center justify-between border-b border-solid border-input px-2 gap-4',
        props.className
      )}
    >
      <div></div>

      <div>
        <SignedIn>
          <SignOutButton />
        </SignedIn>

        <SignedOut>
          <div className='flex items-center space-x-2'>
            <Link href={ROUTES.SIGN_UP}>
              <Button variant={'outline'}>Sign Up</Button>
            </Link>
            <Link href={ROUTES.SIGN_IN}>
              <Button>Sign In</Button>
            </Link>
          </div>
        </SignedOut>

      </div>
    </div>
  );
};
