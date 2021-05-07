const BaseUrl = process.env.REACT_APP_APIADDRESS;

const ApiRoutes = {
    baseUrl: BaseUrl,
    auth: {
        login: '/users/login',
        getDetail: '/users/'
    },
    slider: {
        list: '/slider/list',
        upload: '/slider/'
    },
    file: {
        upload: '/upload',
        show: '/file/#id'
    },
    reseller: {
        list: '/reseller/',
        create: '/reseller/add',
        getOne: '/reseller/#id'
    }
}

export default ApiRoutes;