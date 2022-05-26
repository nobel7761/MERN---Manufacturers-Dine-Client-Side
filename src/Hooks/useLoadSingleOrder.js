import { useState } from "react"

const useLoadSingleOrder = id => {
    const [singleOrder, setSingleOrder] = useState([]);
    fetch(`https://pure-atoll-42866.herokuapp.com/order/${id}`)
        .then(res => res.json())
        .then(data => setSingleOrder(data))

    return [singleOrder, setSingleOrder]
}

export default useLoadSingleOrder;