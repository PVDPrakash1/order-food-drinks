import react, {useState } from 'react';
const Loading = ()=>{
    const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);

  const fetchData = async()=>{
    setLoading(true);
    // setTimeout(async ()=>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result)
    }catch(error){
      console.error('Error fetching data',error);
    }
    setLoading(false);
  //  },4000)
  }
    return(
        <div style={{textAlign:'center',marginTop:'300px'}}>
           <button onClick={fetchData}>
      {loading ? 'Loading': 'Click Here'}
     </button>
   
     {
      data.map((item)=>
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.username}</li>
          <li>{item.email}</li>
        </ul>
      )
    }
        </div>
    )
}
export default Loading;