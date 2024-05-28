"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  let [products, setProducts] = useState(null)

  async function getProducts(token) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    console.log(headers)
    fetch("https://testapp-1-rcf6.onrender.com/api/products?populate=*", {
      method: 'GET',
      headers: headers
    }).then((res) => res.json()).then(data => { setProducts(data.data); console.log(data.data) })
    // setProducts(await res.json());
    // setTimeout(() => {
    //   console.log(products.data)

    // }, 5000)

  }
  useEffect(() => {


    let token = localStorage.getItem("token-testapp")
    if (token == null) router.push("/login")
    else {
      getProducts(token)
    }
  }, [])
  return (
    <>
      <h1 className=" m-12 ">Products List ...</h1>
      {
        products?.map((elm, i) =>
          <div key={i} className="flex items-center">
            <img className="w-48" src={elm.attributes.image.data.attributes.url} alt="" />
            <p className=" m-12 ">{elm.attributes.title}</p>
          </div>)

      }
    </>
  );
}
