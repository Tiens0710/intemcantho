"use client";

import LoginModal from "@/components/LoginModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <LoginModal
      open={open}
      onClose={() => {
        setOpen(false);
        router.push("/");
      }}
      onLoginSuccess={() => {
        router.push("/tai-khoan");
      }}
    />
  );
}