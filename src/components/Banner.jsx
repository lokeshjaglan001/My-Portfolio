import React from 'react'
import Samplelogo from './Samplelogo'

export default function Banner() {
  return (
    <>
        <div className="col-md-10 m-auto d-flex justify-content-between align-items-center banner ">
        <div className='name col-md-4 my-5' style={{fontWeight:'700'}}>
        Welcome to <span style={{color:'var(--color-4)'}}>Lokesh Jaglan's</span> Portfolio
        </div>
        <div>
            <Samplelogo/>
        </div>
        </div>
    </>
  )
}
