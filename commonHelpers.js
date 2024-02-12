import{S as E,i as $}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".search-form"),o=document.querySelector(".gallery-o"),l=document.querySelector(".loader");m();const d=new E(".gallery a",{captionDelay:250});c.addEventListener("submit",e);function e(r){r.preventDefault(),y();const a=c.querySelector(".input-search").value;t(a).then(n=>{i(n.hits)}).catch(n=>{h(n)}).finally(()=>{m()}),c.reset()}function t(r){const a="https://pixabay.com/api/",f=`?key=42296578-21d0e9ca438ad812aa67579cd&q=${r}`,u="&image_type=photo&orientation=horizontal&safesearch=true&per_page=20",p=a+f+u;return fetch(p).then(s=>s.json()).then(s=>{if(s.total===0)throw new Error("No images found");return s})}function i(r){const a=r.map(({largeImageURL:n,webformatURL:f,tags:u,likes:p,views:s,comments:g,downloads:L})=>`
        <div class="gallery">
            <a href="${n}">
            <img src="${f}" alt="${u}" title="${u}" width="360" height="300" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${p}</span></li>
                <li class="info-cards-elements">views<span>${s}</span></li>
                <li class="info-cards-elements">comments<span>${g}</span></li>
                <li class="info-cards-elements">downloads<span>${L}</span></li>
            </ul>
            </a>
        </div>
        `).join("");o.innerHTML=a,d.refresh()}function h(r){o.innerHTML="",$.show({message:`❌ "${r.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function y(){l.style.display="block"}function m(){l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
