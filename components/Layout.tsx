import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";

type props = {
  title: string;
  description?: string;
  noheader?: boolean;
  nofooter?: boolean;
  children?: React.ReactElement[];
};

const Layout: FC<props> = ({
  title,
  description,
  noheader,
  nofooter,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{`${title ? title : "Untitled"} « CHRISTIAN RODRIGUEZ`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicons/regular.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sgertuuiop.github.io/" />
        <meta
          property="og:title"
          content={`${title ? title : "Untitled"} « CHRISTIAN RODRIGUEZ`}
        />
        <meta
          property="og:description"
          content={description ? description : "This page has no description."}
        />
        <meta
          property="og:image"
          content="https://sgertuuiop.github.io/assets/og.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sgertuuiop.github.io/" />
        <meta
          property="twitter:title"
          content={`${title ? title : "Untitled"} « CHRISTIAN RODRIGUEZ`}
        />
        <meta
          property="twitter:description"
          content={description ? description : "This page has no description."}
        />
        <meta
          property="twitter:image"
          content="https://sgertuuiop.github.io/assets/og.png"
        />
      </Head>
      <div className="cr-wrapper">
        {noheader ? null : <Header title={title ? title : "Untitled"} />}
        <main>
          {children ? (
            children
          ) : (
            <p className="cr-disabled">There&apos;s nothing here.</p>
          )}
        </main>
        {nofooter ? null : <Footer />}
      </div>
    </>
  );
};

const Header: FC<props> = ({ title }) => {
  return (
    <header role="banner" className="cr-header">
      <h1 className="cr-header">
        <Link href="/" className="cr-header-link">
          <b>CHRISTIAN RODRIGUEZ</b>
        </Link>{" "}
        <span aria-hidden>→&nbsp;</span>
        <i>{title}</i>
      </h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer role="contentinfo" id="footer" className="cr-footer">
      <span className="cr-cc-icon">
        <i className="ti ti-creative-commons" aria-hidden />{" "}
        <i className="ti ti-creative-commons-by" aria-hidden />{" "}
        <i className="ti ti-creative-commons-nd" aria-hidden />{" "}
        <Link style={{ float: "right" }} href="/a11y">
          <i
            className="ti ti-accessible cr-a11y-icon"
            title="Accessibility statement"
            aria-hidden
          />
          <span className="cr-a11y-desc">Accessibility statement</span>
        </Link>
      </span>
      <p className="cr-footnote">
        <span aria-hidden>Copyright</span> © 2023-2024 Christian Rodríguez.{" "}
        <Link
          title="Creative Commons Attribution-NoDerivatives 4.0 International"
          href="/copyright"
          rel="license"
        >
          Some rights reserved.
        </Link>
        <br />
      </p>
      <p className="cr-footnote">
        Made with <i className="ti ti-heart-filled cr-accent" aria-hidden />
        <span className="cr-a11y-desc">love</span> using{" "}
        <a className="cr-link-external" href="https://nextjs.org/">
          Next.js
        </a>
      </p>
    </footer>
  );
};

export default Layout;
export { Header, Footer };
