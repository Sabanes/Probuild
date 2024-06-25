'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { motion, Variants } from 'framer-motion';

import Header from './components/Header';
import Counter from './components/counter/counter';
import Accordion from './components/acording/acording';
import Image from 'next/image';
import Counting from './components/countings/counting';
import StatsSection from './components/Stats/stats';

export default function Home() {
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      gsap.to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: 2.5,
        ease: "power4.inOut",
      });
    });

    return () => gsapContext.revert();
  }, []);


  return (
    <>    
      <Header />

      <main className='md:px-10 max-w-full w-full flex flex-col md:flex-row gap-x-[60px] items-center justify-center relative top-[6rem]'>
        <section className='flex flex-col md:w-[60%]'>
          <div className='w-full flex gap-3 items-center'>
            <p className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Your</p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <Image width={300} height={100} className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kc2immccq0fyqy9mkz4d" alt="Vision" />
            </span>
            <p className='md:text-[5.7vw] text-[8.5vw] font-bold uppercase'>Vision</p>
          </div>
          <div className='w-full flex gap-3 items-center'>
            <p className='md:text-[5vw] text-[8.5vw] font-bold uppercase'>Our Mastery</p>
            <span className="clip_path-container relative md:h-[7.5vw] h-[11vw] aspect-[4/2] rounded-full overflow-hidden">
              <Image width={300} height={100} className="bg-cover" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/qh4rjipqcbgr4po9juoo" alt="Mastery" />
            </span>
          </div>
        </section>
        
        <section className='md:w-[30%] 2xl:w-[20%] xs:max-w-[90%] w-full flex flex-col gap-6 items-start relative top-5 md:pl-0'>
          <span className='border w-1/3'></span>
          <p className='md:text-sm text-sm 2xl:text-3xl'>
            Showcasing Our Diverse Construction Portfolio, <br /> Expert Services, Satisfied Client Testimonials, <br /> and Converting Inquiry Channels.
          </p>
          <div className='flex flex-row items-center gap-3 md:pt-1'>
            <p className='md:text-5xl text-4xl text-[var(--dark-grey)]'>
              <Counter number={100} title="+" />
            </p>
            <p className='md:text-xl text-md tracking-widest'>
              Happy <br /> homeowners
            </p>
          </div>
        </section>
      </main>

      <div className='m-auto flex md:flex-row flex-col-reverse relative top-[10rem] gap-[30px]'>  
        <Image width={500} height={500} className='clip_path-container md:w-[37%] overflow-hidden w-0' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/dekbvvdmimc2kokp4yt3" alt="Probuild Lisbon builder" />
        <Image width={900} height={500} className='clip_path-container md:w-[63%] overflow-hidden' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/nec9l5l7ps6z7os4riyu" alt="Probuild Lisbon House" />
      </div>

      <StatsSection />

      <Counting />

      <section className='md:px-[126px] m-auto flex lg:flex-row flex-col flex-1 py-20'>
        <div className='flex flex-col pt-10 lg:w-[50%]'>
          <h1 className='2xl:text-[5vw] lg:text-6xl text-5xl font-bold'>Vision Forge</h1>
          <p className='md:max-w-[80%] pt-[14px] pb-[32px] 2xl:text-3xl lg:text-lg text-sm'>
            Where Dreams Take Shape, Creating Unforgettable Architectural Wonders With Expert Craftsmanship and Precision Execution. Transforming Inspirations into Magnificent, Enduring Architectural Masterpieces Expert Craftsmanship and Precision
          </p>
          <Image width={400} height={600} loading='lazy' className='lg:w-[90%]' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/kpwpinikrjymgd4rxoie" alt="Probuild Lisbon builder" />
        </div>

        <div className='flex lg:flex-col flex-col-reverse pt-10 lg:w-[50%]'>
          <Image width={400} height={600}loading='lazy' className='lg:w-full' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/apygnnvdhbdvzxhpe8ro" alt="Apartment remodelation by Probuild Lisbon" />
          <Accordion />
        </div>
      </section>

    </>
  );
}
