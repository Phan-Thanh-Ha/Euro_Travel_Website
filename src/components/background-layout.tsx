import Image from "next/image";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` relative `}>
      <div className="absolute inset-0 bg-gradient-to-b from-white from-10% via-transparent via-60% to-white  -z-20"></div>
      <div className="absolute -z-30 inset-0 ">
        <Image
          src={"/images/bg2.png"}
          fill
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>
      {children}
    </div>
  );
}
