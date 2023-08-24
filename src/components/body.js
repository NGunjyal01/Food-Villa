import { ResturantList } from "../constans";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

function filterData(searchInput, resturants){
    const Data= resturants.filter((resturant)=>{
        return resturant.info.name.includes(searchInput)
    });
    return Data;
}


const Body = () => {
    const [resturants, setResturants]= useState([]);
    const [searchInput, setSearchInput]=useState();

    useEffect( () =>{
        //API Call
        getResturants();
    },[]);
    async function getResturants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4985057&lng=81.8678321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //optinal chaining
        setResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    }
    console.log("render");
    //conditional rendering
    //if resturant is empty -> shimmer ui
    //if resturant has data -> actual data ui

    return (resturants.length === 0) ? <Shimmer/>:(
        <>
            <div className="search-container">
                <input
                    type='text' className="search-input" placeholder="search"
                    onChange={(e) =>{
                       setSearchInput(e.target.value);
                    }}
                />
                <button className="search-btn"
                    onClick={()=>{
                        const Data= filterData(searchInput, resutrants);
                        setResturants(Data);
                    }}
                >search</button>
            </div>
            <div className="resturant-list">
                {resturants.map(resturant => {
                    return (<ResturantCard {...resturant.info} key={resturant.info.id} />);
                })}
            </div>
        </>
    );
};

export default Body;