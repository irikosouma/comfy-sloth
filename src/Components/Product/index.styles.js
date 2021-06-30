import styled from 'styled-components';
const Wrap = styled.div`
    transition: all .3s linear;
    .big-title {
        background-color: #eaded7;
        min-height: 20vh;
        width: 100% ;
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
    .wrap-product {
        /* margin: 4rem auto; */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2.5rem;
        overflow: hidden;
        gap: 2rem 1.5rem;
    }
    .detail-list {
        display: grid;
        row-gap: 3rem;
    }
    .wrap-detail-product {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2rem;
        .detail-product-img {
            width: 300px;
            height: 200px;
            display: block;
            object-fit: cover;
            border-radius: 4px;
        }
        .detail-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #102a42;
            text-transform: capitalize;
            margin-bottom: 8px;
            padding-top: 20px;
        }
        .price {
            font-size: 16px;
            line-height: 20px;
            color: #b99179;
            font-weight: 700;
            margin-bottom: 12px;
        }
        .detail-info {
            font-size: 16px;
            line-height: 24px;
            color: #324d67;
            margin-bottom: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            width: 100% ;
            justify-self: end;
        }
        .btn-detail {
            font-size: 8px;
            line-height: 12px;
            color: #fff;
            padding: 0 10px;
            width: fit-content;
            border: none;
            letter-spacing: 2px;
            background-color: #ab7a5f;
            text-transform: uppercase;
            transition: all .3s linear;
            :hover {
                background-color: #C5A492;
                color: #453227;
            }
        }
    }
    .sort-area {
        margin-bottom: 32px;
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        gap: 2rem;
        align-items: center;
        .group-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .sort {
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: capitalize;
            select {
                background-color: #DDDDDD;
                /* appearance: none; */
                border: none;
                outline: none;
                padding: 5px 10px ;
                font-size: 16px;
            }
        }
        .solid-line {
            border-top: 1px solid #bcccdc;
        }
    }
    .main-contents {
    }
    .bound {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
        grid-template-columns: 200px 1fr;
        color: #617d98;
        
        .sort-field {
            select {
                background-color: #F1F5F8;
                border: none;
                outline: none;
                padding: 4px  8px 4px 0 ;
                font-size: 13px;
            }
        }
        .wrap-shipping {
            margin: 20px 0;
        }
        .free-ship-btn {
            margin-right: 12px;
            text-transform: capitalize;
        }
        .sort-value {
            margin: 12px 0;
        }
        .btn-clear {
            border: none;
            background-color: #BB2525;
            /* width:55%; */
            border-radius: 4px;
            padding: 4px 5px;
            color: #fff;
            letter-spacing: 2px;
        }
    }
    .title-sort {
        color: #102a42;
        font-weight: 700;
        margin: 15px 0 10px 0;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 1px;
    }
    .input-search-style {
        width: 90% ;
        height: 35px;
        background-color: #F1F5F8;
        padding: 10px;
        border: none;
        appearance: none;
        border-radius: 4px;
        letter-spacing: 1px;
    }
    .wrap-color-sort {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .sort-item {
        font-size: 13px;
        padding: 5px;
        letter-spacing: 0.5px;
        cursor: pointer;
        width: fit-content;
    }
    .color-box {
        display: flex;
        align-items: center;
        justify-content: center;
        /* width: 100%; */
        height: 30px;
    }
    .icon-style {
        width: 8px;
        height: 8px;
    }
    .color-block {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin: 0 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-net , .btn-detail {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        appearance: none;
        outline: none;
        border: 1px solid #102a42;
        border-radius: 4px;
    }
    .btn-icon {
        fill: ${(props => props.isClick === 0 ?  "#fff" : "#102a42" )};
        width: 16px;
        height: 16px;
    }
    .btn-net {
        background-color: ${(props => props.isClick === 0 ? "#102a42" : "#fff")};
        margin-right: 0.5rem;
        
    }
    .btn-icon-detail {
        fill: ${(props => props.isClick === 1 ?  "#fff":"#102a42" )};
        width: 16px;
        height: 16px;
    }
    .btn-detail {
        background-color: ${(props => props.isClick === 1 ? "#102a42" : "#fff")};
    }
    @media only screen and (min-width: 50px) and (max-width: 767px) {
        transition: all .3s linear;
        
        .bound {
            width: 90vw;
            max-width: 1170px;
            margin: 0 auto;
            display: grid;
            gap: 3rem 1.5rem;
            margin: 4rem auto;
            grid-template-columns: 1fr;
        }
        .wrap-detail-product {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            min-width: 300px;
            .detail-product-img {
                width: 100%;
                height: 200px;
                display: block;
                object-fit: cover;
                border-radius: 4px;
            }
            .detail-name {
                font-weight: 700;
                font-size: 24px;
                line-height: 24px;
                color: #102a42;
                text-transform: capitalize;
                margin-bottom: 8px;
                padding-top: 20px;
            }
            .price {
                font-size: 16px;
                line-height: 20px;
                color: #b99179;
                font-weight: 700;
                margin-bottom: 12px;
            }
            .detail-info {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                /* max-width: 300px; */
                /* width: 300px; */
                justify-self: end;
            }
        }
        .wrap-product {
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 2.5rem;
            overflow: hidden;
            gap: 2rem 1.5rem;
        }
        .sort-area {
            margin-bottom: 32px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: center;
            .group-btn {
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            .sort {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-transform: capitalize;
            }
        }
    }
    

`;
export {Wrap}