import React from 'react'
import style from "./Footer.module.css"
import { useRouter } from 'next/router';
import { useState ,useEffect} from 'react'
import Image from "next/image";

import share from "../../../public/share.png";

import twitter from "../../../public/twitter.png"
import whatsapp from "../../../public/whatsapp.png"
import instagram from "../../../public/instagram.png";
import facebook from "../../../public/facebook.png";



const Footer = () => {

  const [shareit, setShare] = useState(false)
  
  const router = useRouter()

 

  console.log(router.pathname)
  
  return (
    <div>
      <div
        className={style.outer}
        // style={{
        //   position: `${
        //     router.pathname == "/data"
        //       ? "fixed"
        //       : "relative"
        //   }`,
        //   bottom: "0px",
        //   backgroundColor: `${
        //     router.pathname == "/data" 
        //       ? "rgba(255, 255, 255, .005)"
        //       : "none"
        //   }`,
        // }}
      >
        <div className={style.share}>
          <div className={style.text}>Recomend our product </div>
          <div className={style.shareButton} onClick={() => setShare(true)}>
            <Image src={share} width={20} height={20}></Image>
          </div>
        </div>
        <div className={style.developer}>Contact Developer</div>
      </div>
      {shareit && (
        <div className={style.share_tab}>
          <div style={{ fontSize: "30px" }}>Share on </div>
          <div className={style.media}>
            <Image src={twitter} width={40} height={40} />
            <Image src={whatsapp} width={40} height={40} />
            <Image src={instagram} width={40} height={40} />
            <Image src={facebook} width={40} height={40} />
          </div>
          <div
            style={{
              background: "red",
              width: "50px",
              height: "30px",
              textAlign: "center",
              borderRadius: "2px",
              cursor: "pointer",
              paddingTop: "2px",
            }}
            onClick={() => setShare(false)}
          >
            Close
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer