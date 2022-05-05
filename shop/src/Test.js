import { useState } from 'react';
let count = 0;
export default function Test() {
  const [count2, setCount2] = useState(0);
  console.log('Outercount ', count);
  return (
    <>
      <button
        onClick={() => {
          console.log('innercount ', count);
          count++;
        }}
      >
        증가
      </button>
      {count}
      <button
        onClick={() => {
          console.log('innercount ', count);
          count--;
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          console.log('count2 ', count2);
          setCount2(count2 + 1);
        }}
      >
        증가
      </button>
      {count2}
      {count2 * 2}
    </>
  );
}
