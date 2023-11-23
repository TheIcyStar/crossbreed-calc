import { Genotype } from "@/typeDefs/geneDataTypes";

function gridBuilder() {
    let grid: any[] = []
    for(let x=0; x<4; x++){
        let row: any[] = []

        for(let y=0; y<4; y++){
            row.push((<div className="p-5 m-1 bg-red-600" key={x+","+y}></div>))
        }

        grid.push(<div className="flex" key={x}>{row}</div>)
    }

    return (
        <div className="">
            {grid}
        </div>
    )
}

export default function PunnetSquare({ parentA, parentB }: { parentA: Genotype, parentB: Genotype}) {

    return (
        <div>
            <p>poonet square</p>
            {gridBuilder()}
        </div>
    )
}