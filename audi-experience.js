const ROOT="assets/audi-s5/";

const tour={
  engine:{
    label:"ENGINE",
    title:"Engine bay",
    description:"Move toward the bonnet and reveal the actual engine compartment. Exact engine output, torque and drivetrain remain unverified until the stock documents are supplied.",
    src:ROOT+"engine.webp",
    alt:"Audi S5 Avant engine bay",
    x:"73%",y:"34%",
    specs:[
      ["Engine type","To verify"],
      ["Power","To verify"],
      ["Torque","To verify"],
      ["Transmission","To verify"]
    ]
  },
  interior:{
    label:"INTERIOR",
    title:"Inside the S5 Avant",
    description:"Push into the cabin, then choose a specific interior area to inspect.",
    src:ROOT+"cockpit.webp",
    alt:"Audi S5 Avant right-hand-drive cockpit",
    x:"58%",y:"23%",
    children:{
      cockpit:{
        label:"COCKPIT",
        title:"Driver-focused cockpit",
        description:"Actual right-hand-drive cockpit with steering controls, digital instrument cluster and centre display visible.",
        src:ROOT+"cockpit.webp",
        alt:"Audi S5 Avant right-hand-drive cockpit",
        specs:[["Steering","Right-hand drive"],["Driver display","Digital instrument cluster"],["Centre display","Visible in photo"],["Other equipment","To verify"]]
      },
      climate:{
        label:"REAR CLIMATE",
        title:"Rear climate controls",
        description:"Move deeper into the cabin to inspect the rear climate-control area photographed in this vehicle.",
        src:ROOT+"rear-climate.webp",
        alt:"Audi S5 Avant rear climate controls",
        specs:[["Rear climate","Controls visible"],["Zones","To verify"],["Seat functions","To verify"],["Rear comfort spec","To verify"]]
      },
      audio:{
        label:"BANG & OLUFSEN",
        title:"Premium cabin audio detail",
        description:"Inspect the Bang & Olufsen branded speaker treatment visible on the photographed vehicle.",
        src:ROOT+"bang-olufsen.webp",
        alt:"Audi S5 Avant Bang and Olufsen speaker",
        specs:[["Brand","Bang & Olufsen"],["Speaker count","To verify"],["Output","To verify"],["Package level","To verify"]]
      }
    }
  },
  wheel:{
    label:"WHEEL & BRAKES",
    title:"Wheel, brake and tyre",
    description:"Zoom into the front wheel area, then inspect the rim, brake caliper or tyre detail.",
    src:ROOT+"wheel-brake.webp",
    alt:"Audi S5 Avant wheel and red S brake caliper",
    x:"77%",y:"67%",
    children:{
      rim:{
        label:"RIM",
        title:"Wheel design",
        description:"Focus on the alloy-wheel design and centre-cap area. Exact wheel dimensions remain to verify.",
        src:ROOT+"wheel-brake.webp",
        alt:"Audi S5 Avant alloy wheel",
        focus:"rim",
        specs:[["Rim design","Multi-spoke alloy"],["Wheel size","To verify"],["Finish","Visible in photo"],["Centre cap","Audi"]]
      },
      brake:{
        label:"BRAKE",
        title:"S-branded brake caliper",
        description:"Zoom closer to the visible red S-branded front brake caliper and brake hardware.",
        src:ROOT+"wheel-brake.webp",
        alt:"Audi S5 Avant red S brake caliper",
        focus:"brake",
        specs:[["Caliper","Red S-branded front caliper"],["Brake disc","Visible in photo"],["Caliper piston count","To verify"],["Brake package","To verify"]]
      },
      tyre:{
        label:"TYRE",
        title:"Tyre detail",
        description:"Inspect the tyre sidewall area. Brand, size and specification should only be filled when they can be read or confirmed from stock information.",
        src:ROOT+"wheel-brake.webp",
        alt:"Audi S5 Avant tyre and wheel",
        focus:"tyre",
        specs:[["Tyre brand","To verify"],["Tyre size","To verify"],["Profile","To verify"],["Condition","Inspect photo / verify"]]
      }
    }
  },
  audio:{
    label:"AUDIO",
    title:"Bang & Olufsen",
    description:"Move into the cabin audio detail and inspect the Bang & Olufsen branded speaker treatment.",
    src:ROOT+"bang-olufsen.webp",
    alt:"Audi S5 Avant Bang and Olufsen speaker",
    x:"51%",y:"47%",
    specs:[["Brand","Bang & Olufsen"],["Speaker count","To verify"],["System output","To verify"],["Package","To verify"]]
  },
  cargo:{
    label:"CARGO",
    title:"Cargo and powered tailgate",
    description:"Push toward the rear of the car and reveal the photographed cargo compartment. The vehicle also shows powered tailgate controls.",
    src:ROOT+"cargo.webp",
    alt:"Audi S5 Avant cargo area with tailgate open",
    x:"24%",y:"38%",
    specs:[["Body style","Avant / wagon"],["Tailgate","Powered controls visible"],["Cargo capacity","To verify"],["Rear seat split","To verify"]]
  }
};

