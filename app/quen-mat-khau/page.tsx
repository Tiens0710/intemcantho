"use client";

import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import { useRouter } from "next/navigation";
import { useState, Suspense } from "react";

function ForgotPasswordContent() {
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

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E6792A]"></div>
      </div>
    }>
      <ForgotPasswordContent />
    </Suspense>
  );
}