import { useUser } from '@/entities/user';
import { PropsWithChildren } from 'react';

export const SignedIn = (props: PropsWithChildren) => {
  const user = useUser((store) => store.user);

  if (user) return props.children;

  return null;
};
