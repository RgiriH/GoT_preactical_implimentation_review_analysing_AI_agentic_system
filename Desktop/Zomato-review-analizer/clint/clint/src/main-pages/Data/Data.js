import React, { useEffect } from 'react'
import style from './Data.module.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import positively from "../../../public/positively.jpeg"
import negative from "../../../public/negative.jpg"
import pin from "../../../public/pin.png"
import suggestion from "../../../public/suggestion.jpg"
import { GetContext } from '@/Store';

const Data = () => {

  const { data,fullData} = GetContext()
  const route = useRouter()

useEffect(() => {
  if (data == null) {
     route.push("/")
  }
},[])
  
const handleSave = async() => {
  const data = localStorage.getItem("SavedSummaries");

  if (data) {
    let json = await JSON.parse(data)

    //checking for duplicate data
    let flag = false
    json.map((node) => {
      if (node.url == fullData.url && node.date == fullData.date && node.span == fullData.span) {
        flag = true
        return
      }
    })
    
    if(flag) return

    json.unshift(fullData)
    
    json = await JSON.stringify(json)
    localStorage.setItem("SavedSummaries", json);

  } else {
    let json = [fullData]

    json = await JSON.stringify(json);
    localStorage.setItem("SavedSummaries", json);
  }
}

    
  return (
    <>
      <div className={style.coverM}>
        <div
          className={style.save}
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "flex-end",
            fontSize: "20px",
            alignItems: "center",
            cursor: "pointer",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            position: "fixed",
            zIndex: "2",
            right: "20px",
            top: "80px",
          }}
          onClick={() => handleSave()}
        >
          <div style={{ color: "gray" }}>save to local storage</div>
          <img src={pin.src} style={{ width: "50px", height: "50px" }}></img>
        </div>
        <div className={style.feedcover}>
          <div className={style.card}>
            <div className={style.header}>Positive Points</div>
            <Image
              src={positively}
              fill
              alt="BG IMAGE"
              className={style.img}
            ></Image>
            <div className={style.gradient}></div>
            <div className={style.gradientBottom}></div>
            <div style={{ height: "400px", overflow: "auto" }}>
              {data?.positivePoints.map((point, index) => {
                return (
                  <div className={style.points} key={index + "P"}>
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.card}>
            <div className={style.header}>Negative Points</div>
            <Image
              src={negative}
              fill
              alt="BG IMAGE"
              className={style.img}
            ></Image>
            <div className={style.gradient}></div>
            <div className={style.gradientBottom}></div>
            <div style={{ height: "400px", overflow: "auto" }}>
              {data?.negativePoints.map((point, index) => {
                return (
                  <div className={style.points} key={index + "n"}>
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.card}>
            <div className={style.header}>Suggestions</div>
            <Image
              src={suggestion}
              fill
              alt="BG IMAGE"
              className={style.img}
            ></Image>
            <div className={style.gradient}></div>
            <div style={{ height: "400px", overflow: "auto", margin: "auto" }}>
              {data?.suggestions?.map((point, index) => {
                return (
                  <div className={style.points} key={index + "s"}>
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "10px 50px",
            textAlign: "center",
            color: "gray",
            borderRadius: "10px",
            maxWidth: "500px",
            Width: "100%",
            margin: "0px auto",
            marginTop: "20px",
          }}
        >
          Please note: The following summary is based on reviews from Zomato,
          analyzed by AI to provide an overview of customer experiences.
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
    </>
  );
}

export default Data