import React from 'react';
import Homepage from '../pages/Homepage';
import ResponseForm from './ResponseForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/rsvp-form' element={<ResponseForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App