// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function StockAbout() {
//     const location = useLocation();
//     const params = new URLSearchParams(location.search);
//     const label = params.get('stock');

//     const [livePriceData, setLivePriceData] = useState({});
//     const [financialData, setFinancialData] = useState({});
//     const [shareholdingsData, setShareholdingsData] = useState([]);

    

//     // urlliveData
//     async function fetchAndDisplayLivePriceData() {
//         try {
//             const response = await fetch(urlliveData);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const data = await response.json();
//             setLivePriceData(data);
//         } catch (error) {
//             console.error('Error fetching live price data:', error);
//         }
//     }

//     const fetchFinancialData = async () => {
//         try {
//             const response = await fetch('https://api-mintgenie.livemint.com/api-gateway/fundamental/api/v2/ibesData/S0003072');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch financial data');
//             }
//             const data = await response.json();
//             setFinancialData(data);
//         } catch (error) {
//             console.error('Error fetching financial data:', error);
//         }
//     };

//     function updateShareholdingsData() {
//         fetch('https://api-mintgenie.livemint.com/api-gateway/fundamental/v2/getShareHoldingsDetailByTickerIdAndType?tickerId=S0003072&type=PieChartDetails')
//             .then(response => response.json())
//             .then(data => {
//                 setShareholdingsData(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching shareholdings data:', error);
//             });
//     }


//     let ticker;
//     let tickerID;

