import React from 'react'
import StoryCard from "./StoryCard";

const stories = [
  
   
    {
      name: "Services",
      src: "/lela/e.jpg",
      profile: "/../public/im/777.png",
    },
  ];
  

function System3() {
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
    

export default System3
