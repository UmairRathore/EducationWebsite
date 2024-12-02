import React from 'react'

const TeamFrame = () => {
  return (
    <div>
        <div className='d-flex justify-content-center text-center'>
    <div>
    <h3 className=''>Meet Our Team</h3>
    <div className='line-meet-member d-flex justify-content-between'>
            <div className='dot-orange dot1-postion'></div>
            <div className='dot-orange dot2-postion'></div>
           
        </div>
        </div>
        </div>
    <div className='d-flex gap-5 justify-content-center flex-wrap'>
    <div>
  <img  src="/assets/meet-banner.png" alt="Banner" className='team-frame-width' style={{width:'368px'}}/>
        <div className='d-flex justify-content-center color-meet-text'>
            <h3 className=''>UMAR KHANKAN DAR</h3>
        </div>
        <div className='line-frame d-flex justify-content-between'>
            <div className='dot-orange dot1-postion'></div>
            <div className='dot-orange dot2-postion'></div>
           
        </div>
        <div className='d-flex justify-content-center color-founder'>
                <h4>BUSINESS</h4>
            </div>
    </div>
    <div>
    <img  src="/assets/meet-banner.png" alt="Banner" className='team-frame-width' style={{width:'368px'}}/>
        <div className='d-flex justify-content-center color-meet-text'>
            <h3 className=''>ALI ADIL ALVI</h3>
        </div>
        <div className='line-frame d-flex justify-content-between'>
            <div className='dot-orange dot1-postion'></div>
            <div className='dot-orange dot2-postion'></div>
           
        </div>
        <div className='d-flex justify-content-center color-founder'>
                <h4>Urdu</h4>
            </div>
    </div>
    <div>
    <img  src="/assets/meet-banner.png" alt="Banner" className='team-frame-width' style={{width:'368px'}}/>
        <div className='d-flex justify-content-center color-meet-text'>
            <h3 className=''>WAQAR HASAN</h3>
        </div>
        <div className='line-frame d-flex justify-content-between'>
            <div className='dot-orange dot1-postion'></div>
            <div className='dot-orange dot2-postion'></div>
           
        </div>
        <div className='d-flex justify-content-center color-founder'>
                <h4>PHYSICS</h4>
            </div>
    </div>
  </div>
  </div>
  )
}

export default TeamFrame