//     // Assuming row.revenue is a variable you're expecting from the URL parameter
//     switch (label) {
//         case "Nifty_50":
//             ticker = "Nifty_50";
//             tickerID = "S0003072";
//             break;
//         case "Nifty_Bank":
//             ticker = "Nifty_Bank";
//             tickerID = "@tickerID2";
//             break;
//         case "Sensex":
//             ticker = "Sensex";
//             tickerID = "@tickerID3";
//             break;
//         case "Nifty_500":
//             ticker = "Nifty_500";
//             tickerID = "@tickerID4";
//             break;
//         case "NIFTY_FIN_SERVICE":
//             ticker = "NIFTY_FIN_SERVICE";
//             tickerID = "@tickerID5";
//             break;
//         case "BHNL":
//             ticker = "BHNL";
//             tickerID = "@tickerID6";
//             break;
//         case "BTC / INR":
//             ticker = "BTC / INR";
//             tickerID = "@tickerID7";
//             break;
//         case "3MINDIA":
//             ticker = "3MINDIA";
//             tickerID = "@tickerID8";
//             break;
//         case "ABB":
//             ticker = "ABB";
//             tickerID = "@tickerID9";
//             break;
//         case "ACC":
//             ticker = "ACC";
//             tickerID = "@tickerID10";
//             break;
//         case "ADFFOODS":
//             ticker = "ADFFOODS";
//             tickerID = "@tickerID11";
//             break;
//         case "AIAENG":
//             ticker = "AIAENG";
//             tickerID = "@tickerID12";
//             break;
//         case "APLAPOLLO":
//             ticker = "APLAPOLLO";
//             tickerID = "@tickerID13";
//             break;
//         case "AUBANK":
//             ticker = "AUBANK";
//             tickerID = "@tickerID14";
//             break;
//         case "AARTIDRUGS":
//             ticker = "AARTIDRUGS";
//             tickerID = "@tickerID15";
//             break;
//         case "AARTIIND":
//             ticker = "AARTIIND";
//             tickerID = "@tickerID16";
//             break;
//         case "AAVAS":
//             ticker = "AAVAS";
//             tickerID = "@tickerID17";
//             break;
//         case "ABBOTINDIA":
//             ticker = "ABBOTINDIA";
//             tickerID = "@tickerID18";
//             break;
//             case "ACCELYA":
//         ticker = "ACCELYA";
//         tickerID = "@tickerID19";
//         break;
//     case "ACE":
//         ticker = "ACE";
//         tickerID = "@tickerID20";
//         break;
//     case "ADANIENT":
//         ticker = "ADANIENT";
//         tickerID = "@tickerID21";
//         break;
//     case "ADANIGREEN":
//         ticker = "ADANIGREEN";
//         tickerID = "@tickerID22";
//         break;
//     case "ADANIPORTS":
//         ticker = "ADANIPORTS";
//         tickerID = "@tickerID23";
//         break;
//     case "ATGL":
//         ticker = "ATGL";
//         tickerID = "@tickerID24";
//         break;
//     case "ADANITRANS":
//         ticker = "ADANITRANS";
//         tickerID = "@tickerID25";
//         break;
//     case "ABCAPITAL":
//         ticker = "ABCAPITAL";
//         tickerID = "@tickerID26";
//         break;
//     case "ABFRL":
//         ticker = "ABFRL";
//         tickerID = "@tickerID27";
//         break;
//     case "ADVENZYMES":
//         ticker = "ADVENZYMES";
//         tickerID = "@tickerID28";
//         break;
//     case "AEGISCHEM":
//         ticker = "AEGISCHEM";
//         tickerID = "@tickerID29";
//         break;
//     case "AFFLE":
//         ticker = "AFFLE";
//         tickerID = "@tickerID30";
//         break;
//     case "ATFL":
//         ticker = "ATFL";
//         tickerID = "@tickerID31";
//         break;
//     case "AJANTPHARM":
//         ticker = "AJANTPHARM";
//         tickerID = "@tickerID32";
//         break;
//     case "ALEMBICLTD":
//         ticker = "ALEMBICLTD";
//         tickerID = "@tickerID33";
//         break;
//     case "APLLTD":
//         ticker = "APLLTD";
//         tickerID = "@tickerID34";
//         break;
//     case "ALKEM":
//         ticker = "ALKEM";
//         tickerID = "@tickerID35";
//         break;
//         case "ALKYLAMINE":
//         ticker = "ALKYLAMINE";
//         tickerID = "@tickerID36";
//         break;
//     case "ALLCARGO":
//         ticker = "ALLCARGO";
//         tickerID = "@tickerID37";
//         break;
//     case "ALOKINDS":
//         ticker = "ALOKINDS";
//         tickerID = "@tickerID38";
//         break;
//     case "AMARAJABAT":
//         ticker = "AMARAJABAT";
//         tickerID = "@tickerID39";
//         break;
//     case "AMBER":
//         ticker = "AMBER";
//         tickerID = "@tickerID40";
//         break;
//     case "AMBUJACEM":
//         ticker = "AMBUJACEM";
//         tickerID = "@tickerID41";
//         break;
//     case "AMRUTANJAN":
//         ticker = "AMRUTANJAN";
//         tickerID = "@tickerID42";
//         break;
//     case "ANANTRAJ":
//         ticker = "ANANTRAJ";
//         tickerID = "@tickerID43";
//         break;
//     case "ANDHRSUGAR":
//         ticker = "ANDHRSUGAR";
//         tickerID = "@tickerID44";
//         break;
//     case "ANGELONE":
//         ticker = "ANGELONE";
//         tickerID = "@tickerID45";
//         break;
//     case "ANURAS":
//         ticker = "ANURAS";
//         tickerID = "@tickerID46";
//         break;
//     case "APARINDS":
//         ticker = "APARINDS";
//         tickerID = "@tickerID47";
//         break;
//     case "APCOTEXIND":
//         ticker = "APCOTEXIND";
//         tickerID = "@tickerID48";
//         break;
//     case "APOLLOHOSP":
//         ticker = "APOLLOHOSP";
//         tickerID = "@tickerID49";
//         break;
//     case "APOLLOTYRE":
//         ticker = "APOLLOTYRE";
//         tickerID = "@tickerID50";
//         break;
//     case "ARVINDFASN":
//         ticker = "ARVINDFASN";
//         tickerID = "@tickerID51";
//         break;
//     case "ARVIND":
//         ticker = "ARVIND";
//         tickerID = "@tickerID52";
//         break;
//         case "ASAHIINDIA":
//         ticker = "ASAHIINDIA";
//         tickerID = "@tickerID53";
//         break;
//     case "ASHIANA":
//         ticker = "ASHIANA";
//         tickerID = "@tickerID54";
//         break;
//     case "ASHOKLEY":
//         ticker = "ASHOKLEY";
//         tickerID = "@tickerID55";
//         break;
//     case "ASHOKA":
//         ticker = "ASHOKA";
//         tickerID = "@tickerID56";
//         break;
//     case "ASIANPAINT":
//         ticker = "ASIANPAINT";
//         tickerID = "@tickerID57";
//         break;
//     case "ASTEC":
//         ticker = "ASTEC";
//         tickerID = "@tickerID58";
//         break;
//     case "ASTERDM":
//         ticker = "ASTERDM";
//         tickerID = "@tickerID59";
//         break;
//     case "ASTRAMICRO":
//         ticker = "ASTRAMICRO";
//         tickerID = "@tickerID60";
//         break;
//     case "ASTRAZEN":
//         ticker = "ASTRAZEN";
//         tickerID = "@tickerID61";
//         break;
//     case "ASTRAL":
//         ticker = "ASTRAL";
//         tickerID = "@tickerID62";
//         break;
//     case "ATUL":
//         ticker = "ATUL";
//         tickerID = "@tickerID63";
//         break;
//     case "AUROPHARMA":
//         ticker = "AUROPHARMA";
//         tickerID = "@tickerID64";
//         break;
//     case "AUTOAXLES":
//         ticker = "AUTOAXLES";
//         tickerID = "@tickerID65";
//         break;
//     case "AVANTIFEED":
//         ticker = "AVANTIFEED";
//         tickerID = "@tickerID66";
//         break;
//     case "DMART":
//         ticker = "DMART";
//         tickerID = "@tickerID67";
//         break;
//     case "AXISBANK":
//         ticker = "AXISBANK";
//         tickerID = "@tickerID68";
//         break;
//     case "BASF":
//         ticker = "BASF";
//         tickerID = "@tickerID69";
//         break;
//         case "BEML":
//         ticker = "BEML";
//         tickerID = "@tickerID70";
//         break;
//     case "BFINVEST":
//         ticker = "BFINVEST";
//         tickerID = "@tickerID71";
//         break;
//     case "BFUTILITIE":
//         ticker = "BFUTILITIE";
//         tickerID = "@tickerID72";
//         break;
//     case "BLS":
//         ticker = "BLS";
//         tickerID = "@tickerID73";
//         break;
//     case "BSE":
//         ticker = "BSE";
//         tickerID = "@tickerID74";
//         break;
//     case "BAJAJ-AUTO":
//         ticker = "BAJAJ-AUTO";
//         tickerID = "@tickerID75";
//         break;
//     case "BAJAJCON":
//         ticker = "BAJAJCON";
//         tickerID = "@tickerID76";
//         break;
//     case "BAJAJELEC":
//         ticker = "BAJAJELEC";
//         tickerID = "@tickerID77";
//         break;
//     case "BAJFINANCE":
//         ticker = "BAJFINANCE";
//         tickerID = "@tickerID78";
//         break;
//     case "BAJAJFINSV":
//         ticker = "BAJAJFINSV";
//         tickerID = "@tickerID79";
//         break;
//     case "BAJAJHIND":
//         ticker = "BAJAJHIND";
//         tickerID = "@tickerID80";
//         break;
//     case "BAJAJHLDNG":
//         ticker = "BAJAJHLDNG";
//         tickerID = "@tickerID81";
//         break;
//     case "BALAMINES":
//         ticker = "BALAMINES";
//         tickerID = "@tickerID82";
//         break;
//     case "BALKRISIND":
//         ticker = "BALKRISIND";
//         tickerID = "@tickerID83";
//         break;
//     case "BALMLAWRIE":
//         ticker = "BALMLAWRIE";
//         tickerID = "@tickerID84";
//         break;
//     case "BALRAMCHIN":
//         ticker = "BALRAMCHIN";
//         tickerID = "@tickerID85";
//         break;
//     case "BANCOINDIA":
//         ticker = "BANCOINDIA";
//         tickerID = "@tickerID86";
//         break;
//         case "BANDHANBNK":
//         ticker = "BANDHANBNK";
//         tickerID = "@tickerID87";
//         break;
//     case "BANKBARODA":
//         ticker = "BANKBARODA";
//         tickerID = "@tickerID88";
//         break;
//     case "BANKINDIA":
//         ticker = "BANKINDIA";
//         tickerID = "@tickerID89";
//         break;
//     case "MAHABANK":
//         ticker = "MAHABANK";
//         tickerID = "@tickerID90";
//         break;
//     case "BARBEQUE":
//         ticker = "BARBEQUE";
//         tickerID = "@tickerID91";
//         break;
//     case "BATAINDIA":
//         ticker = "BATAINDIA";
//         tickerID = "@tickerID92";
//         break;
//     case "BAYERCROP":
//         ticker = "BAYERCROP";
//         tickerID = "@tickerID93";
//         break;
//     case "BERGEPAINT":
//         ticker = "BERGEPAINT";
//         tickerID = "@tickerID94";
//         break;
//     case "BEPL":
//         ticker = "BEPL";
//         tickerID = "@tickerID95";
//         break;
//     case "BDL":
//         ticker = "BDL";
//         tickerID = "@tickerID96";
//         break;
//     case "BEL":
//         ticker = "BEL";
//         tickerID = "@tickerID97";
//         break;
//     case "BHARATFORG":
//         ticker = "BHARATFORG";
//         tickerID = "@tickerID98";
//         break;
//     case "BHEL":
//         ticker = "BHEL";
//         tickerID = "@tickerID99";
//         break;
//     case "BPCL":
//         ticker = "BPCL";
//         tickerID = "@tickerID100";
//         break;
//     case "BHARATRAS":
//         ticker = "BHARATRAS";
//         tickerID = "@tickerID101";
//         break;
//     case "BHARTIARTL":
//         ticker = "BHARTIARTL";
//         tickerID = "@tickerID102";
//         break;
//     case "BIOCON":
//         ticker = "BIOCON";
//         tickerID = "@tickerID103";
//         break;
//         case "BIRLACORPN":
//         ticker = "BIRLACORPN";
//         tickerID = "@tickerID104";
//         break;
//     case "BSOFT":
//         ticker = "BSOFT";
//         tickerID = "@tickerID105";
//         break;
//     case "BLISSGVS":
//         ticker = "BLISSGVS";
//         tickerID = "@tickerID106";
//         break;
//     case "BLUEDART":
//         ticker = "BLUEDART";
//         tickerID = "@tickerID107";
//         break;
//     case "BLUESTARCO":
//         ticker = "BLUESTARCO";
//         tickerID = "@tickerID108";
//         break;
//     case "BODALCHEM":
//         ticker = "BODALCHEM";
//         tickerID = "@tickerID109";
//         break;
//     case "BBTC":
//         ticker = "BBTC";
//         tickerID = "@tickerID110";
//         break;
//     case "BOMDYEING":
//         ticker = "BOMDYEING";
//         tickerID = "@tickerID111";
//         break;
//     case "BOROLTD":
//         ticker = "BOROLTD";
//         tickerID = "@tickerID112";
//         break;
//     case "BORORENEW":
//         ticker = "BORORENEW";
//         tickerID = "@tickerID113";
//         break;
//     case "BOSCHLTD":
//         ticker = "BOSCHLTD";
//         tickerID = "@tickerID114";
//         break;
//     case "BRIGADE":
//         ticker = "BRIGADE";
//         tickerID = "@tickerID115";
//         break;
//     case "BRITANNIA":
//         ticker = "BRITANNIA";
//         tickerID = "@tickerID116";
//         break;
//     case "BURGERKING":
//         ticker = "BURGERKING";
//         tickerID = "@tickerID117";
//         break;
//     case "CARERATING":
//         ticker = "CARERATING";
//         tickerID = "@tickerID118";
//         break;
//     case "CCL":
//         ticker = "CCL";
//         tickerID = "@tickerID119";
//         break;
//     case "CESC":
//         ticker = "CESC";
//         tickerID = "@tickerID120";
//         break;
//         case "CGPOWER":
//         ticker = "CGPOWER";
//         tickerID = "@tickerID121";
//         break;
//     case "CRISIL":
//         ticker = "CRISIL";
//         tickerID = "@tickerID122";
//         break;
//     case "CSBBANK":
//         ticker = "CSBBANK";
//         tickerID = "@tickerID123";
//         break;
//     case "CADILAHC":
//         ticker = "CADILAHC";
//         tickerID = "@tickerID124";
//         break;
//     case "CAMLINFINE":
//         ticker = "CAMLINFINE";
//         tickerID = "@tickerID125";
//         break;
//     case "CANFINHOME":
//         ticker = "CANFINHOME";
//         tickerID = "@tickerID126";
//         break;
//     case "CANBK":
//         ticker = "CANBK";
//         tickerID = "@tickerID127";
//         break;
//     case "CAPACITE":
//         ticker = "CAPACITE";
//         tickerID = "@tickerID128";
//         break;
//     case "CAPLIPOINT":
//         ticker = "CAPLIPOINT";
//         tickerID = "@tickerID129";
//         break;
//     case "CGCL":
//         ticker = "CGCL";
//         tickerID = "@tickerID130";
//         break;
//     case "CARBORUNIV":
//         ticker = "CARBORUNIV";
//         tickerID = "@tickerID131";
//         break;
//     case "CASTROLIND":
//         ticker = "CASTROLIND";
//         tickerID = "@tickerID132";
//         break;
//     case "CEATLTD":
//         ticker = "CEATLTD";
//         tickerID = "@tickerID133";
//         break;
//     case "CENTRALBK":
//         ticker = "CENTRALBK";
//         tickerID = "@tickerID134";
//         break;
//     case "CDSL":
//         ticker = "CDSL";
//         tickerID = "@tickerID135";
//         break;
//     case "CENTRUM":
//         ticker = "CENTRUM";
//         tickerID = "@tickerID136";
//         break;
//     case "CENTURYPLY":
//         ticker = "CENTURYPLY";
//         tickerID = "@tickerID137";
//         break;
//         case "CENTURYTEX":
//         ticker = "CENTURYTEX";
//         tickerID = "@tickerID138";
//         break;
//     case "CERA":
//         ticker = "CERA";
//         tickerID = "@tickerID139";
//         break;
//     case "CHALET":
//         ticker = "CHALET";
//         tickerID = "@tickerID140";
//         break;
//     case "CHAMBLFERT":
//         ticker = "CHAMBLFERT";
//         tickerID = "@tickerID141";
//         break;
//     case "CHEMCON":
//         ticker = "CHEMCON";
//         tickerID = "@tickerID142";
//         break;
//     case "CHENNPETRO":
//         ticker = "CHENNPETRO";
//         tickerID = "@tickerID143";
//         break;
//     case "CHOLAHLDNG":
//         ticker = "CHOLAHLDNG";
//         tickerID = "@tickerID144";
//         break;
//     case "CHOLAFIN":
//         ticker = "CHOLAFIN";
//         tickerID = "@tickerID145";
//         break;
//     case "CIGNITITEC":
//         ticker = "CIGNITITEC";
//         tickerID = "@tickerID146";
//         break;
//     case "CIPLA":
//         ticker = "CIPLA";
//         tickerID = "@tickerID147";
//         break;
//     case "CUB":
//         ticker = "CUB";
//         tickerID = "@tickerID148";
//         break;
//     case "CLNINDIA":
//         ticker = "CLNINDIA";
//         tickerID = "@tickerID149";
//         break;
//     case "COALINDIA":
//         ticker = "COALINDIA";
//         tickerID = "@tickerID150";
//         break;
//     case "COCHINSHIP":
//         ticker = "COCHINSHIP";
//         tickerID = "@tickerID151";
//         break;
//     case "COFORGE":
//         ticker = "COFORGE";
//         tickerID = "@tickerID152";
//         break;
//     case "COLPAL":
//         ticker = "COLPAL";
//         tickerID = "@tickerID153";
//         break;
//     case "CAMS":
//         ticker = "CAMS";
//         tickerID = "@tickerID154";
//         break;
//         case "CONFIPET":
//         ticker = "CONFIPET";
//         tickerID = "@tickerID155";
//         break;
//     case "CONCOR":
//         ticker = "CONCOR";
//         tickerID = "@tickerID156";
//         break;
//     case "COROMANDEL":
//         ticker = "COROMANDEL";
//         tickerID = "@tickerID157";
//         break;
//     case "COSMOFILMS":
//         ticker = "COSMOFILMS";
//         tickerID = "@tickerID158";
//         break;
//     case "CRAFTSMAN":
//         ticker = "CRAFTSMAN";
//         tickerID = "@tickerID159";
//         break;
//     case "CREDITACC":
//         ticker = "CREDITACC";
//         tickerID = "@tickerID160";
//         break;
//     case "CROMPTON":
//         ticker = "CROMPTON";
//         tickerID = "@tickerID161";
//         break;
//     case "CUMMINSIND":
//         ticker = "CUMMINSIND";
//         tickerID = "@tickerID162";
//         break;
//     case "CYIENT":
//         ticker = "CYIENT";
//         tickerID = "@tickerID163";
//         break;
//     case "DBCORP":
//         ticker = "DBCORP";
//         tickerID = "@tickerID164";
//         break;
//     case "DCBBANK":
//         ticker = "DCBBANK";
//         tickerID = "@tickerID165";
//         break;
//     case "DCMSHRIRAM":
//         ticker = "DCMSHRIRAM";
//         tickerID = "@tickerID166";
//         break;
//     case "DFMFOODS":
//         ticker = "DFMFOODS";
//         tickerID = "@tickerID167";
//         break;
//     case "DLF":
//         ticker = "DLF";
//         tickerID = "@tickerID168";
//         break;
//     case "DABUR":
//         ticker = "DABUR";
//         tickerID = "@tickerID169";
//         break;
//     case "DALBHARAT":
//         ticker = "DALBHARAT";
//         tickerID = "@tickerID170";
//         break;
//     case "DALMIASUG":
//         ticker = "DALMIASUG";
//         tickerID = "@tickerID171";
//         break;
//         case "DEEPAKFERT":
//         ticker = "DEEPAKFERT";
//         tickerID = "@tickerID172";
//         break;
//     case "DEEPAKNTR":
//         ticker = "DEEPAKNTR";
//         tickerID = "@tickerID173";
//         break;
//     case "DELTACORP":
//         ticker = "DELTACORP";
//         tickerID = "@tickerID174";
//         break;
//     case "DEN":
//         ticker = "DEN";
//         tickerID = "@tickerID175";
//         break;
//     case "DHAMPURSUG":
//         ticker = "DHAMPURSUG";
//         tickerID = "@tickerID176";
//         break;
//     case "DHANI":
//         ticker = "DHANI";
//         tickerID = "@tickerID177";
//         break;
//     case "DHANUKA":
//         ticker = "DHANUKA";
//         tickerID = "@tickerID178";
//         break;
//     case "DBL":
//         ticker = "DBL";
//         tickerID = "@tickerID179";
//         break;
//     case "DISHTV":
//         ticker = "DISHTV";
//         tickerID = "@tickerID180";
//         break;
//     case "DCAL":
//         ticker = "DCAL";
//         tickerID = "@tickerID181";
//         break;
//     case "DIVISLAB":
//         ticker = "DIVISLAB";
//         tickerID = "@tickerID182";
//         break;
//     case "DIXON":
//         ticker = "DIXON";
//         tickerID = "@tickerID183";
//         break;
//     case "DOLATALGO":
//         ticker = "DOLATALGO";
//         tickerID = "@tickerID184";
//         break;
//     case "DOLLAR":
//         ticker = "DOLLAR";
//         tickerID = "@tickerID185";
//         break;
//     case "LALPATHLAB":
//         ticker = "LALPATHLAB";
//         tickerID = "@tickerID186";
//         break;
//     case "DRREDDY":
//         ticker = "DRREDDY";
//         tickerID = "@tickerID187";
//         break;
//     case "DREDGECORP":
//         ticker = "DREDGECORP";
//         tickerID = "@tickerID188";
//         break;
//         case "EIDPARRY":
//         ticker = "EIDPARRY";
//         tickerID = "@tickerID189";
//         break;
//     case "EIHOTEL":
//         ticker = "EIHOTEL";
//         tickerID = "@tickerID190";
//         break;
//     case "EPL":
//         ticker = "EPL";
//         tickerID = "@tickerID191";
//         break;
//     case "ESABINDIA":
//         ticker = "ESABINDIA";
//         tickerID = "@tickerID192";
//         break;
//     case "EASEMYTRIP":
//         ticker = "EASEMYTRIP";
//         tickerID = "@tickerID193";
//         break;
//     case "EDELWEISS":
//         ticker = "EDELWEISS";
//         tickerID = "@tickerID194";
//         break;
//     case "EICHERMOT":
//         ticker = "EICHERMOT";
//         tickerID = "@tickerID195";
//         break;
//     case "ELECTCAST":
//         ticker = "ELECTCAST";
//         tickerID = "@tickerID196";
//         break;
//     case "ELGIEQUIP":
//         ticker = "ELGIEQUIP";
//         tickerID = "@tickerID197";
//         break;
//     case "EMAMILTD":
//         ticker = "EMAMILTD";
//         tickerID = "@tickerID198";
//         break;
//     case "ENDURANCE":
//         ticker = "ENDURANCE";
//         tickerID = "@tickerID199";
//         break;
//     case "ENGINERSIN":
//         ticker = "ENGINERSIN";
//         tickerID = "@tickerID200";
//         break;
//     case "EQUITAS":
//         ticker = "EQUITAS";
//         tickerID = "@tickerID201";
//         break;
//     case "EQUITASBNK":
//         ticker = "EQUITASBNK";
//         tickerID = "@tickerID202";
//         break;
//     case "ERIS":
//         ticker = "ERIS";
//         tickerID = "@tickerID203";
//         break;
//     case "ESCORTS":
//         ticker = "ESCORTS";
//         tickerID = "@tickerID204";
//         break;
//     case "EVEREADY":
//         ticker = "EVEREADY";
//         tickerID = "@tickerID205";
//         break;
//         case "EXCELINDUS":
//         ticker = "EXCELINDUS";
//         tickerID = "@tickerID206";
//         break;
//     case "EXIDEIND":
//         ticker = "EXIDEIND";
//         tickerID = "@tickerID207";
//         break;
//     case "FDC":
//         ticker = "FDC";
//         tickerID = "@tickerID208";
//         break;
//     case "FEDERALBNK":
//         ticker = "FEDERALBNK";
//         tickerID = "@tickerID209";
//         break;
//     case "FMGOETZE":
//         ticker = "FMGOETZE";
//         tickerID = "@tickerID210";
//         break;
//     case "FACT":
//         ticker = "FACT";
//         tickerID = "@tickerID211";
//         break;
//     case "FILATEX":
//         ticker = "FILATEX";
//         tickerID = "@tickerID212";
//         break;
//     case "FINEORG":
//         ticker = "FINEORG";
//         tickerID = "@tickerID213";
//         break;
//     case "FINCABLES":
//         ticker = "FINCABLES";
//         tickerID = "@tickerID214";
//         break;
//     case "FINPIPE":
//         ticker = "FINPIPE";
//         tickerID = "@tickerID215";
//         break;
//     case "FSL":
//         ticker = "FSL";
//         tickerID = "@tickerID216";
//         break;
//     case "FORCEMOT":
//         ticker = "FORCEMOT";
//         tickerID = "@tickerID217";
//         break;
//     case "FORTIS":
//         ticker = "FORTIS";
//         tickerID = "@tickerID218";
//         break;
//     case "FCONSUMER":
//         ticker = "FCONSUMER";
//         tickerID = "@tickerID219";
//         break;
//     case "FRETAIL":
//         ticker = "FRETAIL";
//         tickerID = "@tickerID220";
//         break;
//     case "GMBREW":
//         ticker = "GMBREW";
//         tickerID = "@tickerID221";
//         break;
//     case "GAIL":
//         ticker = "GAIL";
//         tickerID = "@tickerID222";
//         break;
//         case "GEPIL":
//         ticker = "GEPIL";
//         tickerID = "@tickerID223";
//         break;
//     case "GET&D":
//         ticker = "GET&D";
//         tickerID = "@tickerID224";
//         break;
//     case "GMMPFAUDLR":
//         ticker = "GMMPFAUDLR";
//         tickerID = "@tickerID225";
//         break;
//     case "GTPL":
//         ticker = "GTPL";
//         tickerID = "@tickerID226";
//         break;
//     case "GABRIEL":
//         ticker = "GABRIEL";
//         tickerID = "@tickerID227";
//         break;
//     case "GALAXYSURF":
//         ticker = "GALAXYSURF";
//         tickerID = "@tickerID228";
//         break;
//     case "GRSE":
//         ticker = "GRSE";
//         tickerID = "@tickerID229";
//         break;
//     case "GARFIBRES":
//         ticker = "GARFIBRES";
//         tickerID = "@tickerID230";
//         break;
//     case "GATI":
//         ticker = "GATI";
//         tickerID = "@tickerID231";
//         break;
//     case "GICRE":
//         ticker = "GICRE";
//         tickerID = "@tickerID232";
//         break;
//     case "GENUSPOWER":
//         ticker = "GENUSPOWER";
//         tickerID = "@tickerID233";
//         break;
//     case "GEOJITFSL":
//         ticker = "GEOJITFSL";
//         tickerID = "@tickerID234";
//         break;
//     case "GILLETTE":
//         ticker = "GILLETTE";
//         tickerID = "@tickerID235";
//         break;
//     case "GLAND":
//         ticker = "GLAND";
//         tickerID = "@tickerID236";
//         break;
//     case "GLAXO":
//         ticker = "GLAXO";
//         tickerID = "@tickerID237";
//         break;
//     case "GLENMARK":
//         ticker = "GLENMARK";
//         tickerID = "@tickerID238";
//         break;
//     case "GPIL":
//         ticker = "GPIL";
//         tickerID = "@tickerID239";
//         break;
//         case "GODFRYPHLP":
//         ticker = "GODFRYPHLP";
//         tickerID = "@tickerID240";
//         break;
//     case "GODREJAGRO":
//         ticker = "GODREJAGRO";
//         tickerID = "@tickerID241";
//         break;
//     case "GODREJCP":
//         ticker = "GODREJCP";
//         tickerID = "@tickerID242";
//         break;
//     case "GODREJIND":
//         ticker = "GODREJIND";
//         tickerID = "@tickerID243";
//         break;
//     case "GODREJPROP":
//         ticker = "GODREJPROP";
//         tickerID = "@tickerID244";
//         break;
//     case "GOODYEAR":
//         ticker = "GOODYEAR";
//         tickerID = "@tickerID245";
//         break;
//     case "GRANULES":
//         ticker = "GRANULES";
//         tickerID = "@tickerID246";
//         break;
//     case "GRAPHITE":
//         ticker = "GRAPHITE";
//         tickerID = "@tickerID247";
//         break;
//     case "GRASIM":
//         ticker = "GRASIM";
//         tickerID = "@tickerID248";
//         break;
//     case "GESHIP":
//         ticker = "GESHIP";
//         tickerID = "@tickerID249";
//         break;
//     case "GREAVESCOT":
//         ticker = "GREAVESCOT";
//         tickerID = "@tickerID250";
//         break;
//     case "GREENPANEL":
//         ticker = "GREENPANEL";
//         tickerID = "@tickerID251";
//         break;
//     case "GREENPLY":
//         ticker = "GREENPLY";
//         tickerID = "@tickerID252";
//         break;
//     case "GRINDWELL":
//         ticker = "GRINDWELL";
//         tickerID = "@tickerID253";
//         break;
//     case "GUJALKALI":
//         ticker = "GUJALKALI";
//         tickerID = "@tickerID254";
//         break;
//     case "GAEL":
//         ticker = "GAEL";
//         tickerID = "@tickerID255";
//         break;
//     case "FLUOROCHEM":
//         ticker = "FLUOROCHEM";
//         tickerID = "@tickerID256";
//         break;
//         case "GUJGASLTD":
//         ticker = "GUJGASLTD";
//         tickerID = "@tickerID257";
//         break;
//     case "GIPCL":
//         ticker = "GIPCL";
//         tickerID = "@tickerID258";
//         break;
//     case "GMDCLTD":
//         ticker = "GMDCLTD";
//         tickerID = "@tickerID259";
//         break;
//     case "GNFC":
//         ticker = "GNFC";
//         tickerID = "@tickerID260";
//         break;
//     case "GPPL":
//         ticker = "GPPL";
//         tickerID = "@tickerID261";
//         break;
//     case "GSFC":
//         ticker = "GSFC";
//         tickerID = "@tickerID262";
//         break;
//     case "GSPL":
//         ticker = "GSPL";
//         tickerID = "@tickerID263";
//         break;
//     case "GULFOILLUB":
//         ticker = "GULFOILLUB";
//         tickerID = "@tickerID264";
//         break;
//     case "HEG":
//         ticker = "HEG";
//         tickerID = "@tickerID265";
//         break;
//     case "HGINFRA":
//         ticker = "HGINFRA";
//         tickerID = "@tickerID266";
//         break;
//     case "HBLPOWER":
//         ticker = "HBLPOWER";
//         tickerID = "@tickerID267";
//         break;
//     case "HCLTECH":
//         ticker = "HCLTECH";
//         tickerID = "@tickerID268";
//         break;
//     case "HDFCAMC":
//         ticker = "HDFCAMC";
//         tickerID = "@tickerID269";
//         break;
//     case "HDFCBANK":
//         ticker = "HDFCBANK";
//         tickerID = "@tickerID270";
//         break;
//     case "HDFCLIFE":
//         ticker = "HDFCLIFE";
//         tickerID = "@tickerID271";
//         break;
//     case "HFCL":
//         ticker = "HFCL";
//         tickerID = "@tickerID272";
//         break;
//     case "HIL":
//         ticker = "HIL";
//         tickerID = "@tickerID273";
//         break;
//         case "HLEGLAS":
//         ticker = "HLEGLAS";
//         tickerID = "@tickerID274";
//         break;
//     case "HSIL":
//         ticker = "HSIL";
//         tickerID = "@tickerID275";
//         break;
//     case "HAPPSTMNDS":
//         ticker = "HAPPSTMNDS";
//         tickerID = "@tickerID276";
//         break;
//     case "HATHWAY":
//         ticker = "HATHWAY";
//         tickerID = "@tickerID277";
//         break;
//     case "HATSUN":
//         ticker = "HATSUN";
//         tickerID = "@tickerID278";
//         break;
//     case "HAVELLS":
//         ticker = "HAVELLS";
//         tickerID = "@tickerID279";
//         break;
//     case "HCG":
//         ticker = "HCG";
//         tickerID = "@tickerID280";
//         break;
//     case "HEIDELBERG":
//         ticker = "HEIDELBERG";
//         tickerID = "@tickerID281";
//         break;
//     case "HEMIPROP":
//         ticker = "HEMIPROP";
//         tickerID = "@tickerID282";
//         break;
//     case "HERANBA":
//         ticker = "HERANBA";
//         tickerID = "@tickerID283";
//         break;
//     case "HERITGFOOD":
//         ticker = "HERITGFOOD";
//         tickerID = "@tickerID284";
//         break;
//     case "HEROMOTOCO":
//         ticker = "HEROMOTOCO";
//         tickerID = "@tickerID285";
//         break;
//     case "HESTERBIO":
//         ticker = "HESTERBIO";
//         tickerID = "@tickerID286";
//         break;
//     case "HIKAL":
//         ticker = "HIKAL";
//         tickerID = "@tickerID287";
//         break;
//     case "HSCL":
//         ticker = "HSCL";
//         tickerID = "@tickerID288";
//         break;
//     case "HIMATSEIDE":
//         ticker = "HIMATSEIDE";
//         tickerID = "@tickerID289";
//         break;
//     case "HINDALCO":
//         ticker = "HINDALCO";
//         tickerID = "@tickerID290";
//         break;
//         case "HGS":
//         ticker = "HGS";
//         tickerID = "@tickerID291";
//         break;
//     case "HAL":
//         ticker = "HAL";
//         tickerID = "@tickerID292";
//         break;
//     case "HCC":
//         ticker = "HCC";
//         tickerID = "@tickerID293";
//         break;
//     case "HINDCOPPER":
//         ticker = "HINDCOPPER";
//         tickerID = "@tickerID294";
//         break;
//     case "HNDFDS":
//         ticker = "HNDFDS";
//         tickerID = "@tickerID295";
//         break;
//     case "HINDOILEXP":
//         ticker = "HINDOILEXP";
//         tickerID = "@tickerID296";
//         break;
//     case "HINDPETRO":
//         ticker = "HINDPETRO";
//         tickerID = "@tickerID297";
//         break;
//     case "HINDUNILVR":
//         ticker = "HINDUNILVR";
//         tickerID = "@tickerID298";
//         break;
//     case "HINDZINC":
//         ticker = "HINDZINC";
//         tickerID = "@tickerID299";
//         break;
//     case "POWERINDIA":
//         ticker = "POWERINDIA";
//         tickerID = "@tickerID300";
//         break;
//     case "HOMEFIRST":
//         ticker = "HOMEFIRST";
//         tickerID = "@tickerID301";
//         break;
//     case "HONAUT":
//         ticker = "HONAUT";
//         tickerID = "@tickerID302";
//         break;
//     case "HUDCO":
//         ticker = "HUDCO";
//         tickerID = "@tickerID303";
//         break;
//     case "HDFC":
//         ticker = "HDFC";
//         tickerID = "@tickerID304";
//         break;
//     case "HUHTAMAKI":
//         ticker = "HUHTAMAKI";
//         tickerID = "@tickerID305";
//         break;
//     case "IGPL":
//         ticker = "IGPL";
//         tickerID = "@tickerID306";
//         break;
//     case "ICICIBANK":
//         ticker = "ICICIBANK";
//         tickerID = "@tickerID307";
//         break;
//         case "ICICIGI":
//         ticker = "ICICIGI";
//         tickerID = "@tickerID308";
//         break;
//     case "ICICIPRULI":
//         ticker = "ICICIPRULI";
//         tickerID = "@tickerID309";
//         break;
//     case "ISEC":
//         ticker = "ISEC";
//         tickerID = "@tickerID310";
//         break;
//     case "ICRA":
//         ticker = "ICRA";
//         tickerID = "@tickerID311";
//         break;
//     case "IDBI":
//         ticker = "IDBI";
//         tickerID = "@tickerID312";
//         break;
//     case "IDFCFIRSTB":
//         ticker = "IDFCFIRSTB";
//         tickerID = "@tickerID313";
//         break;
//     case "IDFC":
//         ticker = "IDFC";
//         tickerID = "@tickerID314";
//         break;
//     case "IFBIND":
//         ticker = "IFBIND";
//         tickerID = "@tickerID315";
//         break;
//     case "IFCI":
//         ticker = "IFCI";
//         tickerID = "@tickerID316";
//         break;
//     case "IIFL":
//         ticker = "IIFL";
//         tickerID = "@tickerID317";
//         break;
//     case "IIFLSEC":
//         ticker = "IIFLSEC";
//         tickerID = "@tickerID318";
//         break;
//     case "IIFLWAM":
//         ticker = "IIFLWAM";
//         tickerID = "@tickerID319";
//         break;
//     case "INEOSSTYRO":
//         ticker = "INEOSSTYRO";
//         tickerID = "@tickerID320";
//         break;
//     case "IOLCP":
//         ticker = "IOLCP";
//         tickerID = "@tickerID321";
//         break;
//     case "IRB":
//         ticker = "IRB";
//         tickerID = "@tickerID322";
//         break;
//     case "IRCON":
//         ticker = "IRCON";
//         tickerID = "@tickerID323";
//         break;
//     case "ITC":
//         ticker = "ITC";
//         tickerID = "@tickerID324";
//         break;
//         case "ITDCEM":
//         ticker = "ITDCEM";
//         tickerID = "@tickerID325";
//         break;
//     case "ITI":
//         ticker = "ITI";
//         tickerID = "@tickerID326";
//         break;
//     case "IGARASHI":
//         ticker = "IGARASHI";
//         tickerID = "@tickerID327";
//         break;
//     case "INDIACEM":
//         ticker = "INDIACEM";
//         tickerID = "@tickerID328";
//         break;
//     case "INDIAGLYCO":
//         ticker = "INDIAGLYCO";
//         tickerID = "@tickerID329";
//         break;
//     case "ITDC":
//         ticker = "ITDC";
//         tickerID = "@tickerID330";
//         break;
//     case "IBULHSGFIN":
//         ticker = "IBULHSGFIN";
//         tickerID = "@tickerID331";
//         break;
//     case "IBREALEST":
//         ticker = "IBREALEST";
//         tickerID = "@tickerID332";
//         break;
//     case "INDIAMART":
//         ticker = "INDIAMART";
//         tickerID = "@tickerID333";
//         break;
//     case "INDIANB":
//         ticker = "INDIANB";
//         tickerID = "@tickerID334";
//         break;
//     case "IEX":
//         ticker = "IEX";
//         tickerID = "@tickerID335";
//         break;
//     case "INDHOTEL":
//         ticker = "INDHOTEL";
//         tickerID = "@tickerID336";
//         break;
//     case "INDIANHUME":
//         ticker = "INDIANHUME";
//         tickerID = "@tickerID337";
//         break;
//     case "IMFA":
//         ticker = "IMFA";
//         tickerID = "@tickerID338";
//         break;
//     case "IOC":
//         ticker = "IOC";
//         tickerID = "@tickerID339";
//         break;
//     case "IOB":
//         ticker = "IOB";
//         tickerID = "@tickerID340";
//         break;
//     case "IRCTC":
//         ticker = "IRCTC";
//         tickerID = "@tickerID341";
//         break;
//         case "IRFC":
//         ticker = "IRFC";
//         tickerID = "@tickerID342";
//         break;
//     case "INDIGOPNTS":
//         ticker = "INDIGOPNTS";
//         tickerID = "@tickerID343";
//         break;
//     case "ICIL":
//         ticker = "ICIL";
//         tickerID = "@tickerID344";
//         break;
//     case "INDOSTAR":
//         ticker = "INDOSTAR";
//         tickerID = "@tickerID345";
//         break;
//     case "INDOCO":
//         ticker = "INDOCO";
//         tickerID = "@tickerID346";
//         break;
//     case "IGL":
//         ticker = "IGL";
//         tickerID = "@tickerID347";
//         break;
//     case "INDUSTOWER":
//         ticker = "INDUSTOWER";
//         tickerID = "@tickerID348";
//         break;
//     case "INDUSINDBK":
//         ticker = "INDUSINDBK";
//         tickerID = "@tickerID349";
//         break;
//     case "INFIBEAM":
//         ticker = "INFIBEAM";
//         tickerID = "@tickerID350";
//         break;
//     case "NAUKRI":
//         ticker = "NAUKRI";
//         tickerID = "@tickerID351";
//         break;
//     case "INFY":
//         ticker = "INFY";
//         tickerID = "@tickerID352";
//         break;
//     case "INGERRAND":
//         ticker = "INGERRAND";
//         tickerID = "@tickerID353";
//         break;
//     case "INOXLEISUR":
//         ticker = "INOXLEISUR";
//         tickerID = "@tickerID354";
//         break;
//     case "INOXWIND":
//         ticker = "INOXWIND";
//         tickerID = "@tickerID355";
//         break;
//     case "INSECTICID":
//         ticker = "INSECTICID";
//         tickerID = "@tickerID356";
//         break;
//     case "INTELLECT":
//         ticker = "INTELLECT";
//         tickerID = "@tickerID357";
//         break;
//     case "INDIGO":
//         ticker = "INDIGO";
//         tickerID = "@tickerID358";
//         break;
//         case "IPCALAB":
//         ticker = "IPCALAB";
//         tickerID = "@tickerID359";
//         break;
//     case "ISGEC":
//         ticker = "ISGEC";
//         tickerID = "@tickerID360";
//         break;
//     case "JBCHEPHARM":
//         ticker = "JBCHEPHARM";
//         tickerID = "@tickerID361";
//         break;
//     case "JKCEMENT":
//         ticker = "JKCEMENT";
//         tickerID = "@tickerID362";
//         break;
//     case "JKIL":
//         ticker = "JKIL";
//         tickerID = "@tickerID363";
//         break;
//     case "JBMA":
//         ticker = "JBMA";
//         tickerID = "@tickerID364";
//         break;
//     case "JKLAKSHMI":
//         ticker = "JKLAKSHMI";
//         tickerID = "@tickerID365";
//         break;
//     case "JKPAPER":
//         ticker = "JKPAPER";
//         tickerID = "@tickerID366";
//         break;
//     case "JKTYRE":
//         ticker = "JKTYRE";
//         tickerID = "@tickerID367";
//         break;
//     case "JMFINANCIL":
//         ticker = "JMFINANCIL";
//         tickerID = "@tickerID368";
//         break;
//     case "JMCPROJECT":
//         ticker = "JMCPROJECT";
//         tickerID = "@tickerID369";
//         break;
//     case "JSWENERGY":
//         ticker = "JSWENERGY";
//         tickerID = "@tickerID370";
//         break;
//     case "JSWISPL":
//         ticker = "JSWISPL";
//         tickerID = "@tickerID371";
//         break;
//     case "JSWSTEEL":
//         ticker = "JSWSTEEL";
//         tickerID = "@tickerID372";
//         break;
//     case "JTEKTINDIA":
//         ticker = "JTEKTINDIA";
//         tickerID = "@tickerID373";
//         break;
//     case "JAGRAN":
//         ticker = "JAGRAN";
//         tickerID = "@tickerID374";
//         break;
//     case "JAICORPLTD":
//         ticker = "JAICORPLTD";
//         tickerID = "@tickerID375";
//         break;
//         case "JPASSOCIAT":
//         ticker = "JPASSOCIAT";
//         tickerID = "@tickerID376";
//         break;
//     case "JPPOWER":
//         ticker = "JPPOWER";
//         tickerID = "@tickerID377";
//         break;
//     case "J&KBANK":
//         ticker = "J&KBANK";
//         tickerID = "@tickerID378";
//         break;
//     case "JAMNAAUTO":
//         ticker = "JAMNAAUTO";
//         tickerID = "@tickerID379";
//         break;
//     case "JINDALPOLY":
//         ticker = "JINDALPOLY";
//         tickerID = "@tickerID380";
//         break;
//     case "JINDALSAW":
//         ticker = "JINDALSAW";
//         tickerID = "@tickerID381";
//         break;
//     case "JSLHISAR":
//         ticker = "JSLHISAR";
//         tickerID = "@tickerID382";
//         break;
//     case "JSL":
//         ticker = "JSL";
//         tickerID = "@tickerID383";
//         break;
//     case "JINDALSTEL":
//         ticker = "JINDALSTEL";
//         tickerID = "@tickerID384";
//         break;
//     case "JINDWORLD":
//         ticker = "JINDWORLD";
//         tickerID = "@tickerID385";
//         break;
//     case "JCHAC":
//         ticker = "JCHAC";
//         tickerID = "@tickerID386";
//         break;
//     case "JUBLFOOD":
//         ticker = "JUBLFOOD";
//         tickerID = "@tickerID387";
//         break;
//     case "JUBLINGREA":
//         ticker = "JUBLINGREA";
//         tickerID = "@tickerID388";
//         break;
//     case "JUBLPHARMA":
//         ticker = "JUBLPHARMA";
//         tickerID = "@tickerID389";
//         break;
//     case "JUSTDIAL":
//         ticker = "JUSTDIAL";
//         tickerID = "@tickerID390";
//         break;
//     case "JYOTHYLAB":
//         ticker = "JYOTHYLAB";
//         tickerID = "@tickerID391";
//         break;
//     case "KPRMILL":
//         ticker = "KPRMILL";
//         tickerID = "@tickerID392";
//         break;
//         case "KCP":
//         ticker = "KCP";
//         tickerID = "@tickerID393";
//         break;
//     case "KEI":
//         ticker = "KEI";
//         tickerID = "@tickerID394";
//         break;
//     case "KNRCON":
//         ticker = "KNRCON";
//         tickerID = "@tickerID395";
//         break;
//     case "KPITTECH":
//         ticker = "KPITTECH";
//         tickerID = "@tickerID396";
//         break;
//     case "KRBL":
//         ticker = "KRBL";
//         tickerID = "@tickerID397";
//         break;
//     case "KSB":
//         ticker = "KSB";
//         tickerID = "@tickerID398";
//         break;
//     case "KAJARIACER":
//         ticker = "KAJARIACER";
//         tickerID = "@tickerID399";
//         break;
//     case "KALPATPOWR":
//         ticker = "KALPATPOWR";
//         tickerID = "@tickerID400";
//         break;
//     case "KALYANKJIL":
//         ticker = "KALYANKJIL";
//         tickerID = "@tickerID401";
//         break;
//     case "KSL":
//         ticker = "KSL";
//         tickerID = "@tickerID402";
//         break;
//     case "KANSAINER":
//         ticker = "KANSAINER";
//         tickerID = "@tickerID403";
//         break;
//     case "KTKBANK":
//         ticker = "KTKBANK";
//         tickerID = "@tickerID404";
//         break;
//     case "KARURVYSYA":
//         ticker = "KARURVYSYA";
//         tickerID = "@tickerID405";
//         break;
//     case "KSCL":
//         ticker = "KSCL";
//         tickerID = "@tickerID406";
//         break;
//     case "KEC":
//         ticker = "KEC";
//         tickerID = "@tickerID407";
//         break;
//     case "KIRIINDUS":
//         ticker = "KIRIINDUS";
//         tickerID = "@tickerID408";
//         break;
//     case "KIRLOSBROS":
//         ticker = "KIRLOSBROS";
//         tickerID = "@tickerID409";
//         break;
//         case "KIRLFER":
//         ticker = "KIRLFER";
//         tickerID = "@tickerID410";
//         break;
//     case "KIRLOSENG":
//         ticker = "KIRLOSENG";
//         tickerID = "@tickerID411";
//         break;
//     case "KOLTEPATIL":
//         ticker = "KOLTEPATIL";
//         tickerID = "@tickerID412";
//         break;
//     case "KOTAKBANK":
//         ticker = "KOTAKBANK";
//         tickerID = "@tickerID413";
//         break;
//     case "L&TFH":
//         ticker = "L&TFH";
//         tickerID = "@tickerID414";
//         break;
//     case "LTTS":
//         ticker = "LTTS";
//         tickerID = "@tickerID415";
//         break;
//     case "LGBBROSLTD":
//         ticker = "LGBBROSLTD";
//         tickerID = "@tickerID416";
//         break;
//     case "LICHSGFIN":
//         ticker = "LICHSGFIN";
//         tickerID = "@tickerID417";
//         break;
//     case "DAAWAT":
//         ticker = "DAAWAT";
//         tickerID = "@tickerID418";
//         break;
//     case "LAOPALA":
//         ticker = "LAOPALA";
//         tickerID = "@tickerID419";
//         break;
//     case "LAXMIMACH":
//         ticker = "LAXMIMACH";
//         tickerID = "@tickerID420";
//         break;
//     case "LTI":
//         ticker = "LTI";
//         tickerID = "@tickerID421";
//         break;
//     case "LT":
//         ticker = "LT";
//         tickerID = "@tickerID422";
//         break;
//     case "LAURUSLABS":
//         ticker = "LAURUSLABS";
//         tickerID = "@tickerID423";
//         break;
//     case "LXCHEM":
//         ticker = "LXCHEM";
//         tickerID = "@tickerID424";
//         break;
//     case "LEMONTREE":
//         ticker = "LEMONTREE";
//         tickerID = "@tickerID425";
//         break;
//     case "LINDEINDIA":
//         ticker = "LINDEINDIA";
//         tickerID = "@tickerID426";
//         break;
//         case "LUMAXTECH":
//         ticker = "LUMAXTECH";
//         tickerID = "@tickerID427";
//         break;
//     case "LUPIN":
//         ticker = "LUPIN";
//         tickerID = "@tickerID428";
//         break;
//     case "LUXIND":
//         ticker = "LUXIND";
//         tickerID = "@tickerID429";
//         break;
//     case "MASFIN":
//         ticker = "MASFIN";
//         tickerID = "@tickerID430";
//         break;
//     case "MMTC":
//         ticker = "MMTC";
//         tickerID = "@tickerID431";
//         break;
//     case "MOIL":
//         ticker = "MOIL";
//         tickerID = "@tickerID432";
//         break;
//     case "MRF":
//         ticker = "MRF";
//         tickerID = "@tickerID433";
//         break;
//     case "MSTCLTD":
//         ticker = "MSTCLTD";
//         tickerID = "@tickerID434";
//         break;
//     case "MTARTECH":
//         ticker = "MTARTECH";
//         tickerID = "@tickerID435";
//         break;
//     case "LODHA":
//         ticker = "LODHA";
//         tickerID = "@tickerID436";
//         break;
//     case "MGL":
//         ticker = "MGL";
//         tickerID = "@tickerID437";
//         break;
//     case "MTNL":
//         ticker = "MTNL";
//         tickerID = "@tickerID438";
//         break;
//     case "MAHSCOOTER":
//         ticker = "MAHSCOOTER";
//         tickerID = "@tickerID439";
//         break;
//     case "MAHSEAMLES":
//         ticker = "MAHSEAMLES";
//         tickerID = "@tickerID440";
//         break;
//     case "M&MFIN":
//         ticker = "M&MFIN";
//         tickerID = "@tickerID441";
//         break;
//     case "M&M":
//         ticker = "M&M";
//         tickerID = "@tickerID442";
//         break;
//     case "MAHINDCIE":
//         ticker = "MAHINDCIE";
//         tickerID = "@tickerID443";
//         break;
//         case "MHRIL":
//         ticker = "MHRIL";
//         tickerID = "@tickerID444";
//         break;
//     case "MAHLIFE":
//         ticker = "MAHLIFE";
//         tickerID = "@tickerID445";
//         break;
//     case "MAHLOG":
//         ticker = "MAHLOG";
//         tickerID = "@tickerID446";
//         break;
//     case "MAITHANALL":
//         ticker = "MAITHANALL";
//         tickerID = "@tickerID447";
//         break;
//     case "MANINFRA":
//         ticker = "MANINFRA";
//         tickerID = "@tickerID448";
//         break;
//     case "MANAPPURAM":
//         ticker = "MANAPPURAM";
//         tickerID = "@tickerID449";
//         break;
//     case "MRPL":
//         ticker = "MRPL";
//         tickerID = "@tickerID450";
//         break;
//     case "MARICO":
//         ticker = "MARICO";
//         tickerID = "@tickerID451";
//         break;
//     case "MARKSANS":
//         ticker = "MARKSANS";
//         tickerID = "@tickerID452";
//         break;
//     case "MARUTI":
//         ticker = "MARUTI";
//         tickerID = "@tickerID453";
//         break;
//     case "MASTEK":
//         ticker = "MASTEK";
//         tickerID = "@tickerID454";
//         break;
//     case "MATRIMONY":
//         ticker = "MATRIMONY";
//         tickerID = "@tickerID455";
//         break;
//     case "MFSL":
//         ticker = "MFSL";
//         tickerID = "@tickerID456";
//         break;
//     case "MAXHEALTH":
//         ticker = "MAXHEALTH";
//         tickerID = "@tickerID457";
//         break;
//     case "MAYURUNIQ":
//         ticker = "MAYURUNIQ";
//         tickerID = "@tickerID458";
//         break;
//     case "MAZDOCK":
//         ticker = "MAZDOCK";
//         tickerID = "@tickerID459";
//         break;
//     case "METROPOLIS":
//         ticker = "METROPOLIS";
//         tickerID = "@tickerID460";
//         break;
//         case "MINDTREE":
//         ticker = "MINDTREE";
//         tickerID = "@tickerID461";
//         break;
//     case "MINDACORP":
//         ticker = "MINDACORP";
//         tickerID = "@tickerID462";
//         break;
//     case "MINDAIND":
//         ticker = "MINDAIND";
//         tickerID = "@tickerID463";
//         break;
//     case "MIDHANI":
//         ticker = "MIDHANI";
//         tickerID = "@tickerID464";
//         break;
//     case "MOLDTKPAC":
//         ticker = "MOLDTKPAC";
//         tickerID = "@tickerID465";
//         break;
//     case "MOREPENLAB":
//         ticker = "MOREPENLAB";
//         tickerID = "@tickerID466";
//         break;
//     case "MOTILALOFS":
//         ticker = "MOTILALOFS";
//         tickerID = "@tickerID467";
//         break;
//     case "MPHASIS":
//         ticker = "MPHASIS";
//         tickerID = "@tickerID468";
//         break;
//     case "BECTORFOOD":
//         ticker = "BECTORFOOD";
//         tickerID = "@tickerID469";
//         break;
//     case "MCX":
//         ticker = "MCX";
//         tickerID = "@tickerID470";
//         break;
//     case "MUTHOOTFIN":
//         ticker = "MUTHOOTFIN";
//         tickerID = "@tickerID471";
//         break;
//     case "NATCOPHARM":
//         ticker = "NATCOPHARM";
//         tickerID = "@tickerID472";
//         break;
//     case "NBCC":
//         ticker = "NBCC";
//         tickerID = "@tickerID473";
//         break;
//     case "NCC":
//         ticker = "NCC";
//         tickerID = "@tickerID474";
//         break;
//     case "NEOGEN":
//         ticker = "NEOGEN";
//         tickerID = "@tickerID475";
//         break;
//     case "NESCO":
//         ticker = "NESCO";
//         tickerID = "@tickerID476";
//         break;
//     case "NHPC":
//         ticker = "NHPC";
//         tickerID = "@tickerID477";
//         break;
//         case "NIITLTD":
//         ticker = "NIITLTD";
//         tickerID = "@tickerID478";
//         break;
//     case "NLCINDIA":
//         ticker = "NLCINDIA";
//         tickerID = "@tickerID479";
//         break;
//     case "NMDC":
//         ticker = "NMDC";
//         tickerID = "@tickerID480";
//         break;
//     case "NOCIL":
//         ticker = "NOCIL";
//         tickerID = "@tickerID481";
//         break;
//     case "NRBBEARING":
//         ticker = "NRBBEARING";
//         tickerID = "@tickerID482";
//         break;
//     case "NTPC":
//         ticker = "NTPC";
//         tickerID = "@tickerID483";
//         break;
//     case "NH":
//         ticker = "NH";
//         tickerID = "@tickerID484";
//         break;
//     case "NATIONALUM":
//         ticker = "NATIONALUM";
//         tickerID = "@tickerID485";
//         break;
//     case "NFL":
//         ticker = "NFL";
//         tickerID = "@tickerID486";
//         break;
//     case "NBVENTURES":
//         ticker = "NBVENTURES";
//         tickerID = "@tickerID487";
//         break;
//     case "NAVINFLUOR":
//         ticker = "NAVINFLUOR";
//         tickerID = "@tickerID488";
//         break;
//     case "NAVNETEDUL":
//         ticker = "NAVNETEDUL";
//         tickerID = "@tickerID489";
//         break;
//     case "NAZARA":
//         ticker = "NAZARA";
//         tickerID = "@tickerID490";
//         break;
//     case "NESTLEIND":
//         ticker = "NESTLEIND";
//         tickerID = "@tickerID491";
//         break;
//     case "NETWORK18":
//         ticker = "NETWORK18";
//         tickerID = "@tickerID492";
//         break;
//     case "NEULANDLAB":
//         ticker = "NEULANDLAB";
//         tickerID = "@tickerID493";
//         break;
//     case "NEWGEN":
//         ticker = "NEWGEN";
//         tickerID = "@tickerID494";
//         break;
//         case "NILKAMAL":
//         ticker = "NILKAMAL";
//         tickerID = "@tickerID495";
//         break;
//     case "NAM-INDIA":
//         ticker = "NAM-INDIA";
//         tickerID = "@tickerID496";
//         break;
//     case "NOVARTIND":
//         ticker = "NOVARTIND";
//         tickerID = "@tickerID497";
//         break;
//     case "NUCLEUS":
//         ticker = "NUCLEUS";
//         tickerID = "@tickerID498";
//         break;
//     case "OBEROIRLTY":
//         ticker = "OBEROIRLTY";
//         tickerID = "@tickerID499";
//         break;
//     case "ONGC":
//         ticker = "ONGC";
//         tickerID = "@tickerID500";
//         break;
//     case "OIL":
//         ticker = "OIL";
//         tickerID = "@tickerID501";
//         break;
//     case "OLECTRA":
//         ticker = "OLECTRA";
//         tickerID = "@tickerID502";
//         break;
//     case "OFSS":
//         ticker = "OFSS";
//         tickerID = "@tickerID503";
//         break;
//     case "ORIENTCEM":
//         ticker = "ORIENTCEM";
//         tickerID = "@tickerID504";
//         break;
//     case "ORIENTELEC":
//         ticker = "ORIENTELEC";
//         tickerID = "@tickerID505";
//         break;
//     case "OAL":
//         ticker = "OAL";
//         tickerID = "@tickerID506";
//         break;
//     case "OCCL":
//         ticker = "OCCL";
//         tickerID = "@tickerID507";
//         break;
//     case "ORISSAMINE":
//         ticker = "ORISSAMINE";
//         tickerID = "@tickerID508";
//         break;
//     case "PCJEWELLER":
//         ticker = "PCJEWELLER";
//         tickerID = "@tickerID509";
//         break;
//     case "PCBL":
//         ticker = "PCBL";
//         tickerID = "@tickerID510";
//         break;
//     case "PIIND":
//         ticker = "PIIND";
//         tickerID = "@tickerID511";
//         break;
//         case "PNBGILTS":
//         ticker = "PNBGILTS";
//         tickerID = "@tickerID512";
//         break;
//     case "PNBHOUSING":
//         ticker = "PNBHOUSING";
//         tickerID = "@tickerID513";
//         break;
//     case "PNCINFRA":
//         ticker = "PNCINFRA";
//         tickerID = "@tickerID514";
//         break;
//     case "PSPPROJECT":
//         ticker = "PSPPROJECT";
//         tickerID = "@tickerID515";
//         break;
//     case "PFS":
//         ticker = "PFS";
//         tickerID = "@tickerID516";
//         break;
//     case "PTC":
//         ticker = "PTC";
//         tickerID = "@tickerID517";
//         break;
//     case "PVR":
//         ticker = "PVR";
//         tickerID = "@tickerID518";
//         break;
//     case "PAGEIND":
//         ticker = "PAGEIND";
//         tickerID = "@tickerID519";
//         break;
//     case "PAISALO":
//         ticker = "PAISALO";
//         tickerID = "@tickerID520";
//         break;
//     case "PANACEABIO":
//         ticker = "PANACEABIO";
//         tickerID = "@tickerID521";
//         break;
//     case "PARAGMILK":
//         ticker = "PARAGMILK";
//         tickerID = "@tickerID522";
//         break;
//     case "PERSISTENT":
//         ticker = "PERSISTENT";
//         tickerID = "@tickerID523";
//         break;
//     case "PETRONET":
//         ticker = "PETRONET";
//         tickerID = "@tickerID524";
//         break;
//     case "PFIZER":
//         ticker = "PFIZER";
//         tickerID = "@tickerID525";
//         break;
//     case "PHOENIXLTD":
//         ticker = "PHOENIXLTD";
//         tickerID = "@tickerID526";
//         break;
//     case "PIDILITIND":
//         ticker = "PIDILITIND";
//         tickerID = "@tickerID527";
//         break;
//     case "PILANIINVS":
//         ticker = "PILANIINVS";
//         tickerID = "@tickerID528";
//         break;
//         case "PEL":
//         ticker = "PEL";
//         tickerID = "@tickerID529";
//         break;
//     case "POLYMED":
//         ticker = "POLYMED";
//         tickerID = "@tickerID530";
//         break;
//     case "POLYCAB":
//         ticker = "POLYCAB";
//         tickerID = "@tickerID531";
//         break;
//     case "POLYPLEX":
//         ticker = "POLYPLEX";
//         tickerID = "@tickerID532";
//         break;
//     case "POONAWALLA":
//         ticker = "POONAWALLA";
//         tickerID = "@tickerID533";
//         break;
//     case "PFC":
//         ticker = "PFC";
//         tickerID = "@tickerID534";
//         break;
//     case "POWERGRID":
//         ticker = "POWERGRID";
//         tickerID = "@tickerID535";
//         break;
//     case "PRAJIND":
//         ticker = "PRAJIND";
//         tickerID = "@tickerID536";
//         break;
//     case "PRAKASH":
//         ticker = "PRAKASH";
//         tickerID = "@tickerID537";
//         break;
//     case "DIAMONDYD":
//         ticker = "DIAMONDYD";
//         tickerID = "@tickerID538";
//         break;
//     case "PRESTIGE":
//         ticker = "PRESTIGE";
//         tickerID = "@tickerID539";
//         break;
//     case "PRINCEPIPE":
//         ticker = "PRINCEPIPE";
//         tickerID = "@tickerID540";
//         break;
//     case "PRSMJOHNSN":
//         ticker = "PRSMJOHNSN";
//         tickerID = "@tickerID541";
//         break;
//     case "PRIVISCL":
//         ticker = "PRIVISCL";
//         tickerID = "@tickerID542";
//         break;
//     case "PGHL":
//         ticker = "PGHL";
//         tickerID = "@tickerID543";
//         break;
//     case "PGHH":
//         ticker = "PGHH";
//         tickerID = "@tickerID544";
//         break;
//     case "PSB":
//         ticker = "PSB";
//         tickerID = "@tickerID545";
//         break;
//         case "PUNJABCHEM":
//         ticker = "PUNJABCHEM";
//         tickerID = "@tickerID546";
//         break;
//     case "PNB":
//         ticker = "PNB";
//         tickerID = "@tickerID547";
//         break;
//     case "PURVA":
//         ticker = "PURVA";
//         tickerID = "@tickerID548";
//         break;
//     case "QUESS":
//         ticker = "QUESS";
//         tickerID = "@tickerID549";
//         break;
//     case "QUICKHEAL":
//         ticker = "QUICKHEAL";
//         tickerID = "@tickerID550";
//         break;
//     case "RSYSTEMS":
//         ticker = "RSYSTEMS";
//         tickerID = "@tickerID551";
//         break;
//     case "RBLBANK":
//         ticker = "RBLBANK";
//         tickerID = "@tickerID552";
//         break;
//     case "RECLTD":
//         ticker = "RECLTD";
//         tickerID = "@tickerID553";
//         break;
//     case "RHIM":
//         ticker = "RHIM";
//         tickerID = "@tickerID554";
//         break;
//     case "RITES":
//         ticker = "RITES";
//         tickerID = "@tickerID555";
//         break;
//     case "RPSGVENT":
//         ticker = "RPSGVENT";
//         tickerID = "@tickerID556";
//         break;
//     case "RADICO":
//         ticker = "RADICO";
//         tickerID = "@tickerID557";
//         break;
//     case "RVNL":
//         ticker = "RVNL";
//         tickerID = "@tickerID558";
//         break;
//     case "RAILTEL":
//         ticker = "RAILTEL";
//         tickerID = "@tickerID559";
//         break;
//     case "RAIN":
//         ticker = "RAIN";
//         tickerID = "@tickerID560";
//         break;
//     case "RAJESHEXPO":
//         ticker = "RAJESHEXPO";
//         tickerID = "@tickerID561";
//         break;
//     case "RALLIS":
//         ticker = "RALLIS";
//         tickerID = "@tickerID562";
//         break;
//         case "RAMCOIND":
//         ticker = "RAMCOIND";
//         tickerID = "@tickerID563";
//         break;
//     case "RAMCOSYS":
//         ticker = "RAMCOSYS";
//         tickerID = "@tickerID564";
//         break;
//     case "RKFORGE":
//         ticker = "RKFORGE";
//         tickerID = "@tickerID565";
//         break;
//     case "RANEHOLDIN":
//         ticker = "RANEHOLDIN";
//         tickerID = "@tickerID566";
//         break;
//     case "RCF":
//         ticker = "RCF";
//         tickerID = "@tickerID567";
//         break;
//     case "RATNAMANI":
//         ticker = "RATNAMANI";
//         tickerID = "@tickerID568";
//         break;
//     case "RTNINDIA":
//         ticker = "RTNINDIA";
//         tickerID = "@tickerID569";
//         break;
//     case "RTNPOWER":
//         ticker = "RTNPOWER";
//         tickerID = "@tickerID570";
//         break;
//     case "RAYMOND":
//         ticker = "RAYMOND";
//         tickerID = "@tickerID571";
//         break;
//     case "REDINGTON":
//         ticker = "REDINGTON";
//         tickerID = "@tickerID572";
//         break;
//     case "RELAXO":
//         ticker = "RELAXO";
//         tickerID = "@tickerID573";
//         break;
//     case "RELIANCE":
//         ticker = "RELIANCE";
//         tickerID = "@tickerID574";
//         break;
//     case "RELINFRA":
//         ticker = "RELINFRA";
//         tickerID = "@tickerID575";
//         break;
//     case "RPOWER":
//         ticker = "RPOWER";
//         tickerID = "@tickerID576";
//         break;
//     case "RELIGARE":
//         ticker = "RELIGARE";
//         tickerID = "@tickerID577";
//         break;
//     case "REPCOHOME":
//         ticker = "REPCOHOME";
//         tickerID = "@tickerID578";
//         break;
//     case "ROSSARI":
//         ticker = "ROSSARI";
//         tickerID = "@tickerID579";
//         break;
//         case "ROUTE":
//         ticker = "ROUTE";
//         tickerID = "@tickerID580";
//         break;
//     case "RUPA":
//         ticker = "RUPA";
//         tickerID = "@tickerID581";
//         break;
//     case "SHK":
//         ticker = "SHK";
//         tickerID = "@tickerID582";
//         break;
//     case "SBICARD":
//         ticker = "SBICARD";
//         tickerID = "@tickerID583";
//         break;
//     case "SBILIFE":
//         ticker = "SBILIFE";
//         tickerID = "@tickerID584";
//         break;
//     case "SEAMECLTD":
//         ticker = "SEAMECLTD";
//         tickerID = "@tickerID585";
//         break;
//     case "SIS":
//         ticker = "SIS";
//         tickerID = "@tickerID586";
//         break;
//     case "SJVN":
//         ticker = "SJVN";
//         tickerID = "@tickerID587";
//         break;
//     case "SKFINDIA":
//         ticker = "SKFINDIA";
//         tickerID = "@tickerID588";
//         break;
//     case "SMSPHARMA":
//         ticker = "SMSPHARMA";
//         tickerID = "@tickerID589";
//         break;
//     case "SRF":
//         ticker = "SRF";
//         tickerID = "@tickerID590";
//         break;
//     case "SADBHAV":
//         ticker = "SADBHAV";
//         tickerID = "@tickerID591";
//         break;
//     case "SAGCEM":
//         ticker = "SAGCEM";
//         tickerID = "@tickerID592";
//         break;
//     case "SANDHAR":
//         ticker = "SANDHAR";
//         tickerID = "@tickerID593";
//         break;
//     case "SANGHIIND":
//         ticker = "SANGHIIND";
//         tickerID = "@tickerID594";
//         break;
//     case "SANOFI":
//         ticker = "SANOFI";
//         tickerID = "@tickerID595";
//         break;
//     case "SARDAEN":
//         ticker = "SARDAEN";
//         tickerID = "@tickerID596";
//         break;
//         case "SAREGAMA":
//         ticker = "SAREGAMA";
//         tickerID = "@tickerID597";
//         break;
//     case "SASKEN":
//         ticker = "SASKEN";
//         tickerID = "@tickerID598";
//         break;
//     case "SATIA":
//         ticker = "SATIA";
//         tickerID = "@tickerID599";
//         break;
//     case "SOTL":
//         ticker = "SOTL";
//         tickerID = "@tickerID600";
//         break;
//     case "SCHAEFFLER":
//         ticker = "SCHAEFFLER";
//         tickerID = "@tickerID601";
//         break;
//     case "SCHNEIDER":
//         ticker = "SCHNEIDER";
//         tickerID = "@tickerID602";
//         break;
//     case "SEQUENT":
//         ticker = "SEQUENT";
//         tickerID = "@tickerID603";
//         break;
//     case "SESHAPAPER":
//         ticker = "SESHAPAPER";
//         tickerID = "@tickerID604";
//         break;
//     case "SHALBY":
//         ticker = "SHALBY";
//         tickerID = "@tickerID605";
//         break;
//     case "SHANKARA":
//         ticker = "SHANKARA";
//         tickerID = "@tickerID606";
//         break;
//     case "SHANTIGEAR":
//         ticker = "SHANTIGEAR";
//         tickerID = "@tickerID607";
//         break;
//     case "SHARDACROP":
//         ticker = "SHARDACROP";
//         tickerID = "@tickerID608";
//         break;
//     case "SHARDAMOTR":
//         ticker = "SHARDAMOTR";
//         tickerID = "@tickerID609";
//         break;
//     case "SFL":
//         ticker = "SFL";
//         tickerID = "@tickerID610";
//         break;
//     case "SHILPAMED":
//         ticker = "SHILPAMED";
//         tickerID = "@tickerID611";
//         break;
//     case "SCI":
//         ticker = "SCI";
//         tickerID = "@tickerID612";
//         break;
//     case "SHOPERSTOP":
//         ticker = "SHOPERSTOP";
//         tickerID = "@tickerID613";
//         break;
//         case "SHREECEM":
//         ticker = "SHREECEM";
//         tickerID = "@tickerID614";
//         break;
//     case "RENUKA":
//         ticker = "RENUKA";
//         tickerID = "@tickerID615";
//         break;
//     case "SHRIRAMCIT":
//         ticker = "SHRIRAMCIT";
//         tickerID = "@tickerID616";
//         break;
//     case "SRTRANSFIN":
//         ticker = "SRTRANSFIN";
//         tickerID = "@tickerID617";
//         break;
//     case "SIEMENS":
//         ticker = "SIEMENS";
//         tickerID = "@tickerID618";
//         break;
//     case "SIYSIL":
//         ticker = "SIYSIL";
//         tickerID = "@tickerID619";
//         break;
//     case "SNOWMAN":
//         ticker = "SNOWMAN";
//         tickerID = "@tickerID620";
//         break;
//     case "SOBHA":
//         ticker = "SOBHA";
//         tickerID = "@tickerID621";
//         break;
//     case "SOLARINDS":
//         ticker = "SOLARINDS";
//         tickerID = "@tickerID622";
//         break;
//     case "SOLARA":
//         ticker = "SOLARA";
//         tickerID = "@tickerID623";
//         break;
//     case "SOMANYCERA":
//         ticker = "SOMANYCERA";
//         tickerID = "@tickerID624";
//         break;
//     case "SHIL":
//         ticker = "SHIL";
//         tickerID = "@tickerID625";
//         break;
//     case "SONACOMS":
//         ticker = "SONACOMS";
//         tickerID = "@tickerID626";
//         break;
//     case "SONATSOFTW":
//         ticker = "SONATSOFTW";
//         tickerID = "@tickerID627";
//         break;
//     case "SOUTHBANK":
//         ticker = "SOUTHBANK";
//         tickerID = "@tickerID628";
//         break;
//     case "SPANDANA":
//         ticker = "SPANDANA";
//         tickerID = "@tickerID629";
//         break;
//     case "SPICEJET":
//         ticker = "SPICEJET";
//         tickerID = "@tickerID630";
//         break;
//         case "STARCEMENT":
//         ticker = "STARCEMENT";
//         tickerID = "@tickerID631";
//         break;
//     case "SBIN":
//         ticker = "SBIN";
//         tickerID = "@tickerID632";
//         break;
//     case "SAIL":
//         ticker = "SAIL";
//         tickerID = "@tickerID633";
//         break;
//     case "SSWL":
//         ticker = "SSWL";
//         tickerID = "@tickerID634";
//         break;
//     case "SWSOLAR":
//         ticker = "SWSOLAR";
//         tickerID = "@tickerID635";
//         break;
//     case "STLTECH":
//         ticker = "STLTECH";
//         tickerID = "@tickerID636";
//         break;
//     case "STOVEKRAFT":
//         ticker = "STOVEKRAFT";
//         tickerID = "@tickerID637";
//         break;
//     case "STAR":
//         ticker = "STAR";
//         tickerID = "@tickerID638";
//         break;
//     case "SUBEXLTD":
//         ticker = "SUBEXLTD";
//         tickerID = "@tickerID639";
//         break;
//     case "SUBROS":
//         ticker = "SUBROS";
//         tickerID = "@tickerID640";
//         break;
//     case "SUDARSCHEM":
//         ticker = "SUDARSCHEM";
//         tickerID = "@tickerID641";
//         break;
//     case "SUMICHEM":
//         ticker = "SUMICHEM";
//         tickerID = "@tickerID642";
//         break;
//     case "SPARC":
//         ticker = "SPARC";
//         tickerID = "@tickerID643";
//         break;
//     case "SUNPHARMA":
//         ticker = "SUNPHARMA";
//         tickerID = "@tickerID644";
//         break;
//     case "SUNTV":
//         ticker = "SUNTV";
//         tickerID = "@tickerID645";
//         break;
//     case "SUNCLAYLTD":
//         ticker = "SUNCLAYLTD";
//         tickerID = "@tickerID646";
//         break;
//     case "SUNDARMFIN":
//         ticker = "SUNDARMFIN";
//         tickerID = "@tickerID647";
//         break;
//         case "SUNDRMFAST":
//         ticker = "SUNDRMFAST";
//         tickerID = "@tickerID648";
//         break;
//     case "SUNFLAG":
//         ticker = "SUNFLAG";
//         tickerID = "@tickerID649";
//         break;
//     case "SUNTECK":
//         ticker = "SUNTECK";
//         tickerID = "@tickerID650";
//         break;
//     case "SUPRAJIT":
//         ticker = "SUPRAJIT";
//         tickerID = "@tickerID651";
//         break;
//     case "SUPREMEIND":
//         ticker = "SUPREMEIND";
//         tickerID = "@tickerID652";
//         break;
//     case "SUPPETRO":
//         ticker = "SUPPETRO";
//         tickerID = "@tickerID653";
//         break;
//     case "SURYAROSNI":
//         ticker = "SURYAROSNI";
//         tickerID = "@tickerID654";
//         break;
//     case "SURYODAY":
//         ticker = "SURYODAY";
//         tickerID = "@tickerID655";
//         break;
//     case "SUVENPHAR":
//         ticker = "SUVENPHAR";
//         tickerID = "@tickerID656";
//         break;
//     case "SUZLON":
//         ticker = "SUZLON";
//         tickerID = "@tickerID657";
//         break;
//     case "SWANENERGY":
//         ticker = "SWANENERGY";
//         tickerID = "@tickerID658";
//         break;
//     case "SWARAJENG":
//         ticker = "SWARAJENG";
//         tickerID = "@tickerID659";
//         break;
//     case "SYMPHONY":
//         ticker = "SYMPHONY";
//         tickerID = "@tickerID660";
//         break;
//     case "SYNGENE":
//         ticker = "SYNGENE";
//         tickerID = "@tickerID661";
//         break;
//     case "TCIEXP":
//         ticker = "TCIEXP";
//         tickerID = "@tickerID662";
//         break;
//     case "TCNSBRANDS":
//         ticker = "TCNSBRANDS";
//         tickerID = "@tickerID663";
//         break;
//     case "TTKPRESTIG":
//         ticker = "TTKPRESTIG";
//         tickerID = "@tickerID664";
//         break;
//         case "TVTODAY":
//         ticker = "TVTODAY";
//         tickerID = "@tickerID665";
//         break;
//     case "TV18BRDCST":
//         ticker = "TV18BRDCST";
//         tickerID = "@tickerID666";
//         break;
//     case "TVSMOTOR":
//         ticker = "TVSMOTOR";
//         tickerID = "@tickerID667";
//         break;
//     case "TVSSRICHAK":
//         ticker = "TVSSRICHAK";
//         tickerID = "@tickerID668";
//         break;
//     case "TAKE":
//         ticker = "TAKE";
//         tickerID = "@tickerID669";
//         break;
//     case "TNPL":
//         ticker = "TNPL";
//         tickerID = "@tickerID670";
//         break;
//     case "TANLA":
//         ticker = "TANLA";
//         tickerID = "@tickerID671";
//         break;
//     case "TASTYBITE":
//         ticker = "TASTYBITE";
//         tickerID = "@tickerID672";
//         break;
//     case "TATACHEM":
//         ticker = "TATACHEM";
//         tickerID = "@tickerID673";
//         break;
//     case "TATACOFFEE":
//         ticker = "TATACOFFEE";
//         tickerID = "@tickerID674";
//         break;
//     case "TATACOMM":
//         ticker = "TATACOMM";
//         tickerID = "@tickerID675";
//         break;
//     case "TCS":
//         ticker = "TCS";
//         tickerID = "@tickerID676";
//         break;
//     case "TATACONSUM":
//         ticker = "TATACONSUM";
//         tickerID = "@tickerID677";
//         break;
//     case "TATAELXSI":
//         ticker = "TATAELXSI";
//         tickerID = "@tickerID678";
//         break;
//     case "TATAINVEST":
//         ticker = "TATAINVEST";
//         tickerID = "@tickerID679";
//         break;
//     case "TATAMETALI":
//         ticker = "TATAMETALI";
//         tickerID = "@tickerID680";
//         break;
//     case "TATAMTRDVR":
//         ticker = "TATAMTRDVR";
//         tickerID = "@tickerID681";
//         break;
//         case "TATAMOTORS":
//         ticker = "TATAMOTORS";
//         tickerID = "@tickerID682";
//         break;
//     case "TATAPOWER":
//         ticker = "TATAPOWER";
//         tickerID = "@tickerID683";
//         break;
//     case "TATASTLLP":
//         ticker = "TATASTLLP";
//         tickerID = "@tickerID684";
//         break;
//     case "TATASTEEL":
//         ticker = "TATASTEEL";
//         tickerID = "@tickerID685";
//         break;
//     case "TTML":
//         ticker = "TTML";
//         tickerID = "@tickerID686";
//         break;
//     case "TEAMLEASE":
//         ticker = "TEAMLEASE";
//         tickerID = "@tickerID687";
//         break;
//     case "TECHM":
//         ticker = "TECHM";
//         tickerID = "@tickerID688";
//         break;
//     case "TECHNOE":
//         ticker = "TECHNOE";
//         tickerID = "@tickerID689";
//         break;
//     case "TEJASNET":
//         ticker = "TEJASNET";
//         tickerID = "@tickerID690";
//         break;
//     case "NIACL":
//         ticker = "NIACL";
//         tickerID = "@tickerID691";
//         break;
//     case "RAMCOCEM":
//         ticker = "RAMCOCEM";
//         tickerID = "@tickerID692";
//         break;
//     case "THERMAX":
//         ticker = "THERMAX";
//         tickerID = "@tickerID693";
//         break;
//     case "TIRUMALCHM":
//         ticker = "TIRUMALCHM";
//         tickerID = "@tickerID694";
//         break;
//     case "THOMASCOOK":
//         ticker = "THOMASCOOK";
//         tickerID = "@tickerID695";
//         break;
//     case "THYROCARE":
//         ticker = "THYROCARE";
//         tickerID = "@tickerID696";
//         break;
//     case "TIDEWATER":
//         ticker = "TIDEWATER";
//         tickerID = "@tickerID697";
//         break;
//     case "TIMETECHNO":
//         ticker = "TIMETECHNO";
//         tickerID = "@tickerID698";
//         break;
//         case "TIMKEN":
//         ticker = "TIMKEN";
//         tickerID = "@tickerID699";
//         break;
//     case "TINPLATE":
//         ticker = "TINPLATE";
//         tickerID = "@tickerID700";
//         break;
//     case "TITAN":
//         ticker = "TITAN";
//         tickerID = "@tickerID701";
//         break;
//     case "TORNTPHARM":
//         ticker = "TORNTPHARM";
//         tickerID = "@tickerID702";
//         break;
//     case "TORNTPOWER":
//         ticker = "TORNTPOWER";
//         tickerID = "@tickerID703";
//         break;
//     case "TCI":
//         ticker = "TCI";
//         tickerID = "@tickerID704";
//         break;
//     case "TRENT":
//         ticker = "TRENT";
//         tickerID = "@tickerID705";
//         break;
//     case "TRIDENT":
//         ticker = "TRIDENT";
//         tickerID = "@tickerID706";
//         break;
//     case "TRIVENI":
//         ticker = "TRIVENI";
//         tickerID = "@tickerID707";
//         break;
//     case "TRITURBINE":
//         ticker = "TRITURBINE";
//         tickerID = "@tickerID708";
//         break;
//     case "TIINDIA":
//         ticker = "TIINDIA";
//         tickerID = "@tickerID709";
//         break;
//     case "UCOBANK":
//         ticker = "UCOBANK";
//         tickerID = "@tickerID710";
//         break;
//     case "UFLEX":
//         ticker = "UFLEX";
//         tickerID = "@tickerID711";
//         break;
//     case "UPL":
//         ticker = "UPL";
//         tickerID = "@tickerID712";
//         break;
//     case "UTIAMC":
//         ticker = "UTIAMC";
//         tickerID = "@tickerID713";
//         break;
//     case "UJJIVAN":
//         ticker = "UJJIVAN";
//         tickerID = "@tickerID714";
//         break;
//     case "UJJIVANSFB":
//         ticker = "UJJIVANSFB";
//         tickerID = "@tickerID715";
//         break;
//         case "ULTRACEMCO":
//         ticker = "ULTRACEMCO";
//         tickerID = "@tickerID716";
//         break;
//     case "UNICHEMLAB":
//         ticker = "UNICHEMLAB";
//         tickerID = "@tickerID717";
//         break;
//     case "UNIONBANK":
//         ticker = "UNIONBANK";
//         tickerID = "@tickerID718";
//         break;
//     case "UBL":
//         ticker = "UBL";
//         tickerID = "@tickerID719";
//         break;
//     case "MCDOWELL-N":
//         ticker = "MCDOWELL-N";
//         tickerID = "@tickerID720";
//         break;
//     case "USHAMART":
//         ticker = "USHAMART";
//         tickerID = "@tickerID721";
//         break;
//     case "VGUARD":
//         ticker = "VGUARD";
//         tickerID = "@tickerID722";
//         break;
//     case "VMART":
//         ticker = "VMART";
//         tickerID = "@tickerID723";
//         break;
//     case "VIPIND":
//         ticker = "VIPIND";
//         tickerID = "@tickerID724";
//         break;
//     case "VSTTILLERS":
//         ticker = "VSTTILLERS";
//         tickerID = "@tickerID725";
//         break;
//     case "VRLLOG":
//         ticker = "VRLLOG";
//         tickerID = "@tickerID726";
//         break;
//     case "VSTIND":
//         ticker = "VSTIND";
//         tickerID = "@tickerID727";
//         break;
//     case "WABAG":
//         ticker = "WABAG";
//         tickerID = "@tickerID728";
//         break;
//     case "VAIBHAVGBL":
//         ticker = "VAIBHAVGBL";
//         tickerID = "@tickerID729";
//         break;
//     case "VAKRANGEE":
//         ticker = "VAKRANGEE";
//         tickerID = "@tickerID730";
//         break;
//     case "VALIANTORG":
//         ticker = "VALIANTORG";
//         tickerID = "@tickerID731";
//         break;
//     case "VTL":
//         ticker = "VTL";
//         tickerID = "@tickerID732";
//         break;
//         case "VARROC":
//         ticker = "VARROC";
//         tickerID = "@tickerID733";
//         break;
//     case "VBL":
//         ticker = "VBL";
//         tickerID = "@tickerID734";
//         break;
//     case "VEDL":
//         ticker = "VEDL";
//         tickerID = "@tickerID735";
//         break;
//     case "VENKEYS":
//         ticker = "VENKEYS";
//         tickerID = "@tickerID736";
//         break;
//     case "VESUVIUS":
//         ticker = "VESUVIUS";
//         tickerID = "@tickerID737";
//         break;
//     case "VINATIORGA":
//         ticker = "VINATIORGA";
//         tickerID = "@tickerID738";
//         break;
//     case "VINDHYATEL":
//         ticker = "VINDHYATEL";
//         tickerID = "@tickerID739";
//         break;
//     case "IDEA":
//         ticker = "IDEA";
//         tickerID = "@tickerID740";
//         break;
//     case "VOLTAMP":
//         ticker = "VOLTAMP";
//         tickerID = "@tickerID741";
//         break;
//     case "VOLTAS":
//         ticker = "VOLTAS";
//         tickerID = "@tickerID742";
//         break;
//     case "WABCOINDIA":
//         ticker = "WABCOINDIA";
//         tickerID = "@tickerID743";
//         break;
//     case "WELCORP":
//         ticker = "WELCORP";
//         tickerID = "@tickerID744";
//         break;
//     case "WELENT":
//         ticker = "WELENT";
//         tickerID = "@tickerID745";
//         break;
//     case "WELSPUNIND":
//         ticker = "WELSPUNIND";
//         tickerID = "@tickerID746";
//         break;
//     case "WSTCSTPAPR":
//         ticker = "WSTCSTPAPR";
//         tickerID = "@tickerID747";
//         break;
//     case "WESTLIFE":
//         ticker = "WESTLIFE";
//         tickerID = "@tickerID748";
//         break;
//     case "WHEELS":
//         ticker = "WHEELS";
//         tickerID = "@tickerID749";
//         break;
//         case "WHIRLPOOL":
//         ticker = "WHIRLPOOL";
//         tickerID = "@tickerID750";
//         break;
//     case "WIPRO":
//         ticker = "WIPRO";
//         tickerID = "@tickerID751";
//         break;
//     case "WOCKPHARMA":
//         ticker = "WOCKPHARMA";
//         tickerID = "@tickerID752";
//         break;
//     case "WONDERLA":
//         ticker = "WONDERLA";
//         tickerID = "@tickerID753";
//         break;
//     case "YESBANK":
//         ticker = "YESBANK";
//         tickerID = "@tickerID754";
//         break;
//     case "ZEEL":
//         ticker = "ZEEL";
//         tickerID = "@tickerID755";
//         break;
//     case "ZENSARTECH":
//         ticker = "ZENSARTECH";
//         tickerID = "@tickerID756";
//         break;
//     case "ZYDUSWELL":
//         ticker = "ZYDUSWELL";
//         tickerID = "@tickerID757";
//         break;
//     case "ECLERX":
//         ticker = "ECLERX";
//         tickerID = "@tickerID758";
//         break;
//     case "DOLLAR":
//         ticker = "DOLLAR";
//         tickerID = "@tickerID759";
//         break;
//     // case "LALPATHLAB":
//     //     ticker = "LALPATHLAB";
//     //     tickerID = "@tickerID760";
//     //     break;
//     // case "DRREDDY":
//     //     ticker = "DRREDDY";
//     //     tickerID = "@tickerID761";
//     //     break;
//     // case "DREDGECORP":
//     //     ticker = "DREDGECORP";
//     //     tickerID = "@tickerID762";
//     //     break;
//     // case "EIDPARRY":
//     //     ticker = "EIDPARRY";
//     //     tickerID = "@tickerID763";
//     //     break;
//     // case "EIHOTEL":
//     //     ticker = "EIHOTEL";
//     //     tickerID = "@tickerID764";
//     //     break;

        
//         // Add more cases as needed
//         default:
//             console.log("Label not recognized.");
//             break;
//     }
    
