import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
    const [shrunk, setShrunk] = useState(false);

    return (
        <main
            className="min-h-screen grid dashboard-layout"
            style={{
                gridTemplateColumns: `${shrunk ? "158px" : "320px"} 1fr`,
                transition: "all 0.5s",
                maxWidth: "100vw",
            }}
        >
            <Sidebar shrunk={shrunk} setShrunk={setShrunk} />
            <section className="p-12 w-full overflow-x-hidden">
                <Header />
                {children}
            </section>
        </main>
    );
};

export default DashboardLayout;
