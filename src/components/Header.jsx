import { MdSettings, MdNotifications } from "react-icons/md";
import ProfileImage from "./ProfileImage";

const Header = () => {
    return (
        <header className="mb-12 flex flex-row items-center justify-between">
            <div>
                <h2>Good morning, Chandhu!</h2>
            </div>
            <div className="hidden md:flex flex-row items-center gap-5">
                <MdSettings size={28} className="cursor-pointer" />
                <MdNotifications size={28} className="cursor-pointer" />
                <ProfileImage size={30} src="/assets/klaus.png" />
            </div>
        </header>
    );
};

export default Header;
