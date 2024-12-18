import AuthForm from '@/components/auth-form'

export default function AuthPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Log In or Sign Up</h1>
      <AuthForm />
    </div>
  )
}

