import Image from 'next/image'
import React from 'react'
import ReactStars from 'react-stars'
import { image_base } from 'src/helpers/constants'
import { ThumbnailProps } from './Thumbnail.props'


function Thumbnail({ movie, isBig = false }: ThumbnailProps) {
    return (
        <div className={`relative ${isBig ? 'h-[400px] md:h-[550px]  min-w-[350px] md:min-w-[470px]' : 'h-[330px] md:h-[440px]  min-w-[200px] md:min-w-[292px]'}   cursor-pointer transition duration-200 ease-out   md:hover:scale-110`} >

            <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} fill alt={"movie.title"} className='object-cover rounded-sm md:rounded' />

            <div className='absolute left-0 top-0 bottom-0 right-0 bg-black/40 w-full h-full'/>


            <div className='absolute bottom-5 left-4 right-2'>

                <div className='flex items-center space-x-2'>
                    <ReactStars edit={false} color2={"#FFF"} count={10} value={movie?.vote_average} />
                    <p>({movie?.vote_count})</p>
                </div>
                    <h1 className='text-xl font-bold md:text-2xl'>{movie?.title || movie?.name || movie.original_name}</h1>
            </div>
        </div>
    )
}

export default Thumbnail
