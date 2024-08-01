import { Navbar } from '@/widgets/navbar/ui/navbar';
import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};
