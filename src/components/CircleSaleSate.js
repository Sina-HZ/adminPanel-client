import React, { useState } from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import Chart from 'react-apexcharts'

const useStyles = makeStyles(theme => ({
    
    main: {
        backgroundColor: '#fff',
        height: '100%',
    },
    chart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}))


const CircleSaleSate = () => {
    const classes = useStyles()
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'Sales-Percent-Circle-Chart',
                fontFamily: 'Yekan Bakh'
            },
            colors: ['#80FFDB','#72EFDD','#64DFDF','#56CFE1','#48BFE3','#4EA8DE'],
            plotOptions: {
                bar: {
                    borderRadius: 8
                }
            },
            fill: {
                opacity: 1
            },
            stroke: {
                show: false
            },
            labels: ['تهران', 'کرمانشاه', 'سمنان', 'همدان']
        },
        series: [44, 55, 13, 33].sort(),
        
    })
    return (
        <Paper elevation={0} className={classes.main}>
            <Chart
                options={state.options}
                series={state.series}
                type="pie"
                height={320}
                className={classes.chart}
            />
        </Paper>
    )
}

export default CircleSaleSate