import React, { FC } from "react";
import Head from "next/head";
import { Header, Footer } from "./Landmarks";

type props = {
  title: string;
  description: string;
  noheader?: boolean;
  nofooter?: boolean;
  children: JSX.Element[];
};

const Layout: FC<props> = ({
  title,
  description,
  noheader,
  nofooter,
  children,
}) => {
  return (
    <div className="cr-wrapper">
      <Head>
        <title>{`${title} « CHRISTIAN RODRIGUEZ`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sgertuuiop.github.io/" />
        <meta property="og:title" content={`${title} « CHRISTIAN RODRIGUEZ`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://sgertuuiop.github.io/assets/og.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sgertuuiop.github.io/" />
        <meta
          property="twitter:title"
          content={`${title} « CHRISTIAN RODRIGUEZ`}
        />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://sgertuuiop.github.io/assets/og.png"
        />
      </Head>
      <main>
        {noheader ? null : <Header title={title} />}
        {children}
        {nofooter ? null : <Footer />}
      </main>
    </div>
  );
};

export default Layout;
