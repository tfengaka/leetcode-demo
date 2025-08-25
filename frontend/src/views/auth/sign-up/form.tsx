import { PasswordInput } from '@/components/common/password-input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignUpMutation } from '@/graphql/generated';
import { cn } from '@/lib/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconBrandGoogleFilled, IconBrandWindowsFilled } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as yup from 'yup';

const formSchema = yup
  .object()
  .shape({
    email: yup.string().required(),
    display_name: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required(),
  })
  .required();

export default function SignUpForm({ className, ...props }: React.HTMLAttributes<HTMLFormElement>) {
  const navigate = useNavigate();
  const [signUp, { loading }] = useSignUpMutation();

  const form = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: '',
      display_name: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: yup.InferType<typeof formSchema>) {
    signUp({
      variables: {
        form: {
          email: data.email,
          display_name: data.display_name,
          password: data.password,
        },
      },
    })
      .then(() => {
        toast.success('Account created successfully! Please check your email to verify your account.');
        navigate({ to: '/sign-in' });
      })
      .catch((error) => {
        if (error.message.includes('email already exists')) {
          toast.error('An account with this email already exists.');
        } else {
          toast.error('An error occurred while creating your account. Please try again later.');
        }
      });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('grid gap-3', className)} {...props}>
        <FormField
          control={form.control}
          name="display_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2" disabled={loading}>
          Create Account
        </Button>
      </form>
    </Form>
  );
}
