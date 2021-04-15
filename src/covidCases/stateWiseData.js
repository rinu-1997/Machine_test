import React, { Component } from 'react'
import DataCard from './dataCard'
import DistrictWiseData from './districtWiseData'



/**
 * State wise listing of data
 */
class StateWiseData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateClicked: false,
            stateDetails: {}
        }
    }

    onStateClick = (details) => {
        this.setState({ stateClicked: true, stateDetails: details })
    }

    handleClose = () => {
        this.setState({ stateClicked: false, stateDetails: {} })
    }
    getCounts = (eachStateData) => {
        let confirmedCount = 0
        let recoveredCount = 0
        let deceasedCount = 0
        if (eachStateData.districtData && Object.entries(eachStateData.districtData).length) {
            Object.entries(eachStateData.districtData).map((eachDist) => {
                confirmedCount = confirmedCount + eachDist[1].confirmed
                recoveredCount = recoveredCount + eachDist[1].recovered
                deceasedCount = deceasedCount + eachDist[1].deceased
                return null
            })
        }
        return { confirmed: confirmedCount, recovered: recoveredCount, deceased: deceasedCount }

    }
    render() {
        const { covidData } = this.props
        const { stateClicked, stateDetails } = this.state
        return (
            <>
                {covidData && Object.entries(covidData).length ?
                    Object.entries(covidData).map((eachState) => 
                        <DataCard
                            eachData={eachState}
                            onClick={() => this.onStateClick(eachState)}
                            count={this.getCounts(eachState[1])}
                        />)
                    : null}
                {stateClicked ? <DistrictWiseData
                    stateClicked={stateClicked}
                    stateDetails={stateDetails}
                    handleClose={this.handleClose}
                /> : null}
            </>
        )
    }
}


export default  (StateWiseData)
