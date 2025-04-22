import React from 'react'


const App = () => {
  return (
    <>
      <div role="main" className="flex-col m-auto max-h-max ">
      <div className='bg-[url(../assets/backgrounds/wedding-venue-sample.jpg)] bg-cover bg-right-bottom min-w-screen min-h-screen p-0 m-0'>
      <div className="grid h-96 grid-cols-1 place-items-center">
      <div className='min-h-min static text-6xl font-black flex items-center animate-bounce'>
        <h1 className='font-imperial text-white  tracking-wider'>Welcome to the wedding of Danica & Junyoung</h1>
      </div>
      <div>
        <button className='btn-primary'>
          RSVP
        </button>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App