import Header from "@/components/header"
import Image from 'next/image'
import { GeneDataType } from "@/typeDefs/geneDataTypes"
import geneData from "@/resources/geneData.json"
import PunnetSquare from "@/components/punnettSquare"
import FlowerBank from "@/components/flowerBank"

function flowerlist() {
  let flowerlist: any[] = []

  for(const flower in geneData){
    flowerlist.push((
      <div key={flower}>
        <Image 
            src="http://placekitten.com/100/100"
            width={100}
            height={100}
            alt={flower+" icon"}
            >
          </Image>
          <p>{flower}</p>
      </div>
    ))
  }

  return (
    <div>
      {flowerlist}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Header></Header>
      <p>PUNETT SQUAARE TIME BAYBEE</p>
      {flowerlist()}

      <div>

        <PunnetSquare parentA={""} parentB={""}></PunnetSquare>
        <FlowerBank></FlowerBank>
      </div>
    </main>
  )
}
