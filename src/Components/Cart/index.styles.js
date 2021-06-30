import styled from 'styled-components';
const Wrap = styled.div`
    min-height: calc(100vh - 5rem - 80px);
    transition: all .3s linear;
    .wrap-blank-data {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .section-center-blank {
        padding: 5rem 0;
    }
    .big-title {
        background-color: #eaded7;
        min-height: 20vh;
        width: 100%;
    }
    .section-center {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        padding: 5rem 0;
        
    }
    .title {
        transition: font-size .3s linear;
        font-size: 32px;
        line-height: 32px;
        color: #795744;
        font-weight: 700;
        min-height: calc(20vh - 10rem);
    }
    .about {
        color: #453227;
    }
    .home {
        appearance: none;
        border: none;
        background-color: none;
        outline: none;
        cursor: pointer;
        background: none;
    }
    .section-center {
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
    }
    .title-empty {
        color: #102a42;
        font-size: 40px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .shopping-btn {
        text-transform: uppercase;
        color: #fff;
        display: flex;
        margin: 0 auto;
        margin-top: 16px;
        letter-spacing: 1px;
        padding: 6px 12px ;
        font-size: 14px;
        line-height: 21px;
        background-color: #ab7a5f;
        outline: none;
        border: none;
        appearance: none;
        border-radius: 4px;
        transition: all .5s linear;
        :hover {
            color: #453227;
            background-color: #C5A492;
        }
    }
    .wrap-title {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr auto;
        align-items: center;
        place-items: center;
        gap: 3rem 1rem;
        padding: 15px 0 15px 0;
    }
    .line-border {
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid #bcccdc;
        width: 100%;
    }
    .wrap-all-field {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr auto;
        -webkit-box-align: center;
        align-items: center;
        gap: 3rem 1rem;
        padding: 15px 0 30px 0;
        
    }
    .wrap-item {
        display: grid;
        grid-template-columns: repeat(4, 1fr) auto;
        gap: 3rem 1rem;
        align-items: center;
        padding: 25px 0 75px 0;
        border-bottom: 1px solid #bcccdc;;
        
    }
    .item-title {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            line-height: 20px;
            color: #617d98;
            transition: font-size .3s linear;
    }
    .wrap-name {
        display: grid;
        grid-template-rows: 75px;
        grid-template-columns: 100px 170px;
        align-items: center;
        gap: 1rem;
        text-align: left;
        height: 100%;
    }
    .wrap-item-data {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .image-style {
        width: 100px;
        border-radius: 4px;
        height: 100%;
    }
    .name {
        width: 100%;
        text-transform: capitalize;
        font-size: 14px;
        line-height: 17px;
        color: #102a42;
        font-weight: 700;
        letter-spacing: 3px;
    }
    .price {
        color: #ab7a5f;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap-block-color {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 70px 13px;
        font-size: 14px;
        line-height: 20px;
        color: #617d98;
        letter-spacing: 3px;
        .color-block {
            width: 13px;
            margin-top: 3px;
            height: 13px;
            border-radius: 4px;
        }
    }
    .mb-ver {
        display: none;
        color: #ab7a5f;
        font-size: 12px;
        line-height: 15px;
        font-weight: 700;
    }
    .quantity {
            width: 100px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            place-items: center;
            /* margin-top: 2rem; */
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
                font-size:1.5rem;
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
    .btn-delete {
        border: none;
        background-color: #BB2525;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        .bin-icon {
            fill: #fff;
            width: 100%;
            padding: 1px 0;
        }
    }
    .back-to-product, .clear-product {
        width: fit-content;
        text-transform: capitalize;
        color: #fff;
        padding: 4px 10px;
        font-size: 16px;
        line-height: 24px;
        background-color: #ab7a5f;
        outline: none;
        border: none;
        appearance: none;
        border-radius: 4px;
        transition: all .5s linear;
        margin-bottom: 32px;
        cursor: pointer;
    }
    .clear-product {
        background-color: #000;
        font-size: 13px;
    }
    .btn-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .wrap-login {
        width: 100%;
        margin-top: 20px;
        height: calc(243px - 195px);
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .btn-login {
        width: 395px;
        text-transform: uppercase;
        color: #fff;
        padding: 4px 10px;
        font-size: 16px;
        line-height: 24px;
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
    .wrap-total {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        .border-total {
            width: 395px;
            height: 195px;
            border: 1px solid  #bcccdc;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 24px 48px;
        }
        .subtotal, .shipping-fee, .total {
            font-size: 16px;
            line-height: 20px;
            color: #102a42;
            font-weight: 700;
            margin-bottom: 12px;
        }
        .shipping-fee {
            font-weight: 400;
            margin-bottom: 20px;
            
        }
        .subtotal , .shipping-fee , .total {
            width: 100%;    
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .total {
            font-size: 24px;
            line-height: 24px;
        }
    }
    @media only screen and (min-width: 50px) and (max-width: 776px) {
        .wrap-all-field {
            display: grid;
            grid-template-columns: 200px auto auto;
            -webkit-box-align: center;
            align-items: center;
            gap: 3rem 1rem;
            padding: 15px 0 30px 0;
            
        }
        .price {
            display: block;
        }
        .mb-ver {
            display: block;
        }
        .wrap-name {
            display: grid;
            grid-template-rows: 75px;
            grid-template-columns: 75px 125px;
            align-items: center;
            gap: 1rem;
            text-align: left;
            height: 100%;
        }
        .wrap-block-color {
            .color-block {
                border-radius: 50%;
            }
        }
        .image-style {
            width: 100%;
            border-radius: 4px;
            height: 100%;
        }
        .price, .total {
            display: none;
        }
        .btn-delete {
            margin : 0 auto;
        }
        .title-empty {
            text-align: center;
        }
        .title-empty {
            transition: font-size .3s linear ;
            font-size: 32px;
            line-height: 40px;
            font-weight: 700;
            letter-spacing: 2px;
        }
    }
    @media only screen and (min-width: 777px) and (max-width: 799px) {
        .mb-ver {
            display: block;
        }
        .title {
            transition: font-size .3s linear;
            font-size: 24px;
            line-height: 30px;
        }
        .item-title {
            transition: font-size .3s linear;
            font-size: 14px;
            line-height: 18px;
        }
        .wrap-total {
            .border-total {
                width: 380px;
                height: 190px;
                transition: all .3s linear;
                border: 1px solid  #bcccdc;
            }
            .subtotal, .shipping-fee, .total {
                font-size: 14px;
                transition: font-size .3s linear;
                line-height: 18px;
            }
            .total {
                transition: font-size .3s linear;
                font-size: 20px;
                line-height: 25px;
            }
        }
        .back-to-product {
            width: fit-content;
            transition: all .3s linear;
            text-transform: capitalize;
            color: #fff;
            padding: 4px 10px;
            font-size: 14px;
            line-height: 21px;
        }
    }
`;
export {Wrap}