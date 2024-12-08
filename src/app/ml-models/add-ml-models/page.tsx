"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Page() {
    return (
        <MaxWidthWrapper className='py-4'>
            <Card>
                <CardContent className='py-6 px-36'>
                    <div className='text-center text-2xl'>Add ML Model</div>

                    <div className='flex flex-col space-y-4 mx-16 py-4'>
                        <Input placeholder='Model Name' />
                        <Textarea placeholder='Model Description' />
                        <Input placeholder='Model Price' />
                        <Input placeholder='ML Model File' type='file' />
                        <Button>Launch</Button>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}
