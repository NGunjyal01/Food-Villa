import { useState, useEffect } from "react";

const useRestaurant = (id) => {

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
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    return [restaurant,menu];
};

export default useRestaurant;