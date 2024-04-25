"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
export default function EmailRegisterForm() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending a request to your backend
    setEmail("");
    // You can also redirect the user to another page after successful registration
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full items-center space-x-4 align-bottom">
        <Input
          type="email"
          value={email}
          className="bg-white"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email của bạn *"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit(e);
          }}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="bg-main uppercase"
        >
          Đăng ký
        </Button>
      </div>
    </form>
  );
}
