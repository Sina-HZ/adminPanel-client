import ApiRoutes from '../utils/apiRoutes';
import axios from '../utils/axios';

export const authApi = {
    login: async (email, password) => {
        return await axios.post(ApiRoutes.auth.login, { email, password })
    },
    getDetail: async () => {
        return await axios.get(ApiRoutes.auth.getDetail)
    }
}

export const fileApi = {
    uploadFile: async (formData) => {
        return await axios.post(ApiRoutes.file.upload, formData)
    },
    show: async (id) => {
        return await axios.get(ApiRoutes.file.show.replace('#id', id))
    }
}

export const sliderApi = {
    list: async () => {
        return await axios.get(ApiRoutes.slider.list)
    },
    addSlider: async (data) => {
        return await axios.post(ApiRoutes.slider.upload, data)
    }
}

export const resellerApi = {
    list: async () => {
        return await axios.get(ApiRoutes.reseller.list)
    },
    getReseller: async (id) => {
        return await axios.get(ApiRoutes.reseller.getOne.replace('#id', id))
    },
    add: async (data) => {
        return await axios.post(ApiRoutes.reseller.create, data)
    }
}