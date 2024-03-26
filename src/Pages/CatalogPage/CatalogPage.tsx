
import React, {useEffect, useMemo, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "src/API/store/hook";
import {ProductSelector} from "src/API/store/slices/product/product.slice";
import {getProducts} from "src/API/store/slices/asyncAction/getProducts";
import ProductItems from "src/StructureComponents/ProductItems";
import Pagination from "src/StructureComponents/Pagination";
import {getCategories} from "src/API/store/slices/asyncAction/getCategory";
import {CategorySelector} from "src/API/store/slices/category/category.slice";
import {DropdownOption} from "src/Shared/Dropdown";
import {addProductToCart} from "src/Utils/scripts/cartAction";
import SnackbarCart from "src/StructureComponents/SnackbarCart";
import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";
import {SelectChangeEvent} from "@mui/material";
import SortMenu from "src/Components/SortMenu";

const CatalogPage: React.FC = () => {
    const {products, statuses} = useAppSelector(ProductSelector);
    const {categories} = useAppSelector(CategorySelector);

    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("search") || "");
    const [category, setCategory] = useState<string>(searchParams.get("category") || "");
    const [sortBy, setSortBy] = useState<string>(searchParams.get("sortBy") || "title");
    const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.get("page") || "1", 10));
    const [productsPerPage] = useState<number>(2);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [clickCount, setClickCount] = React.useState(0);

    const categoryOptions: DropdownOption[] = categories.map(category => ({
        value: category,
        label: category
    }));

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);

    const params = useMemo(() => {
        return {
            search: searchQuery,
            category: category,
            sortBy: sortBy,
            page: currentPage.toString(),
        };
    }, [searchQuery, category, sortBy, currentPage]);

    useEffect(() => {
        setSearchParams(params);
        // navigate(`?${searchParams.toString()}`);
    }, [params, setSearchParams]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, category, sortBy]);

    useEffect(() => {
        navigate({
            pathname: location.pathname,
            search: searchParams.toString()
        })
    },[searchParams])


    const filteredProducts = useMemo(() => {
        return products
            .filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(product =>
                category ? product.category === category : true
            )
            .sort((a, b) => {
                if (sortBy === "price-asc") {
                    return a.price - b.price;
                } else if (sortBy === "price-desc") {
                    return b.price - a.price;
                } else if (sortBy === "name-asc") {
                    return a.title.localeCompare(b.title);
                } else if (sortBy === "name-desc") {
                    return b.title.localeCompare(a.title);
                } else {
                    return 0;
                }
            });
    }, [products, searchQuery, category, sortBy]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProductsOnPage = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    const handleChangeSortBy = (event: SelectChangeEvent) => {
        setSortBy(event.target.value);
    };
    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <SortMenu
                searchQuery={searchQuery}
                category={category}
                sortBy={sortBy}
                categoryOptions={categoryOptions}
                onChangeSearchQuery={handleChangeSearchQuery}
                onChangeCategory={handleChangeCategory}
                onChangeSortBy={handleChangeSortBy}
            />
            {statuses.getStatus === "Loading" && <p>Loading...</p>}
            {statuses.getStatus === "Failed" && <p>Failed to load products.</p>}
            {statuses.getStatus === "Idle" && (
                <div>
                    <hr/>
                    {currentProductsOnPage.map((product) => (
                        <ProductItems key={product.id} product={product} onAddToCartClick={() => {
                            addProductToCart(dispatch, product, setIsSnackbarOpen, setClickCount);
                        }}/>
                    ))}
                    <SnackbarCart isOpen={isSnackbarOpen} clickCount={clickCount} message={"Product added to cart"}
                                  onClose={handleSnackbarClose(setIsSnackbarOpen, setClickCount)}/>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage}/>
                </div>
            )}
        </div>
    );
};

export default CatalogPage;