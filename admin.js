// ==========================================================================
// Japan Recon Showroom — Admin Studio Controller
// ==========================================================================

const DEFAULT_CONFIG = {
  mainImage: "assets/audi-s5/main-car-16x9.jpg",
  vehicleName: "Audi S5 Avant",
  vehicleSub: "Actual photographed example · interactive detail page",
  price: "RM 438,000",
  hotspots: [
    {
      id: "engine",
      label: "Engine",
      type: "video",
      x: "72%",
      y: "46%",
      forwardVideo: "assets/videos/engine_forward.mp4",
      reverseVideo: "assets/videos/engine_reverse_web.mp4",
      title: "V6 TFSI Engine Bay",
      eyebrow: "POWERTRAIN",
      description: "Move beneath the bonnet to reveal the 3.0-litre turbocharged V6 powerplant, carbon-accented engine cover, and precision cooling architecture.",
      specs: [
        ["Engine", "3.0L TFSI V6 Turbo"],
        ["Power", "349 hp (demo)"],
        ["Torque", "500 Nm (demo)"],
        ["Transmission", "8-speed Tiptronic (demo)"]
      ],
      subHotspots: [
        {
          id: "engine_turbo",
          label: "Twin-Scroll Turbo",
          x: "52%",
          y: "52%",
          title: "Hot-V Twin-Scroll Turbocharger",
          eyebrow: "FORCED INDUCTION",
          description: "Mounted inside the 90-degree V of the engine banks for instant spool and immediate torque delivery.",
          specs: [["Boost", "1.4 bar"], ["Configuration", "Hot-V Twin-Scroll"]]
        },
        {
          id: "engine_cover",
          label: "Carbon Shroud",
          x: "50%",
          y: "36%",
          title: "Carbon Fibre Engine Cover",
          eyebrow: "ENGINE DRESSING",
          description: "Gloss carbon composite engine dress cover with thermal dampening and Audi V6 TFSI red emblems.",
          specs: [["Material", "Gloss Carbon Fibre"], ["Acoustics", "Thermal composite"]]
        }
      ]
    },
    {
      id: "interior",
      label: "Interior",
      type: "video",
      x: "54%",
      y: "38%",
      forwardVideo: "assets/videos/interior_forward.mp4",
      reverseVideo: "assets/videos/interior_reverse.mp4",
      title: "Inside the S5 Avant",
      eyebrow: "CABIN & COCKPIT",
      description: "Step into the driver-focused cabin featuring digital instrumentation, S sport steering wheel, ambient lighting, and refined tactile controls.",
      specs: [
        ["Steering layout", "Right-hand drive"],
        ["Driver display", "Audi Virtual Cockpit"],
        ["Trim", "Matte Brushed Aluminum"],
        ["Pedals", "Stainless steel S sport pedals"]
      ],
      subHotspots: [
        {
          id: "interior_wheel",
          label: "Sport Steering",
          x: "38%",
          y: "60%",
          title: "Flat-Bottom Sport Steering Wheel",
          eyebrow: "DRIVER INTERFACE",
          description: "Perforated sport leather wheel with aluminum shift paddles and multifunction drive mode selectors.",
          specs: [["Material", "Perforated Nappa Leather"], ["Paddles", "Die-cast Aluminum"]]
        },
        {
          id: "interior_cockpit",
          label: "Virtual Cockpit",
          x: "49%",
          y: "40%",
          title: "12.3-inch Virtual Cockpit HD",
          eyebrow: "DIGITAL INSTRUMENTATION",
          description: "Configurable instrument screen featuring 3D Google Earth maps and S-specific telemetry views.",
          specs: [["Resolution", "1920x720 HD"], ["Modes", "Classic / Sport / Dynamic"]]
        },
        {
          id: "interior_mmi",
          label: "MMI Display",
          x: "66%",
          y: "44%",
          title: "10.1-inch MMI Touch Display",
          eyebrow: "INFOTAINMENT & CONTROL",
          description: "Acoustic and haptic feedback screen running navigation, vehicle dynamics, and wireless Apple CarPlay.",
          specs: [["Display", "10.1-inch Glass"], ["Connectivity", "Wireless CarPlay & Android Auto"]]
        }
      ]
    },
    {
      id: "boot",
      label: "Boot / Trunk",
      type: "video",
      x: "24%",
      y: "44%",
      forwardVideo: "assets/videos/boot_forward.mp4",
      reverseVideo: "assets/videos/boot_reverse_web.mp4",
      title: "Cargo Area & Powered Tailgate",
      eyebrow: "STORAGE & UTILITY",
      description: "Open the powered rear tailgate revealing the estate cargo hold with illuminated side liners, luggage tie-downs, and 40:20:40 split-folding rear seats.",
      specs: [
        ["Tailgate", "Power opening / closing"],
        ["Cargo capacity", "465L - 1,495L"],
        ["Seat folding", "40:20:40 split"],
        ["Load threshold", "Stainless steel guard"]
      ],
      subHotspots: [
        {
          id: "boot_seats",
          label: "40:20:40 Seats",
          x: "48%",
          y: "48%",
          title: "40:20:40 Split-Folding Rear Seats",
          eyebrow: "CARGO CAPACITY",
          description: "Quick-release levers expand luggage space from 465 litres to 1,495 litres with a flat loading floor.",
          specs: [["Volume", "Up to 1,495L"], ["Mechanism", "Side-wall quick release"]]
        },
        {
          id: "boot_switch",
          label: "Tailgate Switch",
          x: "20%",
          y: "34%",
          title: "Electric Tailgate Close Switch",
          eyebrow: "POWER UTILITY",
          description: "Illuminated tailgate button with programmable opening height memory and lock function.",
          specs: [["Function", "One-touch close & lock"], ["Memory", "Height programmable"]]
        }
      ]
    },
    {
      id: "wheel",
      label: "Wheel",
      type: "image",
      x: "78%",
      y: "74%",
      imageSrc: "assets/audi-s5/wheel_16x9.jpg",
      title: "Wheel, Brake & Tyre Setup",
      eyebrow: "CHASSIS & BRAKES",
      description: "Multi-spoke S-design alloy wheels equipped with high-performance ventilated brake discs and red S-branded front multi-piston calipers.",
      specs: [
        ["Wheel size", "20-inch S-design"],
        ["Brake caliper", "Red S-branded caliper"],
        ["Brake disc", "Ventilated performance disc"],
        ["Tyre profile", "255/35 R20"]
      ]
    },
    {
      id: "dashboard",
      label: "Dashboard",
      type: "image",
      x: "62%",
      y: "36%",
      imageSrc: "assets/audi-s5/dashboard_16x9.jpg",
      title: "Driver Dashboard & Virtual Cockpit",
      eyebrow: "DIGITAL COCKPIT",
      description: "Driver-oriented curved MMI touch display paired with full digital instrument cluster and configurable navigation views.",
      specs: [
        ["Cluster", "12.3-inch Virtual Cockpit"],
        ["Central MMI", "10.1-inch High-res Touch"],
        ["Connectivity", "Apple CarPlay & Android Auto"],
        ["Interface", "Audi MMI Touch Response"]
      ]
    },
    {
      id: "seats",
      label: "Seats",
      type: "image",
      x: "48%",
      y: "42%",
      imageSrc: "assets/audi-s5/seats_16x9.jpg",
      title: "S Sport Contoured Seats",
      eyebrow: "INTERIOR SEATING",
      description: "Contoured sport seats upholstered in fine Nappa leather with diamond quilting, embossed S logos and integrated pneumatic side bolstering.",
      specs: [
        ["Upholstery", "Fine Nappa Leather"],
        ["Stitching", "Diamond pattern with S logo"],
        ["Adjustment", "14-way electric with memory"],
        ["Heating", "Multi-stage front seat heating"]
      ]
    },
    {
      id: "audio",
      label: "Bang & Olufsen",
      type: "image",
      x: "65%",
      y: "46%",
      imageSrc: "assets/audi-s5/audio_16x9.jpg",
      title: "Bang & Olufsen 3D Sound",
      eyebrow: "PREMIUM AUDIO",
      description: "Bang & Olufsen 3D Sound System with precision-etched acoustic grilles, 19 speakers, 16-channel amplifier and 755 watts output.",
      specs: [
        ["Brand", "Bang & Olufsen"],
        ["Speakers", "19 high-performance speakers"],
        ["Amplifier", "16-channel 755W DSP"],
        ["Sound dimension", "3D Sound spatial algorithm"]
      ]
    },
    {
      id: "climate",
      label: "Rear climate controls",
      type: "image",
      x: "38%",
      y: "46%",
      imageSrc: "assets/audi-s5/climate_16x9.jpg",
      title: "Rear Cabin Climate Controls",
      eyebrow: "COMFORT & CLIMATE",
      description: "Dedicated digital temperature panel for rear passengers, regulating dual-zone rear airflow and rear heated seat levels.",
      specs: [
        ["Zones", "Tri-zone automatic climate"],
        ["Display", "Dedicated rear digital readout"],
        ["Vents", "Centre console & B-pillar vents"],
        ["Controls", "Physical rocker switchgear"]
      ]
    }
  ]
};

// Studio State
let currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
let selectedHotspotId = "engine";
let currentMode = "edit"; // 'edit' or 'test'
let testState = {
  activeItem: null,
  isAnimating: false,
  mode: "normal" // 'normal', 'video', 'reverse', 'image'
};
let isUnsaved = false;

// DOM Elements
const adminStage = document.getElementById("adminStage");
const adminMainImage = document.getElementById("adminMainImage");
const adminHotspotsLayer = document.getElementById("adminHotspotsLayer");
const adminTestVideo = document.getElementById("adminTestVideo");
const adminTestDetailImage = document.getElementById("adminTestDetailImage");
const adminTestBackBtn = document.getElementById("adminTestBackBtn");
const canvasCrosshair = document.getElementById("canvasCrosshair");
const crosshairTip = document.getElementById("crosshairTip");
const canvasCoordsBadge = document.getElementById("canvasCoordsBadge");
const hotspotsStrip = document.getElementById("hotspotsStrip");
const hotspotCountBadge = document.getElementById("hotspotCountBadge");

// Sub-Hotspot Context Bar Elements
const stageContextBar = document.getElementById("stageContextBar");
const contextParentLabel = document.getElementById("contextParentLabel");
const exitSubHotspotViewBtn = document.getElementById("exitSubHotspotViewBtn");
const cleanTestHotspotsBtn = document.getElementById("cleanTestHotspotsBtn");

// Sub-Hotspots Inspector Elements
const subHotspotsManagerList = document.getElementById("subHotspotsManagerList");
const openSubHotspotModeBtn = document.getElementById("openSubHotspotModeBtn");
const addSubHotspotBtn = document.getElementById("addSubHotspotBtn");

// Sub-Hotspot State (null = viewing main car, string ID = editing child hotspots of this parent)
let currentSubHotspotParentId = null;
let selectedSubHotspotId = null;

// Modes
const modeEditBtn = document.getElementById("modeEditBtn");
const modeTestBtn = document.getElementById("modeTestBtn");

// Quick uploads
const quickMainImageUpload = document.getElementById("quickMainImageUpload");

// Inspector Tabs
const tabHotspotBtn = document.getElementById("tabHotspotBtn");
const tabVehicleBtn = document.getElementById("tabVehicleBtn");
const tabJsonBtn = document.getElementById("tabJsonBtn");
const panelHotspot = document.getElementById("panelHotspot");
const panelVehicle = document.getElementById("panelVehicle");
const panelJson = document.getElementById("panelJson");

// Hotspot Form Elements
const hotspotForm = document.getElementById("hotspotForm");
const inspectorHotspotTitle = document.getElementById("inspectorHotspotTitle");
const inspectorHotspotSubtitle = document.getElementById("inspectorHotspotSubtitle");
const hotspotLabelInput = document.getElementById("hotspotLabelInput");
const hotspotIdInput = document.getElementById("hotspotIdInput");
const typeVideoRadio = document.getElementById("typeVideoRadio");
const typeImageRadio = document.getElementById("typeImageRadio");
const coordXInput = document.getElementById("coordXInput");
const coordXRange = document.getElementById("coordXRange");
const coordYInput = document.getElementById("coordYInput");
const coordYRange = document.getElementById("coordYRange");
const videoFieldsGroup = document.getElementById("videoFieldsGroup");
const imageFieldsGroup = document.getElementById("imageFieldsGroup");
const forwardVideoInput = document.getElementById("forwardVideoInput");
const forwardVideoUpload = document.getElementById("forwardVideoUpload");
const forwardVideoPreview = document.getElementById("forwardVideoPreview");
const reverseVideoInput = document.getElementById("reverseVideoInput");
const reverseVideoUpload = document.getElementById("reverseVideoUpload");
const reverseVideoPreview = document.getElementById("reverseVideoPreview");
const detailImageInput = document.getElementById("detailImageInput");
const detailImageUpload = document.getElementById("detailImageUpload");
const detailImagePreview = document.getElementById("detailImagePreview");
const hotspotEyebrowInput = document.getElementById("hotspotEyebrowInput");
const hotspotTitleInput = document.getElementById("hotspotTitleInput");
const hotspotDescInput = document.getElementById("hotspotDescInput");
const specsEditorList = document.getElementById("specsEditorList");
const addSpecRowBtn = document.getElementById("addSpecRowBtn");
const updateHotspotBtn = document.getElementById("updateHotspotBtn");
const duplicateHotspotBtn = document.getElementById("duplicateHotspotBtn");
const deleteHotspotBtn = document.getElementById("deleteHotspotBtn");

// Vehicle Tab Elements
const mainImageUrlInput = document.getElementById("mainImageUrlInput");
const mainImageFileUpload = document.getElementById("mainImageFileUpload");
const mainImagePreview = document.getElementById("mainImagePreview");
const vehicleNameInput = document.getElementById("vehicleNameInput");
const vehiclePriceInput = document.getElementById("vehiclePriceInput");
const vehicleSubInput = document.getElementById("vehicleSubInput");
const saveVehicleSettingsBtn = document.getElementById("saveVehicleSettingsBtn");

// JSON Tab Elements
const jsonConfigTextarea = document.getElementById("jsonConfigTextarea");
const copyJsonBtn = document.getElementById("copyJsonBtn");
const applyJsonBtn = document.getElementById("applyJsonBtn");

// Header Action Buttons
const saveConfigBtn = document.getElementById("saveConfigBtn");
const resetConfigBtn = document.getElementById("resetConfigBtn");
const exportConfigBtn = document.getElementById("exportConfigBtn");
const importConfigBtn = document.getElementById("importConfigBtn");
const saveStatusIndicator = document.getElementById("saveStatusIndicator");
const statusText = document.getElementById("statusText");

// Toast and Modal
const toastContainer = document.getElementById("toastContainer");
const importDialog = document.getElementById("importDialog");
const closeImportDialogBtn = document.getElementById("closeImportDialogBtn");
const cancelImportBtn = document.getElementById("cancelImportBtn");
const confirmImportBtn = document.getElementById("confirmImportBtn");
const importJsonTextarea = document.getElementById("importJsonTextarea");
const importJsonFileInput = document.getElementById("importJsonFileInput");

// In-Page Confirmation Dialog (Iframe Safe)
const confirmDialog = document.getElementById("confirmDialog");
const confirmDialogTitle = document.getElementById("confirmDialogTitle");
const confirmDialogMessage = document.getElementById("confirmDialogMessage");
const cancelConfirmDialogBtn = document.getElementById("cancelConfirmDialogBtn");
const okConfirmDialogBtn = document.getElementById("okConfirmDialogBtn");
const closeConfirmDialogBtn = document.getElementById("closeConfirmDialogBtn");

// Test Sub-Hotspots Elements
const adminTestSubHotspotsLayer = document.getElementById("adminTestSubHotspotsLayer");
const testSubhotspotCard = document.getElementById("testSubhotspotCard");
const testCardEyebrow = document.getElementById("testCardEyebrow");
const testCardTitle = document.getElementById("testCardTitle");
const testCardDesc = document.getElementById("testCardDesc");
const testCardSpecs = document.getElementById("testCardSpecs");
const testCardCloseBtn = document.getElementById("testCardCloseBtn");

// ==========================================================================
// Initialization & Data Loading
// ==========================================================================

async function initAdminStudio() {
  await fetchConfig();
  setupEventListeners();
  renderCanvas();
  renderHotspotsStrip();
  loadHotspotIntoInspector(selectedHotspotId);
  syncVehicleSettingsTab();
}

async function fetchConfig() {
  try {
    const res = await fetch("/api/config");
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.hotspots)) {
        currentConfig = data;
        setUnsaved(false);
        return;
      }
    }
  } catch (e) {
    console.warn("Could not load /api/config, checking localStorage:", e);
  }

  // Check localStorage fallback
  const local = localStorage.getItem("japan_recon_viewer_config");
  if (local) {
    try {
      currentConfig = JSON.parse(local);
      setUnsaved(false);
      return;
    } catch (e) {}
  }

  currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  setUnsaved(false);
}

function setUnsaved(unsaved = true) {
  isUnsaved = unsaved;
  if (unsaved) {
    saveStatusIndicator.classList.add("unsaved");
    statusText.textContent = "有未保存的更改 (Unsaved)";
  } else {
    saveStatusIndicator.classList.remove("unsaved");
    statusText.textContent = "已同步最新配置 (Saved)";
  }
}

// ==========================================================================
// Safe In-Page Confirmation (Replaces window.confirm for Iframes)
// ==========================================================================

function showCustomConfirm({ title = "确认操作", message = "确定要执行此操作吗？", confirmText = "确认删除", isDanger = true, onConfirm }) {
  if (!confirmDialog) {
    if (typeof onConfirm === "function") onConfirm();
    return;
  }
  confirmDialogTitle.textContent = title;
  confirmDialogMessage.textContent = message;
  okConfirmDialogBtn.textContent = confirmText;
  okConfirmDialogBtn.className = isDanger ? "admin-btn admin-btn-danger" : "admin-btn admin-btn-primary";

  const closeDialog = () => {
    try {
      if (confirmDialog.close) confirmDialog.close();
      else confirmDialog.style.display = "none";
    } catch (e) {
      confirmDialog.style.display = "none";
    }
    cleanup();
  };

  const handleOk = () => {
    closeDialog();
    if (typeof onConfirm === "function") onConfirm();
  };

  const cleanup = () => {
    okConfirmDialogBtn.removeEventListener("click", handleOk);
    cancelConfirmDialogBtn.removeEventListener("click", closeDialog);
    if (closeConfirmDialogBtn) closeConfirmDialogBtn.removeEventListener("click", closeDialog);
  };

  okConfirmDialogBtn.addEventListener("click", handleOk);
  cancelConfirmDialogBtn.addEventListener("click", closeDialog);
  if (closeConfirmDialogBtn) closeConfirmDialogBtn.addEventListener("click", closeDialog);

  try {
    if (confirmDialog.showModal) confirmDialog.showModal();
    else {
      confirmDialog.setAttribute("open", "");
      confirmDialog.style.display = "flex";
    }
  } catch (e) {
    confirmDialog.style.display = "flex";
  }
}

// ==========================================================================
// Hotspot Deletion Controller
// ==========================================================================

function deleteHotspot(id) {
  const idx = currentConfig.hotspots.findIndex(h => h.id === id);
  if (idx === -1) return;
  const deleted = currentConfig.hotspots.splice(idx, 1)[0];

  if (currentSubHotspotParentId === id) {
    exitSubHotspotMode();
  }

  if (currentConfig.hotspots.length > 0) {
    const nextIdx = Math.min(idx, currentConfig.hotspots.length - 1);
    selectHotspot(currentConfig.hotspots[nextIdx].id);
  } else {
    selectedHotspotId = null;
    clearHotspotInspector();
  }

  renderCanvas();
  renderHotspotsStrip();
  setUnsaved(true);
  showToast(`热点「${deleted.label || deleted.id}」已成功删除！`, "success");
}

function clearHotspotInspector() {
  inspectorHotspotTitle.textContent = "无选中热点";
  inspectorHotspotSubtitle.textContent = "点击画布或下方「+ 新建热点」添加";
  hotspotLabelInput.value = "";
  hotspotIdInput.value = "";
  coordXInput.value = "50";
  coordXRange.value = "50";
  coordYInput.value = "50";
  coordYRange.value = "50";
  forwardVideoInput.value = "";
  reverseVideoInput.value = "";
  detailImageInput.value = "";
  hotspotEyebrowInput.value = "";
  hotspotTitleInput.value = "";
  hotspotDescInput.value = "";
  specsEditorList.innerHTML = "";
  if (subHotspotsManagerList) subHotspotsManagerList.innerHTML = "";
}

function deleteSubHotspot(parentId, subId) {
  const parent = currentConfig.hotspots.find(h => h.id === parentId);
  if (!parent || !Array.isArray(parent.subHotspots)) return;
  const idx = parent.subHotspots.findIndex(s => s.id === subId);
  if (idx === -1) return;
  const deleted = parent.subHotspots.splice(idx, 1)[0];

  if (selectedSubHotspotId === subId) {
    selectedSubHotspotId = parent.subHotspots.length > 0 ? parent.subHotspots[0].id : null;
  }

  renderCanvas();
  renderSubHotspotsManagerList(parent);
  setUnsaved(true);
  showToast(`子热点「${deleted.label || deleted.id}」已成功删除！`, "success");
}

// ==========================================================================
// Sub-Hotspot Navigation & Resolution
// ==========================================================================

function getHotspotDetailImage(item) {
  if (!item) return currentConfig.mainImage || DEFAULT_CONFIG.mainImage;
  if (item.imageSrc) return item.imageSrc;
  if (item.type === "video") {
    if (item.id === "engine" || item.id.includes("engine")) return "assets/audi-s5/engine_16x9.jpg";
    if (item.id === "interior" || item.id.includes("interior") || item.id.includes("cabin")) return "assets/audi-s5/dashboard_16x9.jpg";
    if (item.id === "boot" || item.id.includes("boot") || item.id.includes("trunk")) return "assets/audi-s5/boot_16x9.jpg";
    if (item.previewImage) return item.previewImage;
    return "assets/audi-s5/main-car-16x9.jpg";
  }
  return currentConfig.mainImage || DEFAULT_CONFIG.mainImage;
}

function enterSubHotspotMode(parentId) {
  const parent = currentConfig.hotspots.find(h => h.id === parentId);
  if (!parent) {
    showToast("请先选择一个热点", "info");
    return;
  }
  currentSubHotspotParentId = parent.id;
  if (!Array.isArray(parent.subHotspots)) {
    parent.subHotspots = [];
  }
  selectedSubHotspotId = parent.subHotspots.length > 0 ? parent.subHotspots[0].id : null;

  stageContextBar.style.display = "flex";
  contextParentLabel.textContent = `正在编辑「${parent.label || parent.id}」内部的子热点 (Sub-Hotspots inside this view)`;

  renderCanvas();
  renderSubHotspotsManagerList(parent);
  showToast(`已进入「${parent.label || parent.id}」子热点编辑模式！点击画面即可添加部件标记。`, "success");
}

function exitSubHotspotMode() {
  const prevParentId = currentSubHotspotParentId;
  currentSubHotspotParentId = null;
  selectedSubHotspotId = null;
  stageContextBar.style.display = "none";

  renderCanvas();
  renderHotspotsStrip();
  if (prevParentId) {
    selectHotspot(prevParentId);
  }
  showToast("已退出子热点，返回整车总览视图。", "info");
}

// ==========================================================================
// Render Canvas & Hotspots (Supports Main Car and Sub-Hotspots View)
// ==========================================================================

function renderCanvas() {
  // If in Sub-Hotspots Mode for a specific parent hotspot:
  if (currentSubHotspotParentId) {
    const parent = currentConfig.hotspots.find(h => h.id === currentSubHotspotParentId);
    if (!parent) {
      exitSubHotspotMode();
      return;
    }

    stageContextBar.style.display = "flex";
    contextParentLabel.textContent = `正在编辑「${parent.label || parent.id}」内部的子热点 (Sub-Hotspots inside this view)`;
    adminMainImage.src = getHotspotDetailImage(parent);
    adminHotspotsLayer.innerHTML = "";

    const subList = parent.subHotspots || [];
    subList.forEach(subItem => {
      const pin = document.createElement("div");
      pin.className = `admin-hotspot-pin sub-pin ${subItem.id === selectedSubHotspotId ? "is-selected" : ""}`;
      pin.style.left = subItem.x;
      pin.style.top = subItem.y;
      pin.dataset.id = subItem.id;
      pin.setAttribute("title", `[子热点] ${subItem.label || subItem.id}`);

      pin.innerHTML = `
        <span class="pin-icon">✦</span>
        <span class="pin-label">${escapeHtml(subItem.label || subItem.id)}</span>
        <span class="pin-badge">Sub</span>
      `;

      pin.addEventListener("click", (e) => {
        e.stopPropagation();
        if (Date.now() - lastDragEndTime < 200) return;
        selectedSubHotspotId = subItem.id;
        renderCanvas();
        renderSubHotspotsManagerList(parent);
        const card = subHotspotsManagerList.querySelector(`[data-sub-id="${subItem.id}"]`);
        if (card) {
          card.classList.add("is-editing");
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });

      if (currentMode === "edit") {
        setupSubPinDrag(pin, subItem, parent);
      }

      adminHotspotsLayer.appendChild(pin);
    });

    hotspotCountBadge.textContent = `${subList.length} (子热点)`;
    return;
  }

  // Normal Main Vehicle Mode:
  stageContextBar.style.display = "none";
  adminMainImage.src = currentConfig.mainImage || DEFAULT_CONFIG.mainImage;
  adminHotspotsLayer.innerHTML = "";

  currentConfig.hotspots.forEach(item => {
    const pin = document.createElement("div");
    pin.className = `admin-hotspot-pin ${item.id === selectedHotspotId ? "is-selected" : ""}`;
    pin.style.left = item.x;
    pin.style.top = item.y;
    pin.dataset.id = item.id;
    pin.setAttribute("title", `${item.label} (${item.type === "video" ? "Video" : "Image"})`);

    const isVideo = item.type === "video";
    const subCount = Array.isArray(item.subHotspots) ? item.subHotspots.length : 0;
    pin.innerHTML = `
      <span class="pin-icon">${isVideo ? "▶" : "+"}</span>
      <span class="pin-label">${escapeHtml(item.label || item.id)}</span>
      <span class="pin-badge">${isVideo ? "Vid" : "Img"}${subCount > 0 ? ` · ${subCount}★` : ""}</span>
    `;

    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      if (Date.now() - lastDragEndTime < 200) return;
      if (currentMode === "edit") {
        selectHotspot(item.id);
      } else {
        testHotspotInteraction(item);
      }
    });

    if (currentMode === "edit") {
      setupPinDrag(pin, item);
    }

    adminHotspotsLayer.appendChild(pin);
  });

  hotspotCountBadge.textContent = currentConfig.hotspots.length;
}

let lastDragEndTime = 0;

