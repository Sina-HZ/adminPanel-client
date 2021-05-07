import React, { useState } from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import Chart from 'react-apexcharts'

const useStyles = makeStyles(theme => ({

    main: {
        backgroundColor: '#fff'
    },
    chart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            // width: 300,
            alignItems: 'unset',
            justifyContent: 'unset',
        }
    },

}))


const SalesChart = () => {
    const classes = useStyles()
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'Sales-Chart-Bar',
                fontFamily: 'Yekan Bakh'
            },
            xaxis: {
                categories: [
                    'فروردین',
                    'اردیبهشت',
                    'خرداد',
                    'تیر',
                    'مرداد',
                    'شهریور',
                    'مهر',
                    'آبان',
                    'آذر',
                ],
                labels: {
                    rotate: 90,
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 8
                }
            },
            fill: {
                opacity: 1,
                colors: ['#0bff9b']
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    })
    return (
        <Paper elevation={0} className={classes.main}>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                // width={500}
                height={320}
                className={classes.chart}
            />
        </Paper>
    )
}

export default SalesChart
