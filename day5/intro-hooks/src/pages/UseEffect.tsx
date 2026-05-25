import { useEffect, useState } from "react";

/* 
    analogi useEffect seperti toko, bayangkan ketika toko buka biasanya kita menyalakan lampu
    nyalain AC, puter musik. Use effect bisa kita anggap seperti aktifitas setelah toko dibuka.
*/

function UseEffect() {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);

  // mode 1: bakalan run setiap ada perubahan terhadap state/props
  useEffect(() => {
    console.log("use effect mode 1 dijalankan");
  });

  // mode 2: bakalan run sekali saja saat react first render
  useEffect(() => {
    console.log("use effect mode 2 dijalankan");
  }, []);

  // mode 3: sama seperti mode 2, cuman kalo ada perubahan di dependencynya, akan dijalankan ulang
  useEffect(() => {
    console.log("use effect mode 3 dijalankan");
  }, [number]);

  return (
    <div>
      <h1>UseEffect</h1>

      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <hr />

      <p>number: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  );
}

export default UseEffect;
