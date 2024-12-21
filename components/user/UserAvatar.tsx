"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { LogoutButton } from "./LogoutButton";

export default function UserAvatar() {
  const { data: session } = useSession();
  const [initials, setInitials] = useState<string | null>(null);
  useEffect(() => {
    const getInitials = (name: string) => {
      const [firstName, lastName] = name.split(" ");

      if (firstName && lastName) {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`;
      } else {
        return `${name.charAt(0)}${name.charAt(1)}`;
      }
    };
    if (session?.user?.name) {
      setInitials(getInitials(session.user.name));
    } else {
      setInitials("");
    }
  }, [session]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="border-accent border-2 hover:border-foreground rounded-full">
            <Avatar className="w-14 h-14">
              <AvatarImage
                src={session?.user?.image || "/profile-default.png"}
                alt={`${session?.user?.name} profile picture`}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="flex flex-col items-start gap-1">
            <span className="text-lg text-primary">{session?.user?.name}</span>
            <span className="font-thin text-xs text-accent-foreground/60">{session?.user?.email}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-0">
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
