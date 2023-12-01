'use client'
import { useState } from "react"
import Image from 'next/image'
import geneData from "@/resources/geneData.json"
import FlowerBank from "./flowerBank"
import PunnetSquare from "./punnettSquare"


function flowerlist() {
  let flowerlist: any[] = []

  for (const flower in geneData) {
    flowerlist.push((
      <div className="px-4" key={flower}>
        <Image
          src="http://placekitten.com/100/100"
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

function currentFlowerBanner({ flowerName, alleles }: { flowerName: string, alleles: string }) {
  return (
    <div className="flex justify-center">
      <Image
        src="http://placekitten.com/150/150"
        width={150}
        height={150}
        alt={flowerName + " icon"}
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
  const [flowerType, setFlowerType] = useState("Cosmos")
  const [flowerBank, setFlowerBank] = useState<string[]>(Array(12).map(() => "")) //Array of empty strings
  const [parentA, setParentA] = useState<string>("")
  const [parentB, setParentB] = useState<string>("")

  function handleSlotClick(alleles: string) {
    console.log(`Clicked on flower with ${alleles}`)
  }

  function handleParentClick(alleles: string, parent: string) {
    console.log(`Clicked on parent ${parent} with ${alleles}`)
  }

  function handlePunnetClick(alleles: string) {
    console.log(`Clicked on punnet grid with ${alleles}`)
  }

  return (
    <div>
      <div>
        {flowerlist()}
      </div>
      <div className="py-10">
        {currentFlowerBanner({ flowerName: "Cosmos", alleles: "RYS" })}
      </div>

      <div className="flex">
        <FlowerBank handler={handleSlotClick} handlerMetadata="" ></FlowerBank>
        <PunnetSquare flowerType={flowerType} parentA={parentA} parentB={parentB} handler={handlePunnetClick}></PunnetSquare>
      </div>
    </div>
  )
}