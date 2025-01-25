"use client";

import React from "react";
import { MultiSelect } from "@/components/ui/multi-select";

const RatingOptions = [
    { label: "Not Rated", value: "0" },
    { label: "1 Star", value: '1' },
    ...(([...(new Array(4))]).map((__, n) => ({ label: `${(n + 2)} Stars`, value: `${n + 2}` })))]


function RateMultiSelect({ value, setValue }: { value: string[], setValue: Function}) {

    function onValueChange(value: string[]) {
        setValue((prev: object) => ({ ...prev, rating: value }))
    }

    return (
        <div className='p-2 rounded-md bg-background'>
            <span>Rates</span>
            <MultiSelect
                options={RatingOptions}
                onValueChange={onValueChange}
                defaultValue={value}
                placeholder="Select Rating"
                variant="inverted"
                maxCount={10}
                search={false} />
        </div>
    );
}

export default RateMultiSelect;