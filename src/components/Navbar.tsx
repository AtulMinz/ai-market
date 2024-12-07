/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import ModeToggle from './ModeToggle'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    const [visible, setVisible] = useState(true);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 50) {
            const previousScrollY = scrollY.getPrevious();
            if (previousScrollY !== undefined) {
                setVisible(latest < previousScrollY ? true : false);
            }
        }
    });

    const navbarVariants = {
        hidden: { y: '-100%', opacity: 0 },
        visible: { y: '0%', opacity: 1 },
    };

    return (
        <motion.div
            initial='visible'
            animate={visible ? 'visible' : 'hidden'}
            variants={navbarVariants}
            transition={{ duration: 0.3 }}
            // @ts-ignore
            className='backdrop-blur-3xl fixed top-0 z-50 w-full'
        >
            <nav className='flex items-center py-2 flex-wrap px-2.5 md:px-12 tracking-wider justify-between'>
                <Link href='/' passHref>
                    <div className='text-3xl flex flex-row items-center justify-start'>
                        APP NAME
                    </div>
                </Link>

                <div className='hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    {/* <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto md:pl-16 w-full md:items-center items-start flex flex-col md:h-auto space-x-2'>
                        <Link href='/' passHref>
                            <span className='md:inline-flex md:w-auto w-full px-3 py-2 hover:rounded items-center justify-center hover:text-white hover:bg-primary cursor-pointer'>
                                About
                            </span>
                        </Link>
                    </div>

                    <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto md:pl-16 w-full md:items-center items-start flex flex-col md:h-auto space-x-2'>
                        <Link href='/dashboard' passHref>
                            <span className='md:inline-flex md:w-auto w-full px-3 py-2 hover:rounded items-center justify-center hover:text-white hover:bg-primary cursor-pointer'>
                                Dashboard
                            </span>
                        </Link>
                    </div> */}
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto lg:space-x-4'>
                        <Button variant='ghost' className='hover:bg-primary hover:text-white text-md' asChild>
                            <Link href='/' passHref>
                                About
                            </Link>
                        </Button>

                        <Button variant='ghost' className='hover:bg-primary hover:text-white text-md' asChild>
                            <Link href='/ml-models' passHref>
                                ML Models
                            </Link>
                        </Button>

                        <Button variant='ghost' className='hover:bg-primary hover:text-white text-md' asChild>
                            <Link href='/datasets' passHref>
                                Datasets
                            </Link>
                        </Button>

                        <Button variant='ghost' className='hover:bg-primary hover:text-white text-md' asChild>
                            <Link href='/dashboard' passHref>
                                Dashboard
                            </Link>
                        </Button>

                        <Button>Connect Wallet</Button>
                    </div>

                    <div className='flex space-x-2 justify-between items-center ml-2'>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </motion.div>
    );
}