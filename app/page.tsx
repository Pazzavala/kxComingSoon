import ComingSoon from '@/components/comingSoon';
import { FaInstagram } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <ComingSoon />
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://www.instagram.com/kztudioz/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram />
          Notify Me on Launch Day ⚡
        </a>
      </footer>
    </div>
  );
}
