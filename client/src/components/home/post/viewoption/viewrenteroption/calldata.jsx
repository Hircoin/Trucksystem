import React, { useEffect , useState} from 'react';
import { TableCell, TableRow } from '@mui/material';
import { useNavigate} from "react-router-dom";
import { API } from '../../../../../service/api';

const Calldata = ({ post }) => {
    const [showDetailsIndex, setShowDetailsIndex] = useState(null);
    const [stocklivePrice, setStocklivePrice] = useState(null);
    const [stockData, setStockData] = useState([]);
    const toggleDetails = (index) => {
        setShowDetailsIndex((prevIndex) => (prevIndex === "index" ? null : "index"));
    };

    
    const fetchAndDisplayLivePriceData = async (ticker) => {
        let tickerID;
        
        switch (ticker) {
            case "Nifty_50":
                tickerID = "I0002";
                break;
            case "Nifty_Bank":
                tickerID = "I0006";
                break;
            case "Sensex":
                tickerID = "I0001";
                break;
            case "Nifty_500":
                tickerID = "I0011";
                break;
            case "NIFTY_FIN_SERVICE":
                tickerID = "I0022";
                break;
            
            case "BTC / INR":
                tickerID = "";
                break;
            case "3MINDIA":
                tickerID = "S0003818";
                break;
            case "ABB":
                tickerID = "S0003154";
                break;
            case "ACC":
                tickerID = "S0003128";
                break;
            case "ADFFOODS":
                tickerID = "S0003526";
                break;
            case "AIAENG":
                tickerID = "S0003896";
                break;
            case "APLAPOLLO":
                tickerID = "S0003203";
                break;
            case "AUBANK":
                tickerID = "S0003247";
                break;
            case "AARTIDRUGS":
                tickerID = "S0003210";
                break;
            case "AARTIIND":
                tickerID = "S0003340";
                break;
            case "AAVAS":
                tickerID = "S0003281";
                break;
            case "ABBOTINDIA":
                tickerID = "S0003226";
                break;
        case "ACCELYA":
            tickerID = "S0003882";
            break;
        case "ACE":
            tickerID = "";
            break;
        case "ADANIENT":
            tickerID = "S0003094";
            break;
        case "ADANIGREEN":
            tickerID = "S0003149";
            break;
        case "ADANIPORTS":
            tickerID = "S0003086";
            break;
        case "ATGL":
            tickerID = "S0003156";
            break;
        case "ADANITRANS":
            tickerID = "";
            break;
        case "ABCAPITAL":
            tickerID = "S0003291";
            break;
        case "ABFRL":
            tickerID = "S0003323";
            break;
        case "ADVENZYMES":
            tickerID = "S0003391";
            break;
        case "AEGISCHEM":
            tickerID = "S0003629";
            break;
        case "AFFLE":
            tickerID = "S0003153";
            break;
        case "ATFL":
            tickerID = "S0004026";
            break;
        case "AJANTPHARM":
            tickerID = "S0003497";
            break;
        case "ALEMBICLTD":
            tickerID = "S0003627";
            break;
        case "APLLTD":
            tickerID = "S0003266";
            break;
        case "ALKEM":
            tickerID = "S0003287";
            break;
        case "ALKYLAMINE":
            tickerID = "S0003419";
            break;
        case "ALLCARGO":
            tickerID = "S0003327";
            break;
        case "ALOKINDS":
            tickerID = "S0003169";
            break;
        case "AMARAJABAT":
            tickerID = "";
            break;
        case "AMBER":
            tickerID = "S0003489";
            break;
        case "AMBUJACEM":
            tickerID = "S0003102";
            break;
        case "AMRUTANJAN":
            tickerID = "S0003702";
            break;
        case "ANANTRAJ":
            tickerID = "S0003808";
            break;
        case "ANDHRSUGAR":
            tickerID = "S0003681";
            break;
        case "ANGELONE":
            tickerID = "S0003556";
            break;
        case "ANURAS":
            tickerID = "S0005091";
            break;
        case "APARINDS":
            tickerID = "S0003942";
            break;
        case "APCOTEXIND":
            tickerID = "S0004084";
            break;
        case "APOLLOHOSP":
            tickerID = "S0003104";
            break;
        case "APOLLOTYRE":
            tickerID = "S0003055";
            break;
        case "ARVINDFASN":
            tickerID = "S0003482";
            break;
        case "ARVIND":
            tickerID = "S0003215";
            break;
        case "ASAHIINDIA":
            tickerID = "S0003995";
            break;
        case "ASHIANA":
            tickerID = "S0003949";
            break;
        case "ASHOKLEY":
            tickerID = "S0003047";
            break;
        case "ASHOKA":
            tickerID = "S0003308";
            break;
        case "ASIANPAINT":
            tickerID = "S0003079";
            break;
        case "ASTEC":
            tickerID = "S0003131";
            break;
        case "ASTERDM":
            tickerID = "S0003775";
            break;
        case "ASTRAMICRO":
            tickerID = "S0003704";
            break;
        case "ASTRAZEN":
            tickerID = "S0003407";
            break;
        case "ASTRAL":
            tickerID = "S0003532";
            break;
        case "ATUL":
            tickerID = "S0003515";
            break;
        
        case "AUROPHARMA":
            tickerID = "S0003132";
            break;
        case "AUTOAXLES":
            tickerID = "S0003737";
            break;
        case "AVANTIFEED":
            tickerID = "S0003236";
            break;
        case "DMART":
            tickerID = "S0003106";
            break;
        case "AXISBANK":
            tickerID = "S0003048";
            break;
        case "BASF":
            tickerID = "S0003582";
            break;
        case "BEML":
            tickerID = "S0003136";
            break;
        case "BFINVEST":
            tickerID = "S0003705";
            break;
        case "BFUTILITIE":
            tickerID = "S0003364";
            break;
        case "BLS":
            tickerID = "S0004039";
            break;
        case "BSE":
            tickerID = "S0004751";
            break;
        case "BAJAJ-AUTO":
            tickerID = "S0003120";
            break;
        case "BAJAJCON":
            tickerID = "S0003292";
            break;
        case "BAJAJELEC":
            tickerID = "S0003219";
            break;
        case "BAJFINANCE":
            tickerID = "S0003015";
            break;
        case "BAJAJFINSV":
            tickerID = "S0003036";
            break;
        case "BAJAJHIND":
            tickerID = "S0003382";
            break;
        case "BAJAJHLDNG":
            tickerID = "S0003388";
            break;
        case "BALAMINES":
            tickerID = "S0003447";
            break;
        case "BALKRISIND":
            tickerID = "S0003212";
            break;
        case "BALMLAWRIE":
            tickerID = "S0003589";
            break;
        case "BALRAMCHIN":
            tickerID = "S0003279";
            break;
        case "BANCOINDIA":
            tickerID = "S0003505";
            break;
        case "BANDHANBNK":
            tickerID = "S0003080";
            break;
        case "BANKBARODA":
            tickerID = "S0003050";
            break;
        case "BANKINDIA":
            tickerID = "S0003270";
            break;
        case "MAHABANK":
            tickerID = "S0003537";
            break;
        case "BARBEQUE":
            tickerID = "S0005083";
            break;
        case "BATAINDIA":
            tickerID = "S0003108";
            break;
        case "BAYERCROP":
            tickerID = "S0003516";
            break;
        case "BERGEPAINT":
            tickerID = "S0003276";
            break;
        case "BEPL":
            tickerID = "S0003325";
            break;
        case "BDL":
            tickerID = "S0003345";
            break;
        case "BEL":
            tickerID = "S0003091";
            break;
        case "BHARATFORG":
            tickerID = "S0003101";
            break;
        case "BHEL":
            tickerID = "S0003073";
            break;
        case "BPCL":
            tickerID = "S0003060";
            break;
        case "BHARATRAS":
            tickerID = "S0003850";
            break;
        case "BHARTIARTL":
            tickerID = "S0003039";
            break;
        case "BIOCON":
            tickerID = "S0003121";
            break;
        case "BIRLACORPN":
            tickerID = "S0003350";
            break;
        case "BSOFT":
            tickerID = "S0003117";
            break;
        case "BLISSGVS":
            tickerID = "S0003198";
            break;
        case "BLUEDART":
            tickerID = "S0003588";
            break;
        case "BLUESTARCO":
            tickerID = "S0003665";
            break;
        case "BODALCHEM":
            tickerID = "S0003560";
            break;
        case "BBTC":
            tickerID = "S0003601";
            break;
        case "BOMDYEING":
            tickerID = "S0003148";
            break;
        case "BOROLTD":
            tickerID = "S0003428";
            break;
        case "BORORENEW":
            tickerID = "S0003221";
            break;
        case "BOSCHLTD":
            tickerID = "S0003214";
            break;
        case "BRIGADE":        
            tickerID = "S0003778";
            break;
        case "BRITANNIA":
            tickerID = "S0003082";
            break;
        case "BURGERKING":
            tickerID = "";
            break;
        case "CARERATING":
            tickerID = "S0003491";
            break;
        case "CCL":
            tickerID = "S0003655";
            break;
        case "CESC":
            tickerID = "S0003635";
            break;
        case "CGPOWER":
            tickerID = "S0003135";
            break;
        case "CRISIL":
            tickerID = "S0003838";
            break;
        case "CSBBANK":
            tickerID = "S0003267";
            break;
        case "CADILAHC":
            tickerID = "";
            break;
        case "CAMLINFINE":
            tickerID = "S0003493";
            break;
        case "CANFINHOME":
            tickerID = "S0003293";
            break;
        case "CANBK":
            tickerID = "S0003040";
            break;
        case "CAPACITE":
            tickerID = "S0003811";
            break;
        case "CAPLIPOINT":
            tickerID = "S0003462";
            break;
        case "CGCL":
            tickerID = "S0003232";
            break;
        case "CARBORUNIV":
            tickerID = "S0003671";
            break;
        case "CASTROLIND":
            tickerID = "S0003319";
            break;
        case "CEATLTD":
            tickerID = "S0003322";
            break;
        case "CENTRALBK":
            tickerID = "S0003235";
            break;
        case "CDSL":
            tickerID = "S0004750";
            break;
        case "CENTRUM":
            tickerID = "S0003675";
            break;
        case "CENTURYPLY":
            tickerID = "S0003557";
            break;
        case "CENTURYTEX":
            tickerID = "S0003188";
            break;
        case "CERA":
            tickerID = "S0003752";
            break;
        case "CHALET":
            tickerID = "S0003360";
            break;
        case "CHAMBLFERT":
            tickerID = "S0003207";
            break;
        case "CHEMCON":
            tickerID = "S0003357";
            break;
        case "CHENNPETRO":
            tickerID = "S0003375";
            break;
        case "CHOLAHLDNG":
            tickerID = "S0004121";
            break;
        case "CHOLAFIN":
            tickerID = "S0003157";
            break;
        case "CIGNITITEC":
            tickerID = "S0003980";
            break;
        case "CIPLA":
            tickerID = "S0003049";
            break;
        case "CUB":
            tickerID = "S0003233";
            break;
        case "CLNINDIA":
            tickerID = "";
            break;
        case "COALINDIA":
            tickerID = "S0003044";
            break;
        case "COCHINSHIP":
            tickerID = "S0003401";
            break;
        case "COFORGE":
            tickerID = "S0003274";
            break;
        case "COLPAL":
            tickerID = "S0003140";
            break;
        case "CAMS":
            tickerID = "S0003252";
            break;
        case "CONFIPET":
            tickerID = "S0003538";
            break;
        case "CONCOR":
            tickerID = "S0003164";
            break;
        case "COROMANDEL":
            tickerID = "S0003444";
            break;
        case "COSMOFILMS":
            tickerID = "";
            break;
        case "CRAFTSMAN":
            tickerID = "S0005090";
            break;
        case "CREDITACC":
            tickerID = "S0003567";
            break;
        case "CROMPTON":
            tickerID = "S0003163";
            break;
        case "CUMMINSIND":
            tickerID = "S0003204";
            break;
        case "CYIENT":
            tickerID = "S0003228";
            break;
        case "DBCORP":
            tickerID = "S0003975";
            break;
        case "DCBBANK":
            tickerID = "S0003269";
            break;
        case "DCMSHRIRAM":
            tickerID = "S0003908";
            break;
        case "DFMFOODS":
            tickerID = "";
            break;
        case "DLF":
            tickerID = "S0003034";
            break;
        case "DABUR":
            tickerID = "S0003129";
            break;
        case "DALBHARAT":
            tickerID = "S0003494";
            break;
        case "DALMIASUG":
            tickerID = "S0003664";
            break;
            case "DEEPAKFERT":
            tickerID = "";
            break;
        case "DEEPAKNTR":
            tickerID = "S0003125";
            break;
        case "DELTACORP":
            tickerID = "S0003109";
            break;
        case "DEN":
            tickerID = "";
            break;
        case "DHAMPURSUG":
            tickerID = "S0003413";
            break;
        case "DHANI":
            tickerID = "S0003261";
            break;
        case "DHANUKA":
            tickerID = "S0003779";
            break;
        case "DBL":
            tickerID = "S0003332";
            break;
        case "DISHTV":
            tickerID = "S0003184";
            break;
        case "DCAL":
            tickerID = "S0003503";
            break;
        case "DIVISLAB":
            tickerID = "S0003081";
            break;
        case "DIXON":
            tickerID = "S0003180";
            break;
        case "DOLATALGO":
            tickerID = "S0003527";
            break;
        case "DOLLAR":
            tickerID = "S0003324";
            break;
        case "LALPATHLAB":
            tickerID = "S0003374";
            break;
        case "DRREDDY":
            tickerID = "S0003058";
            break;
        case "DREDGECORP":
            tickerID = "S0003436";
            break;
        case "EIDPARRY":
            tickerID = "S0003446";
            break;
        case "EIHOTEL":
            tickerID = "S0003633";
            break;
        case "EPL":
            tickerID = "S0003218";
            break;
        case "ESABINDIA":
            tickerID = "S0003478";
            break;
        case "EASEMYTRIP":
            tickerID = "S0005094";
            break;
        case "EDELWEISS":
            tickerID = "S0003463";
            break;
        case "EICHERMOT":
            tickerID = "S0003093";
            break;
        case "ELECTCAST":
            tickerID = "S0004001";
            break;
        case "ELGIEQUIP":
            tickerID = "S0003477";
            break;
        case "EMAMILTD":
            tickerID = "S0003370";
            break;
        case "ENDURANCE":
            tickerID = "S0003632";
            break;
        case "ENGINERSIN":
            tickerID = "S0003234";
            break;
        case "EQUITAS":
            tickerID = "";
            break;
        case "EQUITASBNK":
            tickerID = "";
            break;
        case "ERIS":
            tickerID = "S0003417";
            break;
        case "ESCORTS":
            tickerID = "S0003096";
            break;
        case "EVEREADY":
            tickerID = "S0003468";
            break;
        case "EXCELINDUS":
            tickerID = "S0003958";
            break;
        case "EXIDEIND":
            tickerID = "S0003202";
            break;
        case "FDC":
            tickerID = "S0003691";
            break;
        case "FEDERALBNK":
            tickerID = "S0003070";
            break;
        case "FMGOETZE":
            tickerID = "S0003566";
            break;
        case "FACT":
            tickerID = "S0003889";
            break;
        case "FILATEX":
            tickerID = "S0003661";
            break;
        case "FINEORG":
            tickerID = "S0003634";
            break;
        case "FINCABLES":
            tickerID = "S0003583";
            break;
        case "FINPIPE":
            tickerID = "S0003676";
            break;
        case "FSL":
            tickerID = "S0003260";
            break;
        case "FORCEMOT":
            tickerID = "S0003411";
            break;
        case "FORTIS":
            tickerID = "S0003296";
            break;
        case "FCONSUMER":
            tickerID = "S0003389";
            break;
        case "FRETAIL":
            tickerID = "S0003211";
            break;
        case "GMBREW":
            tickerID = "S0003977";
            break;
        case "GAIL":
            tickerID = "S0003063";
            break;
        case "GEPIL":
            tickerID = "S0003271";
            break;
        case "GET&D":
            tickerID = "S0003710";
            break;
        case "GMMPFAUDLR":
            tickerID = "S0003172";
            break;
        case "GTPL":
            tickerID = "S0003952";
            break;
        case "GABRIEL":
            tickerID = "S0003891";
            break;
        case "GALAXYSURF":
            tickerID = "S0003409";
            break;
        case "GRSE":
            tickerID = "S0003361";
            break;
        case "GARFIBRES":
            tickerID = "S0003898";
            break;
        case "GATI":
            tickerID = "";
            break;
        case "GICRE":
            tickerID = "S0003552";
            break;
        case "GENUSPOWER":
            tickerID = "S0003924";
            break;
        case "GEOJITFSL":
            tickerID = "S0003654";
            break;
        case "GILLETTE":
            tickerID = "S0003465";
            break;
        case "GLAND":
            tickerID = "S0003201";
            break;
        case "GLAXO":
            tickerID = "S0003695";
            break;
        case "GLENMARK":
            tickerID = "S0003191";
            break;
        case "GPIL":
            tickerID = "S0003735";
            break;
        case "GODFRYPHLP":
            tickerID = "S0003315";
            break;
        case "GODREJAGRO":
            tickerID = "S0003312";
            break;
        case "GODREJCP":
            tickerID = "S0003255";
            break;
        case "GODREJIND":
            tickerID = "S0003473";
            break;
        case "GODREJPROP":
            tickerID = "S0003146";
            break;
        case "GOODYEAR":
            tickerID = "S0003367";
            break;
        case "GRANULES":
            tickerID = "S0003224";
            break;
        case "GRAPHITE":
            tickerID = "S0003162";
            break;
        case "GRASIM":
            tickerID = "S0003182";
            break;
        case "GESHIP":
            tickerID = "S0003592";
            break;
        case "GREAVESCOT":
            tickerID = "S0003268";
            break;
        case "GREENPANEL":
            tickerID = "S0003754";
            break;
        case "GREENPLY":
            tickerID = "S0003714";
            break;
        case "GRINDWELL":
            tickerID = "S0003998";
            break;
        case "GUJALKALI":
            tickerID = "S0003539";
            break;
        case "GAEL":
            tickerID = "S0003673";
            break;
        case "FLUOROCHEM":
            tickerID = "S0003631";
            break;
        case "GUJGASLTD":
            tickerID = "S0003347";
            break;
        case "GIPCL":
            tickerID = "S0003346";
            break;
        case "GMDCLTD":
            tickerID = "S0003302";
            break;
        case "GNFC":
            tickerID = "S0003298";
            break;
        case "GPPL":
            tickerID = "S0003609";
            break;
        case "GSFC":
            tickerID = "S0003520";
            break;
        case "GSPL":
            tickerID = "S0003594";
            break;
        case "GULFOILLUB":
            tickerID = "S0003845";
            break;
        case "HEG":
            tickerID = "S0003145";
            break;
        case "HGINFRA":
            tickerID = "S0003711";
            break;
        case "HBLPOWER":
            tickerID = "S0003575";
            break;
        case "HCLTECH":
            tickerID = "S0003045";
            break;
        case "HDFCAMC":
            tickerID = "S0003144";
            break;
        case "HDFCBANK":
            tickerID = "S0003020";
            break;
        case "HDFCLIFE":
            tickerID = "S0003103";
            break;
        case "HFCL":
            tickerID = "S0003171";
            break;
        case "HIL":
            tickerID = "S0003917";
            break;
        case "HLEGLAS":
            tickerID = "S0000018";
            break;
        case "HSIL":
            tickerID = "S0001045";
            break;
        case "HAPPSTMNDS":
            tickerID = "S0003230";
            break;
        case "HATHWAY":
            tickerID = "S0003600";
            break;
        case "HATSUN":
            tickerID = "S0003577";
            break;
        case "HAVELLS":
            tickerID = "S0003090";
            break;
        case "HCG":
            tickerID = "S0003545";
            break;
        case "HEIDELBERG":
            tickerID = "S0003759";
            break;
        case "HEMIPROP":
            tickerID = "S0003294";
            break;
        case "HERANBA":
            tickerID = "S0005072";
            break;
        case "HERITGFOOD":
            tickerID = "S0003744";
            break;
        case "HEROMOTOCO":
            tickerID = "S0003088";
            break;
        case "HESTERBIO":
            tickerID = "S0004126";
            break;
        case "HIKAL":
            tickerID = "S0003470";
            break;
        case "HSCL":
            tickerID = "S0003251";
            break;
        case "HIMATSEIDE":
            tickerID = "S0003386";
            break;
        case "HINDALCO":
            tickerID = "S0003072";
            break;
        case "HGS":
            tickerID = "S0003460";
            break;
        case "HAL":
            tickerID = "S0003278";
            break;
        case "HCC":
            tickerID = "S0003141";
            break;
        case "HINDCOPPER":
            tickerID = "S0003099";
            break;
        case "HNDFDS":
            tickerID = "S0003895";
            break;
        case "HINDOILEXP":
            tickerID = "S0003280";
            break;
        case "HINDPETRO":
            tickerID = "S0003061";
            break;
        case "HINDUNILVR":
            tickerID = "S0003053";
            break;
        case "HINDZINC":
            tickerID = "S0003378";
            break;
        case "POWERINDIA":
            tickerID = "S0003480";
            break;
        case "HOMEFIRST":
            tickerID = "S0005069";
            break;
        case "HONAUT":
            tickerID = "S0003383";
            break;
        case "HUDCO":
            tickerID = "S0003393";
            break;
        case "HDFC":
            tickerID = "S0003020";
            break;
        case "HUHTAMAKI":
            tickerID = "S0003902";
            break;
        case "IGPL":
            tickerID = "S0003971";
            break;
        case "ICICIBANK":
            tickerID = "S0003019";
            break;
        case "ICICIGI":
            tickerID = "S0003174";
            break;
        case "ICICIPRULI":
            tickerID = "S0003017";
            break;
        case "ISEC":
            tickerID = "S0003334";
            break;
        case "ICRA":
            tickerID = "S0003295";
            break;
        case "IDBI":
            tickerID = "S0003240";
            break;
        case "IDFCFIRSTB":
            tickerID = "S0003137";
            break;
        case "IDFC":
            tickerID = "S0003137";
            break;
        case "IFBIND":
            tickerID = "S0003330";
            break;
        case "IFCI":
            tickerID = "S0003241";
            break;
        case "IIFL":
            tickerID = "S0003379";
            break;
        case "IIFLSEC":
            tickerID = "S0003869";
            break;
        case "IIFLWAM":
            tickerID = "";
            break;
        case "INEOSSTYRO":
            tickerID = "";
            break;
        case "IOLCP":
            tickerID = "S0003369";
            break;
        case "IRB":
            tickerID = "S0003591";
            break;
        case "IRCON":
            tickerID = "S0003438";
            break;
        case "ITC":
            ticker = "ITC";
            break;
        case "ITDCEM":
            tickerID = "S0003402";
            break;
        case "ITI":
            tickerID = "S0003286";
            break;
        case "IGARASHI":
            tickerID = "S0003697";
            break;
        case "INDIACEM":
            tickerID = "S0003363";
            break;
        case "INDIAGLYCO":
            tickerID = "S0003564";
            break;
        case "ITDC":
            tickerID = "S0000111";
            break;
        case "IBULHSGFIN":
            tickerID = "S0003042";
            break;
        case "IBREALEST":
            tickerID = "S0003193";
            break;
        case "INDIAMART":
            tickerID = "S0003410";
            break;
        case "INDIANB":
            tickerID = "S0003195";
            break;
        case "IEX":
            tickerID = "S0003403";
            break;
        case "INDHOTEL":
            tickerID = "S0003257";
            break;
        case "INDIANHUME":
            tickerID = "S0003731";
            break;
        case "IMFA":
            tickerID = "S0004117";
            break;
        case "IOC":
            tickerID = "S0003056";
            break;
        case "IOB":
            tickerID = "S0003683";
            break;
        case "IRCTC":
            tickerID = "S0003024";
            break;
        case "IRFC":
            tickerID = "S0005049";
            break;
        case "INDIGOPNTS":
            tickerID = "S0005070";
            break;
        case "ICIL":
            tickerID = "S0003897";
            break;
        case "INDOSTAR":
            tickerID = "S0003708";
            break;
        case "INDOCO":
            tickerID = "S0003760";
            break;
        case "IGL":
            tickerID = "S0003114";
            break;
        case "INDUSTOWER":
            tickerID = "S0003031";
            break;
        case "INDUSINDBK":
            tickerID = "S0003023";
            break;
        case "INFIBEAM":
            tickerID = "S0003966";
            break;
        case "NAUKRI":
            tickerID = "S0003134";
            break;
        case "INFY":
            tickerID = "S0003032";
            break;
        case "INGERRAND":
            tickerID = "S0003894";
            break;
        case "INOXLEISUR":
            tickerID = "";
            break;
        case "INOXWIND":
            tickerID = "S0003442";
            break;
        case "INSECTICID":
            tickerID = "S0004067";
            break;
        case "INTELLECT":
            tickerID = "S0003349";
            break;
        case "INDIGO":
            tickerID = "S0003124";
            break;
        case "IPCALAB":
            tickerID = "S0003209";
            break;
        case "ISGEC":
            tickerID = "S0000002";
            break;
        case "JBCHEPHARM":
            tickerID = "S0003418";
            break;
        case "JKCEMENT":
            tickerID = "S0003416";
            break;
        case "JKIL":
            tickerID = "S0003743";
            break;
        case "JBMA":
            tickerID = "S0004187";
            break;
        case "JKLAKSHMI":
            tickerID = "S0003412";
            break;
        case "JKPAPER":
            tickerID = "S0003316";
            break;
        case "JKTYRE":
            tickerID = "S0003303";
            break;
        case "JMFINANCIL":
            tickerID = "S0003111";
            break;
        case "JMCPROJECT":
            tickerID = "";
            break;
        case "JSWENERGY":
            tickerID = "S0003186";
            break;
        case "JSWISPL":
            tickerID = "";
            break;
        case "JSWSTEEL":
            tickerID = "S0003097";
            break;
        case "JTEKTINDIA":
            tickerID = "S0003570";
            break;
        case "JAGRAN":
            tickerID = "S0003650";
            break;
        case "JAICORPLTD":
            tickerID = "S0003309";
            break;
        case "JPASSOCIAT":
            tickerID = "S0003110";
            break;
        case "JPPOWER":
            tickerID = "S0003133";
            break;
        case "J&KBANK":
            tickerID = "S0003502";
            break;
        case "JAMNAAUTO":
            tickerID = "S0003392";
            break;
        case "JINDALPOLY":
            tickerID = "S0004092";
            break;
        case "JINDALSAW":
            tickerID = "S0003282";
            break;
        case "JSLHISAR":
            tickerID = "";
            break;
        case "JSL":
            tickerID = "S0003614";
            break;
        case "JINDALSTEL":
            tickerID = "S0003069";
            break;
        case "JINDWORLD":
            tickerID = "S0003656";
            break;
        case "JCHAC":
            tickerID = "S0003827";
            break;
        case "JUBLFOOD":
            tickerID = "S0003054";
            break;
        case "JUBLINGREA":
            tickerID = "S0005095";
            break;
        case "JUBLPHARMA":
            tickerID = "S0003353";
            break;
        case "JUSTDIAL":
            tickerID = "S0003190";
            break;
        case "JYOTHYLAB":
            tickerID = "S0003448";
            break;
        case "KPRMILL":
            tickerID = "S0003474";
            break;
        case "KCP":
            tickerID = "S0003781";
            break;
        case "KEI":
            tickerID = "S0003333";
            break;
        case "KNRCON":
            tickerID = "S0003354";
            break;
        case "KPITTECH":
            tickerID = "S0003587";
            break;
        case "KRBL":
            tickerID = "S0003530";
            break;
        case "KSB":
            tickerID = "S0004060";
            break;
        case "KAJARIACER":
            tickerID = "S0003368";
            break;
        case "KALPATPOWR":
            tickerID = "";
            break;
        case "KALYANKJIL":
            tickerID = "S0005088";
            break;
        case "KSL":
            tickerID = "S0003513";
            break;
        case "KANSAINER":
            tickerID = "S0003729";
            break;
        case "KTKBANK":
            tickerID = "S0003328";
            break;
        case "KARURVYSYA":
            tickerID = "S0003253";
            break;
        case "KSCL":
            tickerID = "S0003259";
            break;
        case "KEC":
            tickerID = "S0003467";
            break;
        case "KIRIINDUS":
            tickerID = "S0003651";
            break;
        case "KIRLOSBROS":
            tickerID = "S0003931";
            break;
        case "KIRLFER":
            tickerID = "S0003703";
            break;
        case "KIRLOSENG":
            tickerID = "S0003834";
            break;
        case "KOLTEPATIL":
            tickerID = "S0003620";
            break;
        case "KOTAKBANK":
            tickerID = "S0003043";
            break;
        case "L&TFH":
            tickerID = "";
            break;
        case "LTTS":
            tickerID = "S0003242";
            break;
        case "LGBBROSLTD":
            tickerID = "S0003978";
            break;
        case "LICHSGFIN":
            tickerID = "S0003066";
            break;
        case "DAAWAT":
            tickerID = "";
            break;
        case "LAOPALA":
            tickerID = "S0003667";
            break;
        case "LAXMIMACH":
            tickerID = "S0003550";
            break;
        case "LTI":
            tickerID = "S0003160";
            break;
        case "LT":
            tickerID = "S0003025";
            break;
        case "LAURUSLABS":
            tickerID = "S0003142";
            break;
        case "LXCHEM":
            tickerID = "S0005089";
            break;
        case "LEMONTREE":
            tickerID = "S0003430";
            break;
        case "LINDEINDIA":
            tickerID = "S0003452";
            break;
        case "LUMAXTECH":
            tickerID = "S0003456";
            break;
        case "LUPIN":
            tickerID = "S0003065";
            break;
        case "LUXIND":
            tickerID = "S0003932";
            break;
        case "MASFIN":
            tickerID = "S0004003";
            break;
        case "MMTC":
            tickerID = "S0003249";
            break;
        case "MOIL":
            tickerID = "S0003551";
            break;
        case "MRF":
            tickerID = "S0003187";
            break;
        case "MSTCLTD":
            tickerID = "S0003553";
            break;
        case "MTARTECH":
            tickerID = "S0005065";
            break;
        case "LODHA":
            tickerID = "S0005078";
            break;
        case "MGL":
            tickerID = "S0003155";
            break;
        case "MTNL":
            tickerID = "S0003521";
            break;
        case "MAHSCOOTER":
            tickerID = "S0003593";
            break;
        case "MAHSEAMLES":
            tickerID = "S0003793";
            break;
        case "M&MFIN":
            tickerID = "S0003076";
            break;
        case "M&M":
            tickerID = "S0003059";
            break;
        case "MAHINDCIE":
            tickerID = "";
            break;
        case "MHRIL":
            tickerID = "S0003914";
            break;
        case "MAHLIFE":
            tickerID = "S0004086";
            break;
        case "MAHLOG":
            tickerID = "S0003597";
            break;
        case "MAITHANALL":
            tickerID = "S0004024";
            break;
        case "MANINFRA":
            tickerID = "S0003626";
            break;
        case "MANAPPURAM":
            tickerID = "S0003183";
            break;
        case "MRPL":
            tickerID = "S0003326";
            break;
        case "MARICO":
            tickerID = "S0003173";
            break;
        case "MARKSANS":
            tickerID = "S0003283";
            break;
        case "MARUTI":
            tickerID = "S0003046";
            break;
        case "MASTEK":
            tickerID = "S0003404";
            break;
        case "MATRIMONY":
            tickerID = "S0003887";
            break;
        case "MFSL":
            tickerID = "S0003038";
            break;
        case "MAXHEALTH":
            tickerID = "S0003533";
            break;
        case "MAYURUNIQ":
            tickerID = "S0003772";
            break;
        case "MAZDOCK":
            tickerID = "S0003112";
            break;
        case "METROPOLIS":
            tickerID = "S0003469";
            break;
        case "MINDTREE":
            tickerID = "";
            break;
        case "MINDACORP":
            tickerID = "S0003424";
            break;
        case "MINDAIND":
            tickerID = "";
            break;
        case "MIDHANI":
            tickerID = "S0003336";
            break;
        case "MOLDTKPAC":
            tickerID = "S0004085";
            break;
        case "MOREPENLAB":
            tickerID = "S0003429";
            break;
        case "MOTILALOFS":
            tickerID = "S0003637";
            break;
        case "MPHASIS":
            tickerID = "S0003335";
            break;
        case "BECTORFOOD":
            tickerID = "S0005061";
            break;
        case "MCX":
            tickerID = "S0003237";
            break;
        case "MUTHOOTFIN":
            tickerID = "S0003078";
            break;
        case "NATCOPHARM":
            tickerID = "S0003373";
            break;
        case "NBCC":
            tickerID = "S0003113";
            break;
        case "NCC":
            tickerID = "S0003176";
            break;
        case "NEOGEN":
            tickerID = "S0003445";
            break;
        case "NESCO":
            tickerID = "S0003573";
            break;
        case "NHPC":
            tickerID = "S0003178";
            break;
        case "NIITLTD":
            tickerID = "S0003483";
            break;
        case "NLCINDIA":
            tickerID = "S0003490";
            break;
        case "NMDC":
            tickerID = "S0003087";
            break;
        case "NOCIL":
            tickerID = "S0003238";
            break;
        case "NRBBEARING":
            tickerID = "S0003381";
            break;
        case "NTPC":
            tickerID = "S0003057";
            break;
        case "NH":
            tickerID = "S0003663";
            break;
        case "NATIONALUM":
            tickerID = "S0003119";
            break;
        case "NFL":
            tickerID = "S0003576";
            break;
        case "NBVENTURES":
            tickerID = "";
            break;
        case "NAVINFLUOR":
            tickerID = "S0003288";
            break;
        case "NAVNETEDUL":
            tickerID = "S0003954";
            break;
        case "NAZARA":
            tickerID = "S0005087";
            break;
        case "NESTLEIND":
            tickerID = "S0003095";
            break;
        case "NETWORK18":
            tickerID = "S0003414";
            break;
        case "NEULANDLAB":
            tickerID = "S0003451";
            break;
        case "NEWGEN":
            tickerID = "S0004000";
            break;
        case "NILKAMAL":
            tickerID = "S0004020";
            break;
        case "NAM-INDIA":
            tickerID = "S0003254";
            break;
        case "NOVARTIND":
            tickerID = "S0000011";
            break;
        case "NUCLEUS":
            tickerID = "S0003348";
            break;
        case "OBEROIRLTY":
            tickerID = "S0003390";
            break;
        case "ONGC":
            tickerID = "S0003030";
            break;
        case "OIL":
            tickerID = "S0003223";
            break;
        case "OLECTRA":
            tickerID = "S0003338";
            break;
        case "OFSS":
            tickerID = "S0003405";
            break;
        case "ORIENTCEM":
            tickerID = "S0003517";
            break;
        case "ORIENTELEC":
            tickerID = "S0003796";
            break;
        case "OAL":
            tickerID = "S0003907";
            break;
        case "OCCL":
            tickerID = "S0004046";
            break;
        case "ORISSAMINE":
            tickerID = "S0003616";
            break;
        case "PCJEWELLER":
            tickerID = "S0003205";
            break;
        case "PCBL":
            tickerID = "S0003394";
            break;
        case "PIIND":
            tickerID = "S0003192";
            break;
        case "PNBGILTS":
            tickerID = "S0003851";
            break;
        case "PNBHOUSING":
            tickerID = "S0003568";
            break;
        case "PNCINFRA":
            tickerID = "S0003698";
            break;
        case "PSPPROJECT":
            tickerID = "S0003690";
            break;
        case "PFS":
            tickerID = "S0003810";
            break;
        case "PTC":
            tickerID = "S0003426";
            break;
        case "PVR":
            tickerID = "S0003027";
            break;
        case "PAGEIND":
            tickerID = "S0003130";
            break;
        case "PAISALO":
            tickerID = "S0003741";
            break;
        case "PANACEABIO":
            tickerID = "S0003355";
            break;
        case "PARAGMILK":
            tickerID = "S0003509";
            break;
        case "PERSISTENT":
            tickerID = "S0003437";
            break;
        case "PETRONET":
            tickerID = "S0003152";
            break;
        case "PFIZER":
            tickerID = "S0003170";
            break;
        case "PHOENIXLTD":
            tickerID = "S0003658";
            break;
        case "PIDILITIND":
            tickerID = "S0003161";
            break;
        case "PILANIINVS":
            tickerID = "S0003874";
            break;
        case "PEL":
            tickerID = "S0003118";
            break;
        case "POLYMED":
            tickerID = "S0003686";
            break;
        case "POLYCAB":
            tickerID = "S0003225";
            break;
        case "POLYPLEX":
            tickerID = "S0003916";
            break;
        case "POONAWALLA":
            tickerID = "S0003522";
            break;
        case "PFC":
            tickerID = "S0003168";
            break;
        case "POWERGRID":
            tickerID = "S0003068";
            break;
        case "PRAJIND":
            tickerID = "S0003194";
            break;
        case "PRAKASH":
            tickerID = "S0003783";
            break;
        case "DIAMONDYD":
            tickerID = "S0004164";
            break;
        case "PRESTIGE":
            tickerID = "S0003499";
            break;
        case "PRINCEPIPE":
            tickerID = "S0003724";
            break;
        case "PRSMJOHNSN":
            tickerID = "S0003791";
            break;
        case "PRIVISCL":
            tickerID = "S0003830";
            break;
        case "PGHL":
            tickerID = "S0003578";
            break;
        case "PGHH":
            tickerID = "S0003669";
            break;
        case "PSB":
            tickerID = "S0004022";
            break;
        case "PUNJABCHEM":
            tickerID = "S0004049";
            break;
        case "PNB":
            tickerID = "S0003052";
            break;
        case "PURVA":
            tickerID = "S0003717";
            break;
        case "QUESS":
            tickerID = "S0003677";
            break;
        case "QUICKHEAL":
            tickerID = "S0003657";
            break;
        case "RSYSTEMS":
            tickerID = "S0003939";
            break;
        case "RBLBANK":
            tickerID = "S0003062";
            break;
        case "RECLTD":
            tickerID = "S0003127";
            break;
        case "RHIM":
            tickerID = "S0003890";
            break;
        case "RITES":
            tickerID = "S0003284";
            break;
        case "RPSGVENT":
            tickerID = "S0003880";
            break;
        case "RADICO":
            tickerID = "S0003547";
            break;
        case "RVNL":
            tickerID = "";
            break;
        case "RAILTEL":
            tickerID = "S0005051";
            break;
        case "RAIN":
            tickerID = "S0003272";
            break;
        case "RAJESHEXPO":
            tickerID = "S0003652";
            break;
        case "RALLIS":
            tickerID = "S0003423";
            break;
        case "RAMCOIND":
            tickerID = "S0004011";
            break;
        case "RAMCOSYS":
            tickerID = "S0003179";
            break;
        case "RKFORGE":
            tickerID = "S0003922";
            break;
        case "RANEHOLDIN":
            tickerID = "S0003543";
            break;
        case "RCF":
            tickerID = "S0003307";
            break;
        case "RATNAMANI":
            tickerID = "S0003839";
            break;
        case "RTNINDIA":
            tickerID = "S0003541";
            break;
        case "RTNPOWER":
            tickerID = "S0003064";
            break;
        case "RAYMOND":
            tickerID = "S0003199";
            break;
        case "REDINGTON":
            tickerID = "S0003787";
            break;
        case "RELAXO":
            tickerID = "S0003277";
            break;
        case "RELIANCE":
            tickerID = "S0003018";
            break;
        case "RELINFRA":
            tickerID = "S0003245";
            break;
        case "RPOWER":
            tickerID = "S0003264";
            break;
        case "RELIGARE":
            tickerID = "S0003615";
            break;
        case "REPCOHOME":
            tickerID = "S0003599";
            break;
        case "ROSSARI":
            tickerID = "S0003512";
            break;
        case "ROUTE":
            tickerID = "S0003248";
            break;
        case "RUPA":
            tickerID = "S0003630";
            break;
        case "SHK":
            tickerID = "S0003443";
            break;
        case "SBICARD":
            tickerID = "S0003139";
            break;
        case "SBILIFE":
            tickerID = "S0003216";
            break;
        case "SEAMECLTD":
            tickerID = "S0004137";
            break;
        case "SIS":
            tickerID = "S0003510";
            break;
        case "SJVN":
            tickerID = "S0003415";
            break;
        case "SKFINDIA":
            tickerID = "S0003733";
            break;
        case "SMSPHARMA":
            tickerID = "S0003487";
            break;
        case "SRF":
            tickerID = "S0003197";
            break;
        case "SADBHAV":
            tickerID = "S0003523";
            break;
        case "SAGCEM":
            tickerID = "S0003343";
            break;
        case "SANDHAR":
            tickerID = "S0004297";
            break;
        case "SANGHIIND":
            tickerID = "S0003406";
            break;
        case "SANOFI":
            tickerID = "S0003227";
            break;
        case "SARDAEN":
            tickerID = "S0003959";
            break;
        case "SAREGAMA":
            tickerID = "S0004031";
            break;
        case "SASKEN":
            tickerID = "S0003638";
            break;
        case "SATIA":
            tickerID = "S0003985";
            break;
        case "SOTL":
            tickerID = "S0003901";
            break;
        case "SCHAEFFLER":
            tickerID = "S0003983";
            break;
        case "SCHNEIDER":
            tickerID = "S0003725";
            break;
        case "SEQUENT":
            tickerID = "S0003455";
            break;
        case "SESHAPAPER":
            tickerID = "S0003798";
            break;
        case "SHALBY":
            tickerID = "S0003806";
            break;
        case "SHANKARA":
            tickerID = "S0003504";
            break;
        case "SHANTIGEAR":
            tickerID = "S0003944";
            break;
        case "SHARDACROP":
            tickerID = "S0004116";
            break;
        case "SHARDAMOTR":
            tickerID = "S0003800";
            break;
        case "SFL":
            tickerID = "S0004218";
            break;
        case "SHILPAMED":
            tickerID = "S0003337";
            break;
        case "SCI":
            tickerID = "";
            break;
        case "SHOPERSTOP":
            tickerID = "S0003501";
            break;
        case "SHREECEM":
            tickerID = "S0003220";
            break;
        case "RENUKA":
            tickerID = "S0003344";
            break;
        case "SHRIRAMCIT":
            tickerID = "";
            break;
        case "SRTRANSFIN":
            tickerID = "";
            break;
        case "SIEMENS":
            tickerID = "S0003217";
            break;
        case "SIYSIL":
            tickerID = "S0003514";
            break;
        case "SNOWMAN":
            tickerID = "S0003185";
            break;
        case "SOBHA":
            tickerID = "S0003289";
            break;
        case "SOLARINDS":
            tickerID = "S0003719";
            break;
        case "SOLARA":
            tickerID = "S0003750";
            break;
        case "SOMANYCERA":
            tickerID = "S0003699";
            break;
        case "SHIL":
            tickerID = "";
            break;
        case "SONACOMS":
            tickerID = "S0005104";
            break;
        case "SONATSOFTW":
            tickerID = "S0003476";
            break;
        case "SOUTHBANK":
            tickerID = "S0003300";
            break;
        case "SPANDANA":
            tickerID = "S0003970";
            break;
        case "SPICEJET":
            tickerID = "S0003071";
            break;
        case "STARCEMENT":
            tickerID = "S0003992";
            break;
        case "SBIN":
            tickerID = "S0003016";
            break;
        case "SAIL":
            tickerID = "S0003035";
            break;
        case "SSWL":
            tickerID = "S0003906";
            break;
        case "SWSOLAR":
            tickerID = "S0003565";
            break;
        case "STLTECH":
            tickerID = "S0003492";
            break;
        case "STOVEKRAFT":
            tickerID = "S0005068";
            break;
        case "STAR":
            tickerID = "S0003177";
            break;
        case "SUBEXLTD":
            tickerID = "S0003143";
            break;
        case "SUBROS":
            tickerID = "S0003625";
            break;
        case "SUDARSCHEM":
            tickerID = "S0003563";
            break;
        case "SUMICHEM":
            tickerID = "S0003495";
            break;
        case "SPARC":
            tickerID = "S0003531";
            break;
        case "SUNPHARMA":
            tickerID = "S0003089";
            break;
        case "SUNTV":
            tickerID = "S0003084";
            break;
        case "SUNCLAYLTD":
            tickerID = "";
            break;
        case "SUNDARMFIN":
            tickerID = "S0003716";
            break;
        case "SUNDRMFAST":
            tickerID = "S0003611";
            break;
        case "SUNFLAG":
            tickerID = "S0003684";
            break;
        case "SUNTECK":
            tickerID = "S0003441";
            break;
        case "SUPRAJIT":
            tickerID = "S0003828";
            break;
        case "SUPREMEIND":
            tickerID = "S0003558";
            break;
        case "SUPPETRO":
            tickerID = "";
            break;
        case "SURYAROSNI":
            tickerID = "S0003610";
            break;
        case "SURYODAY":
            tickerID = "S0005076";
            break;
        case "SUVENPHAR":
            tickerID = "S0003304";
            break;
        case "SUZLON":
            tickerID = "S0003098";
            break;
        case "SWANENERGY":
            tickerID = "S0003356";
            break;
        case "SWARAJENG":
            tickerID = "S0004044";
            break;
        case "SYMPHONY":
            tickerID = "S0003548";
            break;
        case "SYNGENE":
            tickerID = "S0003256";
            break;
        case "TCIEXP":
            tickerID = "S0004100";
            break;
        case "TCNSBRANDS":
            tickerID = "S0003387";
            break;
        case "TTKPRESTIG":
            tickerID = "S0003721";
            break;
        case "TVTODAY":
            tickerID = "S0004063";
            break;
        case "TV18BRDCST":
            tickerID = "S0003208";
            break;
        case "TVSMOTOR":
            tickerID = "S0003138";
            break;
        case "TVSSRICHAK":
            tickerID = "S0003258";
            break;
        case "TAKE":
            tickerID = "S0003229";
            break;
        case "TNPL":
            tickerID = "S0003753";
            break;
        case "TANLA":
            tickerID = "S0003471";
            break;
        case "TASTYBITE":
            tickerID = "S0000151";
            break;
        case "TATACHEM":
            tickerID = "S0003100";
            break;
        case "TATACOFFEE":
            tickerID = "";
            break;
        case "TATACOMM":
            tickerID = "S0003598";
            break;
        case "TCS":
            tickerID = "S0003051";
            break;
        case "TATACONSUM":
            tickerID = "S0003126";
            break;
        case "TATAELXSI":
            tickerID = "S0003158";
            break;
        case "TATAINVEST":
            tickerID = "S0003641";
            break;
        case "TATAMETALI":
            tickerID = "";
            break;
        case "TATAMTRDVR":
            tickerID = "S0003297";
            break;
        case "TATAMOTORS":
            tickerID = "S0003022";
            break;
        case "TATAPOWER":
            tickerID = "S0003067";
            break;
        case "TATASTLLP":
            tickerID = "";
            break;
        case "TATASTEEL":
            tickerID = "S0003026";
            break;
        case "TTML":
            tickerID = "S0003540";
            break;
        case "TEAMLEASE":
            tickerID = "S0003875";
            break;
        case "TECHM":
            tickerID = "S0003115";
            break;
        case "TECHNOE":
            tickerID = "S0003867";
            break;
        case "TEJASNET":
            tickerID = "S0003231";
            break;
        case "NIACL":
            tickerID = "S0003459";
            break;
        case "RAMCOCEM":
            tickerID = "S0003371";
            break;
        case "THERMAX":
            tickerID = "S0003694";
            break;
        case "TIRUMALCHM":
            tickerID = "S0003362";
            break;
        case "THOMASCOOK":
            tickerID = "S0003662";
            break;
        case "THYROCARE":
            tickerID = "S0003372";
            break;
        case "TIDEWATER":
            tickerID = "S0003854";
            break;
        case "TIMETECHNO":
            tickerID = "S0003774";
            break;
        case "TIMKEN":
            tickerID = "S0003968";
            break;
        case "TINPLATE":
            tickerID = "";
            break;
        case "TITAN":
            tickerID = "S0003074";
            break;
        case "TORNTPHARM":
            tickerID = "S0003222";
            break;
        case "TORNTPOWER":
            tickerID = "S0003275";
            break;
        case "TCI":
            tickerID = "S0003868";
            break;
        case "TRENT":
            tickerID = "S0003313";
            break;
        case "TRIDENT":
            tickerID = "S0003301";
            break;
        case "TRIVENI":
            tickerID = "S0003554";
            break;
        case "TRITURBINE":
            tickerID = "S0003915";
            break;
        case "TIINDIA":
            tickerID = "S0003805";
            break;
        case "UCOBANK":
            tickerID = "S0003707";
            break;
        case "UFLEX":
            tickerID = "S0003608";
            break;
        case "UPL":
            tickerID = "@S0003029";
            break;
        case "UTIAMC":
            tickerID = "S0003290";
            break;
        case "UJJIVAN":
            tickerID = "";
            break;
        case "UJJIVANSFB":
            tickerID = "S0003458";
            break;
        case "ULTRACEMCO":
            tickerID = "S0003075";
            break;
        case "UNICHEMLAB":
            tickerID = "S0003900";
            break;
        case "UNIONBANK":
            tickerID = "S0003243";
            break;
        case "UBL":
            tickerID = "S0003196";
            break;
        case "MCDOWELL-N":
            tickerID = "";
            break;
        case "USHAMART":
            tickerID = "S0003453";
            break;
        case "VGUARD":
            tickerID = "S0003408";
            break;
        case "VMART":
            tickerID = "S0003506";
            break;
        case "VIPIND":
            tickerID = "S0003535";
            break;
        case "VSTTILLERS":
            tickerID = "S0003909";
            break;
        case "VRLLOG":
            tickerID = "S0003472";
            break;
        case "VSTIND":
            tickerID = "S0003865";
            break;
        case "WABAG":
            tickerID = "S0003265";
            break;
        case "VAIBHAVGBL":
            tickerID = "S0003749";
            break;
        case "VAKRANGEE":
            tickerID = "S0003123";
            break;
        case "VALIANTORG":
            tickerID = "S0003431";
            break;
        case "VTL":
            tickerID = "S0003644";
            break;
        case "VARROC":
            tickerID = "S0003692";
            break;
        case "VBL":
            tickerID = "S0003351";
            break;
        case "VEDL":
            tickerID = "S0003041";
            break;
        case "VENKEYS":
            tickerID = "S0003536";
            break;
        case "VESUVIUS":
            tickerID = "S0004235";
            break;
        case "VINATIORGA":
            tickerID = "S0003341";
            break;
        case "VINDHYATEL":
            tickerID = "S0004035";
            break;
        case "IDEA":
            tickerID = "S0003014";
            break;
        case "VOLTAMP":
            tickerID = "S0003739";
            break;
        case "VOLTAS":
            tickerID = "S0003107";
            break;
        case "WABCOINDIA":
            tickerID = "";
            break;
        case "WELCORP":
            tickerID = "S0003151";
            break;
        case "WELENT":
            tickerID = "S0003950";
            break;
        case "WELSPUNIND":
            tickerID = "";
            break;
        case "WSTCSTPAPR":
            tickerID = "S0003728";
            break;
        case "WESTLIFE":
            tickerID = "S0003246";
            break;
        case "WHEELS":
            tickerID = "S0004058";
            break;
        case "WHIRLPOOL":
            tickerID = "S0003352";
            break;
        case "WIPRO":
            tickerID = "S0003105";
            break;
        case "WOCKPHARMA":
            tickerID = "S0003167";
            break;
        case "WONDERLA":
            tickerID = "S0003617";
            break;
        case "YESBANK":
            tickerID = "S0003021";
            break;
        case "ZEEL":
            tickerID = "S0003037";
            break;
        case "ZENSARTECH":
            tickerID = "S0003607";
            break;
        case "ZYDUSWELL":
            tickerID = "S0003672";
            break;
        case "ECLERX":
            tickerID = "S0003420";
            break;
        case "DOLLAR":
            tickerID = "S0003324";
            break;
            default:
                console.error('Unknown ticker:', tickerID);
                return;
        }
        const urlliveData = `https://api-mintgenie.livemint.com/api-gateway/fundamental/markets-data/live-price/v2?exchangeCode=BSE&tickerId=${tickerID}`;
    
        try {
            const response = await fetch(urlliveData, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
    
            return await response.json(); // Directly return the parsed data
    
        } catch (error) {
            console.error('Failed to fetch live data:', error);
            throw error; // Rethrow the error for further handling
        }
    };

    useEffect(() => {
        // Fetch the stock data using the stockName from the URL
        const fetchData = async () => {
        try {
            // Example API call
            const data = await fetchAndDisplayLivePriceData(post.stockticker);
            const userStockBuyPrice = Number(data.price); // Set userStockBuyPrice from data.price
            setStocklivePrice(userStockBuyPrice);
            const response = await API.getstockByname(post.stockticker);
            if (response.isSuccess) {
            setStockData(response.data);
            if (response.data.length > 0) {
                // Set the live price from the first stock data received
                setStocklivePrice(Number(response.data[0].price)); 
            }
            }
        } catch (error) {
            console.error("Error fetching stock data:", error);
            
        }
        };
        fetchData();
        // Fetch data whenever the stockName parameter changes
    }, [post]);

    return (
    // <>
    //     <TableCell>{post.stockticker}</TableCell>
    //     <TableCell>{post.stockname}</TableCell>
    //     <TableCell>{post.userstockBuyprice}</TableCell>
    //     <TableCell>{post.target?.toFixed(2)}</TableCell>
    //     <TableCell>{post.stoploss?.toFixed(2)}</TableCell>
    //     <TableCell>{new Date(post.userbuydate).toLocaleDateString()}</TableCell>
    //     <TableCell>{post.portfolioname}</TableCell>
    //     <TableCell>{post.usersellprice ? post.usersellprice : "N/A"}</TableCell>
    //     <TableCell>{post.userselldate ? new Date(post.userselldate).toLocaleDateString() : "N/A"}</TableCell>
    //     <TableCell>{post.expectedExitDate ? new Date(post.expectedExitDate).toLocaleDateString() : "N/A"}</TableCell>
    // </>
    <>
            <>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.stockticker}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.stockname}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {stocklivePrice}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.defaultbuyprice !== null ? post.defaultbuyprice : post.userstockBuyprice}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.target?.toFixed(2)}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.stoploss?.toFixed(2)}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {new Date(post.userbuydate).toLocaleDateString()}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.portfolioname}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.defaultsellprice !== null ? post.defaultsellprice : post.usersellprice}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.userselldate ? new Date(post.userselldate).toLocaleDateString() : "N/A"}
            </TableCell>
            <TableCell onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                {post.expectedExitDate ? new Date(post.expectedExitDate).toLocaleDateString() : "N/A"}
            </TableCell>
            </>
            <>
            {showDetailsIndex === "index" && (
                        
                            
                                <>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaulttarget !== null && (
                                        <div>Set Target: {post.defaulttarget}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaultstoploss !== null && (
                                        <div>Set Stoploss: {post.defaultstoploss}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaultquantity !== null && (
                                        <div>Buy Quantity: {post.defaultquantity}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaultbuyprice !== null && (
                                        <div>User Buy Price: {post.defaultbuyprice}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaultquantity !== null && (post.defaultbuyprice !== null || post.userstockBuyprice !== null) &&(
                                    <div>
                                    Investment: 
                                    {post.defaultquantity !== null && (post.defaultbuyprice !== null || post.userstockBuyprice !== null)
                                        ? post.defaultquantity * (post.defaultbuyprice !== null ? post.defaultbuyprice : post.userstockBuyprice)
                                        : ""
                                    }
                                    </div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaultsellprice !== null && (
                                        <div>User Sell Price: {post.defaultsellprice}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.defaultquantity !== null && (post.defaultsellprice !== null || post.usersellprice !== null) &&(
                                    <div>
                                    Release Investment: 
                                    {post.defaultquantity !== null && (post.defaultsellprice !== null || post.usersellprice !== null)
                                        ? post.defaultquantity * (post.defaultsellprice !== null ? post.defaultsellprice : post.usersellprice)
                                        : ""
                                    }
                                    </div>
                                    )}
                                </TableCell> 
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.stockBuyprice !== null && (
                                        <div>AI Buy Price: {post.stockBuyprice}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.buydate !== null && (
                                        <div>AI Buy date: {new Date(post.buydate).toLocaleDateString()}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.action !== null && (
                                        <div>Call Type: {post.action}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.sellprice !== null && (
                                        <div>AI Sell Price: {post.sellprice}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.notification === "sell" && post.sellmaxprice !== null && post.weekComplate !== "sell" && (
                                        <div>Upcomming Maximum Sell Price: {post.sellmaxprice}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.notification === "sell" && post.sellminprice !== null && post.weekComplate !== "sell" &&(
                                        <div>Upcomming Minimum Sell Price: {post.sellminprice}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.notification === "sell" && post.selldate !== null && (
                                        <div>AI Sell Date: {new Date(post.selldate).toLocaleDateString()}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.bookpercentage !== null && (
                                        <div>AI Booked percentage: {post.bookpercentage}</div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {stocklivePrice !== null && post.userstockBuyprice !== null && post.action !== "sell" && (
                                        <div>
                                        User Live Change: {(((stocklivePrice / post.userstockBuyprice) - 1) * 100).toFixed(2)}%
                                        </div>
                                    )}
                                    
                                    {post.usersellprice !== null && post.userstockBuyprice !== null && post.action === "sell" && (
                                        <div>
                                        User Change: {(((post.usersellprice / post.userstockBuyprice) - 1) * 100).toFixed(2)}%
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {stocklivePrice !== null && post.userstockBuyprice !== null && post.weekComplate !== "sell" && (
                                        <div>
                                        AI Live Change: {(((stocklivePrice / post.stockBuyprice)-1)*100).toFixed(2)}%
                                        </div>
                                    )}
                                    
                                    {post.usersellprice !== null && post.userstockBuyprice !== null && post.weekComplate === "sell" && (
                                        <div>
                                        AI Change: {(((post.sellprice / post.stockBuyprice)-1)*100).toFixed(2)}%
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell colSpan={9} style={{ backgroundColor: '#f9f9f9' }}>
                                    {post.sttarget !== null && post.action !== "sell" && (
                                        
                                        <div>
                                        AI Short Term Target:{post.sttarget}
                                        </div>
                                        
                                    )}
                                    
                                    { post.lttarget !== null && post.action === "sell" && (
                                        
                                        <div>
                                        AI Long Term Target:{post.lttarget}
                                        </div>
                                        
                                    )}
                                    {post.ptarget !== null && post.action === "sell" && (
                                        
                                        <div>
                                        AI 1 Year Term Target:{post.ptarget}
                                        </div>
                                        
                                    )}
                                    {post.pstoploss !== null && post.action === "sell" && (
                                        
                                        <div>
                                        AI Stoploss:{post.pstoploss}
                                        </div>
                                        
                                    )}
                                    
                                </TableCell>
                                </>
                            
                            
                        )}
            </>
    </>
    );
};


export default Calldata;
