export default function Card(prop) {
    // Parameter: Destructuring elements in prop
    let {status, image, rating, reviewCount, country, title, price} = prop;
    return (
        <div className="card">
            <div className="cardTop">
                <div>{status}</div>
                <img src={`./images/${image}`} alt="card pic"/>
            </div>
            <div className="cardBottom">
                <p>{rating}({reviewCount}) + {country}</p>
                <p>{title}</p>
                <p style={{color: "black"}}><b>From ${price}</b> / person</p>
            </div>
        </div>
    );
}