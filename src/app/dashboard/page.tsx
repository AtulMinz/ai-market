"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bitcoin, Bot, Database } from 'lucide-react'

export default function Page() {
    return (
        <MaxWidthWrapper className='py-4'>
            <div className='pt-2 pb-4 text-2xl'>
                Welcone, 0x0jsdhbghjbfgjndflgmldf
            </div>
            <div className='flex flex-row items-center justify-between w-full space-x-4'>
                <Card className='flex flex-col h-full w-full'>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle className='text-sm font-medium flex flex-1 flex-row items-center space-x-1 text-start'>
                            <p>Total Revenue</p>
                        </CardTitle>
                        <Bitcoin className='h-4 w-4' />
                    </CardHeader>
                    <CardContent className='text-start'>
                        <p className='text-2xl font-bold'>0.0025 ETH</p>
                    </CardContent>
                </Card>

                <Card className='flex flex-col h-full w-full'>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle className='text-sm font-medium flex flex-1 flex-row items-center space-x-1 text-start'>
                            <p>Total ML Models Contribution</p>
                        </CardTitle>
                        <Bot className='h-4 w-4' />
                    </CardHeader>
                    <CardContent className='text-start'>
                        <p className='text-2xl font-bold'>2</p>
                    </CardContent>
                </Card>

                <Card className='flex flex-col h-full w-full'>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle className='text-sm font-medium flex flex-1 flex-row items-center space-x-1 text-start'>
                            <p>Total ML Models Bought</p>
                        </CardTitle>
                        <Bot className='h-4 w-4' />
                    </CardHeader>
                    <CardContent className='text-start'>
                        <p className='text-2xl font-bold'>2</p>
                    </CardContent>
                </Card>

                <Card className='flex flex-col h-full w-full'>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle className='text-sm font-medium flex flex-1 flex-row items-center space-x-1 text-start'>
                            <p>Total Dataset Contribution</p>
                        </CardTitle>
                        <Database className='h-4 w-4' />
                    </CardHeader>
                    <CardContent className='text-start'>
                        <p className='text-2xl font-bold'>3</p>
                    </CardContent>
                </Card>

                <Card className='flex flex-col h-full w-full'>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle className='text-sm font-medium flex flex-1 flex-row items-center space-x-1 text-start'>
                            <p>Total Dataset Bought</p>
                        </CardTitle>
                        <Database className='h-4 w-4' />
                    </CardHeader>
                    <CardContent className='text-start'>
                        <p className='text-2xl font-bold'>3</p>
                    </CardContent>
                </Card>
            </div>
        </MaxWidthWrapper>
    )
}
