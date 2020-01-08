export default class Item {
    constructor(entity){
        Object.assign(this, {
            brand: 'Brand name',
            title: 'Brand Title',
            description: 'Short description',
            descriptionFull: 'Here is FULL description',
            price: 200,
            currency: '£'
        }, entity);
    }
}