const state={
  scene:"overview",
  category:null,
  child:null,
  transitioning:false,
  lastTrigger:null
};

const shell=document.getElementById("experienceShell");
const mediaPlane=document.getElementById("mediaPlane");
const overviewImage=document.getElementById("overviewImage");
const detailImage=document.getElementById("detailImage");
const sceneLabel=document.getElementById("sceneLabel");
const detailEyebrow=document.getElementById("detailEyebrow");
const detailTitle=document.getElementById("detailTitle");
const detailDescription=document.getElementById("detailDescription");
const tourSubnav=document.getElementById("tourSubnav");
const tourSpecs=document.getElementById("tourSpecs");
const detailBack=document.getElementById("detailBack");
const hotspotButtons=[...document.querySelectorAll("[data-tour]")];
const prefersReduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const transitionMs=prefersReduced?120:560;

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}

function preload(src){
  if(!src)return;
  const img=new Image();
  img.src=src;
}

function renderSpecs(rows=[]){
  tourSpecs.innerHTML=rows.map(([key,value])=>`
    <div class="tour-spec-row"><span>${key}</span><strong>${value}</strong></div>
  `).join("");
}

function renderChildren(category){
  const children=tour[category]?.children;
  if(!children){
    tourSubnav.innerHTML="";
    return;
  }
  tourSubnav.innerHTML=Object.entries(children).map(([key,item])=>`
    <button type="button" data-child="${key}" class="${state.child===key?"active":""}">${item.label}</button>
  `).join("");
  tourSubnav.querySelectorAll("[data-child]").forEach(button=>{
    button.addEventListener("click",()=>selectChild(category,button.dataset.child));
  });
}

function applyCopy(item){
  detailEyebrow.textContent=item.label;
  detailTitle.textContent=item.title;
  detailDescription.textContent=item.description;
  renderSpecs(item.specs||[]);
  sceneLabel.textContent=item.label;
}

async function setDetailImage(item,category){
  const src=item.src;
  if(!src)return;
  preload(src);
  detailImage.className="experience-detail-image";
  if(item.focus) detailImage.classList.add("focus-"+item.focus);
  detailImage.alt=item.alt||"Audi S5 Avant detail";
  detailImage.src=src;
  detailImage.removeAttribute("aria-hidden");
  shell.dataset.category=category;
}

