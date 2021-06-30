import React, { useState, useEffect } from 'react'
//styles
import {Wrap} from './index.styles'
//images
import bigImg from '../../assets/images/main-product.jpeg'
import smallImg from '../../assets/images/sub-product.jpeg'
//components
import ProductItem from '../Product/ProductItem'

//data
import data from '../../data/dataVision'

export default function Home({setIsSelected, setIsDetail, isSelected}) {
    const [list, setList] = useState([])
    const [selected] = useState(7)
    const [selected1] = useState(8)
    const [selected2] = useState(11)
    const [listVision] = useState(data)
    
    useEffect(() => {
        //api https://course-api.com/react-store-products
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then(json => {
            let newArr = json
            // console.log('get data', newArr)
            setList(newArr)
            // console.log('list', list)
        })
        .catch(err => {
            console.log('request failed', err)
        })
    }, [])
    const handleOpenProduct = () => {
        setIsDetail(false)
        setIsSelected(2)
    }
    return (
        <Wrap>
            <section>
                <div className="wrap-main-product section-center">
                    <div className="wrap-header-product">
                        <h3 className="title">
                            Design Your<br/> Comfort Zone
                        </h3>
                        <p className="detail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <button className='shopping-btn' onClick={() => handleOpenProduct()}>Shop now</button>
                    </div>
                    <div className="block-images">
                        <img src={bigImg} alt="big-images" className="big-images images" />
                        <img src={smallImg} alt="small-images" className="small-images images" />
                    </div>
                </div>
            </section>
            <section>
                <div className="wrap-feature-product">
                    <div className="section-center">
                        <div className="center-item">
                            <div className="title medium">Featured Products
                                <span className='underline'></span>
                            </div>
                            {list.length !== 0 ? 
                            <div className="wrap-product ">
                                <ProductItem data={list[selected]}  isSelected={isSelected} />
                                <ProductItem data={list[selected1]} isSelected={isSelected} />
                                <ProductItem data={list[selected2]} isSelected={isSelected} />
                            </div>
                            :""
                            }
                            <button className="shopping-btn all-product" onClick={() => handleOpenProduct()}>All Products</button>

                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="section-center">
                    
                </div>
                <div className="wrap-custom-product">
                    <div className="section-center trans-center">
                        <div className="wrap-custom-title">
                            <div className="custom-title">
                                Custom Furniture
                                <br/>
                                Built Only For You
                            </div>
                            <div className="custom-detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                            </div>
                        </div>
                        <div className="wrap-vision">
                            {listVision?.map((item, index) => (
                                <div className="vision-item" key={index}>
                                    <span className='wrap-custom-product-icon'>
                                        <img src={item.img} alt="default-images" className="custom-product-icon"/>
                                    </span>
                                    <p className="custom-small-title">
                                    {item.title}
                                    </p>
                                    <p className="custom-detail">
                                    {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="discount-for-signup">
                    <div className='section-center'>
                        <div className="signup-title">
                            Join our newsletter and get 20% off
                        </div>
                        <div className='wrap-detail-email'>
                            <div className="detail-email">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</div>
                            <div className="customer-email">
                                <input type='text' className='input-email' placeholder='Enter Email'></input>
                                <button className="btn-submit-email">Subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section>
                <footer className='footer'>
                    <div className="section-center">
                        <h4 className="author">
                            <span>© 2021 <span className='brand-name'>ComfySloth</span> </span>
                            <span>All rights reserved</span>
                        </h4>
                    </div>
                </footer>
            </section> */}

        </Wrap>
    )
}
