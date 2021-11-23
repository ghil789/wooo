import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
  } from "@heroicons/react/outline";
  import {

  } from "@heroicons/react/solid";
  import  LocalHospitalIcon  from '@mui/icons-material/LocalHospital'
  import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'; 
  import PeopleIcon from '@mui/icons-material/People'
  import ChatIcon from '@mui/icons-material/Chat';
  import StorefrontIcon from '@mui/icons-material/Storefront';
  import  VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
  import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
  import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
  import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
  import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
  import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import { useSession } from "next-auth/client";
  import React from "react";
  import SidebarRow from "./SidebarRow";
  import Link  from 'next/link';

  function Sidebar() {
    const [session, loading] = useSession();
  
    return (
      <div className="p-2  mt-5 max-w-[300px] xl:min-w-[200px]">
       <Link href="/covid"><a><SidebarRow Icon = {LocalHospitalIcon} title="COVID-19 Information Center"/></a></Link>
        <Link href = "https://echat-71faf.web.app/JIT"><a><SidebarRow Icon={AccountBalanceIcon} title="JU" /></a></Link>
        <SidebarRow Icon={ImportContactsTwoToneIcon} title="Department" />
        <SidebarRow Icon={CollectionsBookmarkIcon} title="Courses" />
        <SidebarRow Icon={EmojiEventsIcon} title="Memories" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
       
        
        
        
      </div>
    );
  }
  
  export default Sidebar;
  