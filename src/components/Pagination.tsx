// components/Pagination.tsx
type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center mt-6 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage} / {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  