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
      <div className="cr-blockquote">
        <p>STRANDED: FIND YOUR WAY BACK HOME.</p>
        <p>Copyright (C) 2023-2024 Christian Rodriguez-Burns.</p>
        <p>
          This program is free software: you can redistribute it and/or modify
          it under the terms of the GNU General Public License as published by
          the Free Software Foundation, either version 3 of the License, or (at
          your option) any later version.
        </p>
        <p>
          This program is distributed in the hope that it will be useful, but
          WITHOUT ANY WARRANTY; without even the implied warranty of
          MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
          General Public License for more details.
        </p>
        <p>
          You should have received a copy of the GNU General Public License
          along with this program. If not, see{" "}
          <a className="cr-link-external" href="https://www.gnu.org/licenses/">
            https://www.gnu.org/licenses/
          </a>
          .
        </p>
      </div>
      <ExtButton
        href="https://sgertuuiop.github.io/stranded-rewritten"
        title="Play now"
        icon="device-gamepad"
      />
    </Layout>
  );
}
