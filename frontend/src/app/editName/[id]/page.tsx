

import EditNameForm from "@/components/editNameForm";

const getNamebyid= async(id)=>{
    try{
        const res= await fetch(`http://localhost:3001/names/${id}`,{
            cache:"no-store",
        });
        if(!res.ok){
            throw new Error("Failed to fetch");
        }
        const data= await res.json();
        return data;
    } catch (error){
        console.log(error);
    }
}

const EditName= async ({params})=>{
    const{id}= params;
    const data= await getNamebyid(id);
    const{name, university}= data;
    console.log("id:",id)
    return (
        <EditNameForm id={id} name={name} university={university}/>
    );
}
export default EditName;