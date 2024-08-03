import { useUser } from '@/entities/user';

export const useSignOut = () => {
  const resetUser = useUser((store) => store.resetUser);

  const signOut = () => {
    resetUser();
  };

  return {
    signOut
  };
};
