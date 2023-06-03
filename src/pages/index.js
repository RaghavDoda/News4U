import Card from "@/components/Card"
import Navbar from "@/components/Navbar"


const Index = () => {
    return (
        <>
            <Navbar/>
            <div className="" style={{justifyContent:"center",display:"flex" ,  }} >
            <div className="border-2 border-current " style={{ display:'flex', margin:"1%" , width:"70%",borderRadius:"2rem"}}>
                <input className="px-4 text-lg " placeholder="search here..." type="text" style={{width:"96%",height:"6vh",borderRadius:"2rem" , borderStyle:"none", outline:"none"}}/>
                <button  className="p-3" style={{borderRadius:"0 2rem 2rem 0" , backgroundColor:"gray" }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
            </div>
            </div>
            <center>
            <div className=" grid gap-4 grid-cols-1 grid-rows-3 px-10 md:grid-cols-2  lg:grid-cols-3">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            </center>
        </>
    )
}

export default Index