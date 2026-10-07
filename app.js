const vehicles = [
  {
    id:'audi-s5', brand:'Audi', model:'S5 Avant', body:'Wagon', year:2025, mileage:'12,500 km (demo)', power:'349 hp (demo)', engine:'3.0L TFSI V6 Turbo', torque:'500 Nm (demo)', color:'Daytona Grey', price:'RM 438,000', image:'assets/audi-s5/main-car-16x9.jpg', sub:'Interactive photo and video demo',
    actualPage:'audi.html',
    features:{
      engine:['Engine bay','Open the dedicated Audi page to inspect the real photographed engine bay.'],
      brakes:['S brake hardware','The real photographed car shows a red S-branded front brake caliper.'],
      aero:['Avant exterior','Explore the photographed exterior on the dedicated vehicle page.'],
      interior:['S sport cabin','The actual right-hand-drive cockpit and S sport seats are shown on the Audi page.'],
      hud:['Driver display','The photographed vehicle has a digital instrument cluster; other display equipment remains to verify.']
    },
    specs:{
      'Powertrain':[['Engine','3.0L TFSI V6 Turbo'],['Power','349 hp (demo)'],['Torque','500 Nm (demo)'],['Drive','Quattro AWD (demo)']],
      'Exterior & chassis':[['Colour','Daytona Grey'],['Wheels','20-inch S-design alloy'],['Tyres','255/35 R20 (demo)'],['Brakes','Red S-branded front caliper visible'],['Aero kit','S-line Avant aero']],
      'Interior & equipment':[['Interior','Black S Sport Leather'],['Seats','S sport contoured seats'],['Speakers','Bang & Olufsen sound system'],['HUD','Audi Virtual Cockpit (demo)']],
      'Vehicle status':[['Model','Audi S5 Avant'],['Year','To verify'],['Mileage','To verify'],['Price','RM 438,000 (demo)']],
      'Observed':[['Steering','Right-hand drive'],['Audio','Bang & Olufsen branding visible'],['Brakes','Red S-branded front caliper visible'],['Cargo','Powered tailgate controls visible']]
    }
  },
  {
    id: 'alphard-z', price:'RM 329,000', image:'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80', brand: 'Toyota', model: 'Alphard Z', body: 'MPV', year: 2024, mileage: '8,240 km', power: '205 hp', engine: '2.5L Hybrid', torque: '250 Nm', color: 'Pearl White',
    cardA:'#748a99', cardB:'#314754', sub:'Executive lounge · Japan import concept',
    features:{
      engine:['Hybrid powertrain','Demo data: a quiet 2.5L hybrid setup is highlighted here to show how engine information can be explained in plain language.'],
      brakes:['4-piston front brakes','A performance-focused brake callout can surface caliper specification, rotor size and daily-driving benefit.'],
      aero:['Premium aero package','This point can explain bumper design, side skirts and roof spoiler without forcing customers to read a long spec sheet.'],
      interior:['Executive captain seats','Interior interaction can surface seat colour, materials, seat functions and cabin configuration.'],
      hud:['Head-up display','HUD information can be explained where the customer expects it: directly around the driver area.']
    },
    specs:{
      'Powertrain':[['Engine','2.5L Hybrid (demo)'],['Power','205 hp (demo)'],['Torque','250 Nm (demo)'],['Drive','FWD (demo)']],
      'Exterior & chassis':[['Colour','Pearl White'],['Wheels','19-inch multi-spoke'],['Tyres','225/55 R19'],['Brakes','4-piston front (demo)'],['Aero kit','Executive aero package']],
      'Interior & equipment':[['Interior','Warm Sand'],['Seats','Executive captain seats'],['Speakers','14-speaker premium audio'],['HUD','Equipped (demo)']]
    }
  },
  {
    id:'rx500h', price:'RM 468,000', image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80', brand:'Lexus', model:'RX 500h F Sport', body:'SUV', year:2024, mileage:'11,600 km', power:'371 hp', engine:'2.4L Turbo Hybrid', torque:'460 Nm', color:'Sonic Chrome',
    cardA:'#6b7f83', cardB:'#25363b', sub:'F Sport · Japan import concept',
    features:{
      engine:['Turbo hybrid system','A visual hotspot can explain how turbo and hybrid assistance work together, using demo figures and simple language.'],
      brakes:['6-piston front calipers','A brake hotspot can help customers understand hardware that is otherwise buried in a specification table.'],
      aero:['F Sport exterior','Customers can discover grille treatment, bumper shape and lower aero pieces directly on the vehicle image.'],
      interior:['F Sport cabin','Seat colour, trim, audio and comfort equipment can be explored from one cabin hotspot.'],
      hud:['Wide HUD','The interface can show driver-display equipment without requiring a separate brochure.']
    },
    specs:{
      'Powertrain':[['Engine','2.4L Turbo Hybrid (demo)'],['Power','371 hp (demo)'],['Torque','460 Nm (demo)'],['Drive','AWD (demo)']],
      'Exterior & chassis':[['Colour','Sonic Chrome'],['Wheels','21-inch F Sport'],['Tyres','235/50 R21'],['Brakes','6-piston front (demo)'],['Aero kit','F Sport package']],
      'Interior & equipment':[['Interior','Dark Rose'],['Seats','F Sport leather'],['Speakers','21-speaker premium audio'],['HUD','Wide HUD (demo)']]
    }
  },
  {
    id:'gtr-premium', price:'RM 598,000', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', brand:'Nissan', model:'GT-R Premium', body:'Coupe', year:2023, mileage:'18,900 km', power:'565 hp', engine:'3.8L Twin-Turbo V6', torque:'633 Nm', color:'Stealth Grey',
    cardA:'#59676d', cardB:'#1e272b', sub:'Performance coupe · Japan import concept',
    features:{
      engine:['Twin-turbo V6','The hotspot format is ideal for explaining engine layout, output and why a customer might care about it.'],
      brakes:['Performance braking','Caliper piston count, rotor size and cooling can be revealed with one tap near the wheel.'],
      aero:['Functional aero','Highlight front splitter, underbody treatment and rear spoiler as customer-readable feature stories.'],
      interior:['Driver-focused cabin','Use the cabin point to reveal seat, trim and sound-system details.'],
      hud:['Driver information','If a car does not have a feature, the same hotspot system can clearly state that instead of hiding it.']
    },
    specs:{
      'Powertrain':[['Engine','3.8L Twin-Turbo V6 (demo)'],['Power','565 hp (demo)'],['Torque','633 Nm (demo)'],['Drive','AWD (demo)']],
      'Exterior & chassis':[['Colour','Stealth Grey'],['Wheels','20-inch forged'],['Tyres','Performance set (demo)'],['Brakes','6-piston front / 4 rear'],['Aero kit','Premium aero package']],
      'Interior & equipment':[['Interior','Black / Red'],['Seats','Sport leather'],['Speakers','11-speaker premium audio'],['HUD','Not equipped (demo)']]
    }
  },
  {
    id:'civic-type-r', price:'RM 328,000', image:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80', brand:'Honda', model:'Civic Type R', body:'Sedan', year:2023, mileage:'21,450 km', power:'315 hp', engine:'2.0L Turbo', torque:'420 Nm', color:'Championship White',
    cardA:'#737f86', cardB:'#2f3940', sub:'Performance sedan · Japan import concept',
    features:{
      engine:['2.0L turbo','Customers can tap the engine bay region to understand output, torque and drivetrain at a glance.'],
      brakes:['Track-focused brakes','A wheel-area point makes Brembo-style hardware and cooling easier to discover visually.'],
      aero:['Type R aero','The website can connect wing, diffuser and vent details to their functional role.'],
      interior:['Red sport cabin','Seat colour and driver-focused details can be shown without opening a separate spec PDF.'],
      hud:['Digital driver display','Instrumentation and driver data can be explained as part of the same interactive story.']
    },
    specs:{
      'Powertrain':[['Engine','2.0L Turbo (demo)'],['Power','315 hp (demo)'],['Torque','420 Nm (demo)'],['Drive','FWD (demo)']],
      'Exterior & chassis':[['Colour','Championship White'],['Wheels','19-inch sport'],['Tyres','265/30 R19'],['Brakes','4-piston front (demo)'],['Aero kit','Type R aero']],
      'Interior & equipment':[['Interior','Red / Black'],['Seats','Sport bucket seats'],['Speakers','12-speaker audio'],['HUD','Digital display concept']]
    }
  },
  {
    id:'crown-crossover', price:'RM 278,000', image:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80', brand:'Toyota', model:'Crown Crossover RS', body:'Sedan', year:2022, mileage:'29,800 km', power:'340 hp', engine:'2.4L Turbo Hybrid', torque:'460 Nm', color:'Bi-tone Bronze',
    cardA:'#806e60', cardB:'#392f2a', sub:'Luxury crossover sedan · Japan import concept',
    features:{
      engine:['Turbo hybrid','The powertrain hotspot turns technical information into a short customer-facing explanation.'],
      brakes:['Adaptive braking package','The wheel point can reveal hardware and assist-system context.'],
      aero:['Crossover body form','Aero and styling details can be attached to the exact part of the silhouette.'],
      interior:['Premium cabin','Seat colour, material, audio and comfort features can be grouped into a visual cabin story.'],
      hud:['Driver HUD','A short explanation can show what information the HUD presents and why it is useful.']
    },
    specs:{
      'Powertrain':[['Engine','2.4L Turbo Hybrid (demo)'],['Power','340 hp (demo)'],['Torque','460 Nm (demo)'],['Drive','AWD (demo)']],
      'Exterior & chassis':[['Colour','Bi-tone Bronze'],['Wheels','21-inch alloy'],['Tyres','225/45 R21'],['Brakes','Performance package (demo)'],['Aero kit','Factory styling package']],
      'Interior & equipment':[['Interior','Black / Bronze'],['Seats','Premium leather'],['Speakers','11-speaker premium audio'],['HUD','Equipped (demo)']]
    }
  },
  {
    id:'lm500h', price:'RM 518,000', image:'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80', brand:'Lexus', model:'LM 500h Executive', body:'MPV', year:2024, mileage:'5,950 km', power:'366 hp', engine:'2.4L Turbo Hybrid', torque:'460 Nm', color:'Graphite Black',
    cardA:'#454e55', cardB:'#181d21', sub:'Luxury four-seat MPV · Japan import concept',
    features:{
      engine:['Turbo hybrid AWD','Interactive explanation can show the relationship between engine, electric assistance and driven wheels.'],
      brakes:['Premium brake system','Customers can inspect the wheel area and understand the stopping hardware immediately.'],
      aero:['Executive exterior','Aero and appearance details can be highlighted without turning the page into a brochure.'],
      interior:['Four-seat lounge','The cabin hotspot can reveal seat colour, rear lounge equipment and audio.'],
      hud:['Head-up display','A driver-position hotspot can explain HUD availability and key information.']
    },
    specs:{
      'Powertrain':[['Engine','2.4L Turbo Hybrid (demo)'],['Power','366 hp (demo)'],['Torque','460 Nm (demo)'],['Drive','AWD (demo)']],
      'Exterior & chassis':[['Colour','Graphite Black'],['Wheels','19-inch luxury alloy'],['Tyres','225/55 R19'],['Brakes','4-piston front (demo)'],['Aero kit','Executive styling']],
      'Interior & equipment':[['Interior','Solace Cream'],['Seats','Four-seat executive lounge'],['Speakers','23-speaker premium audio'],['HUD','Equipped (demo)']]
    }
  }
];

