import Header from "@/components/header"
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Header></Header>
      
      <div className="flex px-40 py-10">
        <div>
          <Image 
            src="http://placekitten.com/300/300"
            width={300}
            height={300}
            alt="Logo"
            >
          </Image>
        </div>
        <div>
          <p className="text-5xl">Crossbreed Calc</p>
          <p className="mb-5">A Punnet square calculator with AC:NL & AC:NH flowers</p>
          <Link href="/" className="px-4 mx-5 py-3 center rounded-xl text-white text-xl bg-slate-700">Start the calculator</Link>

        </div>
      </div>

      <div className="flex px-40 py-10">
        <div>
          <p>Full Floral Control</p>
          <p>Choose a type of flower and the genes you would like to crossbreed with. You can use some preset flowers or create your own</p>
        </div>
        <div>
          <Image 
            src="http://placekitten.com/300/301"
            width={300}
            height={300}
            alt="Logo"
            >
          </Image>
        </div>
      </div>

      <div className="flex px-40">
        <div>
          <Image 
            src="http://placekitten.com/301/300"
            width={300}
            height={300}
            alt="Logo"
            >
          </Image>
        </div>
        <div>
          <p>Get instant, visual feedback</p>
          <p>The flowers we crossbreed using the calculator express their genes only using color. This creates a simple, beautiful representation of all of the crosses, no matter how many alleles the flower has</p>
        </div>
      </div>

      <div className="flex px-40 py-10">
        <p>Ready to get started?</p>
        <Link href="/calculator" className="px-4 m-2 py-3 center rounded-xl text-white text-xl bg-slate-700">Start the calculator</Link>
        {/* <Link href="/color-list" className="px-4 m-2 py-3 center rounded-xl text-white text-xl bg-slate-700">See the flower colors</Link> */}
        <Link href="https://docs.google.com/spreadsheets/d/11pRCX8G0xGizSYWgVhoUSu7pE-MV7AOprBcgSY1whB4/edit?usp=sharing" className="px-4 m-2 py-3 center rounded-xl text-white text-xl bg-slate-700">See the flower colors</Link>
      </div>
    </main>
  )
}