function setupPinDrag(pin, item) {
  let isDragging = false;
  let startX = 0, startY = 0;
  let didMove = false;

  const onPointerDown = (e) => {
    if (currentMode !== "edit") return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    e.preventDefault();
    e.stopPropagation();

    isDragging = true;
    didMove = false;
    startX = e.clientX;
    startY = e.clientY;

    pin.classList.add("is-dragging");
    adminStage.classList.add("is-dragging-any-pin");
    selectHotspot(item.id);

    try {
      pin.setPointerCapture(e.pointerId);
    } catch (err) {}

    const onPointerMove = (moveEvt) => {
      if (!isDragging) return;
      moveEvt.preventDefault();
      moveEvt.stopPropagation();

      const dist = Math.hypot(moveEvt.clientX - startX, moveEvt.clientY - startY);
      if (dist > 3) {
        didMove = true;
      }

      const rect = adminStage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const relX = Math.max(1, Math.min(99, ((moveEvt.clientX - rect.left) / rect.width) * 100));
      const relY = Math.max(1, Math.min(99, ((moveEvt.clientY - rect.top) / rect.height) * 100));

      const newXStr = `${relX.toFixed(1)}%`;
      const newYStr = `${relY.toFixed(1)}%`;

      pin.style.left = newXStr;
      pin.style.top = newYStr;

      item.x = newXStr;
      item.y = newYStr;

      coordXInput.value = relX.toFixed(1);
      coordXRange.value = relX.toFixed(1);
      coordYInput.value = relY.toFixed(1);
      coordYRange.value = relY.toFixed(1);
      canvasCoordsBadge.textContent = `X: ${newXStr} · Y: ${newYStr}`;
      setUnsaved(true);
    };

    const onPointerUp = (upEvt) => {
      if (!isDragging) return;
      isDragging = false;
      pin.classList.remove("is-dragging");
      adminStage.classList.remove("is-dragging-any-pin");

      try {
        pin.releasePointerCapture(e.pointerId);
      } catch (err) {}

      pin.removeEventListener("pointermove", onPointerMove);
      pin.removeEventListener("pointerup", onPointerUp);
      pin.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      if (didMove) {
        lastDragEndTime = Date.now();
        renderHotspotsStrip();
      }
    };

    pin.addEventListener("pointermove", onPointerMove);
    pin.addEventListener("pointerup", onPointerUp);
    pin.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  pin.addEventListener("pointerdown", onPointerDown);
}

function setupSubPinDrag(pin, subItem, parent) {
  let isDragging = false;
  let startX = 0, startY = 0;
  let didMove = false;

  const onPointerDown = (e) => {
    if (currentMode !== "edit") return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    e.preventDefault();
    e.stopPropagation();

    isDragging = true;
    didMove = false;
    startX = e.clientX;
    startY = e.clientY;

    pin.classList.add("is-dragging");
    adminStage.classList.add("is-dragging-any-pin");
    selectedSubHotspotId = subItem.id;

    try { pin.setPointerCapture(e.pointerId); } catch (err) {}

    const onPointerMove = (moveEvt) => {
      if (!isDragging) return;
      moveEvt.preventDefault();
      moveEvt.stopPropagation();

      const dist = Math.hypot(moveEvt.clientX - startX, moveEvt.clientY - startY);
      if (dist > 3) didMove = true;

      const rect = adminStage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const relX = Math.max(1, Math.min(99, ((moveEvt.clientX - rect.left) / rect.width) * 100));
      const relY = Math.max(1, Math.min(99, ((moveEvt.clientY - rect.top) / rect.height) * 100));

      const newXStr = `${relX.toFixed(1)}%`;
      const newYStr = `${relY.toFixed(1)}%`;

      pin.style.left = newXStr;
      pin.style.top = newYStr;
      subItem.x = newXStr;
      subItem.y = newYStr;

      canvasCoordsBadge.textContent = `[子热点] X: ${newXStr} · Y: ${newYStr}`;

      const subCard = subHotspotsManagerList.querySelector(`[data-sub-id="${subItem.id}"]`);
      if (subCard) {
        const xInput = subCard.querySelector(".sub-coord-x");
        const yInput = subCard.querySelector(".sub-coord-y");
        if (xInput) xInput.value = relX.toFixed(1);
        if (yInput) yInput.value = relY.toFixed(1);
      }
      setUnsaved(true);
    };

    const onPointerUp = (upEvt) => {
      if (!isDragging) return;
      isDragging = false;
      pin.classList.remove("is-dragging");
      adminStage.classList.remove("is-dragging-any-pin");

      try { pin.releasePointerCapture(e.pointerId); } catch (err) {}

      pin.removeEventListener("pointermove", onPointerMove);
      pin.removeEventListener("pointerup", onPointerUp);
      pin.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      if (didMove) {
        lastDragEndTime = Date.now();
        renderSubHotspotsManagerList(parent);
      }
    };

    pin.addEventListener("pointermove", onPointerMove);
    pin.addEventListener("pointerup", onPointerUp);
    pin.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  pin.addEventListener("pointerdown", onPointerDown);
}

function renderHotspotsStrip() {
  hotspotsStrip.innerHTML = currentConfig.hotspots.map(item => {
    const subCount = Array.isArray(item.subHotspots) ? item.subHotspots.length : 0;
    return `
      <div class="strip-card ${item.id === selectedHotspotId ? "active" : ""}" data-id="${item.id}">
        <div class="strip-card-header">
          <span class="strip-card-title">${escapeHtml(item.label || item.id)}</span>
          <button type="button" class="strip-card-delete" title="删除此热点" data-delete-id="${item.id}">✕</button>
        </div>
        <span class="strip-card-meta">
          <span>${item.type === "video" ? "🎬 视频" : "🖼️ 特写"}</span>
          <span>·</span>
          <span>${item.x}, ${item.y}</span>
          ${subCount > 0 ? `<span style="color: #38bdf8; font-weight: 600;">· 🎯 ${subCount}个子热点</span>` : ""}
        </span>
      </div>
    `;
  }).join("");

  hotspotsStrip.querySelectorAll(".strip-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".strip-card-delete")) return;
      selectHotspot(card.dataset.id);
    });
  });

  hotspotsStrip.querySelectorAll(".strip-card-delete").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.deleteId;
      const target = currentConfig.hotspots.find(h => h.id === id);
      showCustomConfirm({
        title: "删除热点",
        message: `确定要删除热点「${target ? (target.label || target.id) : id}」吗？`,
        confirmText: "确认删除",
        isDanger: true,
        onConfirm: () => {
          deleteHotspot(id);
        }
      });
    });
  });
}

function selectHotspot(id) {
  selectedHotspotId = id;
  adminHotspotsLayer.querySelectorAll(".admin-hotspot-pin").forEach(pin => {
    pin.classList.toggle("is-selected", pin.dataset.id === id);
  });
  hotspotsStrip.querySelectorAll(".strip-card").forEach(card => {
    card.classList.toggle("active", card.dataset.id === id);
  });
  loadHotspotIntoInspector(id);
  switchInspectorTab("hotspot");
}

// ==========================================================================
// Inspector Form & Synchronization
// ==========================================================================

function loadHotspotIntoInspector(id) {
  const item = currentConfig.hotspots.find(h => h.id === id);
  if (!item) {
    if (currentConfig.hotspots.length > 0) {
      return selectHotspot(currentConfig.hotspots[0].id);
    }
    return;
  }

  inspectorHotspotTitle.textContent = `编辑热点: ${item.label || item.id}`;
  inspectorHotspotSubtitle.textContent = `类型: ${item.type === "video" ? "16:9 动态视频" : "16:9 静态大图"} · 坐标: ${item.x}, ${item.y}`;

  hotspotLabelInput.value = item.label || "";
  hotspotIdInput.value = item.id || "";

  if (item.type === "video") {
    typeVideoRadio.checked = true;
    videoFieldsGroup.style.display = "";
    imageFieldsGroup.style.display = "none";
  } else {
    typeImageRadio.checked = true;
    videoFieldsGroup.style.display = "none";
    imageFieldsGroup.style.display = "";
  }

  const numX = parseFloat(item.x) || 50;
  const numY = parseFloat(item.y) || 50;
  coordXInput.value = numX;
  coordXRange.value = numX;
  coordYInput.value = numY;
  coordYRange.value = numY;

  forwardVideoInput.value = item.forwardVideo || "";
  forwardVideoPreview.src = item.forwardVideo || "";
  reverseVideoInput.value = item.reverseVideo || "";
  reverseVideoPreview.src = item.reverseVideo || "";

  detailImageInput.value = item.imageSrc || "";
  detailImagePreview.src = item.imageSrc || "";

  hotspotEyebrowInput.value = item.eyebrow || "";
  hotspotTitleInput.value = item.title || "";
  hotspotDescInput.value = item.description || "";

  renderSpecsEditor(item.specs || []);
  renderSubHotspotsManagerList(item);
}

function renderSpecsEditor(specs = []) {
  specsEditorList.innerHTML = "";
  specs.forEach(([key, val], idx) => {
    const row = document.createElement("div");
    row.className = "spec-edit-row";
    row.innerHTML = `
      <input type="text" class="admin-input spec-key" value="${escapeHtml(key)}" placeholder="参数名 (如 Engine)">
      <input type="text" class="admin-input spec-val" value="${escapeHtml(val)}" placeholder="参数值 (如 3.0L V6)">
      <button type="button" class="btn-remove-spec" title="删除此规格">✕</button>
    `;
    row.querySelector(".btn-remove-spec").addEventListener("click", () => {
      row.remove();
      setUnsaved(true);
    });
    row.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", () => setUnsaved(true));
    });
    specsEditorList.appendChild(row);
  });
}

