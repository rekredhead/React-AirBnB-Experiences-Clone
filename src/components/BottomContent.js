import Card from "./Card";
import experienceData from "./experienceData";

export default function BottomContent() {
    // Convert experienceData array elements into JSX elements for the Bottom Content
    const experienceElements = experienceData.map(item => {
       // Pass the entire object as a prop
       return <Card 
                key={item.id}
                {...item}/>
    });
    // Render the new JSX elements array on the webpage
    return (
        <div className="bottomContent">
            {experienceElements}
        </div>
    );
}