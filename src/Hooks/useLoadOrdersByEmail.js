import { useEffect, useState } from "react"

const useLoadOrdersByEmail = email => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://pure-atoll-42866.herokuapp.com/orders?userEmail=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))


    }, [email])

    return [orders, setOrders]

}

export default useLoadOrdersByEmail;