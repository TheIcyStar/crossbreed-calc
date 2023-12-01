import Image from 'next/image'
// import Draggable from 'react-draggable' //Make dragable in the future

export default function FlowerSlot({ flowerName, alleles, handler, handlerMetadata }: {flowerName?: string, alleles?: string, handler: any, handlerMetadata: string}) {
    if(flowerName){
        return (
            <button className="bg-stone-500 pl-2 pr-24 py-1 m-1 flex" onClick={() => handler(alleles, handlerMetadata)} >
                <Image 
                    src="http://placekitten.com/50/50"
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