const inventoryGrid = document.getElementById('inventoryGrid');
const brandFilter = document.getElementById('brandFilter');
const bodyFilter = document.getElementById('bodyFilter');
const yearFilter = document.getElementById('yearFilter');
const sortFilter = document.getElementById('sortFilter');
const searchFilter = document.getElementById('searchFilter');
const mileageFilter = document.getElementById('mileageFilter');
const powerFilter = document.getElementById('powerFilter');
const resultCount = document.getElementById('resultCount');
const vehicleDialog = document.getElementById('vehicleDialog');
const demoDialog = document.getElementById('demoDialog');

// Compare Elements
const compareDialog = document.getElementById('compareDialog');
const compareBody = document.getElementById('compareBody');
const closeCompareDialog = document.getElementById('closeCompareDialog');
const cmpViewAll = document.getElementById('cmpViewAll');
const cmpViewDiff = document.getElementById('cmpViewDiff');

const compareDock = document.getElementById('compareDock');
const compareDockSlots = document.getElementById('compareDockSlots');
const compareDockStatus = document.getElementById('compareDockStatus');
const compareDockClear = document.getElementById('compareDockClear');
const compareDockLaunch = document.getElementById('compareDockLaunch');

const filterCompareBtn = document.getElementById('filterCompareBtn');
const filterCompareBadge = document.getElementById('filterCompareBadge');
const navCompareBtn = document.getElementById('navCompareBtn');
const navCompareBadge = document.getElementById('navCompareBadge');
const compareToast = document.getElementById('compareToast');
const compareToastMsg = document.getElementById('compareToastMsg');

let currentVehicle = vehicles[0];
let compareList = [];
let compareViewMode = 'all';
let toastTimer = null;

function parseNumber(str) {
  if (!str) return 0;
  const match = String(str).replace(/,/g, '').match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[0]) : 0;
}

function carMarkup() {
  return `<div class="car-visual" aria-hidden="true"><div class="shadow"></div><div class="car-shell"><div class="window window-a"></div><div class="window window-b"></div><div class="front-light"></div><div class="rear-light"></div><div class="wheel wheel-front"><i></i></div><div class="wheel wheel-rear"><i></i></div><div class="body-line"></div></div></div>`;
}

function showCompareToast(msg) {
  if (!compareToast) return;
  compareToastMsg.textContent = msg;
  compareToast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    compareToast.classList.remove('visible');
  }, 2600);
}

function toggleCompare(id) {
  const index = compareList.indexOf(id);
  if (index !== -1) {
    compareList.splice(index, 1);
  } else {
    if (compareList.length >= 2) {
      showCompareToast('Maximum 2 vehicles can be compared. Deselect one first.');
      return;
    }
    compareList.push(id);
    if (compareList.length === 2) {
      showCompareToast('2 vehicles selected! Click Compare to view side-by-side.');
    }
  }
  updateCompareUI();
}

function clearCompare() {
  compareList = [];
  updateCompareUI();
}

function updateCompareUI() {
  // Update inventory cards
  if (inventoryGrid) {
    inventoryGrid.querySelectorAll('.car-card').forEach(card => {
      const id = card.dataset.id;
      const isSelected = compareList.includes(id);
      card.classList.toggle('is-compared', isSelected);
      const btn = card.querySelector('.card-compare-btn');
      if (btn) {
        btn.classList.toggle('active', isSelected);
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        btn.innerHTML = `<span class="btn-icon">${isSelected ? '✓' : '＋'}</span><span>${isSelected ? 'In Compare' : 'Compare'}</span>`;
      }
      const thumbBtn = card.querySelector('.thumb-compare-btn');
      if (thumbBtn) {
        thumbBtn.classList.toggle('active', isSelected);
        thumbBtn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        thumbBtn.title = isSelected ? 'Remove from compare queue' : 'Add to compare queue';
        thumbBtn.innerHTML = `<span class="thumb-compare-icon">${isSelected ? '✓' : '⇄'}</span><span>${isSelected ? 'Comparing' : 'Compare'}</span>`;
      }
    });
  }

  // Update filter bar and nav header buttons
  if (filterCompareBadge) {
    filterCompareBadge.textContent = `${compareList.length}/2`;
  }
  if (filterCompareBtn) {
    filterCompareBtn.classList.toggle('ready', compareList.length === 2);
  }
  if (navCompareBadge) {
    navCompareBadge.textContent = `${compareList.length}/2`;
  }
  if (navCompareBtn) {
    navCompareBtn.classList.toggle('ready', compareList.length === 2);
  }

  // Update floating dock
  if (!compareDock) return;
  if (compareList.length === 0) {
    compareDock.classList.remove('visible');
  } else {
    compareDock.classList.add('visible');
    const v1 = vehicles.find(v => v.id === compareList[0]);
    const v2 = vehicles.find(v => v.id === compareList[1]);

    if (compareList.length === 1) {
      if (compareDockStatus) compareDockStatus.textContent = '1 of 2 selected · Choose 1 more car';
      if (compareDockLaunch) {
        compareDockLaunch.disabled = true;
        compareDockLaunch.innerHTML = `<span>Compare (1/2)</span><span class="dock-arrow">→</span>`;
      }
    } else {
      if (compareDockStatus) compareDockStatus.textContent = '2 of 2 selected · Ready to benchmark';
      if (compareDockLaunch) {
        compareDockLaunch.disabled = false;
        compareDockLaunch.innerHTML = `<span>Compare Now</span><span class="dock-arrow">→</span>`;
      }
    }

    function renderSlot(v, slotNum) {
      if (!v) {
        return `<div class="dock-slot empty">
          <span>Select 0${slotNum} vehicle</span>
        </div>`;
      }
      return `<div class="dock-slot filled">
        <div class="dock-slot-thumb" style="--card-a:${v.cardA || '#61727c'};--card-b:${v.cardB || '#202a30'}">
          ${v.image ? `<img src="${v.image}" alt="${v.brand} ${v.model}" />` : carMarkup()}
        </div>
        <div class="dock-slot-info">
          <strong>${v.brand} ${v.model}</strong>
          <span>${v.price || 'Demo price'}</span>
        </div>
        <button type="button" class="dock-slot-remove" data-remove-compare="${v.id}" aria-label="Remove ${v.brand} ${v.model} from comparison">×</button>
      </div>`;
    }

    if (compareDockSlots) {
      compareDockSlots.innerHTML = `
        ${renderSlot(v1, 1)}
        <span class="dock-vs">VS</span>
        ${renderSlot(v2, 2)}
      `;

      compareDockSlots.querySelectorAll('[data-remove-compare]').forEach(b => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleCompare(b.dataset.removeCompare);
        });
      });
    }
  }
}

