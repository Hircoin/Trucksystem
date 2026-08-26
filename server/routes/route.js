import express from 'express';

// import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controller/post-controller.js';
import {  addTrucks, addDriver, addSite,getTruck, getDriver, getSite, getTruckbyid, getDriverbyid, getSitebyid ,deleteProperty,updateTruck,updateDriver,updateSite } from '../controller/property-controller.js';
// import { addFlore, updateFlore, deleteFlore, getFlore, getAllFlores } from '../controller/flore-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
import { loginUser, singupUser, logoutUser ,paymentDetail} from '../controller/user-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';
import { createShipmentBill,getShipmentbyowner,getShipmentbyid,updateShipment,deleteShipment,getAllPosts, dateReport,getLatestShipmentbyOwner} from '../controller/shipmentbill-controller.js';
import { SiteTosendBill, getAllSitebills, updatesitebill} from '../controller/sitebill-controller.js';
import {DriverTosendBill ,getAllDriverbills, updatedriverbill} from '../controller/driverbill-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

router.post('/paymentdetail', paymentDetail);

router.post('/token', createNewToken);




// //renters post
// router.post('/create', authenticateToken, createPost);
// router.put('/update/:id', authenticateToken, updatePost);
// router.delete('/delete/:id', authenticateToken, deletePost);
// router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

//truck,driver,site property
router.delete('/deleteProperty',authenticateToken, deleteProperty);

//trucks
router.post('/addTrucks', authenticateToken, addTrucks);
router.get('/getTruckbyowner/:truckOwner', authenticateToken, getTruck);
router.get('/getTruckbyid/:_id', authenticateToken, getTruckbyid);
router.put('/updateTruck/:id', authenticateToken, updateTruck);

//driver
router.post('/addDriver', authenticateToken, addDriver);
router.get('/getDriverbyowner/:truckOwner', authenticateToken, getDriver);
router.get('/getDriverbyid/:_id', authenticateToken, getDriverbyid);
router.put('/updateDriver/:id', authenticateToken, updateDriver);

//site
router.post('/addSite', authenticateToken, addSite);
router.get('/getSitebyowner/:truckOwner', authenticateToken, getSite);
router.get('/getSitebyid/:_id', authenticateToken, getSitebyid);
router.put('/updateSite/:id', authenticateToken, updateSite);

//shipment
router.post('/addShipmentbills', authenticateToken, createShipmentBill);
router.get('/getShipmentbyowner/:truckOwner', authenticateToken, getShipmentbyowner);
router.get('/getShipmentbyid/:_id', authenticateToken, getShipmentbyid);
router.put('/updateShipment/:id', authenticateToken, updateShipment);
router.delete('/deleteShipment/:id', authenticateToken, deleteShipment);
router.get('/dateReport', authenticateToken, dateReport);
router.get('/getLatestShipmentbyOwner/:ownerName', authenticateToken, getLatestShipmentbyOwner);


//sitebill
// router.post('/SiteToSendBill', authenticateToken, SiteTosendBill);
router.get('/getALLSitebills', authenticateToken, getAllSitebills);
// router.put('/updatesiteBill', authenticateToken, updatesitebill);

//driverbill
// router.post('/DriverToSendBill', authenticateToken, DriverTosendBill);
router.get('/getALLDriverbills', authenticateToken, getAllDriverbills);
// router.put('/updatedriverBill', authenticateToken, updatedriverbill);

//property
// router.post('/addAssets', authenticateToken, addAssets);
// router.get('/getAssatsbyowner/:ownerName', authenticateToken, getProperty);

//flore
// router.post('/addFlore', authenticateToken, addFlore);
// router.put('/update/:id', authenticateToken, updateFlore);
// router.delete('/delete/:id', authenticateToken, deleteFlore);
// router.get('/getFlorebypropID/:propertyId', authenticateToken, getFlore);

//renterbill
// router.post('/createRenterbill', authenticateToken, createRenterBill);
// router.get('/getRenterRentbills', authenticateToken, getRenterRentbills);
// router.get('/rentbillbyid/:id', authenticateToken, getRentbillbyid);
// router.put('/updateRentbill/:id', authenticateToken, updateRentbill);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

export default router;