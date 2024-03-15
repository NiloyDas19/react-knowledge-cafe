
const Header = () => {
    return (
        <div className="container mt-4 mx-auto px-4">
            <div className="flex justify-between items-center flex-col md:flex-row gap-5">
                <h1 className="text-2xl md:text-4xl font-bold">Knowledge Cafe</h1>
                <div><img src="src\assets\profile.png" alt=""/></div>
            </div>
            <div className="mt-4">
                <hr />
            </div>
        </div>
    );
};

export default Header;