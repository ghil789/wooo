function HeaderIcon({ active, Icon }) {
    return (
      <div className="flex space-x-2 p-4 items-center md:px-10 sm:h-14 cursor-pointer md:hover:bg-gray-100 rounded-xl group active:border-b-2 active:border-blue-500">
        <Icon
          className={`${
            active ? "text-blue-500" : "text-gray-500"
          }  text-center items-center  h-7 w-7 group-hover:text-white`}
        />
      </div>
    );
  }
  
  export default HeaderIcon;
  