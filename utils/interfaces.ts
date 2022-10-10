export interface IItem {
    author: {
        name: string
        lastname: string
    },
    categories: [string],
    items: ItemSimple[]

}

export interface ItemSimple {
    id: string,
    title: string,
    picture: string,
    condition: string,
    free_shipping: boolean,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    thumbnail: string,
    shipping: {
        free_shipping: boolean
    },
    address: string,
}
export interface IRespondtemSimple {
    id: string,
    title: string,
    picture: string,
    condition: string,
    free_shipping: boolean,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    thumbnail: string,
    shipping: {
        free_shipping: boolean
    },
    address: string,
}
export interface IRespondAPI {
    results: IItem[];
}

export interface IRespondeItem {
    author: {
        name: string
        lastname: string
    },
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number
        decimals: string
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
    address: string
}


export interface IPureItem {
    original_price: number;
    price: number;
    id: string;
    title: string;
    currency_id: string;
    pictures: {
        secure_url: string;
    }[];
    condition: string;
    shipping: {
        free_shipping: boolean;
    }; seller_address: {
        state: {
            name: string;
        };
    };
    sold_quantity: number;
}
export interface IItemR {
    data: {
        original_price: number;
        price: number;
        id: string;
        title: string;
        currency_id: string;
        pictures: {
            secure_url: string;
        }[];
        condition: string;
        shipping: {
            free_shipping: boolean;
        }; seller_address: {
            state: {
                name: string;
            };
        };
        sold_quantity: number;
    };
}

export interface IDescription {
    data: {
        plain_text: string;
    }
}

export interface ICurrency {
    data: {
        description: string;
        decimal_places: number;
    }
}