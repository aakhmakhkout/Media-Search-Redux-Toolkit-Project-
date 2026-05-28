import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { setCollectionData } from "../redux/features/collection";
import {Bookmark} from "lucide-react"

const Resultscards = ({data, icon}) => {
const {items} = data
  const dispatch = useDispatch()
  return (
              <div className="flex w-80 object-cover bg-white/30 overflow-hidden rounded-xl relative h-50">
                <a href={items.src} target="_blank" className="flex flex-col items-center w-full h-50 overflow-hidden relative">
                    {items.type !== "Videos"? <img src={items.thumbnail} alt={items.title} className="w-full h-full object-cover object-center hover:scale-110 transition duration-300" />: <video src={items.thumbnail} alt={items.title} className="w-full h-full object-cover object-center hover:scale-110 transition duration-300" autoPlay loop muted/>}

                    <div className="absolute z-10 bottom-0 px-2">
                        <p className="text-white text-sm font-bold capitalize bg-black/30 p-1 rounded-md shadow-md">{items.title}</p>
                    </div>
                </a>
                  <button className="absolute cursor-pointer right-2 top-2 bg-black/20 rounded-md text-[orange] active:scale-95" onClick={(elem)=> {
                    dispatch(setCollectionData(items))
                  }}>{icon.icon}</button>
              </div>   
  )
}

export default Resultscards