import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  container?: Element | DocumentFragment;
};

export const Portal = ({ children, container = document.body }: PropsWithChildren<Props>) => {
  return createPortal(children, container);
};
