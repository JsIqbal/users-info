import { Routes, Route, BrowserRouter } from "react-router-dom";
import Counter from "../view/counter";
import NavBar from "../view/navbar";
import Spin from "../view/spinner";

import UserList from "./user-list.component";

function App () {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <div className="container">
                    <br/>
                        <Routes>
                            <Route path="/" element={<UserList />} />
                            <Route path="/counter" element={<Counter />} />
                            <Route path="/spinner" element={<Spin />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
 
export default App;