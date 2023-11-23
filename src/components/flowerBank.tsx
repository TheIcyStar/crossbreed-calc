const BANK_SIZE = 12

export default function FlowerBank() {
    let slots: any[] = []

    for(let i=1; i < BANK_SIZE; i++){
        slots.push((
            <div>
                <button className="text-5xl" key={i}>+</button>
            </div>
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