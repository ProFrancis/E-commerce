const PRODUCT_LIST = "PRODUCT_LIST"
const PRODUCT_ADD = "PRODUCT_ADD"
const PRODUCT_UPDATE = "PRODUCT_UPDATE"
const PRODUCT_REMOVE = "PRODUCT_REMOVE"

list = (payload) => { type: PRODUCT_LIST, payload}
add = (payload) => { type: PRODUCT_ADD, payload}
update = (payload) => { type: PRODUCT_UPDATE, payload}
remove = (payload) => { type: PRODUCT_REMOVE, payload}

