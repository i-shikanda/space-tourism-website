"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import Image from "next/image";
import Nav from "../components/nav/nav";

export default function Home() {
  const crew = [
    {
      name: "Douglas Hurley",
      images: {
        png: "/assets/crew/image-douglas-hurley.png",
        webp: "/assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "/assets/crew/image-mark-shuttleworth.png",
        webp: "/assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "/assets/crew/image-victor-glover.png",
        webp: "/assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64 and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "/assets/crew/image-anousheh-ansari.png",
        webp: "/assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const [activeCrewIndex, setActiveCrewIndex] = useState(0);

  const onChange = (index: number) => {
    console.log(`Carousel item changed to index ${index}`);
    setActiveCrewIndex(index);
  };

  const onClickItem = (index: number) => {
    console.log(`Clicked on item at index ${index}`);
    setActiveCrewIndex(index);
    // You can add custom logic for item click if needed
  };

  const onClickThumb = (index: number) => {
    console.log(`Clicked on thumbnail at index ${index}`);
    // Add custom logic for thumbnail click if needed
  };

  return (
    <section className="h-[100vh]">
      <header>
        <Nav />
      </header>
      <div>
        <h1 className="uppercase text-[28px] px-20">
          <span>02 </span>
          Meet your crew
        </h1>
      </div>
      <div className="px-20 items-end h-[80%] ">
        <Carousel
          showArrows={false}
          showThumbs={false}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          showStatus={false}
        >
          {crew.map((member, index) => (
            <div className=" flex justify-between">
              <div>
                <p>{crew[activeCrewIndex].role}</p>

                <h2>{crew[activeCrewIndex].name}</h2>
                <p>{crew[activeCrewIndex].bio}</p>
              </div>
              <div key={index} >
                <div>
                <Image
                  src={member.images.webp}
                  alt={member.name}
                  width={1000}
                  height={1000}
                />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
