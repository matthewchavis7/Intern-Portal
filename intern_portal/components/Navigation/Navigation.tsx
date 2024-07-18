"use client";

import { createClient } from "@/utils/supabase/client";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { Flex, Grid, TabNav, Text } from "@radix-ui/themes";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
const Links = [
  { href: "/homepage", label: "Home" },
  { href: "/calendar", label: "Calendar" },
  { href: "/pastProjects", label: "Past Projects" },
  //   { href: "/resources", label: "Resources" },
];

const OtherLinks = [
  { href: "/profile", label: <PersonIcon /> },
  { href: "/logout", label: <ExitIcon /> },
];

export function Navigation() {
  const supabase = createClient();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      res.data && setUser(res.data.user);
    });
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ml-54">
        <Link href="/">
          <div className="text-blue-600">
            <Image
              alt="Akima Logo"
              src="/Akima_Logo.png"
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-2">
          {Links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <div className={pathname === href ? "font-bold" : ""}>
                  {label}
                </div>
              </Link>
            </li>
          ))}
          <li className="relative z-10">
            <details>
              <summary>Resources</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link href="/general">General</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/login">Sign In</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
