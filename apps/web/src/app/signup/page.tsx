import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@fakestore/ui/components/card"
import SignUpForm from "./_components/signup-form"

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen grid place-content-center -mt-7">
        <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
    </main>
  )
}
