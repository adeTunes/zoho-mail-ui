import { useState } from "react";
import "./App.css";
import CenterPage from "./components/CenterPage";
import Header from "./components/Header";
// import MainPage from "./components/MainPage";
import SideLeft from "./components/SideLeft";
// import SideRight from "./components/SideRight";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    const [tab, setTab] = useState(false);
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [showTab, setShowTab] = useState(1);

    return (
        <Router>
            <div className="cols-container">
                <SideLeft
                    setTab1={setTab1}
                    tab2={tab2}
                    setTab2={setTab2}
                    tab={tab}
                    setTab={setTab}
                    showTab={showTab}
                    setShowTab={setShowTab}
                />
                <div className="col-center">
                    <CenterPage
                        tab1={tab1}
                        tab={tab}
                        setTab={setTab}
                        tab2={tab2}
                        setTab2={setTab2}
                        showTab={showTab}
                        setShowTab={setShowTab}
                    />
                </div>
            </div>
            <Header />
        </Router>
    );
}

export default App;
