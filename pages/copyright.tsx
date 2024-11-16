import Layout from "@/components/Layout";
import { Button } from "@/components/Buttons";

export default function Copyright() {
  return (
    <Layout
      title="Copyright information"
      path=""
      filename="copyright"
      description="Terms for re-use of content hosted on this website."
    >
      <div className="cr-paragraph">
        <p>
          Except where otherwise noted, content on this site is licensed under
          the{" "}
          <a
            className="cr-link-external"
            href="https://creativecommons.org/licenses/by-nd/4.0/"
          >
            Creative Commons Attribution-NoDerivatives 4.0 International
          </a>{" "}
          licence.
        </p>
      </div>

      <br />

      <div className="cr-paragraph">
        <h2>Under this licence, you are free to:</h2>

        <ul>
          <li>
            <p>
              <em>Share:</em> Copy and redistribute this work in any medium or
              format for any purpose, even commercially
            </p>
          </li>
        </ul>
      </div>

      <div className="cr-paragraph">
        <h2>Under the following terms:</h2>

        <ul>
          <li>
            <p>
              <em>Attribution:</em> You must give appropriate credit, provide a
              link to the licence, and indicate if changes were made. You may do
              so in any reasonable manner, but not in any way that suggests the
              licensor endorses you or your use.
            </p>
          </li>
          <li>
            <p>
              <em>NoDerivatives:</em> If you remix, transform, or build upon
              this work, you may not distribute the modified work.
            </p>
          </li>
          <li>
            <p>
              <em>No additional restrictions:</em> You may not apply legal terms
              or technological measures that legally restrict others from doing
              anything the licence permits.
            </p>
          </li>
        </ul>
      </div>
      <Button
        href="/licence"
        title="View full licence"
        rel="license"
        icon="license"
      />
    </Layout>
  );
}
