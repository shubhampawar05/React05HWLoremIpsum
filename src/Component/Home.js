import React, { useState } from "react";
import Data from './../Component/Data.json'

export default function Home() {
  let [paranum , setParanum] = useState(0)
  let [data ,setData]=useState([])


  const onclickHandler = ()=>{
    if(paranum>10){
      alert("you have entered too much ");
    }else {
      let filterdData = Data.filter((item , i )=> {
        return paranum > i
      })
      setData(filterdData);
    }
  }

  return (
    <div className="w-full h-screen bg-[#FFE6D6]">
      <section className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold py-4">
            TIRED OF BORING LOREM IPSUM?
          </h1>
          <p className="text-xl">
            Paragraphs:{" "}
            <input
            value={paranum}
            onChange={(e)=>setParanum(e.target.value)}
              type="number"
              min={0}
              className="w-[70px] border pl-2  p rounded-md shadow-lg  outline-none mr-4 ml-2"
            />{" "}
            <button onClick={onclickHandler} className="bg-orange-400 px-6 py-2  rounded-md active:text-white active:font-semibold">
              GENERATE
            </button>
          </p>
          <div className="max-w-[940px] mx-auto ">
            {Data.length ? <div>
{
  data.map((item , i)=>{
    return(
      <p key={"s"+i} className="py-4 text-orange-400">{item.disc}</p>
    )
  })
}
            </div> : <div>No Data found</div> }
          </div>
        </div>
      </section>
    </div>
  );
}