function renderInventory() {
  const minYear = yearFilter.value === 'all' ? 0 : Number(yearFilter.value);
  let filtered = vehicles.filter(v =>
    (brandFilter.value === 'all' || v.brand === brandFilter.value) &&
    (bodyFilter.value === 'all' || v.body === bodyFilter.value) &&
    v.year >= minYear &&
    (!searchFilter.value.trim() || (v.brand + ' ' + v.model).toLowerCase().includes(searchFilter.value.trim().toLowerCase())) &&
    (mileageFilter.value === 'all' || parseNumber(v.mileage) <= Number(mileageFilter.value)) &&
    (powerFilter.value === 'all' || parseNumber(v.power) >= Number(powerFilter.value))
  );

  const sortBy = sortFilter ? sortFilter.value : 'default';
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => parseNumber(a.price) - parseNumber(b.price));
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => parseNumber(b.price) - parseNumber(a.price));
  } else if (sortBy === 'year-desc') {
    filtered.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
  } else if (sortBy === 'year-asc') {
    filtered.sort((a, b) => Number(a.year || 0) - Number(b.year || 0));
  }

  resultCount.textContent = `${filtered.length} demo vehicle${filtered.length === 1 ? '' : 's'}`;
  if (!filtered.length) {
    inventoryGrid.innerHTML = '<div class="inventory-empty"><h3>No cars match these filters</h3><p>Try a different model, or clear the filters to see all demo vehicles.</p><button type="button" class="primary-button" id="emptyReset">Clear all filters</button></div>';
    document.getElementById('emptyReset').addEventListener('click', resetInventoryFilters);
    return;
  }
  inventoryGrid.innerHTML = filtered.map(v => {
    const isCompared = compareList.includes(v.id);
    return `
    <article class="car-card ${isCompared ? 'is-compared' : ''}" tabindex="0" role="button" data-id="${v.id}" aria-label="Open ${v.brand} ${v.model} demo details">
      <div class="card-visual" style="--card-a:${v.cardA || '#61727c'};--card-b:${v.cardB || '#202a30'}">
        ${v.image ? `<img class="card-photo" src="${v.image}" alt="${v.brand} ${v.model} demo vehicle image" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><div class="card-photo-fallback" style="display:none">${carMarkup()}</div>` : carMarkup()}
        <button type="button" class="thumb-compare-btn ${isCompared ? 'active' : ''}" data-compare-id="${v.id}" aria-pressed="${isCompared}" aria-label="${isCompared ? 'Remove ' + v.brand + ' ' + v.model + ' from compare queue' : 'Add ' + v.brand + ' ' + v.model + ' to compare queue'}" title="${isCompared ? 'Remove from compare queue' : 'Add to compare queue'}">
          <span class="thumb-compare-icon">${isCompared ? '✓' : '⇄'}</span>
          <span>${isCompared ? 'Comparing' : 'Compare'}</span>
        </button>
      </div>
      <div class="card-info">
        <div class="card-top">
          <h3>${v.brand}<br>${v.model}</h3>
          <div class="card-meta">
            <span class="card-year">${v.year}</span>
            <strong class="card-price">${v.price || 'Price on request'}</strong>
          </div>
        </div>
        <p class="card-sub">${v.sub}</p>
        <div class="card-specs">
          <div><small>Mileage</small><strong>${v.mileage}</strong></div>
          <div><small>Engine</small><strong>${v.engine}</strong></div>
          <div><small>Power</small><strong>${v.power}</strong></div>
        </div>
        <div class="card-footer-row">
          <span class="card-open-link">Details <span>→</span></span>
          <button type="button" class="card-compare-btn ${isCompared ? 'active' : ''}" data-compare-id="${v.id}" aria-pressed="${isCompared}" aria-label="${isCompared ? 'Remove ' + v.brand + ' ' + v.model + ' from compare' : 'Compare ' + v.brand + ' ' + v.model}">
            <span class="btn-icon">${isCompared ? '✓' : '＋'}</span>
            <span>${isCompared ? 'In Compare' : 'Compare'}</span>
          </button>
        </div>
      </div>
    </article>`;
  }).join('');

  inventoryGrid.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-compare-btn') || e.target.closest('.thumb-compare-btn')) return;
      openVehicle(card.dataset.id);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('.card-compare-btn') || e.target.closest('.thumb-compare-btn')) return;
        e.preventDefault();
        openVehicle(card.dataset.id);
      }
    });
  });

  inventoryGrid.querySelectorAll('.card-compare-btn, .thumb-compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCompare(btn.dataset.compareId);
    });
  });
}

function openVehicle(id) {
  currentVehicle = vehicles.find(v => v.id === id) || vehicles[0];
  if (currentVehicle.actualPage) {
    window.location.href = currentVehicle.actualPage;
    return;
  }
  document.getElementById('vehicleMeta').textContent = `${currentVehicle.year} · ${currentVehicle.body.toUpperCase()} · DEMO SPEC`;
  document.getElementById('vehicleTitle').textContent = `${currentVehicle.brand} ${currentVehicle.model}`;
  document.getElementById('vehicleSub').textContent = `${currentVehicle.sub}. All specifications and mileage shown are fictional demonstration data.`;
  document.getElementById('quickSpecs').innerHTML = [
    ['Mileage',currentVehicle.mileage],['Engine',currentVehicle.engine],['Power',currentVehicle.power],['Torque',currentVehicle.torque]
  ].map(([k,v]) => `<div><small>${k}</small><strong>${v}</strong></div>`).join('');
  document.getElementById('specGroups').innerHTML = Object.entries(currentVehicle.specs).map(([group,rows]) => `
    <section class="spec-group"><h4>${group}</h4>${rows.map(([k,v])=>`<div class="spec-row"><span>${k}</span><strong>${v}</strong></div>`).join('')}</section>`).join('');
  document.getElementById('featureTitle').textContent = 'Select a hotspot';
  document.getElementById('featureText').textContent = 'Tap a point on the vehicle to reveal a customer-friendly explanation.';
  document.getElementById('detailCar').style.setProperty('--vehicle-color', currentVehicle.color);
  setGallery('exterior');
  document.querySelectorAll('.detail-hotspot').forEach(h => h.classList.remove('active'));
  vehicleDialog.showModal();
  document.body.style.overflow='hidden';
}

function closeVehicle(){
  if (vehicleDialog.open) vehicleDialog.close();
  document.body.style.overflow='';
}

document.getElementById('closeDialog').addEventListener('click', closeVehicle);
vehicleDialog.addEventListener('click', e => { if (e.target === vehicleDialog) closeVehicle(); });
vehicleDialog.addEventListener('cancel', e => { e.preventDefault(); closeVehicle(); });

