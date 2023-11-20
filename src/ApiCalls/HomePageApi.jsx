import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFailure, fetchStart, fetchFulfilled } from '../redux/slices/HomeApiSlice';
import { fetchCategoryStart, fetchCategoryFailure, fetchCategoryFulfilled } from '../redux/slices/HomeApiSlice'
import { categoryApi } from './ApiOption'

const HomePageApi = () => {
    const category = useSelector((state) => state.productData.category)
    const dispatch = useDispatch()

    //home page data api call

    const fetchProductData = async () => {
        const options = {
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
                'X-RapidAPI-Key': 'fc3539ca20msh36a16b5c3e8e1b3p1640b7jsn60b346470444',
                'X-RapidAPI-Host': 'target1.p.rapidapi.com'
            }
        };
        dispatch(fetchStart())
        try {
            const response = await axios.request(options);
            const output = await response.data.data.search.products
            // console.log(response)
            dispatch(fetchFulfilled(output))
        } catch (error) {
            console.error(error);
            dispatch(fetchFailure(error))
        }
    }


    // categroy api call
    const categoryApiCall = async () => {
        dispatch((fetchCategoryStart()))
        try {
            const response = await axios.request(categoryApi);
            dispatch(fetchCategoryFulfilled(response.data.metadata.children))
        } catch (error) {
            console.error(error);
            dispatch(fetchCategoryFailure(error))
        }
    }


    // const productDetails = {
    //     method: 'GET',
    //     url: 'https://target1.p.rapidapi.com/products/v3/get-details',
    //     params: {
    //         tcin: 89153369,
    //         store_id: '911'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': '4897f6ebecmshd0346ddbd9e3fbap172918jsn04c5be5b924f',
    //         'X-RapidAPI-Host': 'target1.p.rapidapi.com'
    //     }
    // };
    // console.log(detail)
    // const fetchDetailData = async () => {
    //     dispatch(fetchDetailStart())
    //     try {
    //         const response = await axios.request(productDetails);
    //         dispatch(fetchDetailSuccessfully(response))
    //         console.log(response);
    //     } catch (error) {
    //         dispatch(fetchDetailFailure(error))
    //         console.error(error);
    //     }
    // }


    useEffect(() => {
        fetchProductData()
    }, [category])
    useEffect(() => {
        categoryApiCall()
    }, [])


}

export default HomePageApi
