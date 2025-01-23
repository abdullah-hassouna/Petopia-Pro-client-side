"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { AddCircle, ArrowDown3, Check } from "iconsax-react"

interface iItem {
    value: string,
    label: string,
    icon?: string | undefined
}


function RenderItem({ item, selectedValue, }: { item: iItem, selectedValue: string, }) {
    return (
        <div className="flex justify-around items-center gap-1 w-full">
            <AddCircle
                className={cn(
                    "mr-2 h-4 w-4 fill-primary-50",
                    (selectedValue || "").split("_")[1] === item.value ? "opacity-100" : "opacity-0"
                )}

            />
            <img src={item.icon} className={cn("h-4 w-4 object-cover opacity-0", { "opacity-100": item.icon })} />
            <span className="flex-grow ">{item.label}</span>
            <span className="text-gray-600 text-xs">{item.value}</span>

        </div>

    )
}

export function SelectSearch({ className, placeHolder, selectionList, itemRender, value, selectValue }: { className: string, placeHolder: string, selectionList: iItem[], itemRender?: React.JSX.Element | undefined, value: string, selectValue: Function }) {
    const [open, setOpen] = React.useState(false)
    // const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(" justify-between w-full", className)}
                >
                    {(value || "").split("_")[1] || "Select item..."}
                    <ArrowDown3 className="ml-2 h-4 w-4 shrink-0 opacity-50" color="var(--icon-color)" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-background text-whity p-0">
                <Command>
                    <CommandInput placeholder={placeHolder || "Search item..."} />
                    <CommandList>
                        <CommandEmpty>No item found.</CommandEmpty>
                        <CommandGroup>
                            {selectionList.map((item, index) => (
                                <CommandItem
                                    key={index}
                                    value={item.label + "_" + item.value}
                                    onSelect={(currentValue) => {
                                        selectValue(currentValue.split("_")[1] === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className="w-full text-whity"
                                >
                                    <RenderItem item={item} selectedValue={value} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