document.querySelectorAll('.detail-hotspot').forEach(h => {
  h.addEventListener('click', () => {
    const key = h.dataset.feature;
    const [title,text] = currentVehicle.features[key];
    document.getElementById('featureTitle').textContent = title;
    document.getElementById('featureText').textContent = text;
    document.querySelectorAll('.detail-hotspot').forEach(x => x.classList.toggle('active', x === h));
  });
});

function setGallery(mode){
  const overlay = document.getElementById('galleryOverlay');
  const carWrap = document.getElementById('detailCarWrap');
  document.querySelectorAll('[data-gallery]').forEach(btn => btn.classList.toggle('active',btn.dataset.gallery===mode));
  if(mode==='exterior'){
    overlay.className='gallery-overlay'; overlay.innerHTML=''; carWrap.style.opacity='1'; carWrap.style.transform='scale(1)';
  } else if(mode==='interior'){
    carWrap.style.opacity='0'; carWrap.style.transform='scale(.96)';
    overlay.innerHTML='<div class="interior-visual" aria-label="Stylized demo interior visualization"></div>'; overlay.className='gallery-overlay visible';
  } else {
    carWrap.style.opacity='0'; carWrap.style.transform='scale(.96)';
    overlay.innerHTML='<div class="detail-visual"><div>Wheel + Brake</div><div>Headlamp</div><div>Seat Finish</div><div>HUD + Audio</div></div>'; overlay.className='gallery-overlay visible';
  }
}
document.querySelectorAll('[data-gallery]').forEach(btn => btn.addEventListener('click',()=>setGallery(btn.dataset.gallery)));

[brandFilter, bodyFilter, yearFilter, sortFilter, mileageFilter, powerFilter].forEach(el => el && el.addEventListener('change', renderInventory));
searchFilter.addEventListener('input', renderInventory);
function resetInventoryFilters() {
  searchFilter.value = '';
  mileageFilter.value = 'all';
  powerFilter.value = 'all';
  brandFilter.value = 'all';
  bodyFilter.value = 'all';
  yearFilter.value = 'all';
  if (sortFilter) sortFilter.value = 'default';
  renderInventory();
}
document.getElementById('resetFilters').addEventListener('click', resetInventoryFilters);

document.querySelectorAll('[data-demo-action]').forEach(btn=>btn.addEventListener('click',()=>demoDialog.showModal()));
document.querySelectorAll('[data-close-demo]').forEach(btn=>btn.addEventListener('click',()=>demoDialog.close()));
demoDialog.addEventListener('click',e=>{ if(e.target===demoDialog) demoDialog.close(); });

// ==========================================================================
// Compare Modal Implementation
// ==========================================================================

function getSpecRow(v, groupName, keyName, fallback = '—') {
  if (!v || !v.specs) return fallback;
  const grp = v.specs[groupName];
  if (!grp) return fallback;
  const row = grp.find(r => r[0].toLowerCase() === keyName.toLowerCase());
  return row ? row[1] : fallback;
}

function renderCompareModalContent() {
  if (compareList.length < 2) {
    if (compareList.length === 1) {
      const other = vehicles.find(v => v.id !== compareList[0]) || vehicles[1];
      compareList.push(other.id);
    } else {
      compareList = [vehicles[0].id, vehicles[1].id];
    }
    updateCompareUI();
  }

  const v1 = vehicles.find(v => v.id === compareList[0]) || vehicles[0];
  const v2 = vehicles.find(v => v.id === compareList[1]) || vehicles[1];

  function vehicleSelectOptions(currentId) {
    return vehicles.map(v => `
      <option value="${v.id}" ${v.id === currentId ? 'selected' : ''}>
        ${v.brand} ${v.model} (${v.year})
      </option>
    `).join('');
  }

  function vehicleCardMarkup(v, slotIndex) {
    return `
      <div class="compare-vehicle-card">
        <div class="compare-select-wrap">
          <span class="compare-select-label">Vehicle 0${slotIndex + 1}</span>
          <select class="compare-vehicle-select" data-slot="${slotIndex}" aria-label="Change vehicle 0${slotIndex + 1}">
            ${vehicleSelectOptions(v.id)}
          </select>
        </div>

        <div class="compare-vehicle-media" style="--card-a:${v.cardA || '#61727c'};--card-b:${v.cardB || '#202a30'}">
          ${v.image ? `<img src="${v.image}" alt="${v.brand} ${v.model}">` : carMarkup()}
        </div>

        <div class="compare-card-details">
          <span class="card-kicker">${v.brand} · ${v.body} · ${v.year}</span>
          <h3>${v.brand} ${v.model}</h3>
          <div class="compare-card-price">${v.price || 'Price on request'}</div>
          <p class="compare-card-sub">${v.sub}</p>
        </div>

        <div class="compare-card-actions">
          <button type="button" class="compare-card-btn-view" data-view-id="${v.id}">
            ${v.actualPage ? 'Audi Experience →' : 'View Details →'}
          </button>
          <button type="button" class="compare-card-btn-enquire" data-demo-action>
            Enquire
          </button>
        </div>
      </div>
    `;
  }

  const groups = [
    {
      title: 'Pricing & Overview',
      rows: [
        { label: 'Demo Price', v1: v1.price || '—', v2: v2.price || '—', compareType: 'price' },
        { label: 'Model Year', v1: String(v1.year || 'To verify'), v2: String(v2.year || 'To verify'), compareType: 'year' },
        { label: 'Body Style', v1: v1.body, v2: v2.body },
        { label: 'Verified Mileage', v1: v1.mileage, v2: v2.mileage, compareType: 'mileage' },
        { label: 'Exterior Colour', v1: v1.color, v2: v2.color }
      ]
    },
    {
      title: 'Powertrain & Performance',
      rows: [
        { label: 'Engine Configuration', v1: v1.engine, v2: v2.engine },
        { label: 'Maximum Power', v1: v1.power, v2: v2.power, compareType: 'power' },
        { label: 'Peak Torque', v1: v1.torque, v2: v2.torque, compareType: 'torque' },
        { label: 'Drivetrain', v1: getSpecRow(v1, 'Powertrain', 'Drive', 'Quattro / AWD (demo)'), v2: getSpecRow(v2, 'Powertrain', 'Drive', 'AWD (demo)') }
      ]
    },
    {
      title: 'Chassis, Wheels & Brakes',
      rows: [
        { label: 'Wheels', v1: getSpecRow(v1, 'Exterior & chassis', 'Wheels', 'Factory alloy'), v2: getSpecRow(v2, 'Exterior & chassis', 'Wheels', 'Factory alloy') },
        { label: 'Tyre Fitment', v1: getSpecRow(v1, 'Exterior & chassis', 'Tyres', 'Performance set'), v2: getSpecRow(v2, 'Exterior & chassis', 'Tyres', 'Performance set') },
        { label: 'Braking Hardware', v1: getSpecRow(v1, 'Exterior & chassis', 'Brakes', 'Performance calipers'), v2: getSpecRow(v2, 'Exterior & chassis', 'Brakes', 'Performance calipers') },
        { label: 'Aero Package', v1: getSpecRow(v1, 'Exterior & chassis', 'Aero kit', 'Factory aero package'), v2: getSpecRow(v2, 'Exterior & chassis', 'Aero kit', 'Factory aero package') }
      ]
    },
    {
      title: 'Interior, Audio & Tech',
      rows: [
        { label: 'Cabin Upholstery', v1: getSpecRow(v1, 'Interior & equipment', 'Interior', 'Leather trim'), v2: getSpecRow(v2, 'Interior & equipment', 'Interior', 'Leather trim') },
        { label: 'Seating Layout', v1: getSpecRow(v1, 'Interior & equipment', 'Seats', 'Sport seats'), v2: getSpecRow(v2, 'Interior & equipment', 'Seats', 'Executive seating') },
        { label: 'Premium Sound', v1: getSpecRow(v1, 'Interior & equipment', 'Speakers', 'Premium audio'), v2: getSpecRow(v2, 'Interior & equipment', 'Speakers', 'Premium audio') },
        { label: 'Head-Up Display', v1: getSpecRow(v1, 'Interior & equipment', 'HUD', 'Equipped (demo)'), v2: getSpecRow(v2, 'Interior & equipment', 'HUD', 'Equipped (demo)') }
      ]
    }
  ];

  let groupsMarkup = '';
  groups.forEach(g => {
    let rowsMarkup = '';
    let visibleRowsCount = 0;

    g.rows.forEach(r => {
      const cleanVal1 = String(r.v1 || '—').trim();
      const cleanVal2 = String(r.v2 || '—').trim();
      const isDiff = cleanVal1.toLowerCase() !== cleanVal2.toLowerCase();

      if (compareViewMode === 'diff' && !isDiff) {
        return;
      }
      visibleRowsCount++;

      let tag1 = '';
      let tag2 = '';

      if (isDiff) {
        if (r.compareType === 'power') {
          const num1 = parseNumber(cleanVal1);
          const num2 = parseNumber(cleanVal2);
          if (num1 > 0 && num2 > 0) {
            if (num1 > num2) tag1 = `<span class="advantage-tag">+${num1 - num2} hp</span>`;
            else if (num2 > num1) tag2 = `<span class="advantage-tag">+${num2 - num1} hp</span>`;
          }
        } else if (r.compareType === 'year') {
          const num1 = parseNumber(cleanVal1);
          const num2 = parseNumber(cleanVal2);
          if (num1 > num2) tag1 = `<span class="advantage-tag">Newer</span>`;
          else if (num2 > num1) tag2 = `<span class="advantage-tag">Newer</span>`;
        } else if (r.compareType === 'mileage') {
          const num1 = parseNumber(cleanVal1);
          const num2 = parseNumber(cleanVal2);
          if (num1 > 0 && num2 > 0) {
            if (num1 < num2) tag1 = `<span class="advantage-tag">Lower km</span>`;
            else if (num2 < num1) tag2 = `<span class="advantage-tag">Lower km</span>`;
          }
        }
      }

      rowsMarkup += `
        <div class="compare-row ${isDiff ? 'is-different' : 'is-same'}">
          <div class="compare-label-cell">
            ${isDiff ? '<span class="diff-indicator" title="Specification differs"></span>' : ''}
            <span>${r.label}</span>
          </div>
          <div class="compare-val-cell">
            <strong>${cleanVal1}</strong>
            ${tag1}
          </div>
          <div class="compare-val-cell">
            <strong>${cleanVal2}</strong>
            ${tag2}
          </div>
        </div>
      `;
    });

    if (visibleRowsCount > 0) {
      groupsMarkup += `
        <section class="compare-group">
          <div class="compare-group-header">
            <h4>${g.title}</h4>
            <span>${visibleRowsCount} spec${visibleRowsCount === 1 ? '' : 's'}</span>
          </div>
          <div class="compare-group-body">
            ${rowsMarkup}
          </div>
        </section>
      `;
    }
  });

  if (!groupsMarkup) {
    groupsMarkup = `
      <div style="text-align:center;padding:48px 20px;color:var(--muted)">
        <p>No specification differences found with the current filter.</p>
        <button type="button" class="primary-button" id="resetCompareFilterBtn" style="margin-top:14px">
          Show All Specifications
        </button>
      </div>
    `;
  }

  compareBody.innerHTML = `
    <div class="compare-vehicles-grid">
      ${vehicleCardMarkup(v1, 0)}
      <div class="compare-vs-divider">
        <span class="compare-vs-badge">VS</span>
      </div>
      ${vehicleCardMarkup(v2, 1)}
    </div>

    <div class="compare-table-container">
      ${groupsMarkup}
    </div>
  `;

  compareBody.querySelectorAll('.compare-vehicle-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const slot = Number(sel.dataset.slot);
      const newId = sel.value;
      compareList[slot] = newId;
      updateCompareUI();
      renderCompareModalContent();
    });
  });

  compareBody.querySelectorAll('[data-view-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.viewId;
      closeCompareModal();
      openVehicle(id);
    });
  });

  compareBody.querySelectorAll('[data-demo-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      demoDialog.showModal();
    });
  });

  const resetBtn = document.getElementById('resetCompareFilterBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      compareViewMode = 'all';
      cmpViewAll.classList.add('active');
      cmpViewDiff.classList.remove('active');
      renderCompareModalContent();
    });
  }
}

