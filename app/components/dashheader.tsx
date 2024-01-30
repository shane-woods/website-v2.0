"use client";
import React from "react";
import SignOut from "./signout";
import Link from "next/link";

const DashHeader = () => {
  return (
    <div className="flex justify-between p-4 text-lg">
      <Link href="/dashboard">Dashboard</Link>
      <SignOut />
    </div>
  );
};

export default DashHeader;
