import { useState, useEffect } from "react";

const App = () => {
    const [data, setdata] = useState([]);
    console.log(data);
    useEffect(() => {
        const Data = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
            console.log(response);
            const jsondata = await response.json();
            console.log(jsondata);
            setdata(jsondata);
        }
        Data();
    }, []);
    return (
        <>
            <div className="row">
        {
        data.map((value) => {
          return (
            <>
            <div className="col-md-4 mt-5" style={{width:"18 rem"}}>
              <div className="card" style={{width:"150px", height:"150px",objectFit:"contain"}}>
                <img src={value.image} className="card-img-top" alt="" />
                </div>
                <div className="card-body mt-5 pt-5">
                  <h5 className="card-title mt-3">{value.title}</h5>
                  <p className="card-text mt-3">{value.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
               
              </div>
            </div>
            </>
          )
   
          })}
       </div>
           </>
          )
          }

export default App;