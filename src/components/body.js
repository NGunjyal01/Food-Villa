import { ResturantList } from "../constans";
import ResturantCard from "./ResturantCard";

const Body = () => {
    return (
        <div className="resturant-list">
            {ResturantList.map(resturant => {
                return (<ResturantCard {...resturant.info} key={resturant.info.id} />);
            })}
        </div>
    );
};

export default Body;