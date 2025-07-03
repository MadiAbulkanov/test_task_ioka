import "./Pagination.scss";
import { usePagination } from "../../hooks/usePagination";
import type { FC } from "react";

interface PaginationProps {
    totalItems: number;
    itemPerPage: number;
    onPageChange: (page: number) => void;
    isCyclic?: boolean;
}

export const Pagination: FC<PaginationProps> = ({ totalItems, itemPerPage, onPageChange, isCyclic = false }) => {
    const { currentPage, totalPages, pages, goToPage } = usePagination({ totalItems, itemPerPage, isCyclic, onPageChange });

    const STEP = 1;
    const STEP_FAST = 2;

    const isFirst = currentPage === STEP;
    const isLast = currentPage === totalPages;

    const isPrevFastDisabled = !isCyclic && (currentPage <= STEP_FAST);
    const isNextFastDisabled = !isCyclic && (currentPage + STEP_FAST) > totalPages;
    const isPrevDisabled = !isCyclic && isFirst;
    const isNextDisabled = !isCyclic && isLast;

    return (
        <div className="pagination">
            <button onClick={() => goToPage(currentPage - STEP_FAST)} disabled={isPrevFastDisabled} className="pagination-button">«</button>
            <button onClick={() => goToPage(currentPage - STEP)} disabled={isPrevDisabled} className="pagination-button">‹</button>
            {pages.map((page) => (
                <button key={page} onClick={() => goToPage(page)} className={`pagination-page ${page === currentPage ? 'active' : ''}`}>{page}</button>
            ))}
            <button onClick={() => goToPage(currentPage + STEP)} disabled={isNextDisabled} className="pagination-button">›</button>
            <button onClick={() => goToPage(currentPage + STEP_FAST)} disabled={isNextFastDisabled} className="pagination-button">»</button>
        </div>
    )
};

export default Pagination;