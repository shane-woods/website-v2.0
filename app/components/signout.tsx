"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut: React.FC = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      <button
        className="border border-black rounded-md bg-blue-400 p-2"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
