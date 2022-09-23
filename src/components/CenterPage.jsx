import CenterPageHeader from "./CenterPageHeader";
import CenterPageDetails from "./CenterPageDetails";
import CenterPageSidebar from "./CenterPageSidebar";
import { useNavigate } from "react-router-dom";

function CenterPage({ tab1, tab, setTab, tab2, setTab2, showTab, setShowTab }) {
    let navigate = useNavigate();
    const handleCloseTab = () => {
        setTab(false);
        setShowTab(1);
        navigate("/");
    };

    return (
        <>
            <CenterPageHeader
                tab1={tab1}
                tab={tab}
                tab2={tab2}
                setTab={setTab}
                setShowTab={setShowTab}
                showTab={showTab}
                handleCloseTab={handleCloseTab}
            />
            <div
                style={{ zIndex: "99999" }}
                className="bg-white grid grid-cols-[1fr_auto] overflow-auto">
                <CenterPageDetails
                    tab={tab}
                    setTab={setTab}
                    tab2={tab2}
                    setTab2={setTab2}
                    showTab={showTab}
                />
                <CenterPageSidebar />
            </div>
        </>
    );
}

export default CenterPage;
