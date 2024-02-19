"use client";

import { Navbar } from "@/components/Navbar";
import Provider from "@/components/Provider";
import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const ClientLayout = ({ children }: PropsWithChildren) => {
  const session = useSession();
  const [isNavbarRendered, setIsNavbarRendered] = useState(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      setIsNavbarRendered(true);
    }
  }, [session.status]);

  return (
    <>
      <Provider>
        {session.status === "authenticated" && <Navbar />}
        {isNavbarRendered && (
          <div className="bg-gray-50 dark:bg-gray-900">{children}</div>
        )}
        <ToastContainer />
      </Provider>
    </>
  );
};

export default ClientLayout;
