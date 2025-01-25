"use client"

import React, { useEffect } from 'react'
import SearchResultsSection from '@/app/components/marketPlace/SearchResults';
import DualPriceInput from '@/app/components/marketPlace/filters/DualPriceRangeInput';
import SearchInputSection from '../components/marketPlace/SearchInput';
// import { Input } from '@/components/ui/input';
import RateMultiSelect from '../components/marketPlace/filters/RateMutiSelect';
import { Button } from '@/components/ui/button';


function page() {
    const [filters, setFilters] = React.useState({
        prices: [0, 100],
        rating:[]
    });

    return (
        <main id='market-place' className='h-screen w-full lg:w-[80%] md:w-[90%] mx-auto py-0 md:py-5  '>
            <SearchInputSection />
            <div className='grid grid-cols-3 gap-x-4'>
                <section id="filters" className='p-2 col-span-1 hidden md:block rounded-md bg-foreground'>
                    <div className=''>
                        <h4 className='text-base mb-4'>Filters</h4>
                        <div className='space-y-3 pl-3'>
                            <RateMultiSelect value={filters.rating} setValue={setFilters}/>
                            <DualPriceInput value={filters.prices} setValue={setFilters} />
                        </div>
                    </div>
                </section>
                <SearchResultsSection />
            </div>
            <Button onClick={()=> console.log(filters)}>Submit</Button>
        </main>
    )
}

export default page