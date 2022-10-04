import React from "react";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      {/* layout component */}
      <Layout>
        <Toaster />
        {/* main component inside layout component */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
