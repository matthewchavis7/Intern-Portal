"use client";

import { createClient } from "@/utils/supabase/client";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { Flex, Grid, TabNav, Text } from "@radix-ui/themes";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    <Grid rows="1" columns="2">
      <Flex asChild>
        <TabNav.Root>
          {Links.map(({ href, label }) => (
            <TabNav.Link key={href} asChild active={pathname.startsWith(href)}>
              <Link href={href}>{label}</Link>
            </TabNav.Link>
          ))}
        </TabNav.Root>
      </Flex>
      <Flex asChild justify="end" align="center">
        <TabNav.Root>
          {user && <Text>Welcome back, {user.email}</Text>}
          {OtherLinks.map(({ href, label }) => (
            <TabNav.Link key={href} asChild active={pathname.startsWith(href)}>
              <Link href={href}>{label}</Link>
            </TabNav.Link>
          ))}
        </TabNav.Root>
      </Flex>
    </Grid>
  );
}
