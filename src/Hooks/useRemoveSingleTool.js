const useRemoveSingleTool = id => {
    const url = `https://infinite-temple-79245.herokuapp.com/product/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const restProducts = products.filter(product => product._id !== id);
                setProducts(restProducts);
            }
        })
}