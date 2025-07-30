import { useEffect, useState } from "react";
import {ImageCard, VideoCard} from "../components/ImageCards";


function Home() {


  return (
    < >
        <div className="px-10 md:px-15 lg:px-20">
            <div className="bg-green-900 text-white py-30 text-center">
                <h1 className=" text-xl md:text-2xl font-bold lg:text-4xl"> 
                MAJOR EVENTS OF FCT SAPZ-PROJECT 
                </h1> <br /> <small className=" text-lime-400  md:text-lg sm:text-sm lg:text-xl">Enhancing agricultural processing in FCT, Abuja.</small>
            </div>
            <div className="py-10">
               
                
                   <ImageCard title="SAPZ Project Appraisal Document Review Meeting"/>
                
                <div className="h-1 bg-black w-full my-8" />
                <div>
                    <ImageCard title="Visit to Goat Training Facility"/>
                </div>
                <div>
                    <VideoCard />
                </div>
                <div className="h-1 bg-black w-full my-8" />
            </div>
            
        </div>
        
    </>
  )
}
export default Home;