"use client";
import { GlobalContext } from "@/store";
import { useContext } from "react";

export default function useGlobalState() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  const [state, dispatch2] = context;

  return [state, dispatch2];
}
