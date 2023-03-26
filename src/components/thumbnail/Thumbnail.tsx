import Image from 'next/image'
import React from 'react'
import { image_base } from 'src/helpers/constants'
import { ThumbnailProps } from './Thumbnail.props'


function Thumbnail({movie}:ThumbnailProps) {
  return (
    <div className='relative h-[330px] min-w-[200px] cursor-pointer transition duration-200 ease-out md:h-[440px] md:min-w-[292px] md:hover:scale-110' >
      
      <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} fill alt={"movie.title"} className='object-cover rounded-sm md:rounded' />
    </div>
  )
}

export default Thumbnail
