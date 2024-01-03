import Layout from "@/components/Layout";
import { Button, ExtButton, HomeButton } from "@/components/Buttons";
import Notice from "@/components/Notice";

export default function TestPage() {
  return (
    <Layout title="Kitchen sink" description="This is the kitchen sink!!!">
      <div className="cr-paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          est ex. Quisque ex ligula, congue eu justo eu, finibus semper lacus.
          Nullam eget mauris at nulla varius sagittis. Mauris vitae luctus leo.
          In sagittis elit in nunc laoreet, in congue diam finibus. Nunc egestas
          molestie dui. Vestibulum id magna lectus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum molestie justo quis varius commodo. Aenean ultrices sapien
          cursus finibus varius. Aliquam dignissim mauris tellus. Etiam et magna
          egestas, tincidunt odio eget, blandit nisl.
        </p>
      </div>
      <div className="cr-paragraph">
        <p>
          Etiam pellentesque sit amet enim quis tempus. Nulla sed scelerisque
          leo, eget volutpat libero. Suspendisse vehicula efficitur rutrum.
          Mauris nisl ligula, dictum at turpis et, mollis tempus tellus. Vivamus
          faucibus sollicitudin lobortis. Vestibulum luctus vestibulum pharetra.
          Morbi id felis leo. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Vestibulum at tempor ligula. Fusce accumsan ex vitae
          vestibulum ultrices. In in leo lacus. Donec mi dui, laoreet et commodo
          quis, semper sit amet felis. Nam eu mauris felis. Proin et eros
          feugiat, ullamcorper nunc sed, rutrum odio. Curabitur luctus est et
          elit eleifend hendrerit non nec justo. Sed commodo ultricies porta.
        </p>
      </div>
      <div className="cr-paragraph">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit{" "}
          <a href="https://www.example.com/" className="cr-link-external">
            amet
          </a>
          , consectetur adipiscing elit. Ut dictum ex dui, non finibus dui
          commodo id. Nam ultricies at ligula sed cursus. Nulla a nulla et velit
          mollis viverra. Morbi porttitor, neque at vehicula posuere, velit
          dolor blandit dolor, sit amet hendrerit velit felis a nisl. Donec
          porttitor nunc vel neque ultrices, nec mollis justo rhoncus. Sed
          pretium ultricies venenatis. Fusce tincidunt leo non lorem maximus
          pulvinar sed quis purus. Fusce semper urna vel suscipit condimentum.
          Phasellus ac eros feugiat, ornare felis a, accumsan quam.
        </p>
      </div>
      <ExtButton
        href="https://www.example.com/"
        title="Lorem ipsum"
        icon="license"
      />
      <div className="cr-paragraph">
        <h2>Lorem ipsum? Dolor sit amet!</h2>
        <figure>
          <img
            className="cr-image"
            alt="Lorem ipsum."
            src="https://picsum.photos/id/25/1920/1080"
          />
          <figcaption>
            Lorem ipsum dolor/Alejandro Escamilla via Lorem Picsum
          </figcaption>
        </figure>
        <Notice title="WARNING" text="LOREM IPSUM DOLOR SIT AMET!" />
        <p>
          Donec nec vulputate¹ mauris. Pellentesque feugiat consequat libero,
          sit amet consequat diam venenatis vestibulum. Mauris sollicitudin
          ipsum quis dui volutpat, ut gravida massa facilisis. Quisque
          sollicitudin, urna sit amet condimentum² convallis, arcu mauris
          sodales velit, dapibus condimentum massa ligula sit amet ipsum. Ut ac
          suscipit elit. Sed laoreet quis sem in convallis. Curabitur vitae
          ultricies nibh, commodo tempus ante. Sed lorem odio, imperdiet eget
          massa egestas, pharetra pharetra dolor. Suspendisse ullamcorper vel
          orci eget porttitor. Vestibulum tincidunt egestas arcu eget rutrum.
          Donec et tempor ipsum.
        </p>
        <p className="cr-footnote">
          ¹ Lorem ipsum <i>dolor</i> sit amet.
        </p>
        <p className="cr-footnote">
          ² Consectetur <i>adipiscing</i> elit.
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-red">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          imperdiet eleifend pretium. Sed lacinia dictum tortor in aliquam. Cras
          commodo ullamcorper vehicula. Curabitur maximus nibh at convallis
          mollis. Aenean eleifend metus et neque lobortis laoreet. Cras felis
          justo, vulputate at orci quis, bibendum feugiat urna. Sed quis justo
          sit amet augue feugiat condimentum. Donec varius, lectus in bibendum
          iaculis, nunc ligula posuere nunc, a dapibus ipsum est nec orci.
          Vivamus at tortor ut ex efficitur egestas. (Red)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-orange">
          Ut a convallis quam. Pellentesque ultrices, ex eget varius congue,
          nisl nulla blandit lectus, convallis vestibulum urna tellus vitae
          elit. Quisque lobortis mi non viverra lobortis. Donec lobortis
          suscipit nunc, hendrerit tincidunt odio pulvinar a. Donec est ante,
          pulvinar sit amet nisi vel, cursus convallis dui. Integer non
          fermentum nibh. Sed sed diam euismod, scelerisque lorem sit amet,
          blandit metus. Curabitur viverra ipsum sit amet metus maximus ornare.
          Suspendisse augue nunc, tempus ac condimentum a, fringilla ac leo.
          Maecenas tincidunt, nisi vel facilisis ornare, risus orci elementum
          arcu, ut tincidunt neque enim sed neque. Suspendisse placerat mi sed
          nunc cursus, eget iaculis urna porta. (Orange)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-yellow">
          Duis ac elementum metus. Ut ligula risus, dignissim eget erat quis,
          efficitur tempus felis. Aliquam rutrum est a felis condimentum
          condimentum. Donec magna felis, tristique vel placerat ac, hendrerit
          nec ex. Integer egestas posuere pharetra. Sed ligula lacus, dapibus ut
          cursus eget, euismod vel sem. Curabitur vitae leo ut nulla pharetra
          auctor eu non libero. Maecenas quis augue eget tortor fringilla porta.
          Integer tincidunt, leo eu volutpat consequat, ligula nibh finibus
          orci, sit amet condimentum mauris metus scelerisque felis. Duis
          ultricies, quam vitae viverra varius, quam risus mollis turpis, non
          tempor metus enim non dui. (Yellow)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-green">
          Proin in viverra sapien, non vulputate orci. Suspendisse congue lectus
          sit amet quam cursus, at cursus tortor consectetur. Donec fringilla
          scelerisque dictum. Morbi et commodo eros, in placerat elit. In
          maximus nisi a ornare viverra. Vestibulum accumsan nisi nec tortor
          ullamcorper, in suscipit tellus porttitor. Praesent laoreet sem quis
          pretium elementum. Vestibulum eget felis sed turpis mattis suscipit.
          Quisque sit amet diam vitae est finibus egestas. Sed non erat eget mi
          vulputate tempus. Suspendisse eleifend, ante sit amet feugiat tempus,
          felis leo lobortis nisi, et aliquam turpis quam a sem. Curabitur ac
          lectus at orci egestas dapibus. (Green)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-cyan">
          Nonumy praesent sed no vel sed eum vel diam nonumy clita amet sanctus.
          Diam ex nonumy dolor lorem labore sadipscing sit eros no takimata.
          Dolore ex sit et stet amet eos erat ipsum stet diam erat. Ex voluptua
          clita tempor est lorem nulla magna vel vulputate lorem diam voluptua
          tincidunt et ipsum eirmod sed vulputate. Vero kasd sadipscing lorem at
          id dolores eirmod diam et diam sed lorem dolore volutpat duis ex stet
          laoreet. Diam sed diam dolores dolor elitr velit possim voluptua
          sanctus sed et molestie voluptua sed accusam dolore facilisi aliquyam.
          Diam mazim lorem sed imperdiet et diam nulla takimata labore tempor.
          Vulputate vel at sit ut diam sanctus ipsum sea. Clita lorem illum at
          ut mazim amet sed quis elitr dolore. (Cyan)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-blue">
          Integer sapien ipsum, tincidunt pharetra tellus non, vehicula
          consectetur mi. Vivamus non pulvinar nibh, non aliquam orci. Etiam
          pulvinar quis justo tempor interdum. Duis hendrerit lacus facilisis
          lectus tincidunt, et feugiat nisl aliquet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur nec velit ut magna dictum
          convallis ullamcorper vitae libero. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Sed sodales
          dui vitae laoreet imperdiet. Cras in vestibulum enim, a mattis ligula.
          (Blue)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-purple">
          Cras finibus arcu et rhoncus mattis. Donec nec orci non tortor
          vestibulum ultrices. Mauris consectetur nisi sapien, et luctus lectus
          tempus eu. Suspendisse rhoncus dapibus nisi in ullamcorper. Vestibulum
          sodales auctor ipsum at ullamcorper. Nunc sagittis dui lectus, vitae
          pharetra diam condimentum commodo. Nulla tempor vel enim in facilisis.
          Fusce at placerat arcu, eu hendrerit lorem. Nunc blandit, nunc sed
          ultrices interdum, enim nisi malesuada est, sit amet posuere ante
          nulla sed erat. Proin convallis et erat ut rhoncus. Maecenas dignissim
          magna vel nulla mattis iaculis. Aenean pharetra massa eget dolor
          iaculis posuere. Ut vel consequat metus. Pellentesque sagittis metus
          orci, posuere eleifend metus auctor et. Aenean pharetra elit elit, non
          tempus dui posuere et. Quisque scelerisque felis turpis, cursus
          posuere neque tempus eget. (Purple)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-pink">
          Ea et at. Vel nonumy elitr sit. Ut sadipscing diam et justo vero dolor
          justo et no. Gubergren kasd no elitr rebum invidunt at nonummy dolor
          et. Ea dolor aliquip gubergren. Consectetuer ut takimata feugiat clita
          et invidunt exerci lorem eirmod tempor et ut. At augue dolor
          consetetur et est clita lobortis voluptua sit. Eu stet duo diam sea
          sed consequat nostrud erat erat et sed ad dolor. Vero justo eirmod
          vero lorem stet at sit amet duo justo et blandit ipsum at magna
          gubergren. (Pink)
        </p>
      </div>
      <div className="cr-paragraph">
        <p className="cr-accent">
          Nulla purus lorem, suscipit et elit sed, egestas tincidunt enim.
          Aenean nisi nibh, volutpat id mattis sed, posuere a justo. Nullam vel
          urna non sem aliquet ullamcorper. Duis vehicula mauris ipsum, eu
          mollis dui egestas id. Morbi magna arcu, varius non dictum malesuada,
          tempor elementum elit. Proin vulputate lacus massa, a gravida sem
          ultricies quis. Proin elementum cursus ornare. Donec ut maximus nibh.
          Nullam nec pharetra dui. Nulla libero lacus, pretium et euismod vel,
          iaculis eget sapien. Maecenas id leo ac augue mollis placerat. Ut
          suscipit nec quam vel accumsan. Curabitur dignissim tincidunt diam,
          quis dapibus mauris tristique sed. Proin tincidunt erat nec massa
          eleifend varius. Donec et malesuada lectus. Pellentesque vestibulum
          sollicitudin convallis. (Accent)
        </p>
      </div>
      <Button
        href="/copyright"
        title="Copyright information"
        icon="copyright"
      />
      <HomeButton />
    </Layout>
  );
}
