import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-8">
      <div className="px-20">
        <Image
          src="/assets/shared/logo.svg"
          alt="Space-Logo"
          width={60}
          height={60}
        />
      </div>
      <ul className="flex bg-gray-700 bg-opacity-30 backdrop-blur-md items-center px-20 uppercase space-x-8">
        <a href="" className="h-full border-b-2 py-8">
          <li >
            <span className="font-bold">00 </span>Home
          </li>
        </a>
        <a href="" className="h-full active:border-b-2 py-8">
          <li>
            <span className="font-bold">01 </span>Destinations
          </li>
        </a>
        <a href="" className="h-full active:border-b-2 py-8">
          <li>
            <span className="font-bold">02 </span>About
          </li>
        </a>
        <a href="" className="h-full active:border-b-2 py-8">
          <li>
            <span className="font-bold">03 </span>Contact
          </li>
        </a>
      </ul>
    </nav>
  );
}
