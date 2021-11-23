import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center">
        <Image className="relative  p-4 mt-9  h-40 w-full md:h-40 md:w-full lg:h-56 lg:w-full  cursor-pointer overflow-x  transition duration-200 transform ease-out"
    src="/new/.jpg"
    layout="fill"
    objectFit = "cover"
    
    />
      <Image
        src="/../public/im/777.png"
        height={200}
        width={200}
        objectFit="contain"
      />
      <h1
        className="relative  p-2 hover:text-black  hover:scale-105 hover:animate-pulse bg-yellow-800 rounded-full text-white text-center w-1/6 cursor-pointer"
        onClick={signIn}
      >
        <button>
          Login to
          J-media
        </button>
      </h1>
      <br/>
     <div className="relative font-bold  bg-transparent text-center"> 
          <p>By signing in you agree to the J-media's</p>
          <p>Condition of our Privacy use & scale,</p>
          <p>please see Notice, our Cookies Notice,</p>
          <p>and our Interset-Based Ads</p>
          <br/>
          <b>Choose your default login method</b>
          
          </div>
    </div>
  );
}

export default Login;
