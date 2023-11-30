import FlowerSlot from "./flowerSlot"
const BANK_SIZE = 12

export default function FlowerBank({ handler }: {handler:any}) {
    let slots: any[] = []

    for(let i=1; i < BANK_SIZE+1; i++){
        slots.push((
            // FlowerSlot({key: i+"bank", flowerName: "Cosmos", alleles: "RryySS"})
            <FlowerSlot key={i+"bank"} flowerName={"Cosmos"} alleles={"RryySS"} handler={handler} />
        ))
    }

    return (
        <div>
            <p>Flower bank</p>
            <div className="grid grid-cols-2">
                {slots}
            </div>
        </div>
    )
}