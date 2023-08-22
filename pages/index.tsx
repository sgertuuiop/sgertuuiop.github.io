import Layout from "@/components/Layout";
import { Button, ExtButton } from "@/components/Buttons";

export default function Home() {
  return (
    <>
      <Layout title="Home" description="This is my personal website!">
        <p>Welcome to my website! Here is where I am on the Internet:</p>
        <ExtButton
          href="https://sgertuuiop.tumblr.com"
          title="Tumblr"
          icon="brand-tumblr"
        />
        <ExtButton
          href="https://mstdn.social/@sgertuuiop"
          title="Mastodon (mstdn.social)"
          rel="me"
          icon="brand-mastodon"
        />
        <br />
        <p>And here are some other miscellaneous pages:</p>
        <ExtButton
          href="https://en.pronouns.page/@sgertuuiop"
          title="Pronouns.page"
          icon="link"
        />
        <ExtButton
          href="https://abortionfunds.org/funds"
          title="Donate to an abortion fund"
          icon="first-aid-kit"
        />
        <Button
          href="/copyright"
          title="Copyright information"
          icon="copyright"
        />
      </Layout>
    </>
  );
}
