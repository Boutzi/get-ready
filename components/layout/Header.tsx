"use client";
import React from "react";
import UserAvatar from "../user/UserAvatar";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className="w-full px-4 py-3 flex items-center justify-between">
          <span className="font-thin font-mono text-2xl text-primary mb-4">{"getReady()"}</span>
          <UserAvatar />
        </div>
      )}
    </>
  );
}
