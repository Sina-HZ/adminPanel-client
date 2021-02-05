const BaseUrl = process.env.REACT_APP_APIADDRESS;

const ApiRoutes = {
    baseUrl: BaseUrl,
    auth: {
        login: '/users/login'
    },
    slider: {
        list: '/slider/list'
    },
    file: '/file/'
}

export default ApiRoutes;