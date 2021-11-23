import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import InfoIcon from '@mui/icons-material/Info';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import {SearchIcon}from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import Link  from 'next/link';
import SidebarRow from "./SidebarRow";

function Header() {
  const [session] = useSession();

  return (
    <header className="sticky top-0 z-50 bg-transparent  flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="/../public/im/777.png"
          width="60"
          height="60"
          layout="fixed"
        />
        <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon  className="h-6 text-gray-600" />
          <input
            className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search J-media"/>
        </div>
      </div>
      <div className="flex justify-center flex-grow  cursor-pointer">
        <div className="flex space-x-6 md:space-x-7 cursor-pointer lg:inline-flex  ">
          <Link href="/"><a>< HeaderIcon active Icon = {HomeIcon} className="icon" /></a></Link>
          <Link href="/about"><a><HeaderIcon active Icon = {InfoIcon} className="icon" /></a></Link>
         <Link href="/services"><a><HeaderIcon active Icon = {CircleNotificationsIcon} className="icon" /></a></Link>
          <Link href="/contact"><a><HeaderIcon active Icon ={ ContactMailIcon} className="icon" /></a></Link>
           
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap italic font-semibold pr-3">
          {session.user.name}
        </p>
      </div>
    </header>
  );
}

export default Header;
