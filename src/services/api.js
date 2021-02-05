import ApiRoutes from '../utils/apiRoutes';
import axios from '../utils/axios';

export const authApi = {
    login: async (email, password) => {
        console.log('post method: ', { email, password })
        return await axios.post(ApiRoutes.auth.login, { email, password })
    }
}

export const sliderApi = {
    list: async () => {
        return await axios.get(ApiRoutes.slider.list)
    }
}