import Navbar from "@/components/Navbar"; 
import Link from "next/link";
import React from "react";

export default function Country() {
    return  ( <div>

        <Navbar/>
    <h1>Countries :-
    <ul>
    <li><Link href="/country/pakistan">Pakistan</Link></li> <br />
    <li><Link href="/country/japan">Japan</Link></li> <br />
    <li><Link href="/country/canada">Canada</Link></li> <br />
    <li><Link href="/country/usa">USA</Link></li> <br/>
    <li><Link href="/country/china">China</Link></li>
    </ul>
    </h1>
     </div> 
    )
    }