import { Links } from "#data/links";
import Navlinks from "#components/build/navlink";
import Typo from "#components/build/typography";
//
//
interface Props {
  id?: string;
  error?: string;
}
//
//
export default function Error({
  id = "404",
  error = "Oups! La page que vous demandez n'existe pas.",
}: Props) {
  //
  //
  const home = Links.find((Links) => {
    return Links.label === "home";
  });
  //
  //
  if (home) {
    //
    return (
      <section className="error">
        <Typo size="h0" balise="span" color="C7">
          {id}
        </Typo>

        <Typo size="h3" balise="span" color="C6">
          {error}
        </Typo>

        <Navlinks href={home.url} type={home.type}>
          <Typo
            size="h5"
            balise="span"
            color="C3"
            className="backHomeError404"
          >
            Retourner sur la page d’accueil
          </Typo>
        </Navlinks>
      </section>
    );
    //
  } else {
    //
    return <h1>Fail Link</h1>;
  }
}
