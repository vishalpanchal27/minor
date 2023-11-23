import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchFailure,
    fetchStart,
    fetchFulfilled,
    fetchCategoryStart,
    fetchCategoryFailure,
    fetchCategoryFulfilled
} from '../redux/slices/HomeApiSlice';
import { categoryApi } from './ApiOption';

const HomePageApi = () => {
    const category = useSelector((state) => state.productData.category);
    const dispatch = useDispatch();

    // Home page data API call
    const fetchProductData = async () => {
        dispatch(fetchStart());
        try {
            const response = await axios.request({
                // Your options for the product data API
            });
            const output = response.data.data.search.products;
            dispatch(fetchFulfilled(output));
        } catch (error) {
            console.error('Error fetching product data:', error);
            dispatch(fetchFailure(error));
        }
    };

    // Category API call
    const categoryApiCall = async () => {
        dispatch(fetchCategoryStart());
        try {
            const response = await axios.request(categoryApi);
            dispatch(fetchCategoryFulfilled(response.data.metadata.children));
        } catch (error) {
            console.error('Error fetching category data:', error);
            dispatch(fetchCategoryFailure(error));
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [category]);

    useEffect(() => {
        categoryApiCall();
    }, []);

    return null; // Adjust this based on your component structure
};

export default HomePageApi;
