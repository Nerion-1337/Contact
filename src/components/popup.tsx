import Typo from "#components/build/typography";
import Button from "#components/build/button";
import { FiCheck } from "react-icons/fi";

interface Props{
// eslint-disable-next-line @typescript-eslint/ban-types
   handleClick: Function;
    active: boolean;
}

export default function Popup({
    handleClick, 
    active,
}:Props){


    return(
<section className={`popup ${active ? "active" : ""}`}>
<div>

<Typo 
balise="span"
size="h4"
color="C7"
transform="maj"
>Copié !
</Typo>

<Button 
variant="t2"
size="h3"
fontSize="h5"
icon={{icon: FiCheck}}
fonction={handleClick}
/>

</div>
</section>
    )
}