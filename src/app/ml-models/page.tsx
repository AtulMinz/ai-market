"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Pages() {
    return (
        <MaxWidthWrapper className='py-4'>
            <Card>
                <CardContent className='relative'>
                    <div className='flex flex-col space-y-2 pt-8 items-center justify-center'>
                        <div className='text-3xl font-semibold'>
                            ML Models
                        </div>
                        <p>Explore a diverse range of models, contribute to existing ones, and monetize your own creations.</p>
                    </div>

                    <div className='absolute top-10 right-10'>
                        <Button asChild>
                            <Link href='/ml-models/add-ml-models'>
                                Upload ML Model
                            </Link>
                        </Button>
                    </div>

                    <div className='py-2'>
                        <div className='flex w-full items-center'>
                            <div className='w-10 z-20 pl-1 text-center pointer-events-none flex items-center justify-center'><Search height={20} width={20} /></div>
                            <Input className='w-full md:max-w-md -mx-10 pl-10 pr-8 py-2 z-10' placeholder="Search for ML Model" />
                            <div className='ml-2 z-20 cursor-pointer'>
                                <X />
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-flow-row grid-cols-4 py-6 gap-4 items-center justify-between'>
                        <div className='border-2 rounded-xl px-2 py-6 flex flex-col items-center justify-between'>
                            <div className='flex flex-col space-y-3'>
                                <div className='text-xl text-center'>Skin Cancer Classifier</div>
                                <div className='text-lg pb-2'>0x1234...abcd <span className='pl-2 text-sm'>(25kb)</span></div>
                            </div>
                            <div className='flex w-3/4'>
                                <Button className='w-full' asChild>
                                    <Link href={`/ml-models/skin-cancer-classifier`}>
                                        Explore
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className='border-2 rounded-xl px-2 py-6 flex flex-col items-center justify-between'>
                            <div className='flex flex-col space-y-3'>
                                <div className='text-xl text-center'>Stock Trading Bot</div>
                                <div className='text-lg pb-2'>0x5678...efgh <span className='pl-2 text-sm'>(30kb)</span></div>
                            </div>
                            <div className='flex w-3/4'>
                                <Button className='w-full' asChild>
                                    <Link href={`/ml-models/stock-trading-bot`}>
                                        Explore
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className='border-2 rounded-xl px-2 py-6 flex flex-col items-center justify-between'>
                            <div className='flex flex-col space-y-3'>
                                <div className='text-xl text-center'>Image Recognition Model</div>
                                <div className='text-lg pb-2'>0x9abc...ijkl <span className='pl-2 text-sm'>(20kb)</span></div>
                            </div>
                            <div className='flex w-3/4'>
                                <Button className='w-full' asChild>
                                    <Link href={`/ml-models/image-recognition-model`}>
                                        Explore
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className='border-2 rounded-xl px-2 py-6 flex flex-col items-center justify-between'>
                            <div className='flex flex-col space-y-3'>
                                <div className='text-xl text-center'>Sentiment Analysis Tool</div>
                                <div className='text-lg pb-2'>0xmnop...qrst <span className='pl-2 text-sm'>(28kb)</span></div>
                            </div>
                            <div className='flex w-3/4'>
                                <Button className='w-full' asChild>
                                    <Link href={`/ml-models/sentiment-analysis-tool`}>
                                        Explore
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}
