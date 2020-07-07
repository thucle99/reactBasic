export default function updateAPI(data) {
    return new Promise((resolve, reject) => {
        console.log('fetchAPI...',data);
        
        const url = `http://localhost:3001/items/${data.id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({name:data.name,age:data.age})
        })
    
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        }); 
    });  
}

