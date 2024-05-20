import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginByFacebook() {
  return (
    <div className="roundedfull mt-1">
      <button
        className="pl-16 hover:bg-slate-50 w-full border py-2 gap-4 rounded-md"
        onClick={() =>
          signIn("facebook", { callbackUrl: "/dashboard" })
        }
      >
        <div className="flex items-center gap-10">
          <Image
            width={35}
            height={35}
            src="/images/facebook-icon.png"
            alt="Facebook"
            className="rounded-full"
            quality={100}
          />
          <p>Đăng nhập với Facebook</p>
        </div>
      </button>
    </div>
  )
}