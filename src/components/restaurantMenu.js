import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CND_URL } from "../constans";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();
    console.log(id);

    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4985057&lng=81.8678321&restaurantId="+
            id +"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return (
        <div className="Menu">
            <div>
                <h1> Restaurant id: {restaurant?.id}</h1>
                <h2> {restaurant?.name} </h2>
                <img src={IMG_CND_URL+restaurant?.cloudinaryImageId}/> 
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {menu.map( item => { 
                            return (<li key={item?.card?.info?.id}>{...item?.card?.info?.name}</li>)
                    })}
                </ul>   
            </div>
        </div>
    );
};

export default RestaurantMenu;