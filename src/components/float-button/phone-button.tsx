'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import './phone-button.css'

export default function FloatPhoneButton() {
  return (
    <div className="fixed bottom-16 left-24 flex flex-col gap-4 w-[280px] items-end">
      <Link href={`tel:028 7109 1616`}>
        <div>
          <div className="position-relative w-[300px] flex flex-row items-center">
            <div className="circle-ring animate-ping bg-main w-[70px] h-[70px] rounded-full">
              <div className="circle-ring animate-ping bg-main w-[70px] h-[70px] rounded-full">
              </div>
            </div>
            <div className="phone-ring-img absolute top-0 z-10">
              <div className="shake-img">
                <Image
                  src="/images/phone-icon.png"
                  width={70}
                  height={70}
                  alt="phone"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}