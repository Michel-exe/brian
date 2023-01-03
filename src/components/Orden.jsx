export default Orden = ({plat,pre,pz,tot}) => {
    return (
        <div className="ordenMainCon">
            <div>
                <h3>{plat}</h3>
                <span>
                    <h4>${pre} / {pz}pz</h4>
                </span>
            </div>
            <b>$ {tot}</b>
        </div>
    )
}