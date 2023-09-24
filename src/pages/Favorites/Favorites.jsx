import { useEffect, useState } from "react";

const Favorites = () => {


    const [favorites,setFavorites] = useState([])

    

    useEffect(()=>{

        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
        if(favoriteItems){
            setFavorites(favoriteItems)
        }
        else{
            console.log('no data ');
        }
    } ,[])

    return (
        <div>
            this is favourites
        </div>
    );
};

export default Favorites;