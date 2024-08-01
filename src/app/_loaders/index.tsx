import { PropsWithChildren, useEffect, useState } from 'react';

export const Loaders = (props: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is where your store loaders are located
    Promise.all([]).then(() => setIsLoading(false));
  }, []);

  if (isLoading) return null;

  return props.children;
};
