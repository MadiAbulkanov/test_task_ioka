import { useEffect, useState } from "react";

interface UsePaginationProps {
    totalItems: number;
    itemPerPage: number;
    isCyclic: boolean;
    onPageChange: (page: number) => void;
}

export const usePagination = ({ totalItems, itemPerPage, isCyclic = false, onPageChange }: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemPerPage);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage, onPageChange]);
    
    const goToPage = (page: number) => {
        if (isCyclic) {
            if (page < 1) {
                setCurrentPage(totalPages);
            } else if (page > totalPages) {
                setCurrentPage(1);
            } else {
                setCurrentPage(page);
            }
        } else {
            if ((page >= 1) && (page <= totalPages)) {
                setCurrentPage(page);
            }
        }
    };

    return {
        currentPage,
        totalPages,
        pages,
        goToPage,
    };
};
