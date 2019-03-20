

window.addEventListener("load", function(){
	
	let arr_img = ['img/2.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/2.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
	let arr_price = ['$900', '$100','$200','$300','$400','$500','$600','$100','$200','$300','$400','$500','$600','$900', '$100','$200','$300','$400','$500','$600','$100','$200','$300','$400','$500','$600'];
	let arr_namePhone = [
	'Смартфон HUAWEI P Smart 3/32 Gb Dual Sim',
	'Смартфон HUAWEI Y5 2018 2/16Gb Dual Sim',
	'Смартфон HUAWEI P smart 2019 3/64GB ',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон HUAWEI P Smart 3/32 Gb Dual Sim',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон SAMSUNG Galaxy J6 Plus 3/32Gb Duos ',
	'Смартфон HUAWEI Y5 2018 2/16Gb Dual Sim',
	'Смартфон HUAWEI P smart 2019 3/64GB ',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон HUAWEI P Smart 3/32 Gb Dual Sim',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон SAMSUNG Galaxy J6 Plus 3/32Gb Duos ',
	'Смартфон HUAWEI P Smart 3/32 Gb Dual Sim',
	'Смартфон HUAWEI Y5 2018 2/16Gb Dual Sim',
	'Смартфон HUAWEI P smart 2019 3/64GB ',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон HUAWEI P Smart 3/32 Gb Dual Sim',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон SAMSUNG Galaxy J6 Plus 3/32Gb Duos ',
	'Смартфон HUAWEI Y5 2018 2/16Gb Dual Sim',
	'Смартфон HUAWEI P smart 2019 3/64GB ',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон HUAWEI P Smart 3/32 Gb Dual Sim',
	'Смартфон SAMSUNG Galaxy A7 2018 4/64Gb Duos ',
	'Смартфон SAMSUNG Galaxy J6 Plus 3/32Gb Duos '];
	
	
	let count_number = 0;
	let count =0;

	arr_img.forEach(function(elem,index,arr){
		
		let buy =document.createElement("div");
		buy.classList.add("buy");

		let buy_img =document.createElement("div");
		buy_img.classList.add("buy__img");
		let img = document.createElement("img");
	  	img.src = arr_img[count];
	  	buy_img.appendChild(img);


	 //  	let buy_namePhone =document.createElement("div");
		// buy_price.classList.add("buy__price");		
		let buy_price =document.createElement("div");
		buy_price.classList.add("buy__price");
		buy_price.innerHTML =`${arr_namePhone[count]} \n </br> <b>${arr_price[count]}</b>`;

		let buy_add_btn =document.createElement("button");
		buy_add_btn.classList.add("buy__add-btn");
		buy_add_btn.innerHTML = "Добавить в корзину";

		buy.appendChild(buy_img);
		buy.appendChild(buy_price);
		buy.appendChild(buy_add_btn);
		document.body.appendChild(buy);

		count++;

		buy_add_btn.addEventListener("click",function(){
			let num = document.querySelector(".num");
			count_number++;
			num.innerHTML = count_number;
		})


	})	

		
		// let count_number = 0;
		// let buy_num = document.querySelectorAll(".buy");
		// let numerous = document.querySelectorAll(".buy__add-btn");
		// if(buy_num & numerous){
		// 	// buy_num.forEach(function(){
		// 		numerous.forEach(function(elem1,index1,arr1){
		// 			let targEl = elem1.target;
		// 			targEl.addEventListener("click",function(){
		// 				let tag_p = document.createElement("p");
		// 				tag_p.classList.add("numberInBasket");
		// 				let header = document.querySelector(".header");
		// 				let numberInBasket = document.querySelector(".numberInBasket");
		// 				numberInBasket.innerHTML = `Товаров в корзине - ${count_number} шт.`;
		// 				count_number++;
		// 				header.appendChild(tag_p);
		// 			})
		// 		})
		// 	// })

		// }
		
		
		
		
		
})
