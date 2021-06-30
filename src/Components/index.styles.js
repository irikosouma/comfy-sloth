import styled from 'styled-components';
const Wrap = styled.div`
/* width: 90vw;
max-width: 1170px;
margin: 0 auto; */
    .wrap-menu {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-images {
        width: 175px;
        object-fit: cover;
    }
    .nav-icon {
        display: none;
    }
    .sidenav {
        visibility: hidden;      

    }
    .bound-main-component {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* margin: 0 20px; */
    }
    .cart-style , .icon {
        padding-left: 10px;
        width: 35px;
        height: 25px;   
        
    }
    .wrap-cart , .wrap-login {
        cursor: pointer;
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
    @media only screen and (max-width: 192px) and (min-width: 50px) {
        .sidenav {
            width: 90vw;
            max-width: 1170px;
            margin: 0 auto;
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #fff;
            overflow-x: hidden;
            transition: width 0.5s;
            display: grid;
            grid-template-rows: 1fr 100px;

        }
    .bound-main-component {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .wrap-menu {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
    }
    .menu-large {
        display: none;
    }
    .logo-images {
        width: 175px;
        object-fit: cover;
    }
    .nav-icon {
        width: 32px;
        height: 35px;
        fill: #ab7a5f;
        display: block;
    }
    .sidenav {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow-x: hidden;
        transition: width 0.5s;
        display: grid;
        grid-template-rows: 1fr 100px;

    }
    a {
        text-decoration: none;
    }
    .a-style {
        color: #243a52;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        padding: 16px 24px;
        text-decoration: none;
        width: 100% ;
        display: block;
        transition: 1s;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        :hover {
            background-color: #F1F5F8;
            color: #243a52;
            padding-left: 36px;
        }
    }
    .sidenav .closebtn {
        width: 32px;
        height: 32px;
        color: #bb2525;
        :hover {
            color: #E66B6B;
        }
    }
    .wrap-content {
        width: 100% ;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        .wrap-logo {
            width: calc(100% - 30px) ;
            margin: 0 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .cart-login-wrap {
        display: grid;
        grid-template-columns: repeat(2,minmax(50px ,1fr));
        grid-column-gap: 15px;
        margin: 0 auto;
        font-size: 24px;
        line-height: 30px;
    }
    .wrap-cart {
        position: relative;
        width: 100% ;
    }
    .cart-style {
        position: relative;
        top: 5px;
    }
    .number {
        position: absolute;
        top: -38% ;
        right: 0;
        z-index: 2;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ab7a5f;
        color: #fff;
        font-size: 12px;
        border-radius: 50% ;
    }
    .wrap-login {
        width: 100% ;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    }
    @media only screen and (max-width: 992px) and (min-width: 193px) {
        .wrap-menu {
            width: 90vw;
            max-width: 1170px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 5rem;
        }
        .bound-main-component {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        .menu-large {
            display: none;
        }
        .logo-images {
            width: 175px;
            object-fit: cover;
        }
        .nav-icon {
            width: 32px;
            height: 35px;
            fill: #ab7a5f;
            display: block;
        }
        .sidenav {
            width: 90vw;
            max-width: 1170px;
            margin: 0 auto;
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #fff;
            overflow-x: hidden;
            transition: width 0.5s;
            display: grid;
            grid-template-rows: 1fr 100px;

        }
        a {
            text-decoration: none;
        }
        .a-style {
            color: #243a52;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            padding: 16px 24px;
            text-decoration: none;
            width: 100% ;
            display: block;
            transition: 1s;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            :hover {
                background-color: #F1F5F8;
                color: #243a52;
                padding-left: 36px;
            }
        }
        .sidenav .closebtn {
            width: 32px;
            height: 32px;
            color: #bb2525;
            :hover {
                color: #E66B6B;
            }
        }
        .wrap-content {
            width: 100% ;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            .wrap-logo {
                width: calc(100% - 30px) ;
                margin: 0 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        .cart-login-wrap {
            display: grid;
            grid-template-columns: repeat(2,minmax(50px ,1fr));
            grid-column-gap: 15px;
            margin: 0 auto;
            font-size: 24px;
            line-height: 30px;
        }
        .wrap-cart {
            position: relative;
            width: 100% ;
        }
        .cart-style {
            position: relative;
            top: 5px;
            /* left: 0; */
        }
        .number {
            position: absolute;
            top: -38% ;
            right: 0;
            z-index: 2;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ab7a5f;
            color: #fff;
            font-size: 12px;
            border-radius: 50% ;
        }
        .wrap-login {
            width: 100% ;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    @media only screen and (min-width: 993px) {
        .wrap-menu {
            width: 90vw;
            max-width: 1170px;
            margin: 0 auto;
            height: 5rem;
        }
        .bound-main-component {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100% ;
        }
        .menu-large {
            display: flex;
        }
        a {
            text-decoration: none;
        }
        .a-style {
            color: #324d67;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            padding: 8px;
            text-decoration: none;
            width: 100% ;
            padding-bottom: 10px;
            outline: none;
            margin: 0 8px;
            border-bottom: 2px solid transparent;
            :hover {
                border-bottom: 2px solid #C5A492;
                /* box-sizing: border-box; */
            }
        }
        .logo-images {
            width: 175px;
            object-fit: cover;
        }
        .nav-icon {
            display: none;
        }
        .sidenav {
            display: none;    
        }
        .cart-login-wrap {
            display: grid;
            grid-template-columns: repeat(2,minmax(50px ,1fr));
            grid-column-gap: 15px;
            margin: 0 auto;
            font-size: 24px;
            line-height: 30px;
        }
        .wrap-cart {
            position: relative;
            width: 100% ;
        }
        .cart-style {
            position: relative;
            top: 5px;
        }
        .number {
            position: absolute;
            top: -38% ;
            right: 0;
            z-index: 2;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ab7a5f;
            color: #fff;
            font-size: 12px;
            border-radius: 50% ;
        }
        .wrap-login {
            width: 100% ;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`;

export {Wrap}
