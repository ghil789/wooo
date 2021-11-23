import Image from "next/image";


function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-40 w-full md:h-40 md:w-full lg:h-56 lg:w-full cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75  rounded-2xl lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
