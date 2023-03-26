import React,{useRef, useState} from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import Thumbnail from '../thumbnail/Thumbnail'
import { RowProps } from './Row.props'

function Row({ title, movies }: RowProps) {
  const [moved, setMoved]=useState<boolean>(false)
  const carouselRef =  useRef<HTMLDivElement>(null);

const handleClick=(direction:"left" | "right" )=>{
    setMoved(true)
    if(carouselRef.current){
      const {scrollLeft, clientWidth}= carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      carouselRef.current.scrollTo({left:scrollTo, behavior:'smooth'})
        if(direction === 'left' && scrollTo === 0){
          setMoved(false)
        }
      
      }
}


  return (
    <div className='h-[600px]space-y-1 md:space-y-2 '>
      <h2 className='w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200'>{title}</h2>
      <div className='group relative md:ml-2 '>
        <AiFillCaretLeft onClick={()=>handleClick('left')} className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transiotion duration-200 hover:scale-100 ${!moved && "hidden"}`} />
        
        <div ref={carouselRef} className='flex scrollbar-hide items-center space-x-1 overflow-hidden overflow-x-scroll md:space-x-4'>
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie}/>
          ))}
        </div>
        <AiFillCaretRight onClick={()=>handleClick('right')} className='absolute top-0 bottom-0 right-2 opacity-0-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transiotion duration-200 hover:scale-100 ' />
      </div>
    </div>
  )
}

export default Row