"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function Footer() {
  const { data: session } = useSession();
  return <>{session && <div className="w-full p-6"> </div>}</>;
}
