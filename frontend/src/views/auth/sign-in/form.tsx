import { PasswordInput } from '@/components/common/password-input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSyncSocialAccountMutation } from '@/graphql';
import { useFirebaseAuthAction } from '@/hooks/useFirebaseAuth';
import { firebaseAuth } from '@/lib/firebase';
import { cn } from '@/lib/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconBrandGoogleFilled, IconBrandWindowsFilled } from '@tabler/icons-react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const formSchema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().min(8).required(),
  })
  .required();

export default function SignInForm({ className, ...props }: React.HTMLAttributes<HTMLFormElement>) {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/_auth/sign-in' });
  const { loading, signInWithPassword, signInWithGoogle } = useFirebaseAuthAction(firebaseAuth);
  const [syncSocialAccount] = useSyncSocialAccountMutation();

  const form = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  function onSubmit(data: yup.InferType<typeof formSchema>) {
    signInWithPassword(data.email, data.password, () => {
      navigate({ to: searchParams?.redirect || '/' });
    });
  }

  const onSignInWithGoogle = () => {
    signInWithGoogle(async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken();
          await syncSocialAccount({
            variables: { form: { token: idToken } },
          });
          navigate({ to: '/' });
        } catch (error) {
          console.error('Error syncing social account:', error);
        }
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('grid gap-3', className)} {...props}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2" type="submit" disabled={loading}>
          Login
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" type="button" disabled={loading} onClick={onSignInWithGoogle}>
            <IconBrandGoogleFilled className="size-4" /> Google
          </Button>
          <Button variant="outline" type="button" disabled>
            <IconBrandWindowsFilled className="size-4" />
            <div className="flex flex-col gap-0 leading-tight">
              <p>{'Microsoft'}</p>
              <p>{'(Coming soon)'}</p>
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}
