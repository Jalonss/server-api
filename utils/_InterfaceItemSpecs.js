export default function IItemSpecs(body) {
    const price = body.specs.original_price ? body.specs.original_price : body.specs.price;
    return {
        author: {
            name: 'Alonso',
            lastname: 'Sanchez'
        },
        item: {
            id: body.specs.id,
            title: body.specs.title,
            price: {
                currency: body.specs.currency_id,
                amount: Number(price.toString().split('.')[0]),
                decimal: price.toString().split('.')[1],
            },
            picture: body.specs.pictures[0].secure_url,
            condition: body.specs.condition,
            free_shipping: body.specs.shipping.free_shipping,
            sold_quantity: body.specs.sold_quantity,
            description: body.description,
        }
    }
}