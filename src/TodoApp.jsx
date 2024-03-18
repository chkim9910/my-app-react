import { useReducer, useRef } from "react";

function reducer(state, action) {}

export default function TodoApp() {
  // 할 일 데이터
  const mockTodo = [
    {
      id: 1,
      isDone: false,
      task: "고양이 밥주기",
      createdDate: new Date().getTime(), // 현재 시간
    },
    {
      id: 2,
      isDone: false,
      task: "감자 캐기",
      createdDate: new Date().getTime(),
    },
    {
      id: 3,
      isDone: false,
      task: "고양이 놀아주기",
      createdDate: new Date().getTime(),
    },
  ];

  // const [state, dispatch] = useReducer(reducer, initialState)
  //  useReducer로 todos 상태를 관리합니다.
  const [todos, dispatch] = useReducer(reducer, mockTodo);

  const idRedf = useRef(4);

  return;
}
