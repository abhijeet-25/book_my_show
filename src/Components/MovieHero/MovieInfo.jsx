import React, { useState } from 'react';
import PaymentModel from '../PaymentMode/PaymentComponent';

const MovieInfo = ({ movie }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const genres = movie.genres?.map(({ name }) => name).join(", ");
    const rentMovie = () => {
        setIsOpen(true);
        setPrice(2);
    }
    const buyMovie = () => {
        setIsOpen(true);
        setPrice(8)
    }
    return (
        <>
            <PaymentModel  setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className='hidden lg:flex flex-col gap-8'>
                <h1 className='text-white font-bold text-5xl'>{movie.original_title}</h1>

                <div className='text-red-600 font-bold flex flex-col gap-3  md:px-4'>
                    <h4 >4k ratings</h4>
                    <h4>English, Hindi, Tamil</h4>
                    <h4>{movie.runtime} min | {genres}</h4>

                </div>
                <div className='flex items-center gap-3 w-96'>
                    <button onClick={rentMovie} className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>Rent $2</button>
                    <button onClick={buyMovie} className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>Buy $8</button>

                </div>

            </div>
        </>
    )
}

export default MovieInfo