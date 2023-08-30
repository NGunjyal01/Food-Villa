import { ResturantList } from "../constans";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import { filterData } from "./utlis/helper";
import useOnline from "./utlis/useOnline";

const Body = () => {
    const [allResturants, setAllResturants] = useState([]);
    const [filteredResturants, setFilteredResturants]= useState([]);
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
        setAllResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    }
    console.log("render");
    //conditional rendering
    //if resturant is empty -> shimmer ui
    //if resturant has data -> actual data ui

    const isOnline = useOnline();
    if(!isOnline){
        return <h1> Offline, please check your internet Connection</h1>
    }

    if(!allResturants)  return null;

    return (allResturants.length === 0) ? <Shimmer/>:(
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
                        const Data= filterData(searchInput, allResturants);
                        setFilteredResturants(Data);
                    }}
                >search</button>
            </div>
            <div className="resturant-list">
                {(filteredResturants.length===0) ? <h1>No Restaurants Matched your filter</h1>:
                filteredResturants.map(resturant => {
                    return (
                        <Link to={"/restaurnt/" + resturant?.info?.id} key={resturant?.info?.id} >
                            <ResturantCard {...resturant?.info}/>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;