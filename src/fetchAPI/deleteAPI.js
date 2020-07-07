export default function deleteAPI(id) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
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

