import { redirect } from "next/navigation"


const defeultCategory = "01"

export default async function Home() {
  
  redirect(`/category/${defeultCategory}`)
  
 
 
}
