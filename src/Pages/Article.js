import React from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
  const { name } = useParams();
  return (
    <>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      This is the { name } Article</h1>
    </>
  )
}

export default Article