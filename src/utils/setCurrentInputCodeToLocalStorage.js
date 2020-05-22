const setCurrentInputCodeToLocalStorage = (currentInputCode)=> {
    const currentInputInLocalStorage = localStorage.getItem("inputCode");

    if (currentInputInLocalStorage !== currentInputCode) {
        localStorage.setItem("inputCode", currentInputCode);
    } 
}

export default setCurrentInputCodeToLocalStorage;