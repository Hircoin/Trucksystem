import { Grid } from '@mui/material';
import Categories from './Categories';
import Positions from './Positions';




const Myportfolio = () => {

    return (
        <>
            <Grid container>
                <Grid item lg={3} xs={12} sm={4}>
                    <Categories /> 
                </Grid>
                <Grid container item xs={12} sm={8} lg={9}>
                    <Positions /> 
                </Grid>
            </Grid>
        </>
    )
}

export default Myportfolio;