const projects=[
{title:"George — Marketing Campaign",cat:"FREELANCE • MARKETING VIDEO",desc:"A short-form marketing edit built to communicate a message quickly, with social-first pacing and clear visual storytelling.",file:"assets/videos-web/george-marketing.mp4"},
{title:"Marketing SinoGNSS T20",cat:"PRODUCT MARKETING • VIDEO EDITING",desc:"A product marketing video showcasing the SinoGNSS T20 GNSS Rover, designed to communicate its value and capabilities clearly to surveying professionals.",file:"assets/videos-web/george-extended-edit.mp4"}
{title:"OTIC Geosystems — One Stop Store",cat:"PRODUCT MARKETING • SOCIAL MEDIA",desc:"A promotional social video communicating the convenience of getting surveying equipment and solutions from one place.",file:"assets/videos-web/otic-one-stop-store.mp4"},
{title:"OTIC Geosystems — Website Ordering",cat:"COMMERCIAL • SOCIAL MEDIA",desc:"A concise promotional edit showing customers how to order surveying equipment online.",file:"assets/videos-web/otic-website-promo.mp4"},
{title:"Refyul — Flow State",cat:"PRODUCT • SOCIAL MEDIA",desc:"A social-first product edit built around the frustration of running out of fuel and the convenience of Refyul.",file:"assets/videos-web/refyul-flow-state.mp4"},
{title:"Refyul — Gas Delivery",cat:"PRODUCT • SOCIAL MEDIA",desc:"A relatable product video showing how Refyul removes the hassle of getting cooking gas when you need it.",file:"assets/videos-web/refyul-gas-delivery.mp4"},
{title:"Drone Mapping Training",cat:"TRAINING • MARKETING CONTENT",desc:"A promotional training video designed to position drone mapping as a professional skill and drive interest in training.",file:"assets/videos-web/drone-mapping-training.mp4"},
{title:"Commercial Project — Additional Work",cat:"COMMERCIAL • VIDEO EDITING",desc:"An additional commercial-style edit demonstrating versatility across client-focused visual content.",file:"assets/videos-web/additional-commercial-project.mp4"}
];
const grid=document.querySelector("#grid"),modal=document.querySelector("#modal"),player=document.querySelector("#player");
projects.forEach((p,i)=>{let c=document.createElement("article");c.className="card";c.innerHTML=`<div class="thumb"><video class="preview" src="${p.file}" muted playsinline preload="metadata"></video><span class="play"></span></div><div class="info"><h3>${p.title}</h3><p>${p.cat}</p></div>`;c.onclick=()=>open(p);grid.appendChild(c)});
function open(p){document.querySelector("#mtitle").textContent=p.title;document.querySelector("#mcat").textContent=p.cat;document.querySelector("#mdesc").textContent=p.desc;player.src=p.file;modal.classList.add("open");document.body.style.overflow="hidden"}
function close(){player.pause();player.removeAttribute("src");player.load();modal.classList.remove("open");document.body.style.overflow=""}
document.querySelector("#close").onclick=close;modal.onclick=e=>{if(e.target===modal)close()};document.onkeydown=e=>{if(e.key==="Escape")close()};