//     const urlliveData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/markets-data/live-price/v2?exchangeCode=BSE&tickerId=${tickerID}`;
//     // const urlshareholdingData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/api/v2/ibesData/${tickerID}`;
//     // const urlfinancialData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/v2/getShareHoldingsDetailByTickerIdAndType?tickerId=${tickerID}&type=PieChartDetails`;

//     const iframeSWOTUrl = `https://trendlyne.com/web-widget/swot-widget/Poppins/${ticker}/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`;
//     const iframechecklistUrl = `https://trendlyne.com/web-widget/checklist-widget/Poppins/${ticker}/?posCol=00A25B&amp;primaryCol=006AFF&amp;negCol=EB3B00&amp;neuCol=F7941E%22`;
//     const iframeqvtUrl = `https://trendlyne.com/web-widget/qvt-widget/Poppins/${ticker}/?posCol=00A25B&amp;primaryCol=006AFF&amp;negCol=EB3B00&amp;neuCol=F7941E%22`;

//     useEffect(() => {
//         fetchAndDisplayLivePriceData();
//         fetchFinancialData();
//         updateShareholdingsData();
//     }, []);

//     return (
//         <div>
//             <div id="live-price-data">
//             <h2>Live Data Of {livePriceData.displayName}</h2>
//                     <p>Ticker ID: {livePriceData.tickerId}</p>
//                     <p>RIC: {livePriceData.ric}</p>
//                     <p>Price: {livePriceData.price}</p>
//                     <p>Percent Change: {livePriceData.percentChange}</p>
//                     <p>Net Change: {livePriceData.netChange}</p>
//                     <p>High: {livePriceData.high}</p>
//                     <p>Low: {livePriceData.low}</p>
//                     <p>Open: {livePriceData.open}</p>
//                     <p>Volume: {livePriceData.volume}</p>
//                     <p>Display Name: {livePriceData.displayName}</p>
//                     <p>Date: {livePriceData.date}</p>
//                     <p>Time: {livePriceData.time}</p>
//                     <p>Price Arrow: {livePriceData.priceArrow}</p>
//                     <p>Close: {livePriceData.close}</p>
//                     <p>Lot Size: {livePriceData.lotSize}</p>
//                     <p>Market Cap: {livePriceData.marketCap}</p>
//                     <p>Short Term Trends: {livePriceData.shortTermTrends}</p>
//                     <p>Long Term Trends: {livePriceData.longTermTrends}</p>
//                     <p>Overall Rating: {livePriceData.overallRating}</p>
//                     <p>Year Low: {livePriceData.ylow}</p>
//                     <p>Year High: {livePriceData.yhigh}</p>
//                 {/* Add other live price data fields */}
//             </div>
//             <div>
//             <iframe src={iframeSWOTUrl} frameborder="0" allowtransparency="true" className="trendlyne-embedded swot-widget" style={{ width: '550px', maxWidth: '100%', height: '330px' }}></iframe>
//             </div>
//             <div id="shareholdings-data">
//                 <h2>Shareholdings Breakdown</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Category</th>
//                             <th>No. of Shares</th>
//                             <th>Percentage</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {shareholdingsData.map(entry => (
//                             <tr key={entry.category}>
//                                 <td>{entry.category}</td>
//                                 <td>{entry.noOfShares}</td>
//                                 <td>{entry.percentage}%</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <div>
//             <iframe
//     id="trendlyne-widget-2"
//     src={iframechecklistUrl}
//     frameBorder="0"
//     allowTransparency="true"
//     className="trendlyne-embedded checklist-widget"
//     style={{ width: '550px', maxWidth: '100%', height: '550px' }}
// ></iframe>
//             </div>
//             {/* Add other iframes and data displays */}
//             <div>

