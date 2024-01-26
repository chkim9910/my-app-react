import Component from "./Component";

export default function Comments() {
  const users = [
    {
      img: "https://assets.chatgpt4google.com/assets/promo/43.gif",
      name: "Fall",
    },
    {
      img: "https://assets.chatgpt4google.com/assets/promo/43.gif",
      name: "Winter",
    },
  ];
  const commentArr = [
    {
      user: users[1],
      text: "hello world, my name is Fall.",
      date: "2024.03.11",
    },
    {
      user: users[2],
      text: "hello world, my name is Winter.",
      date: "2024.03.15",
    },
  ];
  return (
    <>
      {commentArr.map((item, index) => (
        <Component key={index} />
      ))}
    </>
  );
}
