import Typo from "#components/build/typography";
import { S_thibaut, Links } from "#data/links";
import Error from "./error";
import { useParams } from "react-router-dom";
import BoxContact from "#components/build/boxcontact";
import Header from "#components/build/header";
import Main from "#components/build/main";
import { v4 as uuidv4 } from "uuid";
import Popup from "#components/popup";
import { useState } from "react";
import Button from "#components/build/button";


export default function Home() {
  const { id } = useParams();
  const home = Links[0].url.slice(0,-3)
  const [active, setActive] = useState(false);
  

  const handleClick =() => {
    setActive(!active);
  };
 
    const [boxContacts] = useState(S_thibaut.links.map((item) => (
      <BoxContact key={uuidv4()} data={item} handleClick={handleClick}/>
    )))

  if (id === S_thibaut.nav[0].url) {
//
//  
    return (
      <>
      <Popup handleClick={handleClick} active={active}/>
      <Header />
        <Main>
          <section className="titleContact">
            <Typo size="h3" color="C1" transform="maj" className="user">
              Senechal Thibaut
            </Typo>
            <Typo size="h5" color="C7" transform="maj" className="job">
              Coach sportif & Développeur Web
            </Typo>
          </section>
          <section className="listContact">
            {boxContacts}
            </section>
        </Main>
      </>
    );
  
  }else if(id){
    return(
 <Main className="home">
  <Button 
          variant="t2"  
          size="h2" 
          fontSize="h6"
          className="btn-home"
          href={home + S_thibaut.nav[0].url}
          type={S_thibaut.nav[0].type}
          children="ST"
  />
 </Main>
    )

  }else {
    return (
      <Error
        id="400"
        error="Echec du chargement de la variable ou de la fonction"
      />
    );
  }
}