import { Box } from "@material-ui/core"
import SliderCard from "../../components/SliderCard"

const SliderList = ({ data }) => {

    return (
        <Box display='flex' flexWrap='wrap' mt={3}>
            {data.map((item, index) => (
                <SliderCard sliderItem={item} key={item.id} />
            ))}
            {/* <SliderCard image='https://picsum.photos/200' />
            <SliderCard image='https://picsum.photos/200' />
            <SliderCard image='https://picsum.photos/200' />
            <SliderCard image='https://picsum.photos/200' />
            <SliderCard image='https://picsum.photos/200' /> */}
        </Box>
    )
}

export default SliderList
