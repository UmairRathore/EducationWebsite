import React from 'react'
import Moon from './Moon'
const Banner = () => {
  return (
    <div className='bg-banner' style={{paddingTop:'120px'}}>
      <Moon />
        <div className='d-flex mx-auto gap-5 p-5 text-white flex-wrap flex-lg-nowrap'>
      <div>
      <img  src="/assets/banner-img.png" alt="Banner" className='img-resonsive' style={{width:'368px'}}/>
        <div>
            <div className='d-flex justify-content-center'>
                <h3>WAQAR HASSAN</h3>
            </div>
            <div className='line d-flex justify-content-between'>
                <div className='dot-orange dot1-postion'></div>
                <div className='dot-orange dot2-postion'></div>
               
            </div>
            <div className='d-flex justify-content-center color-founder'>
                    <h4>Founder & CEO</h4>
                </div>
        </div>
      </div>
        <div style={{marginTop:'53px'}}>
            <div>
                <h1>MISSION STATEMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas culpa error inventore magnam ex, eveniet sint commodi dolorum itaque officiis sit vel porro non eos! Dicta hic pariatur odio sit cum totam ad officiis tempora doloribus a eaque at nam, recusandae eius deserunt deleniti consequatur voluptates voluptatibus aut soluta necessitatibus beatae voluptas vel. Impedit necessitatibus eum tempore rerum voluptatibus ullam fugiat sequi quasi minima, quia, quis at. Rerum, consequatur.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner