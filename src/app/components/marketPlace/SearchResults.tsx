import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { IoMdCalendar, IoMdPricetag, IoMdRemoveCircle, IoMdStar } from 'react-icons/io'
import { PiCaretUpDownThin } from 'react-icons/pi'

function IntegeratedIcon({ label }: { label: string }) {
    if (label.includes("price")) return (<IoMdPricetag className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />)
    if (label.includes("rate")) return (<IoMdStar className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />)
    if (label.includes("date")) return (<IoMdCalendar className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />)
    return null
}

function SearchResults() {

    const [order, setOrder] = useState<string | undefined>(null)
    const [mouseOver, setMouseOver] = useState<"price" | "rate" | "date" | undefined>(null)
    const [sort, setSort] = useState<'asc' | 'dec'>('asc')


    return (
        <section id="search-results" className='col-span-3 md:col-span-2 px-4 py-2 rounded-md bg-foreground'>
            <span className='text-lg'>Order</span>
            <div id='order-type' className='p-2 py-3 bg-background rounded-md flex flex-wrap gap-y-3 justify-between items-center w-full cursor-pointer flex-col lg:flex-row'>

                <Badge id={`clear-order`} className='border border-gray-300 border-foreground relative overflow-hidden z-20 bg-moving-badget h-7 w-36 shadow-lg dark:shadow-none select-none' variant='outline' onClick={() => setSort(prev => prev === 'asc' ? 'dec' : 'asc')}>
                    <PiCaretUpDownThin className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />
                    <div className={cn('absolute h-10 flex flex-col left-8 w-fit transition-all duration-300  -translate-y-[40%]', { "-translate-y-[40%]": sort == "dec", "translate-y-[20%]": sort == "asc" })}>
                        <span className='text-whity text-base capitalize cursor-pointer z-10'>ascending</span>
                        <span className='text-whity text-base capitalize cursor-pointer z-10'>descending</span>
                    </div>
                </Badge>

                <div onMouseLeave={() => setMouseOver(null)} className='relative bg-transparent border border-gray-400 rounded-md overflow-hidden shadow-lg dark:shadow-none select-none h-7'>
                    <div className={cn("absolute min-h-10 min-w-20 h-10 w-20 top-10 -right-10 transition-all duration-300 bg-icon-color-75 rounded-full z-0", {
                        "-top-[6px] right-[67%]": (mouseOver == "price"),
                        "-top-[6px] right-[33%]": (mouseOver == "rate"),
                        "-top-[6px] right-0": (mouseOver == "date"),
                    })}>
                    </div>

                    {["price", "rate", "date"].map((prop: "price" | "rate" | "date") =>
                        <Badge onMouseEnter={() => setMouseOver(prop)} key={prop} id={`${prop}-order`} onClick={_ => { setOrder(() => prop) }} className={cn('relative overflow-hidden z-20 h-full bg-transparent rounded-none hover:bg-transparent', { "bg-icon-color-50  hover:bg-icon-color-75": order == prop })}>

                            <IntegeratedIcon label={prop} />
                            <span className='text-whity text-base capitalize z-10'>{prop}</span>
                        </Badge>
                    )}
                </div>

                <Badge id={`clear-order`} onClick={_ => setOrder(() => null)} className='border border-gray-300 border-foreground relative overflow-hidden z-20 bg-moving-badget shadow-lg dark:shadow-none select-none h-7' variant='destructive'>
                    <div className="absolute min-h-20 min-w-20 h-20 w-20 top-3 left-8 transition-all duration-300 bg-rose-500  rounded-full z-0"></div>
                    <IoMdRemoveCircle className='block h-4 w-auto mr-2 z-10' color='var(--whity)' />
                    <span className='text-whity text-base capitalize cursor-pointer z-10'>clear</span>
                </Badge>
            </div>
        </section>
    )
}

export default SearchResults