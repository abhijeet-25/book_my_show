import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='w-32 h-32'>
                    <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="Cast Image" className='rounded-full h-full w-full object-cover object-center' />
                    

                </div>
                <h1 className='font-bold '>{props.castName}</h1>
                <h1 className='font-bold'>( {props.role} )</h1>

            </div>
        </>
    )
}

export default Cast