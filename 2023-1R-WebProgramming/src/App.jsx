import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App() 함수는 JSX를 반환한다.
// JSX는 HTML과 비슷한 문법을 가진 자바스크립트 확장 문법이다.
// JSX는 React.createElement() 함수를 호출하는 코드로 변환된다.
// 화면이 조금이라도 바뀌면 무조건 App()함수를 매번 실행시킴 -> 하단의 html을 전달함
// App()함수가 실행되면 (전체 html을 다 지우고 다시 작성) JSX를 반환하고, JSX는 React.createElement() 함수를 호출하는 코드로 변환된다.
// React.createElement() 함수는 Virtual DOM을 생성한다.
function App() {
  // const [count, setCount] = useState(0)

  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(false);


  if (row.length == 0 && loading == true) {
    const res = fetch("http://openapi.seoul.go.kr:8088/6846755559636a6a3931674d444c55/json/RealtimeCityAir/1/25/").then(
      function (res2) {
        res2.json().then(function (res3) {
          setRow(res3.RealtimeCityAir.row);
        })
      })
  }

  console.log(row)
  console.log(loading)

  return (
    // 아래의 html을 통째로 반환하는 함수

    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setLoading((loading) => true)}>
        Loading..
      </button>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>PM10</th>
            <th>O3</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {row.map(function (obj) {
            return (
              <tr>
                <td>{obj.MSRSTE_NM}</td>
                <td>{obj.PM10}</td>
                <td>{obj.O3}</td>
                <td>{obj.IDEX_NM}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
// 기본적으로는 내가 소스코드에서 작성한 함수와 변수는 다른 소스코드에서 사용할 수 없음
// export를 통해 내보내면 다른 소스코드에서 사용할 수 있음
export default App
