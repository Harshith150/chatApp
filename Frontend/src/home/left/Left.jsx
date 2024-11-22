import React from 'react'
import Search from './Search'
import Users from './Users'

export default function Left() {
  return (
    <div className='w-[30%] text-white bg-left-bg py-6'>
    <h1 className='font-bold text-3xl px-7'>Chats</h1>
    <Search></Search>
    <Users></Users>
    </div>
  )
}
