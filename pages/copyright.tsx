import Layout from "@/components/Layout";
import { Button, ExtButton } from "@/components/Buttons";

export default function Copyright() {
  return (
    <Layout
      title="Copyright information"
      description="Terms for re-use of content hosted on this website."
    >
      <div className="cr-paragraph">
        <p>
          Except where otherwise noted, content on this site is licensed under
          the{" "}
          <a
            className="cr-link-external"
            href="http://creativecommons.org/licenses/by-nd/4.0/"
          >
            Creative Commons Attribution-NoDerivatives 4.0 International
          </a>{" "}
          licence.
        </p>
      </div>

      <br />

      <div className="cr-paragraph">
        <p>Under this licence, you are free to:</p>

        <p>
          <b>Share:</b> Copy and redistribute this work in any medium or format
          for any purpose, even commercially
        </p>
      </div>

      <div className="cr-paragraph">
        <p>Under the following terms:</p>

        <p>
          <b>Attribution:</b> You must give appropriate credit, provide a link
          to the licence, and indicate if changes were made. You may do so in
          any reasonable manner, but not in any way that suggests the licensor
          endorses you or your use.
        </p>
        <p>
          <b>NoDerivatives:</b> If you remix, transform, or build upon this
          work, you may not distribute the modified work.
        </p>
        <p>
          <b>No additional restrictions:</b> You may not apply legal terms or
          technological measures that legally restrict others from doing
          anything the licence permits.
        </p>
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
