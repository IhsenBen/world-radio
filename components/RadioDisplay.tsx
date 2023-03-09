
import { css } from "@emotion/react";
import localFont from "next/font/local";
import { RadioBrowserApi , Station} from 'radio-browser-api'
import { useEffect } from "react";


const api = new RadioBrowserApi('My Radio App')
const fetchRadio = async () => {
  try {
    const stations = await api.searchStations({
     countryCode: 'TN',
    })
    const filter = "Radio"
    const filteredRadios = stations.filter((radio : Station) => radio.name.includes(
      filter
    ))
    console.log(stations)
    return stations
  }
  // query stations by country code and limit to first 100 stations
  catch (err) {
    console.log(err)
  }
}



  const myFont = localFont({
    src: "../assets/digital.ttf",
  });

  const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
border-radius: 8%;
width: 600px;
  height: 400px;
  background-color: #000;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  const mask = css`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0);
opacity: 0.8;
background-image:  linear-gradient(#000000 2px, transparent 2px), linear-gradient(90deg, #000000 2px, transparent 2px), linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, rgba(255, 255, 255, 0) 1px);
background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`;

  const glowinganiText = css`
color: white;
font-size: 3rem;
font-weight: bold;
text-shadow: 0 0 10px #000;
animation: glow 1s ease-out infinite alternate;
@keyframes glow {
from {
  text-shadow: 0 0 10px #000;
}
to {
  text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 90px #fff, 0 0 100px #fff;
}
}
  `;

  const glowingText = css`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
 `;





  const RadioDisplay: React.FC = () => {
    useEffect(() => {
      // console.log(fetchRadio())
      const radios = fetchRadio()
      // filter the ones that have RTCI in their name
    }, [])
    return (
      <div css={containerStyles}>
        <div className={myFont.className} css={glowinganiText}>Welcome to Radio</div>
        <div className={myFont.className} css={glowingText}>Radio FM</div>
        <div css={mask}></div>
      </div>
    );
  };


  export default RadioDisplay;