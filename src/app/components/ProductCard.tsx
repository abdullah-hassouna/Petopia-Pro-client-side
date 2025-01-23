import { Button } from '@/components/ui/button'
import { CardHeader, CardContent, CardTitle, CardDescription, CardFooter, Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ExportSquare, Star1 } from 'iconsax-react'
import React from 'react'

export default function ProductCard({ redirect, product }: { redirect: (productId: string) => void, product: { name: string, image: string, description: string, price: number, rate: number } }) {

    return (<Card
        className={cn('bg-background border-primary-50 flex flex-col justify-between')}>
        <CardHeader>
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        </CardHeader>
        <CardContent className='flex-grow'>
            <CardTitle className='text-whity line-clamp-1'>{product.name}</CardTitle>
            <CardDescription className='line-clamp-2 mt-2'>{product.description}</CardDescription>

        </CardContent>
        <CardFooter className='flex flex-col items-start'>
            <p className="mt-2 font-bold text-whity">${product.price}</p>
            <div className='my-3 h-5 flex gap-1'>
                {[...(new Array(product.rate % 6))].map((__, key) =>
                    <Star1 key={key} className='h-5 w-5 fill-yellow-400' />
                )}
                {[...(new Array((5 - product.rate) % 6))].map((__, key) =>
                    <Star1 key={key} color='yellow' className='h-5 w-5' />
                )}
            </div>
            <Button className="w-full">
                <ExportSquare color='white' onClick={() => redirect(product.name)} className="w-4 h-4 mr-2" />
                Show More
            </Button>
        </CardFooter>
    </Card>)
}