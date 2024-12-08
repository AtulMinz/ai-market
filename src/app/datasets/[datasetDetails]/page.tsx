import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
    return (
        <MaxWidthWrapper className='py-4'>
            <Card>
                <CardContent className='relative'>
                    <div className='flex flex-col space-y-2 py-8 items-center justify-center'>
                        <div className='text-3xl font-semibold'>
                            Skin Cancer Dataset
                        </div>
                        <p>0x1234...abcd</p>
                    </div>

                    <div className='absolute top-10 right-10'>
                        <Button asChild>
                            <Link href='/datasets/add-datasets'>
                                Upload Dataset
                            </Link>
                        </Button>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='font-semibold text-xl'>About Dataset</div>
                        <p>This dataset contains a collection of images of skin lesions, annotated with their corresponding diagnoses. It aims to facilitate the development of machine learning models for skin cancer detection and classification, ultimately contributing to early diagnosis and improved patient outcomes.</p>
                        <div className='font-semibold text-lg'>Total Size: 233kb</div>
                    </div>
                    <div className='pt-2'>
                        <Button>Buy Dataset</Button>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}
