import { Children, FunctionComponent, isValidElement, ReactNode } from 'react';

export const useAcceptableChildrens = (children: ReactNode, acceptableChildrens: string[]) => {
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const type = child.type as FunctionComponent<unknown>;

      if (!acceptableChildrens.includes(type.displayName!)) {
        throw new Error(`Element must contain only ${acceptableChildrens.join(' and ')}`);
      }
    }
  });
};
