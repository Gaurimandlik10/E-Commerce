import React, { useEffect, useState } from 'react';
import './Home2.css';
import next from "./Images/icon-next.svg";
import prev from "./Images/icon-previous.svg";
function ImageSlider() {
  const imgs = [
    { id: 0, value: require('./Images/image-product-1.jpg') },
    { id: 1, value: require('./Images/image-product-2.jpg') },
    { id: 2, value: require('./Images/image-product-3.jpg') },
    { id: 3, value: require('./Images/image-product-4.jpg') },
  ]
  const [wordData, setWordData] = useState(imgs[0])
  const handleClick = (index) => {
    console.log(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }
  var slider = document.querySelector('.image');
  var i =0;
 const onClickNext =()=>{
  if(i>=imgs.length-1) i=-1;
  i++;
  return setImgs()
 }
 const onClickPrev=()=>{
 if(i<=0)  i=imgs.length;
 i--;
 return setImgs();
 }
 function setImgs(){
  return slider.setAttribute('src',`./Images/image-product-${imgs[i]}`);
 }
 const[count, setcount]=useState(0)
 const incrment=()=>{
    setcount(count+1)
  }
const decrment=()=>{
  setcount(count-1)
}
const [countitem,setcountitem]=useState(0);

  function Cartitem() {
   const counter=countitem+1;
   setcountitem(counter);
  }
  return (
    <>
    <div className="main shadow-lg">
      <div className='image_para'>
        <div>
        <img className="image" src={wordData.value} alt='...' />
        <img className="next" style={{marginRight:"950px", position: "absolute",top: "60%",right:" 0", zIndex:"1" ,opacity:"3"}} src={next}  alt='...' onClick={onClickNext}  />
        <img className="prev" style={{marginLeft:"90px", position: "absolute",top: "60%",left:" 0",zIndex:"1" , opacity:"3"}} src={prev}  alt='...' onClick={onClickPrev} />
        </div>
        <span className="text_para">
          <h4>SNEAKER COMPANY</h4>
          <h3>Fall Limited Edition <br />Sneakers</h3>
          <p className='para'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
          </p>
          <h1>$125.00 <p>50%</p></h1>
          <h5>$250.00</h5>
          <div className="my-2 buttons">
            <div className="btn-group" role="group">
              <button type="button" className="btn " onClick={decrment}>-</button>
              <button type="button" className="btn">{count}</button>
              <button type="button" className="btn " onClick={incrment}>+</button>
            </div>
            <div id="cart-btn">
              <button className="btn btn-warning addtocart" onClick={Cartitem} >Add to cart</button>
            </div>
          </div>
        </span>
      </div>
      <div className='flex_row'>
        {imgs.map((data, i) =>
          <div className="thumbnail" key={i} >
            <img style={{borderRadius:"15px"}}  className={wordData.id === i ? "clicked" : ""} src={data.value} onClick={() => handleClick(i)} height="70" width="100" alt='...' />
          </div>
        )}
      </div>
    </div>
    <div>
      <br></br>
      <br></br>
    </div>
    </>
  );
}

export default ImageSlider;