function renderSubHotspotsManagerList(parent) {
  if (!subHotspotsManagerList) return;
  if (!parent || !Array.isArray(parent.subHotspots) || parent.subHotspots.length === 0) {
    subHotspotsManagerList.innerHTML = `
      <div style="font-size: 12px; color: var(--admin-text-muted); padding: 8px 12px; background: var(--admin-surface-raised); border-radius: 6px; border: 1px dashed var(--admin-border);">
        当前部件暂无子热点。点击下方按钮添加，或点击「🎯 切换到该画面可视化标记」在画面中点击添加。
      </div>
    `;
    return;
  }

  subHotspotsManagerList.innerHTML = parent.subHotspots.map(sub => {
    const isSelected = sub.id === selectedSubHotspotId;
    return `
      <div class="sub-hotspot-item ${isSelected ? "is-editing" : ""}" data-sub-id="${sub.id}">
        <div class="sub-item-info">
          <span class="sub-item-title">${escapeHtml(sub.label || sub.id)}</span>
          <span class="sub-item-meta">
            <span>坐标: ${sub.x}, ${sub.y}</span>
            <span>·</span>
            <span>${sub.specs?.length || 0}项参数</span>
            ${sub.eyebrow ? `<span>· ${escapeHtml(sub.eyebrow)}</span>` : ""}
          </span>
        </div>
        <div class="sub-item-actions">
          <button type="button" class="btn-sub-action btn-sub-focus" title="在画布上查看定位">🎯 定位</button>
          <button type="button" class="btn-sub-action btn-sub-toggle-edit" title="编辑子热点信息">✏️ 编辑</button>
          <button type="button" class="btn-sub-action btn-sub-delete" title="删除此子热点">🗑️</button>
        </div>
      </div>
      <div class="sub-hotspot-edit-panel" id="editPanel_${sub.id}" style="${isSelected ? "" : "display:none;"}">
        <div class="sub-edit-row">
          <div class="sub-edit-field" style="flex: 1;">
            <label>子热点名称 (Label)</label>
            <input type="text" class="admin-input sub-input-label" value="${escapeHtml(sub.label || "")}" placeholder="例如: Twin-Scroll Turbo">
          </div>
          <div class="sub-edit-field" style="flex: 1;">
            <label>分类眉题 (Eyebrow)</label>
            <input type="text" class="admin-input sub-input-eyebrow" value="${escapeHtml(sub.eyebrow || "")}" placeholder="例如: FORCED INDUCTION">
          </div>
        </div>
        <div class="sub-edit-field">
          <label>详情标题 (Title)</label>
          <input type="text" class="admin-input sub-input-title" value="${escapeHtml(sub.title || "")}" placeholder="例如: Hot-V Twin-Scroll Turbocharger">
        </div>
        <div class="sub-edit-field">
          <label>图文详细说明 (Description)</label>
          <textarea class="admin-input sub-input-desc" rows="2" placeholder="部件细节与技术亮点说明...">${escapeHtml(sub.description || "")}</textarea>
        </div>
        <div class="sub-coords-row">
          <div class="sub-edit-field">
            <label>X 坐标 (%)</label>
            <input type="number" step="0.1" class="admin-input sub-coord-x" value="${parseFloat(sub.x || 50).toFixed(1)}">
          </div>
          <div class="sub-edit-field">
            <label>Y 坐标 (%)</label>
            <input type="number" step="0.1" class="admin-input sub-coord-y" value="${parseFloat(sub.y || 50).toFixed(1)}">
          </div>
        </div>
        <div class="sub-panel-actions">
          <button type="button" class="admin-btn admin-btn-secondary btn-sub-save" style="font-size: 11px; padding: 4px 10px;">✓ 应用子热点修改</button>
        </div>
      </div>
    `;
  }).join("");

  parent.subHotspots.forEach(sub => {
    const row = subHotspotsManagerList.querySelector(`.sub-hotspot-item[data-sub-id="${sub.id}"]`);
    const editPanel = document.getElementById(`editPanel_${sub.id}`);
    if (!row || !editPanel) return;

    row.querySelector(".btn-sub-focus").addEventListener("click", (e) => {
      e.stopPropagation();
      selectedSubHotspotId = sub.id;
      if (currentSubHotspotParentId !== parent.id) {
        enterSubHotspotMode(parent.id);
      } else {
        renderCanvas();
      }
    });

    row.querySelector(".btn-sub-toggle-edit").addEventListener("click", (e) => {
      e.stopPropagation();
      const isVisible = editPanel.style.display !== "none";
      editPanel.style.display = isVisible ? "none" : "";
      row.classList.toggle("is-editing", !isVisible);
      if (!isVisible) {
        selectedSubHotspotId = sub.id;
        if (currentSubHotspotParentId !== parent.id) {
          enterSubHotspotMode(parent.id);
        } else {
          renderCanvas();
        }
      }
    });

    row.querySelector(".btn-sub-delete").addEventListener("click", (e) => {
      e.stopPropagation();
      showCustomConfirm({
        title: "删除子热点",
        message: `确定要删除子热点「${sub.label || sub.id}」吗？`,
        confirmText: "确认删除",
        isDanger: true,
        onConfirm: () => {
          deleteSubHotspot(parent.id, sub.id);
        }
      });
    });

    editPanel.querySelector(".btn-sub-save").addEventListener("click", () => {
      sub.label = editPanel.querySelector(".sub-input-label").value.trim() || sub.label;
      sub.eyebrow = editPanel.querySelector(".sub-input-eyebrow").value.trim();
      sub.title = editPanel.querySelector(".sub-input-title").value.trim();
      sub.description = editPanel.querySelector(".sub-input-desc").value.trim();
      sub.x = `${parseFloat(editPanel.querySelector(".sub-coord-x").value || 50).toFixed(1)}%`;
      sub.y = `${parseFloat(editPanel.querySelector(".sub-coord-y").value || 50).toFixed(1)}%`;
      renderCanvas();
      renderSubHotspotsManagerList(parent);
      setUnsaved(true);
      showToast(`已更新子热点「${sub.label}」！`, "success");
    });
  });
}

function getSpecsFromEditor() {
  const result = [];
  specsEditorList.querySelectorAll(".spec-edit-row").forEach(row => {
    const k = row.querySelector(".spec-key").value.trim();
    const v = row.querySelector(".spec-val").value.trim();
    if (k || v) result.push([k, v]);
  });
  return result;
}

function applyHotspotFormChanges() {
  const item = currentConfig.hotspots.find(h => h.id === selectedHotspotId);
  if (!item) return;

  const newId = hotspotIdInput.value.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
  if (!newId) {
    showToast("请输入有效热点 ID", "error");
    return;
  }

  // Check unique ID if changed
  if (newId !== item.id && currentConfig.hotspots.some(h => h.id === newId)) {
    showToast("热点 ID 已存在，请使用唯一标识", "error");
    return;
  }

  item.id = newId;
  item.label = hotspotLabelInput.value.trim();
  item.type = typeVideoRadio.checked ? "video" : "image";
  item.x = `${parseFloat(coordXInput.value || 50).toFixed(1)}%`;
  item.y = `${parseFloat(coordYInput.value || 50).toFixed(1)}%`;

  if (item.type === "video") {
    item.forwardVideo = forwardVideoInput.value.trim();
    item.reverseVideo = reverseVideoInput.value.trim();
    delete item.imageSrc;
  } else {
    item.imageSrc = detailImageInput.value.trim();
    delete item.forwardVideo;
    delete item.reverseVideo;
  }

  item.eyebrow = hotspotEyebrowInput.value.trim();
  item.title = hotspotTitleInput.value.trim();
  item.description = hotspotDescInput.value.trim();
  item.specs = getSpecsFromEditor();

  selectedHotspotId = item.id;
  renderCanvas();
  renderHotspotsStrip();
  setUnsaved(true);
  showToast(`热点「${item.label}」已更新！`, "success");
}

// ==========================================================================
// Mode Switching & Live Interaction Testing
// ==========================================================================

function setMode(mode) {
  currentMode = mode;
  modeEditBtn.classList.toggle("active", mode === "edit");
  modeTestBtn.classList.toggle("active", mode === "test");

  adminStage.classList.toggle("test-mode", mode === "test");

  if (mode === "edit") {
    resetTestViewer();
  } else {
    showToast("已切换到「交互测试模式」，点击热点可模拟买家体验！", "success");
  }
}

async function testHotspotInteraction(item) {
  if (testState.isAnimating) return;
  testState.isAnimating = true;
  testState.activeItem = item;

  adminHotspotsLayer.classList.add("hidden-during-test");
  adminTestBackBtn.classList.add("is-visible");
  if (testSubhotspotCard) testSubhotspotCard.style.display = "none";

  if (item.type === "video") {
    testState.mode = "video";
    adminTestDetailImage.classList.remove("is-active");
    adminTestVideo.src = item.forwardVideo;
    adminTestVideo.currentTime = 0;
    try {
      await adminTestVideo.play();
      adminTestVideo.classList.add("is-active");
    } catch (e) {
      console.warn("Video play failed:", e);
      adminTestVideo.classList.add("is-active");
      renderTestSubHotspots(item);
    }
  } else {
    testState.mode = "image";
    adminTestVideo.classList.remove("is-active");
    adminTestDetailImage.src = item.imageSrc;
    adminTestDetailImage.classList.add("is-active");
    renderTestSubHotspots(item);
  }

  testState.isAnimating = false;
}

function renderTestSubHotspots(item) {
  if (!adminTestSubHotspotsLayer) return;
  adminTestSubHotspotsLayer.innerHTML = "";
  if (!item || !Array.isArray(item.subHotspots) || item.subHotspots.length === 0) {
    adminTestSubHotspotsLayer.style.display = "none";
    return;
  }
  adminTestSubHotspotsLayer.style.display = "block";
  item.subHotspots.forEach(sub => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "admin-hotspot-pin sub-pin";
    pin.style.left = sub.x;
    pin.style.top = sub.y;
    pin.style.pointerEvents = "auto";
    pin.innerHTML = `
      <span class="pin-icon">✦</span>
      <span class="pin-label">${escapeHtml(sub.label || sub.id)}</span>
    `;
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      openTestSubCard(sub);
    });
    adminTestSubHotspotsLayer.appendChild(pin);
  });
}

