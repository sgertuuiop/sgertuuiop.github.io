import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer id="footer" className="cr-footer">
      <span className="cr-cc-icon">
        <i
          title="You are free to copy and redistribute this work in any medium or format for any purpose, even commercially, under the following terms:"
          style={{
            verticalAlign: "text-bottom",
          }}
          className="ti ti-creative-commons"
        />{" "}
        <i
          title="Attribution: You must give appropriate credit, provide a link to the licence, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use."
          style={{
            verticalAlign: "text-bottom",
          }}
          className="ti ti-creative-commons-by"
        />{" "}
        <i
          title="NoDerivatives: If you remix, transform, or build upon this work, you may not distribute the modified work."
          style={{
            verticalAlign: "text-bottom",
          }}
          className="ti ti-creative-commons-nd"
        />{" "}
      </span>
      <p className="cr-footnote">
        Copyright © 2023 Christian Rodríguez. <br /> Except where otherwise
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
      </p>
    </footer>
  );
};

export default Footer;
