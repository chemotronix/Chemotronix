import React from 'react'
import Image from "next/image"
import microsoft from "../images/mfsfh.png"
import polygon from "../images/polygon.png"
import filecoin from "../images/filecoin.png"
import chainlink from "../images/chainlink.jpg"
function PartnerSection() {
  return (
    <div className='flex items-center justify-evenly flex-wrap lg:flex-nowrap px-5 mb-10'>
        <div className='w-1/2 lg:w-1/4'><a href='https://polygon.technology/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={polygon}/></a></div>
        <div className='w-1/2 lg:w-1/4'><a href='https://filecoin.io/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={filecoin}/></a></div>
        <div className='w-1/2 lg:w-1/4'><a href='https://chain.link/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={chainlink}/></a></div>
        <div className='w-1/2 lg:w-1/4'><a href='https://www.microsoft.com/en-us/startups' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={microsoft}/></a></div>
    </div>
    
  )
}

export default PartnerSection