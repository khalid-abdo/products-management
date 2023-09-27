let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let category =document.getElementById('category');
let submint =document.getElementById('submint');
let search = document.getElementById('search');
//update 
let mood ='creat';
let tmp;

//game
let black =document.getElementById('black');
let wihte =document.getElementById('wihte');
wihte.style.background="#fff";
wihte.style.color="#000";
wihte.style.fontWeight="600";
black.style.fontWeight="600";
black.style.background="#000";
black.style.color="#fff";
let input = document.querySelectorAll('input');
let tables = document.getElementById('tables');
let head = document.getElementById('header');
let up =document.getElementById('up');
wihte.onclick=function(){
document.body.style.background='#fff';
title.style.background='#e3d6d6';
price.style.background='#e3d6d6';
taxes.style.background='#e3d6d6';
ads.style.background='#e3d6d6';
discount.style.background='#e3d6d6';
count.style.background='#e3d6d6';
category.style.background='#e3d6d6';
search.style.background='#e3d6d6';
title.style.color='#222';
price.style.color='#222';
taxes.style.color='#222';
ads.style.color='#222';
discount.style.color='#222';
count.style.color='#222';
category.style.color='#222';
search.style.color='#222';
black.style.display='block';
wihte.style.display='none';
tables.style.background='#fff';
tables.style.color='#111';
header.style.color='#222';
};

black.onclick=function(){
   wihte.style.display='block';
   black.style.display='none';
   document.body.style.background='#222';
title.style.background='#111';
price.style.background='#111';
taxes.style.background='#111';
ads.style.background='#111';
discount.style.background='#111';
count.style.background='#111';
category.style.background='#111';
search.style.background='#111';
title.style.color='#fff';
price.style.color='#fff';
taxes.style.color='#fff';
ads.style.color='#fff';
discount.style.color='#fff';
count.style.color='#fff';
category.style.color='#fff';
search.style.color='#fff';
tables.style.background='transparent';
tables.style.color='#fff';
header.style.color='#fff';


    };
   window.onscroll=function(){
    if(scrollY>0){
        up.style.display='block';
    }else{
        up.style.display='none';

    }
   }
   up.onclick=function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
   }
//get total

function gettotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML=result;
        total.style.background='#040';
    }else{
        total.innerHTML='';
        total.style.background='#a00d02';
    }

}

//creat product


let datapro ;

if(localStorage.proudct != null){
    datapro=JSON.parse(localStorage.proudct)
}else{
    datapro=[];
}



submint.onclick=function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    };
    if(mood==='creat'){
    if(newpro.count>1){
        for(let i =0; i<newpro.count;i++){
            datapro.push(newpro)

        }
    }else{
        datapro.push(newpro)

    }}else{
        datapro[tmp]=newpro;
        mood='creat';
        count.style.display='block';
        submint.innerHTML='creat';
    }

    //save lockalstorge
    
    localStorage.setItem('proudct', JSON.stringify(datapro) )
    cleardata()
    showdata()
}

//clear inputs

function cleardata(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';

}
//read 
function showdata(){
    let table ='';
    for (let i =0 ; i< datapro.length;i++ ){
        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].count}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick="updatedata(${i})" id="update">update</button></td>
        <td><button id="delete" onclick="deletedata(   ${i}   )">delete</button></td>

    </tr>

        `
        
    }
    document.getElementById('tbody').innerHTML=table;
    let btndelete =document.getElementById('deleteall')
    if(datapro.length > 0){
        btndelete.innerHTML=`<button onclick="alldelete()" >deleteALL(${datapro.length})</button>`;
    }
    else{
        btndelete.innerHTML='';
    };
    gettotal()

}showdata()

// delete
function deletedata(i){
    datapro.splice(i,1);
    localStorage.proudct=JSON.stringify(datapro)
    showdata()
}

function alldelete(){
    localStorage.clear()
    datapro.splice(0)
    showdata()
}
//count 
// update 
function updatedata(i){
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    ads.value=datapro[i].ads;
    discount.value=datapro[i].discount;
    gettotal()
    category.value=datapro[i].category;
    count.style.display='none';
    submint.innerHTML='update';
    tmp=i;
    mood='update'
    scroll({
        top:0,
        behavior:'smooth'
    })
    
}
//search 
// clean data
 