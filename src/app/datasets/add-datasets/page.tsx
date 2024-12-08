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
                    <div className='text-center text-2xl'>Add Dataset</div>

                    <div className='flex flex-col space-y-4 mx-16 py-4'>
                        <Input placeholder='Dataset Name' />
                        <Textarea placeholder='Dataset Description' />
                        <Input placeholder='Dataset Price' />
                        <Input placeholder='Dataset File' type='file' />
                        <Button>Launch</Button>
                    </div>
                </CardContent>
            </Card>
        </MaxWidthWrapper>
    )
}
