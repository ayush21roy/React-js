import React from "react";
import { useState } from "react";
import { useEffect } from "react";

/*
      we want to do API call when our this element (github) is loaded
      and for that we can use UseEffect(fn,dep arr) 
*/
function Github() {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            fetch('https://api.github.com/users/ayush21roy')
                .then(response => response.json())
                .then(data => {
                    console.log(data); //but this won't render on screen & for that we need useState
                    setData(data);
                })
        }, []
    )
    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
            {data.name}'s Github Public Repos : {data.public_repos}
            <img src={data.avatar_url} alt="Git picture" width={200} />
        </div>
    )
}

export default Github