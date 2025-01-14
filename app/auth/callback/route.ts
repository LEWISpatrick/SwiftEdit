import { NextResponse } from 'next/server'
import { createClientForServer } from '@/app/utills/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = await createClientForServer()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Auth error:', error)
      return NextResponse.redirect(`${process.env.SITE_URL}/auth/auth-code-error`)
    }

    return NextResponse.redirect(`${process.env.SITE_URL}${next}`)
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${process.env.SITE_URL}/auth/auth-code-error`)
}