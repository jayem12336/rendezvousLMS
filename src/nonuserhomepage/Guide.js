import { Grid } from '@material-ui/core'
import React from 'react'
import NavBar from '../components/navbar/NavBar'

export default function Guide() {
    return (
        <>
            <NavBar />
            <Grid container alignContent='center' alignitem='center' justify='center' style={{marginTop: '100px'}}>
                <Grid item>
                    <h1>Guide</h1>
                </Grid>
            </Grid>
        </>
    )
}
