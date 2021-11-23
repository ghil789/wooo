import Image from "next/image";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { signOut, useSession } from "next-auth/client";

function Post({likes, name, message, email, postImage, image, timestamp }) {
  const [session] = useSession();
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="p-3 bg-blue-200  mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
        <Image
          className="rounded-full " 
          src="/../public/im/777.png"
          width="40"
          height="40"
          layout="fixed"
        />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative aspect-ratio-2/1 h-96 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill"  likes={likes}/>
        </div>
      )}

      {/* Post Footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
      <div className="videoSidebar__button">
        
        {liked ? (
          <FavoriteIcon 
           onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon 
          
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes }</p>
        
      </div>

        

        
      </div>
    </div>
  );
}

export default Post;
