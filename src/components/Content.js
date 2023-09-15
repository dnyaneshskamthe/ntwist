import React from 'react'

const Content = () => {
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      }
      
  return (
    <div className='content-wrap'>
        <img src="background1.jpg" alt="" className='background-img'/>
        <div className="content"> 
            <div className="left">
                <p className='data-power'>Data Powered Solutions for industrial excellence </p>
                <button className="btn">Read more</button>
            </div>
            <div className="right">
                <img src="home-img.png" alt="" className="right-img" />
            </div>
        </div>
        <div className="mine">
            <div className="mine-left">
                <h2>Mine-To-Mill-To-Mine Optimization</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt id, nisi expedita laudantium doloribus aperiam est enim quas quod repellendus necessitatibus obcaecati voluptatem. Placeat laboriosam eius id in similique.
                Veritatis, neque. Dolorum, ipsum laudantium. Sequi quas vitae, voluptate distinctio voluptas sapiente numquam mollitia explicabo quia aspernatur ad quod</p>
                <button className="mine-btn">Read more</button>
            </div>
            <div className="mine-right">
                <img src="content1.jpg" alt="" />
            </div>
        </div>
        <div className="sustain">
            <div className="sust-left">
                <img src="content1.jpg" alt="" />
            </div>
            <div className="sust-right">
                <h2>Sustainability</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt id, nisi expedita laudantium doloribus aperiam est enim quas quod repellendus necessitatibus obcaecati voluptatem. Placeat laboriosam eius id in similique.
                Veritatis, neque. Dolorum, ipsum laudantium. Sequi quas vitae, voluptate distinctio voluptas sapiente numquam mollitia explicabo quia aspernatur ad quod</p>
                <button className="mine-btn">Read more</button>
            </div>
        </div>

        <div className="mine">
            <div className="mine-left">
                <h2>Mine-To-Mill-To-Mine Optimization</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt id, nisi expedita laudantium doloribus aperiam est enim quas quod repellendus necessitatibus obcaecati voluptatem. Placeat laboriosam eius id in similique.
                Veritatis, neque. Dolorum, ipsum laudantium. Sequi quas vitae, voluptate distinctio voluptas sapiente numquam mollitia explicabo quia aspernatur ad quod</p>
                <button className="mine-btn">Read more</button>
            </div>
            <div className="mine-right">
                <img src="content1.jpg" alt="" />
            </div>
        </div>
        <div className="sustain">
            <div className="sust-left">
                <img src="content1.jpg" alt="" />
            </div>
            <div className="sust-right">
                <h2>Sustainability</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt id, nisi expedita laudantium doloribus aperiam est enim quas quod repellendus necessitatibus obcaecati voluptatem. Placeat laboriosam eius id in similique.
                Veritatis, neque. Dolorum, ipsum laudantium. Sequi quas vitae, voluptate distinctio voluptas sapiente numquam mollitia explicabo quia aspernatur ad quod</p>
                <button className="mine-btn">Read more</button>
            </div>
        </div>
        <div className='footer'>
                <img src="ntwistlight.png" alt="" />
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                </ul>
                <p className='addr'> 9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                <div className='social'>
                    <img src="twitter.svg" alt="" />
                    <img src="linkedin.svg" alt="" />
                </div>
                <p className='copywrite'>© 2022. Ntwist Inc.</p>
        </div>
        <div>
            <button class="back-to-top" id="scrollToTopBtn" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><img src="up.svg" alt=""/></button>
        </div>
    </div>
  )
}

export default Content