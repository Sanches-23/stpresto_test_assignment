import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

type PaginationProps = {
    pageCount: number;
    handlePageClick: (event: React.ChangeEvent<unknown>, page: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({pageCount, handlePageClick, currentPage}) => {
    return (
            <MuiPagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageClick}
                color="primary"
                shape="rounded"
                size="large"
                siblingCount={1}
                boundaryCount={1}
                defaultPage={1}
                showFirstButton
                showLastButton
            />
    );
};

export default Pagination;