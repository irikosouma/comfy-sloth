import React, { useEffect, useState } from 'react'
//styles
import {Wrap} from './index.styles'
//images
import Tick from '../../assets/images/Tick'
import Plus from '../../assets/images/Plus'
import Minus from '../../assets/images/Minus'
import Star from '../../assets/images/Star'
import BlankStar from '../../assets/images/BlankStar'
import HalfStar from '../../assets/images/HalfStar'
export default function DetailItems({setIsSelected, data, setIsDetail, item, number, setNumber, list, setList, numberProduct, setNumberProduct, colorIsClick, setColorIsClick}) {
    const [selected, setSelected] = useState(item)
    const [selectedImg, setSelectedImg] = useState([])
    const [imageSelected, setImageSelected] = useState(item.image)
    const [colorList, setColorList] = useState(selected.colors)
    const START = 1;
    // `${Math.round(selected.stars)}`
    const [newStar] = useState(Array.from({length: 5}, (x, i) => i + START))
    const [newFullStar, setNewFullStar] = useState([])
    const [newBlankStar, setNewBlankStar] = useState([])
    const [newHalfStar , setNewHalfStar] = useState([])
    const value = selected.stars;
    useEffect(() => {
        const checkValue = (value) => {
            if(value) {
                let looptijd_1 = value;
                var split_looptijden_1 = looptijd_1.toString().split('.');
                // console.log('so nguyen',split_looptijden_1[0]); 
                // console.log('so thap phan' ,split_looptijden_1[1] / 10);
                let resultDecimal = split_looptijden_1[1] / 10;
                let resultBlank = (newStar?.length - selected?.stars)
                if(resultBlank === 0) {
                    setNewFullStar(newStar)
                    setNewBlankStar([])
                    setNewHalfStar([])
                }
                else if(resultBlank >= 1){
                    
                    if((value - split_looptijden_1[0] ) < 0.5 ) {
                        const newFullStars = Array.from({length: `${Math.round(selected?.stars)}`}, (x, i) => i + START);
                        setNewFullStar(newFullStars)
                        const newHalfStars = [1];
                        setNewHalfStar(newHalfStars);
                        const newBlank = Array.from({length: `${newStar?.length}` - `${Math.ceil(selected?.stars)}`}, (x, i) => i + START);
                        setNewBlankStar(newBlank)
                    }
                    else if((value - split_looptijden_1[0] ) >= 0.5) {
                        const newFullStar = Array.from({length: `${Math.ceil(selected?.stars)}`}, (x, i) => i + START);
                        setNewFullStar(newFullStar)
                        const newBlank = Array.from({length: `${newStar?.length}` - `${Math.ceil(selected?.stars)}`}, (x, i) => i + START);
                        setNewBlankStar(newBlank)
                    }
                } 
                else if(resultBlank < 1 ){

                    if(resultDecimal >= 0.5){
                        const newArr = Array.from({length: `${Math.round(selected?.stars)}`}, (x, i) => i + START)
                        setNewFullStar(newArr)
                        setNewBlankStar([])
                    }
                    else if(resultDecimal < 0.5) {
                        const newlist = [1];
                        setNewHalfStar(newlist)
                        const newList = Array.from({length: `${split_looptijden_1[0]}` }, (x, i) => i + START)
                        setNewFullStar(newList) 
                        setNewBlankStar([])
                    }
                }
            
            }
            else return;
        }
        checkValue(value)
    }, [value])
    // const [numberProduct, setNumberProduct] = useState(1)
    const handleProduct = () => {
        setIsDetail(false)
        setIsSelected(2);
    }
    useEffect(() => {
        let api = `https://course-api.com/react-store-single-product?id=${item.id}`
        //api https://course-api.com/react-store-single-product?id=recrfxv3EwpvJwvjq
        fetch(`${api}`)
        .then(response => response.json())
        .then( json => {
            setSelected(json)
            setSelectedImg(json.images)
            // console.log('get data', json)
        })
        .catch(err => {
            console.log('request fail', err)
        })
    }, [item, data])
    useEffect(() => {
        const newList = colorList.map((item, index) => index === 0 ?
            {item, isClick: true}
            : 
            {item, isClick: false}
        )
        setColorList(newList)
    }, [])
    const handleClickColor = (indexItem) => {
        const newList = colorList.map((item, index) => index === indexItem ?
            {...item, isClick: true}
            : 
            {...item, isClick: false}
        )
        // console.log('handle color', newList)
        setColorList(newList)
        setColorIsClick(newList)
    }
    const handleMinus = () => {
        if(numberProduct === 1) return;
        else if(numberProduct > 1) {
            setNumberProduct(numberProduct - 1);
            setNumber(numberProduct - 1);
        }
    }
    const handlePlus = () => {
        if(numberProduct === selected.stock) return;
        else if(numberProduct <= selected?.stock - 1) {
            setNumberProduct( numberProduct + 1)
            setNumber(numberProduct + 1)
        }
    }
    const handleClickOpenCart = () => {
        setIsSelected(3)
        setNumber(numberProduct)
        
        const newListColor = colorList.filter((item,index) => item.isClick === true ? item : "")
        if(newListColor.length === 0) {
            setColorIsClick(colorList[0])
        } else {
            setColorIsClick(newListColor)
        }
        const newList = [...list, {...selected,  quantity: numberProduct, color: colorIsClick}]
        // console.log('new list', newList)
        setList(newList)
    }
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    return (
        <Wrap >
            <div className="big-title">
                <section className='section-center'>
                    <div className='title'>
                        <button  onClick={() => setIsSelected(0)} className="title home">Home</button> <button className="title home" onClick={() => handleProduct()}> / Product</button> <span className="title product">/ {data}</span>
                    </div>
                </section>
            </div>
            <section className="section-center">
                <button className="back-to-product" onClick={() => handleProduct()}>
                    Back to products
                </button>
                <div className="wrap-content">
                    <div>
                        <img src={imageSelected} alt="image-default" className="img-detail" />
                        <div className='wrap-all-img'>
                            {selectedImg?.map((item, index) => (
                                <div key={index} className="small-img-item" >
                                    <img src={item.url} alt="image-default" className="small-img" onClick={() => setImageSelected(item.url)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='wrap-info'>
                        <h3 className="name">{selected?.name}</h3>
                        <div className="review-customer">
                            <div className='star'>
                                {newFullStar.map((item, index) => (
                                <div key={index}>
                                    <Star style={{fill: "rgb(255, 185, 0)"}} className="star-icon"/>
                                </div>
                                
                            ))}
                                {newHalfStar?.map((item, index) => (
                                    <div key={index}>
                                    <HalfStar style={{fill: "rgb(255, 185, 0)"}} className="star-icon"/>
                                </div>
                                ))}
                                {newBlankStar.map((item, index) => (
                                    <div key={index}>
                                        <BlankStar style={{fill: "rgb(255, 185, 0)"}} className="star-icon"/>
                                    </div>
                                ))}
                            </div>
                            <span className="review">{`(${selected?.reviews} customer reviews)`}</span>
                        </div>
                        <div className='price'>{`$ ${numberWithCommas(selected?.price / 100)}`}</div>
                        <div className="description">{selected?.description}</div>
                        <div className="stock">Available: <span className="item-in-stock">{selected?.stock !== 0 ? "in Stock" : "not available"}</span></div>
                        <div className='id-item'>SKU: <span className="item-in-stock">{selected?.id}</span></div>
                        <div className="brand">Brand: <span className="item-in-stock">{selected?.company}</span></div>
                        <div className="border-line">
                        </div>
                        {selected?.stock === 0 ? "" :
                            <>
                                <div className="color ">Colors 
                                    <span className="item-in-color">
                                        {colorList.map((item, index) => (
                                            <div className="item-color" key={index} style={{backgroundColor: `${item}`, opacity: item.isClick === true ? "1": "0.5"}} onClick={() =>handleClickColor(index)} >
                                                {
                                                    item.isClick === true ?
                                                    <Tick style={{fill: "#fff"}} />
                                                    : 
                                                    ""
                                                }
                                            </div>
                                    ))}
                                    </span>
                                </div>
                                <div className="quantity">
                                    <button className="btn" onClick={handleMinus}><Minus className="plus-and-minus" /></button>
                                    <p className="product-quantity">{numberProduct}</p>
                                    <button className="btn" onClick={handlePlus}><Plus className="plus-and-minus" /></button>
                                </div>
                                <button className="add back-to-product" onClick={() => handleClickOpenCart()} >
                                    Add to Cart
                                </button>
                            </>
                            
                        }
                        
                    </div>
                </div>
            </section>
        </Wrap>
    )
}
