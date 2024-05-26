
import './App.css';
import { useEffect, useState } from 'react';

import Header from '../src/Components/Header'
import { SliderData } from '../src/Components/SliderData';
import Slider from '../src/Components/Slider';
import Thumbnails from './Components/Thumbnails';
import PriceBasket from '../src/Components/PriceBasket';
import MobileMenu from '../src/Components/MobileMenu';
import Popup from '../src/Components/Popup';
import LightBox from './Components/LightBox';



function App() {
  // const [showBanner, setShowBanner] =useState(false);
  var localNum = Number(localStorage.getItem('itemCount'));



  useEffect(() => {
    
    if(window.localStorage.getItem('itemCount')){
      localStorage.setItem('firstLoad',1);
      // setShowBanner(true);
      console.log('This is the initial load');
      console.log('test',localNum);
   
    }else{
      console.log('This is a page refresh');
    }
    window.localStorage.getItem('itemCount')

  }, [localNum]);

  

const [open, setOpen]=useState(false);
const [openCart, setOpenCart]=useState(false);
const [count, setCount]=useState(0);//item count
const [empty,setEmpty]=useState(0);//cart count
const [del, setDel]=useState(false);
const [add, setAdd]=useState(localNum === null || isNaN(localNum) ? 0 : localNum);
const [addItems, setAddItems]=useState(false);
const [width,setWidth]=useState(window.innerWidth);
const [current,setCurrent]=useState(0);


useEffect(()=>{
  window.localStorage.setItem('itemCount', JSON.stringify(add));
  
},[add])

const handleCancelModal = (event) => {
        
  setDel(false);
  console.log('set false',del)
}


const handleDeleteItems=()=>{
    window.localStorage.clear('itemCount');
    window.localStorage.removeItem('itemCount');
    handleCancelModal();
    setAddItems(false )
    setAdd(0);
}

const breakpoint=700;

useEffect(()=>{
  const handleResizeWindow=()=>setWidth(window.innerWidth);
  window.addEventListener("resize",handleResizeWindow);
  console.log(width, 'width')

  return()=>{
    window.removeEventListener("resize",handleResizeWindow);
  }
},[width])



const handleDelete = ()=>{
  setDel(true)
  console.log('delete called',del)
}

const handleMenu=()=>{
  setOpen(!open);
}

const handleCart=()=>{
  setOpenCart(!openCart);
  console.log('click cart', openCart);
  
}

const handlePlus = ()=>{

  setCount((prevValue)=>{return prevValue +1})

 
  setEmpty((prevValue)=>{return prevValue +1})


  console.log('click plus', count)

}

const handleMinus = ()=>{
  // setCount(count - 1);
  setCount((prevValue)=>{
    if (count !== 0 ) {
      return prevValue - 1;
    } 
    else if ( count <=0){
      return count;
    }
    else  {
      return 0;
    }
  })

  setEmpty((prevValue)=>{
    if (empty !== 0 ) {
      return prevValue - 1;
    } 
    else if ( empty <=0){
      return empty;
    }
    else  {
      return 0;
    }
  })

  console.log('click minus', count);
}

const addToCart = ()=>{

  // var diff=0;
  setEmpty(empty)
  setCount(0);
  setEmpty(0);
  window.localStorage.setItem('itemCount', JSON.stringify(add));


    // setAdd(empty-diff);
    setAdd(localNum+empty);
    console.log('add', add, 'emtpy', empty,'localNum', localNum)
    

    setAddItems(true);

  
}



//lightbox, slider
const [lightboxDisplay, setLightboxDisplay]=useState(false);
const [imageToShow, setImageToShow]=useState('')
const [currentSlide,setCurrentSlide]=useState(0);
const [active, setActive]=useState(0);
const [activeSlide,setActiveSlide]=useState(1)

const handleLightboxClick=e=>{
  setLightboxDisplay(true);
}

const lenght=SliderData.length;

  const nextSlide=()=>{
    setCurrent(current===lenght -1 ? 0:current +1);
    setActive(active===lenght  ? 1 : active+1);
  };

  const prevSlide=()=>{
    setCurrent(current===0 ? lenght-1 : current -1)
    setActive(active===1 ? lenght : active-1);
  }


  const lightBoxNextSlide=()=>{ 
    setCurrentSlide(currentSlide===lenght -1 ? 0:currentSlide +1);
    setActiveSlide(activeSlide===lenght  ? 1 : activeSlide+1)
    console.log(activeSlide);
  };

  const lightBoxPrevSlide=()=>{
    setCurrentSlide(currentSlide===0 ? lenght-1 : currentSlide -1)
    setActiveSlide(activeSlide===1 ? lenght : activeSlide-1)
 
  }

  function handleClick(e) {

    if(e.target.id === 'img1'){

      setCurrent(0);
      setActive(1);
    }

    if(e.target.id === 'img-lgtbox1'){
      setCurrentSlide(0);
      setActiveSlide(1)
    }



    if(e.target.id === 'img2'){

      setCurrent(1);
      setActive(2);
    }

    if(e.target.id === 'img-lgtbox2'){
      setCurrentSlide(1);
      setActiveSlide(2)
    }

    if(e.target.id === 'img3'){

      setCurrent(2);
      setActive(3);
    }

    if(e.target.id === 'img-lgtbox3'){
      setCurrentSlide(2);
      setActiveSlide(3)
    }

    if(e.target.id === 'img4'){

      setCurrent(3);
      setActive(4);
    }

    if(e.target.id === 'img-lgtbox4'){
      setCurrentSlide(3);
      setActiveSlide(4)
    }


  }

  const [closeLightBox, setCloseLightBox]=useState(false);
  

  const handleClose = event => {
    setCloseLightBox(close=>!close)
    setLightboxDisplay(false)
    console.log('click', closeLightBox )
  }

  console.log('lightbox', lightboxDisplay)



  return (
    <div className="App">
      
      <Header  localNum={localNum} addItems={addItems} handleMinus={handleMinus} handlePlus={handlePlus} add={add} handleDelete={handleDelete} setOpenCart={setOpenCart} empty={empty}  open={open} handleMenu={handleMenu} openCart={openCart} setOpen={setOpen} handleCart={handleCart} addToCart={addToCart}/>
      
      <MobileMenu open={open} handleMenu={handleMenu} />
      
      <main className='main'>
      <Slider width={width} breakpoint={breakpoint} current={current} prevSlide={prevSlide} nextSlide={nextSlide} handleLightboxClick={handleLightboxClick}  imageToShow={imageToShow} setImageToShow={setImageToShow}   setLightboxDisplay={lightboxDisplay}  handleDelete={handleDelete}  slides={SliderData} count={count} empty={empty} setEmpty={setEmpty} addToCart={addToCart}  handleCart={handleCart} openCart={openCart} setOpen={setOpen} />
      <Popup handleCancelModal={handleCancelModal} del={del} setDel={setDel} handleDeleteItems={handleDeleteItems}/>
      {closeLightBox ? ''  : ''}

      {lightboxDisplay ? <LightBox closeLightBox={closeLightBox} handleClose={handleClose} activeSlide={activeSlide} handleClick={handleClick} currentSlide={currentSlide} lightBoxPrevSlide={lightBoxPrevSlide} lightBoxNextSlide={lightBoxNextSlide} slides={SliderData} imageToShow={imageToShow} setImageToShow={setImageToShow} lightboxDisplay={lightboxDisplay} setLightboxDisplay={lightboxDisplay} /> : ''}
      
      {width > breakpoint ? <Thumbnails lightboxDisplay={lightboxDisplay} handleClick={handleClick} active={active} /> : '' }
      
      <PriceBasket  count={count}  handlePlus={handlePlus} handleMinus={handleMinus}  addToCart={addToCart}/>
      </main>
      
    </div>
  );
}

export default App;
