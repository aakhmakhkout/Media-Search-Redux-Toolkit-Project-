import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
    const tabval = useSelector(state => state.search.activetab)
    const tabs = ["Photos", "GIFs", "Videos"]
  return (
    <div className='flex mt-8 w-full h-15 justify-center'>
        <div className='flex w-[80%] h-[80%] gap-10'>
        {tabs.map((items, idx)=> {
            return <button className={`${tabval === items ? "bg-[#5215c2]" : "bg-[#6e15c2]"} flex items-center cursor-pointer active:scale-95 px-7 py-3 rounded-xl text-white font-bold`} key={idx} onClick={()=> {
                dispatch(setActiveTab(items))
            }}>{items}</button>
        })}
        </div>
    </div>
  )
}

export default Tabs