const TabButton = ({ isActive, onClick, children }: { isActive: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`py- my-10 w-1/2 px-4 text-lg font-medium relative transition-colors duration-300 ${
            isActive ? 'text-orange-500' : 'text-gray-500 hover:text-gray-800'
        }`}
    >
        {children}
        {/* The orange underline that appears only on the active tab */}
        {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
        )}
    </button>
);

export default TabButton