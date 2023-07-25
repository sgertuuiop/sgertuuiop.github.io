import Layout from "../components/Layout";
import Button from "../components/Button";
import ExtButton from "../components/ExtButton";

export default function InterfaceGuidelines() {
  return (
    <>
      <Layout title="Interface guidelines" description="">
        <p>The following conventions are used throughout this website.</p>
        <h2>Buttons</h2>
        <p>Buttons use the following style:</p>
        <a className="cr-button">The quick brown fox jumps over the lazy dog</a>
        <p>Buttons have one of three icons to mark their target:</p>
        <p>
          <i className="fa fa-person-walking-arrow-right" />: This button links
          to a page hosted on this website.
        </p>
        <p>
          <i className="fa fa-person-walking-dashed-line-arrow-right" />: This
          button links to an external page not hosted on this website.
        </p>
        <p>
          <i className="fa fa-person-walking-arrow-loop-left" />: This button
          links to the homepage.
        </p>
        <br />
      </Layout>
    </>
  );
}
