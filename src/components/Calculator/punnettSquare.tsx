import { useState } from "react"
import { Genotype, FlowerTypes } from "@/typeDefs/geneDataTypes";
import geneDataJson from "@/resources/geneData.json"
const geneData: any = geneDataJson as any //shut up typescript

const COLORS: { [key: string]: string } = {
    "White (seed)": "bg-purple-50",
    "White": "bg-purple-50",
    "Pink": "bg-pink-400",
    "Red (seed)": "bg-red-600",
    "Red": "bg-red-600",
    "Orange (seed)": "bg-orange-500",
    "Orange": "bg-orange-500",
    "Yellow (seed)": "bg-yellow-400",
    "Yellow": "bg-yellow-400",
    "Green": "bg-green-500",
    "Blue": "bg-blue-500",
    "Purple": "bg-purple-700",
    "Black": "bg-neutral-900 text-white",
}

//Returns the possible permutations of a single parent's cross (This is what goes on the top and side of the punnet square)
function getAlleleCombos(alleles: string): string[] {
    let numAlleles = alleles.length / 2
    let combos = []

    // Basically count up in binary, but instead of 0s and 1s, we use each halves of that allele.
    // 010 of RrYySs => RyS
    // Except this code just does a funny. Powers of 2 for the win.
    for (let i = 0; i < (2 ** numAlleles); i++) {
        let alleleBuilder = ""

        // Outer - offset inside one allele: >>R<<r or R>>r<<
        // Inner - offset inside one allele: >>R<<r or R>>r<<
        for (let alleleIndex = 0; alleleIndex < numAlleles; alleleIndex++) {
            let outer = alleleIndex == 0 ? 0 : 2*alleleIndex
            let inner = Math.floor(i / (2**(numAlleles - 1 -alleleIndex))) % 2
            // let inner = Math.floor(i / (2**(alleleIndex))) % 2
            alleleBuilder += alleles[inner + outer]

            //printing this should make it clear, note that "(2^${alleleIndex})" doesn't include outer's ternary statement
            // console.log(`((${i}/${2**alleleIndex})%2) + (2^${alleleIndex})--> ${inner} + ${outer} = ${inner + outer}`) 
        }
        
        //Add to list of alleles
        combos.push(alleleBuilder)
    }

    return combos
}

function calcPunnetSquare(parentAAlleles: string, parentBAlleles: string): string[][] {
    let parentACombos = getAlleleCombos(parentAAlleles)
    let parentBCombos = getAlleleCombos(parentBAlleles)

    let newGeneGrid: string[][] = []

    for (const bCombo of parentBCombos) { //parent B as rows
        let newRow = []
        for (const aCombo of parentACombos) { //parent A as columns
            let offspringBuilder = ""
            for (let i = 0; i < aCombo.length; i++) {
                offspringBuilder += aCombo[i] + bCombo[i]
            }

            //Normalize the offspring alleles, capital letter goes first rR --> Rr
            for(let i = 0; i < offspringBuilder.length -1; i = i+2){
                let a = offspringBuilder[i]
                let b = offspringBuilder[i+1]
                
                //swap
                if(a === a.toLowerCase() && b === b.toUpperCase()){
                    let swapIndex = i
                    offspringBuilder = offspringBuilder.slice(0, swapIndex==0 ? 0 : swapIndex) + b + offspringBuilder.slice(swapIndex+1, offspringBuilder.length)

                    swapIndex += 1
                    offspringBuilder = offspringBuilder.slice(0, swapIndex==0 ? 0 : swapIndex) + a + offspringBuilder.slice(swapIndex+1, offspringBuilder.length)
                }
            }

            newRow.push(offspringBuilder)
        }
        newGeneGrid.push(newRow)
    }

    return newGeneGrid
}

function getColorAsTWCSSFromAllele(flowerType: FlowerTypes, allele: string): string {
    if(!geneData[flowerType]) {
        // console.error(`Missing ${flowerType} from geneData.json`)
        return "bg-slate-950 border-4 border-red-500"
    }
    if(!geneData[flowerType][allele]) {
        // console.error(`Missing ${allele} allele from geneData.json`)
        return "bg-slate-950 border-4 border-red-500"
    }

    let color: string = geneData[flowerType][allele].color
    return COLORS[color] ? COLORS[color] : "bg-slate-950 border-4 border-red-500"
}

function gridBuilder(flowerType: FlowerTypes, clickHandler: any, geneGrid?: string[][], gridSize?: number) {
    let grid: any[] = []

    if(!geneGrid && gridSize){ //Empty grid if there is no computed gene grid (due to a lack of a parent)
        for(let x = 0; x < 2**gridSize; x++){
        let row: any[] = []
            for(let y = 0; y < 2**gridSize; y++){
                row.push((<div className={`p-5 m-0.5 bg-gray-600`} key={x + "," + y}></div>))
            }
            grid.push(<div className="flex" key={x}>{row}</div>)
        }

    } else if (geneGrid) { //Full gene grid
        let x = 0
        let y = 0
        for (const dataRow of geneGrid) {
            let row: any[] = []
            y = 0
    
            for (const dataCol of dataRow) {
                row.push((<div className={`p-5 m-0.5 ${getColorAsTWCSSFromAllele(flowerType, dataCol)}`} onClick={() => clickHandler(dataCol)} key={x + "," + y}></div>))
                y += 1
            }
    
            grid.push(<div className="flex" key={x}>{row}</div>)
            x += 1
        }
    }


    return (
        <div className="">
            {grid}
        </div>
    )
}

export default function PunnetSquare({ flowerType, parentA, parentB, handler }: { flowerType: FlowerTypes, parentA?: Genotype, parentB?: Genotype, handler: any }) {
    //maintain size while 
    const [recentSize, setRecentSize] = useState<number>(4)
    
    if(parentA && parentB && parentA !== "" && parentB !== ""){
        let alleleGrid = calcPunnetSquare(parentA, parentB)

        return (
            <div>
                {gridBuilder(flowerType, handler, alleleGrid )}
            </div>
        )

    } else { //One of the parents is missing, so make an empty grid for consistency
        return (
            <div>
                {gridBuilder(flowerType, handler, undefined, recentSize)}
            </div>
        )
    }
}