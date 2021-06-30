import React, { useState, useRef, useEffect } from 'react'
//styles
import {Wrap} from './index.styles'
//images
// import Cart from '../../assets/images/Cart'
import Minus from '../../assets/images/Minus'
import Plus from '../../assets/images/Plus'
import BinIcon from '../../assets/images/BinIcon'
export default function CartComponent({ setIsSelected, handleClickShowProduct, setIsDetail, number, setNumber, dataItem, list, setList, colorIsClick, setColorIsClick, numberProduct, setNumberProduct}) {
    // console.log('listttt', list)
    // const [selectIndex, setSelecIndex] = useState(0)
    // const [quantity, setQuantity] = useState(list[selectIndex].quantity)
    const [total, setTotal] = useState(0)
    const toTalRef = useRef(null)
    const handleMinus = (itemStock, itemQuantity, indexItem) => {
        let newValue = itemQuantity - 1
        if(itemStock === 0 || itemStock === 1) return;
        else if( itemQuantity === 1) return;
        else if(itemQuantity > 1) {
            const newList = list.map((item, index) => index === indexItem ? 
                {...item, quantity: newValue}
                :
                {...item}
            )
            setList(newList)
        }
    }
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    useEffect(() => {

        let newVal = list.map((item,index) => ((((item.price / 100 ) * item?.quantity) * 100 )/ 100))
        function getArraySum(a){
            var total= 0;
            for(var i in a) { 
                total += a[i];
            }
            return (total* 100 )/ 100;
        }
        setTotal((getArraySum(newVal)))
        const numberOfProduct = list.map((item, index) => 
            item.quantity
        )
        setNumber(getArraySum(numberOfProduct))
    }, [list])
    const handlePlus = (itemStock,itemQuantity, indexItem) => {

        let newValue = itemQuantity + 1;
        if(itemStock === 0) return;
        else if(newValue === itemStock + 1 ) return;
        else {
            const newList = list.map((item, index) => index === indexItem ? 
                {...item, quantity: newValue}
                :
                {...item}
            )
            setList(newList)
        }
    }
    const handleDelete = (indexItem) => {
        const newList = list.filter((item, index) => index !== indexItem ? item : "")
        setList(newList)
    }
    const handleProduct = () => {
        setIsDetail(false)
        setIsSelected(2);
    }
    const handleClearCard = () => {
        const newList = [];
        setList(newList)
        setNumber(0)
    }
    return (
        <Wrap>
            {number === 0 ? 
            <div className="wrap-blank-data">
                <section className="section-center-blank">
                    <h3 className="title-empty">
                        Your cart is empty
                    </h3>
                    <button className='shopping-btn' onClick={handleClickShowProduct}>Fill it</button>
                </section>
            </div>
            : 
            <div className="wrap-content">
                <div className="big-title">
                <section className='section-center'>
                    <div className='title'>
                        <button onClick={() => setIsSelected(0)}className="title home">Home</button> <span className="title about"> / Cart</span>
                    </div>
                </section>
            </div>
                <section className="section-center">
                    <div className="wrap-title">
                        <div className="item-title">
                            Item
                        </div>
                        <div className="item-title">
                            Price
                        </div>
                        <div className="item-title">
                            Quantity
                        </div>
                        <div className="item-title">
                            Subtotal
                        </div>
                        <div style={{width: 24, height: 24}}></div>
                    </div>
                    <div className="line-border"></div>
                    {list.map((item, index) => (
                    <div className="wrap-all-field" key={index}>
                        <div className=" wrap-name">
                            <img src={`${item.images[0].url}`} alt="avatar-default" className="image-style"/>
                            <div>
                                <div className="name">{item.name}</div>
                                <div className="wrap-block-color">Color : 
                                    <div>
                                        {item.color.length === 0 ? 
                                        <>
                                            <div key={index} className="color-block" style={{backgroundColor:  `${item?.colors[0]}`}}>
                                            </div>
                                        </>
                                        :
                                        <>
                                            {item?.color?.map((item, index) => item.isClick === true ?
                                            <div key={index} className="color-block" style={{backgroundColor:  item.isClick === true ?  `${item.item}` : ""}}>
                                            </div>
                                            : ""
                                            )}
                                        </>
                                        }
                                    </div>
                                </div>
                                <div className="mb-ver">{`$ ${item.price / 100}`}</div>
                            </div>
                        </div>
                        <div className="price wrap-item-data">
                            {`$ ${item.price / 100}`}
                        </div>
                        <div className="wrap-item-data">
                            <div className="quantity">
                                <button className="btn" onClick={() => handleMinus(item?.stock, item?.quantity, index)}><Minus className="plus-and-minus" /></button>
                                <p className="product-quantity">{item?.quantity}</p>
                                <button className="btn" onClick={() => handlePlus(item?.stock, item?.quantity, index)}><Plus className="plus-and-minus" /></button>
                            </div>
                        </div>
                        <div className="total wrap-item-data">
                            <div className="item-title" ref={toTalRef}> {`$ ${((((item.price / 100 ) * item?.quantity) * 100 )/ 100)} `}</div>                            
                        </div>
                        <button onClick={() => handleDelete(index)} className="btn-delete"><BinIcon className="bin-icon" /></button>
                        
                    </div>
                    ))}
                    <div className="line-border more-line"></div>
                    <div className="btn-group">
                        <button className="back-to-product" onClick={() => handleProduct()}>
                            Continue Shopping
                        </button>
                        <button className="clear-product" onClick={() => handleClearCard()}>
                            Clear Shopping Cart
                        </button>
                    </div>
                    <div className="wrap-total">
                        <div className="border-total">
                            <div className="subtotal"><div>Subtotal :</div> <div>{`$ ${numberWithCommas(total)}`}</div></div>
                            <div className="shipping-fee"><div>Shipping Fee :</div> <div>{`$ ${5.34}`}</div></div>
                            <div className="line-border more-line"></div>
                            <div className="total">Order Total :<span>{`$ ${numberWithCommas(((total + 5.34) * 100 ) /100) }  `}</span></div>
                        </div>
                    </div>
                    <div className="wrap-login">
                        <button className='btn-login'>
                            Login
                        </button>
                    </div>                        
                </section>
            </div>
        }      
        </Wrap>
    )
}
