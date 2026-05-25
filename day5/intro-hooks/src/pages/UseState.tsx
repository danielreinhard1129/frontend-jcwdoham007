import { useState } from "react";

function UseState() {
  const [person, setPerson] = useState<string>("Budi");

  const handleUpdatePerson = () => {
    setPerson("Joko");
  };

  // ======================================================

  const [students, setStudents] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  const handleSubmit = () => {
    setStudents((prev) => [...prev, name]);
    setName("");
  };

  return (
    <div>
      <h1>Use State</h1>
      <p>{person}</p>
      <button onClick={handleUpdatePerson}>update person</button>

      <hr />

      <input
        type="text"
        placeholder="Input nama disini..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>

      {students.map((student, index) => {
        return <p key={index}>{student}</p>;
      })}
    </div>
  );
}

export default UseState;
