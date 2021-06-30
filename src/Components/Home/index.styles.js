import styled from 'styled-components';
const Wrap = styled.div`
transition: all .3s linear;
    section {
        /* padding: 5rem 0; */
    }
    .section-center {
        width: 90vw;
        /* width: 95vw; */
        max-width: 1170px;
        margin: 0 auto;
    }
    .wrap-main-product {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        /* height: calc(100% - 5rem); */
        min-height: 60vh;
        place-items: center;
    }
    .wrap-header-product {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .title {
        color: #102a42;
        font-size: 48px;
        line-height: 48px;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .medium {
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        position: relative; 
        padding-bottom: 40px;  
        margin: 0 auto;                                     
    }
    .underline {
        bottom: 0;
        left: calc((100% - 100px) / 2);
        position: absolute;
        border-bottom: 4px solid #ab7a5f;
        width: 100px;
    }
    .detail {
        color: #617d98;
        font-size: 20px;
        line-height: 40px;
        font-weight: 400;
        margin: 32px 0;
    }
    .shopping-btn {
        text-transform: uppercase;
        color: #fff;
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
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
    .block-images {
        display: block;
        position: relative;
        :before {
            position: absolute;
            content: "";
            width: 10%;
            height: 80%;
            border-radius: 4px;
            bottom: 0%;
            background-color: #decbc0;
            left: -8%;
        }
        .images {
            z-index: 1;
            position: absolute;
            object-fit: cover;
            border-radius: 4px;
        }
        .big-images {
            width: 100%;
            height: 550px;
            right: 0;
            display: block;
            position: relative;
        }
        .small-images {
            width: 250px;
            height: 165px;
            transform: translate(-50%, -100%);
        }
    }
    .wrap-feature-product {
        background-color: #f1f5f8;
        padding: 5rem 0;
        width: 100vw;
        height: calc(100% - 10rem);
    }
    .wrap-product {
        margin: 4rem auto;
        display: grid;
        grid-template-columns: repeat(3, minmax(360px, 1fr));
        grid-column-gap: 2.5rem;
        overflow: hidden;
    }
    .center-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .all-product {
        font-size: 14px;
        line-height: 21px;
        padding: 6px 16px;
        letter-spacing: 1px;
    }
    .wrap-custom-product {
        background-color: #eaded7;
    }
    .custom-title {
        font-size: 32px;
        line-height: 32px;
        color: #453227;
        font-weight: 700;
    }
    .wrap-custom-title {
        display: grid;
        grid-template-columns: 1fr 1fr;

    }    
    .vision-item {
        border-radius: 4px;
        background-color: #C5A492;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 32px;
    }
    .custom-detail {
        color: #795744;
    }
    .wrap-custom-product-icon {
        margin: 0 auto 16px;
        width: 64px;
        height: 64px;
        background-color: #eaded7;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .custom-product-icon {
        width: 32px;
        height: 32px;
    }
    .custom-title {
        font-size: 24px;
        line-height: 30px;
        color: #453227;
        padding-bottom: 32px;
    }
    .custom-small-title {
        font-size: 20px;
        line-height: 25px;
        color: #453227;
        padding-bottom: 12px;
        font-weight: 700;
    }
    .custom-detail {
        color: #5f4435;
        font-size: 16px;
        line-height: 29px;
    }
    .bound {
        width: 100%;
    }
    .discount-for-signup {
        padding: 15rem 0;
    }
    .signup-title {
        color: #102a42;
        font-size: 32px;
        line-height: 32px;
        font-weight: 700;
    }
    .wrap-detail-email {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        margin-top: 2rem;
        .detail-email {
            color: #617d98;
            font-size: 16px;
            line-height: 32px;
            font-weight: 400;
        }
        .customer-email {
            width: 90vw;
            max-width: 500px;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr auto;
        }
        .input-email {
            width: 100%;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            color: #000;
            border: 2px solid #000;
            border-right: none; 
            border-radius: 3px 0 0 3px;
        }
        .btn-submit-email {
            background-color: #ab7a5f;
            color: #453227;
            transition: color .3s linear;
            font-size: 16px;
            padding: 0.5rem 1rem;
            border: 2px solid #000; 
            border-radius: 0px 3px 3px 0px;
            
            :hover {
                color: #fff
            }
        }

    }
    .footer {
        background-color: #222;
        color: #fff;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        h4 {
            font-weight: 400;
        }
        .author {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .brand-name {
            
            color: #ab7a5f;
        }
    }

    
    @media only screen and (min-width: 50px) and (max-width: 845px) {
        max-width: 1170px;
        margin: 0 auto;
        transition: all .3s linear;
            .wrap-main-product {
                display: grid;
                grid-template-columns: 1fr ;
                gap: 8rem;
                min-height: 60vh;
                place-items: center;
            }
            .title {
                font-size: 40px;
                line-height: 50px;
            }
            .block-images {
                display: none;
            }
            .wrap-product {
                margin: 4rem auto;
                display: grid;
                grid-template-columns: repeat(1, minmax(300px, 1fr));
                grid-column-gap: 2.5rem;
                gap: 2.5rem;
                overflow: hidden;
            }
            .all-product {
                text-align: center;
                min-width: 148px;
                display: block;
                margin: 0 auto;
                padding: 10px 4px;
                text-transform: uppercase;
                color: #fff;
                background-color: #ab7a5f;
            }
            .wrap-vision {
                padding-top: 64px;
                display: grid;
                gap: 2.5rem;
            }
            .wrap-custom-title {
                display: grid;
                grid-template-columns: 1fr;
            }
            .custom-title {
                padding-bottom: 32px;
            }
            .custom-detail {
                font-size: 14px;
                line-height: 25px;
            }
            .wrap-custom-product {
                padding: 5rem 0;
            }
            .trans-center {
                transform: none;
            }
            .wrap-detail-email {
                gap: 2rem;
                display: grid;
                grid-template-columns: 1fr;
            }
            .discount-for-signup {
                padding: 5rem 0;
            }
    }
    @media only screen and (min-width: 50px) and (max-width: 776px) {
            .footer {
                display: flex;
                
                align-items: center;
                justify-content: center;
                font-weight: 400;
            .author {
                flex-direction: column;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 845px){
        .wrap-vision {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
        .wrap-custom-product {
            padding: 5rem 0;
        }
}
    @media only screen and (min-width: 846px) and (max-width: 991px) {
        margin: 0 auto;
        transition: all .3s linear;
        .wrap-main-product {
            grid-template-columns: 1fr;
        }
        .block-images {
            display: none;
        }
        .wrap-product {
            margin: 4rem auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(360px, 1fr));
            grid-column-gap: 2.5rem;
            gap: 2.5rem;
            overflow: hidden;
        }
        .all-product {
            text-align: center;
            min-width: 148px;
            display: block;
            margin: 0 auto;
            padding: 10px 4px;
            text-transform: uppercase;
            color: #fff;
            background-color: #ab7a5f;
        
        }
        .wrap-custom-product {
            padding: 5rem 0;
        }
        .trans-center {
            transform: none;
        }
        .wrap-vision {
            display: grid;
            gap: 2.5rem;
        }
        .trans-center {
            transform: none;
        }
        .wrap-detail-email {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .discount-for-signup {
            padding: 5rem 0;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1221px) {
        transition: all .3s linear;
        .wrap-main-product {
            grid-template-columns: 1fr 1fr;
            transition: all .3s linear;
        }
        .block-images {
            display: block;
            transition: all .3s linear;
        }
        .wrap-product {
            grid-column-gap: 2.5rem;
            gap: 2.5rem;
            grid-template-columns: repeat(2, minmax(360px, 1fr));
        }
        .wrap-vision {
            padding-top: 64px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            gap: 2.5rem;
        }
        .trans-center {
            transform: none;
        }
        .wrap-custom-product {
            padding: 5rem 0;
        }
        .wrap-detail-email {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .discount-for-signup {
            padding: 5rem 0;
        }
    }
    @media only screen and (min-width: 1222px)  {
        .wrap-main-product {
            min-height: calc(100vh - 5rem);
        }
        .wrap-product {
            padding: 0;
            grid-template-columns: repeat(3, minmax(360px, 1fr));
        }
        .wrap-vision {
            padding-top: 64px;
            display: grid;
            grid-template-columns: repeat(3, minmax(360px, 1fr));
            gap: 2.5rem;
        }
        .trans-center {
            transform: translateY(5rem)
        }
        .custom-title {
            font-size: 32px;
            line-height: 32px;
            color: #453227;
            padding-bottom: 32px;
        }
    }
`;
export {Wrap}