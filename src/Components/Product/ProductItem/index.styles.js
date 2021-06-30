import styled from 'styled-components';
const Wrap = styled.div`

    .wrap-img-icon {
        position: relative;
        background-color: transparent;
        width: 100% ;
        :hover {
            z-index: 10;
            .wrap-icon {
                transition: all .3s linear;
                background-color: rgba(0,0,0,.5);
                visibility: visible;
            }
        }
    }
    .product-img {
        width: 100% ;
        height: ${(props) => props.isSelected === 0 ? "225px" : "175px"};
        display: block;
        object-fit: cover;
        overflow: hidden;
        border-radius: 4px;
        
    }
    .wrap-name-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        margin-top: 16px;
        .price {
            color: #ab7a5f;
        }
    }
    .wrap-icon {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        .icon-bgr {
            background-color: #ab7a5f;
            border-radius: 50%;
            position: absolute;
            display: block;
            width: 40px;
            height: 40px;
            left: calc((100% - 40px) / 2 );
            top: calc((100% - 40px) / 2 );
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .search-icon {
        /* visibility: hidden; */
        fill: #fff;
        background-color: #ab7a5f;
        border-radius: 50%;
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
    }

`;
export {Wrap}