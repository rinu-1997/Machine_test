import React, { Component } from 'react'
import {
    withStyles,
    Card,
    Grid
} from '@material-ui/core'
import compose from 'recompose/compose'



const styles = () => ({
    cardStyle: {
        border: '1px',
        zIndex: 5,
        backgroundColor: '#ddd',
        borderRadius: '2px',
        marginBottom: 5,
        display: 'block',
        height: 150,
        width: 250,
        paddingBottom: 2,
        color: '#375178'
    },
    mainTitle: {
        backgroundColor: '#499699',
        fontWeight:'bold'
    }
})


/**
 * Basic  reusable card component 
 */
class DataCard extends Component {

    render() {
        const { eachData, onClick, count, classes } = this.props
        const { confirmed, deceased, recovered } = count || { confirmed: 0, deceased: 0, recovered: 0 }
        return (
            <Grid item xs={2} >
                <Card className={classes.cardStyle} onClick={onClick}>
                    <h4 className={classes.mainTitle}>{eachData[0]}</h4>
                    <Grid container direction='column' style={{fontWeight:'bold'}}>
                        <Grid item> CONFIRMED : {confirmed}</Grid>
                        <Grid item> RECOVERED : {recovered}</Grid>
                        <Grid item> DECEASED  : {deceased}</Grid>
                    </Grid>
                </Card>
            </Grid>

        )
    }
}


export default
    compose(
        withStyles(styles)
    )
        (DataCard)
