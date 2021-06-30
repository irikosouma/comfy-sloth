import React from 'react'
//style
import {Wrap} from './index.styles'
//images 
import MainImg from '../../assets/images/main-product.jpeg'
export default function AboutUs({setIsSelected}) {
    return (
        <Wrap>
            <div className="big-title">
                <section className='section-center'>
                    <div className='title'>
                        <button onClick={() => setIsSelected(0)}className="title home">Home</button> <span className="title about"> / About</span>
                    </div>
                </section>
            </div>
            <section className='section-center'>
                <div className="wrap-story">
                    <img src={MainImg} alt="story-images" className="images-style" />
                    <div className="story-content">
                        <h3 className="story-title">Our Story</h3>
                        <span className='underline'></span>
                        <p className="story-detail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                    </div>
                </div>
            </section>            
        </Wrap>
    )
}

