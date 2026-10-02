const vehicleViews=[
  {src:"assets/audi-s5/front-view.webp",name:"Front",alt:"Audi S5 Avant front view"},
  {src:"assets/audi-s5/front-three-quarter.webp",name:"Front 3/4",alt:"Audi S5 Avant front three-quarter view"},
  {src:"assets/audi-s5/rear-three-quarter.webp",name:"Rear 3/4",alt:"Audi S5 Avant rear three-quarter view"},
  {src:"assets/audi-s5/rear-view.webp",name:"Rear",alt:"Audi S5 Avant rear view"}
];

const detailViews={
  engine:{src:"assets/audi-s5/engine.webp",alt:"Audi S5 Avant engine bay"},
  wheel:{src:"assets/audi-s5/wheel-brake.webp",alt:"Audi S5 Avant wheel and red S brake caliper"},
  cockpit:{src:"assets/audi-s5/cockpit.webp",alt:"Audi S5 Avant right-hand-drive cockpit"},
  audio:{src:"assets/audi-s5/bang-olufsen.webp",alt:"Audi S5 Avant Bang and Olufsen speaker"},
  cargo:{src:"assets/audi-s5/cargo.webp",alt:"Audi S5 Avant cargo area"}
};

const viewerCanvas=document.getElementById("viewerCanvas");
const viewerImage=document.getElementById("viewerImage");
const viewerAngleName=document.getElementById("viewerAngleName");
const viewerCount=document.getElementById("viewerCount");
const angleButtons=[...document.querySelectorAll("[data-angle]")];
let currentAngle=1;
let viewerZoom=1;
let pointerStartX=null;
let pointerStartY=null;

function renderVehicleView(index){
  currentAngle=(index+vehicleViews.length)%vehicleViews.length;
  const view=vehicleViews[currentAngle];
  viewerCanvas.classList.add("changing");
  viewerZoom=1;
  viewerCanvas.style.setProperty("--viewer-zoom","1");
  const preloader=new Image();
  preloader.onload=()=>{
    viewerImage.src=view.src;
    viewerImage.alt=view.alt;
    viewerAngleName.textContent=view.name;
    viewerCount.textContent=(currentAngle+1)+" / "+vehicleViews.length;
    angleButtons.forEach((button,i)=>button.classList.toggle("active",i===currentAngle));
    requestAnimationFrame(()=>viewerCanvas.classList.remove("changing"));
  };
  preloader.onerror=()=>viewerCanvas.classList.remove("changing");
  preloader.src=view.src;
}

document.getElementById("viewerPrev").addEventListener("click",e=>{
  e.stopPropagation();
  renderVehicleView(currentAngle-1);
});
document.getElementById("viewerNext").addEventListener("click",e=>{
  e.stopPropagation();
  renderVehicleView(currentAngle+1);
});
angleButtons.forEach(button=>{
  button.addEventListener("click",()=>renderVehicleView(Number(button.dataset.angle)));
});

viewerCanvas.addEventListener("pointerdown",e=>{
  if(e.target.closest(".viewer-arrow")) return;
  pointerStartX=e.clientX;
  pointerStartY=e.clientY;
  viewerCanvas.classList.add("dragging");
  viewerCanvas.setPointerCapture?.(e.pointerId);
});
viewerCanvas.addEventListener("pointerup",e=>{
  if(pointerStartX===null) return;
  const dx=e.clientX-pointerStartX;
  const dy=e.clientY-pointerStartY;
  viewerCanvas.classList.remove("dragging");
  pointerStartX=null;
  pointerStartY=null;
  if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy)){
    renderVehicleView(dx<0?currentAngle+1:currentAngle-1);
  }
});
viewerCanvas.addEventListener("pointercancel",()=>{
  pointerStartX=null;pointerStartY=null;viewerCanvas.classList.remove("dragging");
});
viewerCanvas.addEventListener("wheel",e=>{
  e.preventDefault();
  viewerZoom=Math.min(1.65,Math.max(1,viewerZoom+(e.deltaY<0?.08:-.08)));
  viewerCanvas.style.setProperty("--viewer-zoom",viewerZoom.toFixed(2));
},{passive:false});

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
function openLightbox(src,alt){
  lightboxImg.src=src;
  lightboxImg.alt=alt||"Audi S5 Avant detail";
  lightbox.showModal();
}

document.querySelectorAll(".detail-hotspot").forEach(button=>{
  button.addEventListener("click",()=>{
    const detail=detailViews[button.dataset.detail];
    if(detail) openLightbox(detail.src,detail.alt);
  });
});

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
    if(tile.classList.contains("missing")) return;
    const image=tile.querySelector("img");
    if(image) openLightbox(image.src,image.alt);
  });
});

document.getElementById("closeLightbox").addEventListener("click",()=>lightbox.close());
lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.close()});

const enquiry=document.getElementById("enquiry");
document.getElementById("demoEnquiry").addEventListener("click",()=>enquiry.showModal());
document.getElementById("closeEnquiry").addEventListener("click",()=>enquiry.close());
enquiry.addEventListener("click",e=>{if(e.target===enquiry)enquiry.close()});

renderVehicleView(1);
