import React from 'react'

//Material ui
import { Grid } from '@material-ui/core'

//Component NavBar
import NavBar from '../../components/NavBar/NavBar'

export default function Smile() {
    return (
        <>
            <NavBar />
            <Grid container alignContent='center' alignitem='center' justify='center' style={{marginTop: '100px'}}>
                <Grid item>
                    <h1>Smile</h1>
                </Grid>
            </Grid>
        </>
    )
}
