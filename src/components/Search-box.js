import React from 'react';

const SearchBox = () =>{
    return (
        <div className="search-box">
        <form className="form-inline my-2 my-lg-0 ">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </div>
   
    )
}
export default SearchBox;