function openCompareModal() {
  renderCompareModalContent();
  compareDialog.showModal();
  document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
  if (compareDialog.open) {
    compareDialog.close();
  }
  document.body.style.overflow = '';
}

if (closeCompareDialog) {
  closeCompareDialog.addEventListener('click', closeCompareModal);
}
if (compareDialog) {
  compareDialog.addEventListener('click', e => {
    if (e.target === compareDialog) closeCompareModal();
  });
  compareDialog.addEventListener('cancel', e => {
    e.preventDefault();
    closeCompareModal();
  });
}

if (cmpViewAll) {
  cmpViewAll.addEventListener('click', () => {
    compareViewMode = 'all';
    cmpViewAll.classList.add('active');
    cmpViewAll.setAttribute('aria-selected', 'true');
    cmpViewDiff.classList.remove('active');
    cmpViewDiff.setAttribute('aria-selected', 'false');
    renderCompareModalContent();
  });
}
if (cmpViewDiff) {
  cmpViewDiff.addEventListener('click', () => {
    compareViewMode = 'diff';
    cmpViewDiff.classList.add('active');
    cmpViewDiff.setAttribute('aria-selected', 'true');
    cmpViewAll.classList.remove('active');
    cmpViewAll.setAttribute('aria-selected', 'false');
    renderCompareModalContent();
  });
}

if (compareDockClear) {
  compareDockClear.addEventListener('click', clearCompare);
}
if (compareDockLaunch) {
  compareDockLaunch.addEventListener('click', openCompareModal);
}

if (filterCompareBtn) {
  filterCompareBtn.addEventListener('click', () => {
    openCompareModal();
  });
}

if (navCompareBtn) {
  navCompareBtn.addEventListener('click', () => {
    openCompareModal();
  });
}


const heroData = {
  Powertrain:['Powertrain','Reveal engine type, output, torque and drivetrain through a hotspot instead of a dense brochure.'],
  Brakes:['Braking hardware','Tap near the wheel to explain caliper specification, rotor setup and why it matters.'],
  Cabin:['Cabin equipment','Explore seat colour, sound system, HUD and comfort equipment directly from the vehicle.']
};
document.querySelectorAll('[data-hero-hotspot]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-hero-hotspot]').forEach(x=>x.classList.toggle('active',x===btn));
  const [title,text]=heroData[btn.dataset.heroHotspot];
  const info=document.getElementById('stageInfo');
  info.innerHTML=`<small>INTERACTIVE PREVIEW</small><strong>${title}</strong><p>${text}</p>`;
}));




const showroomStage = document.getElementById('showroomStage');
const showroomImage = document.getElementById('showroomImage');
const showroomImageWrap = document.getElementById('showroomImageWrap');
const showroomThumbs = document.getElementById('showroomThumbs');
const showroomName = document.getElementById('showroomName');
const showroomMeta = document.getElementById('showroomMeta');
const showroomSub = document.getElementById('showroomSub');
const showroomPrice = document.getElementById('showroomPrice');
const showroomCounter = document.getElementById('showroomCounter');
const showroomSpecs = document.getElementById('showroomSpecs');
const showroomSpecNote = document.getElementById('showroomSpecNote');
const showroomCta = document.getElementById('showroomCta');
let showroomIndex = 0;
let showroomBusy = false;

function showroomImageMarkup(v){
  return v.image
    ? `<img src="${v.image}" alt="${v.brand} ${v.model}" loading="eager">`
    : '<div class="showroom-generated-car">'+carMarkup()+'</div>';
}

function renderShowroomThumbs(){
  showroomThumbs.innerHTML = vehicles.map((v,i)=>`
    <button type="button" class="showroom-thumb ${i===showroomIndex?'active':''}" data-showroom-index="${i}" aria-label="Show ${v.brand} ${v.model}">
      ${showroomImageMarkup(v)}
      <span>${v.brand} ${v.model}</span>
    </button>
  `).join('');
  showroomThumbs.querySelectorAll('[data-showroom-index]').forEach(btn=>{
    btn.addEventListener('click',()=>selectShowroomVehicle(Number(btn.dataset.showroomIndex)));
  });
}

function showroomSpecValues(v){
  return [
    ['Year',String(v.year || 'To verify')],
    ['Mileage',v.mileage || 'To verify'],
    ['Engine',v.engine || 'To verify'],
    ['Power',v.power || 'To verify']
  ];
}

