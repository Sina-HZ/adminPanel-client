import React from 'react';
import { Box, Grid, useTheme } from "@material-ui/core"
import SliderCard from "../../components/SliderCard"
import { observer } from 'mobx-react-lite';
import SliderStore from '../../states/Slider';
import EmptyList from '../../components/EmptyList';

const SliderList = observer(() => {
    const theme = useTheme()

    return (
        <Box>
            <Grid
                container
                spacing={2}
                style={{ margin: theme.spacing(2, 0),width: '100%' }}
            >
                {SliderStore.list.map((item, index) => (
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
                {
                    SliderStore.list.length === 0 && <EmptyList />
                }
        </Box>
    )
})

export default SliderList
