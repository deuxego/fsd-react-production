import { useUser } from '@/entities/user';
import { PropsWithChildren, useEffect, useState } from 'react';

export const Loaders = (props: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);

  const userLoader = useUser((store) => store.loadUser);

  useEffect(() => {
    Promise.all([userLoader()]).then(() => setIsLoading(false));
  }, [userLoader]);

  if (isLoading) return null;

  return props.children;
};
