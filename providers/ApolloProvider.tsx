"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloclient } from "@/utils/apollo";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function GqlProvider({ children }: Props) {
  return <ApolloProvider client={apolloclient}>{children}</ApolloProvider>;
}
