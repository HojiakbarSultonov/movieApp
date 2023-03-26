import React, { useState, useEffect } from 'react'
import { HeroProps } from './Hero.props';
import { IMovie } from 'src/interfaces/app.interface';
import Image from 'next/image';
import { image_base } from 'src/helpers/constants';
import {TbPlayerPlay} from 'react-icons/tb'
import ReactStars from 'react-stars'

function Hero({ trending  }: HeroProps): JSX.Element {
    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    useEffect(() => {
        const randomMovie = trending[Math.floor(Math.random() * trending.length)]
        setMovie(randomMovie)
    }, [trending]);
    return (
        <div className='flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end'>
            <div className='absolute top-0 left-0 h-[95vh] w-full -z-10' >
                <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} fill alt={"movie.title"} className='object-cover' />
            </div>

            <div className='py-1 px-2 bg-[#e5e5e5]/50 w-[111px] text-center rounded-bl-[8px] rounded-tr-[8px]'>
                {movie?.media_type}
            </div>
            <div className='flex items-center space-x-2'>
                <ReactStars edit={false}  color2={"#FFF"} count={10} value={movie?.vote_average} />
                <p>({movie?.vote_count})</p>
            </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie.original_name}</h1>
            <p className='max-w-xs text-shadow-md md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl'>{movie?.overview?.slice(0,100)}...</p>
            <div>
                <button className='flex items-center space-x-2 justify-center bg-white/60 font-bold text-black  w-[200px] border-red-500 h-14 rounded-full'>
                <TbPlayerPlay className="h-5 w-5 md:h-8 md:w-8 mr-2"/>Watching now</button>
            </div>
        </div>
    )
}

export default Hero