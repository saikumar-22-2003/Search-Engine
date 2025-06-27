// import  algoliasearch  from 'algoliasearch';

// const client = algoliasearch('889P33SWIA', 'a4057f50694f963b92d7695df51ac273');

// const index = client.initIndex('find');

// index.
// search("Fjallraven")
// .then(({hits})=>{
//     console.log(hits);
   

// })
//  .catch(err=>{
//         console.log(err)
// })
// let data=[]
// let resultElement=document.querySelector('.results');
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{(data=json)
//  console.log('Data is' ,data)
//             })
           

//  document.querySelector('#searchinput').addEventListener('keyup',()=>{
   
//     let serchElement=document.querySelector('#searchinput').value;
    
//     let requiredArray=[]
//     requiredArray=data.filter(product=> String( product.title).includes(serchElement))
//     renderingProducts(requiredArray)
//  })   
 
//  function renderingProducts(products){
//     document.querySelectorAll('.result').forEach(prod=>{
//         prod.remove()
//     })
//     products.forEach(product=>{
//         renderingsingleProducts(product)
//     })
//  }
//  function renderingsingleProducts(product){
  
//     let resultdiv=document.createElement('div')
//     let resultImage=document.createElement('img')
//     let resultTitle=document.createElement('h4')
//     let resultPrice=document.createElement('p')
//     let resultPurchasebutton=document.createElement('button')
   


//     resultImage.src=product.image;
//     resultTitle.innerText=product.title;
//     resultPrice.innerText=product.price;
//     resultPurchasebutton.innerText='purchase'

//     resultdiv.appendChild(resultImage);
//     resultdiv.appendChild(resultTitle);
//     resultdiv.appendChild(resultPrice);
//     resultdiv.appendChild(resultPurchasebutton)

//     resultElement.appendChild(resultdiv);

//  }

import algoliasearch from 'algoliasearch'; 
const client = algoliasearch('889P33SWIA', 'a4057f50694f963b92d7695df51ac273');
const index = client.initIndex('find');
index.search("Fjallraven")
.then(({ hits }) => {
console.log(hits);
})
.catch(err=>{
  console.log(err)
})
let data = [];
let resultElement = document.querySelector('.results');
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(json => {
data = json;
console.log('Data is', data);
});
document.querySelector('#searchinput').addEventListener('keyup', () => {
let serchElement = document.querySelector('#searchinput').value;
let requiredArray = data.filter(product =>
String(product.title).toLowerCase().includes(serchElement.toLowerCase())
);
renderingProducts(requiredArray);
});

function renderingProducts(products) {
document.querySelectorAll('.result').forEach(prod => {
prod.remove();
});
products.forEach(product => {
renderingsingleProducts(product);
});
}
function renderingsingleProducts(product) {
let resultdiv = document.createElement('div');
resultdiv.classList.add('result');
let resultImage = document.createElement('img');
let resultTitle = document.createElement('h4');
let resultPrice = document.createElement('p');
let resultPurchasebutton = document.createElement('button');
resultImage.src = product.image;
resultTitle.innerText = product.title;
resultPrice.innerText = `$${product.price}`;
resultPurchasebutton.innerText = 'Purchase';
resultdiv.appendChild(resultImage);
resultdiv.appendChild(resultTitle);
resultdiv.appendChild(resultPrice);
resultdiv.appendChild(resultPurchasebutton);
resultElement.appendChild(resultdiv);
 }