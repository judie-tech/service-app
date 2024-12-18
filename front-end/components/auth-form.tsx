"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate or register the user
    if (isLogin) {
      console.log("Logging in with:", { email, password });
    } else {
      console.log("Signing up with:", { name, email, password });
    }
    toast({
      title: isLogin ? "Logged in successfully!" : "Signed up successfully!",
      duration: 3000,
    });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      {!isLogin && (
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        {isLogin ? "Log In" : "Sign Up"}
      </Button>
      <p className="text-center">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setName("");
          }}
          className="text-purple-600 hover:underline"
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </p>
    </form>
  );
}
