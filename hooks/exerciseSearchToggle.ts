import React from "react";

function useToggle(){
    const [toggle, setToggle] = React.useState(false)
    
    function toggleOnOff(){
        setToggle(toggle => !toggle)
        
    }
    return { toggle, toggleOnOff }
}
export default useToggle