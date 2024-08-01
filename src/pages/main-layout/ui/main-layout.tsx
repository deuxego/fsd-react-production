import { Sidebar } from '@/widgets/sidebar';
import { Navbar } from '@/widgets/navbar';
import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='h-screen w-full'>
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};