//             {financialData ? (
//                 <div id="financial-data">
//                     <h2>Financial Data</h2>
//                     <h3>Cash Flow</h3>
//                     {/* <ul>
//                         {financialData.cashFlowSheet?.cashFlowAnnuals?.map(entry => (
//                             <li key={entry.year}>Year: {entry.year - 2}, Cash Flow Per Share: {entry.cashFlowPerShare}</li>
//                         ))}
//                     </ul> */}
//                     <ul>
//                         {financialData.cashFlowSheet?.cashFlowAnnuals?.map(entry => (
//                             <li key={entry.year}>Year: {entry.year - 2}, Cash Flow Per Share: {entry.cashFlowPerShare}</li>
//                         ))}
//                     </ul>
//                     <h3>Valuation</h3>
//                     <ul>
//                         {financialData.valuationSheet?.valuationAnnuals?.map(entry => (
//                             <li key={entry.year}>Year: {entry.year - 2}, ROA: {entry.ROA}, ROE: {entry.ROE}</li>
//                         ))}
//                     </ul>
//                     <h3>Balance Sheet</h3>
//                     <ul>
//                         {financialData.balanceSheet?.balanceSheetAnnualPeriods?.map(entry => (
//                             <li key={entry.year}>Year: {entry.year - 2}, Net Asset Value: {entry.netAssetValue}, Net Debt: {entry.netDebt}</li>
//                         ))}
//                     </ul>
//                     <h3>Income Sheet</h3>
//                     <ul>
//                         {financialData.incomeSheet?.annualPeriods?.map(entry => (
//                             <li key={entry.year}>Year: {entry.year - 2}, Revenue: {entry.revenue}, Net Income: {entry.netIncome}</li>
//                         ))}
//                     </ul>
//                     {/* Render other sections similarly */}
//                 </div>
//             ) : (
//                 <p>Loading financial data...</p>
//             )}
        

