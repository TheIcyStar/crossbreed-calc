export default function Header(){
    return (
        <div className="Header bg-amber-800 flex">
            <div className="p-5 flex-auto">
                <button className="text-white text-lg">Crossbreed Calc</button> 
            </div>
            <div className="flex-auto flex justify-end text-white">
                <button className="px-4 m-2 rounded-xl bg-slate-700">Home</button>
                <button className="px-4 m-2 rounded-xl bg-slate-700">Calculator</button>
                <button className="px-4 m-2 rounded-xl bg-slate-700">How Genes Work</button>
                <button className="px-8 m-2 rounded-xl bg-slate-700">Color List</button>
            </div>
        </div>
    )
}