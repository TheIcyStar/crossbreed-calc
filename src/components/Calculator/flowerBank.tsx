import FlowerSlot from "./flowerSlot"
const BANK_SIZE = 12

export default function FlowerBank({ handler, handlerMetadata }: {handler:any, handlerMetadata: string}) {
    let slots: any[] = []

    for(let i=1; i < BANK_SIZE+1; i++){
        slots.push((
            // FlowerSlot({key: i+"bank", flowerName: "Cosmos", alleles: "RryySS"})
            <FlowerSlot key={i+"bank"} flowerName={"Cosmos"} alleles={"RryySS"} handler={handler} handlerMetadata={handlerMetadata} />
        ))
    }

    return (
        <div>
            <p>Flower bank</p>
            <div className="grid grid-cols-2">
                {slots}
                <button className="bg-stone-300 px-2 py-1 m-1">♻️ Reset to seeds</button>
                <button className="bg-stone-300 px-2 py-1 m-1">🗑️ Clear bank</button>
            </div>
        </div>
    )
}