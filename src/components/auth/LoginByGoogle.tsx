import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginByGoogle() {
  return (
    <div className="rounded-full">
      <button
        className="pl-10 md:pl-16 hover:bg-slate-50 w-full border py-2 gap-4 rounded-md"
        onClick={() =>
          signIn("google", { callbackUrl: "/dashboard" })
        }
      >
        <div className="flex items-center gap-4 md:gap-10">
          <Image
            width={35}
            height={35}
            src="/images/google-icon.png"
            alt="Google"
            className="rounded-full"
            quality={100}
          />
          <p>Đăng nhập với Google</p>
        </div>
      </button>
    </div>
  )
}