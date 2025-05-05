import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";

type props = {
  title?: string;
  path?: string;
  filename?: string;
  code?: string;
  description?: string;
  noheader?: boolean;
  nofooter?: boolean;
  children?: React.ReactElement[];
};

const Layout: FC<props> = ({
  title,
  path,
  filename,
  description,
  noheader,
  nofooter,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{`/home/sgertuuiop${path ? path : ""}/${
          filename ? filename : "untitled"
        }.md`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sgertuuiop.github.io/" />
        <meta
          property="og:title"
          content={`/home/sgertuuiop${path ? path : ""}/${
            filename ? filename : "untitled"
          }.md`}
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
          content={`/home/sgertuuiop${path ? path : ""}/${
            filename ? filename : "untitled"
          }.md`}
        />
        <meta
          property="twitter:description"
          content={description ? description : "This page has no description."}
        />
        <meta
          property="twitter:image"
          content="https://sgertuuiop.github.io/assets/og.png"
        />
        <meta name="fediverse:creator" content="@sgertuuiop@tech.lgbt" />
      </Head>
      <div className="cr-body">
        <div className="cr-wrapper">
          <main>
            {noheader ? null : (
              <Header
                title={title ? title : "Untitled"}
                path={path}
                filename={filename ? filename : "untitled"}
              />
            )}
            {children ? (
              children
            ) : (
              <p className="cr-disabled">There&apos;s nothing here.</p>
            )}
          </main>
          {nofooter ? null : <Footer />}
        </div>
      </div>
    </>
  );
};

const Header: FC<props> = ({ title, path, filename }) => {
  return (
    <header role="banner" className="cr-header">
      <span className="cr-header">
        <Link href="/" className="cr-header-link">
          <b>sgertuuiop</b>
        </Link>{" "}
        [ <span className="cr-foreground">~{path}</span> ]%{" "}
        <span className="cr-foreground">
          cat &quot;{filename ? filename : "untitled"}.md&quot;
        </span>
        <br />
        {filename != "index" ? <h1>{title}</h1> : ""}
      </span>
    </header>
  );
};

const ErrorHeader: FC<props> = ({ title, path, filename, code }) => {
  return (
    <header role="banner" className="cr-header">
      <span className="cr-header">
        <span className="cr-red">{code}</span>{" "}
        <Link href="/" className="cr-header-link cr-red">
          <b>sgertuuiop</b>
        </Link>{" "}
        [ <span className="cr-foreground">~</span> ] %
      </span>
    </header>
  );
};

const Footer = () => {
  return (
    <footer role="contentinfo" id="footer" className="cr-footer">
      <div className="cr-horizontal-rule"> *** </div>
      <p className="cr-footnote">
        CC BY-ND • <Link href="/a11y">Accessibility statement</Link>{" "}
      </p>
      <p className="cr-footnote">
        Copyright <span aria-hidden>(C)</span> 2023-2024 Christian
        Rodríguez-Burns.{" "}
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
        Made with{" "}
        <span className="cr-accent" aria-hidden>
          &lt;3
        </span>
        <span className="cr-a11y-desc">love</span> using{" "}
        <a className="cr-link-external" href="https://nextjs.org/">
          Next.js
        </a>{" "}
        •{" "}
        <a
          className="cr-link-external"
          href="https://github.com/sgertuuiop/sgertuuiop.github.io"
        >
          Source code
        </a>
      </p>
    </footer>
  );
};

export default Layout;
export { Header, ErrorHeader, Footer };
