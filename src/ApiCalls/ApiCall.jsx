// // Search api file


// import axios from 'axios';
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchFailure, fetchStart, fetchSuccessfully } from '../redux/slices/ProductSlice';
// import { fetchSearchFailure, fetchSearchStart, fetchSearchSuccessfully } from '../redux/slices/SearchSlice';

// const ApiCall = () => {
//     const dispatch = useDispatch();
//     const search = useSelector((state) => state.search.search)
//     console.log(search)



//     // const options = {
//     //     method: 'GET',
//     //     url: 'https://amazon23.p.rapidapi.com/product-search',
//     //     params: {
//     //         query: `${search}`,
//     //         country: 'US'
//     //     },
//     //     headers: {
//     //         'X-RapidAPI-Key': 'f6d69c5d55msh18ac11238468099p187b7fjsne31f5136332a',
//     //         'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
//     //     }
//     // };

//     const axios = require('axios');

//     const options = {
//         method: 'GET',
//         url: 'https://amazon23.p.rapidapi.com/product-search',
//         params: {
//             query: `${search}`,
//             country: 'US'
//         },
//         headers: {
//             'X-RapidAPI-Key': 'f6d69c5d55msh18ac11238468099p187b7fjsne31f5136332a',
//             'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
//         }
//     };

//     const searchData = async () => {
//         dispatch(fetchSearchStart())
//         try {
//             const response = await axios.request(options);
//             const output = await response.data
//             console.log(output)
//             dispatch(fetchSearchSuccessfully(output))
//         } catch (error) {
//             console.error(error);
//             dispatch(fetchSearchFailure(error))
//         }
//     }

//     // const fetchData = async () => {
//     //     dispatch(fetchStart())
//     //     try {
//     //         const response = await axios.request(options);
//     //         const output = await response.data
//     //         console.log(output)
//     //         dispatch(fetchSuccessfully(output.result))
//     //     } catch (error) {
//     //         console.error(error);
//     //         dispatch(fetchFailure(error))
//     //     }
//     // }

//     // useEffect(() => {
//     //     fetchData()
//     // })

//     useEffect(() => {
//         searchData()
//     })

// }

// export default ApiCall

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchFailure, fetchSearchStart, fetchSearchSuccessfully } from '../redux/slices/SearchSlice';

const ApiCall = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search.search);
    console.log(search);

    // const options = {
    //     method: 'GET',
    //     url: 'https://amazon23.p.rapidapi.com/product-search',
    //     params: {
    //         query: `${search}`,
    //         country: 'US'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': 'f6d69c5d55msh18ac11238468099p187b7fjsne31f5136332a',
    //         'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    //     }
    // };


    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {
            q: `${search}`,
            country: 'us',
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': 'b2af1f2cf7msh6a3cec92e90d7aep1c9421jsn7e194ab85a4f',
            'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
    };


    const searchData = async () => {
        dispatch(fetchSearchStart());
        try {
            const response = await axios.request(options); // Remove this line
            const output = await response.data;
            console.log(output)
            dispatch(fetchSearchSuccessfully(output));
            console.log(output);
        } catch (error) {
            dispatch(fetchSearchFailure(error));
        }
    }

    useEffect(() => {
        searchData();
    }, [search]);
}

export default ApiCall;
