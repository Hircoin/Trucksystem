
    import { useState } from 'react';

    import { BrowserRouter, Routes, Route , Navigate, Outlet} from 'react-router-dom';

    import DataProvider from './context/DataProvider';
    //components
    import Header from './components/header/Header';
    import Home from './components/home/Home';
    // import CreateShipment from './components/create/CreateShipment';
    import DetailView from './components/details/DetailView';
    import Editshipment from './components/details/Editshipment';
    import Update from './components/create/Update';
    import UpdateTruck from './components/create/UpdateTruck';
    import UpdateSite from './components/create/UpdateSite';
    import UpdateDriver from './components/create/UpdateDriver';
    // import About from './components/about/About';
    // import Contact from './components/contact/Contact';
    import Login from './components/account/Login';
    import SearchStock from './components/aistock/SearchStock';
    import AddDetails from './components/addProperty/AddDetail';//use in trucksystem
    import Flourinproperty from './components/addProperty/addflour/floureinproperty';
    import Addflour from './components/addProperty/addflour/addflour';
    import Addassets from './components/addProperty/Addassets'; //use in trucksystem
    import CompanyHome from './components/comanyhome/views/CompanyHome';
    import Price from './components/paymentqr/Paymentqr';
    import Qrcode from './components/paymentqr/qrcodedetail';
    
    
    //import AiPortfolio from './components/aiportfolio/Aiportfolio';
    //import Aiworld from './components/aiworld/Aiworld';
    //import AboutWorld from './components/aboutworld/AboutWorld';
    //import PortfolioSection from './components/portfolioSection/PortfolioSection';
    //import Aifriend from './components/aifriend/Aifriend';
    //import Airesource from './components/airesource/Airesource';
    //import AiresourceMF from './components/airesource/AiresourceMF';
    import Filter from './components/freeservice/Watch';
    // import Video from './components/freeservice/video/Video';
    // import Personalfinance from './components/freeservice/personalfinance/Personalfinance';
    // import Mutualfunds from './components/freeservice/mutualfunds/Mutualfunds';
    // import Market from './components/freeservice/market/Market';
    // import Forum from './components/freeservice/forum/Forum';
    // import Commodities from './components/freeservice/commoditities/Commodities';
    // import News from './components/freeservice/news/News';
    //import Filter from './components/freeservice/Filter/Filter';
    import StockAbout from './components/stockabout/StockAbout';
    import AllRenterDetail from './components/allrenterdetail/AllRenterDetail';
    //import AiShortterm from './components/aishortterm/Aishorterm';
    //import ShorttermSection from './components/aishortterm/ShorttermSection';
    //import AiLongterm from './components/ailongterm/Ailongterm';
    //import LongtermSection from './components/ailongterm/LongtermSection';
    //import AiRisklover from './components/airisklover/Airisklover';
    //import RiskloverSection from './components/airisklover/RiskloverSection';
    //import AiRiskever from './components/airiskever/Airiskever';
    //import RiskeverSection from './components/airiskever/RiskeverSection';
    import Myportfolio from './components/userportfolio/myportfolio';
    import DateSearchPage from './components/reportdateselection/dateselection';
    import Viewrenter from './components/home/post/viewoption/Viewrenter';
    import RenterRentbill from './components/home/post/viewoption/renteroption/renterrentbill/RenterRentbill';
    import RenterPaybill from './components/home/post/viewoption/renteroption/renterpaybills/RenterPaybills';
    import RenterReport from './components/home/post/viewoption/renteroption/renterreport/RenterReport';
    import Viewoption from './components/home/post/viewoption/viewrenteroption/viewoption';
    import Addrentbill from './components/addrentandpaybill/addrentbill';
    import Addshipment from './components/addrentandpaybill/addshipment';//use in trucksystem
    import Addshipmentdetail from './components/addrentandpaybill/addshipmentdetail'; //use in trucksystem
    import Addshipdriver from './components/addrentandpaybill/addshipdriver';
    import Addpaybill from './components/addpaybill/addpaybill';
    import Addpaybillproperty from './components/addpaybill/activeShipment';//use in trucksystem
    import Addpaybillflore from './components/addpaybill/addpaybillflore';
    import Addpaybillrenter from './components/addpaybill/addpaybillrenter';
    import Addpaybillrentbill from './components/addpaybill/addpaybillrentbill';
    import Mytruck from './components/addthismonth/addthismonth';
    import Mysites from './components/siteportfolio/myportfolio';
    import Mydrivers from './components/driverportfolio/myportfolio';








    
    
    
    const PrivateRoute = ({ isAuthenticated, ...props }) => {
    const token = sessionStorage.getItem('accessToken');
    return isAuthenticated && token ? 
        <>
        <Header />
        <Outlet /> 
        </> : <Navigate replace to='/login' />
    };




    function App() {

    const [isAuthenticated, isUserAuthenticated] = useState(false);

    return (
        
        <DataProvider>
            <BrowserRouter>
            
            <div style={{ marginTop: 64 }}>
            <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
            <Route path='/home/company' element={<CompanyHome isUserAuthenticated={isUserAuthenticated}/>}/>
            <Route path='/prices' element={<Price isUserAuthenticated={isUserAuthenticated}/>}/>
            <Route path='/prices/plane/:prices' element={<Qrcode isUserAuthenticated={isUserAuthenticated}/>}/>
            
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/' element={<Home />} />
            </Route>

            <Route path='/AllRenterDetail' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/AllRenterDetail' element={<AllRenterDetail />} />
            </Route>
            
            {/* <Route path='/LiveFilter' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/LiveFilter' element={<Livesearchfilter/>} />
            </Route> */}

            <Route path='/addDetails' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/addDetails' element={<AddDetails />} />
            </Route>

            <Route path='/addDetails/:propertyid' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/addDetails/:propertyid' element={<AddDetails />} />
            </Route>

            <Route path='/addassets/:entity' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/addassets/:entity' element={<Addassets />} />
            </Route>

            <Route path='/addProperty/:propertyid' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/addProperty/:propertyid' element={<Flourinproperty />} />
            </Route>

            <Route path='/addflour/:propertyid' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/addflour/:propertyid' element={<Addflour />} />
            </Route>

            <Route path='/addProperty/Indian-Stock-Market/AI-Vision' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/addProperty/Indian-Stock-Market/AI-Vision' element={<SearchStock />} />
            </Route>

            <Route path='/stock' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/stock' element={<StockAbout />} />
            </Route>

            <Route path='/MyProperty' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/MyProperty' element={<Myportfolio />} />
            </Route>

            <Route path='/Mysite' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Mysite' element={<Mysites />} />
            </Route>

            <Route path='/Mydriver' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Mydriver' element={<Mydrivers />} />
            </Route>

            <Route path='/ReportGenerate' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/ReportGenerate' element={<DateSearchPage />} />
            </Route>

            <Route path='/Mytruck' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Mytruck' element={<Mytruck />} />
            </Route>

            <Route path='/filter' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/filter' element={<Filter/>} />
            </Route>

            <Route path='/propertyview/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/propertyview/:id' element={<DetailView />} />
            </Route>

            <Route path='/shipment/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/shipment/details/:id' element={<Editshipment/>} />
            </Route>

            {/* <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/create' element={<CreateShipment />} />
            </Route> */}

            <Route path='/AllRenterDetail/Details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/AllRenterDetail/Details/:id' element={<DetailView />} />
            </Route>

            {/* <Route path='/AI/Indian-Stock-Market/AI-Vision/:stockName' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/AI/Indian-Stock-Market/AI-Vision/:stockName' element={<Aboutstock />} />
            </Route>

            <Route path='/AI/Indian-Stock-Market/AI-Think/:signal' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/AI/Indian-Stock-Market/AI-Think/:signal' element={<AboutSignal />} />
            </Route>

            <Route path='/AI/Indian-Stock-Market/AI-Week/:weekSignal' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/AI/Indian-Stock-Market/AI-Week/:weekSignal' element={<AboutWeek />} />
            </Route> */}

            <Route path='/update/Truck/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/update/Truck/:id' element={<UpdateTruck />} />
            </Route>

            <Route path='/update/Site/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/update/Site/:id' element={<UpdateSite />} />
            </Route>

            <Route path='/update/Driver/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/update/Driver/:id' element={<UpdateDriver />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/viewrenter/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/viewrenter/:id' element={<Viewrenter />} />
            </Route>

            

            {/* use */}
            <Route path='/add/newShipment' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/newShipment' element={<Addshipment />} />
            </Route> 

            {/* Addshipdriver */}
            <Route path='/add/newShipment/Truck/:truckID' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/newShipment/Truck/:truckID' element={<Addshipdriver />} />
            </Route> 

            {/* Addshipmentdetail */}
            <Route path='/add/newShipment/Driver' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/newShipment/Driver' element={<Addshipmentdetail />} />
            </Route> 

            {/* use */}
            <Route path='/closeShipment' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/closeShipment' element={<Addpaybillproperty/>} />
            </Route>

            {/* <Route path='/add/Paybills/flore' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/Paybills/flore' element={<Addpaybillflore/>} />
            </Route>

            <Route path='/add/Paybills/renter' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/Paybills/renter' element={<Addpaybillrenter/>} />
            </Route> */}

            <Route path='/add/Paybills/rentbill' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/Paybills/rentbill' element={<Addpaybillrentbill/>} />
            </Route>

            <Route path='/add/Paybills' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/add/Paybills' element={<Addpaybill/>} />
            </Route>

            <Route path='/Report/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Report/:id' element={<RenterReport />} />
            </Route>

            <Route path='/Report/Month' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Report/Month' element={<Viewoption />} />
            </Route>

            <Route path='/Report/LastMonth' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Report/LastMonth' element={<Viewoption/>} />
            </Route>

            <Route path='/Report/Year' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Report/Year' element={<Viewoption/>} />
            </Route>

            <Route path='/Report/LastYear' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Report/LastYear' element={<Viewoption/>} />
            </Route>

            <Route path='/Report/Period' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/Report/Period' element={<RenterRentbill />} />
            </Route>


            {/* <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/about' element={<About />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/contact' element={<Contact />} />
            </Route> */}

            </Routes>
            </div>
            </BrowserRouter>
        </DataProvider>
        
    );
    }

    export default App;
