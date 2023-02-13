import Link from "next/link";
import React from "react";

function Main() {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-2 text-center text-white z-[2]  absolute translate-x-[-50%]  translate-y-[-50%] left-[50%] top-[50%] '>
      <h2 className="text-4xl font-bold">Remember:</h2>
      <p className="py-5 text-xl">
        If you win, you live. If you lose, you die. If you don’t fight, you
        can’t win
        <br/> 
        <span className="uppercase"> Sum up : tatakae tatakae</span>
      
      </p>
        <Link className="px-8 py-2 border uppercase font-bold" href="/#Courses">Fight</Link>
      </div>
    </div>
  );
}

export default Main;