function SearchBar({ search, setSearch }) {
    return (
        <div
            style={{
                marginBottom: "25px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <input
                type="text"
                placeholder="🔍 Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "450px",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                }}
            />
        </div>
    );
}

export default SearchBar;