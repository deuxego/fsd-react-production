import { PropsWithClassname } from '@/shared/types/react';
import { useSignOut } from '../model/use-sign-out';
import { Button } from '@/shared/ui/button';

export const SignOutButton = (props: PropsWithClassname) => {
  const { signOut } = useSignOut();

  return (
    <Button variant={'outline'} className={props.className} onClick={signOut}>
      Sign Out
    </Button>
  );
};
