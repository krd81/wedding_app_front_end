import React from 'react';
import Homepage from '../pages/Homepage';
import ResponseForm from './ResponseForm';
import Example from './ExampleForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/rsvp-form' element={<ResponseForm />} />
          <Route path='/example-form' element={<Example />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App