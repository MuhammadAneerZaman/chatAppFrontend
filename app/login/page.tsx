"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/ui/border-beam"; 
import { HyperText } from "@/components/ui/hyper-text"
import { useRouter } from "next/navigation"

function LoginForm() {
  const router = useRouter();
  return (
    <div className=" h-screen w-screen flex justify-center items-center" >
    <Card className="relative w-87.5 overflow-hidden">
      <CardHeader>
        <CardTitle><HyperText>Log In</HyperText></CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={()=>{ router.push("/register") }} className=" cursor-pointer" variant="outline">Register</Button>
        <Button className="cursor-pointer" >Login</Button>
      </CardFooter>
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className="from-transparent via-green-500 to-transparent"
      />
    </Card>
    </div>
  );
}

export default LoginForm;