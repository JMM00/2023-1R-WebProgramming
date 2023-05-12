import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Worldcup from './Worldcup.jsx'
import './index.css'

// 아이디가 루트인 eliment를 찾아서 하단의 내용을 집어넣어라 라는 의미
// React.StrictMode는 개발모드에서만 동작하는 기능이다.
// React.StrictMode는 개발자의 실수를 빨리 발견할 수 있도록 도와주는 기능이다. 그냥 이런게 있다만 알고있을 것
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Worldcup />
  </React.StrictMode>,
)
