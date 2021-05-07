import { types } from "mobx-state-tree";


const Account = types.model({
    id: types.string,
    username: types.string,
    email: types.string,
    role: types.string
}).actions(self => ({
    setAccount(data) {
        Object.assign(self, data)
    }
})).create({
    id: '',
    username: '',
    email: '',
    role: ''
})

export default Account