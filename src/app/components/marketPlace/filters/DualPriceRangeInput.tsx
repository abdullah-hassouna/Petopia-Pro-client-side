'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';
import { Input } from '@/components/ui/input';

const DualRangeSliderCustomLabel = ({ value, setValue }: { value: number[], setValue: Function }) => {
    const pricesLimit = {
        min: 20,
        max: 100
    }
    function onValueChange(value: number[]) {
        setValue((prev: any) => ({ ...prev, prices: value }))
    }

    function refChangePriceValue(e: any, index?: number | undefined) {
        const value = Number(e.target.value);

        console.log(value)

        if (index) {
            setValue((prev: any[]) => ({ ...prev, prices: [value, prev[1]] }))
        } else {
            // setValue(prev => ([prev[0], value]))
        }
    }

    return (
        <div className='p-2 rounded-md bg-background'>
            <span>Price</span>
            <div className="w-full px-2 mt-10 h-6">
                <DualRangeSlider
                    label={(value) => <span>${value}</span>}
                    value={value}
                    onValueChange={onValueChange}
                    min={pricesLimit.min}
                    max={pricesLimit.max}
                    step={1}
                />
            </div>
            <div>

                <div className='w-full flex justify-between'>

                    <Input min={pricesLimit.min} max={pricesLimit.max} onChange={e => refChangePriceValue(e, 0)} value={value[0]} className='max-w-15 w-14 h-6 p-1 ring-0 border border-icon-color-50 outline-none focus-visible:outline-none bg-background rounded-md' type="number" name='minPrice' />


                    <Input min={pricesLimit.min} max={pricesLimit.min} onChange={refChangePriceValue} value={value[1]} className='max-w-15 w-14 h-6 p-1 ring-0 border border-icon-color-50 outline-none focus-visible:outline-none bg-background rounded-md' type="number" name='maxPrice' />


                </div>

            </div>
        </div>

    );
};
export default DualRangeSliderCustomLabel;
