import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const nav = useNavigate();

  return (
    <>
        <div role="main" className="flex-col m-auto max-h-max ">
            <div className='bg-[url(../assets/backgrounds/wedding-venue-sample.jpg)] bg-cover bg-right-bottom min-w-screen min-h-screen p-0 m-0'>
                <div className="grid h-96 grid-cols-1 place-items-center">
                    <div className='min-h-min static text-[70px] font-black flex items-center animate-bounce'>
                        <h1 className='font-imperial text-white  tracking-wider'>Welcome to the wedding of Danica & Junyoung</h1>
                    </div>
                    <div>
                        <button className='btn-primary' type='submit' onClick={() => {nav('/rsvp-form')}}>
                            RSVP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homepage