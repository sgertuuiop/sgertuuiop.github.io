const LicenceFooter = ({}) => {
  return (
    <footer id="footer" className="cr-footer">
      <span className="cr-cc-icon">
        <i
          style={{
            verticalAlign: "text-bottom",
          }}
          className="ti ti-creative-commons-zero"
        />{" "}
      </span>
      <p className="cr-footnote">
        The text of this Creative Commons public licence is dedicated to the
        public domain under the{" "}
        <a
          className="cr-link-external"
          href="https://creativecommons.org/publicdomain/zero/1.0/"
        >
          CC0 Public Domain Dedication
        </a>
        .
      </p>
    </footer>
  );
};

export default LicenceFooter;
