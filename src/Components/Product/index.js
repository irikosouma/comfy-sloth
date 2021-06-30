import React, { useState, useEffect, useRef } from 'react'
//styles
import {Wrap} from './index.styles'
//image 
import Net from '../../assets/images/Net'
import Detail from '../../assets/images/Detail'
import Tick from '../../assets/images/Tick'
//cpmponents
import ProductItem from './ProductItem'
import DetailItems from '../DetailItems'
export default function Product({setIsSelected, isDetail, setIsDetail, list, setList, number, setNumber, numberProduct, setNumberProduct, colorIsClick, setColorIsClick}) {
    const [listProduct, setListProduct] = useState([])
    const [isClick, setIsClick] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [detailData, setDetailData] = useState('');
    const [selectedItem, setSelectedItem] = useState(null)
    const [colorList, setColorList] = useState([]) 
    const [listPrice, setListPrice] = useState(310000)
    const [isSort, setIsSort] = useState(0)
    const [isColorSort, setIsColorSort] = useState(0)
    const [shipping, setShipping] = useState(false)
    useEffect(() => {
        //api https://course-api.com/react-store-products
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            console.log('get data', json)
            
            setListProduct(json)
            return json
        })
        .then (data => {
            const newListColor = data.map((item, index) => item.colors )
            const oldArray = newListColor;
            const newArray = Array.prototype.concat.apply([], oldArray);
            const uniqueList = newArray.filter((c, index) => {
                return newArray.indexOf(c) === index;
            });
            setColorList(uniqueList)
            return data
        })
        .catch(err => {
            console.log('request fail', err)
        })

    }, [])
    useEffect(() => {
        
        const newList = listProduct.filter((item) => item.price < listPrice ? item : '')
        setListProduct(newList)
    }, [listPrice])
    const handleDetail = (itemName) => {
        setIsDetail(true)
        setDetailData(itemName.name)
        setSelectedItem(itemName)
    }
    const handleChange = (e) => {
        let newValue = e.target.value;
        setColorList(0)
        if(newValue === ""){
            setInputValue("")
            fetch('https://course-api.com/react-store-products')
            .then(response => response.json())
            .then( json => {
                // console.log('get data', json)
                setListProduct(json)
            })
            .catch(err => {
                console.log('request fail', err)
            })
        } else  if (newValue !== ""){
            setInputValue(newValue)
            const str = `${newValue}`;
            const newArr = listProduct.map((item, index) => {
                let input = str
                const re = /^[a-z].*/i;
                    const matches = item.name[0].match(input)
                    if(input.length === 1) {
                        return {...item, matches}
                    }
                    else if (0 < input.length !== 1){
                        const newmatches = item.name.match(input)
                        return {...item, matches, newmatches}
                    }
            })
            const newArrayList = newArr.filter((item, index) => item.matches || item.newmatches ? {...item} : ""
            )
            setListProduct(newArrayList)
        }
        
    }
    const handleSortAll = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(0)
            // console.log('get data', json)
            setListProduct(json)
            return json
        })
        .then( data => {
            setIsColorSort(0)
            const newList = colorList.map((item, index) => {
                return { item, isColorClick: false} 
            })   
            setColorList(newList)
        })
        .catch(err => {
            console.log('request fail', err)
        })
        
    }
    const handleSortItemOffice = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(1)
            setListProduct(json)
            return json
        })
        .then (json => {
                const newList = json.filter((item) => item.category === "office" ? item : "")
                setListProduct(newList)
        })
        .catch (err => { console.log('request fail', err)}
        )
    }
    const handleSortItemLiving = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(2)
            setListProduct(json)
            return json
        })
        .then (json => {
                const newList = json.filter((item) => item.category === "living room" ? item : "")
                setListProduct(newList)
        })
        .catch (err => { console.log('request fail', err)}
        )
    }
    const handleSortItemKitchen = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(3)
            setListProduct(json)
            return json
        }).then(json => {
            const newList = json.filter((item) => item.category === "kitchen" ? item : "")
            setListProduct(newList)
        })
        .catch (
            err => {
                console.log('request fail', err)
            }
        )
    }
    const handleSortItemBed = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(4)
            setListProduct(json)
            return json
        }).then(json => {
            const newList = json.filter((item) => item.category === "bedroom" ? item : "")
            setListProduct(newList)
        })
        .catch (
            err => {
                console.log('request fail', err)
            }
        )
    }
    const handleSortItemDining = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(5)
            setListProduct(json)
            return json
        }).then(json => {
            const newList = json.filter((item) => item.category === "dining" ? item : "")
            setListProduct(newList)
        })
        .catch (
            err => {
                console.log('request fail', err)
            }
        )
    }
    const handleSortItemKids = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {
            setIsSort(6)
            setListProduct(json)
            return json
        }).then(json => {
            const newList = json.filter((item, index) => item.category === "kids" ? item : "")
            setListProduct(newList)
        })
        .catch (
            err => {
                console.log('request fail', err)
            }
        )
    }
    const handleSortMarcos = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {            
            setListProduct(json)
            setIsSort(7)
            return json
        })
        .then( json => {
                const newList = json.filter((item) => item.company === "marcos" ? item : "")
                setListProduct(newList)
            }
        )
        .catch(err => {
            console.log('request fail', err)
        })
    }
    const handleSortLiddy = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {            
            setListProduct(json)
            setIsSort(8)
            return json
        })
        .then( json => {
                const newList = json.filter((item) => item.company === "liddy" ? item : "")
                setListProduct(newList)
            }
        )
        .catch(err => {
            console.log('request fail', err)
        })
    }
    const handleSortIkea = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {            
            setListProduct(json)
            setIsSort(9)
            
            return json
        })
        .then( json => {
                const newList = json.filter((item) => item.company === "ikea" ? item : "")
                setListProduct(newList)
            }
        )
        .catch(err => {
            console.log('request fail', err)
        })
    }
    const handleSortCaressa = () => {
        fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then( json => {            
            setListProduct(json)
            setIsSort(10)
            return json
        })
        .then( json => {
                const newList = json.filter((item) => item.company === "caressa" ? item : "")
                setListProduct(newList)
            }
        )
        .catch(err => {
            console.log('request fail', err)
        })
    }
    const changeFunc = () => {
        const selectBox = document.getElementById("selectBox");
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if(selectedValue === selectBox.options[0].value) {
            handleSortAll()
        }
        else if(selectedValue === selectBox.options[1].value){
            handleSortMarcos()
        } else if(selectedValue === selectBox.options[2].value) {
            handleSortLiddy()
        }
        else if(selectedValue === selectBox.options[3].value) {
            handleSortIkea()
        }
        else {
            handleSortCaressa()
        }
        
    }
    const handleChangeValue = (e) => {
        let newVal = e.target.value
        let maxVal = e.target.max 
        setListPrice(newVal)
    }
    const handleClickColor = (indexItem) => {
            const newList = colorList.map((item, index) => index === indexItem ?
                {item, isColorClick: true}
                : 
                {item, isColorClick: false}
            )   
            setColorList(newList)
            setIsColorSort(indexItem + 1)
        if(indexItem === 0){
            fetch('https://course-api.com/react-store-products')
            .then(response => response.json())
            .then( json => {
                setListProduct(json)
                return json
            })
            .then( json => {
                const newListData = json.filter((item) => item.colors.includes("#ff0000") ? item : '' )
                setListProduct(newListData)
            })
            .catch(err => {
                console.log('request fail', err)
            })
        }
        else if(indexItem === 1){
            fetch('https://course-api.com/react-store-products')
            .then(response => response.json())
            .then( json => {
                setListProduct(json)
                return json
            })
            .then( json => {
                const newListData = json.filter((item) => item.colors.includes("#00ff00") ? item : '' )
                setListProduct(newListData)
            })
            .catch(err => {
                console.log('request fail', err)
            })
        }
        else if(indexItem === 2) {
            fetch('https://course-api.com/react-store-products')
            .then(response => response.json())
            .then( json => {
                setListProduct(json)
                return json
            })
            .then( json => {
                const newListData = json.filter((item) => item.colors.includes("#0000ff") ? item : '' )
                setListProduct(newListData)
            })
            .catch(err => {
                console.log('request fail', err)
            })
        }
        else if(indexItem === 3) {
            fetch('https://course-api.com/react-store-products')
            .then ( response => response.json())
            .then(json => {
                setListProduct(json)
                return json
            })
            .then ( json => {
                const newListData = json.filter((item) => item.colors.includes("#000") ? item : "")
                setListProduct(newListData)
            })
            .catch(err=> {
                console.log('request fail', err)
            })
        }
        else if(indexItem === 4) {
            fetch('https://course-api.com/react-store-products')
            .then ( response => response.json())
            .then(json => {
                setListProduct(json)
                return json
            })
            .then ( json => {
                const newListData = json.filter((item) => item.colors.includes("#ffb900") ? item : "")
                setListProduct(newListData)
            })
            .catch(err=> {
                console.log('request fail', err)
            })
        }
    }
    const handleClearAll = () => {
        window.location.reload();
        setIsSelected(2)
        
    }
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    const handleSortLowest = () => {
        const newList = listProduct.map((item) => {
            return {...item}
        })

        newList.sort((firstItem, secondItem) => firstItem.price - secondItem.price)
        setListProduct(newList)
    }
    const handleSortHighest = () => {
        const newList = listProduct.map((item) => {
            return {...item}
        })

        newList.sort((firstItem, secondItem) => firstItem.price - secondItem.price).reverse()
        setListProduct(newList)
    }
    const handleSortAtoZ = () => {
        const newList = listProduct.map((item, index) => {
            return {...item}
        })
        newList.sort((a,b) => {
            return a.name.localeCompare(b.name)
        });
        setListProduct(newList)
    }
    const handleSortZtoA = () => {
        const newList = listProduct.map((item, index) => {
            return {...item}
        })
        newList.sort((a,b) => {
            return a.name.localeCompare(b.name)
        }).reverse()
        setListProduct(newList)
    }
    const handleSortByNameAndPrice = () => {
        const selectBox = document.getElementById("priceNameBox");
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if(selectedValue === selectBox.options[0].value) {
            handleSortLowest()
        }
        else if(selectedValue === selectBox.options[1].value){
            handleSortHighest()
        } 
        else if(selectedValue === selectBox.options[2].value) {
            handleSortAtoZ()
        }
        else if(selectedValue === selectBox.options[3].value) {
            handleSortZtoA()
        }
    }
    const handleShipping = () => {
        if(document.getElementById('vehicle1').checked === true && isSort === 0) {
            const newList = listProduct.filter((item) => item.shipping === true ? item : "")
            setListProduct(newList)
        } else if(document.getElementById('vehicle1').checked !== true && isSort === 0) {
            handleSortAll()
        }
        else if(document.getElementById('vehicle1').checked === true && isSort === 1) {
            const newList = listProduct.filter((item) => item.category === "office" && item.shipping === true ? item : "")
            setListProduct(newList)
        } else if(document.getElementById('vehicle1').checked !== true && isSort === 1){
            handleSortItemOffice()
        }
        else if(document.getElementById('vehicle1').checked === true && isSort === 2) {
                const newList = listProduct.filter((item) => item.category === "living room" && item.shipping === true ? item : "")
                setListProduct(newList)
        } else if(document.getElementById('vehicle1').checked !== true && isSort === 2) {
            handleSortItemLiving()
        }
        else if(document.getElementById('vehicle1').checked === true  && isSort === 3) {
                const newList = listProduct.filter((item) => item.category === "kitchen" && item.shipping === true ? item : "")
                setListProduct(newList)
        } else if(document.getElementById('vehicle1').checked !== true && isSort === 3){
            handleSortItemKitchen()
        }
        else if(document.getElementById('vehicle1').checked === true && isSort === 4) {
                const newList = listProduct.filter((item) => item.category === "bedroom" && item.shipping === true ? item : "")
                setListProduct(newList)
        } else if(document.getElementById('vehicle1').checked !== true && isSort === 4) {
            handleSortItemBed()
        }
        else if(document.getElementById('vehicle1').checked === true && isSort === 5) {
                const newList = listProduct.filter((item) => item.category === "dining" && item.shipping === true ? item : "")
                setListProduct(newList)
        } else  if(document.getElementById('vehicle1').checked !== true && isSort === 5) {
            handleSortItemDining()
        }
        else if(document.getElementById('vehicle1').checked === true && isSort === 6) {
                const newList = listProduct.filter((item) => item.category === "kids" && item.shipping === true ? item : "")
                setListProduct(newList)
        } else if(document.getElementById('vehicle1').checked !== true && isSort === 6){
            handleSortItemKids()
        }
    }
    return (
        <Wrap isClick={isClick} isSort={isSort}>
            {isDetail === true ? 
            <DetailItems 
            data={detailData} 
            setIsSelected={setIsSelected} 
            setIsDetail={setIsDetail} 
            number={number} 
            setNumber={setNumber} 
            item={selectedItem} 
            list={list} 
            setList={setList} 
            numberProduct={numberProduct} 
            setNumberProduct={setNumberProduct} 
            colorIsClick={colorIsClick} 
            setColorIsClick={setColorIsClick} 
            />
            :
            <>
            <div className="big-title">
                <section className='section-center'>
                    <div className='title'>
                        <button onClick={() => setIsSelected(0)}className="title home">Home</button> <span className="title about"> / Products</span>
                    </div>
                </section>
            </div>
            <div className="main-contents">
                <div className="bound">
                    <div className="sort-field">
                        <input type="text" placeholder="Search" className="input-search-style" value={inputValue} onChange={(e) => handleChange(e)}></input>
                        <h3 className="title-sort">Category</h3>
                        <div className="sort-item" style={{borderBottom: isSort === 0 ? '1px solid #617d98' : 'none'}} onClick={handleSortAll}>All</div>
                        <div className="sort-item" style={{borderBottom: isSort === 1 ? '1px solid #617d98' : 'none'}} onClick={handleSortItemOffice}>Office</div>
                        <div className="sort-item" style={{borderBottom: isSort === 2 ? '1px solid #617d98' : 'none'}} onClick={handleSortItemLiving}>Living Room</div>
                        <div className="sort-item" style={{borderBottom: isSort === 3 ? '1px solid #617d98' : 'none'}} onClick={handleSortItemKitchen}>Kitchen</div>
                        <div className="sort-item" style={{borderBottom: isSort === 4 ? '1px solid #617d98' : 'none'}} onClick={handleSortItemBed}>Bedroom</div>
                        <div className="sort-item" style={{borderBottom: isSort === 5 ? '1px solid #617d98' : 'none'}} onClick={handleSortItemDining}>Dining</div>
                        <div className="sort-item" style={{borderBottom: isSort === 6 ? '1px solid #617d98' : 'none'}} onClick={handleSortItemKids}>Kids</div>
                        <div className='sort'>
                            <p className="title-sort">Company  </p>
                            <select id="selectBox" onChange={changeFunc}>
                                <option className="sort-item" style={{borderBottom: `${isColorSort === 0 ? '1px solid #617d98': 'none'}`}} value="0" onClick={handleSortAll}>All</option>
                                <option className="sort-item"  value="1" onClick={handleSortMarcos}>marcos</option>
                                <option className="sort-item"  value="2" onClick={handleSortLiddy}>liddy</option>
                                <option className="sort-item"  value="3" onClick={handleSortIkea}>ikea</option>
                                <option className="sort-item"  value="4" onClick={handleSortCaressa}>caressa</option>
                            </select>
                        </div>
                        <h3 className="title-sort">Colors</h3>
                        
                        <div className="wrap-color-sort">
                            <div className="sort-item" style={{borderBottom: isColorSort === 0 ? '1px solid #617d98' : 'none'}} onClick={handleSortAll}>All</div>
                            <div className="color-box" >
                                {/* {listProduct.map((item, index) => (
                                    <div key={index} className="color-block" style={{backgroundColor: `${item}`, opacity: item.isColorClick === true ? "1": "0.5"}} onClick={() =>handleClickColor(index)}>
                                        {
                                            item.isColorClick === true ?
                                            <Tick style={{fill: "#fff"}} className="icon-style"/>
                                            : 
                                            ""
                                        }
                                    </div>
                                ))} */}
                                {colorList.map((item, index) => (
                                    <div key={index} className="color-block" style={{backgroundColor: `${item}`, opacity: item.isColorClick === true ? "1": "0.5"}} onClick={() =>handleClickColor(index)}>
                                        {
                                            item.isColorClick === true ?
                                            <Tick style={{fill: "#fff"}} className="icon-style"/>
                                            : 
                                            ""
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h3 className="title-sort">Price</h3>
                        <div className="sort-value">{`$ ${numberWithCommas(listPrice / 100)}`}</div>
                        <input type="range" id="vol" name="vol" min="0" onChange={(e) => handleChangeValue(e)} defaultValue="310000" max="310000"/>
                        <form action="/action_page.php" className="wrap-shipping">
                            <label className="free-ship-btn" htmlFor="freeShip"> free shipping</label>
                            <input type="checkbox" id="vehicle1" name="freeShip" defaultValue="free" onClick={handleShipping}/>
                            <br />
                            
                        </form>
                        <button className="btn-clear" onClick={handleClearAll}>Clear filters</button>
                    </div>
                    <div className="wrap-all-product">
                        <div className="sort-area">
                            <div className="group-btn">
                                <button className="btn-net" onClick={() =>setIsClick(0)}>
                                    <Net className="btn-icon"/>
                                </button>
                                <button className="btn-detail" onClick={() => setIsClick(1)}>
                                    <Detail  className="btn-icon-detail"/>
                                </button>
                            </div>
                            <p>{listProduct.length} Products Found</p>
                            <span className="solid-line"></span>
                            <div className='sort'>
                                <p>Sort by</p>
                                <select id="priceNameBox" onChange={handleSortByNameAndPrice}>
                                    <option value="0" onClick={handleSortLowest}>Price (Lowest)</option>
                                    <option value="1" onClick={handleSortHighest}>Price (Highest)</option>
                                    <option value="2" onClick={handleSortAtoZ}>Name (A - Z)</option>
                                    <option value="3" onClick={handleSortZtoA}>Name (Z - A)</option>
                                </select>
                            </div>
                        </div>
                        {listProduct.length === 0 ?
                        <div>Sorry, no products matched your search.</div>
                        :
                        <>
                        {isClick === 0 ? 
                            <div className="wrap-product">
                                {listProduct?.map((item,index) => (
                                    <div key={index} className="wrap-item">
                                        <ProductItem data={item} />
                                    </div>
                                ))}
                            </div> 
                            :
                            <div className="detail-list">
                                {listProduct?.map((item, index) => (
                                    <div key={index} className="wrap-detail-product">
                                        <img src={item.image} alt="default" className="detail-product-img"/>
                                        <div>
                                            <div className="detail-name">{item.name}</div>
                                            <div className="price">{`$ ${numberWithCommas(item.price / 100)} `}</div>
                                            <div className="detail-info">{item.description}</div>
                                            <button className="btn-detail" onClick={() => handleDetail(item)}>Details</button>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        }
                        </>                
                    }
                    </div>
                </div>
            </div>
            </>
            }
        </Wrap>
    )
}
