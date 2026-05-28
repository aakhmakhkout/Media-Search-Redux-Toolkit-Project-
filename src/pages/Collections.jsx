import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'
import Resultscards from '../components/Resultscards'
import { Delete } from 'lucide-react'

const Collections = () => {
  const collectionData = useSelector(state => state.collection.collectionData)
  const activeTab = useSelector(state => state.search.activetab)
  const page = useSelector(state => state.collection.page)
  const iconobj ={
    icon: <Delete size={25} strokeWidth={1.75} />
  }
  
  
  return (
    <div>
      <Tabs />
      
    <div className="w-full h-[70vh] flex justify-center flex-col items-center ">
      <div className="w-[80%] h-full flex flex-wrap gap-5 overflow-y-scroll resultdiv justify-start items-center pb-10">
          {collectionData.filter((items) => {
          return items.type === activeTab
        }).map((items)=> {
          return <div key={items.id} >
            <Resultscards data = {{items}} icon={iconobj} whichPage={page}/>
            </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default Collections