'use client'
import { useState } from "react"
import Image from 'next/image'
import FlowerBank from "./flowerBank"
import PunnetSquare from "./punnettSquare"
import FlowerSlot from "./flowerSlot"
import defaultBanksJson from "@/resources/defaultBanks.json"
import geneDataJson from "@/resources/geneData.json"
const defaultBanks: any = defaultBanksJson as any
const geneData: any = geneDataJson as any //shut up typescript

const BANK_SIZE = 12


function flowerlist(clickHandler: any) {
  let flowerlist: any[] = []

  for (const flower in geneData) {
    flowerlist.push((
      <div className="px-4" key={flower} onClick={() => clickHandler(flower)}>
        <Image
          src={`/crossbreed-calc/${flower}.png`}
          width={100}
          height={100}
          alt={flower + " icon"}
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

function currentFlowerBanner({ flowerName, alleleExample }: { flowerName: string, alleleExample: string}) {
  let uniqueLetters = ""
  for(let i = 0; i < alleleExample.length -1; i = i+2){
    uniqueLetters += alleleExample[i]
  }

  return (
    <div className="flex justify-center">
      <Image
        src={`/crossbreed-calc/${flowerName}.png`}
        width={150}
        height={150}
        alt={flowerName + " icon"}
      >
      </Image>
      <p className="px-3 text-5xl">{flowerName}</p>
      <div className="mx-5">
        <p className="text-center text-3xl">{uniqueLetters.toUpperCase()}</p>
        <p className="">{alleleExample.length/2} alleles</p>
      </div>
    </div>
  )
}

export default function Calculator() {
  const [flowerType, setFlowerType] = useState<string>("Roses")
  const [flowerBank, setFlowerBank] = useState<string[]>(defaultBanks["Roses"].concat(Array(8).map(() => ""))) //Array of most "diverse" genotype, the seeds, and empty strings to fill space
  const [parentA, setParentA] = useState<string>("RrYyWwSs")
  const [parentB, setParentB] = useState<string>("RrYyWwSs")

  function handleSlotClick(alleles: string) {
    console.log(`Clicked on flower with ${alleles}`)
  }

  function handleParentClick(alleles: string, parent: string) {
    console.log(`Clicked on parent ${parent} with ${alleles}`)
  }

  function handlePunnetClick(alleles: string) {
    console.log(`Clicked on punnet grid with ${alleles}`)
  }

  //Changes flower type and resets everything
  function handleFlowerTypeClick(type: string){
    let defaultFlowerGeneotypes: string[] = defaultBanks[type]

    setFlowerType(type)
    setFlowerBank(defaultFlowerGeneotypes.concat(Array(BANK_SIZE - defaultFlowerGeneotypes.length).map(() => "")))
    setParentA(defaultFlowerGeneotypes[0])
    setParentB(defaultFlowerGeneotypes[0])
    console.log(`Clicked on new flower type with ${type}`)
  }

  return (
    <div>
      <div className="py-3">
        {flowerlist(handleFlowerTypeClick)}
      </div>
      <div className="py-10">
        {currentFlowerBanner({ flowerName: flowerType, alleleExample: parentA })}
      </div>

      <div className="flex">
        <FlowerBank flowerType={flowerType} flowerBank={flowerBank} handler={handleSlotClick} handlerMetadata="" ></FlowerBank>
        
        <div>
          <div className="flex justify-center">
            <FlowerSlot flowerName={flowerType} alleles={parentA} handler={handleParentClick} handlerMetadata="A" ></FlowerSlot>
            <p className="text-3xl"> X </p>
            <FlowerSlot flowerName={flowerType} alleles={parentB} handler={handleParentClick} handlerMetadata="B" ></FlowerSlot>
          </div>

          <PunnetSquare flowerType={flowerType} parentA={parentA} parentB={parentB} handler={handlePunnetClick}></PunnetSquare>
        </div>

      </div>
    </div>
  )
}