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
      <div className="px-4" key={flower}>
        <Image 
            src="http://placekitten.com/100/100"
            width={100}
            height={100}
            alt={flower+" icon"}
            >
          </Image>
          <p className="text-center">{flower}</p>
      </div>
    ))
  }

  return (
    <div className="flex justify-center">
      {flowerlist}
    </div>
  )
}

function currentFlowerBanner({ flowerName, alleles }: {flowerName: string, alleles: string}){
  return (
    <div className="flex justify-center">
      <Image 
        src="http://placekitten.com/150/150"
        width={150}
        height={150}
        alt={flowerName+" icon"}
        >
      </Image>
      <p className="px-3 text-5xl">{flowerName}</p>
      <div className="mx-5">
        <p className="text-center text-3xl">{alleles}</p>
        <p className="">{alleles.length} alleles</p>
      </div>
    </div>
  )
}

export default function Calculator() {
  return (
    <main>
      <Header></Header>
      <div>
        {flowerlist()}
      </div>
      <div className="py-10">
        {currentFlowerBanner({flowerName:"Cosmos", alleles: "RYS"})}
      </div>

      <div className="flex">
        <FlowerBank></FlowerBank>
        <PunnetSquare parentA={""} parentB={""}></PunnetSquare>
      </div>
    </main>
  )
}
