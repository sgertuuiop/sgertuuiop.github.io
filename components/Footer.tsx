import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer role="contentinfo" id="footer" className="cr-footer">
      <span className="cr-cc-icon">
        <i className="ti ti-creative-commons" aria-hidden />{" "}
        <i className="ti ti-creative-commons-by" aria-hidden />{" "}
        <i className="ti ti-creative-commons-nd" aria-hidden />{" "}
        <Link href="/a11y">
          <i
            className="ti ti-accessible cr-a11y-icon"
            title="Accessibility statement"
            aria-hidden
          />
          <span className="cr-a11y-desc">Accessibility statement</span>
        </Link>
      </span>
      <p className="cr-footnote">
        <span aria-hidden>Copyright</span> © 2023 Christian Rodríguez <br />{" "}
        Except where otherwise noted, the content on this website is licensed
        under{" "}
        <Link
          title="Creative Commons Attribution-NoDerivatives 4.0 International"
          href="/copyright"
          rel="license"
        >
          CC BY-ND 4.0
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

export default Footer;
