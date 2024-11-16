import Layout from "@/components/Layout";
import { ExtButton } from "@/components/Buttons";

export default function Stranded() {
  return (
    <Layout
      title="STRANDED (Rewritten)"
      path="/projects"
      filename="stranded"
      description="Will you be STRANDED forevermore? (BTT1O culminating)"
    >
      <img
        src="/assets/projects/stranded/screenshot.png"
        className="cr-image"
        alt="A screenshot of the player character jumping over 2 hermit-crab-like characters"
      />
      <h1>Will you be STRANDED forevermore?</h1>
      <p>
        This game was created for a culminating project for BTT1O{" "}
        <em>Information and Communication Technology in Business</em>. I
        initially wrote it using codeblocks in Microsoft MakeCode Arcade, but I
        decided to rewrite it in TypeScript (actually rewrite it, not just
        pressing the <code>JavaScript</code> button). Alongside the game, I also
        had to create packaging, a website, and a manual for the game.
      </p>
      <figure>
        <img
          className="cr-image"
          alt="Packaging for STRANDED."
          src="/assets/projects/stranded/packaging.png"
        />
        <figcaption>
          Packaging I created for STRANDED (with URLs edited) [Christian
          Rodríguez-Burns/CC BY-SA 4.0]
        </figcaption>
      </figure>
      <figure>
        <img
          className="cr-image"
          alt="Website for STRANDED."
          src="/assets/projects/stranded/website-qrcode-removed.png"
        />
        <figcaption>
          The webpage I created for STRANDED. [Christian Rodríguez-Burns/CC
          BY-SA 4.0]
        </figcaption>
      </figure>
      <figure>
        <img
          className="cr-image"
          alt="Manual for STRANDED."
          src="/assets/projects/stranded/manual.png"
        />
        <figcaption>
          Manual for STRANDED [Christian Rodríguez-Burns/CC BY-SA 4.0]
        </figcaption>
      </figure>
      {/* prettier-ignore */}
      <pre>
        <code className="cr-code">
STRANDED: FIND YOUR WAY BACK HOME.<br />
Copyright (C) 2023-2024 Christian Rodriguez-Burns.<br /> <br />

This program is free software: you can redistribute it and/or modify<br />
it under the terms of the GNU General Public License as published by<br />
the Free Software Foundation, either version 3 of the License, or<br />
(at your option) any later version.<br /> <br />

This program is distributed in the hope that it will be useful,<br />
but WITHOUT ANY WARRANTY; without even the implied warranty of<br />
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the<br />
GNU General Public License for more details.<br /> <br />

You should have received a copy of the GNU General Public License<br />
along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.
        </code>
      </pre>
      <ExtButton
        href="https://sgertuuiop.github.io/stranded-rewritten"
        title="Play now"
        icon="device-gamepad"
      />
    </Layout>
  );
}
