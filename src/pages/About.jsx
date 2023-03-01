import React from "react";

function About() {
  return (
    <div className="flex  items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />

      <div className="  p-2 text-center w-full  text-white z-[2] absolute translate-x-[-50%]  translate-y-[-50%] left-[50%] top-[50%]">

<h2 className=" text-xl font-bold"> Hi, my name is Ahmed Mehana</h2>
<p className="py-2 text-xl  ">
  22 years old, I study in agriculture and learn coding by myself. I
  made this site to help anyone who cannot find good resources for
  development by themselves in most fields. I hope you find what you are
  looking for here. I have collected many courses from the site Popular
  Facebook groups and even YouTube channels, contact me if you want to
  add any resources, so welcome to my website.
  
</p>

      </div>
    </div>
  );
}

export default About;
