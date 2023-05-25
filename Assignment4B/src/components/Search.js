import logo from "./Images/logo.svg";
import { useState } from "react";
const SearchBar = () => {
  const data = fetch("https://fakestoreapi.com/products/categories/") ;
 const vardata = Object.entries(data);
 console.log (vardata);
  const [searchResults, setSearchResults] = useState([]);
    const handleSubmit = (e) =>{ e.preventDefault()
    }
    const handleSearchChange = (e) => {
        const searchword=e.target.value; 
        function search(){
          if(vardata.title === searchword)
          {
            return true;
          }
          else{
            return false ;
          }
          };
        const resultsArray = vardata.filter(search);
       setSearchResults(resultsArray);
    }

    return (
        <>
       
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <img src={logo}  alt="..."  style={{marginLeft:"150px"}}/>
          <form className="d-flex" role="search" onSubmit={handleSubmit} style={{marginRight:"200px"}}>
            <input style={{width:"900px"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={handleSearchChange}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {
        searchResults.map((value,key)=>{
          return(
            <a className="dataitem" href={value.link} target="_blank"  >
              <p>
                {value.title}
              </p>
            </a>
          )
        })
      }
      </>
    )
}
export default SearchBar