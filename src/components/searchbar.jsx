import { useState } from 'react'
import { fetchPhotos } from '../api/mediaApi'
import { fetchVideos } from '../api/mediaApi'
import { fetchGifs } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, clearResults } from '../redux/features/searchSlice'

const Searchbar = () => {
const [userInp, setuserInp] = useState("")
const dispatch = useDispatch()
const submitHandler =(elem) => {
    elem.preventDefault()
    dispatch(setQuery(userInp));
    if(userInp === "") {
        dispatch(clearResults())
    }
    setuserInp("")
}
  return (
    <div className='h-20 mt-10 flex justify-center '>
        <form onSubmit={(elem)=> {
            submitHandler(elem)       
        }} className='flex items-center bg-[#6e15c2] rounded-xl h-full w-[80%] px-5 justify-between border border-white/20'>
            <input className='w-[80%] bg-black/20 px-5 h-[80%] rounded-xl text-white outline-none searchInp' type="text" placeholder='search anything' value={userInp || ""} onChange={(elem)=> {
                const value = elem.target.value
                setuserInp(value)
            }}/>
            <button className='bg-[orange] cursor-pointer py-3 px-7 rounded-xl font-bold active:scale-95'>Search</button>
        </form>
    </div>
  )
}

export default Searchbar