//             </div>
//             <div>
//             <iframe src={iframeqvtUrl} frameborder="0" allowtransparency="true" className="trendlyne-embedded qvt-widget" style={{ width: '550px', maxWidth: '100%', height: '330px' }}></iframe>
//             </div>
//         </div>
//     );
// }

// export default StockAbout;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { API } from "../../service/api";

function StockAbout() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const label = params.get('stock');
    const stockticker = params.get('stockphase');
    const [livePriceData, setLivePriceData] = useState({});
    const [financialData, setFinancialData] = useState({});
    const [shareholdingsData, setShareholdingsData] = useState([]);
    const [stockData, setStockData] = useState([]);

    

    // urlliveData
    async function fetchAndDisplayLivePriceData() {
        try {
            const response = await fetch(urlliveData);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setLivePriceData(data);
        } catch (error) {
            console.error('Error fetching live price data:', error);
        }
    }

    const fetchFinancialData = async () => {
        try {
            const response = await fetch(urlfinancialData);
            if (!response.ok) {
                throw new Error('Failed to fetch financial data');
            }
            const data = await response.json();
            setFinancialData(data);
        } catch (error) {
            console.error('Error fetching financial data:', error);
        }
    };

    // urlshareholdingData
    function updateShareholdingsData() {
        fetch(urlshareholdingData)
            .then(response => response.json())
            .then(data => {
                const dataArray = Object.values(data);
                console.log(dataArray); 
                setShareholdingsData(dataArray);
            })
            .catch(error => {
                console.error('Error fetching shareholdings data:', error);
            });
    }


    let ticker;
    let tickerID;

    // Assuming row.revenue is a variable you're expecting from the URL parameter
    switch (label) {
        case "Nifty_50":
            ticker = "";
            tickerID = "I0002";
            break;
        case "Nifty_Bank":
            ticker = "";
            tickerID = "I0006";
            break;
        case "Sensex":
            ticker = "";
            tickerID = "I0001";
            break;
        case "Nifty_500":
            ticker = "";
            tickerID = "I0011";
            break;
        case "NIFTY_FIN_SERVICE":
            ticker = "";
            tickerID = "I0022";
            break;
        case "BHEL":
            ticker = "BHEL";
            tickerID = "";
            break;
        case "BTC / INR":
            ticker = "BTC / INR";
            tickerID = "";
            break;
        case "3MINDIA":
            ticker = "3MINDIA";
            tickerID = "S0003818";
            break;
        case "ABB":
            ticker = "ABB";
            tickerID = "S0003154";
            break;
        case "ACC":
            ticker = "ACC";
            tickerID = "S0003128";
            break;
        case "ADFFOODS":
            ticker = "ADFFOODS";
            tickerID = "S0003526";
            break;
        case "AIAENG":
            ticker = "AIAENG";
            tickerID = "S0003896";
            break;
        case "APLAPOLLO":
            ticker = "APLAPOLLO";
            tickerID = "S0003203";
            break;
        case "AUBANK":
            ticker = "AUBANK";
            tickerID = "S0003247";
            break;
        case "AARTIDRUGS":
            ticker = "AARTIDRUGS";
            tickerID = "S0003210";
            break;
        case "AARTIIND":
            ticker = "AARTIIND";
            tickerID = "S0003340";
            break;
        case "AAVAS":
            ticker = "AAVAS";
            tickerID = "S0003281";
            break;
        case "ABBOTINDIA":
            ticker = "ABBOTINDIA";
            tickerID = "S0003226";
            break;
    case "ACCELYA":
        ticker = "ACCELYA";
        tickerID = "S0003882";
        break;
    case "ACE":
        ticker = "ACE";
        tickerID = "";
        break;
    case "ADANIENT":
        ticker = "ADANIENT";
        tickerID = "S0003094";
        break;
    case "ADANIGREEN":
        ticker = "ADANIGREEN";
        tickerID = "S0003149";
        break;
    case "ADANIPORTS":
        ticker = "ADANIPORTS";
        tickerID = "S0003086";
        break;
    case "ATGL":
        ticker = "ATGL";
        tickerID = "S0003156";
        break;
    case "ADANITRANS":
        ticker = "ADANITRANS";
        tickerID = "";
        break;
    case "ABCAPITAL":
        ticker = "ABCAPITAL";
        tickerID = "S0003291";
        break;
    case "ABFRL":
        ticker = "ABFRL";
        tickerID = "S0003323";
        break;
    case "ADVENZYMES":
        ticker = "ADVENZYMES";
        tickerID = "S0003391";
        break;
    case "AEGISCHEM":
        ticker = "AEGISCHEM";
        tickerID = "S0003629";
        break;
    case "AFFLE":
        ticker = "AFFLE";
        tickerID = "S0003153";
        break;
    case "ATFL":
        ticker = "ATFL";
        tickerID = "S0004026";
        break;
    case "AJANTPHARM":
        ticker = "AJANTPHARM";
        tickerID = "S0003497";
        break;
    case "ALEMBICLTD":
        ticker = "ALEMBICLTD";
        tickerID = "S0003627";
        break;
    case "APLLTD":
        ticker = "APLLTD";
        tickerID = "S0003266";
        break;
    case "ALKEM":
        ticker = "ALKEM";
        tickerID = "S0003287";
        break;
    case "ALKYLAMINE":
        ticker = "ALKYLAMINE";
        tickerID = "S0003419";
        break;
    case "ALLCARGO":
        ticker = "ALLCARGO";
        tickerID = "S0003327";
        break;
    case "ALOKINDS":
        ticker = "ALOKINDS";
        tickerID = "S0003169";
        break;
    case "AMARAJABAT":
        ticker = "AMARAJABAT";
        tickerID = "";
        break;
    case "AMBER":
        ticker = "AMBER";
        tickerID = "S0003489";
        break;
    case "AMBUJACEM":
        ticker = "AMBUJACEM";
        tickerID = "S0003102";
        break;
    case "AMRUTANJAN":
        ticker = "AMRUTANJAN";
        tickerID = "S0003702";
        break;
    case "ANANTRAJ":
        ticker = "ANANTRAJ";
        tickerID = "S0003808";
        break;
    case "ANDHRSUGAR":
        ticker = "ANDHRSUGAR";
        tickerID = "S0003681";
        break;
    case "ANGELONE":
        ticker = "ANGELONE";
        tickerID = "S0003556";
        break;
    case "ANURAS":
        ticker = "ANURAS";
        tickerID = "S0005091";
        break;
    case "APARINDS":
        ticker = "APARINDS";
        tickerID = "S0003942";
        break;
    case "APCOTEXIND":
        ticker = "APCOTEXIND";
        tickerID = "S0004084";
        break;
    case "APOLLOHOSP":
        ticker = "APOLLOHOSP";
        tickerID = "S0003104";
        break;
    case "APOLLOTYRE":
        ticker = "APOLLOTYRE";
        tickerID = "S0003055";
        break;
    case "ARVINDFASN":
        ticker = "ARVINDFASN";
        tickerID = "S0003482";
        break;
    case "ARVIND":
        ticker = "ARVIND";
        tickerID = "S0003215";
        break;
    case "ASAHIINDIA":
        ticker = "ASAHIINDIA";
        tickerID = "S0003995";
        break;
    case "ASHIANA":
        ticker = "ASHIANA";
        tickerID = "S0003949";
        break;
    case "ASHOKLEY":
        ticker = "ASHOKLEY";
        tickerID = "S0003047";
        break;
    case "ASHOKA":
        ticker = "ASHOKA";
        tickerID = "S0003308";
        break;
    case "ASIANPAINT":
        ticker = "ASIANPAINT";
        tickerID = "S0003079";
        break;
    case "ASTEC":
        ticker = "ASTEC";
        tickerID = "S0003131";
        break;
    case "ASTERDM":
        ticker = "ASTERDM";
        tickerID = "S0003775";
        break;
    case "ASTRAMICRO":
        ticker = "ASTRAMICRO";
        tickerID = "S0003704";
        break;
    case "ASTRAZEN":
        ticker = "ASTRAZEN";
        tickerID = "S0003407";
        break;
    case "ASTRAL":
        ticker = "ASTRAL";
        tickerID = "S0003532";
        break;
    case "ATUL":
        ticker = "ATUL";
        tickerID = "S0003515";
        break;
    case "AUROPHARMA":
        ticker = "AUROPHARMA";
        tickerID = "S0003132";
        break;
    case "AUTOAXLES":
        ticker = "AUTOAXLES";
        tickerID = "S0003737";
        break;
    case "AVANTIFEED":
        ticker = "AVANTIFEED";
        tickerID = "S0003236";
        break;
    case "DMART":
        ticker = "DMART";
        tickerID = "S0003106";
        break;
    case "AXISBANK":
        ticker = "AXISBANK";
        tickerID = "S0003048";
        break;
    case "BASF":
        ticker = "BASF";
        tickerID = "S0003582";
        break;
    case "BEML":
        ticker = "BEML";
        tickerID = "S0003136";
        break;
    case "BFINVEST":
        ticker = "BFINVEST";
        tickerID = "S0003705";
        break;
    case "BFUTILITIE":
        ticker = "BFUTILITIE";
        tickerID = "S0003364";
        break;
    case "BLS":
        ticker = "BLS";
        tickerID = "S0004039";
        break;
    case "BSE":
        ticker = "BSE";
        tickerID = "S0004751";
        break;
    case "BAJAJ-AUTO":
        ticker = "BAJAJ-AUTO";
        tickerID = "S0003120";
        break;
    case "BAJAJCON":
        ticker = "BAJAJCON";
        tickerID = "S0003292";
        break;
    case "BAJAJELEC":
        ticker = "BAJAJELEC";
        tickerID = "S0003219";
        break;
    case "BAJFINANCE":
        ticker = "BAJFINANCE";
        tickerID = "S0003015";
        break;
    case "BAJAJFINSV":
        ticker = "BAJAJFINSV";
        tickerID = "S0003036";
        break;
    case "BAJAJHIND":
        ticker = "BAJAJHIND";
        tickerID = "S0003382";
        break;
    case "BAJAJHLDNG":
        ticker = "BAJAJHLDNG";
        tickerID = "S0003388";
        break;
    case "BALAMINES":
        ticker = "BALAMINES";
        tickerID = "S0003447";
        break;
    case "BALKRISIND":
        ticker = "BALKRISIND";
        tickerID = "S0003212";
        break;
    case "BALMLAWRIE":
        ticker = "BALMLAWRIE";
        tickerID = "S0003589";
        break;
    case "BALRAMCHIN":
        ticker = "BALRAMCHIN";
        tickerID = "S0003279";
        break;
    case "BANCOINDIA":
        ticker = "BANCOINDIA";
        tickerID = "S0003505";
        break;
    case "BANDHANBNK":
        ticker = "BANDHANBNK";
        tickerID = "S0003080";
        break;
    case "BANKBARODA":
        ticker = "BANKBARODA";
        tickerID = "S0003050";
        break;
    case "BANKINDIA":
        ticker = "BANKINDIA";
        tickerID = "S0003270";
        break;
    case "MAHABANK":
        ticker = "MAHABANK";
        tickerID = "S0003537";
        break;
    case "BARBEQUE":
        ticker = "BARBEQUE";
        tickerID = "S0005083";
        break;
    case "BATAINDIA":
        ticker = "BATAINDIA";
        tickerID = "S0003108";
        break;
    case "BAYERCROP":
        ticker = "BAYERCROP";
        tickerID = "S0003516";
        break;
    case "BERGEPAINT":
        ticker = "BERGEPAINT";
        tickerID = "S0003276";
        break;
    case "BEPL":
        ticker = "BEPL";
        tickerID = "S0003325";
        break;
    case "BDL":
        ticker = "BDL";
        tickerID = "S0003345";
        break;
    case "BEL":
        ticker = "BEL";
        tickerID = "S0003091";
        break;
    case "BHARATFORG":
        ticker = "BHARATFORG";
        tickerID = "S0003101";
        break;
    case "BHEL":
        ticker = "BHEL";
        tickerID = "S0003073";
        break;
    case "BPCL":
        ticker = "BPCL";
        tickerID = "S0003060";
        break;
    case "BHARATRAS":
        ticker = "BHARATRAS";
        tickerID = "S0003850";
        break;
    case "BHARTIARTL":
        ticker = "BHARTIARTL";
        tickerID = "S0003039";
        break;
    case "BIOCON":
        ticker = "BIOCON";
        tickerID = "S0003121";
        break;
    case "BIRLACORPN":
        ticker = "BIRLACORPN";
        tickerID = "S0003350";
        break;
    case "BSOFT":
        ticker = "BSOFT";
        tickerID = "S0003117";
        break;
    case "BLISSGVS":
        ticker = "BLISSGVS";
        tickerID = "S0003198";
        break;
    case "BLUEDART":
        ticker = "BLUEDART";
        tickerID = "S0003588";
        break;
    case "BLUESTARCO":
        ticker = "BLUESTARCO";
        tickerID = "S0003665";
        break;
    case "BODALCHEM":
        ticker = "BODALCHEM";
        tickerID = "S0003560";
        break;
    case "BBTC":
        ticker = "BBTC";
        tickerID = "S0003601";
        break;
    case "BOMDYEING":
        ticker = "BOMDYEING";
        tickerID = "S0003148";
        break;
    case "BOROLTD":
        ticker = "BOROLTD";
        tickerID = "S0003428";
        break;
    case "BORORENEW":
        ticker = "BORORENEW";
        tickerID = "S0003221";
        break;
    case "BOSCHLTD":
        ticker = "BOSCHLTD";
        tickerID = "S0003214";
        break;
    case "BRIGADE":
        ticker = "BRIGADE";
        tickerID = "S0003778";
        break;
    case "BRITANNIA":
        ticker = "BRITANNIA";
        tickerID = "S0003082";
        break;
    case "BURGERKING":
        ticker = "BURGERKING";
        tickerID = "";
        break;
    case "CARERATING":
        ticker = "CARERATING";
        tickerID = "S0003491";
        break;
    case "CCL":
        ticker = "CCL";
        tickerID = "S0003655";
        break;
    case "CESC":
        ticker = "CESC";
        tickerID = "S0003635";
        break;
    case "CGPOWER":
        ticker = "CGPOWER";
        tickerID = "S0003135";
        break;
    case "CRISIL":
        ticker = "CRISIL";
        tickerID = "S0003838";
        break;
    case "CSBBANK":
        ticker = "CSBBANK";
        tickerID = "S0003267";
        break;
    case "CADILAHC":
        ticker = "CADILAHC";
        tickerID = "";
        break;
    case "CAMLINFINE":
        ticker = "CAMLINFINE";
        tickerID = "S0003493";
        break;
    case "CANFINHOME":
        ticker = "CANFINHOME";
        tickerID = "S0003293";
        break;
    case "CANBK":
        ticker = "CANBK";
        tickerID = "S0003040";
        break;
    case "CAPACITE":
        ticker = "CAPACITE";
        tickerID = "S0003811";
        break;
    case "CAPLIPOINT":
        ticker = "CAPLIPOINT";
        tickerID = "S0003462";
        break;
    case "CGCL":
        ticker = "CGCL";
        tickerID = "S0003232";
        break;
    case "CARBORUNIV":
        ticker = "CARBORUNIV";
        tickerID = "S0003671";
        break;
    case "CASTROLIND":
        ticker = "CASTROLIND";
        tickerID = "S0003319";
        break;
    case "CEATLTD":
        ticker = "CEATLTD";
        tickerID = "S0003322";
        break;
    case "CENTRALBK":
        ticker = "CENTRALBK";
        tickerID = "S0003235";
        break;
    case "CDSL":
        ticker = "CDSL";
        tickerID = "S0004750";
        break;
    case "CENTRUM":
        ticker = "CENTRUM";
        tickerID = "S0003675";
        break;
    case "CENTURYPLY":
        ticker = "CENTURYPLY";
        tickerID = "S0003557";
        break;
    case "CENTURYTEX":
        ticker = "CENTURYTEX";
        tickerID = "S0003188";
        break;
    case "CERA":
        ticker = "CERA";
        tickerID = "S0003752";
        break;
    case "CHALET":
        ticker = "CHALET";
        tickerID = "S0003360";
        break;
    case "CHAMBLFERT":
        ticker = "CHAMBLFERT";
        tickerID = "S0003207";
        break;
    case "CHEMCON":
        ticker = "CHEMCON";
        tickerID = "S0003357";
        break;
    case "CHENNPETRO":
        ticker = "CHENNPETRO";
        tickerID = "S0003375";
        break;
    case "CHOLAHLDNG":
        ticker = "CHOLAHLDNG";
        tickerID = "S0004121";
        break;
    case "CHOLAFIN":
        ticker = "CHOLAFIN";
        tickerID = "S0003157";
        break;
    case "CIGNITITEC":
        ticker = "CIGNITITEC";
        tickerID = "S0003980";
        break;
    case "CIPLA":
        ticker = "CIPLA";
        tickerID = "S0003049";
        break;
    case "CUB":
        ticker = "CUB";
        tickerID = "S0003233";
        break;
    case "CLNINDIA":
        ticker = "CLNINDIA";
        tickerID = "";
        break;
    case "COALINDIA":
        ticker = "COALINDIA";
        tickerID = "S0003044";
        break;
    case "COCHINSHIP":
        ticker = "COCHINSHIP";
        tickerID = "S0003401";
        break;
    case "COFORGE":
        ticker = "COFORGE";
        tickerID = "S0003274";
        break;
    case "COLPAL":
        ticker = "COLPAL";
        tickerID = "S0003140";
        break;
    case "CAMS":
        ticker = "CAMS";
        tickerID = "S0003252";
        break;
    case "CONFIPET":
        ticker = "CONFIPET";
        tickerID = "S0003538";
        break;
    case "CONCOR":
        ticker = "CONCOR";
        tickerID = "S0003164";
        break;
    case "COROMANDEL":
        ticker = "COROMANDEL";
        tickerID = "S0003444";
        break;
    case "COSMOFILMS":
        ticker = "COSMOFILMS";
        tickerID = "";
        break;
    case "CRAFTSMAN":
        ticker = "CRAFTSMAN";
        tickerID = "S0005090";
        break;
    case "CREDITACC":
        ticker = "CREDITACC";
        tickerID = "S0003567";
        break;
    case "CROMPTON":
        ticker = "CROMPTON";
        tickerID = "S0003163";
        break;
    case "CUMMINSIND":
        ticker = "CUMMINSIND";
        tickerID = "S0003204";
        break;
    case "CYIENT":
        ticker = "CYIENT";
        tickerID = "S0003228";
        break;
    case "DBCORP":
        ticker = "DBCORP";
        tickerID = "S0003975";
        break;
    case "DCBBANK":
        ticker = "DCBBANK";
        tickerID = "S0003269";
        break;
    case "DCMSHRIRAM":
        ticker = "DCMSHRIRAM";
        tickerID = "S0003908";
        break;
    case "DFMFOODS":
        ticker = "DFMFOODS";
        tickerID = "";
        break;
    case "DLF":
        ticker = "DLF";
        tickerID = "S0003034";
        break;
    case "DABUR":
        ticker = "DABUR";
        tickerID = "S0003129";
        break;
    case "DALBHARAT":
        ticker = "DALBHARAT";
        tickerID = "S0003494";
        break;
    case "DALMIASUG":
        ticker = "DALMIASUG";
        tickerID = "S0003664";
        break;
        case "DEEPAKFERT":
        ticker = "DEEPAKFERT";
        tickerID = "";
        break;
    case "DEEPAKNTR":
        ticker = "DEEPAKNTR";
        tickerID = "S0003125";
        break;
    case "DELTACORP":
        ticker = "DELTACORP";
        tickerID = "S0003109";
        break;
    case "DEN":
        ticker = "DEN";
        tickerID = "";
        break;
    case "DHAMPURSUG":
        ticker = "DHAMPURSUG";
        tickerID = "S0003413";
        break;
    case "DHANI":
        ticker = "DHANI";
        tickerID = "S0003261";
        break;
    case "DHANUKA":
        ticker = "DHANUKA";
        tickerID = "S0003779";
        break;
    case "DBL":
        ticker = "DBL";
        tickerID = "S0003332";
        break;
    case "DISHTV":
        ticker = "DISHTV";
        tickerID = "S0003184";
        break;
    case "DCAL":
        ticker = "DCAL";
        tickerID = "S0003503";
        break;
    case "DIVISLAB":
        ticker = "DIVISLAB";
        tickerID = "S0003081";
        break;
    case "DIXON":
        ticker = "DIXON";
        tickerID = "S0003180";
        break;
    case "DOLATALGO":
        ticker = "DOLATALGO";
        tickerID = "S0003527";
        break;
    case "DOLLAR":
        ticker = "DOLLAR";
        tickerID = "S0003324";
        break;
    case "LALPATHLAB":
        ticker = "LALPATHLAB";
        tickerID = "S0003374";
        break;
    case "DRREDDY":
        ticker = "DRREDDY";
        tickerID = "S0003058";
        break;
    case "DREDGECORP":
        ticker = "DREDGECORP";
        tickerID = "S0003436";
        break;
    case "EIDPARRY":
        ticker = "EIDPARRY";
        tickerID = "S0003446";
        break;
    case "EIHOTEL":
        ticker = "EIHOTEL";
        tickerID = "S0003633";
        break;
    case "EPL":
        ticker = "EPL";
        tickerID = "S0003218";
        break;
    case "ESABINDIA":
        ticker = "ESABINDIA";
        tickerID = "S0003478";
        break;
    case "EASEMYTRIP":
        ticker = "EASEMYTRIP";
        tickerID = "S0005094";
        break;
    case "EDELWEISS":
        ticker = "EDELWEISS";
        tickerID = "S0003463";
        break;
    case "EICHERMOT":
        ticker = "EICHERMOT";
        tickerID = "S0003093";
        break;
    case "ELECTCAST":
        ticker = "ELECTCAST";
        tickerID = "S0004001";
        break;
    case "ELGIEQUIP":
        ticker = "ELGIEQUIP";
        tickerID = "S0003477";
        break;
    case "EMAMILTD":
        ticker = "EMAMILTD";
        tickerID = "S0003370";
        break;
    case "ENDURANCE":
        ticker = "ENDURANCE";
        tickerID = "S0003632";
        break;
    case "ENGINERSIN":
        ticker = "ENGINERSIN";
        tickerID = "S0003234";
        break;
    case "EQUITAS":
        ticker = "EQUITAS";
        tickerID = "";
        break;
    case "EQUITASBNK":
        ticker = "EQUITASBNK";
        tickerID = "";
        break;
    case "ERIS":
        ticker = "ERIS";
        tickerID = "S0003417";
        break;
    case "ESCORTS":
        ticker = "ESCORTS";
        tickerID = "S0003096";
        break;
    case "EVEREADY":
        ticker = "EVEREADY";
        tickerID = "S0003468";
        break;
    case "EXCELINDUS":
        ticker = "EXCELINDUS";
        tickerID = "S0003958";
        break;
    case "EXIDEIND":
        ticker = "EXIDEIND";
        tickerID = "S0003202";
        break;
    case "FDC":
        ticker = "FDC";
        tickerID = "S0003691";
        break;
    case "FEDERALBNK":
        ticker = "FEDERALBNK";
        tickerID = "S0003070";
        break;
    case "FMGOETZE":
        ticker = "FMGOETZE";
        tickerID = "S0003566";
        break;
    case "FACT":
        ticker = "FACT";
        tickerID = "S0003889";
        break;
    case "FILATEX":
        ticker = "FILATEX";
        tickerID = "S0003661";
        break;
    case "FINEORG":
        ticker = "FINEORG";
        tickerID = "S0003634";
        break;
    case "FINCABLES":
        ticker = "FINCABLES";
        tickerID = "S0003583";
        break;
    case "FINPIPE":
        ticker = "FINPIPE";
        tickerID = "S0003676";
        break;
    case "FSL":
        ticker = "FSL";
        tickerID = "S0003260";
        break;
    case "FORCEMOT":
        ticker = "FORCEMOT";
        tickerID = "S0003411";
        break;
    case "FORTIS":
        ticker = "FORTIS";
        tickerID = "S0003296";
        break;
    case "FCONSUMER":
        ticker = "FCONSUMER";
        tickerID = "S0003389";
        break;
    case "FRETAIL":
        ticker = "FRETAIL";
        tickerID = "S0003211";
        break;
    case "GMBREW":
        ticker = "GMBREW";
        tickerID = "S0003977";
        break;
    case "GAIL":
        ticker = "GAIL";
        tickerID = "S0003063";
        break;
    case "GEPIL":
        ticker = "GEPIL";
        tickerID = "S0003271";
        break;
    case "GET&D":
        ticker = "GET&D";
        tickerID = "S0003710";
        break;
    case "GMMPFAUDLR":
        ticker = "GMMPFAUDLR";
        tickerID = "S0003172";
        break;
    case "GTPL":
        ticker = "GTPL";
        tickerID = "S0003952";
        break;
    case "GABRIEL":
        ticker = "GABRIEL";
        tickerID = "S0003891";
        break;
    case "GALAXYSURF":
        ticker = "GALAXYSURF";
        tickerID = "S0003409";
        break;
    case "GRSE":
        ticker = "GRSE";
        tickerID = "S0003361";
        break;
    case "GARFIBRES":
        ticker = "GARFIBRES";
        tickerID = "S0003898";
        break;
    case "GATI":
        ticker = "GATI";
        tickerID = "";
        break;
    case "GICRE":
        ticker = "GICRE";
        tickerID = "S0003552";
        break;
    case "GENUSPOWER":
        ticker = "GENUSPOWER";
        tickerID = "S0003924";
        break;
    case "GEOJITFSL":
        ticker = "GEOJITFSL";
        tickerID = "S0003654";
        break;
    case "GILLETTE":
        ticker = "GILLETTE";
        tickerID = "S0003465";
        break;
    case "GLAND":
        ticker = "GLAND";
        tickerID = "S0003201";
        break;
    case "GLAXO":
        ticker = "GLAXO";
        tickerID = "S0003695";
        break;
    case "GLENMARK":
        ticker = "GLENMARK";
        tickerID = "S0003191";
        break;
    case "GPIL":
        ticker = "GPIL";
        tickerID = "S0003735";
        break;
    case "GODFRYPHLP":
        ticker = "GODFRYPHLP";
        tickerID = "S0003315";
        break;
    case "GODREJAGRO":
        ticker = "GODREJAGRO";
        tickerID = "S0003312";
        break;
    case "GODREJCP":
        ticker = "GODREJCP";
        tickerID = "S0003255";
        break;
    case "GODREJIND":
        ticker = "GODREJIND";
        tickerID = "S0003473";
        break;
    case "GODREJPROP":
        ticker = "GODREJPROP";
        tickerID = "S0003146";
        break;
    case "GOODYEAR":
        ticker = "GOODYEAR";
        tickerID = "S0003367";
        break;
    case "GRANULES":
        ticker = "GRANULES";
        tickerID = "S0003224";
        break;
    case "GRAPHITE":
        ticker = "GRAPHITE";
        tickerID = "S0003162";
        break;
    case "GRASIM":
        ticker = "GRASIM";
        tickerID = "S0003182";
        break;
    case "GESHIP":
        ticker = "GESHIP";
        tickerID = "S0003592";
        break;
    case "GREAVESCOT":
        ticker = "GREAVESCOT";
        tickerID = "S0003268";
        break;
    case "GREENPANEL":
        ticker = "GREENPANEL";
        tickerID = "S0003754";
        break;
    case "GREENPLY":
        ticker = "GREENPLY";
        tickerID = "S0003714";
        break;
    case "GRINDWELL":
        ticker = "GRINDWELL";
        tickerID = "S0003998";
        break;
    case "GUJALKALI":
        ticker = "GUJALKALI";
        tickerID = "S0003539";
        break;
    case "GAEL":
        ticker = "GAEL";
        tickerID = "S0003673";
        break;
    case "FLUOROCHEM":
        ticker = "FLUOROCHEM";
        tickerID = "S0003631";
        break;
    case "GUJGASLTD":
        ticker = "GUJGASLTD";
        tickerID = "S0003347";
        break;
    case "GIPCL":
        ticker = "GIPCL";
        tickerID = "S0003346";
        break;
    case "GMDCLTD":
        ticker = "GMDCLTD";
        tickerID = "S0003302";
        break;
    case "GNFC":
        ticker = "GNFC";
        tickerID = "S0003298";
        break;
    case "GPPL":
        ticker = "GPPL";
        tickerID = "S0003609";
        break;
    case "GSFC":
        ticker = "GSFC";
        tickerID = "S0003520";
        break;
    case "GSPL":
        ticker = "GSPL";
        tickerID = "S0003594";
        break;
    case "GULFOILLUB":
        ticker = "GULFOILLUB";
        tickerID = "S0003845";
        break;
    case "HEG":
        ticker = "HEG";
        tickerID = "S0003145";
        break;
    case "HGINFRA":
        ticker = "HGINFRA";
        tickerID = "S0003711";
        break;
    case "HBLPOWER":
        ticker = "HBLPOWER";
        tickerID = "S0003575";
        break;
    case "HCLTECH":
        ticker = "HCLTECH";
        tickerID = "S0003045";
        break;
    case "HDFCAMC":
        ticker = "HDFCAMC";
        tickerID = "S0003144";
        break;
    case "HDFCBANK":
        ticker = "HDFCBANK";
        tickerID = "S0003020";
        break;
    case "HDFCLIFE":
        ticker = "HDFCLIFE";
        tickerID = "S0003103";
        break;
    case "HFCL":
        ticker = "HFCL";
        tickerID = "S0003171";
        break;
    case "HIL":
        ticker = "HIL";
        tickerID = "S0003917";
        break;
    case "HLEGLAS":
        ticker = "HLEGLAS";
        tickerID = "S0000018";
        break;
    case "HSIL":
        ticker = "HSIL";
        tickerID = "S0001045";
        break;
    case "HAPPSTMNDS":
        ticker = "HAPPSTMNDS";
        tickerID = "S0003230";
        break;
    case "HATHWAY":
        ticker = "HATHWAY";
        tickerID = "S0003600";
        break;
    case "HATSUN":
        ticker = "HATSUN";
        tickerID = "S0003577";
        break;
    case "HAVELLS":
        ticker = "HAVELLS";
        tickerID = "S0003090";
        break;
    case "HCG":
        ticker = "HCG";
        tickerID = "S0003545";
        break;
    case "HEIDELBERG":
        ticker = "HEIDELBERG";
        tickerID = "S0003759";
        break;
    case "HEMIPROP":
        ticker = "HEMIPROP";
        tickerID = "S0003294";
        break;
    case "HERANBA":
        ticker = "HERANBA";
        tickerID = "S0005072";
        break;
    case "HERITGFOOD":
        ticker = "HERITGFOOD";
        tickerID = "S0003744";
        break;
    case "HEROMOTOCO":
        ticker = "HEROMOTOCO";
        tickerID = "S0003088";
        break;
    case "HESTERBIO":
        ticker = "HESTERBIO";
        tickerID = "S0004126";
        break;
    case "HIKAL":
        ticker = "HIKAL";
        tickerID = "S0003470";
        break;
    case "HSCL":
        ticker = "HSCL";
        tickerID = "S0003251";
        break;
    case "HIMATSEIDE":
        ticker = "HIMATSEIDE";
        tickerID = "S0003386";
        break;
    case "HINDALCO":
        ticker = "HINDALCO";
        tickerID = "S0003072";
        break;
    case "HGS":
        ticker = "HGS";
        tickerID = "S0003460";
        break;
    case "HAL":
        ticker = "HAL";
        tickerID = "S0003278";
        break;
    case "HCC":
        ticker = "HCC";
        tickerID = "S0003141";
        break;
    case "HINDCOPPER":
        ticker = "HINDCOPPER";
        tickerID = "S0003099";
        break;
    case "HNDFDS":
        ticker = "HNDFDS";
        tickerID = "S0003895";
        break;
    case "HINDOILEXP":
        ticker = "HINDOILEXP";
        tickerID = "S0003280";
        break;
    case "HINDPETRO":
        ticker = "HINDPETRO";
        tickerID = "S0003061";
        break;
    case "HINDUNILVR":
        ticker = "HINDUNILVR";
        tickerID = "S0003053";
        break;
    case "HINDZINC":
        ticker = "HINDZINC";
        tickerID = "S0003378";
        break;
    case "POWERINDIA":
        ticker = "POWERINDIA";
        tickerID = "S0003480";
        break;
    case "HOMEFIRST":
        ticker = "HOMEFIRST";
        tickerID = "S0005069";
        break;
    case "HONAUT":
        ticker = "HONAUT";
        tickerID = "S0003383";
        break;
    case "HUDCO":
        ticker = "HUDCO";
        tickerID = "S0003393";
        break;
    case "HDFC":
        ticker = "HDFC";
        tickerID = "S0003020";
        break;
    case "HUHTAMAKI":
        ticker = "HUHTAMAKI";
        tickerID = "S0003902";
        break;
    case "IGPL":
        ticker = "IGPL";
        tickerID = "S0003971";
        break;
    case "ICICIBANK":
        ticker = "ICICIBANK";
        tickerID = "S0003019";
        break;
    case "ICICIGI":
        ticker = "ICICIGI";
        tickerID = "S0003174";
        break;
    case "ICICIPRULI":
        ticker = "ICICIPRULI";
        tickerID = "S0003017";
        break;
    case "ISEC":
        ticker = "ISEC";
        tickerID = "S0003334";
        break;
    case "ICRA":
        ticker = "ICRA";
        tickerID = "S0003295";
        break;
    case "IDBI":
        ticker = "IDBI";
        tickerID = "S0003240";
        break;
    case "IDFCFIRSTB":
        ticker = "IDFCFIRSTB";
        tickerID = "S0003137";
        break;
    case "IDFC":
        ticker = "IDFC";
        tickerID = "S0003137";
        break;
    case "IFBIND":
        ticker = "IFBIND";
        tickerID = "S0003330";
        break;
    case "IFCI":
        ticker = "IFCI";
        tickerID = "S0003241";
        break;
    case "IIFL":
        ticker = "IIFL";
        tickerID = "S0003379";
        break;
    case "IIFLSEC":
        ticker = "IIFLSEC";
        tickerID = "S0003869";
        break;
    case "IIFLWAM":
        ticker = "IIFLWAM";
        tickerID = "";
        break;
    case "INEOSSTYRO":
        ticker = "INEOSSTYRO";
        tickerID = "";
        break;
    case "IOLCP":
        ticker = "IOLCP";
        tickerID = "S0003369";
        break;
    case "IRB":
        ticker = "IRB";
        tickerID = "S0003591";
        break;
    case "IRCON":
        ticker = "IRCON";
        tickerID = "S0003438";
        break;
    case "ITC":
        ticker = "ITC";
        tickerID = "S0003028";
        break;
    case "ITDCEM":
        ticker = "ITDCEM";
        tickerID = "S0003402";
        break;
    case "ITI":
        ticker = "ITI";
        tickerID = "S0003286";
        break;
    case "IGARASHI":
        ticker = "IGARASHI";
        tickerID = "S0003697";
        break;
    case "INDIACEM":
        ticker = "INDIACEM";
        tickerID = "S0003363";
        break;
    case "INDIAGLYCO":
        ticker = "INDIAGLYCO";
        tickerID = "S0003564";
        break;
    case "ITDC":
        ticker = "ITDC";
        tickerID = "S0000111";
        break;
    case "IBULHSGFIN":
        ticker = "IBULHSGFIN";
        tickerID = "S0003042";
        break;
    case "IBREALEST":
        ticker = "IBREALEST";
        tickerID = "S0003193";
        break;
    case "INDIAMART":
        ticker = "INDIAMART";
        tickerID = "S0003410";
        break;
    case "INDIANB":
        ticker = "INDIANB";
        tickerID = "S0003195";
        break;
    case "IEX":
        ticker = "IEX";
        tickerID = "S0003403";
        break;
    case "INDHOTEL":
        ticker = "INDHOTEL";
        tickerID = "S0003257";
        break;
    case "INDIANHUME":
        ticker = "INDIANHUME";
        tickerID = "S0003731";
        break;
    case "IMFA":
        ticker = "IMFA";
        tickerID = "S0004117";
        break;
    case "IOC":
        ticker = "IOC";
        tickerID = "S0003056";
        break;
    case "IOB":
        ticker = "IOB";
        tickerID = "S0003683";
        break;
    case "IRCTC":
        ticker = "IRCTC";
        tickerID = "S0003024";
        break;
    case "IRFC":
        ticker = "IRFC";
        tickerID = "S0005049";
        break;
    case "INDIGOPNTS":
        ticker = "INDIGOPNTS";
        tickerID = "S0005070";
        break;
    case "ICIL":
        ticker = "ICIL";
        tickerID = "S0003897";
        break;
    case "INDOSTAR":
        ticker = "INDOSTAR";
        tickerID = "S0003708";
        break;
    case "INDOCO":
        ticker = "INDOCO";
        tickerID = "S0003760";
        break;
    case "IGL":
        ticker = "IGL";
        tickerID = "S0003114";
        break;
    case "INDUSTOWER":
        ticker = "INDUSTOWER";
        tickerID = "S0003031";
        break;
    case "INDUSINDBK":
        ticker = "INDUSINDBK";
        tickerID = "S0003023";
        break;
    case "INFIBEAM":
        ticker = "INFIBEAM";
        tickerID = "S0003966";
        break;
    case "NAUKRI":
        ticker = "NAUKRI";
        tickerID = "S0003134";
        break;
    case "INFY":
        ticker = "INFY";
        tickerID = "S0003032";
        break;
    case "INGERRAND":
        ticker = "INGERRAND";
        tickerID = "S0003894";
        break;
    case "INOXLEISUR":
        ticker = "INOXLEISUR";
        tickerID = "";
        break;
    case "INOXWIND":
        ticker = "INOXWIND";
        tickerID = "S0003442";
        break;
    case "INSECTICID":
        ticker = "INSECTICID";
        tickerID = "S0004067";
        break;
    case "INTELLECT":
        ticker = "INTELLECT";
        tickerID = "S0003349";
        break;
    case "INDIGO":
        ticker = "INDIGO";
        tickerID = "S0003124";
        break;
    case "IPCALAB":
        ticker = "IPCALAB";
        tickerID = "S0003209";
        break;
    case "ISGEC":
        ticker = "ISGEC";
        tickerID = "S0000002";
        break;
    case "JBCHEPHARM":
        ticker = "JBCHEPHARM";
        tickerID = "S0003418";
        break;
    case "JKCEMENT":
        ticker = "JKCEMENT";
        tickerID = "S0003416";
        break;
    case "JKIL":
        ticker = "JKIL";
        tickerID = "S0003743";
        break;
    case "JBMA":
        ticker = "JBMA";
        tickerID = "S0004187";
        break;
    case "JKLAKSHMI":
        ticker = "JKLAKSHMI";
        tickerID = "S0003412";
        break;
    case "JKPAPER":
        ticker = "JKPAPER";
        tickerID = "S0003316";
        break;
    case "JKTYRE":
        ticker = "JKTYRE";
        tickerID = "S0003303";
        break;
    case "JMFINANCIL":
        ticker = "JMFINANCIL";
        tickerID = "S0003111";
        break;
    case "JMCPROJECT":
        ticker = "JMCPROJECT";
        tickerID = "";
        break;
    case "JSWENERGY":
        ticker = "JSWENERGY";
        tickerID = "S0003186";
        break;
    case "JSWISPL":
        ticker = "JSWISPL";
        tickerID = "";
        break;
    case "JSWSTEEL":
        ticker = "JSWSTEEL";
        tickerID = "S0003097";
        break;
    case "JTEKTINDIA":
        ticker = "JTEKTINDIA";
        tickerID = "S0003570";
        break;
    case "JAGRAN":
        ticker = "JAGRAN";
        tickerID = "S0003650";
        break;
    case "JAICORPLTD":
        ticker = "JAICORPLTD";
        tickerID = "S0003309";
        break;
    case "JPASSOCIAT":
        ticker = "JPASSOCIAT";
        tickerID = "S0003110";
        break;
    case "JPPOWER":
        ticker = "JPPOWER";
        tickerID = "S0003133";
        break;
    case "J&KBANK":
        ticker = "J&KBANK";
        tickerID = "S0003502";
        break;
    case "JAMNAAUTO":
        ticker = "JAMNAAUTO";
        tickerID = "S0003392";
        break;
    case "JINDALPOLY":
        ticker = "JINDALPOLY";
        tickerID = "S0004092";
        break;
    case "JINDALSAW":
        ticker = "JINDALSAW";
        tickerID = "S0003282";
        break;
    case "JSLHISAR":
        ticker = "JSLHISAR";
        tickerID = "";
        break;
    case "JSL":
        ticker = "JSL";
        tickerID = "S0003614";
        break;
    case "JINDALSTEL":
        ticker = "JINDALSTEL";
        tickerID = "S0003069";
        break;
    case "JINDWORLD":
        ticker = "JINDWORLD";
        tickerID = "S0003656";
        break;
    case "JCHAC":
        ticker = "JCHAC";
        tickerID = "S0003827";
        break;
    case "JUBLFOOD":
        ticker = "JUBLFOOD";
        tickerID = "S0003054";
        break;
    case "JUBLINGREA":
        ticker = "JUBLINGREA";
        tickerID = "S0005095";
        break;
    case "JUBLPHARMA":
        ticker = "JUBLPHARMA";
        tickerID = "S0003353";
        break;
    case "JUSTDIAL":
        ticker = "JUSTDIAL";
        tickerID = "S0003190";
        break;
    case "JYOTHYLAB":
        ticker = "JYOTHYLAB";
        tickerID = "S0003448";
        break;
    case "KPRMILL":
        ticker = "KPRMILL";
        tickerID = "S0003474";
        break;
    case "KCP":
        ticker = "KCP";
        tickerID = "S0003781";
        break;
    case "KEI":
        ticker = "KEI";
        tickerID = "S0003333";
        break;
    case "KNRCON":
        ticker = "KNRCON";
        tickerID = "S0003354";
        break;
    case "KPITTECH":
        ticker = "KPITTECH";
        tickerID = "S0003587";
        break;
    case "KRBL":
        ticker = "KRBL";
        tickerID = "S0003530";
        break;
    case "KSB":
        ticker = "KSB";
        tickerID = "S0004060";
        break;
    case "KAJARIACER":
        ticker = "KAJARIACER";
        tickerID = "S0003368";
        break;
    case "KALPATPOWR":
        ticker = "KALPATPOWR";
        tickerID = "";
        break;
    case "KALYANKJIL":
        ticker = "KALYANKJIL";
        tickerID = "S0005088";
        break;
    case "KSL":
        ticker = "KSL";
        tickerID = "S0003513";
        break;
    case "KANSAINER":
        ticker = "KANSAINER";
        tickerID = "S0003729";
        break;
    case "KTKBANK":
        ticker = "KTKBANK";
        tickerID = "S0003328";
        break;
    case "KARURVYSYA":
        ticker = "KARURVYSYA";
        tickerID = "S0003253";
        break;
    case "KSCL":
        ticker = "KSCL";
        tickerID = "S0003259";
        break;
    case "KEC":
        ticker = "KEC";
        tickerID = "S0003467";
        break;
    case "KIRIINDUS":
        ticker = "KIRIINDUS";
        tickerID = "S0003651";
        break;
    case "KIRLOSBROS":
        ticker = "KIRLOSBROS";
        tickerID = "S0003931";
        break;
    case "KIRLFER":
        ticker = "KIRLFER";
        tickerID = "S0003703";
        break;
    case "KIRLOSENG":
        ticker = "KIRLOSENG";
        tickerID = "S0003834";
        break;
    case "KOLTEPATIL":
        ticker = "KOLTEPATIL";
        tickerID = "S0003620";
        break;
    case "KOTAKBANK":
        ticker = "KOTAKBANK";
        tickerID = "S0003043";
        break;
    case "L&TFH":
        ticker = "L&TFH";
        tickerID = "";
        break;
    case "LTTS":
        ticker = "LTTS";
        tickerID = "S0003242";
        break;
    case "LGBBROSLTD":
        ticker = "LGBBROSLTD";
        tickerID = "S0003978";
        break;
    case "LICHSGFIN":
        ticker = "LICHSGFIN";
        tickerID = "S0003066";
        break;
    case "DAAWAT":
        ticker = "DAAWAT";
        tickerID = "";
        break;
    case "LAOPALA":
        ticker = "LAOPALA";
        tickerID = "S0003667";
        break;
    case "LAXMIMACH":
        ticker = "LAXMIMACH";
        tickerID = "S0003550";
        break;
    case "LTI":
        ticker = "LTI";
        tickerID = "S0003160";
        break;
    case "LT":
        ticker = "LT";
        tickerID = "S0003025";
        break;
    case "LAURUSLABS":
        ticker = "LAURUSLABS";
        tickerID = "S0003142";
        break;
    case "LXCHEM":
        ticker = "LXCHEM";
        tickerID = "S0005089";
        break;
    case "LEMONTREE":
        ticker = "LEMONTREE";
        tickerID = "S0003430";
        break;
    case "LINDEINDIA":
        ticker = "LINDEINDIA";
        tickerID = "S0003452";
        break;
    case "LUMAXTECH":
        ticker = "LUMAXTECH";
        tickerID = "S0003456";
        break;
    case "LUPIN":
        ticker = "LUPIN";
        tickerID = "S0003065";
        break;
    case "LUXIND":
        ticker = "LUXIND";
        tickerID = "S0003932";
        break;
    case "MASFIN":
        ticker = "MASFIN";
        tickerID = "S0004003";
        break;
    case "MMTC":
        ticker = "MMTC";
        tickerID = "S0003249";
        break;
    case "MOIL":
        ticker = "MOIL";
        tickerID = "S0003551";
        break;
    case "MRF":
        ticker = "MRF";
        tickerID = "S0003187";
        break;
    case "MSTCLTD":
        ticker = "MSTCLTD";
        tickerID = "S0003553";
        break;
    case "MTARTECH":
        ticker = "MTARTECH";
        tickerID = "S0005065";
        break;
    case "LODHA":
        ticker = "LODHA";
        tickerID = "S0005078";
        break;
    case "MGL":
        ticker = "MGL";
        tickerID = "S0003155";
        break;
    case "MTNL":
        ticker = "MTNL";
        tickerID = "S0003521";
        break;
    case "MAHSCOOTER":
        ticker = "MAHSCOOTER";
        tickerID = "S0003593";
        break;
    case "MAHSEAMLES":
        ticker = "MAHSEAMLES";
        tickerID = "S0003793";
        break;
    case "M&MFIN":
        ticker = "M&MFIN";
        tickerID = "S0003076";
        break;
    case "M&M":
        ticker = "M&M";
        tickerID = "S0003059";
        break;
    case "MAHINDCIE":
        ticker = "MAHINDCIE";
        tickerID = "";
        break;
    case "MHRIL":
        ticker = "MHRIL";
        tickerID = "S0003914";
        break;
    case "MAHLIFE":
        ticker = "MAHLIFE";
        tickerID = "S0004086";
        break;
    case "MAHLOG":
        ticker = "MAHLOG";
        tickerID = "S0003597";
        break;
    case "MAITHANALL":
        ticker = "MAITHANALL";
        tickerID = "S0004024";
        break;
    case "MANINFRA":
        ticker = "MANINFRA";
        tickerID = "S0003626";
        break;
    case "MANAPPURAM":
        ticker = "MANAPPURAM";
        tickerID = "S0003183";
        break;
    case "MRPL":
        ticker = "MRPL";
        tickerID = "S0003326";
        break;
    case "MARICO":
        ticker = "MARICO";
        tickerID = "S0003173";
        break;
    case "MARKSANS":
        ticker = "MARKSANS";
        tickerID = "S0003283";
        break;
    case "MARUTI":
        ticker = "MARUTI";
        tickerID = "S0003046";
        break;
    case "MASTEK":
        ticker = "MASTEK";
        tickerID = "S0003404";
        break;
    case "MATRIMONY":
        ticker = "MATRIMONY";
        tickerID = "S0003887";
        break;
    case "MFSL":
        ticker = "MFSL";
        tickerID = "S0003038";
        break;
    case "MAXHEALTH":
        ticker = "MAXHEALTH";
        tickerID = "S0003533";
        break;
    case "MAYURUNIQ":
        ticker = "MAYURUNIQ";
        tickerID = "S0003772";
        break;
    case "MAZDOCK":
        ticker = "MAZDOCK";
        tickerID = "S0003112";
        break;
    case "METROPOLIS":
        ticker = "METROPOLIS";
        tickerID = "S0003469";
        break;
    case "MINDTREE":
        ticker = "MINDTREE";
        tickerID = "";
        break;
    case "MINDACORP":
        ticker = "MINDACORP";
        tickerID = "S0003424";
        break;
    case "MINDAIND":
        ticker = "MINDAIND";
        tickerID = "";
        break;
    case "MIDHANI":
        ticker = "MIDHANI";
        tickerID = "S0003336";
        break;
    case "MOLDTKPAC":
        ticker = "MOLDTKPAC";
        tickerID = "S0004085";
        break;
    case "MOREPENLAB":
        ticker = "MOREPENLAB";
        tickerID = "S0003429";
        break;
    case "MOTILALOFS":
        ticker = "MOTILALOFS";
        tickerID = "S0003637";
        break;
    case "MPHASIS":
        ticker = "MPHASIS";
        tickerID = "S0003335";
        break;
    case "BECTORFOOD":
        ticker = "BECTORFOOD";
        tickerID = "S0005061";
        break;
    case "MCX":
        ticker = "MCX";
        tickerID = "S0003237";
        break;
    case "MUTHOOTFIN":
        ticker = "MUTHOOTFIN";
        tickerID = "S0003078";
        break;
    case "NATCOPHARM":
        ticker = "NATCOPHARM";
        tickerID = "S0003373";
        break;
    case "NBCC":
        ticker = "NBCC";
        tickerID = "S0003113";
        break;
    case "NCC":
        ticker = "NCC";
        tickerID = "S0003176";
        break;
    case "NEOGEN":
        ticker = "NEOGEN";
        tickerID = "S0003445";
        break;
    case "NESCO":
        ticker = "NESCO";
        tickerID = "S0003573";
        break;
    case "NHPC":
        ticker = "NHPC";
        tickerID = "S0003178";
        break;
    case "NIITLTD":
        ticker = "NIITLTD";
        tickerID = "S0003483";
        break;
    case "NLCINDIA":
        ticker = "NLCINDIA";
        tickerID = "S0003490";
        break;
    case "NMDC":
        ticker = "NMDC";
        tickerID = "S0003087";
        break;
    case "NOCIL":
        ticker = "NOCIL";
        tickerID = "S0003238";
        break;
    case "NRBBEARING":
        ticker = "NRBBEARING";
        tickerID = "S0003381";
        break;
    case "NTPC":
        ticker = "NTPC";
        tickerID = "S0003057";
        break;
    case "NH":
        ticker = "NH";
        tickerID = "S0003663";
        break;
    case "NATIONALUM":
        ticker = "NATIONALUM";
        tickerID = "S0003119";
        break;
    case "NFL":
        ticker = "NFL";
        tickerID = "S0003576";
        break;
    case "NBVENTURES":
        ticker = "NBVENTURES";
        tickerID = "";
        break;
    case "NAVINFLUOR":
        ticker = "NAVINFLUOR";
        tickerID = "S0003288";
        break;
    case "NAVNETEDUL":
        ticker = "NAVNETEDUL";
        tickerID = "S0003954";
        break;
    case "NAZARA":
        ticker = "NAZARA";
        tickerID = "S0005087";
        break;
    case "NESTLEIND":
        ticker = "NESTLEIND";
        tickerID = "S0003095";
        break;
    case "NETWORK18":
        ticker = "NETWORK18";
        tickerID = "S0003414";
        break;
    case "NEULANDLAB":
        ticker = "NEULANDLAB";
        tickerID = "S0003451";
        break;
    case "NEWGEN":
        ticker = "NEWGEN";
        tickerID = "S0004000";
        break;
    case "NILKAMAL":
        ticker = "NILKAMAL";
        tickerID = "S0004020";
        break;
    case "NAM-INDIA":
        ticker = "NAM-INDIA";
        tickerID = "S0003254";
        break;
    case "NOVARTIND":
        ticker = "NOVARTIND";
        tickerID = "S0000011";
        break;
    case "NUCLEUS":
        ticker = "NUCLEUS";
        tickerID = "S0003348";
        break;
    case "OBEROIRLTY":
        ticker = "OBEROIRLTY";
        tickerID = "S0003390";
        break;
    case "ONGC":
        ticker = "ONGC";
        tickerID = "S0003030";
        break;
    case "OIL":
        ticker = "OIL";
        tickerID = "S0003223";
        break;
    case "OLECTRA":
        ticker = "OLECTRA";
        tickerID = "S0003338";
        break;
    case "OFSS":
        ticker = "OFSS";
        tickerID = "S0003405";
        break;
    case "ORIENTCEM":
        ticker = "ORIENTCEM";
        tickerID = "S0003517";
        break;
    case "ORIENTELEC":
        ticker = "ORIENTELEC";
        tickerID = "S0003796";
        break;
    case "OAL":
        ticker = "OAL";
        tickerID = "S0003907";
        break;
    case "OCCL":
        ticker = "OCCL";
        tickerID = "S0004046";
        break;
    case "ORISSAMINE":
        ticker = "ORISSAMINE";
        tickerID = "S0003616";
        break;
    case "PCJEWELLER":
        ticker = "PCJEWELLER";
        tickerID = "S0003205";
        break;
    case "PCBL":
        ticker = "PCBL";
        tickerID = "S0003394";
        break;
    case "PIIND":
        ticker = "PIIND";
        tickerID = "S0003192";
        break;
    case "PNBGILTS":
        ticker = "PNBGILTS";
        tickerID = "S0003851";
        break;
    case "PNBHOUSING":
        ticker = "PNBHOUSING";
        tickerID = "S0003568";
        break;
    case "PNCINFRA":
        ticker = "PNCINFRA";
        tickerID = "S0003698";
        break;
    case "PSPPROJECT":
        ticker = "PSPPROJECT";
        tickerID = "S0003690";
        break;
    case "PFS":
        ticker = "PFS";
        tickerID = "S0003810";
        break;
    case "PTC":
        ticker = "PTC";
        tickerID = "S0003426";
        break;
    case "PVR":
        ticker = "PVR";
        tickerID = "S0003027";
        break;
    case "PAGEIND":
        ticker = "PAGEIND";
        tickerID = "S0003130";
        break;
    case "PAISALO":
        ticker = "PAISALO";
        tickerID = "S0003741";
        break;
    case "PANACEABIO":
        ticker = "PANACEABIO";
        tickerID = "S0003355";
        break;
    case "PARAGMILK":
        ticker = "PARAGMILK";
        tickerID = "S0003509";
        break;
    case "PERSISTENT":
        ticker = "PERSISTENT";
        tickerID = "S0003437";
        break;
    case "PETRONET":
        ticker = "PETRONET";
        tickerID = "S0003152";
        break;
    case "PFIZER":
        ticker = "PFIZER";
        tickerID = "S0003170";
        break;
    case "PHOENIXLTD":
        ticker = "PHOENIXLTD";
        tickerID = "S0003658";
        break;
    case "PIDILITIND":
        ticker = "PIDILITIND";
        tickerID = "S0003161";
        break;
    case "PILANIINVS":
        ticker = "PILANIINVS";
        tickerID = "S0003874";
        break;
    case "PEL":
        ticker = "PEL";
        tickerID = "S0003118";
        break;
    case "POLYMED":
        ticker = "POLYMED";
        tickerID = "S0003686";
        break;
    case "POLYCAB":
        ticker = "POLYCAB";
        tickerID = "S0003225";
        break;
    case "POLYPLEX":
        ticker = "POLYPLEX";
        tickerID = "S0003916";
        break;
    case "POONAWALLA":
        ticker = "POONAWALLA";
        tickerID = "S0003522";
        break;
    case "PFC":
        ticker = "PFC";
        tickerID = "S0003168";
        break;
    case "POWERGRID":
        ticker = "POWERGRID";
        tickerID = "S0003068";
        break;
    case "PRAJIND":
        ticker = "PRAJIND";
        tickerID = "S0003194";
        break;
    case "PRAKASH":
        ticker = "PRAKASH";
        tickerID = "S0003783";
        break;
    case "DIAMONDYD":
        ticker = "DIAMONDYD";
        tickerID = "S0004164";
        break;
    case "PRESTIGE":
        ticker = "PRESTIGE";
        tickerID = "S0003499";
        break;
    case "PRINCEPIPE":
        ticker = "PRINCEPIPE";
        tickerID = "S0003724";
        break;
    case "PRSMJOHNSN":
        ticker = "PRSMJOHNSN";
        tickerID = "S0003791";
        break;
    case "PRIVISCL":
        ticker = "PRIVISCL";
        tickerID = "S0003830";
        break;
    case "PGHL":
        ticker = "PGHL";
        tickerID = "S0003578";
        break;
    case "PGHH":
        ticker = "PGHH";
        tickerID = "S0003669";
        break;
    case "PSB":
        ticker = "PSB";
        tickerID = "S0004022";
        break;
    case "PUNJABCHEM":
        ticker = "PUNJABCHEM";
        tickerID = "S0004049";
        break;
    case "PNB":
        ticker = "PNB";
        tickerID = "S0003052";
        break;
    case "PURVA":
        ticker = "PURVA";
        tickerID = "S0003717";
        break;
    case "QUESS":
        ticker = "QUESS";
        tickerID = "S0003677";
        break;
    case "QUICKHEAL":
        ticker = "QUICKHEAL";
        tickerID = "S0003657";
        break;
    case "RSYSTEMS":
        ticker = "RSYSTEMS";
        tickerID = "S0003939";
        break;
    case "RBLBANK":
        ticker = "RBLBANK";
        tickerID = "S0003062";
        break;
    case "RECLTD":
        ticker = "RECLTD";
        tickerID = "S0003127";
        break;
    case "RHIM":
        ticker = "RHIM";
        tickerID = "S0003890";
        break;
    case "RITES":
        ticker = "RITES";
        tickerID = "S0003284";
        break;
    case "RPSGVENT":
        ticker = "RPSGVENT";
        tickerID = "S0003880";
        break;
    case "RADICO":
        ticker = "RADICO";
        tickerID = "S0003547";
        break;
    case "RVNL":
        ticker = "RVNL";
        tickerID = "";
        break;
    case "RAILTEL":
        ticker = "RAILTEL";
        tickerID = "S0005051";
        break;
    case "RAIN":
        ticker = "RAIN";
        tickerID = "S0003272";
        break;
    case "RAJESHEXPO":
        ticker = "RAJESHEXPO";
        tickerID = "S0003652";
        break;
    case "RALLIS":
        ticker = "RALLIS";
        tickerID = "S0003423";
        break;
    case "RAMCOIND":
        ticker = "RAMCOIND";
        tickerID = "S0004011";
        break;
    case "RAMCOSYS":
        ticker = "RAMCOSYS";
        tickerID = "S0003179";
        break;
    case "RKFORGE":
        ticker = "RKFORGE";
        tickerID = "S0003922";
        break;
    case "RANEHOLDIN":
        ticker = "RANEHOLDIN";
        tickerID = "S0003543";
        break;
    case "RCF":
        ticker = "RCF";
        tickerID = "S0003307";
        break;
    case "RATNAMANI":
        ticker = "RATNAMANI";
        tickerID = "S0003839";
        break;
    case "RTNINDIA":
        ticker = "RTNINDIA";
        tickerID = "S0003541";
        break;
    case "RTNPOWER":
        ticker = "RTNPOWER";
        tickerID = "S0003064";
        break;
    case "RAYMOND":
        ticker = "RAYMOND";
        tickerID = "S0003199";
        break;
    case "REDINGTON":
        ticker = "REDINGTON";
        tickerID = "S0003787";
        break;
    case "RELAXO":
        ticker = "RELAXO";
        tickerID = "S0003277";
        break;
    case "RELIANCE":
        ticker = "RELIANCE";
        tickerID = "S0003018";
        break;
    case "RELINFRA":
        ticker = "RELINFRA";
        tickerID = "S0003245";
        break;
    case "RPOWER":
        ticker = "RPOWER";
        tickerID = "S0003264";
        break;
    case "RELIGARE":
        ticker = "RELIGARE";
        tickerID = "S0003615";
        break;
    case "REPCOHOME":
        ticker = "REPCOHOME";
        tickerID = "S0003599";
        break;
    case "ROSSARI":
        ticker = "ROSSARI";
        tickerID = "S0003512";
        break;
    case "ROUTE":
        ticker = "ROUTE";
        tickerID = "S0003248";
        break;
    case "RUPA":
        ticker = "RUPA";
        tickerID = "S0003630";
        break;
    case "SHK":
        ticker = "SHK";
        tickerID = "S0003443";
        break;
    case "SBICARD":
        ticker = "SBICARD";
        tickerID = "S0003139";
        break;
    case "SBILIFE":
        ticker = "SBILIFE";
        tickerID = "S0003216";
        break;
    case "SEAMECLTD":
        ticker = "SEAMECLTD";
        tickerID = "S0004137";
        break;
    case "SIS":
        ticker = "SIS";
        tickerID = "S0003510";
        break;
    case "SJVN":
        ticker = "SJVN";
        tickerID = "S0003415";
        break;
    case "SKFINDIA":
        ticker = "SKFINDIA";
        tickerID = "S0003733";
        break;
    case "SMSPHARMA":
        ticker = "SMSPHARMA";
        tickerID = "S0003487";
        break;
    case "SRF":
        ticker = "SRF";
        tickerID = "S0003197";
        break;
    case "SADBHAV":
        ticker = "SADBHAV";
        tickerID = "S0003523";
        break;
    case "SAGCEM":
        ticker = "SAGCEM";
        tickerID = "S0003343";
        break;
    case "SANDHAR":
        ticker = "SANDHAR";
        tickerID = "S0004297";
        break;
    case "SANGHIIND":
        ticker = "SANGHIIND";
        tickerID = "S0003406";
        break;
    case "SANOFI":
        ticker = "SANOFI";
        tickerID = "S0003227";
        break;
    case "SARDAEN":
        ticker = "SARDAEN";
        tickerID = "S0003959";
        break;
    case "SAREGAMA":
        ticker = "SAREGAMA";
        tickerID = "S0004031";
        break;
    case "SASKEN":
        ticker = "SASKEN";
        tickerID = "S0003638";
        break;
    case "SATIA":
        ticker = "SATIA";
        tickerID = "S0003985";
        break;
    case "SOTL":
        ticker = "SOTL";
        tickerID = "S0003901";
        break;
    case "SCHAEFFLER":
        ticker = "SCHAEFFLER";
        tickerID = "S0003983";
        break;
    case "SCHNEIDER":
        ticker = "SCHNEIDER";
        tickerID = "S0003725";
        break;
    case "SEQUENT":
        ticker = "SEQUENT";
        tickerID = "S0003455";
        break;
    case "SESHAPAPER":
        ticker = "SESHAPAPER";
        tickerID = "S0003798";
        break;
    case "SHALBY":
        ticker = "SHALBY";
        tickerID = "S0003806";
        break;
    case "SHANKARA":
        ticker = "SHANKARA";
        tickerID = "S0003504";
        break;
    case "SHANTIGEAR":
        ticker = "SHANTIGEAR";
        tickerID = "S0003944";
        break;
    case "SHARDACROP":
        ticker = "SHARDACROP";
        tickerID = "S0004116";
        break;
    case "SHARDAMOTR":
        ticker = "SHARDAMOTR";
        tickerID = "S0003800";
        break;
    case "SFL":
        ticker = "SFL";
        tickerID = "S0004218";
        break;
    case "SHILPAMED":
        ticker = "SHILPAMED";
        tickerID = "S0003337";
        break;
    case "SCI":
        ticker = "SCI";
        tickerID = "";
        break;
    case "SHOPERSTOP":
        ticker = "SHOPERSTOP";
        tickerID = "S0003501";
        break;
    case "SHREECEM":
        ticker = "SHREECEM";
        tickerID = "S0003220";
        break;
    case "RENUKA":
        ticker = "RENUKA";
        tickerID = "S0003344";
        break;
    case "SHRIRAMCIT":
        ticker = "SHRIRAMCIT";
        tickerID = "";
        break;
    case "SRTRANSFIN":
        ticker = "SRTRANSFIN";
        tickerID = "";
        break;
    case "SIEMENS":
        ticker = "SIEMENS";
        tickerID = "S0003217";
        break;
    case "SIYSIL":
        ticker = "SIYSIL";
        tickerID = "S0003514";
        break;
    case "SNOWMAN":
        ticker = "SNOWMAN";
        tickerID = "S0003185";
        break;
    case "SOBHA":
        ticker = "SOBHA";
        tickerID = "S0003289";
        break;
    case "SOLARINDS":
        ticker = "SOLARINDS";
        tickerID = "S0003719";
        break;
    case "SOLARA":
        ticker = "SOLARA";
        tickerID = "S0003750";
        break;
    case "SOMANYCERA":
        ticker = "SOMANYCERA";
        tickerID = "S0003699";
        break;
    case "SHIL":
        ticker = "SHIL";
        tickerID = "";
        break;
    case "SONACOMS":
        ticker = "SONACOMS";
        tickerID = "S0005104";
        break;
    case "SONATSOFTW":
        ticker = "SONATSOFTW";
        tickerID = "S0003476";
        break;
    case "SOUTHBANK":
        ticker = "SOUTHBANK";
        tickerID = "S0003300";
        break;
    case "SPANDANA":
        ticker = "SPANDANA";
        tickerID = "S0003970";
        break;
    case "SPICEJET":
        ticker = "SPICEJET";
        tickerID = "S0003071";
        break;
    case "STARCEMENT":
        ticker = "STARCEMENT";
        tickerID = "S0003992";
        break;
    case "SBIN":
        ticker = "SBIN";
        tickerID = "S0003016";
        break;
    case "SAIL":
        ticker = "SAIL";
        tickerID = "S0003035";
        break;
    case "SSWL":
        ticker = "SSWL";
        tickerID = "S0003906";
        break;
    case "SWSOLAR":
        ticker = "SWSOLAR";
        tickerID = "S0003565";
        break;
    case "STLTECH":
        ticker = "STLTECH";
        tickerID = "S0003492";
        break;
    case "STOVEKRAFT":
        ticker = "STOVEKRAFT";
        tickerID = "S0005068";
        break;
    case "STAR":
        ticker = "STAR";
        tickerID = "S0003177";
        break;
    case "SUBEXLTD":
        ticker = "SUBEXLTD";
        tickerID = "S0003143";
        break;
    case "SUBROS":
        ticker = "SUBROS";
        tickerID = "S0003625";
        break;
    case "SUDARSCHEM":
        ticker = "SUDARSCHEM";
        tickerID = "S0003563";
        break;
    case "SUMICHEM":
        ticker = "SUMICHEM";
        tickerID = "S0003495";
        break;
    case "SPARC":
        ticker = "SPARC";
        tickerID = "S0003531";
        break;
    case "SUNPHARMA":
        ticker = "SUNPHARMA";
        tickerID = "S0003089";
        break;
    case "SUNTV":
        ticker = "SUNTV";
        tickerID = "S0003084";
        break;
    case "SUNCLAYLTD":
        ticker = "SUNCLAYLTD";
        tickerID = "";
        break;
    case "SUNDARMFIN":
        ticker = "SUNDARMFIN";
        tickerID = "S0003716";
        break;
    case "SUNDRMFAST":
        ticker = "SUNDRMFAST";
        tickerID = "S0003611";
        break;
    case "SUNFLAG":
        ticker = "SUNFLAG";
        tickerID = "S0003684";
        break;
    case "SUNTECK":
        ticker = "SUNTECK";
        tickerID = "S0003441";
        break;
    case "SUPRAJIT":
        ticker = "SUPRAJIT";
        tickerID = "S0003828";
        break;
    case "SUPREMEIND":
        ticker = "SUPREMEIND";
        tickerID = "S0003558";
        break;
    case "SUPPETRO":
        ticker = "SUPPETRO";
        tickerID = "";
        break;
    case "SURYAROSNI":
        ticker = "SURYAROSNI";
        tickerID = "S0003610";
        break;
    case "SURYODAY":
        ticker = "SURYODAY";
        tickerID = "S0005076";
        break;
    case "SUVENPHAR":
        ticker = "SUVENPHAR";
        tickerID = "S0003304";
        break;
    case "SUZLON":
        ticker = "SUZLON";
        tickerID = "S0003098";
        break;
    case "SWANENERGY":
        ticker = "SWANENERGY";
        tickerID = "S0003356";
        break;
    case "SWARAJENG":
        ticker = "SWARAJENG";
        tickerID = "S0004044";
        break;
    case "SYMPHONY":
        ticker = "SYMPHONY";
        tickerID = "S0003548";
        break;
    case "SYNGENE":
        ticker = "SYNGENE";
        tickerID = "S0003256";
        break;
    case "TCIEXP":
        ticker = "TCIEXP";
        tickerID = "S0004100";
        break;
    case "TCNSBRANDS":
        ticker = "TCNSBRANDS";
        tickerID = "S0003387";
        break;
    case "TTKPRESTIG":
        ticker = "TTKPRESTIG";
        tickerID = "S0003721";
        break;
    case "TVTODAY":
        ticker = "TVTODAY";
        tickerID = "S0004063";
        break;
    case "TV18BRDCST":
        ticker = "TV18BRDCST";
        tickerID = "S0003208";
        break;
    case "TVSMOTOR":
        ticker = "TVSMOTOR";
        tickerID = "S0003138";
        break;
    case "TVSSRICHAK":
        ticker = "TVSSRICHAK";
        tickerID = "S0003258";
        break;
    case "TAKE":
        ticker = "TAKE";
        tickerID = "S0003229";
        break;
    case "TNPL":
        ticker = "TNPL";
        tickerID = "S0003753";
        break;
    case "TANLA":
        ticker = "TANLA";
        tickerID = "S0003471";
        break;
    case "TASTYBITE":
        ticker = "TASTYBITE";
        tickerID = "S0000151";
        break;
    case "TATACHEM":
        ticker = "TATACHEM";
        tickerID = "S0003100";
        break;
    case "TATACOFFEE":
        ticker = "TATACOFFEE";
        tickerID = "";
        break;
    case "TATACOMM":
        ticker = "TATACOMM";
        tickerID = "S0003598";
        break;
    case "TCS":
        ticker = "TCS";
        tickerID = "S0003051";
        break;
    case "TATACONSUM":
        ticker = "TATACONSUM";
        tickerID = "S0003126";
        break;
    case "TATAELXSI":
        ticker = "TATAELXSI";
        tickerID = "S0003158";
        break;
    case "TATAINVEST":
        ticker = "TATAINVEST";
        tickerID = "S0003641";
        break;
    case "TATAMETALI":
        ticker = "TATAMETALI";
        tickerID = "";
        break;
    case "TATAMTRDVR":
        ticker = "TATAMTRDVR";
        tickerID = "S0003297";
        break;
    case "TATAMOTORS":
        ticker = "TATAMOTORS";
        tickerID = "S0003022";
        break;
    case "TATAPOWER":
        ticker = "TATAPOWER";
        tickerID = "S0003067";
        break;
    case "TATASTLLP":
        ticker = "TATASTLLP";
        tickerID = "";
        break;
    case "TATASTEEL":
        ticker = "TATASTEEL";
        tickerID = "S0003026";
        break;
    case "TTML":
        ticker = "TTML";
        tickerID = "S0003540";
        break;
    case "TEAMLEASE":
        ticker = "TEAMLEASE";
        tickerID = "S0003875";
        break;
    case "TECHM":
        ticker = "TECHM";
        tickerID = "S0003115";
        break;
    case "TECHNOE":
        ticker = "TECHNOE";
        tickerID = "S0003867";
        break;
    case "TEJASNET":
        ticker = "TEJASNET";
        tickerID = "S0003231";
        break;
    case "NIACL":
        ticker = "NIACL";
        tickerID = "S0003459";
        break;
    case "RAMCOCEM":
        ticker = "RAMCOCEM";
        tickerID = "S0003371";
        break;
    case "THERMAX":
        ticker = "THERMAX";
        tickerID = "S0003694";
        break;
    case "TIRUMALCHM":
        ticker = "TIRUMALCHM";
        tickerID = "S0003362";
        break;
    case "THOMASCOOK":
        ticker = "THOMASCOOK";
        tickerID = "S0003662";
        break;
    case "THYROCARE":
        ticker = "THYROCARE";
        tickerID = "S0003372";
        break;
    case "TIDEWATER":
        ticker = "TIDEWATER";
        tickerID = "S0003854";
        break;
    case "TIMETECHNO":
        ticker = "TIMETECHNO";
        tickerID = "S0003774";
        break;
    case "TIMKEN":
        ticker = "TIMKEN";
        tickerID = "S0003968";
        break;
    case "TINPLATE":
        ticker = "TINPLATE";
        tickerID = "";
        break;
    case "TITAN":
        ticker = "TITAN";
        tickerID = "S0003074";
        break;
    case "TORNTPHARM":
        ticker = "TORNTPHARM";
        tickerID = "S0003222";
        break;
    case "TORNTPOWER":
        ticker = "TORNTPOWER";
        tickerID = "S0003275";
        break;
    case "TCI":
        ticker = "TCI";
        tickerID = "S0003868";
        break;
    case "TRENT":
        ticker = "TRENT";
        tickerID = "S0003313";
        break;
    case "TRIDENT":
        ticker = "TRIDENT";
        tickerID = "S0003301";
        break;
    case "TRIVENI":
        ticker = "TRIVENI";
        tickerID = "S0003554";
        break;
    case "TRITURBINE":
        ticker = "TRITURBINE";
        tickerID = "S0003915";
        break;
    case "TIINDIA":
        ticker = "TIINDIA";
        tickerID = "S0003805";
        break;
    case "UCOBANK":
        ticker = "UCOBANK";
        tickerID = "S0003707";
        break;
    case "UFLEX":
        ticker = "UFLEX";
        tickerID = "S0003608";
        break;
    case "UPL":
        ticker = "UPL";
        tickerID = "@S0003029";
        break;
    case "UTIAMC":
        ticker = "UTIAMC";
        tickerID = "S0003290";
        break;
    case "UJJIVAN":
        ticker = "UJJIVAN";
        tickerID = "";
        break;
    case "UJJIVANSFB":
        ticker = "UJJIVANSFB";
        tickerID = "S0003458";
        break;
    case "ULTRACEMCO":
        ticker = "ULTRACEMCO";
        tickerID = "S0003075";
        break;
    case "UNICHEMLAB":
        ticker = "UNICHEMLAB";
        tickerID = "S0003900";
        break;
    case "UNIONBANK":
        ticker = "UNIONBANK";
        tickerID = "S0003243";
        break;
    case "UBL":
        ticker = "UBL";
        tickerID = "S0003196";
        break;
    case "MCDOWELL-N":
        ticker = "MCDOWELL-N";
        tickerID = "";
        break;
    case "USHAMART":
        ticker = "USHAMART";
        tickerID = "S0003453";
        break;
    case "VGUARD":
        ticker = "VGUARD";
        tickerID = "S0003408";
        break;
    case "VMART":
        ticker = "VMART";
        tickerID = "S0003506";
        break;
    case "VIPIND":
        ticker = "VIPIND";
        tickerID = "S0003535";
        break;
    case "VSTTILLERS":
        ticker = "VSTTILLERS";
        tickerID = "S0003909";
        break;
    case "VRLLOG":
        ticker = "VRLLOG";
        tickerID = "S0003472";
        break;
    case "VSTIND":
        ticker = "VSTIND";
        tickerID = "S0003865";
        break;
    case "WABAG":
        ticker = "WABAG";
        tickerID = "S0003265";
        break;
    case "VAIBHAVGBL":
        ticker = "VAIBHAVGBL";
        tickerID = "S0003749";
        break;
    case "VAKRANGEE":
        ticker = "VAKRANGEE";
        tickerID = "S0003123";
        break;
    case "VALIANTORG":
        ticker = "VALIANTORG";
        tickerID = "S0003431";
        break;
    case "VTL":
        ticker = "VTL";
        tickerID = "S0003644";
        break;
    case "VARROC":
        ticker = "VARROC";
        tickerID = "S0003692";
        break;
    case "VBL":
        ticker = "VBL";
        tickerID = "S0003351";
        break;
    case "VEDL":
        ticker = "VEDL";
        tickerID = "S0003041";
        break;
    case "VENKEYS":
        ticker = "VENKEYS";
        tickerID = "S0003536";
        break;
    case "VESUVIUS":
        ticker = "VESUVIUS";
        tickerID = "S0004235";
        break;
    case "VINATIORGA":
        ticker = "VINATIORGA";
        tickerID = "S0003341";
        break;
    case "VINDHYATEL":
        ticker = "VINDHYATEL";
        tickerID = "S0004035";
        break;
    case "IDEA":
        ticker = "IDEA";
        tickerID = "S0003014";
        break;
    case "VOLTAMP":
        ticker = "VOLTAMP";
        tickerID = "S0003739";
        break;
    case "VOLTAS":
        ticker = "VOLTAS";
        tickerID = "S0003107";
        break;
    case "WABCOINDIA":
        ticker = "WABCOINDIA";
        tickerID = "";
        break;
    case "WELCORP":
        ticker = "WELCORP";
        tickerID = "S0003151";
        break;
    case "WELENT":
        ticker = "WELENT";
        tickerID = "S0003950";
        break;
    case "WELSPUNIND":
        ticker = "WELSPUNIND";
        tickerID = "";
        break;
    case "WSTCSTPAPR":
        ticker = "WSTCSTPAPR";
        tickerID = "S0003728";
        break;
    case "WESTLIFE":
        ticker = "WESTLIFE";
        tickerID = "S0003246";
        break;
    case "WHEELS":
        ticker = "WHEELS";
        tickerID = "S0004058";
        break;
    case "WHIRLPOOL":
        ticker = "WHIRLPOOL";
        tickerID = "S0003352";
        break;
    case "WIPRO":
        ticker = "WIPRO";
        tickerID = "S0003105";
        break;
    case "WOCKPHARMA":
        ticker = "WOCKPHARMA";
        tickerID = "S0003167";
        break;
    case "WONDERLA":
        ticker = "WONDERLA";
        tickerID = "S0003617";
        break;
    case "YESBANK":
        ticker = "YESBANK";
        tickerID = "S0003021";
        break;
    case "ZEEL":
        ticker = "ZEEL";
        tickerID = "S0003037";
        break;
    case "ZENSARTECH":
        ticker = "ZENSARTECH";
        tickerID = "S0003607";
        break;
    case "ZYDUSWELL":
        ticker = "ZYDUSWELL";
        tickerID = "S0003672";
        break;
    case "ECLERX":
        ticker = "ECLERX";
        tickerID = "S0003420";
        break;
    case "DOLLAR":
        ticker = "DOLLAR";
        tickerID = "S0003324";
        break;
    // case "LALPATHLAB":
    //     ticker = "LALPATHLAB";
    //     tickerID = "@tickerID760";
    //     break;
    // case "DRREDDY":
    //     ticker = "DRREDDY";
    //     tickerID = "@tickerID761";
    //     break;
    // case "DREDGECORP":
    //     ticker = "DREDGECORP";
    //     tickerID = "@tickerID762";
    //     break;
    // case "EIDPARRY":
    //     ticker = "EIDPARRY";
    //     tickerID = "@tickerID763";
    //     break;
    // case "EIHOTEL":
    //     ticker = "EIHOTEL";
    //     tickerID = "@tickerID764";
    //     break;

        
        // Add more cases as needed
        default:
            console.log("Label not recognized.");
            break;
    }
    
    const urlliveData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/markets-data/live-price/v2?exchangeCode=BSE&tickerId=${tickerID}`;
    const urlshareholdingData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/v2/getShareHoldingsDetailByTickerIdAndType?tickerId=${tickerID}&type=PieChartDetails`;
    const urlfinancialData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/api/v2/ibesData/${tickerID}`;

    const iframeSWOTUrl = `https://trendlyne.com/web-widget/swot-widget/Poppins/${ticker}/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`;
    const iframechecklistUrl = `https://trendlyne.com/web-widget/checklist-widget/Poppins/${ticker}/?posCol=00A25B&amp;primaryCol=006AFF&amp;negCol=EB3B00&amp;neuCol=F7941E%22`;
    const iframeqvtUrl = `https://trendlyne.com/web-widget/qvt-widget/Poppins/${ticker}/?posCol=00A25B&amp;primaryCol=006AFF&amp;negCol=EB3B00&amp;neuCol=F7941E%22`;

    useEffect(() => {
        fetchAndDisplayLivePriceData();
        fetchFinancialData();
        updateShareholdingsData();
    }, []);

    useEffect(() => {
        // Fetch the stock data using the stockName from the URL
        const fetchData = async () => {
        try {
            // Example API call
            const response = await API.getstockByname(stockticker);
            if (response.isSuccess) {
            setStockData(response.data);
            }
        } catch (error) {
            console.error("Error fetching stock data:", error);
            if (error.response && error.response.status === 403) {
                // If error status is 403, navigate to the /login route
                navigate("/login");
            }
        }
        };
        fetchData();
        // Fetch data whenever the stockName parameter changes
    }, [stockticker,navigate]);

    return (
        <div>
            <div id="live-price-data">
            <h2>Live Data Of {livePriceData.displayName}</h2>
                    {/* <p>Ticker ID: {livePriceData.tickerId}</p> */}
                    {/* <p>{stockticker}</p> */}
                    {stockData ?
                        stockData.map((stock, index) => (
                        <div key={index}>
                        

                        <h1>{stock.name}</h1>
                        <p>Ticker: {stock.ticker}</p>
                        {/* {stock.price !== '#N/A' && <p>Maximum Buying Price: {stock.price}</p>} */}
                        {/* {stock.target !== '#N/A' && <p>Minimum Estimated Price: {stock.target}</p>} */}
                        {stock.averageTarget !== '#N/A' && <p>AI Average Target Lavel: {stock.averageTarget}</p>}
                        
                        {stock.buyStatic !== '#N/A' && <p>Buy Rating: {stock.buyStatic} %</p>}
                        {stock.sellStatic !== '#N/A' && <p>Sell Rating: {stock.sellStatic} %</p>}
                        
                        {/* {stock.weekComplate !== '#N/A' && <p>This Today Percentage: {stock.weekComplate}%</p>} */}
                        
                        {/* {stock.change !== '#N/A' && <p>Today Change: {stock.change}</p>} */}
                        {stock.signal !== '#N/A' && <p>AI Wealth Prediction: {stock.signal}</p>}
                        {stock.Caverage !== '#N/A' && <p>Acording To News & Company Action risk in percentage: {stock.Caverage} %</p>}
                        
                        {/* {stock.weeksignal !== '#N/A' && <p>Week Predict Based on FII & DII: {stock.weeksignal}</p>} */}
                        {/* <p>Financialy Stable : {livePriceData.volume} volume</p> */}
                        <p>Other Media Ratting: {livePriceData.overallRating}</p>
                        {stock.target !== '#N/A' && <p>Acording to AI fluctuate between : {stock.target} - {stock.averageTarget} </p>}
                        {stock.target !== '#N/A' && <p>Profitable Range : {stock.price} - {stock.averageTarget} </p>}
                        {/* {stock.targetPercentage !== '#N/A' && <p>AI Target Rate: {stock.targetPercentage}</p>} */}
                        {stock.TodaycloseDay !== '#N/A' && <p>AI Expecting Future Change: {stock.TodaycloseDay} %</p>}
                        {stock.finalGP !== '#N/A' && stock.finalGP !== 0 && <p>AI Overall: {stock.finalGP}</p>}
                        {stock.nextMonth !== '#N/A' && stock.nextMonth !== 0 && <p>AI Next Months Think: {stock.nextMonth}</p>}

                            {/* <h3>Techanical Analysis</h3>
                                <p>RSI,MACD ....etc</p>
                                <h4>Total Technical Indicators : 216</h4>
                                <h5>Positive Indicators : {stock.change}*216/20</h5> */}
                        </div>)):""
    
                    }
                    <div>
                <iframe src={iframeqvtUrl} frameborder="0" allowtransparency="true" className="trendlyne-embedded qvt-widget" style={{ width: '550px', maxWidth: '100%', height: '330px' }}></iframe>
                </div>
                    <p><h2> {livePriceData.displayName} </h2> ({livePriceData.ric})   ({livePriceData.date})   </p>
                    {/* <p>RIC: {livePriceData.ric}</p> */}
                    <p>Price: {livePriceData.price} ,Net Change: {livePriceData.netChange} ({livePriceData.percentChange} %) </p>
                    {/* <p>Percent Change: {livePriceData.percentChange}</p> */}
                    
                    <p>High: {livePriceData.high}, Low: {livePriceData.low}, Open: {livePriceData.open}, Prev Close: {livePriceData.close}</p>
                    {/* <p>Volume: {livePriceData.volume}</p> */}
                    
                    {/* <p>Date: {livePriceData.date}</p>
                    <p>Time: {livePriceData.time}</p>
                    <p>Price Arrow: {livePriceData.priceArrow}</p> 
                    <p>Close: {livePriceData.close}</p>
                    <p>Lot Size: {livePriceData.lotSize}</p> */}
                    <p>Market Cap: {livePriceData.marketCap} Cr</p>
                    <p>Short Term Technical Trends: {livePriceData.shortTermTrends}</p>
                    <p>Long Term Technical Trends: {livePriceData.longTermTrends}</p>
                    {/* <p>Overall Rating: {livePriceData.overallRating}</p> */}
                    <p>Year Low to Year High:   {livePriceData.ylow} - {livePriceData.yhigh}</p>
                    {/* <p>Year High: {livePriceData.yhigh}</p> 
                Add other live price data fields */}
            </div>
            <div>
            <iframe src={iframeSWOTUrl} frameborder="0" allowtransparency="true" className="trendlyne-embedded swot-widget" style={{ width: '550px', maxWidth: '100%', height: '330px' }}></iframe>
            </div>
            <div id="shareholdings-data">
                <h2>Shareholdings Breakdown</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>No. of Shares</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shareholdingsData.map(entry => (
                            <tr key={entry.category}>
                                <td>{entry.category}</td>
                                <td>{entry.noOfShares}</td>
                                <td>{entry.percentage}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
            <iframe
    id="trendlyne-widget-2"
    src={iframechecklistUrl}
    frameBorder="0"
    allowTransparency="true"
    className="trendlyne-embedded checklist-widget"
    style={{ width: '550px', maxWidth: '100%', height: '550px' }}
></iframe>
            </div>
            {/* Add other iframes and data displays */}
            <div>

            {financialData ? (
                <div id="financial-data">
                    <h2>Financial Data</h2>
                    <h3>Cash Flow</h3>
                    {/* <ul>
                        {financialData.cashFlowSheet?.cashFlowAnnuals?.map(entry => (
                            <li key={entry.year}>Year: {entry.year - 2}, Cash Flow Per Share: {entry.cashFlowPerShare}</li>
                        ))}
                    </ul> */}
                    <ul>
                        {financialData.cashFlowSheet?.cashFlowAnnuals?.map(entry => (
                            <li key={entry.year}>Year: {entry.year - 2}, Cash Flow Per Share: {entry.cashFlowPerShare}</li>
                        ))}
                    </ul>
                    <h3>Valuation</h3>
                    <ul>
                        {financialData.valuationSheet?.valuationAnnuals?.map(entry => (
                            <li key={entry.year}>Year: {entry.year - 2}, ROA: {entry.ROA}, ROE: {entry.ROE}</li>
                        ))}
                    </ul>
                    <h3>Balance Sheet</h3>
                    <ul>
                        {financialData.balanceSheet?.balanceSheetAnnualPeriods?.map(entry => (
                            <li key={entry.year}>Year: {entry.year - 2}, Net Asset Value: {entry.netAssetValue}, Net Debt: {entry.netDebt}</li>
                        ))}
                    </ul>
                    <h3>Income Sheet</h3>
                    <ul>
                        {financialData.incomeSheet?.annualPeriods?.map(entry => (
                            <li key={entry.year}>Year: {entry.year - 2}, Revenue: {entry.revenue}, Net Income: {entry.netIncome}</li>
                        ))}
                    </ul>
                    {/* Render other sections similarly */}
                </div>
            ) : (
                <p>Loading financial data...</p>
            )}
        

            </div>
            <div>
            <iframe src={iframeqvtUrl} frameborder="0" allowtransparency="true" className="trendlyne-embedded qvt-widget" style={{ width: '550px', maxWidth: '100%', height: '330px' }}></iframe>
            </div>
        </div>
    );
}

export default StockAbout;
