import { useGlobalContext } from "../Context"
import{FaBars} from "react-icons/fa"

const Home = () => {
    const {openSidebar , openModel} = useGlobalContext()
    // console.log(openSidebar);
    return <main>
        <button onClick={openSidebar} className="sidebar-toggle">
            <FaBars/>
        </button>

        <button onClick={openModel} className="btn"> show model</button>
    </main>
}
export default Home