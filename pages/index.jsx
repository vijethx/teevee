import Head from 'next/head'
import { Flex, Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import link from 'react-scroll'
import { RWebShare } from "react-web-share";

export default function Home() { 
  const scrollTo = (event, selector) => {
  event.preventDefault();
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className='main'>
      <Flex flexDir={"column"} align={"center"}  paddingBottom={"38px"}>

      <Flex color={"white"} gap={"40px"} marginTop={"52px"} marginRight={"94px"} marginLeft={"auto"} display={{base:"none",md:"flex"}}>
        <Text paddingTop={"10px"}><a href='#story' onClick={(event) => scrollTo(event, '#story',)}> Story </a></Text>

        <RWebShare data={{text: "Hey checkout this amazing player, which let's you play random content of your taste", url: "https://www.oldtv.xyz",title: "OldTV", }} onClick={() => console.log("shared successfully!")}>
          <Button width={"176px"} height={"44px"}color={"white"} background={""} _hover={{backgroundColor:"white", color:"#FF3465"}}>Share with friends ♥️</Button>
        </RWebShare>

        <Button background={"#FF3465"} width={"176px"} height={"44px"} _hover={{backgroundColor:"white", color:"#FF3465"}}><a href="https://twitter.com/intent/user?user_id=1037821162548428800">Follow Creator </a> </Button>
      </Flex>

      <Flex flexDir={"column"} marginTop={{base:"35vh ",md:"52px"}}>
        <Text fontSize={{base:"40px",md:"128px"}} textAlign={"center"} letterSpacing={{base:"3px",md:"7px"}} fontFamily={"Six Caps, sans-serif"} color={"white"}>WATCH YOUR FAVOURITE CONTENTS </Text>

        <Text fontFamily={"Architects Daughter, cursive"} textAlign={"center"} color={"white"} fontSize={{base:"15px",md:"32px"}}>The old school style</Text>

      </Flex>

      <Flex marginTop={"40px"} _hover={{cursor:"pointer",transform: "scale(1.02)", transitionDuration: "1000ms"}}>
      <Link href="./player">
        <Image width={{base:"200px",md:"368px"}} height={{base:"200px",md:"375px"}} src="./cta2.png" alt="cta"/>

      </Link>
      </Flex>

      <Flex marginTop={{base:"250px",md:"140px"}} gap={"58px"} width={{base:"305px",md:"1400px"}} flexDir={{base:"column",md:"row"}}>
        <Flex flexDir={"column"} gap={"38px"}>
          <Link href="./entertainment"><Image width={{base:"305px",md:"1400px"}} _hover={{cursor:"pointer", transform:"scale(1.02)", transitionDuration: "500ms"}}src="./1.png" alt=""/></Link>
          <Link href="./tmkoc"><Image  width={{base:"305px",md:"1400px"}} _hover={{cursor:"pointer", transform:"scale(1.02)", transitionDuration: "500ms"}} src="./2.png" alt="tarak-mehta-ka-ooltah-chashmah"/></Link>
        </Flex>
        <Flex flexDir={"column"} gap={"38px"}>
          <Link href="./comedy"><Image width={{base:"305px",md:"1400px"}} _hover={{cursor:"pointer", transform:"scale(1.02)", transitionDuration: "500ms"}} src="./3.png" alt="comedy"/></Link>
          <Link href="./gameplay"><Image  width={{base:"305px",md:"1400px"}} _hover={{cursor:"pointer", transform:"scale(1.02)", transitionDuration: "500ms"}} src="./4.png" alt="gameplay"/></Link>
        </Flex>
      </Flex>

      <div id='story'>
      <Flex flexDir={"column"} color={"white"} width={{base:"283px",md:"1400px"}} marginTop={{base:"150px",md:"200px"}}>
        <Text fontSize={{base:"50px",md:"100px"}} letterSpacing={"0px"} fontFamily={"Six Caps, sans-serif"}>STORY</Text>
        <Text fontSize={{base:"18px",md:"25px"}} fontFamily={"poppins"}>
        The story starts when I was eating my lunch and I&apos;ve this old habit of mine to watch something while eating. I&apos;m doing this since I was a kid and I belive we all do this. The problem arrives when we open OTT Platforms and start searching but coundn’t find anything. I realized how good it was back then we just have to switch on our TV and watch whatever offered and it was actually pretty good back then.So I came up with this idea and created OldTV.xyz, watch your favourites shows the old style. It will play a random episode from YouTube.
        </Text>
      </Flex>
      </div>

      <Flex flexDir={"row"} color={"white"} marginTop={{base:"150px",md:"180px"}} width={{base:"293px",md:"1400px"}} justifyContent={"space-between"}>
      <Flex paddingTop={"4px"} _hover={{cursor:"pointer"}}>
      <a href="http://protocolx.co.in">
      <Text fontSize={{base:"10px",md:"20px"}} fontFamily={"poppins"}>made with ♥️ from cosparivaar</Text><Text fontSize={{base:"10px",md:"20px"}} fontFamily={"poppins"} color={"#FF3465"}>powered by Protocol X</Text>
      </a>
      </Flex>


        <Flex gap={{base:"10px",md:"15px"}}>
        {/* <Text paddingTop={{base:"10px",md:"10px"}} paddingBottom={{base:"5px"}} fontSize={{base:"15px",md:"20px"}} fontFamily={"sans-serif"}>support our work via </Text> */}
        <a href="https://www.buymeacoffee.com/0xratnakar">
        <Image width={{base:"99px",md:"165px"}} height={{base:"21px",md:"34px"}}  hover={{cursor:"pointer"}} src="./bmc.png" alt="bmc"/>
        </a>
        </Flex>


      </Flex>


      </Flex>
    </div>
  )
}
