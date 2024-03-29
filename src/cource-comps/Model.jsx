import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../Context"

const Model = () => {
    const {isModelOpen , closeModel} = useGlobalContext();
    return <div className={isModelOpen ? "model-overlay show-model" : "model-overlay" } >
        <div className="model-container">
            <h3>model content</h3>
            <button className="close-model-btn" onClick={closeModel}>
                <FaTimes/>
            </button>
        </div>
    </div>
}
export default Model