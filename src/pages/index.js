import Card from "@/components/Card"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/router"
import { useReducer, useState } from "react"

const URL = "https://newsapi.org/v2/everything?q=india&from=2023-06-01&sortBy=publishedAt&apiKey=4b8ba1584d8746f8b21d076444d7e604"

const Index = ({newsArticles}) => {
const [filter,setFilter]=useState('')
const router = useRouter()

const handler = ()=>{
    router.push(`/${filter}`)
}
    return (
        <>
            <Navbar/>
            <div className="" style={{justifyContent:"center",display:"flex" ,  }} >
            <div className="border-2 border-current " style={{ display:'flex', margin:"1%" , width:"70%",borderRadius:"2rem"}}>
                <input className="px-4 text-lg " placeholder="search here..." value={filter} type="text" onChange={(e)=>setFilter(e.target.value)} style={{width:"96%",height:"6vh",borderRadius:"2rem" , borderStyle:"none", outline:"none"}}/>
                <button  className="p-3" onClick = {handler} style={{borderRadius:"0 2rem 2rem 0" , backgroundColor:"gray" }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
            </div>
            </div>
            <center>
            <div className=" grid gap-4 grid-cols-1 grid-rows-2 px-10 md:grid-cols-1  lg:grid-cols-1">
            {newsArticles.map((article)=>{
                return <Card props= {article} />
            })}
            </div>
            </center>
        </>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=india&from=${Date.now()-1}&sortBy=publishedAt&apiKey=4b8ba1584d8746f8b21d076444d7e604`);
    const data = await response.json();

    return {
        props:{
            newsArticles:data.articles,
        },
    }
}

export default Index