import { useMemo, useState } from 'react';

type Props = {
  expanded?: boolean;
};

export const useSidebar = ({ expanded: initialValue }: Props = {}) => {
  const [expanded, setExpanded] = useState<boolean>(initialValue || true);

  const value = useMemo(
    () => ({
      expanded,
      setExpanded
    }),
    [expanded]
  );

  return { value };
};
