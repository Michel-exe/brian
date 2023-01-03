import {data} from "./data"
import Contenedor from '../components/Contenedor';

export default function Api ({setSca}){
    let c=0;
    return (
        <>
            <div className="navegacion">
                {data.map(n=>{
                    c++;
                    return (
                        <Contenedor imag={n.imag} long={n.data.length} name={n.name} data={n.data} setSca={setSca} key={c} />
                    )
                })}
            </div>
        </>
    )
}
