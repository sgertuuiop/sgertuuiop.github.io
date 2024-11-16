import Layout, { ErrorHeader } from "@/components/Layout";
import { HomeButton } from "@/components/Buttons";

export default function Http418() {
  return (
    <Layout
      title="HTTP 418 I'm a teapot"
      path=""
      filename="teapot"
      noheader
      description="This server refuses to brew coffee as it is permanently a teapot."
    >
      <ErrorHeader title="" path="" filename="" code="418" />
      <p>This server refuses to brew coffee as it is permanently a teapot.</p>
      <HomeButton />
    </Layout>
  );
}
