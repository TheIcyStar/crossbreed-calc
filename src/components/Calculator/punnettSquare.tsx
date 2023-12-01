import { GenotypeData, Genotype } from "@/typeDefs/geneDataTypes";

const tempData = [
    [{"r": "00","y":"00","s":"11","color":"White"},{"r":"00","y":"01","s":"00","color":"Yellow"},{"r": "00","y":"00","s":"11","color":"White"},{"r": "00","y":"00","s":"11","color":"White"}],
    [{"r": "00","y":"00","s":"11","color":"White"},{"r":"00","y":"01","s":"00","color":"Yellow"},{"r": "00","y":"00","s":"11","color":"White"},{"r": "00","y":"00","s":"11","color":"White"}],
    [{"r": "00","y":"00","s":"11","color":"White"},{"r":"00","y":"01","s":"00","color":"Yellow"},{"r": "00","y":"00","s":"11","color":"White"},{"r": "00","y":"00","s":"11","color":"White"}],
    [{"r": "00","y":"00","s":"11","color":"White"},{"r":"00","y":"01","s":"00","color":"Yellow"},{"r": "00","y":"00","s":"11","color":"White"},{"r": "00","y":"00","s":"11","color":"White"}],
]

const COLORS: {[key: string]: string} = {
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

function getColorAsTWCSS(color: string): string {
    return COLORS[color] ? COLORS[color] : "bg-slate-950"
}

function gridBuilder(genegrid: GenotypeData[][], clickHandler: any) {
    let grid: any[] = []
    let x = 0
    let y = 0

    for(const dataRow of genegrid){
        let row: any[] = []
        y = 0

        for(const dataCol of dataRow){
            row.push((<div className={`p-7 m-1 ${getColorAsTWCSS(dataCol.color)}`} key={x+","+y}></div>))
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

export default function PunnetSquare({ parentA, parentB, handler }: { parentA: Genotype, parentB: Genotype, handler: any}) {

    return (
        <div>
            <p>Punnett Square</p>
            {gridBuilder(tempData, handler)}
        </div>
    )
}