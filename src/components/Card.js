export default function Card(prop) {
    // Parameter: Destructuring elements in prop
    let {openSpots, coverImage, rating, reviewCount, location, title, price} = prop;
    let cardStatus = openSpots > 0 ? <div>AVAILABLE</div> : <div style={{color: 'red'}}>SOLD-OUT</div>
    return (
        <div className="card">
            <div className="cardTop">
                {cardStatus}
                <img className="photoEl" src={`./images/${coverImage}`} alt="card pic"/>
            </div>
            <div className="cardBottom">
                <p>{rating}({reviewCount}) + {location}</p>
                <p>{title}</p>
                <p style={{color: "black"}}><b>From ${price}</b> / person</p>
            </div>
        </div>
    );
}