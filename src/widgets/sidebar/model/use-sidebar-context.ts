import { useContext } from 'react';
import { sidebarContext } from './sidebar-context';

export const useSidebarContext = () => useContext(sidebarContext);
