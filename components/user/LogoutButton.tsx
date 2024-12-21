"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <Button
      variant="ghost"
      onClick={() =>
        signOut({
          callbackUrl: "/auth/signin",
          redirect: true,
        })
      }
      className="flex items-center gap-2 w-full p-2"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
}
