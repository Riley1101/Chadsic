"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type Props = Readonly<{
  children: React.ReactNode;
}>;

function NextAuthSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthSessionProvider;
