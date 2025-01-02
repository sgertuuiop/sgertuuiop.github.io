import Layout from "@/components/Layout";
import { Button, ExtButton } from "@/components/Buttons";

export default function Home() {
  return (
    <Layout
      title="Home"
      path=""
      filename="index"
      description="This is my personal website!"
    >
      <h1>Hello! My name is Christian!</h1>
      <p>
        I&apos;m a Canadian high school student interested in software
        engineering.
      </p>
      <p>Here are some other places I exist on the Internet:</p>
      <ExtButton
        href="https://sgertuuiop.tumblr.com"
        title="Tumblr"
        icon="brand-tumblr"
      />
      <ExtButton
        href="https://tech.lgbt/@sgertuuiop"
        title="Mastodon (tech.lgbt)"
        rel="me"
        icon="brand-mastodon"
      />
      <ExtButton
        href="https://bsky.app/profile/sgertuuiop.bsky.social"
        title="Bluesky"
        icon="brand-bluesky"
      />
      <br />
      <p>And here are some things I&apos;ve worked on in my time on Earth:</p>
      <Button href="/projects/stranded" title="STRANDED" icon="alien" />
    </Layout>
  );
}
