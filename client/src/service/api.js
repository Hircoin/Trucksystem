// import axios from 'axios';

// import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, getRefreshToken, setAccessToken, getType } from '../utils/common-utils';

// const API_URL = 'http://localhost:8000';

// const axiosInstance = axios.create({
//     baseURL: API_URL,
//     timeout: 10000, 
//     headers: {
//         "content-type": "application/json"
//     }
// });

// axiosInstance.interceptors.request.use(
//     function(config) {
//         if (config.TYPE.params) {
//             config.params = config.TYPE.params
//         } else if (config.TYPE.query) {
//             config.url = config.url + '/' + config.TYPE.query;
//         }
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     function(response) {
//         // Stop global loader here
//         return processResponse(response);
//     },
//     function(error) {
//         // Stop global loader here
//         return Promise.reject(processError(error));
//     }
// )


// ///////////////////////////////
// // If success -> returns { isSuccess: true, data: object }
// // If fail -> returns { isFailure: true, status: string, msg: string, code: int }
// //////////////////////////////
// const processResponse = (response) => {
//     if (response?.status === 200) {
//         return { isSuccess: true, data: response.data }
//     } else {
//         return {
//             isFailure: true,
//             status: response?.status,
//             msg: response?.msg,
//             code: response?.code
//         }
//     }
// }

// ///////////////////////////////
// // If success -> returns { isSuccess: true, data: object }
// // If fail -> returns { isError: true, status: string, msg: string, code: int }
// //////////////////////////////
// const processError = async (error) => {
//     if (error.response) {
//         // Request made and server responded with a status code 
//         // // that falls out of the range of 2xx
//         if (error.response?.status === 403) {
//         //     // const { url, config } = error.response;
//         //     // console.log(error);
//         //     // try {
//         //     //     let response = await API.getRefreshToken({ token: getRefreshToken() });
//         //     //     if (response.isSuccess) {
//                     sessionStorage.clear();
//         //     //         setAccessToken(response.data.accessToken);

//         //     //         const requestData = error.toJSON();

//         //     //         let response1 = await axios({
//         //     //             method: requestData.config.method,
//         //     //             url: requestData.config.baseURL + requestData.config.url,
//         //     //             headers: { "content-type": "application/json", "authorization": getAccessToken() },
//         //     //             params: requestData.config.params
//         //     //         });
//         //     //     }
//         //     // } catch (error) {
//         //     //     return Promise.reject(error)
//         //     // }
//         } else {
//             console.log("ERROR IN RESPONSE: ", error.toString());
//             return {
//                 isError: true,
//                 msg: API_NOTIFICATION_MESSAGES.responseFailure,
//                 code: error.response.status
//             }
//         }
//     } else if (error.request) { 
//         // The request was made but no response was received
//         console.log("ERROR IN RESPONSE: ", error.toString());
//         return {
//             isError: true,
//             msg: API_NOTIFICATION_MESSAGES.requestFailure,
//             code: ""
//         }
//     } else { 
//         // Something happened in setting up the request that triggered an Error
//         console.log("ERROR IN RESPONSE: ", error.toString());
//         return {
//             isError: true,
//             msg: API_NOTIFICATION_MESSAGES.networkError,
//             code: ""
//         }
//     }
// }

// const API = {};

// for (const [key, value] of Object.entries(SERVICE_URLS)) {
//     API[key] = (body, showUploadProgress, showDownloadProgress) =>
//         axiosInstance({
//             method: value.method,
//             url: value.url,
//             data: value.method === 'DELETE' ? '' : body,
//             responseType: value.responseType,
//             // headers: {
//             //     authorization: getAccessToken(),
//             // },
//             // TYPE: getType(value, body),
//             onUploadProgress: function(progressEvent) {
//                 if (showUploadProgress) {
//                     let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                     showUploadProgress(percentCompleted);
//                 }
//             },
//             onDownloadProgress: function(progressEvent) {
//                 if (showDownloadProgress) {
//                     let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                     showDownloadProgress(percentCompleted);
//                 }
//             }
//         });
// }

// export { API };


// Import axios library
import axios from 'axios';

// Import constants
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';

// Define API base URL
const API_URL = 'https://autofleet-tau.vercel.app/';

// Create an axios instance with custom configuration
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
});

// Add request interceptor to handle requests
axiosInstance.interceptors.request.use(
    function(config) {
        if (config.TYPE.params){
            config.params = config.TYPE.params;
        } else if (config.TYPE.query){
            config.url = config.url + '/' + config.TYPE.query;
        }
        // Modify request config if needed (e.g., add params or query)
        return config;
    },
    function(error) {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add response interceptor to handle responses
axiosInstance.interceptors.response.use(
    function(response) {
        // Process successful responses
        return processResponse(response);
    },
    function(error) {
        // Process errors
        return Promise.reject(processError(error));
    }
);

// Process successful responses
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        };
    }
};

// Process errors
const processError = async (error) => {
    if (error.response) {
        // Handle response errors
        if (error.response?.status === 403) {
            // Perform actions for specific status code (e.g., clear session)
            sessionStorage.clear();
        } else {
            // Log and return generic response failure
            console.log("ERROR IN RESPONSE: ", error.toJSON());
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code: error.response.status
            };
        }
    } else if (error.request) {
        // Handle request errors (e.g., no response received)
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        };
    } else {
        // Handle network errors
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        };
    }
};

// Define API object
const API = {};

// Create API functions dynamically from SERVICE_URLS
for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '': body,
            responseType: value.responseType,
            // headers: {
            //     authorization: getAccessToken(),
            // },
            // TYPE: getType(value, body),
            headers: {
                authorization: getAccessToken(),
                "Accept": "application/json, form-data", 
                "Content-Type": "application/json"
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                // Handle upload progress
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                // Handle download progress
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

// Export API object
export { API };
