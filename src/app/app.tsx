import { Loaders } from './_loaders';
import { Providers } from './_providers';
import { Routes } from './_routes';
import './_styles/globals.css';
import './_configs';

export const App = () => {
  return (
    <Providers>
      <Loaders>
        <Routes />
      </Loaders>
    </Providers>
  );
};
