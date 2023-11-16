import Nav from "./components/nav/nav";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-[100vh] relative">
      <div className="absolute w-full h-full -z-10">
        <div className="relative h-full w-full">
          <Image
            src="/assets/home/background-home-desktop.jpg"
            objectFit="cover"
            alt="background"
            objectPosition="center"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
      <header className="w-full">
        <Nav />
      </header>
      <div className="flex justify-between items-end h-[70vh] px-24 ">
        <div>
          <h6 className="uppercase text-xl">So, you want to travel to</h6>
          <h1 className="font-black text-8xl uppercase py-8 px-2">Space</h1>
          <p className="text-lg">
            Let’s face it; if you want to go to space, you might as well <br />
            genuinely go to outer space and not hover kind of on the <br /> edge
            of it. Well sit back, and relax because we’ll give you <br /> a
            truly out of this world experience!
          </p>
        </div>
        <a href="#">
          <button className="bg-white rounded-full px-20 py-28 text-black uppercase">
            Explore
          </button>
        </a>
      </div>
    </section>
  );
}
