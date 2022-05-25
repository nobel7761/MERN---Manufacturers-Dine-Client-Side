import { useEffect, useState } from "react";

const useLoadAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://pure-atoll-42866.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return [orders, setOrders]
}

export default useLoadAllOrders;