"use client"

import React, { ReactNode } from 'react'
import SearchResultsSection from '@/app/components/marketPlace/SearchResults';
import DualPriceInput from '@/app/components/marketPlace/filters/DualPriceRangeInput';
import SearchInputSection from '../components/marketPlace/SearchInput';
import RateMultiSelect from '../components/marketPlace/filters/RateMutiSelect';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';


function page() {
    const [orderWay, setOrderWay] = React.useState({
        order: '',
        sort: 'asc',
    });

    const [filters, setFilters] = React.useState({
        prices: [20, 100],
        rating: []
    });

    function FilterAccordian({ className, children }: { className?: string, children: React.ReactNode }) {
        return (
            <Accordion className={cn('space-y-3 pl-3', className)} type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-base'>Filter</AccordionTrigger>
                    <AccordionContent className='space-y-3 '>
                        {children}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    }

    function FilterSection(props): ReactNode {
        return <section {...props} id="filters" className='p-2 h-fit rounded-md bg-foreground'>
            <div className='p-10 md:p-2 hidden lg:block'>
                <h4 className='text-base mb-3'>Filters</h4>
                <div className='space-y-3 pl-3'>
                    <RateMultiSelect value={filters.rating} setValue={setFilters} />
                    <DualPriceInput value={filters.prices} setValue={setFilters} />
                </div>
            </div>
            <FilterAccordian className='block lg:hidden '>
                <RateMultiSelect value={filters.rating} setValue={setFilters} />
                <DualPriceInput value={filters.prices} setValue={setFilters} />
                <Button onClick={() => console.log(filters, orderWay)}>Submit</Button>
            </FilterAccordian>
        </section>
    }

    return (<main id='market-place' className='h-screen w-full md:w-[90%]  mx-auto py-0 md:py-5'>
        <SearchInputSection />
        <div className='grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-4'>
            <FilterSection id="filters" className='p-2 h-fit rounded-md bg-foreground' />
            <SearchResultsSection value={orderWay} setValue={setOrderWay} />
        </div>
    </main>
    )
}

export default page