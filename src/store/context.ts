"use client";
import { createContext } from "react";

interface ContextType {
  // Define the shape of your context here
  // For example:
  // value: number;
  // setValue: (value: number) => void;
}

const Context = createContext<ContextType | null>(null);

export default Context;
