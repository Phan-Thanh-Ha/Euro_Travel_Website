"use client";
import React, { useReducer, ReactNode } from "react";
import { logger } from "./logger";
import Context from "@/store/context";
import { initState, reducer } from "@/store/reducer";

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
