import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
    
    // const data = useLoaderData();
    // console.log(data);
    let [data ,setData] = useState([])
    const {userid} = useParams();
    if(userid){
        useEffect(() => {
                fetch(`https://api.github.com/users/${userid || 'amank736836'}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                }
            )
        }, [userid]);
    }else{
        console.log("useLoaderData", useLoaderData())
        data = useLoaderData();
    }


  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl">
      Github Username :  {data.login} 😎
      <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-full mx-auto m-4"/>
    </div>
  );
}

export default Github;
