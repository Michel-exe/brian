import Platillo from "./Platillo";

export default function Platillos ({data,setSca}) {
    let c=0;
    return (
        <nav>
            {
                data.map(n =>{
                    c++;
                    return ( <Platillo key={c} setSca={setSca} ingr={n.ingr} cost={n.cost} plat={n.plat} /> )
                })
            }
        </nav>
    );
}