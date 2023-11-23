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
                method: 'GET',
                url: 'https://target1.p.rapidapi.com/products/v2/list',
                params: {
                    store_id: '911',
                    category: `${category}`,
                    count: '20',
                    offset: '6',
                    default_purchasability_filter: 'true',
                    sort_by: 'relevance'
                },
                headers: {
                    'X-RapidAPI-Key': 'ceaa6afcaamsh99619baf83e6f76p14868cjsn80d47a7979f4',
                    'X-RapidAPI-Host': 'target1.p.rapidapi.com'
                }
            });
            const output = response.data.data.search.products;
            dispatch(fetchFulfilled(output));
        } catch (error) {
            console.error('Error fetching product data:', error.message);
            dispatch(fetchFailure(error.message || 'Unknown error'));
        }
    };

    // Category API call
    const categoryApiCall = async () => {
        dispatch(fetchCategoryStart());
        try {
            const response = await axios.request(categoryApi);
            dispatch(fetchCategoryFulfilled(response.data.metadata.children));
        } catch (error) {
            console.error('Error fetching category data:', error.message);
            dispatch(fetchCategoryFailure(error.message || 'Unknown error'));
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [category]);

    useEffect(() => {
        categoryApiCall();
    }, []);

    // No need to return anything from the component
};

export default HomePageApi;
