import styled from 'styled-components';
const Wrap = styled.div`
    overflow: auto;

    margin: 0 auto;
    /* min-height: 95vh; */
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
    .wrap-story {
        display: grid;
        gap: 4rem;
        grid-template-columns: repeat(2, 1fr);
        /* min-height: calc(95vh - 20vh - 10rem - 80px); */
    
        /* height: 100vh; */
        .images-style {
            width: 100% ;
            height: 500px;
            object-fit: cover;
            border-radius: 4px;
        }
        .story-content {
            position: relative; 
            width: 100%;
            
        }
        .story-title {
            font-size: 40px;
            line-height: 40px;
            color: #102a42;
            padding-bottom: 12px;
            
        }
        .story-detail {
            font-size: 16px;
            line-height: 32px;
            color: #617d98;
            padding-top: 32px;
        }
        .underline {
            left: 0;
            position: absolute;
            border-bottom: 4px solid #ab7a5f;
            width: 100px;
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
    @media only screen and (min-width: 50px) and (max-width: 991px) {
        .wrap-story {
            display: grid;
            gap: 4rem;
            grid-template-columns: 1fr;
            /* max-height: calc(95vh - 20vh - 10rem - 80px); */
        }
        
        .story-detail {
            margin: 2rem auto 0;
            max-width: 45em;
            font-size: 14px;
            line-height: 28px;
        }
        .story-title {
            font-size: 32px;
            line-height: 40px;
        }
        .footer {
            background-color: #222;
            color: #fff;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 400;
            width: 100vw;
        h4 {
            font-weight: 400;
        }
        .author {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    }
    @media only screen and (min-width: 992px) and (max-width: 1221px) {
        .big-title {
            background-color: #eaded7;
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
        .wrap-story {
            display: grid;
            gap: 4rem;
            grid-template-columns: repeat(2, 1fr);
            /* max-height: calc(95vh - 20vh - 10rem - 80px); */
            .images-style {
                width: 100% ;
                height: 500px;
                object-fit: cover;
                border-radius: 4px;
            }
            .story-content {
                position: relative; 
                width: 100%;
            }
            .story-title {
                font-size: 40px;
                line-height: 40px;
                color: #102a42;
                padding-bottom: 12px;
                
            }
            .story-detail {
                font-size: 16px;
                line-height: 32px;
                color: #617d98;
                padding-top: 32px;
            }
            .underline {
                left: 0;
                position: absolute;
                border-bottom: 4px solid #ab7a5f;
                width: 100px;
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
            width: 100vw;
        h4 {
            font-weight: 400;
        }
        .author {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    }
    @media only screen and (min-width: 1222px) {
        .footer {
            background-color: #222;
            color: #fff;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 400;
            width: 100vw;
        }
    }

`;
export {Wrap}