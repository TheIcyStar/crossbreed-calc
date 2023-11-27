import FlowerSlot from "./flowerSlot"
const BANK_SIZE = 12

export default function FlowerBank() {
    let slots: any[] = []

    for(let i=1; i < BANK_SIZE+1; i++){
        slots.push((
            FlowerSlot({key: i+"bank", flowerName: "Cosmos", alleles: "RryySS"})
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