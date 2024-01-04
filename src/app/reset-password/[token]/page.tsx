"use client";

import AuthForm from "@/components/AuthForm";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import { User } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";

const ResetPassword = ({ params }: any) => {
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post("/api/verify-token", {
          token: params.token,
        });
        setVerified(true);
        const userData = await res.data;

        setUser(userData);
      } catch (error) {
        console.log(error);
        setVerified(true);
      }
    };
    verifyToken();
  }, [params.token]);

  return (
    <AuthForm title="Enter Your New Password" height="100vh">
      <ResetPasswordForm user={user} />
    </AuthForm>
  );
};

export default ResetPassword;
