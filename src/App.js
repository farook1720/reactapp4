import React from 'react'
import About from './comp/About'
import Mytable from './comp/Mytable'
import Myimage from './comp/Myimage'
import AllStudents from './comp/AllStudents'
import Contact from './comp/Contact'
import TodoList from './comp/TodoList'
import TodoList2 from './comp/TodoList2'

export default function App() {
  return (
    <div>
      <TodoList/>
      <TodoList2/>
      {/* <AllStudents/>
      <studentcard/>
      <Contact/> */}
      {/* <About/>
      <Mytable/>
      <Myimage/> */}
    </div>
  )
}