function updateShowroomText(v,index){
  showroomName.textContent = v.brand+' '+v.model;
  showroomMeta.textContent = (v.brand+' · '+v.body).toUpperCase();
  showroomSub.textContent = v.sub || 'Demo gallery vehicle';
  showroomPrice.textContent = v.price || 'Price on request';
  showroomCounter.textContent = String(index+1).padStart(2,'0')+' / '+String(vehicles.length).padStart(2,'0');
  showroomSpecNote.textContent = v.actualPage ? 'Demo specifications · confirm before purchase' : 'Fictional demo specifications';
  showroomSpecs.innerHTML = showroomSpecValues(v).map(([k,val])=>`
    <div><small>${k}</small><strong>${val}</strong></div>
  `).join('');
  showroomCta.textContent = v.actualPage ? 'View interactive S5 →' : 'Open demo details →';
}

async function swapShowroomImage(v){
  showroomImageWrap.classList.add('sweeping-out');
  await new Promise(r=>setTimeout(r,280));
  const next = new Image();
  if(v.image){
    next.src=v.image;
    try{ await next.decode(); }catch(e){}
    showroomImage.src=v.image;
    showroomImage.alt=v.brand+' '+v.model;
  } else {
    showroomImage.removeAttribute('src');
    showroomImage.alt='';
  }
  showroomImageWrap.classList.remove('sweeping-out');
  showroomImageWrap.classList.add('sweeping-in');
  requestAnimationFrame(()=>requestAnimationFrame(()=>showroomImageWrap.classList.remove('sweeping-in')));
}

async function selectShowroomVehicle(index,instant=false){
  if(showroomBusy || index===showroomIndex && !instant) return;
  showroomBusy=true;
  showroomIndex=index;
  const v=vehicles[index];
  document.querySelectorAll('.showroom-thumb').forEach((b,i)=>b.classList.toggle('active',i===index));
  if(!instant) await swapShowroomImage(v);
  else {
    showroomImage.src=v.image || '';
    showroomImage.alt=v.brand+' '+v.model;
  }
  updateShowroomText(v,index);
  resetShowroomZoom(false);
  if (v.id === 'audi-s5') {
    if (showroomHotspots) showroomHotspots.style.display = '';
    if (showroomMediaBadge) showroomMediaBadge.textContent = 'SELECTED VEHICLE · 16:9 INTERACTIVE VIEWER';
  } else {
    finishShowroomReturnToOverview();
    if (showroomHotspots) showroomHotspots.style.display = 'none';
    if (showroomMediaBadge) showroomMediaBadge.textContent = 'SELECTED VEHICLE';
  }
  showroomBusy=false;
  document.dispatchEvent(new Event('viewerstatechange'));
}

showroomCta?.addEventListener('click',()=>{
  const v=vehicles[showroomIndex];
  if(v.actualPage) window.location.href=v.actualPage;
  else openVehicle(v.id);
});

// --------------------------------------------------------------------------
// Showroom 16:9 Interactive Car Viewer Controller (Home page #experience)
// --------------------------------------------------------------------------
const showroomMedia = document.getElementById('showroomMedia');
const showroomVideo = document.getElementById('showroomVideo');
const showroomDetailImage = document.getElementById('showroomDetailImage');
const showroomBackBtn = document.getElementById('showroomBackBtn');
const showroomHotspots = document.getElementById('showroomHotspots');
const showroomMediaBadge = document.getElementById('showroomMediaBadge');

// Sub-Hotspot Elements
const showroomSubHotspots = document.getElementById('showroomSubHotspots');
const showroomSubFeatureCard = document.getElementById('showroomSubFeatureCard');
const subFeatureEyebrow = document.getElementById('subFeatureEyebrow');
const subFeatureTitle = document.getElementById('subFeatureTitle');
const subFeatureDesc = document.getElementById('subFeatureDesc');
const subFeatureSpecs = document.getElementById('subFeatureSpecs');
const subFeatureCloseBtn = document.getElementById('subFeatureCloseBtn');

let audiViewerConfig = [
  // --- VIDEO HOTSPOTS ---
  {
    id: "engine",
    label: "Engine",
    type: "video",
    x: "72%",
    y: "46%",
    forwardVideo: "assets/videos/engine_forward.mp4",
    reverseVideo: "assets/videos/engine_reverse_web.mp4"
  },
  {
    id: "interior",
    label: "Interior",
    type: "video",
    x: "54%",
    y: "38%",
    forwardVideo: "assets/videos/interior_forward.mp4",
    reverseVideo: "assets/videos/interior_reverse.mp4"
  },
  {
    id: "boot",
    label: "Boot / Trunk",
    type: "video",
    x: "24%",
    y: "44%",
    forwardVideo: "assets/videos/boot_forward.mp4",
    reverseVideo: "assets/videos/boot_reverse_web.mp4"
  },

  // --- STATIC IMAGE HOTSPOTS ---
  {
    id: "wheel",
    label: "Wheel",
    type: "image",
    x: "78%",
    y: "74%",
    imageSrc: "assets/audi-s5/wheel_16x9.jpg"
  },
  {
    id: "dashboard",
    label: "Dashboard",
    type: "image",
    x: "62%",
    y: "36%",
    imageSrc: "assets/audi-s5/dashboard_16x9.jpg"
  },
  {
    id: "seats",
    label: "Seats",
    type: "image",
    x: "48%",
    y: "42%",
    imageSrc: "assets/audi-s5/seats_16x9.jpg"
  },
  {
    id: "audio",
    label: "Bang & Olufsen",
    type: "image",
    x: "65%",
    y: "46%",
    imageSrc: "assets/audi-s5/audio_16x9.jpg"
  },
  {
    id: "climate",
    label: "Rear climate controls",
    type: "image",
    x: "38%",
    y: "46%",
    imageSrc: "assets/audi-s5/climate_16x9.jpg"
  }
];

const showroomViewerState = {
  mode: 'normal',
  activeItem: null,
  isAnimating: false
};

function preloadShowroomAssets() {
  // Media is loaded only when a customer selects a feature.
}

function findShowroomConfigItem(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().trim();
  return audiViewerConfig.find(c => 
    c.id.toLowerCase() === cleanId ||
    (cleanId === "trunk" && c.id === "boot") ||
    (cleanId === "boot" && c.id === "boot") ||
    (cleanId === "bang-olufsen" && c.id === "audio") ||
    (cleanId === "rear-climate" && c.id === "climate")
  );
}

function renderShowroomHotspots() {
  if (!showroomHotspots) return;
  showroomHotspots.innerHTML = audiViewerConfig.map(item => {
    const isVideo = item.type === 'video';
    return `
      <button class="vehicle-hotspot" 
        type="button" 
        data-id="${item.id}" 
        data-type="${item.type}"
        style="left: ${item.x}; top: ${item.y};" 
        aria-label="Inspect ${item.label} (${isVideo ? 'video animation' : 'detail image'})">
        <span class="hotspot-dot">
          ${isVideo ? '<span class="hotspot-video-badge">▶</span>' : '<span class="hotspot-plus">+</span>'}
        </span>
        <span class="hotspot-label">
          ${item.label}
          <span class="hotspot-label-type">${isVideo ? 'Video' : 'Detail'}</span>
        </span>
      </button>
    `;
  }).join('');

  showroomHotspots.querySelectorAll('.vehicle-hotspot').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const item = findShowroomConfigItem(id);
      if (item) selectShowroomHotspot(item);
    });
  });
}

function selectShowroomHotspot(item) {
  if (showroomViewerState.isAnimating) return;
  if (item.type === 'video') {
    playShowroomForwardVideo(item);
  } else {
    showShowroomStaticImage(item);
  }
}

