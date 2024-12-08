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
                            Model Name
                        </div>
                        <p>User Address</p>
                    </div>

                    <div className='absolute top-10 right-10'>
                        <Button asChild>
                            <Link href='/ml-models/add-ml-models'>
                                Upload ML Model
                            </Link>
                        </Button>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='font-semibold text-xl'>About ML Model</div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deleniti obcaecati nobis iure nemo. Natus asperiores quia suscipit. Expedita autem sequi illum quas. Blanditiis ratione maiores quia maxime dolor neque!</p>
                        <div className='font-semibold text-lg'>Total Size: 233kb</div>
                    </div>
                    <div className='pt-2'>
                        <Button>Buy Model</Button>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}