function openTestSubCard(sub) {
  if (!testSubhotspotCard) return;
  testCardEyebrow.textContent = sub.eyebrow || "SUB-HOTSPOT DETAIL";
  testCardTitle.textContent = sub.title || sub.label || sub.id;
  testCardDesc.textContent = sub.description || "无详细描述";
  if (testCardSpecs) {
    testCardSpecs.innerHTML = (sub.specs || []).map(([k, v]) => `
      <div class="test-subspec-row">
        <span class="test-subspec-k">${escapeHtml(k)}</span>
        <span class="test-subspec-v">${escapeHtml(v)}</span>
      </div>
    `).join("");
  }
  testSubhotspotCard.style.display = "block";
}

async function handleTestBack() {
  if (testState.isAnimating) return;
  testState.isAnimating = true;

  if (testSubhotspotCard) testSubhotspotCard.style.display = "none";
  if (adminTestSubHotspotsLayer) {
    adminTestSubHotspotsLayer.innerHTML = "";
    adminTestSubHotspotsLayer.style.display = "none";
  }

  const item = testState.activeItem;
  if (testState.mode === "video" && item && item.reverseVideo) {
    testState.mode = "reverse";
    adminTestVideo.src = item.reverseVideo;
    adminTestVideo.currentTime = 0;
    try {
      await adminTestVideo.play();
    } catch (e) {
      resetTestViewer();
    }
  } else {
    resetTestViewer();
  }
}

function resetTestViewer() {
  adminTestVideo.pause();
  adminTestVideo.removeAttribute("src");
  adminTestVideo.classList.remove("is-active");

  adminTestDetailImage.removeAttribute("src");
  adminTestDetailImage.classList.remove("is-active");

  adminHotspotsLayer.classList.remove("hidden-during-test");
  adminTestBackBtn.classList.remove("is-visible");

  if (adminTestSubHotspotsLayer) {
    adminTestSubHotspotsLayer.innerHTML = "";
    adminTestSubHotspotsLayer.style.display = "none";
  }
  if (testSubhotspotCard) {
    testSubhotspotCard.style.display = "none";
  }

  testState.activeItem = null;
  testState.mode = "normal";
  testState.isAnimating = false;
}

if (adminTestVideo) {
  adminTestVideo.addEventListener("ended", () => {
    if (testState.mode === "video") {
      if (testState.activeItem) {
        renderTestSubHotspots(testState.activeItem);
      }
    } else if (testState.mode === "reverse") {
      resetTestViewer();
    }
  });
}

// ==========================================================================
// File Upload Controller (Base64 -> /api/upload)
// ==========================================================================

async function handleFileUpload(fileInput, onTargetUrlReceived) {
  const file = fileInput.files && fileInput.files[0];
  if (!file) return;

  showToast(`正在上传文件: ${file.name}...`, "success");

  // Read as base64
  const reader = new FileReader();
  reader.onload = async () => {
    const base64Data = reader.result;
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          fileData: base64Data
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.url) {
          onTargetUrlReceived(data.url);
          showToast(`文件「${file.name}」上传成功！`, "success");
          setUnsaved(true);
          return;
        }
      }
    } catch (err) {
      console.warn("Server upload failed, falling back to local ObjectURL/DataURL:", err);
    }

    // Fallback: local object URL
    const localUrl = URL.createObjectURL(file);
    onTargetUrlReceived(localUrl);
    showToast(`本地文件已就绪: ${file.name}`, "success");
    setUnsaved(true);
  };

  reader.onerror = () => {
    showToast("读取文件失败", "error");
  };

  reader.readAsDataURL(file);
}

// ==========================================================================
// Save, Reset, Export & Import
// ==========================================================================

async function saveAllConfig() {
  try {
    const res = await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentConfig)
    });

    // Also persist to localStorage for instant client reactivity
    localStorage.setItem("japan_recon_viewer_config", JSON.stringify(currentConfig));

    if (res.ok) {
      setUnsaved(false);
      showToast("✓ 全部配置已成功保存发布！前端页面刷新即生效。", "success");
    } else {
      setUnsaved(false);
      showToast("本地已保存，已缓存至浏览器。", "success");
    }
  } catch (err) {
    localStorage.setItem("japan_recon_viewer_config", JSON.stringify(currentConfig));
    setUnsaved(false);
    showToast("网络请求异常，已保存至本地缓存！", "success");
  }
}

async function resetToDefaults() {
  showCustomConfirm({
    title: "恢复出厂配置",
    message: "确定要恢复默认预设的奥迪 S5 车辆配置吗？未保存的自定义数据将被覆盖。",
    confirmText: "确认恢复",
    isDanger: true,
    onConfirm: async () => {
      try {
        await fetch("/api/reset-config", { method: "POST" });
      } catch (e) {}

      localStorage.removeItem("japan_recon_viewer_config");
      currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      selectedHotspotId = "engine";
      currentSubHotspotParentId = null;
      renderCanvas();
      renderHotspotsStrip();
      loadHotspotIntoInspector("engine");
      syncVehicleSettingsTab();
      setUnsaved(false);
      showToast("已恢复出厂默认展示配置！", "success");
    }
  });
}

