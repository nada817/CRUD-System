var ProductName =document.getElementById("ProductName");
var ProductPrice =document.getElementById("ProductPrice");
var ProductCategory =document.getElementById("ProductCategory");
var ProductDescription =document.getElementById("ProductDescription");
var SearchInput=document.getElementById("SearchInput");
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");
var nameMessage =document.getElementById("nameMessage");
var priceMessage =document.getElementById("priceMessage");
var catmessage= document.getElementById("catmessage");
var descmessage =document.getElementById("descmessage");


var productList=[]; 
var updateIndex=0;


if(localStorage.getItem("products") !=null){
  productList=JSON.parse(localStorage.getItem("products"));
displayData();
}

function addProduct(){
  if (nameValidation()==true && priceValidation()==true &&categoryValidation()==true &&descvalidation()==true)
  {
    var product={
      name:ProductName.value,
      price:ProductPrice.value,
      Category:ProductCategory.value,
      desc:ProductDescription.value
  }
  productList.push(product);
  localStorage.setItem("products",JSON.stringify(productList));
  console.log(productList);
  clearForm();
  displayData();
  ProductName.classList.remove("is-valid");
  ProductPrice.classList.remove("is-valid");
  ProductCategory.classList.remove("is-valid");
  ProductDescription.classList.remove("is-valid");
    }
 }

 function clearForm(){
    ProductName.value='';
    ProductPrice.value='';
    ProductCategory.value='';
    ProductDescription.value='';

 }

 function displayData(){
    var catrona='';
    for(var i=0 ;i<productList.length ;i++){
        catrona+=`
          <tr>
            <td>
                  ${i+1}
                </td>
                <td>
                  ${productList[i].name}
                </td>
                 <td>
                  ${productList[i].price}
                </td>
             <td>
                  ${productList[i].Category}
                </td>
                 <td>
                  ${productList[i].desc}
                </td>
                <td>
                    <button  onclick="deleteItem(${i})" class=" btn btnn-del ">
                    delete
                    </button>
                    <button onclick="setData(${i})" class=" btn btnn-up ">
                    update
                    </button>
                </td>
            </tr>`
    }
document.getElementById("DiaplayData").innerHTML=catrona;
 }

"".toLowerCase()

 function deleteItem(index){
productList.splice(index,1);
localStorage.setItem("products",JSON.stringify(productList));
displayData();
 }

function search(){
var txt=SearchInput.value;
console.log (SearchInput);
var catrona='';
    for(var i=0 ;i<productList.length ;i++){
        if(productList[i].name.toLowerCase().includes(txt.toLowerCase())){
            catrona+=`
            <tr>
              <td>
                    ${i+1}
                  </td>
                  <td>
                    ${productList[i].name}
                  </td>
                   <td>
                    ${productList[i].price}
                  </td>
               <td>
                    ${productList[i].Category}
                  </td>
                   <td>
                    ${productList[i].desc}
                  </td>
                  <td>
                      <button onclick="deleteItem(${i})" class=" btn btnn-del ">
                      delete
                      </button>
                      <button onclick="setData(${i})" class=" btn btnn-up">
                      update
                      </button>
                  </td>
              </tr>`
      }
        }
        
document.getElementById("DiaplayData").innerHTML=catrona;
}


function setData(index){

  var currentProduct = productList[index];
  ProductName.value=currentProduct.name;
  ProductPrice.value=currentProduct.price;
  ProductCategory.value=currentProduct.Category;
  ProductDescription.value=currentProduct.desc;
  updateIndex=index;
  console.log(ProductName.value);
updateBtn.classList.remove("d-none");
addBtn.classList.add("d-none");

}

function updateData(){
  if (nameValidation()==true && priceValidation()==true &&categoryValidation()==true &&descvalidation()==true)
    {


  var product={
    name:ProductName.value,
    price:ProductPrice.value,
    Category:ProductCategory.value,
    desc:ProductDescription.value
};
productList.splice(updateIndex,1,product);
localStorage.setItem("products",JSON.stringify(productList));
displayData();
clearForm();
addBtn.classList.remove("d-none");
updateBtn.classList.add("d-none");
ProductName.classList.remove("is-valid");
ProductPrice.classList.remove("is-valid");
ProductCategory.classList.remove("is-valid");
ProductDescription.classList.remove("is-valid");

}

}
// localStorage.clear("products")



// =================validation ===============

// ================== name validation ===================
function nameValidation(){
var nameRegex=/^[A-Z][a-z]{3,8}$/;
  var text=ProductName.value;
  if (nameRegex.test(text)==true){
    ProductName.classList.add("is-valid");
    ProductName.classList.remove("is-invalid");
    nameMessage.classList.add("d-none");
    return true;
  }
  else{
    ProductName.classList.add("is-invalid");
    ProductName.classList.remove("is-valid");
    nameMessage.classList.remove("d-none");
    return false;
  }
}
// ====================price validation ====================
function priceValidation(){
  var priceRegex=/^([1-9]\d\d\d|[1-9]\d\d\d\d)$/;
  var price=ProductPrice.value;
  if(priceRegex.test(price)==true){
    ProductPrice.classList.add("is-valid");
    ProductPrice.classList.remove("is-invalid");
    priceMessage.classList.add("d-none");
    return true;

  }
  else{
    ProductPrice.classList.add("is-invalid");
    ProductPrice.classList.remove("is-valid");
    priceMessage.classList.remove("d-none");
    return false;
  }
}
// ====================Catrgory validation ====================
function categoryValidation(){
  var categoryRegex=/^[A-Z][a-z]{3,9}$/
  var category=ProductCategory.value;
  if(categoryRegex.test(category)==true){
    ProductCategory.classList.add("is-valid");
    ProductCategory.classList.remove("is-invalid");
    catmessage.classList.add("d-none");
    return true;

  }
  else{
    ProductCategory.classList.add("is-invalid");
    ProductCategory.classList.remove("is-valid");
    catmessage.classList.remove("d-none");
    return false;
  }
}
// ====================decscription validation ====================
function descvalidation(){
  var descRegex=/^([a-z ]{4,40})$/
  var desc=ProductDescription.value;
  if(descRegex.test(desc)==true){
    ProductDescription.classList.add("is-valid");
    ProductDescription.classList.remove("is-invalid");
    descmessage.classList.add("d-none");
    return true;

  }
  else{
    ProductDescription.classList.add("is-invalid");
    ProductDescription.classList.remove("is-valid");
    descmessage.classList.remove("d-none");
    return false;
  }}


