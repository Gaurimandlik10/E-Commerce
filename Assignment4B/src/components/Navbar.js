import login from "./Images/image-avatar.png"
import cart from "./Images/icon-cart.svg";
import { useState } from "react";
import image from './Images/image-product-1-thumbnail.jpg' ;
function App(count) {
   const [pop,setpop]=useState(false);
    const cartclick=()=>{
       setpop(!pop);
    }
    const closepop =()=>{
          setpop(false);
    }
        
    return (
        <>
         {pop?
            <div style={{display:"none",position: "absolute",top: "60%",right:"100px",maxHeight:"200px" ,maxWidth:"100px",zIndex:"1",backgroundColor:"lightblue"}}>
               <span>
                <div>
                    <span>
                    <h4>CART</h4>
                    <h1 onClick={closepop}>X</h1>
                    </span>
                </div>
                <img style={{maxHeight:"100px",maxWidth:"50px",borderRadius:"15px"}} src={image}   alt="..." />
                <span>
                    <h5>
                        Sneakers
                    </h5>
                    <h6>
                        Price = $ (125*{count})
                    </h6>
                    <h5>Total no of items : {count}</h5>
                </span>
                </span>
                <button>Delete</button>
                <button>Buy Now</button>
            </div>
             :""}

        <div style={{borderBottom:"1px solid #b5b2b1"}} >
            <ul className="nav nav-underline" style={{marginLeft:"90px",}}>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Sneakers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Mens">Men's</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Womens">Women's</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Jwellary">Jwellary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Electronics">Electronics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Contact">Contact</a>
                </li>
                <li className="nav-item" style={{marginLeft:"600px",marginTop:"5px",}}>
               <img onClick={cartclick} src={cart}  alt="..."  />
                
                </li>
                <li className="nav-item">
                <img src={login}  style={{maxHeight:"40px",maxWidth:"40px"}} alt="..."  />
                </li>
            </ul>

        <br></br>
            </div>
        </>

    );
}

export default App;


