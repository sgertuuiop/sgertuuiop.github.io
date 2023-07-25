const Footer = ({}) => {
  return (
    <footer id="footer" className="cr-footer">
      <span className="cr-cc-icon">
        <i
          title="You are free to copy and redistribute this work in any medium or format for any purpose, even commercially, under the following terms:"
          style={{
            marginRight: 3,
            verticalAlign: "text-bottom",
          }}
          className="fa-brands fa-creative-commons"
        />{" "}
        <i
          title="Attribution: You must give appropriate credit, provide a link to the licence, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use."
          style={{
            marginLeft: 3,
            marginRight: 3,
            verticalAlign: "text-bottom",
          }}
          className="fa-brands fa-creative-commons-by"
        />{" "}
        <i
          title="NoDerivatives: If you remix, transform, or build upon this work, you may not distribute the modified work."
          style={{
            marginLeft: 3,
            verticalAlign: "text-bottom",
          }}
          className="fa-brands fa-creative-commons-nd"
        />{" "}
      </span>
      <p className="cr-footnote">
        Except where otherwise noted, the content on{" "}
        <a href="https://sgertuuiop.github.io">this website</a> by Christian
        Rodríguez is licensed under{" "}
        <a
          title="Creative Commons Attribution-NoDerivatives 4.0 International"
          href="http://creativecommons.org/licenses/by-nd/4.0/"
          rel="license"
        >
          CC BY-ND 4.0
        </a>
      </p>
    </footer>
  );
};

export default Footer;
