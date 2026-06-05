const API =
"https://www.themealdb.com/api/json/v1/1/search.php?s=";

let meals = [];

const container =
document.getElementById("meals-container");

const loading =
document.getElementById("loading");

const modal =
document.getElementById("modal");

async function getMeals(){

loading.classList.remove("hidden");

try{

const response =
await fetch(API);

const data =
await response.json();

meals = data.meals.slice(0,12);

renderMeals(meals);

}
catch(err){

console.log(err);

}
finally{

loading.classList.add("hidden");

}
}

function renderMeals(list){

container.innerHTML = "";

list.forEach(meal=>{

const card =
document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${meal.strMeal}</h3>

<p>
🌍 ${meal.strArea}
</p>

<p>
${meal.strCategory}
</p>

<div class="actions">

<button
class="edit"
onclick="editMeal('${meal.idMeal}')">
Düzenle
</button>

<button
class="delete"
onclick="deleteMeal('${meal.idMeal}')">
Sil
</button>

</div>
`;

container.appendChild(card);

});
}

function showToast(text){

const toast =
document.createElement("div");

toast.className = "toast";

toast.innerText = text;

document
.getElementById("toast-container")
.appendChild(toast);

setTimeout(()=>{
toast.remove();
},3000);
}

document
.getElementById("search")
.addEventListener("input",e=>{

const value =
e.target.value.toLowerCase();

const filtered =
meals.filter(meal=>
meal.strMeal
.toLowerCase()
.includes(value)
);

renderMeals(filtered);

});

document
.querySelectorAll(".filter")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".filter")
.forEach(x=>
x.classList.remove("active")
);

btn.classList.add("active");

const country =
btn.dataset.country;

if(country==="all"){
renderMeals(meals);
return;
}

const filtered =
meals.filter(meal=>
meal.strArea===country
);

renderMeals(filtered);

});

});

document
.getElementById("theme-toggle")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);

});

if(
localStorage.getItem("theme")
==="dark"
){
document.body.classList.add("dark");
}

document
.getElementById("addMealBtn")
.addEventListener("click",()=>{

modal.classList.remove("hidden");

});

document
.getElementById("mealForm")
.addEventListener("submit",e=>{

e.preventDefault();

const meal = {

idMeal: Date.now(),

strMeal:
document.getElementById("mealName").value,

strArea:
document.getElementById("mealCountry").value,

strCategory:
document.getElementById("mealDesc").value

};

meals.unshift(meal);

renderMeals(meals);

showToast("Tarif eklendi");

modal.classList.add("hidden");

e.target.reset();

});

function deleteMeal(id){

meals =
meals.filter(
meal=>meal.idMeal != id
);

renderMeals(meals);

showToast("Tarif silindi");

}

function editMeal(id){

const meal =
meals.find(
x=>x.idMeal == id
);

const newName =
prompt(
"Yeni tarif adı",
meal.strMeal
);

if(!newName) return;

meal.strMeal =
newName;

renderMeals(meals);

showToast("Tarif güncellendi");

}

getMeals();