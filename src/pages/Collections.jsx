import React from 'react'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'
import Resultscards from '../components/Resultscards'

const Collections = () => {
  const collectionData = useSelector(state => state.collection.collectionData)
  const activeTab = useSelector(state => state.search.activetab)
  
  
  return (
    <div>
      <Tabs />
      
    <div className="w-full h-[70vh] flex justify-center flex-col items-center ">
      <div className="w-[80%] h-full flex flex-wrap gap-5 overflow-y-scroll resultdiv justify-evenly pb-10">
          {collectionData.filter((items) => {
          return items.type === activeTab
        }).map((items)=> {
          return <Resultscards data = {{items}}/>
        })}
      </div>
    </div>
    </div>
  )
}

export default Collections