"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'

export default function Page() {
    return (
        <MaxWidthWrapper className='py-4'>
            <Card>
                <CardContent>
                    <div className='flex flex-col space-y-2 pt-8 items-center justify-center'>
                        <div className='text-3xl font-semibold'>
                            Datasets
                        </div>
                        <p>Choose between several datasets and contribute, and sell your datasets.</p>
                    </div>

                    <div className='py-2'>
                        <div className='flex w-full items-center'>
                            <div className='w-10 z-20 pl-1 text-center pointer-events-none flex items-center justify-center'><Search height={20} width={20} /></div>
                            <Input className='w-full md:max-w-md -mx-10 pl-10 pr-8 py-2 z-10' placeholder="Search for Dataset" />
                            <div className='ml-2 z-20 cursor-pointer'>
                                <X />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>

    )
}
