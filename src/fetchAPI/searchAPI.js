export default function searchAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items?age=${data}`
        fetch(url,{  // dùng để lấy và ghi dữ liệu
                method: 'GET'
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
