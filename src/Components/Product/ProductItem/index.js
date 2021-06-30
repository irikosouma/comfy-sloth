import React, { useState } from 'react'
//styles
import {Wrap} from './index.styles'
//images
import SearchIcon from '../../../assets/images/Search'
export default function ProductItem({data, isSelected}) {
    const [isHover, setIsHover] = useState(true)
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    return (
        <Wrap isHover={isHover} isSelected={isSelected}>
            <div className="wrap-img-icon">
                <img src={`${data.image}`} alt="default-product" className="product-img" />
                <div className='wrap-icon'>
                    <div className="icon-bgr">
                        <SearchIcon className="search-icon" />
                    </div>
                </div>
            </div>
            <div className="wrap-name-price">
                <p className="product-name">{data.name}</p>
                <p className="price">{`$${numberWithCommas(data.price /100)}`}</p>
            </div>
        </Wrap>
    )
}
