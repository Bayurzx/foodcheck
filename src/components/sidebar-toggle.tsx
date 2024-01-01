// src/components/SidebarToggle.tsx

import { MouseEventHandler } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import styles from '@/components/sidebar.module.css'; // Import your CSS module


interface SidebarToggleProps {
    isSidebarOpen: boolean;
    toggleSidebar: MouseEventHandler<HTMLButtonElement>; // Define type for toggleSidebar
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isSidebarOpen, toggleSidebar }) => {

    return (
        <div className={styles["fixed-icon"]}>
            <button onClick={toggleSidebar} className="focus:outline-none lg:hidden">
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle icons */}
            </button>
        </div>
    );
};

export default SidebarToggle;
