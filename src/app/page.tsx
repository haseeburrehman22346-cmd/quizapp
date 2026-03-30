"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home(){
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 gap-8 bg-white">
      <div className="flex flex-col items-center justify-center p-2 gap-6">
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            src="/images/zoombox-logo.webp"
            alt="Quiz Logo"
            width={500}
            height={300}
            priority/>
          <h1 className="text-4xl font-bold">Welcome to Zoombox Quiz</h1>
        </div>
        <Link href="/quiz">
          <button
            className="text-xl font-normal px-4 py-2 bg-[#dcdedc] border border-black rounded-md hover:bg-[#9f9f9f] transition-all cursor-pointer w-[200px] text-center">
            Quiz Start
          </button>
        </Link>
      </div>
    </main>
  );
}
