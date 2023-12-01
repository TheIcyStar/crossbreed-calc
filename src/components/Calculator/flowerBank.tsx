import FlowerSlot from "./flowerSlot"

export default function FlowerBank({ flowerType, flowerBank, handler, handlerMetadata }: {flowerType: string, flowerBank: string[], handler:any, handlerMetadata: string}) {
    let slots: any[] = []

    for(let i=0; i < flowerBank.length; i++){
        slots.push((
            <FlowerSlot key={i+"bank"} flowerName={flowerType} alleles={flowerBank[i]} handler={handler} handlerMetadata={handlerMetadata} />
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