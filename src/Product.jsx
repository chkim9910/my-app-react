import Item from "./Item";

export default function Product() {
  const productArr = [
    { name: "상품1", price: "3000원" },
    { name: "상품2", price: "5000원" },
    { name: "상품3", price: "8000원" },
  ];
  return (
    <div className="product">
      <h1>Product List</h1>
      <ul>
        {/* <li>
          <strong>{productArr[0].name}</strong>
          <span>:</span>&nbsp;
          <span>{productArr[0].price}</span>
        </li>
        <li>
          <strong>{productArr[1].name}</strong>
          <span>:</span>&nbsp;
          <span>{productArr[1].price}</span>
        </li>
        <li>
          <strong>{productArr[2].name}</strong>
          <span>:</span>&nbsp;
          <span>{productArr[2].price}</span>
        </li> */}

        {productArr.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}
