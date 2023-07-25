import Layout from "../components/Layout";
import HomeButton from "../components/HomeButton";

export default function Http418() {
  return (
    <>
      <Layout
        title="HTTP 418 I'm a teapot"
        description="This server refuses to brew coffee as it is permanently a teapot."
      >
        <p>
          This server refuses to brew coffee as it is permanently a teapot. The
          resulting entity body <em>may</em> be short and stout.
        </p>
        <HomeButton />
      </Layout>
    </>
  );
}
