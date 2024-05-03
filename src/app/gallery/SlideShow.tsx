"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import envConfig from '../../../config';
import Rating from './Rating';
import Link from 'next/link';

const SliderShow = ({ data }: { data: { Id: number; Title: string; rating: number; url: string; Images: { Image: string; GaleryId: number; }[] }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="relative w-full h-fit">
      {data.map((tour, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Main content of the slide */}
          <div className="w-full h-[280px] md:h-[700px] relative shadow-2xl">
            <Image
              src={`${envConfig.NEXT_PUBLIC_CDN + tour.Images[0].Image}`}
              alt="image"
              fill={true}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full bg-slate-400 bg-opacity-50 text-white p-1 rounded-md">
              <div className='sm:block md:flex justify-around items-center'>
                <div>
                  <h3 className="text-base md:text-lg font-bold">{tour.Title}</h3>
                  <Rating rating={tour.rating} />
                </div>
                <div>
                  <button className='py-1 md:py-2 px-6 text-sm md:text-xl bg-main rounded-lg hover:bg-red-500 shadow-md'>
                    <Link href={tour.url}>
                      Xem Tour
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            {/* Footer with buttons */}
            <div className="flex justify-center gap-4 mt-4 absolute bottom-4 left-0 w-full">
              {data.map((item, i) => (
                <div
                  key={i}
                  className={`w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-md relative ${i === currentIndex ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  tabIndex={0}
                >
                  <Image
                    src={`${envConfig.NEXT_PUBLIC_CDN + item.Images[0].Image}`}
                    alt="image"
                    fill={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className='rounded-md object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderShow;



