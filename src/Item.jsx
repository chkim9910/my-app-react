export default function Item(props) {
  const { name, price } = props.data;
  return (
    <li>
      <strong>{name}</strong>
      <span>:</span>&nbsp;
      <span>{price}</span>
    </li>
  );
}
