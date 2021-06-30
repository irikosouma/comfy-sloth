import React, { useState } from 'react'
//styles
import {Wrap} from './index.styles'
//components
import Home from './Home'
import AboutUs from './AboutUs'
import Product from './Product'
import CartComponent from './Cart'

//images
import Logo from '../assets/images/Logo'
import NavDarkIcon from '../assets/images/NavDarkIcon'
import CloseBtn from '../assets/images/CloseIcon'
import Cart from '../assets/images/Cart'
import Person from '../assets/images/Person'



export default function MainPage() {
    // isOpen
    const [ setIsOpen] = useState(true)
    const [isSelected, setIsSelected] = useState(2)
    const [isDetail, setIsDetail] = useState(false)
    const [number, setNumber] = useState(0);
    const [list, setList] = useState([])
    const [colorIsClick, setColorIsClick] = useState([])
    const [numberProduct, setNumberProduct] = useState(1)
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100vw";
        document.getElementById("mySidenav").style.visibility = "visible";
    }
    const closeNav = (selected) => {
        setIsSelected(selected)
        document.getElementById("mySidenav").style.width = "0";
    }
    const handleClickShowProduct = () => {
        setIsSelected(2)
        setIsDetail(false)
    }
    const handleShowCart = () => {
        setIsSelected(3)
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <Wrap>
            <div id="mySidenav" className="sidenav">
                <div className="wrap-content">
                    <div className="wrap-logo">
                        <Logo className="logo-images logo" />
                        <CloseBtn href="" className="closebtn" onClick={() => closeNav()}>×</CloseBtn>
                    </div>
                    <a className="a-style" href="#" onClick={() => closeNav(0)}>Home</a>
                    <a className="a-style" href="#" onClick={() => closeNav(1)}>About</a>
                    <a className="a-style" href="#" onClick={() => closeNav(2)}>Products</a>
                    <div className="cart-login-wrap">
                        <div className="wrap-cart" onClick={() => handleShowCart()}>
                            Cart 
                            <Cart className="cart-style" ></Cart>
                            <span className="number">{number}</span>
                        </div>
                        <div className="wrap-login">Login<Person className="icon"/></div>
                    </div>
                </div>
            </div>
            <div className="wrap-menu">
                <div className="bound-main-component">
                    <Logo className="logo-images" />
                    <div className="menu-large">
                        <a className="a-style" href="#" onClick={() => setIsSelected(0)}>Home</a>
                        <a className="a-style" href="#" onClick={() => setIsSelected(1)}>About</a>
                        <a className="a-style" href="#" onClick={() =>  handleClickShowProduct()}>Products</a>
                    </div>
                    <div className="menu-large">
                        <div className="cart-login-wrap">
                            <div className="wrap-cart" onClick={handleShowCart}>
                                
                                Cart 
                                <Cart className="cart-style" ></Cart>
                                <span className="number">{number}</span>
                            </div>
                            <div className="wrap-login">Login<Person className="icon"/></div>
                        </div>
                    </div>
                    <NavDarkIcon className="nav-icon" onClick={() => openNav()}/>
                </div>
                
            </div>

            {isSelected === 0 ?
                <Home setIsSelected={setIsSelected} setIsDetail={setIsDetail} isSelected={isSelected}/>
                :
                <>
                {
                    isSelected === 3 ?
                    <CartComponent  
                    setIsSelected={setIsSelected} 
                    handleClickShowProduct={handleClickShowProduct} 
                    colorIsClick={colorIsClick} 
                    setColorIsClick={setColorIsClick} 
                    list={list} 
                    setList={setList} 
                    number={number} 
                    setNumber={setNumber} 
                    numberProduct={numberProduct}
                    setIsDetail={setIsDetail} 
                    setNumberProduct={setNumberProduct}/>
                    :
                    <>
                    {
                        isSelected === 1?
                        <AboutUs setIsSelected={setIsSelected}/>
                        :
                        <Product 
                        setIsSelected={setIsSelected} 
                        isDetail={isDetail} 
                        list={list} 
                        setList={setList} 
                        number={number} 
                        setNumber={setNumber} 
                        setIsDetail={setIsDetail} 
                        colorIsClick={colorIsClick} 
                        setColorIsClick={setColorIsClick} 
                        numberProduct={numberProduct} 
                        setNumberProduct={setNumberProduct}/>
                    }
                    </>

                }
                </>
            }
            <section>
                <footer className='footer'>
                    <div className="section-center">
                        <h4 className="author">
                            <span>© 2021 <span className='brand-name' style={{paddingRight: 5}}>ComfySloth </span> </span>
                            <span>All rights reserved</span>
                        </h4>
                    </div>
                </footer>
            </section>
        </Wrap>
    )
}
