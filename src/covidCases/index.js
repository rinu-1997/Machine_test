import React, { Component } from 'react'
import {
    withStyles,
    TextField,
    Grid,
    Paper
} from '@material-ui/core'
import compose from 'recompose/compose'
import StateWiseData from './stateWiseData'
import { getCovidData } from '../actions/covidCasesActions'



const styles = () => ({
    titleStyle: {
        color: '#375178',
        width: '80%'
    },
    paperStyle: {
        backgroundColor: '#499699',
        borderRadius: '5px'
    },
    containerStyle: {
        maxHeight: 1000, overflow: 'auto'
    }
})

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            covidData: {}
        }
    }
    componentDidMount() {
        getCovidData()
            .then((result) => {
                this.setState({ covidData: result })
            })

    }

    onSearch = (e) => {
        const { covidData } = this.state
        if (e.target.value) {
            const filteredData = Object.fromEntries(
                Object.entries(covidData).filter(([key, value]) => key.includes(e.target.value)))
            this.setState({ covidData: filteredData })
        }
        else {
            getCovidData()
                .then((result) => {
                    this.setState({ covidData: result })
                })
        }

    }



    render() {
        const { covidData } = this.state
        const { classes } = this.props
        return (
            <Paper style={{ margin: 5 }}>
                <Grid container className={classes.paperStyle} direction="row" justify="center" alignItems="center">
                    <Grid item className={classes.titleStyle}> <h1>COVID CASES IN INDIA</h1></Grid>
                    <Grid item > <TextField
                        id="standard-search" label="Search " type="search"
                        onChange={(e) => this.onSearch(e)}
                    /></Grid>
                </Grid>

                <Grid container direction="column" className={classes.containerStyle}

                >
                    <StateWiseData covidData={covidData} />
                </Grid>
            </Paper>
        )
    }
}


export default
    compose(
        withStyles(styles)
    )
        (MainPage)
