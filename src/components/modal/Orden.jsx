export default function Orden({scala,nodos}) {
    console.log(nodos[0].getAttribute("data-name") ? "1" : "0");
    console.log(nodos[0].getAttribute("data-cost") ? "1" : "0");
    return (
        <div className="dialog orden" id="orden" style={{ zIndex:"3", transform: `scale(${scala})` }}>
            <section>
                <h2>
                    <picture>
                        {/* <img src="media/temaki.png" alt="" /> */}
                    </picture>
                    Orden
                    <picture>
                        {/* <img src="media/teppanyaki.png" alt="" /> */}
                    </picture>
                </h2>

                <nav className="ordenMain" id="ordenMain">
                    <div className="ordenMainCon">
                        <div>
                            <h3>extra wasabi</h3>
                            <span>
                                <h4>$10 / 1pz</h4>
                            </span>
                        </div>
                        <b>$ 10</b>
                    </div>
                </nav>

                <h3 className="tot">Total: <b>$ ---</b></h3>
                <span id="opcPago" className="selecPagoSpan">
                    <button className="opcButton" id="pagoDeposito">Servicio a Domicilio <i>*</i> </button>
                    <button className="opcButton" id="recoRestaurante">Recoger en Restaurante</button>
                </span>
                <i>* El costo de servicio a domicilio es de <b>$15</b></i>
            </section>
        </div>
    )
}