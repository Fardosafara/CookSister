import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
};

const DesktopSidebar = () => {
    return (
        <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
            <div className='flex flex-col gap-20 sticky top-10 left-0'>
                <div className='w-full'>
                    <img src="/logo.png" alt='logo' className='hidden md:block' />
                </div>
                <ul className='flex flex-col items-center md:items-start gap-8'>
                    <Link to={"/"} className='flex gap-1'>
                        <Home size={"24"} />
                        <span className='font-bold hidden md:block'>Home</span>
                    </Link>
                    <Link to={"/favorites"} className='flex gap-1'>
                        <Heart size={"24"} />
                        <span className='font-bold hidden md:block'>Favorites</span>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

const MobileSidebar = () => {
    return (
        <div className='flex flex-col items-center gap-2 fixed w-full top-0 left-0 z-15 p-0 sm:hidden'>
            <div className='w-full flex justify-center'>
                <img src="/logo.png" alt='logo' className='h-10' />
            </div>
            <div className='flex justify-center gap-10 w-full mt-auto p-2 border-t fixed bottom-0 left-0'>
                <Link to={"/"}>
                    <Home size={"24"} className='cursor-pointer' />
                </Link>
                <Link to={"/favorites"}>
                    <Heart size={"24"} className='cursor-pointer' />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
