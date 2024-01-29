import User from "./User";

export default function Component(props) {
  const { user, text, date } = props.data;
  // console.log(`props: ${props}`); /* props: [object Object] props는 객체 */
  // console.log(
  //   `props data: ${props.data}`
  // ); /* props data: [object Object] props data도 객체*/
  return (
    <div className="comment">
      <User user={user} />
      <p>{text}</p>
      <time>{date}</time>
    </div>
  );
}
