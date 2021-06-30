import styled from 'styled-components';
const Wrap = styled.div`
    .big-title {
        background-color: #eaded7;
        min-height: 20vh;
    }
    .section-center {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        padding: 5rem 0;
        
    }
    .title {
        font-size: 32px;
        line-height: 32px;
        color: #795744;
        font-weight: 700;
        min-height: calc(20vh - 10rem);
    }
    .product {
        color: #453227;
        text-transform: capitalize;
        cursor: pointer;
    }
    .home {
        appearance: none;
        border: none;
        background-color: none;
        outline: none;
        cursor: pointer;
        background: none;
    }
    .back-to-product {
        text-transform: uppercase;
        color: #fff;
        padding: 7px 10px;
        font-size: 14px;
        line-height: 21px;
        background-color: #ab7a5f;
        outline: none;
        border: none;
        appearance: none;
        border-radius: 4px;
        transition: all .5s linear;
        margin-bottom: 32px;
        :hover {
            color: #453227;
            background-color: #C5A492;
        }
    }
    .wrap-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        .wrap-all-img {
            display: grid;
            grid-template-columns: repeat(5, minmax(40px, 1fr));
            gap: 1rem;
            margin-top: 16px;
            height: 5rem;
            /* overflow: hidden; */
            .small-img-item {
                height: 5rem;
                width: 100%;
                border-radius: 4px;
            }
            .small-img {
                object-fit: cover;
                height: 100%;
                width: 100%;
                border-radius: 4px;
            }
        }
        .img-detail {
            width: 100%;
            object-fit: cover;
            display: block;
            height: 500px;
        }
        .name {
            font-size: 40px;
            line-height: 40px;
            color: #102a42;
            font-weight: 700;
            text-transform: capitalize;
            margin-bottom: 12px;
        }
        .review-customer {
            display: flex;
            align-items: center ;
            justify-content: flex-start;
        }
        .star {
            height: fit-content;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .star-icon {
            margin-right: 5px;
        }
        .review  {
            font-size: 16px;
            line-height: 32px;
            color: #324d67;
            margin-left: 10px;
        }
        .price {
            font-size: 20px;
            line-height: 25px;
            color: #ab7a5f;
            font-weight: 700;
            margin-bottom: 12px;
            letter-spacing: 2px;
        }
        .description {
            font-size: 16px;
            line-height: 32px;
            color: #324d67;
            margin-bottom: 20px;    
        }
        
        .stock , .id-item, .brand, .item-in-stock, .color {
            font-size: 16px;
            line-height: 24px;
            color: #324d67;
            font-weight: 700;
        }
        
        .item-in-stock {
            font-weight: 400;
            text-transform: capitalize;
        }
        .stock , .id-item, .brand , .color{
            width: 300px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 20px;
        }
        .border-line {
            width: 100% ;
            border-bottom: 1px solid #bcccdc;
        }
        .color {
            padding-top: 32px;
            .item-color {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 6px;
                margin-right: 10px;
            }
            .item-in-color {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
            }
        }
        .quantity {
            width: 140px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            place-items: center;
            margin-top: 2rem;
            .btn {
                width: 32px;
                height: 36px;
                border: none;
                background-color: transparent;
                outline: none;
                font-weight: 400;
                color: #102a42;
            }
            .product-quantity {
                font-size: 40px;
                line-height: 40px;
                font-weight: 700;
                color: #102a42;
                .plus-and-minus {
                    width: 13px;
                    height: 13px;
                    object-fit: cover;
                }
            }
            
        }
        .add {
            margin-top: 16px;
        }
    }
    @media only screen and (min-width: 50px) and (max-width: 991px) {
        .wrap-content {
            display: grid;
            grid-template-columns: 1fr ;
            gap: 4rem;
        }
    }

`;
export {Wrap}
// const checkValue = (value) => {
//     if(value) {
//         let looptijd_1 = value;
//         var split_looptijden_1 = looptijd_1.toString().split('.');
//         // console.log('so nguyen',split_looptijden_1[0]); 
//         // console.log('so thap phan' ,split_looptijden_1[1] / 10);
//         let resultDecimal = split_looptijden_1[1] / 10;
//         let resultBlank = (newStar?.length - selected?.stars)
//         if(resultBlank === 0) {
//             setNewFullStar(newStar)
//             setNewBlankStar([])
//             setNewHalfStar([])
//         }
//         else if(resultBlank >= 1){
            
//             if((value - split_looptijden_1[0] ) < 0.5 ) {
//                 const newFullStars = Array.from({length: `${Math.round(selected?.stars)}`}, (x, i) => i + START);
//                 setNewFullStar(newFullStars)
//                 const newHalfStars = [1];
//                 setNewHalfStar(newHalfStars);
//                 const newBlank = Array.from({length: `${newStar?.length}` - `${Math.ceil(selected?.stars)}`}, (x, i) => i + START);
//                 setNewBlankStar(newBlank)
//             }
//             else if((value - split_looptijden_1[0] ) >= 0.5) {
//                 const newFullStar = Array.from({length: `${Math.ceil(selected?.stars)}`}, (x, i) => i + START);
//                 setNewFullStar(newFullStar)
//                 const newBlank = Array.from({length: `${newStar?.length}` - `${Math.ceil(selected?.stars)}`}, (x, i) => i + START);
//                 setNewBlankStar(newBlank)
//             }
//         } 
//         else if(resultBlank < 1 ){

//             if(resultDecimal >= 0.5){
//                 const newArr = Array.from({length: `${Math.round(selected?.stars)}`}, (x, i) => i + START)
//                 setNewFullStar(newArr)
//                 setNewBlankStar([])
//             }
//             else if(resultDecimal < 0.5) {
//                 const newlist = [1];
//                 setNewHalfStar(newlist)
//                 const newList = Array.from({length: `${split_looptijden_1[0]}` }, (x, i) => i + START)
//                 setNewFullStar(newList) 
//                 setNewBlankStar([])
//             }
//         }
    
//     }
//     else return;
// }