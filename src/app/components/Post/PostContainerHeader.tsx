'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useState } from 'react'

const ContainerHeader = ({ header }: { header: string }) => {
  const tags = [
    { name: 'All' },
    { name: 'Adoption' },
    { name: 'Product' },
    { name: 'Discuss' },
    { name: 'Sale' },
    { name: 'Help' },
  ]
  const [selectedTag, setSelectedTag] = useState('All')

  return (
    <div
      className="flex items-center justify-between gap-10 py-5 px-0 w-full max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto
    "
    >
      <h1 className="font-normal text-lg leading-tight">{header}</h1>
      <ScrollArea className="flex overflow-x-auto items-center whitespace-nowrap w-full">
        {tags.map((tag) => (
          <Button
            key={tag.name}
            variant={selectedTag === tag.name ? 'filter' : 'filter-inactive'}
            onClick={() => setSelectedTag(tag.name)}
            className={`
                px-6
                mx-1
                py-2
                text-sm
                transition-colors
                font-light
              `}
          >
            {tag.name}
          </Button>
        ))}
        <ScrollBar orientation="horizontal" className="pb-2" />
      </ScrollArea>
    </div>
  )
}
export default ContainerHeader
