import { Genotype, FlowerTypes } from "@/typeDefs/geneDataTypes";
import geneDataJson from "@/resources/geneData.json"
const geneData: any = geneDataJson as any //shut up typescript

const COLORS: { [key: string]: string } = {
    "White (seed)": "bg-purple-50",
    "White": "bg-purple-50",
    "Pink": "bg-ping-400",
    "Red (seed)": "bg-red-500",
    "Red": "bg-red-500",
    "Orange": "bg-orange-600",
    "Yellow (seed)": "bg-yellow-400",
    "Yellow": "bg-yellow-400",
    "Green": "bg-green-500",
    "Purple": "bg-purple-500",
    "Black": "bg-neutral-900",
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

        for (let alleleIndex = 0; alleleIndex < numAlleles; alleleIndex++) {
            let inner = Math.floor(i / (2 ** alleleIndex)) % 2 //offset inside one allele: >>R<<r or R>>r<<
            let outer = alleleIndex == 0 ? 0 : 2 ** alleleIndex //offset for in between alleles: >>Rr<<YySs
            alleleBuilder += alleles[inner + outer]

            //printing this should make it clear, note that "(2^${alleleIndex})" doesn't include outer's ternary statement
            // console.log(`((${i}/${2**alleleIndex})%2) + (2^${alleleIndex})--> ${inner} + ${outer} = ${inner + outer}`)
        }

        //Normalize the alleles, capital letter goes first rR --> Rr
        for(let i = 0; i < alleleBuilder.length; i += 2){
            let a = alleleBuilder[i]
            let b = alleleBuilder[i+1]
            
            if(a === a.toLowerCase() && b === b.toUpperCase()){
                let temp = a
                b = a
                a = temp
            }
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
            for (let i = 0; i < bCombo.length; i++) {
                offspringBuilder += aCombo[i] + bCombo[i]
            }
            newRow.push(offspringBuilder)
        }
        newGeneGrid.push(newRow)
    }

    return newGeneGrid
}

function getColorAsTWCSSFromAllele(flowerType: FlowerTypes, allele: string): string {
    console.log(flowerType)
    console.log(allele)
    let color: string = geneData[flowerType][allele].color
    return COLORS[color] ? COLORS[color] : "bg-slate-950"
}

function gridBuilder(flowerType: FlowerTypes, geneGrid: string[][], clickHandler: any) {
    let grid: any[] = []
    let x = 0
    let y = 0

    for (const dataRow of geneGrid) {
        let row: any[] = []
        y = 0

        for (const dataCol of dataRow) {
            row.push((<div className={`p-7 m-1 ${getColorAsTWCSSFromAllele(flowerType, dataCol)}`} key={x + "," + y}></div>))
            y += 1
        }

        grid.push(<div className="flex" key={x}>{row}</div>)
        x += 1
    }

    return (
        <div className="">
            {grid}
        </div>
    )
}

export default function PunnetSquare({ flowerType, parentA, parentB, handler }: { flowerType: FlowerTypes, parentA: Genotype, parentB: Genotype, handler: any }) {
    parentA = "Rryyss"
    parentB = "Rryyss" //left off: fix rRyyss

    let alleleGrid = calcPunnetSquare(parentA, parentB)
    console.log(alleleGrid)


    return (
        <div>
            <p>Punnett Square</p>
            <p>{parentA}</p>
            <p>{parentB}</p>
            <p>{alleleGrid}</p>
            {gridBuilder(flowerType, alleleGrid, handler)}
        </div>
    )
}