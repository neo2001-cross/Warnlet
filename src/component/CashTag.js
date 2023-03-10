import "./MainContainer.css"

function CashTag({ name, money }) {
    return(
        <div className={"cashTag " + name.slice(0,1).toLowerCase() + name.slice(1)}>
            <p>{name}</p>
            <h1>{money}</h1>
        </div>
    )
}

export default CashTag