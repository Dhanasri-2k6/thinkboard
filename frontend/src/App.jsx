import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx' 
import { toast } from 'react-hot-toast';
const App = () => {
  return (
    
    <div className="relative h-full w-full" >
      {/* <button onClick={()=>toast.success("congrats")} className="text-red-500 p-4 bg-blue-500">Click Me</button> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        {/* ":" means dynamic parameter  */}
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App;

// for good looking css ptterns which is present in the backgrounf check the website bg.ibelick.com