async function playShowroomForwardVideo(item) {
  if (showroomViewerState.isAnimating || !showroomVideo) return;
  showroomViewerState.isAnimating = true;
  showroomViewerState.activeItem = item;
  showroomViewerState.mode = 'video';

  if (showroomHotspots) showroomHotspots.classList.add('hotspots-hidden');
  if (showroomBackBtn) showroomBackBtn.classList.add('is-visible');
  if (showroomMediaBadge) showroomMediaBadge.textContent = `${item.label.toUpperCase()} · PLAYING VIDEO`;

  showroomVideo.pause();
  showroomVideo.src = item.forwardVideo;
  showroomVideo.currentTime = 0;

  try {
    await showroomVideo.play();
    if (showroomViewerState.activeItem !== item || showroomViewerState.mode !== 'video') return;
    if (showroomMedia) {
      showroomMedia.classList.add('is-video-active');
      showroomMedia.classList.remove('is-image-active');
    }
  } catch (err) {
    if (showroomViewerState.activeItem === item && showroomViewerState.mode === 'video') recoverShowroomVideo();
  }
}

function showShowroomStaticImage(item) {
  if (showroomViewerState.isAnimating || !showroomDetailImage) return;
  showroomViewerState.isAnimating = true;
  showroomViewerState.activeItem = item;
  showroomViewerState.mode = 'image';

  if (showroomHotspots) showroomHotspots.classList.add('hotspots-hidden');
  if (showroomBackBtn) showroomBackBtn.classList.remove('is-visible');
  if (showroomMediaBadge) showroomMediaBadge.textContent = `${item.label.toUpperCase()} · DETAIL`;

  showroomDetailImage.src = item.imageSrc;
  showroomDetailImage.alt = item.label;
  showroomDetailImage.removeAttribute('aria-hidden');

  if (showroomMedia) {
    showroomMedia.classList.add('is-image-active');
    showroomMedia.classList.remove('is-video-active');
  }

  setTimeout(() => {
    if (showroomViewerState.activeItem !== item) return;
    if (showroomBackBtn) {
      showroomBackBtn.classList.add('is-visible');
      showroomBackBtn.focus({ preventScroll: true });
    }
    showroomViewerState.isAnimating = false;
    renderShowroomSubHotspots(item);
  }, 220);
}

function renderShowroomSubHotspots(item) {
  if (!showroomSubHotspots) return;
  showroomSubHotspots.innerHTML = '';
  closeShowroomSubCard();

  if (!item || !Array.isArray(item.subHotspots) || item.subHotspots.length === 0) {
    showroomSubHotspots.style.display = 'none';
    showroomSubHotspots.classList.add('sub-hidden');
    return;
  }

  showroomSubHotspots.style.display = 'block';
  showroomSubHotspots.classList.remove('sub-hidden');

  item.subHotspots.forEach(sub => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'vehicle-sub-hotspot';
    btn.style.left = sub.x;
    btn.style.top = sub.y;
    btn.setAttribute('aria-label', `Inspect ${sub.label}`);

    btn.innerHTML = `
      <span class="sub-hotspot-dot">✦</span>
      <span class="sub-hotspot-label">${escapeHtml(sub.label || sub.id)}</span>
    `;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openShowroomSubCard(sub, btn);
    });

    showroomSubHotspots.appendChild(btn);
  });
}

function openShowroomSubCard(sub, btn) {
  if (!showroomSubFeatureCard) return;
  if (showroomSubHotspots) {
    showroomSubHotspots.querySelectorAll('.vehicle-sub-hotspot').forEach(b => b.classList.remove('is-active'));
  }
  if (btn) btn.classList.add('is-active');

  if (subFeatureEyebrow) subFeatureEyebrow.textContent = sub.eyebrow || 'FEATURE DETAIL';
  if (subFeatureTitle) subFeatureTitle.textContent = sub.title || sub.label || sub.id;
  if (subFeatureDesc) subFeatureDesc.textContent = sub.description || 'Verified equipment detail.';
  if (subFeatureSpecs) {
    subFeatureSpecs.innerHTML = (sub.specs || []).map(([k, v]) => `
      <div class="sub-feature-spec-row">
        <span class="sub-feature-spec-k">${escapeHtml(k)}</span>
        <span class="sub-feature-spec-v">${escapeHtml(v)}</span>
      </div>
    `).join('');
  }
  showroomSubFeatureCard.style.display = 'block';
}

function closeShowroomSubCard() {
  if (showroomSubFeatureCard) showroomSubFeatureCard.style.display = 'none';
  if (showroomSubHotspots) {
    showroomSubHotspots.querySelectorAll('.vehicle-sub-hotspot').forEach(b => b.classList.remove('is-active'));
  }
}

if (subFeatureCloseBtn) {
  subFeatureCloseBtn.addEventListener('click', closeShowroomSubCard);
}

if (showroomVideo) {
  showroomVideo.addEventListener('ended', () => {
    if (showroomViewerState.mode === 'video' && showroomViewerState.activeItem) {
      showroomViewerState.isAnimating = false;
      if (showroomBackBtn) {
        showroomBackBtn.classList.add('is-visible');
        showroomBackBtn.focus({ preventScroll: true });
      }
      if (showroomMediaBadge) showroomMediaBadge.textContent = `${showroomViewerState.activeItem.label.toUpperCase()} · COMPLETED`;
      renderShowroomSubHotspots(showroomViewerState.activeItem);
    } else if (showroomViewerState.mode === 'reverse') {
      finishShowroomReturnToOverview();
    }
  });

  showroomVideo.addEventListener('error', (e) => {
    if (showroomViewerState.mode === 'reverse') finishShowroomReturnToOverview();
    else if (showroomViewerState.mode === 'video') recoverShowroomVideo();
  });
}

function recoverShowroomVideo() {
  const item = showroomViewerState.activeItem;
  if (!item) return;
  showroomVideo.pause();
  showroomViewerState.isAnimating = false;
  const photos = {engine: 'engine', interior: 'dashboard', boot: 'boot'};
  showShowroomStaticImage({...item, type: 'image', imageSrc: 'assets/audi-s5/' + (photos[item.id] || 'main-car-16x9') + (photos[item.id] ? '_16x9.jpg' : '.jpg')});
  document.dispatchEvent(new CustomEvent('viewermediaerror', {detail: 'Video unavailable. Showing a photo instead.'}));
}

async function handleShowroomBack() {
  if (showroomViewerState.isAnimating || showroomViewerState.mode === 'reverse') { finishShowroomReturnToOverview(); return; }
  showroomViewerState.isAnimating = true;
  if (showroomBackBtn) showroomBackBtn.classList.add('is-visible');
  closeShowroomSubCard();
  if (showroomSubHotspots) {
    showroomSubHotspots.innerHTML = '';
    showroomSubHotspots.style.display = 'none';
    showroomSubHotspots.classList.add('sub-hidden');
  }

  const item = showroomViewerState.activeItem;
  if (showroomViewerState.mode === 'video' && item) {
    if (item.reverseVideo && showroomVideo) {
      showroomViewerState.mode = 'reverse';
      if (showroomMediaBadge) showroomMediaBadge.textContent = `REVERSING · RESTORING`;
      showroomVideo.pause();
      showroomVideo.src = item.reverseVideo;
      showroomVideo.currentTime = 0;
      try {
        await showroomVideo.play();
      } catch (err) {
        console.warn('Showroom reverse play notice:', err);
        finishShowroomReturnToOverview();
      }
    } else {
      finishShowroomReturnToOverview();
    }
  } else if (showroomViewerState.mode === 'image') {
    finishShowroomReturnToOverview();
  } else {
    showroomViewerState.isAnimating = false;
  }
}

function finishShowroomReturnToOverview() {
  if (showroomBackBtn) showroomBackBtn.classList.remove('is-visible');
  resetShowroomZoom(true);
  closeShowroomSubCard();
  if (showroomSubHotspots) {
    showroomSubHotspots.innerHTML = '';
    showroomSubHotspots.style.display = 'none';
    showroomSubHotspots.classList.add('sub-hidden');
  }
  if (showroomMedia) showroomMedia.classList.remove('is-video-active', 'is-image-active');
  if (showroomVideo) {
    showroomVideo.pause();
    showroomVideo.removeAttribute('src');
    showroomVideo.load();
  }
  if (showroomDetailImage) {
    showroomDetailImage.removeAttribute('src');
    showroomDetailImage.setAttribute('aria-hidden', 'true');
  }
  if (showroomHotspots) showroomHotspots.classList.remove('hotspots-hidden');
  showroomViewerState.activeItem = null;
  showroomViewerState.mode = 'normal';
  showroomViewerState.isAnimating = false;
  if (showroomMediaBadge) showroomMediaBadge.textContent = `SELECTED VEHICLE · 16:9 INTERACTIVE VIEWER`;
}

