import Component from "./Component";

export default function Comments() {
  const users = [
    {
      img: "https://assets.chatgpt4google.com/assets/promo/43.gif",
      name: "Fall",
      alt: "가을의 이미지",
    },
    {
      img: "https://img.freepik.com/free-photo/dog-waiting-veterinarian-office_23-2149198673.jpg?w=740&t=st=1706493751~exp=1706494351~hmac=412e0ffce5f9cf7f010ce4397c2727bd1303de593c93f505647543f8088fefdd",
      name: "Winter",
      alt: "겨울의 이미지",
    },
  ];
  const commentArr = [
    {
      user: users[0],
      text: "hello world, my name is Fall.",
      date: "2024.03.11",
    },
    {
      user: users[1],
      text: "hello world, my name is Winter.",
      date: "2024.03.15",
    },
    {
      user: users[0],
      text: "hello world, my name is Winter.",
      date: "2024.03.15",
    },
    {
      user: users[1],
      text: "hello world, my name is Winter.",
      date: "2024.03.15",
    },
  ];
  return (
    <>
      {commentArr.map((item, index) => (
        // 각각의 객체 = item >> data값으로 받음
        <Component key={index} data={item} />
      ))}
    </>
  );
}
