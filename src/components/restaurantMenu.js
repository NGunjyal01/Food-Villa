import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CND_URL } from "../constans";
import Shimmer from "./shimmer";
import useRestaurant from "./utlis/useRestaurant";
import { FETCH_MENU_URL } from "../constans";

const RestaurantMenu = () => {
    const {id} = useParams();
    console.log(id);

    // const [restaurant, setRestaurant] = useState({});
    // const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     getRestaurantInfo();
    // },[]);

    // async function getRestaurantInfo(){
    //     const data = await fetch(FETCH_MENU_URL[0]+id+FETCH_MENU_URL[1]);
    //     const json = await data.json();
    //     console.log(json);
    //     setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    //     setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    //     console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    // }
    const [restaurant] =  useRestaurant(id);
    console.log(restaurant[0]);
    console.log(restaurant[1]);
    return (!restaurant[0])? <Shimmer/> : (
        <div className="Menu">
            <div>
                <h1> Restaurant id: {restaurant[0]?.id}</h1>
                <h2> {restaurant[0]?.name} </h2>
                <img src={IMG_CND_URL+restaurant[0]?.cloudinaryImageId}/> 
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {restaurant[1]?.map( item => { 
                            return (<li key={item?.card?.info?.id}> {...item?.card?.info?.name} </li>)
                    })}
                </ul>   
            </div>
        </div>
    );
};

export default RestaurantMenu;