if (showroomBackBtn) {
  showroomBackBtn.addEventListener('click', handleShowroomBack);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.querySelector('dialog[open]') && (showroomViewerState.mode === 'video' || showroomViewerState.mode === 'image')) {
    handleShowroomBack();
  }
});

// ==========================================================================
// Pinch-to-Zoom & Pan Gesture Controller for Showroom Viewer Container
// ==========================================================================
const showroomZoomCanvas = document.getElementById('showroomZoomCanvas');
const showroomZoomPill = document.getElementById('showroomZoomPill');
const showroomZoomValue = document.getElementById('showroomZoomValue');

const zoomState = {
  scale: 1,
  panX: 0,
  panY: 0,
  isPinching: false,
  isPanning: false,
  startDistance: 0,
  startScale: 1,
  startPan: { x: 0, y: 0 },
  startTouch: { x: 0, y: 0 },
  lastTapTime: 0
};

function getDistance(t1, t2) {
  return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
}

function updateZoomTransform(animate = false) {
  if (!showroomZoomCanvas) return;
  if (animate) {
    showroomZoomCanvas.classList.add('is-animating-zoom');
    setTimeout(() => showroomZoomCanvas.classList.remove('is-animating-zoom'), 300);
  } else {
    showroomZoomCanvas.classList.remove('is-animating-zoom');
  }

  showroomZoomCanvas.style.transform = `translate3d(${zoomState.panX}px, ${zoomState.panY}px, 0) scale(${zoomState.scale})`;

  if (showroomMedia) {
    showroomMedia.classList.toggle('is-zoomed', zoomState.scale > 1.05);
  }

  if (showroomZoomPill) {
    if (zoomState.scale > 1.05) {
      showroomZoomPill.classList.add('is-visible');
      if (showroomZoomValue) showroomZoomValue.textContent = `${zoomState.scale.toFixed(1)}x`;
    } else {
      showroomZoomPill.classList.remove('is-visible');
    }
  }
}

function clampPan() {
  if (!showroomMedia) return;
  const rect = showroomMedia.getBoundingClientRect();
  const maxPanX = Math.max(0, ((zoomState.scale - 1) * rect.width) / 2);
  const maxPanY = Math.max(0, ((zoomState.scale - 1) * rect.height) / 2);
  zoomState.panX = Math.max(-maxPanX, Math.min(maxPanX, zoomState.panX));
  zoomState.panY = Math.max(-maxPanY, Math.min(maxPanY, zoomState.panY));
}

function resetShowroomZoom(animate = true) {
  zoomState.scale = 1;
  zoomState.panX = 0;
  zoomState.panY = 0;
  zoomState.isPinching = false;
  zoomState.isPanning = false;
  updateZoomTransform(animate);
}

function initShowroomZoom() {
  if (!showroomMedia || !showroomZoomCanvas) return;

  // Touch start: 2 fingers for pinch, 1 finger for pan/double tap
  showroomMedia.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      zoomState.isPinching = true;
      zoomState.isPanning = false;
      zoomState.startDistance = getDistance(e.touches[0], e.touches[1]);
      zoomState.startScale = zoomState.scale;
      e.preventDefault();
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - zoomState.lastTapTime < 320) {
        // Double-tap zoom toggle
        e.preventDefault();
        if (zoomState.scale > 1.1) {
          resetShowroomZoom(true);
        } else {
          const rect = showroomMedia.getBoundingClientRect();
          const touchX = e.touches[0].clientX - rect.left - rect.width / 2;
          const touchY = e.touches[0].clientY - rect.top - rect.height / 2;
          zoomState.scale = 2.2;
          zoomState.panX = -touchX * 0.8;
          zoomState.panY = -touchY * 0.8;
          clampPan();
          updateZoomTransform(true);
        }
        zoomState.lastTapTime = 0;
        return;
      }
      zoomState.lastTapTime = now;

      if (zoomState.scale > 1.05) {
        zoomState.isPanning = true;
        zoomState.startTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        zoomState.startPan = { x: zoomState.panX, y: zoomState.panY };
      }
    }
  }, { passive: false });

  // Touch move: handle pinch scaling and 1-finger panning
  showroomMedia.addEventListener('touchmove', (e) => {
    if (zoomState.isPinching && e.touches.length === 2) {
      e.preventDefault();
      const currentDistance = getDistance(e.touches[0], e.touches[1]);
      if (zoomState.startDistance > 0) {
        const factor = currentDistance / zoomState.startDistance;
        zoomState.scale = Math.min(3.8, Math.max(1, zoomState.startScale * factor));
        clampPan();
        updateZoomTransform(false);
      }
    } else if (zoomState.isPanning && e.touches.length === 1 && zoomState.scale > 1.05) {
      e.preventDefault();
      const dx = e.touches[0].clientX - zoomState.startTouch.x;
      const dy = e.touches[0].clientY - zoomState.startTouch.y;
      zoomState.panX = zoomState.startPan.x + dx;
      zoomState.panY = zoomState.startPan.y + dy;
      clampPan();
      updateZoomTransform(false);
    }
  }, { passive: false });

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      zoomState.isPinching = false;
    }
    if (e.touches.length === 0) {
      zoomState.isPanning = false;
      if (zoomState.scale < 1.05) {
        resetShowroomZoom(true);
      } else {
        clampPan();
        updateZoomTransform(true);
      }
    }
  };

  showroomMedia.addEventListener('touchend', handleTouchEnd);
  showroomMedia.addEventListener('touchcancel', handleTouchEnd);

  // Desktop Mouse Drag to pan when zoomed
  let isMouseDragging = false;
  let mouseStart = { x: 0, y: 0 };
  let mouseStartPan = { x: 0, y: 0 };

  showroomMedia.addEventListener('mousedown', (e) => {
    if (zoomState.scale > 1.05 && e.button === 0 && !e.target.closest('button')) {
      isMouseDragging = true;
      mouseStart = { x: e.clientX, y: e.clientY };
      mouseStartPan = { x: zoomState.panX, y: zoomState.panY };
      showroomMedia.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (isMouseDragging && zoomState.scale > 1.05) {
      const dx = e.clientX - mouseStart.x;
      const dy = e.clientY - mouseStart.y;
      zoomState.panX = mouseStartPan.x + dx;
      zoomState.panY = mouseStartPan.y + dy;
      clampPan();
      updateZoomTransform(false);
    }
  });

  window.addEventListener('mouseup', () => {
    if (isMouseDragging) {
      isMouseDragging = false;
      if (showroomMedia) showroomMedia.style.cursor = '';
    }
  });

  // Trackpad / Ctrl+Wheel zoom
  showroomMedia.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const zoomDelta = -e.deltaY * 0.01;
      zoomState.scale = Math.min(3.8, Math.max(1, zoomState.scale + zoomDelta));
      if (zoomState.scale <= 1.05) {
        resetShowroomZoom(true);
      } else {
        clampPan();
        updateZoomTransform(false);
      }
    }
  }, { passive: false });

  // Floating Reset Button
  if (showroomZoomPill) {
    showroomZoomPill.addEventListener('click', (e) => {
      e.stopPropagation();
      resetShowroomZoom(true);
    });
  }
}

async function loadDynamicShowroomConfig() {
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      if (data) {
        applyShowroomConfig(data);
        return;
      }
    }
  } catch (e) {}

  const local = localStorage.getItem('japan_recon_viewer_config');
  if (local) {
    try {
      const data = JSON.parse(local);
      if (data) applyShowroomConfig(data);
    } catch (e) {}
  }
}

function applyShowroomConfig(data) {
  if (data.mainImage) {
    const audi = vehicles.find(v => v.id === 'audi-s5');
    if (audi) audi.image = data.mainImage;
    if (showroomIndex === 0 && showroomImage) {
      showroomImage.src = data.mainImage;
    }
  }
  if (Array.isArray(data.hotspots) && data.hotspots.length > 0) {
    audiViewerConfig = data.hotspots;
    renderShowroomHotspots();
    preloadShowroomAssets();
    document.dispatchEvent(new Event("viewerconfigchange"));
  }
}

renderShowroomThumbs();
renderShowroomHotspots();
preloadShowroomAssets();
initShowroomZoom();
selectShowroomVehicle(0,true);
loadDynamicShowroomConfig();

renderInventory();

