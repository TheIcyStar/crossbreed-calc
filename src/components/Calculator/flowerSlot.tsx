import Image from 'next/image'
// import Draggable from 'react-draggable' //Make dragable in the future
import { FlowerTypes } from "@/typeDefs/geneDataTypes";
import geneDataJson from "@/resources/geneData.json"
const geneData: any = geneDataJson as any //shut up typescript

const COLORS: { [key: string]: string } = {
    "White (seed)": "bg-purple-50",
    "White": "bg-purple-50",
    "Pink": "bg-pink-400",
    "Red (seed)": "bg-red-600 text-white",
    "Red": "bg-red-600 text-white",
    "Orange (seed)": "bg-orange-500",
    "Orange": "bg-orange-500",
    "Yellow (seed)": "bg-yellow-400",
    "Yellow": "bg-yellow-400",
    "Green": "bg-green-500",
    "Blue": "bg-blue-500",
    "Purple": "bg-purple-500",
    "Black": "bg-neutral-900 text-white",
}

function getColorAsTWCSSFromAllele(flowerType: FlowerTypes, allele: string): string {
    if(!geneData[flowerType]) {
        console.error(`Missing ${flowerType} from geneData.json`)
        return "bg-slate-950 border-4 border-red-500"
    }
    if(!geneData[flowerType][allele]) {
        console.error(`Missing ${allele} allele from geneData.json`)
        return "bg-slate-950 border-4 border-red-500"
    }

    let color: string = geneData[flowerType][allele].color
    return COLORS[color] ? COLORS[color] : "bg-slate-950 border-4 border-red-500"
}

export default function FlowerSlot({ flowerName, alleles, handler, handlerMetadata }: {flowerName?: string, alleles?: string, handler: any, handlerMetadata: string}) {
    if(flowerName && alleles && alleles.length > 0){
        return (
            <button className={`l-2 pr-24 py-1 m-1 flex ${getColorAsTWCSSFromAllele(flowerName, alleles)}`} onClick={() => handler(alleles, handlerMetadata)} >
                <Image 
                    src={`/crossbreed-calc/${flowerName}.png`}
                    width={50}
                    height={50}
                    alt={flowerName+" icon"}>
                </Image>
                <p className='inline'>{alleles}</p>
            </button>
        )
    } else {
        return (
            <button className="text-5xl bg-stone-500 px-16 m-1">+</button>
        )
    }
}
