import Card from "./Card";
import experienceData from "./experienceData";

export default function BottomContent() {
    
    const experienceElements = experienceData.map(experience => {
        return <Card    status={experience.status}
                        image={experience.image}
                        rating={experience.rating}
                        reviewCount={experience.reviewCount}
                        country={experience.country}
                        title={experience.title}
                        price={experience.price}/>
    });
    return (
        <div className="bottomContent">
            {experienceElements}
        </div>
    );
}