import logo from "../logo.svg"
import {links , social} from "../data"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../Context"

const SideBar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
            <img src={logo} alt="img" className="logo" />
            <button className="close-btn" onClick={closeSidebar}>
                <FaTimes/>
            </button>
        </div>

        <ul className="links">
            {links.map((link)=>{
                const {url,icon,id,text} = link
                return <li key={id}>
                    <a href={link}>
                        {icon}
                        {text}
                    </a>
                </li>
            })}
        </ul>


        <ul className="social-links">
            {social.map((link)=>{
                const {url,icon,id} = link
                return <li key={id}>
                    <a href={link}>
                        {icon}
                    </a>
                </li>
            })}
        </ul>
    </aside>
}
export default SideBar