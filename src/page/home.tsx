import Typo from "#components/build/typography";
import { S_thibaut } from "#data/links";
import Error from "./error";
import BoxContact from "#components/build/boxcontact";
import Header from "#components/build/header";
import Main from "#components/build/main";
import { v4 as uuidv4 } from "uuid";
import Popup from "#components/popup";
import { useState, useRef } from "react";



export default function Home() {
  const [active, setActive] = useState(false);
  

  const handleClick =() => {
    setActive(!active);
  };
 
    // const [boxContacts] = useState(S_thibaut.links.map((item) => (
    //   <BoxContact key={uuidv4()} data={item} handleClick={handleClick}/>
    // )))

const ref = useRef(
  (S_thibaut.links.map((item) => (
  <BoxContact key={uuidv4()} data={item} handleClick={handleClick}/>
))))


  if (S_thibaut) {
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
              dev-web & d'app js / react
            </Typo>
          </section>
          <section className="listContact">
            {ref.current}
            </section>
        </Main>
      </>
    );
  
  }else {
    return (
      <Error
        id="400"
        error="Echec du chargement de la variable ou de la fonction"
      />
    );
  }
}