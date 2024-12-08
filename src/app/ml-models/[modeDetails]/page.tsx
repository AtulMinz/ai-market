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
                            Skin Cancer ClassifierSkin Cancer Classifier
                        </div>
                        <p>0x21...djghvj</p>
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
                        <p>The Skin Cancer Classifier is an advanced machine learning model designed to assist dermatologists in diagnosing skin cancer at an early stage. By analyzing images of skin lesions, the model can identify potential malignancies with high accuracy.</p>
                        <p>This model has been trained on a diverse dataset of skin images, ensuring its effectiveness across various skin types and conditions. It aims to enhance the diagnostic process, reduce the time taken for analysis, and ultimately improve patient outcomes.</p>
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
