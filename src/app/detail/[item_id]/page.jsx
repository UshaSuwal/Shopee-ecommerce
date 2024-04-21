'use client'

import { useSearchParams } from "next/navigation";


export default function Contact({ params }) {
    const searchParams = useSearchParams()

    const type = searchParams.get('type')
  
    return (
      <div>
          contact show page<br />
          {type} <br></br>
      </div>
    );
  }
  