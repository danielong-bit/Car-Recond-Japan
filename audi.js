const featureInfo={
  engine:["ENGINE BAY","Tap through to the mechanical detail photo. Exact engine output is intentionally left unverified until the stock sheet is supplied."],
  wheel:["WHEEL + BRAKE","Your supplied photo clearly shows the alloy wheel and a red S-branded front brake caliper."],
  cabin:["S SPORT CABIN","The supplied interior photos show a right-hand-drive cockpit, S sport seats, digital displays and Bang & Olufsen speaker branding."]
};

document.querySelectorAll(".hot").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const [title,text]=featureInfo[btn.dataset.info];
    document.getElementById("featurePop").innerHTML=
      '<small>PHOTO HOTSPOT</small><strong>'+title+'</strong><p>'+text+'</p>';
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

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".tile").forEach(tile=>{
  tile.addEventListener("click",()=>{
    if(tile.classList.contains("missing")) return;
    const image=tile.querySelector("img");
    lightboxImg.src=image.src;
    lightboxImg.alt=image.alt;
    lightbox.showModal();
  });
});
document.getElementById("closeLightbox").addEventListener("click",()=>lightbox.close());
lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.close()});

const enquiry=document.getElementById("enquiry");
document.getElementById("demoEnquiry").addEventListener("click",()=>enquiry.showModal());
document.getElementById("closeEnquiry").addEventListener("click",()=>enquiry.close());
enquiry.addEventListener("click",e=>{if(e.target===enquiry)enquiry.close()});