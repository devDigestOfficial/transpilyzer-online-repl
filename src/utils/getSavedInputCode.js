const getSavedInputCode = () => {
    const currentInputCode = localStorage.getItem("inputCode");

    if (currentInputCode === null) {
        return "";
    } else {
        return currentInputCode;
    }
}

export default getSavedInputCode;