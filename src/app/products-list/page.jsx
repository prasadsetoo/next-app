import React from 'react'

const getProducts = async () => {
    let res = await fetch("http://localhost:1337/api/products")
    let data = await res.json();
    return data;
}

async function Products() {
    let data = await getProducts();
    console.log(data)
    function deleteProduct() {
        console.log("delete")
    }
    return (
        <><div>Products</div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Sr. No</td>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Delete</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.data.map((item, index) => <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.attributes.name}</td>
                            <td>{item.attributes.price}</td>
                            {/* <td><button onClick={() => deleteProduct(id)}>Delete</button></td> */}

                        </tr>)
                    }

                </tbody>
            </table>
        </>

    )
}

export default Products