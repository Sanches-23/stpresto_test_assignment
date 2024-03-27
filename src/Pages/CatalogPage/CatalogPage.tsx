import React, {memo, useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
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
import {Box, Grid, useMediaQuery} from "@mui/material";
import SortMenu from "src/Components/SortMenu";
import {useCatalogPageStyles} from "src/Pages/CatalogPage/CatalogPage.style";
import {theme} from "src/Utils/theme/theme";

const CatalogPage: React.FC = () => {
    const {products, statuses} = useAppSelector(ProductSelector);
    const {categories} = useAppSelector(CategorySelector);
    const classes = useCatalogPageStyles();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("search") || "");
    const [category, setCategory] = useState<string>(searchParams.get("category") || "");
    const [sortBy, setSortBy] = useState<string>(searchParams.get("sortBy") || "title");
    const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.get("page") || "1", 10));
    const [productsPerPage] = useState<number>(6);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [clickCount, setClickCount] = React.useState(0);

    const categoryOptions: DropdownOption[] = categories.map(category => ({
        value: category,
        label: category
    }));

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        const query = searchParams.get("search")
        const category = searchParams.get("category")
        const sortBy = searchParams.get("sortBy")
        const page = searchParams.get("page")

        if (query) setSearchQuery(query); else setSearchQuery("")
        if (category) setCategory(category); else setCategory("")
        if (sortBy) setSortBy(sortBy); else setSortBy("title")
        if (page) setCurrentPage(+page); else setCurrentPage(1)
    }, [searchParams]);

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

    useEffect(() => {
        setCurrentPage(1);
        searchParams.set("page", "1");
        setSearchParams(searchParams);
    }, [searchQuery, category, sortBy]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProductsOnPage = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);

        searchParams.set("page", page.toString())
        setSearchParams(searchParams)
    };

    const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);

        searchParams.set("search", event.target.value)
        setSearchParams(searchParams)

    };
    const handleChangeSortBy = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
        setSortBy(event.target.value);

        searchParams.set("sortBy", event.target.value)
        setSearchParams(searchParams)
    };

    const handleChangeCategory = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
        setCategory(event.target.value);

        searchParams.set("category", event.target.value)
        setSearchParams(searchParams)
    };

    return (
        <Box className={isSmScreen ? classes.column : classes.root} >
            <Box className={classes.sortMenu}>
                <SortMenu
                    searchQuery={searchQuery}
                    category={category}
                    sortBy={sortBy}
                    categoryOptions={categoryOptions}
                    onChangeSearchQuery={handleChangeSearchQuery}
                    onChangeCategory={handleChangeCategory}
                    onChangeSortBy={handleChangeSortBy}
                />
            </Box>
            <Box className={classes.productGridContainer}>
                {statuses.getStatus === "Loading" && <p>Loading...</p>}
                {statuses.getStatus === "Failed" && <p>Failed to load products.</p>}
                {statuses.getStatus === "Idle" && (
                    <Grid container spacing={3}>
                        {currentProductsOnPage.map((product) => (
                            <ProductItems key={product.id} product={product} onAddToCartClick={() => {
                                addProductToCart(dispatch, product, setIsSnackbarOpen, setClickCount);
                            }}/>
                        ))}
                    </Grid>
                )}
                <Box className={classes.pagination}>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage}/>
                </Box>
                <SnackbarCart isOpen={isSnackbarOpen} clickCount={clickCount} message={"Product added to cart"}
                              onClose={handleSnackbarClose(setIsSnackbarOpen, setClickCount)}/>
            </Box>
        </Box>
    );
};

export default memo(CatalogPage);