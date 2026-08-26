import { Grid } from '@mui/material';
import PropertyCategories from '../home/PropertyCategories';
import Renters from '../home/post/Renters';



const AllRenterDetail = () => {

    return (
        <>
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <PropertyCategories /> 
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Renters /> 
                </Grid>
            </Grid>
        </>
    )
}

export default AllRenterDetail;