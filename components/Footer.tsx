const Footer = ({ }) => {
    return (
        <footer id="footer">
            <span className="ccbut">
                <img
                    title="You are free to copy and redistribute this work in any medium or format for any purpose, even commercially, under the following terms:"
                    alt="Creative Commons symbol"
                    width="22" height="22"
                    style={{
                        marginRight: 3,
                        verticalAlign: "text-bottom"
                    }}
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                /> {" "}
                <img
                    title="Attribution: You must give appropriate credit, provide a link to the licence, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use."
                    alt="Creative Commons Attribution symbol"
                    width="22" height="22"
                    style={{
                        marginLeft: 3,
                        marginRight: 3,
                        verticalAlign: "text-bottom"
                    }}
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                /> {" "}
                <img
                    title="NoDerivatives: If you remix, transform, or build upon this work, you may not distribute the modified work."
                    alt="Creative Commons NoDerivatives symbol"
                    width="22" height="22"
                    style={{
                        marginLeft: 3,
                        verticalAlign: "text-bottom"
                    }}
                    src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
                /> {" "}
            </span>
            <p className="fnote">
                Except where otherwise noted, the content on {" "}
                <a
                    property="dct:title"
                    rel="cc:attributionURL"
                    href="https://sgertuuiop.github.io"
                >
                    this website
                </a> {" "}
                by <span property="cc:attributionName">Christian Rodríguez</span> is
                licensed under {" "}
                <a
                    title="Creative Commons Attribution-NoDerivatives 4.0 International"
                    href="http://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1"
                    target="_blank"
                    rel="license noopener noreferrer"
                    style={{ display: "inline-block" }}
                >
                    CC BY-ND 4.0
                </a>
            </p>
        </footer>
    );
};

export default Footer;
