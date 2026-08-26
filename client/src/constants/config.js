// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },///
    userSignup: { url: '/signup', method: 'POST' },///
    userPaymentdetail: { url: '/paymentdetail', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },//
    getallsitebills: { url: '/getALLSitebills', method: 'GET', params: true },//
    getalldriverbills: { url: '/getALLDriverbills', method: 'GET', params: true },//
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },//
    createPost: { url: 'create', method: 'POST' },//
    addAssets: { url: '/addAssets', method: 'POST' },//
    addTrucks: { url: '/addTrucks', method: 'POST' },//
    updateTruck: { url: 'updateTruck', method: 'PUT', query: true },
    addDriver: { url: '/addDriver', method: 'POST' },//
    updateDriver: { url: 'updateDriver', method: 'PUT', query: true },
    addSite: { url: '/addSite', method: 'POST' },//
    sendToSiteBill: { url: '/SiteToSendBill', method: 'POST' },//
    sendToDriverBill: { url: '/DriverToSendBill', method: 'POST' },//
    updateSite: { url: 'updateSite', method: 'PUT', query: true },
    addShipmentbill: { url: '/addShipmentbills', method: 'POST' },//baki
    getShipmentbyowner: { url: 'getShipmentbyowner', method: 'GET', query: true },//
    getShipmentbyid: { url: 'getShipmentbyid', method: 'GET', query: true },//
    updateShipment: { url: 'updateShipment', method: 'PUT', query: true },
    updateSiteBill: { url: 'updatesiteBill', method: 'PUT', query: true },
    updateDriverBill: { url: 'updatedriverBill', method: 'PUT', query: true },
    getShipmentbyOwner: { url: 'getLatestShipmentbyOwner', method: 'GET', query: true },//
    deleteShipment: { url: 'deleteShipment', method: 'DELETE', query: true },
    deleteProperty: { url: 'deleteProperty', method: 'DELETE', params: true },
    getTruckbyowner: { url: 'getTruckbyowner', method: 'GET', query: true },//
    getDriverbyowner: { url: 'getDriverbyowner', method: 'GET', query: true },//
    getSitebyowner: { url: 'getSitebyowner', method: 'GET', query: true },//
    getTruckbyid: { url: 'getTruckbyid', method: 'GET', query: true },//
    getDriverbyid: { url: 'getDriverbyid', method: 'GET', query: true },//
    getSitebyid: { url: 'getSitebyid', method: 'GET', query: true },//
    getFlorebypropID: { url: 'getFlorebypropID', method: 'GET', query: true },//
    squareoffpositionById: { url: '/squareoffposition', method: 'PUT', params: true },//
    clientCall: { url: '/clientcall', method: 'POST' },//
    clientCallforlocal: { url: '/clientcallforlocal', method: 'POST' },//
    getAllPosition: { url: '/position', method: 'GET', params: true },//
    dateReport: { url: '/dateReport', method: 'GET', query: true },
    rentbillReport: { url: '/rentbillReport', method: 'GET', query: true },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    getstockByname: { url: 'stockname', method: 'GET', query: true },
    getstockByweeksignal: { url: 'weeksignal', method: 'GET', query: true },
    getstockBytodayportfolio: { url: 'portfoliochange', method: 'GET', query: true },
    
    getstockBysignal: { url: 'Signal', method: 'GET', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true },
    createRenterbill: { url: 'createRenterbill', method: 'POST' },
    getAllRentbills: { url: '/getRenterRentbills', method: 'GET', params: true },//
    getrentbillbyid: { url: '/rentbillbyid', method: 'GET', query: true },
    updateRenterbill: { url: 'updateRentbill', method: 'PUT', query: true },
    
}


