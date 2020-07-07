export default function addApi(data) {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items"
        fetch(url,{  // dùng để lấy và ghi dữ liệu
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({   
                    name:data.name,
                    age:data.age
                })  // chuyen objec xang json})  // chuyen objec xang json
            })
            .then((response) => { return response.json() })  // lấy dữ liệu trong file json
            .then((res) => {
                resolve(res);      // truyền biến res
            })
            .catch((error) => {
                reject(error)

            })
    })
}
