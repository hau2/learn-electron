// const API_URL = 'https://62c63e0ea361f7251297553e.mockapi.io/';
// function getBookList(){
//     return axios.get(API_URL + 'list')
//         .then(function (response) {
//             return response.data;
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }
// function findBookById(id){
//     return axios.get(API_URL + `/${id}`)
//         .then(function (response) {
//             return  response.data;
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }
// function deleteBookById(id){
//     axios.delete(API_URL + `/${id}`)
//         .then(function (response) {
//             console.log('this book deleted')
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }
//
// function updateBook(book){
//     axios.put(API_URL, {
//         bookId: book.bookId,
//         bookName: book.bookName,
//         bookPrice: book.bookPrice
//     }).then(()=>{
//         console.log('update success')
//     }).catch(()=>{
//         console.log('error')
//     })
// }
// export {
//     getBookList,
//     findBookById,
//     deleteBookById,
//     updateBook
// }