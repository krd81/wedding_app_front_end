import React from 'react'

const ResponseForm = () => {
  return (
    <>
        <div role="main" className="flex-col m-auto max-h-max  ">
            <div className='bg-[url(../assets/backgrounds/wedding-venue-sample.jpg)] bg-cover bg-right-bottom min-w-screen min-h-screen p-0 m-0'>
                <div className="grid h-96 grid-cols-1 place-items-center">
                    <div className='font-style-script text-yellow-50 text-5xl font-bold text-shadow-md/80 leading-loose tracking-wider'>
                        <h1 className='text-4xl '>You're invited to Danica & Junyoung's Wedding</h1>
                        <h1 className=''>Day Month Year</h1>
                        <h1 className=''>Venue / Time</h1>
                    </div>
                    <div className='font-outfit text-white text-2xl text-shadow-md/80 '>
                        <p className='text-yellow-50'>Space for details of the day and information to include in RSVP below</p>
                    </div>
                    <div>
                        <form className='font-outfit text-white text-2xl text-shadow-md/80 ' action="submit">
                            <input type="radio" name="rsvp-response" id="rsvp-yes" />
                            <input type="radio" name="rsvp-response" id="rsvp-no" />
                            <input type="text" />
                        </form>
                    </div>
                    <div>
                        <button className='btn-primary'>Submit</button>
                        <button className='btn-primary'>Back</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResponseForm