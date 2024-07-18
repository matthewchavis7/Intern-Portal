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
  { href: "/home", label: "Home" },
  { href: "/projects", label: "My Projects" },
  { href: "/organizations", label: "Organizations" },
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
        <a className=" text-blue-600">
          <Image
            alt="Akima Logo"
            src="/Akima_Logo.png"
            width={200}
            height={200}
          />
        </a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-2">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Calendar</a>
          </li>
          <li>
            <a>Past Projects</a>
          </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link</a>
                </li>
                <li>
                  <a>Link</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Sign In</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
