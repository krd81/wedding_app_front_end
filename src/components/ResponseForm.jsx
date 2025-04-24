import React from 'react'

const ResponseForm = () => {
  return (
    <>
        <div role="main" className="max-h-max text-yellow-50">
            <div className='bg-[url(../assets/backgrounds/wedding-venue-sample.jpg)] bg-cover bg-right-bottom min-w-screen min-h-screen'>
                <div className="flex-row ">
                    <div className='font-style-script text-5xl font-bold text-shadow-md/80 leading-loose tracking-wider'>
                        <div className='flex justify-center'>
                            <h1 className='text-4xl '>You're invited to Danica & Junyoung's Wedding</h1>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className=''>Day Month Year</h1>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className=''>Venue / Time</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='font-outfit text-2xl text-shadow-md/80 '>
                            <p className=''>Space for details of the day and information to include in RSVP below</p>
                        </div>
                    </div>
                    <div>
                        <form className='font-outfit text-2xl text-shadow-md/80' action="submit">
                            <div className=''>
                                <div className='flex justify-center my-2'>
                                    <legend>Contact details</legend>
                                </div>
                                <div className='flex justify-center'>
                                    <label htmlFor='respondent-name'>Name:&ensp;</label>
                                    <div className='mt-6 space-y-6'>
                                        <div className='flex items-center gap-x-3 rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                                            <input
                                                id='respondent-name'
                                                name='respondent-name'
                                                type='text'
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <label htmlFor='respondent-email'>Email:&ensp;</label>
                                    <div className='mt-6 space-y-6'>
                                        <div className='flex items-center gap-x-3 rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                                            <input
                                                id='respondent-email'
                                                name='respondent-email'
                                                type='text'
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <fieldset>
                                <div className='flex justify-center'>
                                    <legend>Response</legend>
                                </div>
                                <p></p>
                                <div className='mt-6 space-y-6'>
                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            defaultChecked
                                            id="rsvp-yes"
                                            name="rsvp-response"
                                            type="radio"
                                            className="relative size-4 rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <label htmlFor="rsvp-yes">Coming</label>
                                    </div>
                                    <div className='flex justify-center gap-x-3'>
                                    <input
                                            id="rsvp-no"
                                            name="rsvp-response"
                                            type="radio"
                                            className="relative size-4 rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <label htmlFor="rsvp-no">Can't make it</label>
                                    </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className='flex justify-center'>
                                    <legend>Further details</legend>
                                </div>
                                <div className='flex justify-center'>
                                    <p>Please indicate which portion you will be attending</p>
                                </div>

                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            defaultChecked
                                            id="rsvp-morning"
                                            name="rsvp-details"
                                            type="radio"
                                            className="relative size-4  rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <label htmlFor="rsvp-morning">Morning</label>
                                    </div>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="rsvp-afternoon"
                                            name="rsvp-details"
                                            type="radio"
                                            className="relative size-4 rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <label htmlFor="rsvp-afternoon">Afternoon</label>
                                    </div>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="rsvp-all"
                                            name="rsvp-details"
                                            type="radio"
                                            className="relative size-4 rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <label htmlFor="rsvp-all">Full day</label>
                                    </div>
                                </div>
                                    <div className='flex justify-center gap-x-3'>
                                        <div>
                                        <label htmlFor="rsvp-attendees">Number of guests (including yourself):</label>

                                        </div>

                                        <div>

                                            <input
                                                defaultValue={1}
                                                id='rsvp-attendees'
                                                name='rsvp-attendees'
                                                type='number'
                                                className="block max-w-2 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                            </fieldset>

                            <div className='flex justify-center'>
                                    <legend>Dietary requirements</legend>
                                </div>
                                <div className='flex justify-center'>
                                </div>

                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="dietary-dairy"
                                            name="dietary-options"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>

                                    </div>
                                    <div>
                                        <label htmlFor="dietary-dairy">Dairy Free</label>
                                    </div>
                                </div>

                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="dietary-gluten"
Gluten Free                                            name="dietary-options"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>

                                    </div>
                                    <div>
                                        <label htmlFor="dietary-gluten">Gluten Free</label>
                                    </div>
                                </div>

                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="dietary-fish"
                                            name="dietary-options"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>

                                    </div>
                                    <div>
                                        <label htmlFor="dietary-fish">No fish</label>
                                    </div>
                                </div>

                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="dietary-animal"
                                            name="dietary-options"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>

                                    </div>
                                    <div>
                                        <label htmlFor="dietary-animal">No animal product</label>
                                    </div>
                                </div>

                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="dietary-other"
                                            name="dietary-options"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>

                                    </div>
                                    <div>
                                        <label htmlFor="dietary-other">Other</label>
                                    </div>
                                </div>


                                <div className='flex justify-center gap-5'>
                                    <div className='flex justify-center gap-x-3'>
                                        <input
                                            id="dietary-"
                                            name="dietary-options"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>

                                    </div>
                                    <div>
                                        <label htmlFor="dietary-"></label>
                                    </div>
                                </div>


                            <div className='flex justify-center'>
                                <button className='btn-primary'>Submit</button>
                                <button className='btn-primary'>Back</button>
                            </div>
                        </form>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResponseForm