import React, { useEffect } from 'react';
import useLoadSingleOrder from '../../../../../Hooks/useLoadSingleOrder';
import swal from 'sweetalert';

const ChangeStatus = ({ id }) => {

    const [singleOrder, setSingleOrder] = useLoadSingleOrder(id)
    useEffect(() => { console.log("hello") }, [id])

    const statusChange = id => {
        console.log("change", id);

        const updateInfo = {
            id: singleOrder.id,
            productName: singleOrder.productName,
            username: singleOrder.username,
            email: singleOrder.email,
            orderQuantity: singleOrder.orderQuantity,
            phone: singleOrder.phone,
            address: singleOrder.phone,
            totalBill: singleOrder.totalBill,
            paymentStatus: singleOrder.paymentStatus,
            shipmentCondition: 'shipped',
        };



        swal({
            title: "Are you sure?",
            text: "Once You Clicked YES, Shipment Condition Will Be Changed!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {


                    fetch(`https://pure-atoll-42866.herokuapp.com/shipmentCondition/${id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updateInfo),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log("changed");

                        })



                    swal("Shipment Condition Successfully Changed!", {
                        icon: "success",
                    });
                } else {
                    swal("Operation Abort!!!");
                }
            });
    }



    return (
        <div>
            <button className='btn btn-primary' onClick={() => statusChange(singleOrder?._id)}>Change Status</button>
        </div>
    );
};

export default ChangeStatus;