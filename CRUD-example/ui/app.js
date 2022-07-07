// import {getBookList, deleteBookById, findBookById, updateBook} from "../api.js";
const API_URL = 'https://62c63e0ea361f7251297553e.mockapi.io/list/';
async function getBookList(){
    return await axios.get(API_URL)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}
function findBookById(id){
    return axios.get(API_URL + `${id}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}
function deleteBookById(id){
    axios.delete(API_URL + `${id}`)
        .then(function (response) {
            console.log('this book deleted')
        })
        .catch(function (error) {
            console.log(error);
        })
}

function updateBook(book){
    axios.put(API_URL, {
        bookId: book.bookId,
        bookName: book.bookName,
        bookPrice: book.bookPrice
    }).then(()=>{
        console.log('update success')
    }).catch(()=>{
        console.log('error')
    })
}

let bookList = [];
renderBookList();
async function renderBookList(){
    bookList = await getBookList();
    console.log(bookList)
    let bookListElement = document.getElementById('bookList');
    let bookTable = ``;
    bookTable += `<table border=1 class="table"> 
    <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Book name</th>
            <th>Book price</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>`;

    for(let i=0; i<bookList.length; i++){
        bookTable += `<tbody><tr>
        <td>${bookList[i].id}</td>
        <td>${bookList[i].bookName}</td>
        <td>${bookList[i].bookPrice}</td>
        <td><button data-toggle="modal" data-target="#exampleModal" class="btn btn-warning" onclick="_edit(${bookList[i].id})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="_delete(${bookList[i].id})">Delete</button></td>
        </tr>
        `
    }
    bookTable += '</tbody><table/>';
    bookListElement.innerHTML = bookTable;
}
async function _edit(bookId){
    let book = await findBookById(bookId);
    document.getElementById('bookName').value = book.bookName;
    document.getElementById('bookPrice').value = book.bookPrice;
    document.getElementById('bookImage').value = book.bookImage;
}
async function _delete(id){
    await deleteBookById(id);
    await renderBookList();
}