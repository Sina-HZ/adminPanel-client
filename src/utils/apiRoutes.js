const BaseUrl = process.env.REACT_APP_APIADDRESS;

const ApiRoutes = {
    baseUrl: BaseUrl,
    auth: {
        login: '/user/login',
        getDetail: '/user/'
    },
    slider: {
        list: '/slider/list',
        upload: '/slider/',
        remove: '/slider/remove'
    },
    file: {
        upload: '/upload',
        show: '/file/#id'
    },
    reseller: {
        list: '/reseller/',
        create: '/reseller/add',
        getOne: '/reseller/#id',
    }
}

export default ApiRoutes;