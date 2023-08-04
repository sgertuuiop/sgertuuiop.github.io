import Layout from "../components/Layout";
import { HomeButton } from "../components/Button";

export default function Http404() {
  return (
    <>
      <Layout
        title="HTTP 404 Not Found"
        description="The requested resource could not be found."
      >
        <p>The requested resource could not be found.</p>
        <HomeButton />
      </Layout>
    </>
  );
}
