'use client';

import AuthForm from '@/components/auth/AuthForm';
import PageHeader from '@/components/common/PageHeader';

export default function LoginPage() {
  return (
    <>
      <PageHeader
        title="Account Access"
        subtitle="Securely access your DXA Group account."
        description="Log in to manage your services and view project updates, or create a new account to get started with us."
      />
      <AuthForm />
    </>
  );
} 