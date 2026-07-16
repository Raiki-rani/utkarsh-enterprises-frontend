import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
    return (
        <div
            style={{
                display: "flex",
                background: "linear-gradient(135deg,#eef2ff,#f8fafc,#ffffff)",
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