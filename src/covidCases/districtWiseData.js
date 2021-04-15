/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import {
    withStyles,
    Grid,
    Paper,
    Modal
} from '@material-ui/core'
import compose from 'recompose/compose'
import DataCard from './dataCard'



const styles = () => ({
    paper: {
        position: 'absolute',
        top: 100,
        left: (window.innerWidth - getModalWidth()) / 2,
        width: getModalWidth(),
        maxHeight: 700,
        overflow: 'auto',
        padding:5,
        color: '#375178',
        backgroundColor: '#ddd',
        paddingLeft:15
    },
})

function getModalWidth() {
    let MODAL_WIDTH = 0
    if (window.innerWidth < 1500) MODAL_WIDTH = window.innerWidth / 4
    else MODAL_WIDTH = window.innerWidth / 6
    return MODAL_WIDTH
}



/**
 * District wise listing of data
 */
class DistrictWiseData extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        const { stateClicked, handleClose, stateDetails, classes } = this.props
        return (
            <Modal
                open={stateClicked} onClose={handleClose}>
                <Paper className={classes.paper}
                >
                    <h2> {stateDetails[0]} &gt; Districts</h2>
                    {stateDetails[1] && stateDetails[1].districtData && Object.entries(stateDetails[1].districtData).length ?
                        Object.entries(stateDetails[1].districtData).map((eachDistrict) => <Grid container direction='column' justify="center">
                            <DataCard
                                eachData={eachDistrict}
                                count={{ confirmed: eachDistrict[1].confirmed, recovered: eachDistrict[1].recovered, deceased: eachDistrict[1].deceased }}
                            /></Grid>)
                        : null}
                </Paper>
            </Modal>
        )
    }
}


export default
    compose(
        withStyles(styles)
    )
        (DistrictWiseData)
