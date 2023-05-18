import './Worldcup.css'
import { useEffect, useState } from 'react';
import Bangalore from './assets/Bangalore.jpg';
import Bloodhound from './assets/Bloodhound.jpg';
import Caustic from './assets/Caustic.jpg';
import Crypto from './assets/Crypto.jpg';
import Fuse from './assets/Fuse.jpg';
import Gibraltar from './assets/Gibraltar.jpg';
import Lifeline from './assets/Lifeline.jpg';
import Loba from './assets/Loba.jpg';
import Mirage from './assets/Mirage.jpg';
import Octane from './assets/Octane.jpg';
import Pathfinder from './assets/Pathfinder.jpg';
import Rampart from './assets/Rampart.jpg';
import Rhapsody from './assets/Rhapsody.jpg';
import Valkyrie from './assets/Valkyrie.jpg';
import Wattson from './assets/Wattson.jpg';
import Wraith from './assets/Wraith.jpg';


function Worldcup() {
  const candidate = [
    { name: '방갈로르', src: Bangalore, description: "방갈로르는 IMC의 무기 전문가였습니다. n그녀는 이제 Apex 게임에서 집으로 돌아가는 방법을 찾기 위해 싸웁니다." },
    { name: '블러드하운드', src: Bloodhound, description: "블러드하운드의 정체는 베일에 감춰져 있으며, 독보적인 추적 능력을 지니고 있습니다." },
    { name: '코스틱', src: Caustic, description: "코스틱은 살충 가스 연구소의 과학자로 가스를 이용해 적을 공격합니다. " },
    { name: '크립토', src: Crypto, description: "크립토는 천재 해커이자 암호화 전문가로 비행 드론을 사용해 적을 감시할 수 있습니다." },
    { name: '퓨즈', src: Fuse, description: "퓨즈는 장비를 폭탄으로 도배한 느긋한 스타일의 폭발물 애호가입니다." },
    { name: '지브롤터', src: Gibraltar, description: "지브롤터는 외부의 공격을 완벽히 차단하는 돔형 방벽을 설치하여 팀원을 보호합니다." },
    { name: '라이프라인', src: Lifeline, description: "D.O.C.를 배치하여 팀원을 회생시키며, 그동안 라이프라인은 자유롭게 움직이거나 방어할 수 있습니다." },
    { name: '로바', src: Loba, description: "공간이동 시프로 알려진 에이펙스 레전드의 레전드 중 한 명이고, 타고난 도둑질의 재주를 활용합니다." },
    { name: '미라지', src: Mirage, description: "미라지는 홀로그래픽 트릭스터이며, 장난을 쳐 주의를 끄는 기술을 완벽하게 터득했습니다." },
    { name: '옥테인', src: Octane, description: "옥테인은 발 빠른 돌격대원입니다. 기동력과 체력관리에 강한 특징을 가지고 있습니다." },
    { name: '패스파인더', src: Pathfinder, description: "패스파인더는 전방 정찰 요원입니다. 그는 지역 정찰과 조사에 특화된 마빈 (독립 다목적 기동 로봇)으로 만들어졌습니다." },
    { name: '램파트', src: Rampart, description: "램파트는 화력 지원가입니다. 그녀는 지하 건틀렛 경기장에서 명성을 쌓아올렸습니다." },
    { name: '랩소디', src: Rhapsody, description: "랩소디는 리듬 슬링어로 알려졌으며, 노래를 통해 속력 높이고 실드를 복구합니다." },
    { name: '발키리', src: Valkyrie, description: "발키리는 복수의 비행사입니다. 그녀는 호라이즌과 같이 대공사격으로 견제를 해주어야 하는 레전드입니다." },
    { name: '왓슨', src: Wattson, description: "왓슨은 전기 방어 기술자로 전기 펜스를 만들어 적에게 데미지를 입힙니다." },
    { name: '레이스', src: Wraith, description: "레이스는 차원이동 전사로 그녀는 시공간을 조종하여 차원 균열을 만들며 싸우는 매서운 전사입니다." }
  ];

  const [game, setGame] = useState([]);
  const [round, setRound] = useState(0);
  const [nextGame, setNextGame] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [stat, setStat] = useState({
    '방갈로르': 0,
    '블러드하운드': 0,
    '코스틱': 0,
    '크립토': 0,
    '퓨즈': 0,
    '지브롤터': 0,
    '라이프라인': 0,
    '로바': 0,
    '미라지': 0,
    '옥테인': 0,
    '패스파인더': 0,
    '램파트': 0,
    '랩소디': 0,
    '발키리': 0,
    '왓슨': 0,
    '레이스': 0
  });

  //처음 월드컵 컴포넌트가 단 한 번 실행하는 함수
  useEffect(() => {
    const stringState = localStorage.getItem('레전드');
    if (stringState != null) {
      setStat(JSON.parse(stringState));
    }
    setGame(candidate.map(c => {
      return { name: c.name, src: c.src, order: Math.random(), description: c.description }
    }).sort((l, r) => {
      return l.order - r.order;
    }));
  }, []);

  useEffect(() => {
    if (game.length > 1 && (round + 1 > game.length / 2)) {
      setGame(nextGame);
      setNextGame([]);
      setRound(0);
    }
  }, [round]);

  // {/* 처음에는 game이 빈배열이기 때문에 */}
  // {/* <img src={game[0].src} onClick={() => alert('방갈로르')} />  그냥 이렇게 넣으면 오류남*/}

  if (game.length === 1) {
    localStorage.setItem('레전드', JSON.stringify(stat));
    return <div>
      <p>Apex 레전드 월드컵 우승</p>
      <img src={game[0].src} /> <p> {game[0].name}</p> <p>{stat[game[0].name]}번 승리</p>
      <p>최종 우승자는 {game[0].name}입니다.</p>

      <table>
        <thead>
          <tr>이름</tr> <tr>이긴 횟수</tr>
        </thead>
        <tbody>
          {Object.keys(stat).map(name => {
            return <tr key={name}>
              <td>{name}</td>
              <td>{stat[name]}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>

  }
  if (game.length === 0 || round + 1 > game.length / 2) return <p>로딩중...</p>;

  const left = round * 2, right = round * 2 + 1;
  console.log(stat);

  const leftFunction = () => {
    setStat({ ...stat, [game[left].name]: stat[game[left].name] + 1 })
    setSelectedImage(game[left].src);
    setTimeout(() => {
      // alert(game[left].name + "이 선택되었습니다.")
      setNextGame((prev) => prev.concat(game[left]));
      setRound((rount) => rount + 1);
      setSelectedImage(null);
    }, 1000);
  }
  const rightFunction = () => {
    setStat({ ...stat, [game[right].name]: stat[game[right].name] + 1 })
    setSelectedImage(game[right].src);
    setTimeout(() => {
      // alert(game[right].name + "이 선택되었습니다.")
      setNextGame((prev) => prev.concat(game[right]));
      setRound((rount) => rount + 1);
      setSelectedImage(null);
    }, 1000);
  }
  return <>
    <p>Apex 레전드 월드컵 {round + 1} / {game.length / 2} <b>{game.length == 2 ? "결승" : game.length + "강"}</b> </p>

    <div id="content">

      <div className="relative-div">
        <img src={game[left].src} onClick={leftFunction}
          className={`content ${selectedImage === game[left].src ? "content-selected-left" : ""
            } ${selectedImage === game[right].src ? "content-opaque" : ""}`}
        />
        <div id="info" className={`content ${selectedImage === game[left].src ? "content-selected-left" : ""
          } ${selectedImage === game[right].src ? "content-opaque" : ""}`}>
          <span className="name">
            {game[left].name}
          </span>
          <span className="description">
            {game[round * 2].description}
          </span>
        </div>
      </div>
      <div className="relative-div">
        <img src={game[right].src} onClick={rightFunction}
          className={`content ${selectedImage === game[right].src ? "content-selected-right" : ""
            } ${selectedImage === game[left].src ? "content-opaque" : ""}`}
        />
        <div id="info" className={`content ${selectedImage === game[right].src ? "content-selected-right" : ""
          } ${selectedImage === game[left].src ? "content-opaque" : ""}`}>
          <span className="name">
            {game[right].name}
          </span>
          <span className="description">
            {game[right].description}
          </span>
        </div>
      </div>
    </div>
  </>
}

export default Worldcup;