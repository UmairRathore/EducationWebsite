import React from 'react'

const MeetTeam = () => {
  return (
    <div className='mt-5'>
      <div className='d-flex justify-content-center pt-5'>
      <div className=''> 
        <div className='d-flex justify-content-center'>
            <h3 className='Meet-title'>Meet Our Team</h3>
        </div>
        <div className='line-Meet d-flex justify-content-between'>
            <div className='dot-orange dot1-postion'></div>
            <div className='dot-orange dot2-postion'></div>
           
        </div>
    </div>
      </div>
     
    <div className='d-flex mx-auto gap-5 p-5 text-white align-items-center flex-wrap flex-lg-nowrap'>
  <div>
  <img  src="/assets/meet-banner.png" alt="Banner" className='team-frame-width' style={{width:'368px'}}/>
    <div>
        <div className='d-flex justify-content-center color-meet-text'>
            <h3 className=''>UMAR KHANKAN DAR</h3>
        </div>
        <div className='line d-flex justify-content-between'>
            <div className='dot-orange dot1-postion'></div>
            <div className='dot-orange dot2-postion'></div>
           
        </div>
        <div className='d-flex justify-content-center color-founder'>
                <h4>BUSINESS</h4>
            </div>
    </div>
  </div>
    <div>
        <div className='text-black'>
            <h1>Mission STATEMENT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas culpa error inventore magnam ex, eveniet sint commodi dolorum itaque officiis sit vel porro non eos! Dicta hic pariatur odio sit cum totam ad officiis tempora doloribus a eaque at nam, recusandae eius deserunt deleniti consequatur voluptates voluptatibus aut soluta necessitatibus beatae voluptas vel. Impedit necessitatibus eum tempore rerum voluptatibus ullam fugiat sequi quasi minima, quia, quis at. Rerum, consequatur.</p>
        </div>
    </div>
    </div>
</div>
  )
}

export default MeetTeam