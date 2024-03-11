import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function UsersList() {
  //   const users = [
  //     { id: 1, name: "Smith" },
  //     { id: 2, name: "Jonathan" },
  //     { id: 3, name: "Charlotte" },
  //   ];
  //   const users 대신 api를 받음

  // react hook : useState, useEffect
  const [users, setUsers] = useState([]);

  //   useEffect(함수, [의존성 배열])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // json 파일로 변경
        return response.json();
      })
      .then((data) => {
        // 상태 변경
        return setUsers(data);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  return (
    <>
      <Box>
        <Heading>Users list</Heading>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>{user.name}</ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
