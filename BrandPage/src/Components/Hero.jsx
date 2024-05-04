import './Hero.css'
const Hero = ()=>{


    return(
        <>
        
        <main className="container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="text">YOUR FEET DESERE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btngrp">
                    <button className="btnred">Shop Now</button>
                    <button className="btnwhite">Category</button>
                </div>
                <div className="extras">
                    <p>Also available on</p>
                    <div className="icons">
                        <img src="/images/flipkart.png" alt="flipcart" />
                        <img src="/images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Product" />
            </div>
        </main>
        </>
    )
}

export default Hero