
const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) => {
    const generatePageNumbers = () => {
        const pages = [];
        if (totalPages > 0) pages.push(1);
        if (currentPage > 3) pages.push('...');
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        for (let i = startPage; i <= endPage; i++) pages.push(i);
        if (currentPage < totalPages - 2) pages.push('...');
        if (totalPages > 1) pages.push(totalPages);
        return pages;
    };
    const pageNumbers = generatePageNumbers();
    return (
        <nav className="flex items-center gap-2">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 w-9 h-9 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            {pageNumbers.map((page, index) => typeof page === 'number' ? (
                <button key={index} onClick={() => onPageChange(page)} className={`p-2 w-9 h-9 flex items-center justify-center rounded-md transition-colors ${currentPage === page ? 'text-white bg-orange-500 shadow-md' : 'text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
                    {page}
                </button>
            ) : (<span key={index} className="p-2 text-gray-400">...</span>))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 w-9 h-9 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </nav>
    );
};

export default Pagination;