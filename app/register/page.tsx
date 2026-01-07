"use client";
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
import { HyperText } from "@/components/ui/hyper-text";
import { useRouter } from "next/navigation";
import { config } from "../config";
import { useState } from "react";
import axios from "axios";


function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [ sucess, setSuccess ] = useState("");
  const [ error, SetError ] = useState("");


  const handeRegister = async () => {
    console.log("Form Submitted ::: ", formData);
    try {
      
    } catch (error) {
      
    }
    
  };

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const router = useRouter();
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <Card className="relative w-87.5 overflow-hidden">
        <CardHeader>
          <CardTitle>
            <HyperText>Rgister</HyperText>
          </CardTitle>
          <CardDescription>
            Enter required credentials to register yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Name</Label>
                <Input id="fullName" type="text" value={formData.fullName} onChange={handleChange}  placeholder="Enter your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={() => {
              router.push("/login");
            }}
            className="cursor-pointer"
            variant="outline"
          >
            Login
          </Button>
          <Button onClick={handeRegister} className="cursor-pointer">Register</Button>
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

export default RegisterForm;