async function enterCategory(category,trigger){
  if(state.transitioning||state.scene!=="overview"||!tour[category])return;
  const item=tour[category];
  state.transitioning=true;
  state.scene="entering";
  state.category=category;
  state.child=null;
  state.lastTrigger=trigger;

  shell.dataset.scene="entering";
  shell.dataset.category=category;
  mediaPlane.style.setProperty("--focus-x",item.x||"50%");
  mediaPlane.style.setProperty("--focus-y",item.y||"50%");
  sceneLabel.textContent="MOVING IN";

  await setDetailImage(item,category);
  applyCopy(item);

  if(item.children){
    state.child=Object.keys(item.children)[0];
    const first=item.children[state.child];
    await setDetailImage(first,category);
    applyCopy(first);
  }
  renderChildren(category);

  await delay(prefersReduced?20:120);
  shell.dataset.scene="detail";
  state.scene="detail";
  await delay(transitionMs);
  state.transitioning=false;
  detailBack.focus({preventScroll:true});
}

async function selectChild(category,key){
  if(state.transitioning||state.scene!=="detail")return;
  const item=tour[category]?.children?.[key];
  if(!item)return;
  state.transitioning=true;
  state.child=key;
  shell.classList.add("child-switching");
  renderChildren(category);
  await delay(prefersReduced?30:170);
  await setDetailImage(item,category);
  applyCopy(item);
  shell.classList.remove("child-switching");
  renderChildren(category);
  await delay(prefersReduced?20:180);
  state.transitioning=false;
}

async function returnOverview(){
  if(state.transitioning||state.scene!=="detail")return;
  state.transitioning=true;
  state.scene="returning";
  shell.dataset.scene="returning";
  sceneLabel.textContent="PUSHING BACK";
  await delay(transitionMs);

  detailImage.src="";
  detailImage.alt="";
  detailImage.setAttribute("aria-hidden","true");
  detailImage.className="experience-detail-image";

  detailEyebrow.textContent="VEHICLE OVERVIEW";
  detailTitle.textContent="Choose what you want to inspect.";
  detailDescription.textContent="Open the engine bay, move into the cabin, inspect the wheel and brake hardware, view the audio detail or check the cargo area.";
  tourSubnav.innerHTML="";
  tourSpecs.innerHTML="";
  shell.dataset.category="overview";
  shell.dataset.scene="overview";
  sceneLabel.textContent="OVERVIEW";

  state.scene="overview";
  state.category=null;
  state.child=null;
  state.transitioning=false;

  if(state.lastTrigger)state.lastTrigger.focus({preventScroll:true});
}

hotspotButtons.forEach(button=>{
  const category=button.dataset.tour;
  const item=tour[category];
  button.addEventListener("mouseenter",()=>preload(item?.src));
  button.addEventListener("focus",()=>preload(item?.src));
  button.addEventListener("click",()=>enterCategory(category,button));
});

detailBack.addEventListener("click",returnOverview);
document.addEventListener("keydown",event=>{
  if(event.key==="Escape"&&state.scene==="detail"){
    event.preventDefault();
    returnOverview();
  }
});

// Gallery + lightbox
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
function openLightbox(src,alt){
  lightboxImg.src=src;
  lightboxImg.alt=alt||"Audi S5 Avant detail";
  lightbox.showModal();
}

document.querySelectorAll("[data-filter]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===btn));
    document.querySelectorAll(".tile").forEach(tile=>{
      tile.style.display=(btn.dataset.filter==="all"||tile.dataset.kind===btn.dataset.filter)?"block":"none";
    });
  });
});

document.querySelectorAll(".tile").forEach(tile=>{
  tile.addEventListener("click",()=>{
    if(tile.classList.contains("missing"))return;
    const image=tile.querySelector("img");
    if(image)openLightbox(image.src,image.alt);
  });
});

document.getElementById("closeLightbox").addEventListener("click",()=>lightbox.close());
lightbox.addEventListener("click",event=>{if(event.target===lightbox)lightbox.close()});

const enquiry=document.getElementById("enquiry");
document.getElementById("demoEnquiry").addEventListener("click",()=>enquiry.showModal());
document.getElementById("closeEnquiry").addEventListener("click",()=>enquiry.close());
enquiry.addEventListener("click",event=>{if(event.target===enquiry)enquiry.close()});
