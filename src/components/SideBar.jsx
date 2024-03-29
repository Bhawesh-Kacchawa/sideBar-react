import logo from "../logo.svg"
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { links, social } from "../data"
import { useContext, useEffect, useRef, useState } from "react";
import { sideBarContext } from "../App";

const SideBar = () => {
    const [data, setData] = useState(links)
    const value = useContext(sideBarContext)
    // console.log(value);
    const showbar = useRef(null)
    const showbtn = useRef(null)


    const handleShowingSidebar = ()=>{
        showbar.current.style.visibility = "visible"
        showbtn.current.style.visibility = "hidden"
    }

    const handleHidingSidebar = ()=>{
        showbar.current.style.visibility = "hidden" 
        showbtn.current.style.visibility = "visible"
    }

    useEffect(() => {
        showbar.current.style.visibility = "hidden"
    }, [])


    return <>
        <div className="SideBar-container" ref={showbar}>
            <div className="header">
                <img src={logo} alt="img" />
                <GrFormClose className="close" onClick={handleHidingSidebar} />
            </div >

            <div className="content">

                <ul className="links">
                    {data.map((item) => {
                        const { id, url, text, icon } = item
                        return <li key={id} className="single-link">
                            <span>{icon}</span>
                            <a href={url}>{text}</a>
                        </li>
                    })}
                </ul>

                <ul className="social-icons">
                    {social.map((logo) => {
                        const { id, url, icon } = logo
                        return <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    })}
                </ul>

            </div>

        </div>
        <button type="button" className="showBtn" ref={showbtn} onClick={handleShowingSidebar}><AiOutlineMenu /></button>
    </>
}

export default SideBar