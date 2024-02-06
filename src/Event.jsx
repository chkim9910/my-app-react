const Event = () => {
  const handleClick = (event) => {
    console.log(event); /* 이벤트 객체 */
    console.log(
      event.target
    ); /* <button>버튼</button> 이벤트가 발생한 DOM 요소*/
    console.log(event.type); /* click 이벤트 타입 */
    alert("확인");
  };
  const handleMouseOver = (event) => {
    console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor = "palegoldenrod";
  };
  const handleChange = (event) => {
    document.querySelector(".text-value").innerText = event.target.value;
  };
  return (
    <>
      <h1>클릭 이벤트</h1>
      {/* 이벤트 핸들러를 등록할 때는 함수를 호출하는 것이 아니라 함수를 등록하는 것이므로 소괄호() 필요없음 */}
      {/* 이벤트 핸들러에 전달하는 함수에 ()를 붙이면 이벤트를 실행시키지 않았음에도 함수가 실행됨 */}
      <button onClick={handleClick}>버튼</button>

      <h1>마우스오버 이벤트</h1>
      <div onMouseOver={handleMouseOver}>마우스오버 시 배경색 전환</div>

      <h1>입력 이벤트</h1>
      <input
        onChange={handleChange}
        type="text"
        // defaultValue="value"
        // value 값은 미리 들어가 있는 값
        placeholder="문구를 입력해주세요."
        // placeholder 값은 미리 설정되어 있는 값
      />
      <div className="text-value"></div>
    </>
  );
};

export default Event;
