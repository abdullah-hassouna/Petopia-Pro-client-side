import { Input } from '@/components/ui/input'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaPlay } from 'react-icons/fa'

function SearchInput() {
    return (
        <section id='search' className='h-fit p-10 md:p-2 mb-3 rounded-xl bg-foreground'>
            <div className='flex justify-start items-center gap-3 p-4 border border-gray-200 rounded-xl'>

                <div className='relative overflow-hidden h-10 w-10 border border-primary p-1 hover:border-transparent hover:text-background hover:cursor-pointer rounded-xl'>
                    <div className='absolute flex justify-evenly mx-2 gap-5 translate-x-[-50%] left-[100%] transition-all duration-300 hover:-left-4'>
                        <CiSearch className='h-8 w-8' color='var(--prime-color)' />
                        <div className='rounded-0 min-h-10 min-w-10 h-10 w-10 bg-primary-50 absolute -right-1 -top-1'></div>
                        <FaPlay className='h-8 w-8' color='var(--whity)' />
                    </div>
                </div>
                <Input className='flex-grow h-full text-3xl ring-0 outline-none border-0 focus-visible:outline-none focus-visible:ring-0 p-0' placeholder='Search for product...' />
            </div>
        </section>
    )
}

export default SearchInput