import { useState } from "react";

function useLoader(){
    const [loading, setLoading] = useState<Boolean>(false)

   function Loader(){
        return (
            <div>
               <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    return { loading, setLoading, Loader }
}
export default useLoader