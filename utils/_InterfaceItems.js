export default function IItem(body) {
    return {
        author: {
            name: 'Alonso',
            lastname: 'Sanchez',
        },
        categories: body.available_filters.map((name) => name),
        items: body.results.map((element) => {
            return {
                id: element.id,
                title: element.title,
                price: {
                    currency: element.currency_id,
                    amount: Number(element.price.toString().split('.')[0]),
                    decimals: element.price.toString().split('.')[1]
                },
                picture: element.thumbnail,
                condition: element.condition,
                free_shipping: element.shipping.free_shipping,
                address: element.seller_address.state.name,
            }
        })
    }
}