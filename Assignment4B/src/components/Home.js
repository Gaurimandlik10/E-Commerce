import "./Home.css";
import imageproduct from "./image-product-1.jpg";
import iconprevious from "./icon-previous.svg";
import iconnext from "./icon-next.svg";
import imageproduct1thumbnail from "./image-product-1-thumbnail.jpg";
import imageproduct2thumbnail from "./image-product-2-thumbnail.jpg"
import imageproduct3thumbnail from "./image-product-3-thumbnail.jpg"
import imageproduct4thumbnail from "./image-product-4-thumbnail.jpg";
import { useState } from "react";
function App() {
   function imagehandlar() {
    const [data,setdata]=useState([]);
    console.log ("data");

    }
    return (
        <>
            <div className="shadow-lg"   style={{marginTop:"50px",marginLeft:"100px",marginRight:"100px",borderRadius:"10px"}}>
                <img style={{borderRadius:"10px"}} id="product_image" src={imageproduct} alt="Fall Limited Edition Sneakers" />
                </div>
                <div className="w-full px-3 sm:px-5 absolute flex justify-between md:hidden">
                    <button id="prev" className="bg-white grid place-items-center w-10 h-10 rounded-50">
                        <img src={iconprevious} alt="previous" />
                    </button>
                    <button id="next" className="bg-white grid place-items-center w-10 h-10 rounded-50">
                        <img src={iconnext} alt="next" />
                    </button>
                </div>
                <div className="container ">
                    <div className="thubnaildiv">
                        <div className="thumbnail_image" style={{maxWidth:"176 px"}}>
                            <img className="image" src={imageproduct1thumbnail} alt="" onClick={imagehandlar()} />
                        </div>
                        <div className=" thumbnail_image" style={{maxWidth:"176 px"}}>
                            <img className="image" src={imageproduct2thumbnail} alt="" />
                        </div>
                        <div className="thumbnail_image" style={{maxWidth:"176 px"}}>
                            <img className="image" src={imageproduct3thumbnail} alt=""  />
                        </div>
                        <div className="thumbnail_image" style={{maxWidth:"176 px"}}>
                            <img className="image" src={imageproduct4thumbnail} alt=""  />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default App;