function exportConfigJSON() {
  const jsonStr = JSON.stringify(currentConfig, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `recon-viewer-config-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("配置 JSON 文件已下载！", "success");
}

function syncVehicleSettingsTab() {
  mainImageUrlInput.value = currentConfig.mainImage || "";
  mainImagePreview.src = currentConfig.mainImage || "";
  vehicleNameInput.value = currentConfig.vehicleName || "Audi S5 Avant";
  vehiclePriceInput.value = currentConfig.price || "RM 438,000";
  vehicleSubInput.value = currentConfig.vehicleSub || "";
}

function applyVehicleSettings() {
  currentConfig.mainImage = mainImageUrlInput.value.trim() || DEFAULT_CONFIG.mainImage;
  currentConfig.vehicleName = vehicleNameInput.value.trim();
  currentConfig.price = vehiclePriceInput.value.trim();
  currentConfig.vehicleSub = vehicleSubInput.value.trim();

  renderCanvas();
  setUnsaved(true);
  showToast("整车与主图配置已更新！", "success");
}

function switchInspectorTab(tabName) {
  tabHotspotBtn.classList.toggle("active", tabName === "hotspot");
  tabVehicleBtn.classList.toggle("active", tabName === "vehicle");
  tabJsonBtn.classList.toggle("active", tabName === "json");

  panelHotspot.style.display = tabName === "hotspot" ? "" : "none";
  panelVehicle.style.display = tabName === "vehicle" ? "" : "none";
  panelJson.style.display = tabName === "json" ? "" : "none";

  if (tabName === "json") {
    jsonConfigTextarea.value = JSON.stringify(currentConfig, null, 2);
  }
}

// Quick Preset Adder
function addPresetHotspot(presetKey) {
  const presets = {
    engine: {
      id: "engine_" + Date.now().toString().slice(-4),
      label: "Engine Bay",
      type: "video",
      x: "72%",
      y: "46%",
      forwardVideo: "assets/videos/engine_forward.mp4",
      reverseVideo: "assets/videos/engine_reverse_web.mp4",
      title: "Turbocharged Engine Bay",
      eyebrow: "POWERTRAIN",
      description: "Explore the high-performance powertrain architecture.",
      specs: [["Engine", "Turbo V6"], ["Output", "High Output"]]
    },
    interior: {
      id: "interior_" + Date.now().toString().slice(-4),
      label: "Interior Cabin",
      type: "video",
      x: "54%",
      y: "38%",
      forwardVideo: "assets/videos/interior_forward.mp4",
      reverseVideo: "assets/videos/interior_reverse.mp4",
      title: "Cockpit & Cabin",
      eyebrow: "INTERIOR",
      description: "Refined materials, sport seating and driver displays.",
      specs: [["Seats", "Sport Leather"], ["Steering", "Right-Hand Drive"]]
    },
    boot: {
      id: "boot_" + Date.now().toString().slice(-4),
      label: "Rear Cargo",
      type: "video",
      x: "24%",
      y: "44%",
      forwardVideo: "assets/videos/boot_forward.mp4",
      reverseVideo: "assets/videos/boot_reverse_web.mp4",
      title: "Estate Cargo & Tailgate",
      eyebrow: "STORAGE",
      description: "Powered opening rear luggage area with foldable seats.",
      specs: [["Cargo", "Estate Storage"], ["Tailgate", "Powered"]]
    },
    wheel: {
      id: "wheel_" + Date.now().toString().slice(-4),
      label: "Wheels & Brakes",
      type: "image",
      x: "78%",
      y: "74%",
      imageSrc: "assets/audi-s5/wheel_16x9.jpg",
      title: "Alloy Wheel & Brake Hardware",
      eyebrow: "CHASSIS",
      description: "Performance alloy wheels with multi-piston calipers.",
      specs: [["Wheels", "Performance Alloy"], ["Brakes", "Ventilated Discs"]]
    },
    dashboard: {
      id: "dashboard_" + Date.now().toString().slice(-4),
      label: "Virtual Cockpit",
      type: "image",
      x: "62%",
      y: "36%",
      imageSrc: "assets/audi-s5/dashboard_16x9.jpg",
      title: "Digital Instrument Cluster",
      eyebrow: "TECHNOLOGY",
      description: "Full digital driver instrumentation display.",
      specs: [["Cluster", "High-Resolution Digital"]]
    },
    audio: {
      id: "audio_" + Date.now().toString().slice(-4),
      label: "Sound System",
      type: "image",
      x: "65%",
      y: "46%",
      imageSrc: "assets/audi-s5/audio_16x9.jpg",
      title: "Premium 3D Surround Audio",
      eyebrow: "AUDIO",
      description: "High-fidelity premium multi-speaker sound system.",
      specs: [["Speakers", "Multi-Channel DSP"]]
    }
  };

  const preset = presets[presetKey];
  if (!preset) return;

  currentConfig.hotspots.push(preset);
  selectHotspot(preset.id);
  renderCanvas();
  renderHotspotsStrip();
  setUnsaved(true);
  showToast(`已添加「${preset.label}」热点预设！`, "success");
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================

function setupEventListeners() {
  // Mode switcher
  modeEditBtn.addEventListener("click", () => setMode("edit"));
  modeTestBtn.addEventListener("click", () => setMode("test"));

  // Stage hover & click to add hotspot in Edit Mode
  adminStage.addEventListener("mousemove", (e) => {
    if (currentMode !== "edit") return;
    const rect = adminStage.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

    const pctX = ((x / rect.width) * 100).toFixed(1);
    const pctY = ((y / rect.height) * 100).toFixed(1);

    canvasCrosshair.querySelector(".crosshair-x").style.left = `${x}px`;
    canvasCrosshair.querySelector(".crosshair-y").style.top = `${y}px`;
    crosshairTip.style.left = `${x}px`;
    crosshairTip.style.top = `${y}px`;
    crosshairTip.textContent = `点击添加 (${pctX}%, ${pctY}%)`;

    canvasCoordsBadge.textContent = `X: ${pctX}% · Y: ${pctY}%`;
  });

  adminStage.addEventListener("click", (e) => {
    if (currentMode !== "edit") return;
    if (Date.now() - lastDragEndTime < 250) return;
    if (e.target.closest(".admin-hotspot-pin")) return;

    const rect = adminStage.getBoundingClientRect();
    const pctX = Math.max(2, Math.min(98, ((e.clientX - rect.left) / rect.width) * 100)).toFixed(1);
    const pctY = Math.max(2, Math.min(98, ((e.clientY - rect.top) / rect.height) * 100)).toFixed(1);

    // If in Sub-Hotspots Mode, add sub-hotspot inside the active parent:
    if (currentSubHotspotParentId) {
      const parent = currentConfig.hotspots.find(h => h.id === currentSubHotspotParentId);
      if (!parent) return;
      if (!Array.isArray(parent.subHotspots)) parent.subHotspots = [];

      const newSubId = `${parent.id}_sub_${Date.now().toString().slice(-4)}`;
      const newSub = {
        id: newSubId,
        label: "New Feature",
        x: `${pctX}%`,
        y: `${pctY}%`,
        title: "Part Detail Feature",
        eyebrow: "DETAIL",
        description: "Add technical or aesthetic details for this component...",
        specs: [["Part", "Verified"]]
      };

      parent.subHotspots.push(newSub);
      selectedSubHotspotId = newSubId;
      renderCanvas();
      renderSubHotspotsManagerList(parent);
      setUnsaved(true);
      showToast(`已在 (${pctX}%, ${pctY}%) 添加子热点「${newSub.label}」！`, "success");
      return;
    }

    // Main vehicle hotspot creation
    const newId = "point_" + Date.now().toString().slice(-4);
    const newHotspot = {
      id: newId,
      label: "New Hotspot",
      type: "image",
      x: `${pctX}%`,
      y: `${pctY}%`,
      imageSrc: "assets/audi-s5/wheel_16x9.jpg",
      title: "New Feature Detail",
      eyebrow: "HIGHLIGHT",
      description: "Description of the vehicle feature...",
      specs: [["Feature", "Details"]],
      subHotspots: []
    };

    currentConfig.hotspots.push(newHotspot);
    selectHotspot(newId);
    renderCanvas();
    renderHotspotsStrip();
    setUnsaved(true);
    showToast(`已在 (${pctX}%, ${pctY}%) 新建热点！`, "success");
  });

  // Test back button
  adminTestBackBtn.addEventListener("click", handleTestBack);

  // Close test subcard
  if (testCardCloseBtn) {
    testCardCloseBtn.addEventListener("click", () => {
      if (testSubhotspotCard) testSubhotspotCard.style.display = "none";
    });
  }

  // Strip Clean Test Hotspots Button
  if (cleanTestHotspotsBtn) {
    cleanTestHotspotsBtn.addEventListener("click", () => {
      const testItems = currentConfig.hotspots.filter(h =>
        h.id.startsWith("point_") ||
        h.label === "New Hotspot" ||
        h.label === "Custom Hotspot"
      );
      if (testItems.length === 0) {
        showToast("当前没有未命名的临时测试热点", "info");
        return;
      }
      showCustomConfirm({
        title: "清理测试热点",
        message: `共发现 ${testItems.length} 个临时测试热点，确定全部清理吗？`,
        confirmText: "清理全部测试点",
        isDanger: true,
        onConfirm: () => {
          currentConfig.hotspots = currentConfig.hotspots.filter(h =>
            !h.id.startsWith("point_") &&
            h.label !== "New Hotspot" &&
            h.label !== "Custom Hotspot"
          );
          if (currentConfig.hotspots.length > 0) {
            selectHotspot(currentConfig.hotspots[0].id);
          } else {
            selectedHotspotId = null;
            clearHotspotInspector();
          }
          renderCanvas();
          renderHotspotsStrip();
          setUnsaved(true);
          showToast(`已成功清理 ${testItems.length} 个测试热点！`, "success");
        }
      });
    });
  }

  // Sub-Hotspots Mode buttons
  if (exitSubHotspotViewBtn) {
    exitSubHotspotViewBtn.addEventListener("click", exitSubHotspotMode);
  }

  if (openSubHotspotModeBtn) {
    openSubHotspotModeBtn.addEventListener("click", () => {
      if (!selectedHotspotId) {
        showToast("请先选择一个热点", "info");
        return;
      }
      enterSubHotspotMode(selectedHotspotId);
    });
  }

  if (addSubHotspotBtn) {
    addSubHotspotBtn.addEventListener("click", () => {
      const parent = currentConfig.hotspots.find(h => h.id === selectedHotspotId);
      if (!parent) {
        showToast("请先选择一个热点", "info");
        return;
      }
      if (!Array.isArray(parent.subHotspots)) parent.subHotspots = [];
      const newSubId = `${parent.id}_sub_${Date.now().toString().slice(-4)}`;
      const newSub = {
        id: newSubId,
        label: "New Feature",
        x: "50%",
        y: "50%",
        title: "Feature Detail",
        eyebrow: "DETAIL",
        description: "Add details for this sub-component...",
        specs: [["Part", "Verified"]]
      };
      parent.subHotspots.push(newSub);
      selectedSubHotspotId = newSubId;
      if (currentSubHotspotParentId !== parent.id) {
        enterSubHotspotMode(parent.id);
      } else {
        renderCanvas();
        renderSubHotspotsManagerList(parent);
      }
      setUnsaved(true);
      showToast(`已为「${parent.label || parent.id}」添加子热点，请调整位置与描述！`, "success");
    });
  }

  // Strip Add Button
  document.getElementById("stripAddBtn").addEventListener("click", () => {
    const newId = "point_" + Date.now().toString().slice(-4);
    const newHotspot = {
      id: newId,
      label: "Custom Hotspot",
      type: "video",
      x: "50%",
      y: "50%",
      forwardVideo: "assets/videos/engine_forward.mp4",
      reverseVideo: "assets/videos/engine_reverse_web.mp4",
      title: "New Interaction",
      eyebrow: "INSPECTION",
      description: "Inspect the vehicle detail with forward and reverse playback.",
      specs: [["Part", "Verified"]],
      subHotspots: []
    };
    currentConfig.hotspots.push(newHotspot);
    selectHotspot(newId);
    renderCanvas();
    renderHotspotsStrip();
    setUnsaved(true);
    showToast("已创建新热点，请配置坐标与媒体！", "success");
  });

  // Inspector Tabs
  tabHotspotBtn.addEventListener("click", () => switchInspectorTab("hotspot"));
  tabVehicleBtn.addEventListener("click", () => switchInspectorTab("vehicle"));
  tabJsonBtn.addEventListener("click", () => switchInspectorTab("json"));

  // Hotspot Form Coordinate Sliders & Inputs
  coordXRange.addEventListener("input", () => {
    coordXInput.value = coordXRange.value;
    updatePinCoordinateDirectly();
  });
  coordXInput.addEventListener("input", () => {
    coordXRange.value = coordXInput.value;
    updatePinCoordinateDirectly();
  });
  coordYRange.addEventListener("input", () => {
    coordYInput.value = coordYRange.value;
    updatePinCoordinateDirectly();
  });
  coordYInput.addEventListener("input", () => {
    coordYRange.value = coordYInput.value;
    updatePinCoordinateDirectly();
  });

  function updatePinCoordinateDirectly() {
    const item = currentConfig.hotspots.find(h => h.id === selectedHotspotId);
    if (!item) return;
    item.x = `${parseFloat(coordXInput.value).toFixed(1)}%`;
    item.y = `${parseFloat(coordYInput.value).toFixed(1)}%`;
    const pin = adminHotspotsLayer.querySelector(`[data-id="${item.id}"]`);
    if (pin) {
      pin.style.left = item.x;
      pin.style.top = item.y;
    }
    setUnsaved(true);
  }

  // Type Radios toggle
  typeVideoRadio.addEventListener("change", () => {
    videoFieldsGroup.style.display = "";
    imageFieldsGroup.style.display = "none";
    setUnsaved(true);
  });
  typeImageRadio.addEventListener("change", () => {
    videoFieldsGroup.style.display = "none";
    imageFieldsGroup.style.display = "";
    setUnsaved(true);
  });

  // Hotspot Form Buttons
  updateHotspotBtn.addEventListener("click", applyHotspotFormChanges);

  duplicateHotspotBtn.addEventListener("click", () => {
    const item = currentConfig.hotspots.find(h => h.id === selectedHotspotId);
    if (!item) return;
    const copy = JSON.parse(JSON.stringify(item));
    copy.id = copy.id + "_copy";
    copy.label = copy.label + " (Copy)";
    copy.x = `${(parseFloat(copy.x) + 3).toFixed(1)}%`;
    copy.y = `${(parseFloat(copy.y) + 3).toFixed(1)}%`;
    currentConfig.hotspots.push(copy);
    selectHotspot(copy.id);
    renderCanvas();
    renderHotspotsStrip();
    setUnsaved(true);
    showToast(`已复制热点为「${copy.label}」！`, "success");
  });

  // Hotspot Delete Button (Safe for Iframes)
  deleteHotspotBtn.addEventListener("click", () => {
    if (currentSubHotspotParentId) {
      const parent = currentConfig.hotspots.find(h => h.id === currentSubHotspotParentId);
      if (!parent) return;
      const sub = (parent.subHotspots || []).find(s => s.id === selectedSubHotspotId);
      if (!sub) {
        showToast("请先选择要删除的子热点", "info");
        return;
      }
      showCustomConfirm({
        title: "删除子热点",
        message: `确定要删除子热点「${sub.label || sub.id}」吗？`,
        confirmText: "删除子热点",
        isDanger: true,
        onConfirm: () => {
          deleteSubHotspot(parent.id, sub.id);
        }
      });
      return;
    }

    if (!selectedHotspotId) {
      showToast("请先选择要删除的热点", "info");
      return;
    }
    const item = currentConfig.hotspots.find(h => h.id === selectedHotspotId);
    const label = item ? (item.label || item.id) : selectedHotspotId;

    showCustomConfirm({
      title: "删除热点",
      message: `确定删除热点「${label}」吗？此操作将移除该热点及其子热点。`,
      confirmText: "确认删除",
      isDanger: true,
      onConfirm: () => {
        deleteHotspot(selectedHotspotId);
      }
    });
  });

  addSpecRowBtn.addEventListener("click", () => {
    const row = document.createElement("div");
    row.className = "spec-edit-row";
    row.innerHTML = `
      <input type="text" class="admin-input spec-key" placeholder="参数名 (如 Engine)">
      <input type="text" class="admin-input spec-val" placeholder="参数值 (如 3.0L V6)">
      <button type="button" class="btn-remove-spec" title="删除此规格">✕</button>
    `;
    row.querySelector(".btn-remove-spec").addEventListener("click", () => {
      row.remove();
      setUnsaved(true);
    });
    specsEditorList.appendChild(row);
    setUnsaved(true);
  });

  // Media preview sync
  forwardVideoInput.addEventListener("input", () => {
    forwardVideoPreview.src = forwardVideoInput.value.trim();
    setUnsaved(true);
  });
  reverseVideoInput.addEventListener("input", () => {
    reverseVideoPreview.src = reverseVideoInput.value.trim();
    setUnsaved(true);
  });
  detailImageInput.addEventListener("input", () => {
    detailImagePreview.src = detailImageInput.value.trim();
    setUnsaved(true);
  });

  // File Upload Handlers
  quickMainImageUpload.addEventListener("change", () => {
    handleFileUpload(quickMainImageUpload, (url) => {
      currentConfig.mainImage = url;
      mainImageUrlInput.value = url;
      mainImagePreview.src = url;
      renderCanvas();
    });
  });

  mainImageFileUpload.addEventListener("change", () => {
    handleFileUpload(mainImageFileUpload, (url) => {
      currentConfig.mainImage = url;
      mainImageUrlInput.value = url;
      mainImagePreview.src = url;
      renderCanvas();
    });
  });

  forwardVideoUpload.addEventListener("change", () => {
    handleFileUpload(forwardVideoUpload, (url) => {
      forwardVideoInput.value = url;
      forwardVideoPreview.src = url;
    });
  });

  reverseVideoUpload.addEventListener("change", () => {
    handleFileUpload(reverseVideoUpload, (url) => {
      reverseVideoInput.value = url;
      reverseVideoPreview.src = url;
    });
  });

  detailImageUpload.addEventListener("change", () => {
    handleFileUpload(detailImageUpload, (url) => {
      detailImageInput.value = url;
      detailImagePreview.src = url;
    });
  });

  // Vehicle settings tab button
  saveVehicleSettingsBtn.addEventListener("click", applyVehicleSettings);

  // Preset buttons
  document.querySelectorAll("[data-preset]").forEach(btn => {
    btn.addEventListener("click", () => addPresetHotspot(btn.dataset.preset));
  });

  // Arrow keys to nudge selected hotspot position on canvas
  window.addEventListener("keydown", (e) => {
    if (currentMode !== "edit" || !selectedHotspotId) return;
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable)) {
      return;
    }

    const step = e.shiftKey ? 2.0 : 0.5;
    const item = currentConfig.hotspots.find(h => h.id === selectedHotspotId);
    if (!item) return;

    let curX = parseFloat(item.x) || 50;
    let curY = parseFloat(item.y) || 50;
    let handled = false;

    if (e.key === "ArrowLeft") {
      curX = Math.max(1, curX - step);
      handled = true;
    } else if (e.key === "ArrowRight") {
      curX = Math.min(99, curX + step);
      handled = true;
    } else if (e.key === "ArrowUp") {
      curY = Math.max(1, curY - step);
      handled = true;
    } else if (e.key === "ArrowDown") {
      curY = Math.min(99, curY + step);
      handled = true;
    }

    if (handled) {
      e.preventDefault();
      item.x = `${curX.toFixed(1)}%`;
      item.y = `${curY.toFixed(1)}%`;
      const pin = adminHotspotsLayer.querySelector(`[data-id="${item.id}"]`);
      if (pin) {
        pin.style.left = item.x;
        pin.style.top = item.y;
      }
      coordXInput.value = curX.toFixed(1);
      coordXRange.value = curX.toFixed(1);
      coordYInput.value = curY.toFixed(1);
      coordYRange.value = curY.toFixed(1);
      canvasCoordsBadge.textContent = `X: ${item.x} · Y: ${item.y}`;
      setUnsaved(true);
    }
  });

  // JSON Tab Actions
  copyJsonBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(jsonConfigTextarea.value);
    showToast("JSON 配置已复制到剪贴板！", "success");
  });

  applyJsonBtn.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(jsonConfigTextarea.value);
      if (parsed && Array.isArray(parsed.hotspots)) {
        currentConfig = parsed;
        renderCanvas();
        renderHotspotsStrip();
        if (currentConfig.hotspots.length > 0) {
          selectHotspot(currentConfig.hotspots[0].id);
        }
        syncVehicleSettingsTab();
        setUnsaved(true);
        showToast("已成功应用 JSON 配置！", "success");
      } else {
        showToast("JSON 缺少 hotspots 数组", "error");
      }
    } catch (e) {
      showToast("JSON 语法解析错误，请检查格式", "error");
    }
  });

  // Global Header Actions
  saveConfigBtn.addEventListener("click", saveAllConfig);
  resetConfigBtn.addEventListener("click", resetToDefaults);
  exportConfigBtn.addEventListener("click", exportConfigJSON);

  // Import Dialog
  importConfigBtn.addEventListener("click", () => {
    importJsonTextarea.value = "";
    importDialog.showModal();
  });
  closeImportDialogBtn.addEventListener("click", () => importDialog.close());
  cancelImportBtn.addEventListener("click", () => importDialog.close());

  importJsonFileInput.addEventListener("change", () => {
    const file = importJsonFileInput.files && importJsonFileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        importJsonTextarea.value = reader.result;
      };
      reader.readAsText(file);
    }
  });

  confirmImportBtn.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(importJsonTextarea.value.trim());
      if (parsed && Array.isArray(parsed.hotspots)) {
        currentConfig = parsed;
        renderCanvas();
        renderHotspotsStrip();
        if (currentConfig.hotspots.length > 0) {
          selectHotspot(currentConfig.hotspots[0].id);
        }
        syncVehicleSettingsTab();
        setUnsaved(true);
        importDialog.close();
        showToast("配置已成功导入！请点击「保存发布」生效。", "success");
      } else {
        showToast("导入的 JSON 格式不完整", "error");
      }
    } catch (e) {
      showToast("导入失败: 无法解析 JSON 内容", "error");
    }
  });
}

// ==========================================================================
// Utilities
// ==========================================================================

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `admin-toast ${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "⚠"}</span>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Run on load
document.addEventListener("DOMContentLoaded", initAdminStudio);
