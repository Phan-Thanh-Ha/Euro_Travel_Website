'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import './phone-button.css'

export default function FloatingButton() {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /* btn phone */
    <div className="fixed bottom-14 right-2 flex gap-1 flex-col w-[280px] items-end z-50">
      <div className="relative">
        <button className="absolute translate-x-[-52px] translate-y-[-50px]">
          <Link href={`tel:028 7109 1616`}>
            <div>
              <div className="position-relative w-[240px] flex flex-row items-center">
                <div className="circle-ring animate-ping bg-main w-[45px] h-[45px] rounded-full">
                  <div className="circle-ring animate-ping bg-main w-[45px] h-[45px] rounded-full">
                  </div>
                </div>
                <div className="phone-ring-img absolute top-0 z-10">
                  <div className="shake-img">
                    <Image
                      src="/images/phone-icon.png"
                      width={45}
                      height={45}
                      alt="phone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </button>
      </div>
      {/* button zalo */}
      <button className="text-main rounded-full p-1 focus:outline-none w-fit h-fit duration-300 transition-transform ease-in-out transform hover:scale-105">
        <a target="_blank" href="https://zalo.me/1244342239294379718">
          <Image
            src="/images/zalo-icon-circle.png"
            width={45}
            height={45}
            alt="Zalo"
            className="object-cover"
          />
        </a>
      </button>
      {/* button mesage */}
      <button className="text-main rounded-full p-1 focus:outline-none w-fit h-fit duration-300 transition-transform ease-in-out transform hover:scale-105">
        <a target="_blank" href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F1869294140033659%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0">
          <Image
            src="/images/messenger-icon.png"
            width={43}
            height={43}
            alt="Zalo"
          />
        </a>
      </button>
      {/* button Back to top */}
      <button className={`text-white rounded-full flex items-center justify-center w-[50px] h-[50px] duration-300 transform hover:scale-105 ${showButton ? 'duration-300 delay-150 opacity-100 transition-opacity ease-in' : 'opacity-0'}`} onClick={backToTop}>
        {
          showButton ?
            (
              <Image
                src="/images/back-to-top-icon.svg"
                width={50}
                height={50}
                alt="backToTop"
              />

            ) : null

        }
      </button>
    </div >
  );
}