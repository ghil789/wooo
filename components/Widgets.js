import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    { src: "/../public/im/like.png", name: "Hydrolics Engineering" },
    { src: "/../public/im/like.png", name: "Water Engineering" },
    { src: "/../public/im/like.png", name: "SoftWare Engineering " },
    { src: "/../public/im/like.png", name: "Mechanical Engineering" },
    { src: "/../public/im/like.png", name: "IT & IS" },
    { src: "/../public/im/like.png", name: "Material Science"},
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
    <div className="flex justify-between items-center text-gray-500 mb-5">
      <h2 className="text-xl">Other Departments</h2>
    
    </div>

    {contacts.map((contact) => (
      <Contact key={contact.src} src={contact.src} name={contact.name} />
    ))}
  </div>
);
}

export default Widgets;
