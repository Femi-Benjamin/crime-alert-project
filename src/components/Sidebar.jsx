import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { LeftChevronBtn } from "./svgs";
// import { useNavigate } from "react-router-dom";

const Sidebar = ({ shrunk, setShrunk }) => {
    const [active, setActive] = useState(0);

    // const navigate = useNavigate();

    const sideList = [
        {
            label: "Oveview",
            icon: <BsFillGridFill size={24} />,
            route: "oveview",
        },
        {
            label: "Recent reports",
            icon: <FaClipboardList size={24} />,
            route: "recent-reports",
        },
        {
            label: "Watchlist",
            icon: <AiFillEye size={24} />,
            route: "watchlist",
        },
        {
            label: "Settings",
            icon: <MdSettings size={24} />,
            route: "settings",
        },
    ];

    return (
        <aside className="h-full py-16 bg-[#f5f5f5] flex flex-col">
            <div
                className="w-max mb-3 ml-auto cursor-pointer shrinker"
                onClick={() => {
                    setShrunk(!shrunk);
                }}
            >
                <LeftChevronBtn />
            </div>
            <ul>
                {sideList.map((item, ind) => (
                    <li
                        key={ind}
                        className="flex flex-row items-center gap-16 mb-14 text-lg cursor-pointer"
                        onClick={() => {
                            setActive(ind);
                        }}
                    >
                        <div
                            className="w-2 h-8 bg-black rounded-tr-lg rounded-br-lg"
                            style={{
                                opacity: active === ind ? "1" : "0",
                            }}
                        ></div>
                        <div
                            className="flex flex-row items-center gap-4 link-item"
                            style={{
                                maxWidth: shrunk ? "24px" : "280px",
                                overflow: "hidden",
                                transition: "maxWidth 1s",
                            }}
                        >
                            <span>{item.icon}</span>
                            <span
                                className="w-max"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                {item.label}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-auto flex flex-row items-center justify-center gap-4 cursor-pointer">
                <BiLinkExternal size={24} /> Signout
            </div>
        </aside>
    );
};

export default Sidebar;
