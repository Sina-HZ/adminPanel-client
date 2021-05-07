import { types } from "mobx-state-tree";

const ResellerPhone = types.string;

const Reseller = types.model({
    id: types.string,
    name: types.string,
    province: types.string,
    city: types.string,
    phone: types.optional(types.array(ResellerPhone), []),
    address: types.string
})

const ResellerList = types.model({
    data: types.optional(types.array(Reseller), []),
})

const ResellerRoot = types.model({
    current: Reseller,
    list: ResellerList
})
    .actions(self => ({
        setCurrent(data) {
            console.log('inja: ', data)
            Object.assign(self.current, data)
        }
    }))
    .create({
        current: {
            id: '',
            name: '',
            province: '',
            city: '',
            phone: [],
            address: ''
        },
        list: {
            data: []
        }
    })

export default ResellerRoot