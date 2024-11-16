'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import stickerDrop from '@/public/stickerDrop.png';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full row-start-2 flex flex-col items-center justify-center text-center'>
      <h1 className='text-4xl md:text-6xl font-bold mb-8 text-center animate-pulse'>
        We&apos;re Building Something Awesome! <br />✨ 👁️👄👁️ 🤭
      </h1>

      <div className='grid grid-cols-4 gap-4 mb-12 w-full max-w-2xl'>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className='bg-gray-800 p-4 rounded-lg'
          >
            <div className='text-3xl md:text-4xl font-bold text-center'>
              {String(value).padStart(2, '0')}
            </div>
            <div className='text-sm text-gray-400 capitalize text-center'>
              {unit}
            </div>
          </div>
        ))}
      </div>

      <div className='mb-12'>
        <Image
          src={stickerDrop}
          alt='Sticker Drop Clowns!'
        />
      </div>

      <p className='text-xl md:text-2xl text-gray-300 animate-pulse'>
        Stay tuned for when website goes live!
      </p>
    </div>
  );
};

export default ComingSoon;
