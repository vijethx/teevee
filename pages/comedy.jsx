import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import ReactPlayer from 'react-player'
import React, { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";
import axios  from 'axios';


export default function Home() {

  let [links, setLinks] = useState([])
  let [id, setId] = useState(Math.floor(Math.random() * 40));
  let [prev, setPrev] = useState([id])
  let [prevIndex, setPrevIndex] = useState()

  useEffect(() => {
    try {
      axios.get('https://express-server-production-dd8e.up.railway.app/getLatestLinks').then((res) => {
          setLinks(res.data)
      });
  } catch (err) {
      console.log()
    }
  }, [])

  return (

    <div className="main">

      <Flex flexDir={"column"} justify={"center"} paddingBottom={"38px"}>

        <Flex flexDir={"column"} align={"center"} marginTop={"67px"} marginLeft={"11"} >

          <ReactPlayer 
            url={links[id]?.url}
            // url={"https://www.youtube.com/watch?v=1Ov4nczAPKo&list=PLw0OS4SJWbYBjpgcIQvCWyaffXd6w_DG4"}
            width={"1016px"} height={"579px"}
            playsInline={true}
            playing={true}
            controls={true}
            volume={0.75}
            className='react-player'>
          </ReactPlayer>

          <Flex paddingTop={"72px"} justifyContent={"space-between"} width={"1016px"}>
            <Flex>
              <Button width={"170px"} border={"1px solid #383636"} color={"white"} background={""} _hover={{ backgroundColor: "#FF3465", color: "white" }} onClick={() => {
                setId(prev[prevIndex])
                setPrevIndex(prevIndex - 1)
              }}>Previous</Button>

              <Button width={"170px"} marginLeft={"49px"} border={"1px solid #383636"} color={"white"} background={""} _hover={{ backgroundColor: "#FF3465", color: "white" }} onClick={() => {
                setPrevIndex(prev.length);
                if (id) setPrev([...prev, id])
                setId(Math.floor(Math.random() * 40));
              }}>Next</Button>
            </Flex>
            
          <div>
            <RWebShare data={{text: "Hey checkout this amazing player, which let's you play random content of your taste", url: "https://www.oldtv.xyz",title: "OldTV", }} onClick={() => console.log("shared successfully!")}>
              <Button width={"176px"} height={"44px"}color={"white"} background={""} _hover={{backgroundColor:"white", color:"#FF3465"}}>Share with friends ♥️</Button>
             </RWebShare>
          </div>

          </Flex>
        </Flex>
      </Flex> 

    </div>
  )
}