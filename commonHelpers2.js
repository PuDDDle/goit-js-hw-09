import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form");e.addEventListener("input",function(){const a={email:e.email.value.trim(),message:e.message.value.trim()};window.localStorage.setItem("feedback-form-state",JSON.stringify(a))});document.addEventListener("DOMContentLoaded",function(){const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.email.value=a.email,e.message.value=a.message)});function m(){localStorage.removeItem("feedback-form-state"),e.email.value="",e.message.value=""}e.addEventListener("submit",t=>{if(t.preventDefault(),e.email.value.trim()===""||e.message.value.trim()===""){alert("Please fill in all fields of the form before submitting");return}const a={email:e.email.value.trim(),message:e.message.value.trim()};m(),console.log(a)});
//# sourceMappingURL=commonHelpers2.js.map
