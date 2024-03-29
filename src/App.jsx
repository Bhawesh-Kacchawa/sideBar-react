import Home from "./cource-comps/Home";
import Model from "./cource-comps/Model";
import SideBar from "./cource-comps/SideBar";

const App = () => {

  return <main>
    <Home/>
    <Model/>
    <SideBar/>
  </main>
};
export default App;






// import SideBar from "./components/SideBar"
// import { createContext, useState } from 'react';

// export const sideBarContext = createContext()

// const App = () => {
//   const [showSidebar , setShowSidebar] = useState(false)

//   return <div className="container">
//     <sideBarContext.Provider value={showSidebar}>
//       <SideBar />
//     </sideBarContext.Provider>
//   </div>
// };
// export default App;