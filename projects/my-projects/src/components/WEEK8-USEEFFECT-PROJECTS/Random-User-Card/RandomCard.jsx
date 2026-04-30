// import { useState,useEffect } from "react";

// export default function RandomUserCard(){
//     const [cardData,SetCardData]=useState({
//         name:(false),
//         picture:(false),
//         email:(false),
//         location:(false)
//     })
//     const [loading,setisloading]=useState(false)
//     const [error,setError]=useState(false)

//      setisloading(true)
//     useEffect(()=>{
//         const fetchdata=await.fetch("https://randomuser.me/api/")
       
//         .then(Response.json())
//         .then(Response.SetCardData(cardData))
//         setisloading(false)
//         setError(false)
//     })
//     {error? && <p>{error.message}</p>}
//     {cardData===0 ? && <p>List empty</p>}

//     return(
//         <>
//         {card.map(()=>{
//         <div key={results.id}>
//                 {results.name}
//                  {results.picture}
//                   {results.email}
//                    {results.location}
//             </div>
//         })}
//         </>
//     )



// }

// import { useState,useEffect } from "react";

// export default function RandomUserCard(){
//     const [cardData,setCardData]=useState(null)
//     const [isLoading,setisloading]=useState(true)
//     const [error,setError]=useState(false)

//     useEffect(()=>{
//         fetch("https://randomuser.me/api/")
       
//         .then(res=> res.json())
//         .then(data =>{
//             setCardData(data.results[0])
//             setisloading(false)
//         })

//         .catch(err=>{
//             setError(err.message)
//             setisloading(false)
//         })
        
//     },[])

//     if (isLoading) return <p>Loading...</p>
//     if (error) return <p>Error: {error}</p>
//     if (!cardData) return <p>No user found.</p>

//     return (
//   <div>
//     <img src={cardData.picture.large} alt="user" />
//     <p>{cardData.name.first} {cardData.name.last}</p>
//     <p>{cardData.email}</p>
//     <p>{cardData.location.city}</p>
//   </div>
//         )
//     }
   
import { useState,useEffect } from "react";

export default function RandomUserCard(){
    const [cardData,setCardData]=useState(null)
    const [isLoading,setisloading]=useState(true)
    const [error,setError]=useState(false)

    function fetchUser(){
        setisloading(true)
        setError(false)

         fetch("https://randomuser.me/api/")
       
        .then(res=> res.json())
        .then(data =>{
            setCardData(data.results[0])
            setisloading(false)
        })

        .catch(err=>{
            setError(err.message)
            setisloading(false)
        })
        
    }

    useEffect(()=>{
        fetchUser()
    },[])
       
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!cardData) return <p>No user found.</p>

    return (
        
  <div>

    <img src={cardData.picture.large} alt="user" />
    <p>{cardData.name.first} {cardData.name.last}</p>
    <p>{cardData.email}</p>
    <p>{cardData.location.city}</p>

    <button onClick={fetchUser}>click to get another user</button>
  </div>
        )
    }

    