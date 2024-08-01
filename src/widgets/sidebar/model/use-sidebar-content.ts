import { usePathname } from 'wouter/use-browser-location';

export const useSidebarContent = () => {
  const path = usePathname();

  const isActive = (href: string) => {
    return href === path;
  };

  return { isActive };
};
