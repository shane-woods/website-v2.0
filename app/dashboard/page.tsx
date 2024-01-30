"use client";
import React from "react";
import { createBrowserClient } from "@supabase/ssr";
import Link from "next/link";
import SignOut from "../components/signout";
import DashHeader from "../components/dashheader";

type DashlinkProp = {
  text: string;
  path: string;
};

const Dashboard = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return (
    <div>
      <DashHeader />
      <div className="flex flex-col space-y-3 items-center justify-start min-h-screen">
        <DashLink text="Add a Book 📚" path="addbook" />
        <DashLink text="Delete a Book 📚" path="deletebook" />
        <DashLink text="Update a Book 📚" path="updatebook" />
      </div>
    </div>
  );
};

const DashLink = (prop: DashlinkProp) => {
  return (
    <Link href={`/dashboard/${prop.path}`}>
      <div className="border-2 bg-gray-200 hover:bg-gray-100 p-5 text-5xl border-black rounded-lg">
        {prop.text}
      </div>
    </Link>
  );
};

export default Dashboard;
