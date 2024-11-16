import Layout from "@/components/Layout";

export default function Accessibility() {
  return (
    <Layout
      title="Accessibility statement"
      path=""
      filename="a11y"
      description="Information about conformance to accessibility standards."
    >
      <div className="cr-paragraph">
        <p>
          I am committed to ensuring that this website is accessible to all,
          regardless of ability. Accessibility on the Internet should be the
          default, not just an extra feature.
        </p>
      </div>
      <div className="cr-paragraph">
        <p>
          This website is fully conformant with the Web Content Accessibility
          Guidelines (WCAG) 2.2 Level AA. More details about{" "}
          <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2 can
          be found{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/"
            className="cr-link-external"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="cr-paragraph">
        <p>
          In addition, this website also conforms with some criteria of{" "}
          <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2
          Level AAA, specifically:
        </p>
        <ul>
          <li>
            <p>
              <em>Identify Purpose:</em> In content implemented using markup
              languages, the purpose of User Interface Components, icons, and
              regions can be programmatically determined. (Criterion 1.3.6)
            </p>
          </li>
          <li>
            <p>
              <em>Contrast (Enhanced):</em> The visual presentation of text and
              images of text has a contrast ratio of at least 7:1 for body text,
              and 4.5:1 for large text. (Criterion 1.4.6)
            </p>
          </li>
          <li>
            <p>
              <em>Keyboard (No Exception):</em> All functionality of the content
              is operable through a keyboard interface without requiring
              specific timings for individual keystrokes. (Criterion 2.1.3)
            </p>
          </li>
          <li>
            <p>
              <em>Three Flashes:</em> Web pages do not contain anything that
              flashes more than three times in any one second period. (Criterion
              2.3.2)
            </p>
          </li>
          <li>
            <p>
              <em>Location:</em> Information about the user&apos;s location
              within a set of Web pages is available. (Criterion 2.4.8)
            </p>
          </li>
          <li>
            <p>
              <em>Focus Not Obscured (Enhanced):</em> When a user interface
              component receives keyboard focus, no part of the component is
              hidden by author-created content. (Criterion 2.4.12)
            </p>
          </li>
          <li>
            <p>
              <em>Focus Appearance:</em> When the keyboard focus indicator is
              visible, it is of sufficient size and contrast. (Criterion 2.4.13)
            </p>
          </li>
          <li>
            <p>
              <em>Abbreviations:</em> A mechanism for identifying the expanded
              form or meaning of abbreviations is available. (Criterion 3.1.4)
            </p>
          </li>
        </ul>
      </div>
      <div className="cr-paragraph">
        <p>
          If you have a suggestion on how to improve this site&apos;s
          accessibility, please{" "}
          <a
            href="https://github.com/sgertuuiop/sgertuuiop.github.io/issues/new"
            className="cr-link-external"
          >
            open a GitHub issue
          </a>{" "}
          with the label <span className="cr-green">a11y</span>.
        </p>
      </div>
    </Layout>
  );
}
