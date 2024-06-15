import React from 'react'
import CountComponent from './countdown'

const Home = () => {
    return (
        <div className='home h-[92vh] flex text-5xl items-center relative w-[100%] font-bold justify-between p-2'>
            {/* <video className=' h-[100%] w-[100%] absolute ' src="./bg.mp4" autoPlay loop muted></video> */}
                <img src="./htm_main.png" className='h-[20rem] w-[100%]' alt="" />
            
            <div className='details text-[6rem] z-[2] w-[70%] text-white h-[70%] justify-around  flex items-center flex-col'>
                <p className='text-center'>Hack The Mountain </p>
                <CountComponent />
            </div>
        </div>
    )
}

export default Home
