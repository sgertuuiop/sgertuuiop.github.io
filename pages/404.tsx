import Layout, { ErrorHeader } from "@/components/Layout";
import { HomeButton } from "@/components/Buttons";

export default function Http404() {
  return (
    <Layout
      title="HTTP 404 Not Found"
      path=""
      filename="404"
      noheader
      description="The requested resource could not be found."
    >
      <ErrorHeader title="" path="" filename="" code="404" />
      <p>The requested resource could not be found.</p>
      <HomeButton />
    </Layout>
  );
}
