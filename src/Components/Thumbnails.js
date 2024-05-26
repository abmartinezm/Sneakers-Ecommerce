import {useRef} from "react";
import Product1 from '../images/image-product-1.jpg'
import Product2 from '../images/image-product-2.jpg'
import Product3 from '../images/image-product-3.jpg'
import Product4 from '../images/image-product-4.jpg'


function Thumbnails({lightboxDisplay,handleClick, active, activeSlide}) {
const ref= useRef(null);

 
  return (
    <div  className={lightboxDisplay === true ? ' thumbnails-container' : 'thumbnails-container'}>
      <div className="products" onClick={handleClick} >
        <div className="thumb1" >
          <img ref={ref} id={lightboxDisplay === false ? 'img1' : 'img-lgtbox1'} className={active ===1 || activeSlide ===1 ? 'highlight overview-img' : "overview-img"} src={Product1} alt=""  />
        </div>
        <div className="thumb2">
          <img ref={ref} id={lightboxDisplay === false ? 'img2' : 'img-lgtbox2'} className={active ===2 || activeSlide ===2 ? 'highlight overview-img' : "overview-img"} src={Product2} alt=""  />
        </div>
        <div className="thumb3">
          <img ref={ref} id={lightboxDisplay === false ? 'img3' : 'img-lgtbox3'} className={active ===3 || activeSlide ===3 ? 'highlight overview-img' : "overview-img"} src={Product3} alt=""  />
        </div>
        <div className="thumb4">
          <img ref={ref} id={lightboxDisplay === false ? 'img4' : 'img-lgtbox4'} className={active ===4  || activeSlide ===4 ? 'highlight overview-img' : "overview-img"} src={Product4} alt=""  />
        </div>
      </div>
      
    </div>
  );
}

export default Thumbnails;
