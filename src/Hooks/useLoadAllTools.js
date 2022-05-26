import { useEffect, useState } from "react";

const useLoadAllTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://pure-atoll-42866.herokuapp.com/tools')
            .then(response => response.json())
            .then(data => setTools(data))
    }, [tools])

    return [tools, setTools];
}

export default useLoadAllTools;