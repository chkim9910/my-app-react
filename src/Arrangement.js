export default function Arrangement() {
  const user = { name: "john", age: 13 };
  const arr = [1, 2, 3, 4, 5];
  const num = 13;
  return (
    <div>
      <h1>jsx 정리</h1>
      <p>
        {user.name}의 나이는 {user.age}살입니다.
      </p>
      <p>나는 {arr[2]}살입니다.</p>
      <p>
        {num}은 {num % 2 === 0 ? "짝수" : "홀수"}입니다.
      </p>
      <p>
        {num}은 {num % 2 === 0 && num >= 10 ? "짝수/10 이상" : "홀수"}입니다.
      </p>
      <p>
        {num}은 {num % 2 === 0 || num >= 10 ? "짝수 또는 10 이상" : "거짓"}
        입니다.
      </p>
    </div>
  );
}
