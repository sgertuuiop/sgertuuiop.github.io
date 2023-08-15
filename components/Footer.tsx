import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer id="footer" className="cr-footer">
      <span className="cr-cc-icon">
        <i className="ti ti-creative-commons" />{" "}
        <i className="ti ti-creative-commons-by" />{" "}
        <i className="ti ti-creative-commons-nd" />{" "}
      </span>
      <p className="cr-footnote">
        Copyright © 2023 Christian Rodríguez <br /> Except where otherwise
        noted, the content on{" "}
        <a href="https://sgertuuiop.github.io">this website</a> is licensed
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
        Made with <i className="ti ti-heart-filled cr-accent" /> using{" "}
        <a className="cr-link-external" href="https://nextjs.org/">
          Next.js
        </a>
      </p>
    </footer>
  );
};

export default Footer;
