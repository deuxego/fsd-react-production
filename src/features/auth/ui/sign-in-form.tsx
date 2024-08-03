import { navigate } from 'wouter/use-browser-location';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { useUser } from '@/entities/user';
import { Input } from '@/shared/ui/input';
import { Link } from 'wouter';
import { useForm } from '../model/use-form';

type FormData = {
  username: string;
  password: string;
};

export const SignInForm = () => {
  const getUser = useUser((store) => store.getUser);

  const { isLoading, formData, setFormData, handleSubmit } = useForm<FormData>(
    async (formData) => {
      const user = await getUser({
        ...formData
      });

      if (user) {
        navigate(ROUTES.HOME);
      }
    },
    { username: '', password: '' }
  );

  return (
    <form className="flex flex-col space-y-8 py-6 px-16 border rounded-md" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h3 className="text-2xl">Login</h3>
        <p className="text-sm text-muted-foreground max-w-64">
          Enter your username and password to login to your account
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="username" className="text-sm text-bold">
          Username
        </label>
        <Input
          id="username"
          placeholder="username"
          className="w-72"
          value={formData.username}
          onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm text-bold">
          Password
        </label>
        <Input
          id="password"
          className="w-72"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        Sign In
      </Button>

      <div className="text-sm text-muted-foreground">
        Don't have an account yet?{' '}
        <Link href={ROUTES.SIGN_UP} className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </form>
  );
};
