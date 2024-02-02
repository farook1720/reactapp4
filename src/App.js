import React from 'react'
import About from './comp/About'
import Mytable from './comp/Mytable'
import Myimage from './comp/Myimage'
import AllStudents from './comp/AllStudents'
import Contact from './comp/Contact'

export default function App() {
  return (
    <div>
      <AllStudents/>
      <studentcard/>
      <Contact/>
      {/* <About/>
      <Mytable/>
      <Myimage/> */}
    </div>
  )
}
