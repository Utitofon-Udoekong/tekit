import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setisSSR] = useState(true);
  useEffect(() => {
    setisSSR(false);
  }, []);
  if (isSSR) return null;
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="h-screen overflow-hidden xl:w-[1200px] m-auto">
        <Navbar />
        <div className="flex gap-6">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto xl:w-[430px] w-20">
            <Sidebar />
          </div>
          <div className="mt-4 flex flex-col gap-10 overflow-auto videos flex-1 h-[88vh]">
            <Component {...pageProps} />
          </div>
        </div>{" "}
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
