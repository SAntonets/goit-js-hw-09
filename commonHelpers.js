import{S as c}from"./assets/vendor-c9def49e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function p(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=p(e);fetch(e.href,o)}})();const m=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];function g(i){return i.map(t=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${t.original}">
    <img class="gallery-image" src="${t.preview}" alt="${t.description}" />
  </a>
</li>
    `).join("")}const d=document.querySelector("ul.gallery");d.innerHTML=g(m);const h={captions:!0,captionType:"attr",captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8};new c(".gallery a",h);const a=document.querySelector(".feedback-form"),r="feedback-form-state";a.addEventListener("input",function(i){if(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA"){const t={email:a.elements.email.value.trim(),message:a.elements.message.value.trim()};localStorage.setItem(r,JSON.stringify(t))}});const l=localStorage.getItem(r);if(l){const i=JSON.parse(l);a.elements.email.value=i.email,a.elements.message.value=i.message}else a.elements.email.value="",a.elements.message.value="";a.addEventListener("submit",function(i){i.preventDefault();const t={email:a.elements.email.value.trim(),message:a.elements.message.value.trim()};t.email&&t.message?(console.log(t),localStorage.removeItem(r),a.reset()):console.log("Please fill in both email and message fields.")});
//# sourceMappingURL=commonHelpers.js.map
