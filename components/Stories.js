import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Chemical Engineering",
    src: "/../public/im/a.jpg",
    profile: "/../public/im/heart.png",
  },
  {
    name: "Electrical Engineering",
    src: "/../public/im/b.jpg",
    profile: "/../public/im/heart.png",
  },
  {
    name: "Biomedical Engineering",
    src: "/../public/im/c.jpg",
    profile: "/../public/im/heart.png",
  },
  {
    name: "Civil & Arc Engineering",
    src: "/../public/im/d.jpg",
    profile: "/../public/im/heart.png",
  },
  {
    name: "Computer science",
    src: "/../public/im/e.jpg",
    profile: "/../public/im/heart.png",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
          
        <StoryCard 
        key = {story.src}
        name={story.name}
         src={story.src} 
         profile={story.profile}
          />
      ))}
    </div>
  );
}

export default Stories;
