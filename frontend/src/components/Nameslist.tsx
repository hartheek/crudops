import Link from "next/link";
import RemoveBtn from "./removebtn";
import {HiPencilAlt} from "react-icons/hi";


    const getNames = async ()=>{
        try{
            const res= await fetch("http://localhost:3001/names",{
                cache: "no-store",
            });

            if(!res.ok){
                throw new Error('Failed to fetch topics');
            }
            return res.json();
        } catch (error){
            console.log("Error loading topics:",error);
            return []
        }
    }
    const NamesList= async ()=>{
        const names = await getNames();
    return(
        <>
        {names.map(n=>(
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                
                <div>
                    <h2 className="fonr-bold text-2xl">{n.name}</h2>
                    <div> {n.university}</div>
                </div>
        
            <div className="flex gap-2">
                <RemoveBtn id={n.id}/>
                <Link  href={`/editName/${n.id}`}>
                <HiPencilAlt size={24}/></Link>
            </div>
            </div>
            ))}
        </>
    )
}
export default NamesList;