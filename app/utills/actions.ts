'use server'

import { createClientForServer } from '@/app/utills/supabase/server'
import { redirect } from 'next/navigation'

// Define the expected Provider type if not already defined
type Provider = 'google' | 'github';

type FormData = Map<string, string | FormDataEntryValue>;

interface AuthResponse {
  success: string | null;
  error: string | null;
}

const signInWith = (provider: Provider) => async (): Promise<void> => {
  const supabase = await createClientForServer()

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: auth_callback_url,
      },
    })

    if (error) {
      console.error('Authentication error:', error.message)
      throw error
    }

    if (!data?.url) {
      throw new Error('No redirect URL received from Supabase')
    }

    redirect(data.url)
  } catch (error) {
    console.error('Failed to sign in:', error)
    throw error
  }
}

const signinWithGoogle = signInWith('google')
const signinWithGithub = signInWith('github')

const signOut = async (): Promise<void> => {
  const supabase = await createClientForServer()
  await supabase.auth.signOut()
}

const signupWithEmailPassword = async (prev: unknown, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  if (!email || !password) {
    return { success: null, error: 'Email and password are required' };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.log('error', error)
    return {
      success: null,
      error: error.message,
    }
  }

  return {
    success: 'Please check your email',
    error: null,
  }
}

const signinWithEmailPassword = async (prev: unknown, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  if (!email || !password) {
    return { success: null, error: 'Email and password are required' };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.log('error', error)
    return {
      success: null,
      error: error.message,
    }
  }

  redirect('/')
}

const sendResetPasswordEmail = async (prev: unknown, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const email = formData.get('email') as string | null;

  if (!email) {
    return { success: null, error: 'Email is required' };
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(
    email,
  )

  if (error) {
    console.log('error', error)

    return {
      success: '',
      error: error.message,
    }
  }

  return {
    success: 'Please check your email',
    error: '',
  }
}

const updatePassword = async (prev: unknown, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const password = formData.get('password') as string | null;

  if (!password) {
    return { success: null, error: 'Password is required' };
  }

  const { data, error } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    console.log('error', error)

    return {
      success: '',
      error: error.message,
    }
  }

  return {
    success: 'Password updated',
    error: '',
  }
}

const signinWithMagicLink = async (prev: unknown, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const email = formData.get('email') as string | null;

  if (!email) {
    return { success: null, error: 'Email is required' };
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
  })

  if (error) {
    console.log('error', error)

    return {
      success: null,
      error: error.message,
    }
  }

  return {
    success: 'Please check your email',
    error: null,
  }
}

const signinWithOtp = async (prev: unknown, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const email = formData.get('email') as string | null;

  if (!email) {
    return { success: null, error: 'Email is required' };
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
  })

  if (error) {
    console.log('error', error)

    return {
      success: null,
      error: error.message,
    }
  }

  redirect(`/verify-otp?email=${email}`)
  return { success: 'OTP sent successfully', error: null }
}

const verifyOtp = async (prev: { email: string }, formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClientForServer()

  const token = formData.get('token') as string | null;

  if (!token) {
    return { success: null, error: 'Token is required' };
  }

  const { data, error } = await supabase.auth.verifyOtp({
    token,
    email: prev.email,
    type: 'email',
  })

  if (error) {
    console.log('error', error)

    return {
      success: null,
      error: error.message,
    }
  }

  redirect('/')
  return { success: 'Successfully verified', error: null }
}

export {
  signinWithGoogle,
  signOut,
  signupWithEmailPassword,
  signinWithGithub,
  signinWithEmailPassword,
  sendResetPasswordEmail,
  updatePassword,
  signinWithMagicLink,
  signinWithOtp,
  verifyOtp,
}
