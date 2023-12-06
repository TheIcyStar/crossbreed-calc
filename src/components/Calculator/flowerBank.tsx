import FlowerSlot from "./flowerSlot"

export default function FlowerBank({ flowerType, flowerBank, slotHandler, handlerMetadata, actionHandler }: {flowerType: string, flowerBank: string[], slotHandler:any, handlerMetadata: string, actionHandler: any}) {
    let slots: any[] = []

    for(let i=0; i < flowerBank.length; i++){
        slots.push((
            <FlowerSlot key={i+"bank"} flowerName={flowerType} alleles={flowerBank[i]} handler={slotHandler} handlerMetadata={handlerMetadata} />
        ))
    }

    return (
        <div>
            <p>Flower bank</p>
            <div className="grid grid-cols-2">
                {slots}
                <button className="bg-stone-300 px-2 py-1 m-1" onClick={() => actionHandler("reset")}>♻️ Reset to seeds</button>
                <button className="bg-stone-300 px-2 py-1 m-1" onClick={() => actionHandler("empty")}>🗑️ Empty bank</button>
            </div>
        </div>
    )
}