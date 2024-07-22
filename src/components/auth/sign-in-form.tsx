'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Eye as EyeIcon } from '@phosphor-icons/react';
import { EyeSlash as EyeSlashIcon } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { useUser } from '@/hooks/use-user';
import Box from '@mui/material/Box';

// Validation schema using zod
const schema = zod.object({
  email: zod.string().min(1, { message: 'Email is required' }).email(),
  password: zod.string().min(1, { message: 'Password is required' }),
});

type Values = zod.infer<typeof schema>;

const defaultValues: Values = { email: '', password: '' };

export function SignInForm(): React.JSX.Element {
  const router = useRouter();
  const { checkSession } = useUser();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);
      const { error } = await authClient.signInWithPassword(values);

      if (error) {
        setError('root', { type: 'server', message: error });
        setIsPending(false);
        return;
      }

      // Refresh the auth state
      await checkSession?.();
      router.refresh();
    },
    [checkSession, router, setError]
  );

  return (
    <Stack spacing={4}>
      <Typography variant="h4" sx={{ color: 'text.primary' }}>Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)} fullWidth>
                <InputLabel htmlFor="email" sx={{ color: 'text.primary' }}>Email address</InputLabel>
                <OutlinedInput
                  id="email"
                  {...field}
                  label="Email address"
                  type="email"
                  sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' } }}
                />
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)} fullWidth>
                <InputLabel htmlFor="password" sx={{ color: 'text.primary' }}>Password</InputLabel>
                <OutlinedInput
                  id="password"
                  {...field}
                  endAdornment={
                    showPassword ? (
                      <EyeIcon
                        cursor="pointer"
                        fontSize="inherit"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <EyeSlashIcon
                        cursor="pointer"
                        fontSize="inherit"
                        onClick={() => setShowPassword(true)}
                      />
                    )
                  }
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' } }}
                />
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Link component={RouterLink} href={paths.auth.resetPassword} variant="subtitle2" sx={{ color: 'primary.main' }}>
            Forgot password?
          </Link>
          {errors.root && <Alert severity="error">{errors.root.message}</Alert>}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
            type="submit"
            variant="contained"
            disabled={isPending}
          >
            Login
          </Button>
          <Box textAlign="center">
            <Typography variant="body2" sx={{ color: 'primary.main' }}>OR</Typography>
          </Box>
          <Button
            component={RouterLink}
            href={paths.auth.signUp}
            fullWidth
            size="large"
            sx={{ mt: 1, color: 'primary.main', borderColor: 'primary.main', '&:hover': { borderColor: 'primary.dark', color: 'primary.dark' } }}
            variant="outlined"
          >
            Register
          </Button>
        </Stack>
      </form>
      <Alert severity="warning">
        Use{' '}
        <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
          sofia@devias.io
        </Typography>{' '}
        with password{' '}
        <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
          Secret1
        </Typography>
      </Alert>
    </Stack>
  );
}
