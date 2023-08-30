export function filterData(searchInput, resturants){
    const Data= resturants.filter((resturant)=>{
        return resturant?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    });
    return Data;
};