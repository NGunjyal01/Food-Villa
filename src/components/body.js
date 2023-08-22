import { ResturantList } from "../constans";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

function filterData(searchInput, resturants){
    const Data= resturants.filter((resturant)=>{
        return resturant.info.name.includes(searchInput)
    });
    return Data;
}

const Body = () => {
    const [resutrants, setResturants]= useState(ResturantList);
    const [searchInput, setSearchInput]=useState();

    return (
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
                {resutrants.map(resturant => {
                    return (<ResturantCard {...resturant.info} key={resturant.info.id} />);
                })}
            </div>
        </>
    );
};

export default Body;