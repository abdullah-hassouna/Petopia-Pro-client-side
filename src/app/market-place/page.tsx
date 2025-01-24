"use client"

import React from 'react'
import { IoMdPricetag } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import SearchResultsSection from '@/app/components/marketPlace/SearchResults';
import SearchInputSection from '../components/marketPlace/SearchInput';

function IntegeratedIcon({ label }: { label: string }) {
    if (label.includes("price")) return (<IoMdPricetag className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />)
    if (label.includes("rate")) return (<IoMdStar className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />)
    if (label.includes("date")) return (<IoMdCalendar className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />)
    return null
}

function page() {

    return (
        <main id='market-place' className='h-screen w-full lg:w-[80%] md:w-[90%] mx-auto py-0 md:py-5  '>
            <SearchInputSection />
            <div className='grid grid-cols-3 gap-x-4'>
                <section id="filters" className='col-span-1 hidden md:block rounded-md bg-foreground'>
                    q
                </section>
                <SearchResultsSection />
            </div>

        </main>
    )
}

export default page