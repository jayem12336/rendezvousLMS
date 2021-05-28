import { Grid } from '@material-ui/core'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'

export default function Faqs() {
    return (
        <>
            <NavBar />
            <Grid container alignContent='center' alignitem='center' justify='center' style={{marginTop: '100px'}}>
                <Grid item>
                    <h1>Faqs</h1>
                </Grid>
            </Grid>
        </>
    )
}
