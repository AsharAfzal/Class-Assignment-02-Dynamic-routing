import Link from "next/link"
import React from "react"

function Navbar() {
return(
    <ul className="flex justify-center items-center gap-4" >
   <li><Link href="/" className="bg-red-600" >
          Home 
          </Link></li>
        <li>
           <Link href="/contact" className="bg-red-600" >
           Contact 
          </Link>
        </li>
        <li>
        <Link href="/feedback" className="bg-red-600" >
           Feedback 
          </Link>
        </li>
        <li><Link href="/about" className="bg-red-600" >
          About 
          </Link></li>
        <li>
        <Link href="/country" className="bg-red-600" >
           Country
          </Link>
        </li>
         </ul>
)
}


export default Navbar