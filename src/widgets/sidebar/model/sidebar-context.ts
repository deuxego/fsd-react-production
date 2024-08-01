import { createContext, Dispatch, SetStateAction } from 'react';

type SidebarContext = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
};

export const sidebarContext = createContext({} as SidebarContext);
