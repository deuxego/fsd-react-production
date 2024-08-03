import { navigate } from 'wouter/use-browser-location';
import { ROUTES } from '@/shared/constants/routes';
import { useForm } from '../model/use-form';
import { Button } from '@/shared/ui/button';
import { useUser } from '@/entities/user';
import { Input } from '@/shared/ui/input';
import { Link } from 'wouter';

type FormData = {
  username: string;
  password: string;
};

export const SignUpForm = () => {
  const createUser = useUser((store) => store.createUser);

  const { isLoading, formData, setFormData, handleSubmit } = useForm<FormData>(
    async (formData) => {
      const user = await createUser({
        id: Date.now(),
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
        <h3 className="text-2xl">Register</h3>
        <p className="text-sm text-muted-foreground max-w-64">
          Enter your username and password to create your account
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="username" className="text-sm text-bold">
          Username
        </label>
        <Input
          value={formData.username}
          onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
          id="username"
          placeholder="username"
          className="w-72"
          autoComplete="name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm text-bold">
          Password
        </label>
        <Input
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          id="password"
          className="w-72"
          type="password"
          autoComplete="new-password"
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        Sign Up
      </Button>

      <div className="text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href={ROUTES.SIGN_IN} className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
};
