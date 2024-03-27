import SearchForm from '@/components/forms/search-form'
import React from 'react'

export default function Search() {
  return (
    <div className="flex-1 md:block hidden relative" >
    <div className=" flex-1 mx-5 "><SearchForm/></div>
    </div>
  )
}
