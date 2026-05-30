"use client";

import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <ForgotPasswordModal
      open={open}
      onClose={() => {
        setOpen(false);
        router.push("/");
      }}
    />
  );
}