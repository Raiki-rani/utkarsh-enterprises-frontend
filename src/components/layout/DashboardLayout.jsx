import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
    return (
        <div
            style={{
                display: "flex",
                background: "#f1f5f9",
                minHeight: "100vh",
            }}
        >
            <Sidebar />

            <div
                style={{
                    marginLeft: "250px",
                    width: "100%",
                    padding: "30px",
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;