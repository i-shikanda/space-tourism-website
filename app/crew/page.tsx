"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

export default function Home() {
  const crew = [
    {
      name: "Douglas Hurley",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: "./assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "./assets/crew/image-mark-shuttleworth.png",
        webp: "./assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "./assets/crew/image-victor-glover.png",
        webp: "./assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64 and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "./assets/crew/image-anousheh-ansari.png",
        webp: "./assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
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
    <>
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        {crew.map((member, index) => (
          <div key={index}>
            <img
              src={member.images.webp}
              alt={member.name}
            />
            <p className="legend">{member.name}</p>
          </div>
        ))}
      </Carousel>

      <div>
        <h2>{crew[activeCrewIndex].name}</h2>
        <p>{crew[activeCrewIndex].role}</p>
        <p>{crew[activeCrewIndex].bio}</p>
      </div>
    </>
  );
}