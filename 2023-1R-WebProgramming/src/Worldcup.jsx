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
    { name: '방갈로르', src: Bangalore },
    { name: '블러드하운드', src: Bloodhound },
    { name: '코스틱', src: Caustic },
    { name: '크립토', src: Crypto },
    { name: '퓨즈', src: Fuse },
    { name: '지브롤터', src: Gibraltar },
    { name: '라이프라인', src: Lifeline },
    { name: '로바', src: Loba },
    { name: '미라지', src: Mirage },
    { name: '옥테인', src: Octane },
    { name: '패스파인더', src: Pathfinder },
    { name: '램파트', src: Rampart },
    { name: '랩소디', src: Rhapsody },
    { name: '발키리', src: Valkyrie },
    { name: '왓슨', src: Wattson },
    { name: '레이스', src: Wraith }
  ];

  const [game, setGame] = useState([]);
  const [round, setRound] = useState(0);
  const [nextGame, setNextGame] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setGame(candidate.map(c => {
      return { name: c.name, src: c.src, order: Math.random() }
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
    return <div>
      <p>이상형 월드컵 우승</p>
      <img src={game[0].src} /> <p> {game[0].name}</p>
      <p>최종 우승자는 {game[0].name}입니다.</p>
    </div>

  }
  if (game.length === 0 || round + 1 > game.length / 2) return <p>로딩중...</p>;

  return <>
    <p>에이펙스 레전드 월드컵 {round + 1} / {game.length / 2} <b>{game.length == 2 ? "결승" : game.length + "강"}</b> </p>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={game[round * 2].src} onClick={() => {
        setSelectedImage(game[round * 2].src);
        setTimeout(() => {
          setNextGame((prev) => prev.concat(game[round * 2]));
          setRound((rount) => rount + 1);
          setSelectedImage(null);
        }, 1000);
      }}
      style={{
        transform:
          selectedImage === game[round * 2].src
            ? "translateX(50%) scale(1.2)"
            : "scale(1)",
        opacity: selectedImage === game[round * 2 + 1].src ? 0 : 1,
        transition: "transform 1s, opacity 0.5s",
      }}
      />
      <img src={game[round * 2 + 1].src} onClick={() => {
        setSelectedImage(game[round * 2 + 1].src);
        setTimeout(() => {
          setNextGame((prev) => prev.concat(game[round * 2 + 1]));
          setRound((rount) => rount + 1);
          setSelectedImage(null);
        }, 1000);
      }}
      style={{
        transform:
          selectedImage === game[round * 2 + 1].src
            ? "translateX(-50%) scale(1.2)"
            : "scale(1)",
        opacity: selectedImage === game[round * 2].src ? 0 : 1,
        transition: "transform 1s, opacity 0.5s",
      }}
      />
    </div>
  </>
}

export default Worldcup;