import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

interface Student {
  name: string;
  points: number;
  grade: string;
}

const App = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [studentName, setStudentName] = useState("");
  const [studentPoints, setStudentPoints] = useState(0);
  const [count, setCount] = useState(0);
  const [grade, setGrade] = useState(0);
  

  // const handleincrease = () => {
  //   let a = 10;
  //   let b = 20;

  //   let c = a + b;

  //   setCount(c);
  // };

  const sumGrade = () => {
    // console.log("num", num);

    // setCount(count + num);
    // console.log('count', count);
    console.log("grade", grade);

    return checkGrade(grade);
  };
  const checkGrade = (num: number) => {
    if (num >= 80) {
      return "A";
    } else if (num >= 70) {
      return "B";
    } else if (num >= 60) {
      return "C";
    } else if (num >= 50) {
      return "D";
    } else {
      return "F";
    }
  };



  const addStudent = () => {
    const newStudent: Student = {
      name: studentName,
      points: studentPoints,
      grade: "",
    };

    setStudents([...students, newStudent]);

    console.log("students", students);
  };

  const deleteStudent = (index : number) => {
    setStudents(students.filter((_, i) => i !== index));

  }

  // const resetGrade = () => {
  //   console.log('count', count);
  //   setCount(0);
  // }

  // return จะ return แค่ 1 element เท่านั้น  1 tag = 1 element
  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    // <>
    //   <div>hello world</div>
    //   <p>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolor
    //     molestias labore repellat ut eligendi esse unde inventore consequatur
    //     illo. Error vitae porro sed eum distinctio laborum dignissimos! Officia,
    //     corporis.
    //   </p>
    //   {/* <button onClick={handleincrease}>count is {count}</button> */}
    //   <button onClick={() => sumGrade(5)}>Check Grade</button>
    //   <button onClick={resetGrade}>reset count</button>

    //   <div>
    //     {`Your total score is ${count}`}
    //   </div>

    //</>
    <>
      <div className="input-box">
        <input
          type="text"
          className="input-tag"
          placeholder=""
          value={grade}
          onChange={(e) => setGrade(Number(e.target.value))}
        />
        <button className="Submit-button" onClick={sumGrade}>
          Check Grade
        </button>
      </div>
      <div>คะแนน {}</div>

      <div className="todo-list-box">
        <h2>To-Do List</h2>
        <input
          type="text"
          className="input-tag"
          placeholder="ชื่อ"
          value={studentName}
          onChange={(n) => setStudentName(String(n.target.value))}
          required
        />
        <input
          type="number"
          className="input-tag"
          placeholder="คะแนน"
          value={studentPoints}
          onChange={(a) => setStudentPoints(Number(a.target.value))}
          required
        />
        <button className="Submit-button" onClick={addStudent}>
          เพิ่ม
        </button>
      </div>

      {students.map((student, index) => (
        <div className="task-card">
          <div className="task-card-box">
            <p>ลำดับ {index + 1}</p>
            <p className="student-Name">ชื่อ : {student.name}</p>
            <p className="student-Point">คะแนน : {student.points}</p>
            <p className="student-Grade">เกรด : {checkGrade(student.points)}</p>
            <button className="Delete" onClick={() => deleteStudent(index)}>ลบ</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
