import React from "react";
import '../Styles/TodoSearch.css';


function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return(
        <input onChange={onSearchValueChange} className="TodoSearch" placeholder='papel' value={searchValue}/>

    );
}

export default TodoSearch;