import Link from "next/link"

export default function Header(){
    return (
        <div className="Header bg-amber-800 flex">
            <div className="p-5 flex-auto">
                <button className="text-white text-lg">Crossbreed Calc</button> 
            </div>
            <div className="flex-auto flex justify-end text-white">
                <Link href="/" className="px-4 m-2 py-3 center rounded-xl bg-slate-700">Home</Link>
                <Link href="/calculator" className="px-4 m-2 py-3 rounded-xl bg-slate-700">Calculator</Link>
                <Link href="/how-genes-work" className="px-4 m-2 py-3 rounded-xl bg-slate-700">How Genes Work</Link>
                <Link href="/color-list" className="px-8 m-2 py-3 rounded-xl bg-slate-700">Color List</Link>
            </div>
        </div>
    )
}