import { types } from 'mobx-state-tree';

export const StatusEnum = Object.freeze({
    active: 'active',
    deactive: 'deactive'
})

const Slider = types.model({
    id: types.string,
    name: types.string,
    status: types.enumeration('status', Object.values(StatusEnum)),
    removedAt: types.maybeNull(types.string),
    created: types.string,
    updated: types.maybeNull(types.string),
    createdBy: types.model('createdBy', {
        id: types.string,
        username: types.string,
        email: types.string
    }),
    image: types.model('image', {
        id: types.string,
        created: types.string,
        updated: types.maybeNull(types.string),
        removedAt: types.maybeNull(types.string)
    })
})



const SliderStore = types.model({
    current: types.maybeNull(Slider),
    list: types.optional(types.array(Slider), [])
}).actions(self => ({
    setCurrent(data) {
        Object.assign(self.current, data)
    },
    setList(sliderList){
        self.list = [...sliderList]
    },
    removeItem(id){
        const filtered = self.list.filter(el => el.id !== id);
        self.list = [...filtered]
    },
    addItem(item){
        self.list.push(item)
    }
})).create({
    current: null,
    list: []
})

export default SliderStore