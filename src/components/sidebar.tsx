'use client';

import { ReactNode, useState } from 'react';
import Image from "next/image";
import {
    FaHome,
    FaRegListAlt,
    FaUserAlt,
    FaEllipsisH,
} from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import styles from '@/components/sidebar.module.css'; // Import your CSS module
import SidebarToggle from './sidebar-toggle';


interface NavItemProps {
    icon: ReactNode; // ReactNode is a type that represents a React component or JSX element
    label: string;
    link: string;
}

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
    };



    const session = {
        user: {
            image: "https://www.clker.com/cliparts/h/z/Z/5/f/x/100px-coffee-cup-hi.png",
            name: "AB"
        }
    }

    const NavItem: React.FC<NavItemProps> = ({ icon, label, link }) => {

        return (
            <a href={link} target={label === "Grant Access" || label === "Profile" ? "_blank" : "_self"}>
                <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-6 flex items-center space-x-2">
                    {icon}

                    <span>{label}</span>
                </div>
            </a>
        );
    }

    return (
        <>
        <SidebarToggle isSidebarOpen = {isSidebarOpen} toggleSidebar = {toggleSidebar} />
            <div className={`${styles.sidebar}  ${isSidebarOpen ? styles.show : ""} flex-none bg-gray-800 text-white p-4 overflow-y-auto`}>
            <div className="flex flex-col items-center">
                <VscGithubAlt className="text-gray-200 text-4xl mb-4" />

                {session?.user?.image && <Image
                    width={120}
                    height={90}
                    className={`rounded-full sidebarImg ${styles.sidebarImg}`}
                    src={session?.user?.image}
                    alt="User profile"
                />}


                {/* {session?.user?.image && <img
                    className={`rounded-full sidebarImg ${styles.sidebarImg}`}
                    src={session?.user?.image}
                    alt="User profile"
                />} */}


                <nav className="mb-4">
                    <hr />
                    <h2
                        style={{
                            padding: "12px",
                            paddingTop: "50px",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}

                    >
                        🤖 AutoDocs AI
                        <br />
                    </h2>

                    <hr />
                    <h2
                        style={{
                            padding: "12px",
                            paddingTop: "50px",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}

                    >
                        Hello {session?.user?.name} 👋🏾
                    </h2>
                    <br />
                    <hr />
                    <br />
                    <NavItem link={"#"} icon={<FaHome className="text-xl" />} label="Home" />

                    <NavItem link={"#"} icon={<FaRegListAlt className="text-xl" />} label="Grant Access" />
                    <NavItem link={"#"} icon={<FaUserAlt className="text-xl" />} label="Profile" />
                    <NavItem link={"#"} icon={<FaEllipsisH className="text-xl" />} label="More" />
                </nav>
                <button onClick={() => ""} className="w-full bg-red-500 text-white rounded-full py-3 font-bold">
                    Sign Out
                </button>

            </div>
        </div>
        </>

    )
}

export default Sidebar;