export default function callApi(){
    return new Promise((resolve,reject) =>{
        const url= `http://localhost:3001/items`;
        fetch(url,{
            method :"GET"
        })
        .then( (response) => response.json() )  // lấy dữ liệu trong file json
        .then( (res) =>{
            resolve(res);
            // console.log('truyen lai',res);
        })
        .catch( (error) =>{
            reject(error);
        });
    })
}