'use client'

import { CardWrapper } from '@/components/auth/card-wrapper'

export default function Page() {

  return (
    <CardWrapper
      headerTitle="Register"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocial
    >
      <div></div>
    </CardWrapper>
  )
}
