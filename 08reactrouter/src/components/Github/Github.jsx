import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/rajpratapgit')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
    return (
        <>
        <div className='text-ceneter m-4 bg-gray-600 text-white text-3xl text-center'>
            GitHub Followers: {data.followers}
            <img src={data.avatar_url} alt="Error in image fetching" width={300} className='m-auto p-4 rounded-full'/>
        </div>
        </>
    )
}

export default Github
