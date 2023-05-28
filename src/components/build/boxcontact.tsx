import Button from "#components/build/button";
import Typo from "#components/build/typography";
import { linksProps } from "#types/typages";

interface Props{
    data?: linksProps;
// eslint-disable-next-line @typescript-eslint/ban-types
handleClick: Function;
}


export default function BoxContact({
    data, 
    handleClick,
}:Props) {


    return(
        <>   
<article className="boxContact">
    <div className="iconContact">
        <Button 
        variant="t2"  
        size="h2" 
        fontSize="h6" 
        href={data?.url} 
        type={data?.type} 
        icon={data?.icon}
        special={data?.special}
        />

     <Typo 
     balise="span" 
     size="h6"
     color="C1"
     >
        {data?.infos}
        </Typo>   
    </div>

    <Typo 
    balise="span" 
    size="h4" 
    color="C7" 
    className="title"
    copy={data?.url}
    fonction={handleClick}
    >
        {data?.title}
        </Typo> 

</article>
</>
    )
}