import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form"),s="feedback-form-state";e.addEventListener("input",function(a){if(a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA"){const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(s,JSON.stringify(t))}});const m=localStorage.getItem(s);if(m){const a=JSON.parse(m);e.elements.email.value=a.email,e.elements.message.value=a.message}else e.elements.email.value="",e.elements.message.value="";e.addEventListener("submit",function(a){a.preventDefault();const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};t.email&&t.message?(console.log(t),localStorage.removeItem(s),e.reset()):console.log("Please fill in both email and message fields.")});
//# sourceMappingURL=commonHelpers2.js.map