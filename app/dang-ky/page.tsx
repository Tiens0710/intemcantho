"use client";

import RegisterModal from "@/components/RegisterModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <RegisterModal
      open={open}
      onClose={() => {
        setOpen(false);
        router.push("/");
      }}
    />
  );
}