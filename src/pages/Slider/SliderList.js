import React from 'react';
import { Box, Grid, useTheme } from "@material-ui/core"
import SliderCard from "../../components/SliderCard"

const SliderList = ({ data }) => {
    const theme = useTheme()

    return (
        <Box>
            <Grid
                container
                spacing={2}
                style={{ margin: theme.spacing(2, 0),width: '100%' }}
            >
                {data.map((item, index) => (
                    <Grid
                        key={item.id}
                        item
                        lg={6}
                        xs={12}
                    >
                        <SliderCard sliderItem={item} />
                    </Grid>
                ))}
              
            </Grid>
        </Box>
    )
}

export default SliderList
