"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bitcoin, Bot, Database } from 'lucide-react'
import { useAccount } from 'wagmi';

export default function Page() {
    const { address } = useAccount();

    return (
        <MaxWidthWrapper className='py-4'>
            {
                address ?
                    <div>
                        <div className='pt-2 pb-4 text-2xl'>
                            Welcone, {address}
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
                    </div> :
                    <div className='animate-fade-bottom-up flex items-center justify-center w-full min-h-[60vh]'>
                        <Card className='w-full md:max-w-96'>
                            <CardHeader className='py-24'>
                                <CardTitle className='text-center tracking-wide leading-8'>Connect wallet to continue</CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
            }
        </MaxWidthWrapper>
    )
}
