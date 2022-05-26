import useLoadAllOrders from "./useLoadAllOrders";

const useRemoveSingleOrder = id => {
    const [orders, setOrders] = useLoadAllOrders();

    const url = `https://pure-atoll-42866.herokuapp.com/order/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {

            const restProducts = orders.filter(order => order._id !== id);
            setOrders(restProducts)

        })

    return [orders, setOrders]
}
export default useRemoveSingleOrder;