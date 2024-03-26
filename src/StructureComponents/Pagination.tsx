import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

type PaginationProps = {
    pageCount: number;
    // handlePageClick: (event: { selected: number }) => void;
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
                // className="custom-pagination"
            />
    );
};

export default Pagination;

// {/*<ReactPaginate*/}
// {/*    previousLabel={'Previous'}*/}
// {/*    nextLabel={'Next'}*/}
// {/*    pageCount={pageCount}*/}
// {/*    onPageChange={handlePageClick}*/}
// {/*    forcePage={currentPage}*/}
// {/*    // containerClassName={'paginationBttns'}*/}
// {/*    // previousLinkClassName={'previousBttn'}*/}
// {/*    // nextLinkClassName={'nextBttn'}*/}
// {/*    // disabledClassName={'paginationDisabled'}*/}
// {/*    // activeClassName={'paginationActive'}*/}
// {/*/>*/}