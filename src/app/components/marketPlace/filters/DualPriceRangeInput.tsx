'use client';

import * as React from 'react';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';
import { Input } from '@/components/ui/input';

const DualRangeSliderCustomLabel = ({ value, setValue }: { value: number[], setValue: Function }) => {

    function onValueChange(value: number[]) {
        setValue((prev: any) => ({ ...prev, prices: value }))
    }

    function refChangePriceValue(e: any, index?: number | undefined) {
        const value = Number(e.target.value) < 0 || Number(e.target.value) > 100 ? 0 : Number(e.target.value);

        if (index) {
            setValue((prev: any[]) => ({ ...prev, prices: [value, prev[1]] }))
        } else {
            // setValue(prev => ([prev[0], value]))
        }
    }

    return (
        <div className='p-2 rounded-md bg-background'>
            <span>Price</span>
            <div className="w-full px-10 mt-8 h-6">
                <DualRangeSlider
                    label={(value) => <span>${value}</span>}
                    value={value}
                    onValueChange={onValueChange}
                    min={0}
                    max={100}
                    step={1}
                />
            </div>
            <div>

                <div className='w-full flex justify-between'>

                    <Input onChange={e => refChangePriceValue(e, 0)} value={value[0]} className='max-w-15 w-12 h-6 p-1 ring-0 border border-icon-color-50 outline-none focus-visible:outline-none bg-background rounded-md' type="number" name='minPrice' />


                    <Input onChange={refChangePriceValue} value={value[1]} className='max-w-15 w-12 h-6 p-1 ring-0 border border-icon-color-50 outline-none focus-visible:outline-none bg-background rounded-md' type="number" name='maxPrice' />


                </div>

            </div>
        </div>

    );
};
export default DualRangeSliderCustomLabel;
