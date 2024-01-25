"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const Login: React.FC = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const router = useRouter();

  async function signInWithEmail() {
    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter an email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Please enter a valid password");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      // Handle the sign-in error (e.g., display an error message)
      console.error("Sign-in error:", error.message);
    } else {
      // Sign-in was successful, navigate to "/"
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="flex flex-col items-start space-y-5">
        <div className="text-5xl">Login</div>
        <div className="flex flex-col">
          <input
            value={email}
            placeholder="Enter your email"
            onChange={(ev) => setEmail(ev.target.value)}
            className="p-2 border-black border-2 rounded-md w-80"
          />
          <label className="text-red-600 text-sm">{emailError}</label>
        </div>
        <div className="flex flex-col">
          <input
            value={password}
            type="password"
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="p-2 border-black border-2 rounded-md w-80"
          />
          <label className="text-sm text-red-600">{passwordError}</label>
        </div>
        <div>
          <input
            className="p-2 bg-blue-500 text-white rounded-md w-24"
            type="button"
            onClick={signInWithEmail}
            value={"Log in"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
