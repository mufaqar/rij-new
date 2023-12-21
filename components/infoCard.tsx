import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

function InfoCard({ data, id }: any) {
    return (
        <div className='relative bg-gray-200 p-7 rounded-[10px] shadow-[0px_0px_20px_rgba(186,186,186,0.15)] group'>
            <div className='flex justify-between items-center gap-2'>
                <span className='text-2xl font-semibold bg-primary text-white w-11 h-11 rounded-full text-center flex justify-center items-center absolute -top-3 left-0'>
                    {id}
                </span>
                <h3 className='text-xl font-bold my-3'>
                    {data.title}
                </h3>
            </div>

            <p className='text-base font-normal text-black/60'>
                {data?.sub_title}
            </p>
            <span className='text-8xl font-semibold absolute bottom-0 right-0 opacity-10 scale-0 group-hover:scale-100 delay-150 duration-100 ease-in-out'>
                {data?.icon}
            </span>
        </div>
    )
}

export default InfoCard