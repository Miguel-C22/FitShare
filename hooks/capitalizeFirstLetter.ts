function useCapitalizeFirstLetter(){
    function capitalizeFirstLetter(string: String){ 
        const capitalizedFirstLetter = string.charAt(0).toUpperCase() + string.slice(1)
        return capitalizedFirstLetter
    }
    return {capitalizeFirstLetter}
}
export default useCapitalizeFirstLetter