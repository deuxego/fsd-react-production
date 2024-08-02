import { useMemo, useState } from 'react';

type Props = {
  opened?: boolean;
};

export const useDialogProvider = ({ opened: initialValue }: Props) => {
  const [opened, setOpened] = useState<boolean>(initialValue || false);

  const value = useMemo(
    () => ({
      opened,
      setOpened
    }),
    [opened]
  );

  return { value };
};
