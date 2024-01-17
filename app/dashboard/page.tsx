"use client";
import React from "react";
import { createBrowserClient } from "@supabase/ssr";
import Link from "next/link";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/dashboard/addbook">
        <div className="border-2 bg-gray-200 hover:bg-gray-100 p-5 text-5xl border-black rounded-lg">
          Add a Book 📚
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
