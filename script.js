const provinces = window.SouthAfricaMap.provinces;
const { t, provinceName, applyTranslations, getLanguage, animalSummary, animalSourceNote } = window.SiteI18n;

const animals = [
  {
    id: "dorper",
    name: "Dorper",
    category: "sheep",
    color: "#ff8b5f",
    provinces: ["WC", "NC", "EC", "FS", "NW"],
    summary: "A hardy meat sheep developed for dry South African conditions and strongly associated with Karoo and inland production regions.",
    sources: [
      {
        title: "SA Stud Book Sheep Breeders' Societies",
        url: "https://www.sastudbook.co.za/dc37/sa-stud-book/breeders'-societies/sheep/sheep-breeders'-societies.html",
        note: "Confirms Dorper as a registered breed society within the South African stud industry."
      },
      {
        title: "DorperSA Breed History",
        url: "https://dorpersa.co.za/breed-history/",
        note: "Describes the breed's South African development and dry-area suitability."
      }
    ]
  },
  {
    id: "merino",
    name: "Merino",
    category: "sheep",
    color: "#4dc3ff",
    provinces: ["WC", "EC", "FS", "NC"],
    summary: "Fine-wool sheep concentrated in the Cape, Free State and central wool-producing provinces.",
    sources: [
      {
        title: "SA Stud Book Sheep Breeders' Societies",
        url: "https://www.sastudbook.co.za/dc37/sa-stud-book/breeders'-societies/sheep/sheep-breeders'-societies.html",
        note: "Lists Merino-linked sheep societies under SA Stud Book."
      },
      {
        title: "South Africa Online Sheep Breeds",
        url: "https://southafrica.co.za/breeds-sheep-meat-south-africa.html",
        note: "Provides South African breed context used for broad province mapping."
      }
    ]
  },
  {
    id: "dohne-merino",
    name: "Dohne Merino",
    category: "sheep",
    color: "#7d95ff",
    provinces: ["EC", "FS", "WC"],
    summary: "Dual-purpose sheep with strong roots in Eastern Cape and major wool-and-meat production belts.",
    sources: [
      {
        title: "SA Stud Book Sheep Breeders' Societies",
        url: "https://www.sastudbook.co.za/dc37/sa-stud-book/breeders'-societies/sheep/sheep-breeders'-societies.html",
        note: "Used as the breed registry anchor."
      },
      {
        title: "South Africa Online Sheep Breeds",
        url: "https://southafrica.co.za/breeds-sheep-meat-south-africa.html",
        note: "Supports province-level wool and meat sheep context."
      }
    ]
  },
  {
    id: "namaqua-afrikaner",
    name: "Namaqua Afrikaner",
    category: "sheep",
    color: "#f4b942",
    provinces: ["NC", "WC"],
    summary: "An arid-zone fat-tailed breed most closely tied to the western and north-western dryland systems.",
    sources: [
      {
        title: "SA Stud Book Sheep Breeders' Societies",
        url: "https://www.sastudbook.co.za/dc37/sa-stud-book/breeders'-societies/sheep/sheep-breeders'-societies.html",
        note: "Provides the official stud-book listing base."
      },
      {
        title: "South Africa Online Sheep Breeds",
        url: "https://southafrica.co.za/breeds-sheep-meat-south-africa.html",
        note: "Used for regional adaptation guidance in dry western provinces."
      }
    ]
  },
  {
    id: "damara",
    name: "Damara",
    category: "sheep",
    color: "#c17eff",
    provinces: ["NC", "WC", "EC", "FS", "NW"],
    summary: "A drought-tolerant sheep suited to extensive and semi-arid grazing areas.",
    sources: [
      {
        title: "SA Stud Book Sheep Breeders' Societies",
        url: "https://www.sastudbook.co.za/dc37/sa-stud-book/breeders'-societies/sheep/sheep-breeders'-societies.html",
        note: "Used for breed verification."
      },
      {
        title: "South Africa Online Sheep Breeds",
        url: "https://southafrica.co.za/breeds-sheep-meat-south-africa.html",
        note: "Used for adaptation-driven provincial mapping."
      }
    ]
  },
  {
    id: "boer-goat",
    name: "Boer Goat",
    category: "goat",
    color: "#ff6b6b",
    provinces: ["EC", "FS", "NC", "NW", "LP", "KZN"],
    summary: "South Africa's flagship meat goat breed with strong Eastern Cape roots and wide production use inland and in the north.",
    sources: [
      {
        title: "DAFF Goat Market Value Chain Profile",
        url: "http://webapps1.daff.gov.za/AmisAdmin/upload/Goat%20Market%20Value%20Chain%20Profile%202022.pdf",
        note: "Confirms Boer goat as a key commercial meat breed in South Africa."
      },
      {
        title: "South Africa Online Goat Breeds",
        url: "https://southafrica.co.za/goat-breeds-in-south-africa.html",
        note: "Provides province cues for major goat production areas."
      }
    ]
  },
  {
    id: "kalahari-red",
    name: "Kalahari Red",
    category: "goat",
    color: "#ff9d4d",
    provinces: ["NC", "NW", "FS", "LP"],
    summary: "A red-coated meat goat adapted to hot, dry grazing conditions in inland provinces.",
    sources: [
      {
        title: "DAFF Goat Market Value Chain Profile",
        url: "http://webapps1.daff.gov.za/AmisAdmin/upload/Goat%20Market%20Value%20Chain%20Profile%202022.pdf",
        note: "Lists Kalahari Red among the recognized commercial meat goat breeds."
      },
      {
        title: "African Farming Goat Areas",
        url: "https://www.africanfarming.com/2025/04/14/areas-suitable-for-goat-farming-in-south-africa/",
        note: "Used for broad inland goat distribution guidance."
      }
    ]
  },
  {
    id: "savanna-goat",
    name: "Savanna Goat",
    category: "goat",
    color: "#ffd166",
    provinces: ["LP", "NW", "MP", "GP", "KZN"],
    summary: "A hardy commercial meat goat commonly linked to bushveld and warmer summer-rainfall zones.",
    sources: [
      {
        title: "DAFF Goat Market Value Chain Profile",
        url: "http://webapps1.daff.gov.za/AmisAdmin/upload/Goat%20Market%20Value%20Chain%20Profile%202022.pdf",
        note: "Identifies Savanna as a major South African commercial goat breed."
      },
      {
        title: "South Africa Online Goat Breeds",
        url: "https://southafrica.co.za/goat-breeds-in-south-africa.html",
        note: "Used with adaptation patterns to map province presence."
      }
    ]
  },
  {
    id: "angora",
    name: "Angora Goat",
    category: "goat",
    color: "#90e0ef",
    provinces: ["EC", "WC", "NC"],
    summary: "The mohair breed most strongly concentrated in the Eastern Cape and nearby Karoo-linked production belts.",
    sources: [
      {
        title: "South Africa Online Goat Breeds",
        url: "https://southafrica.co.za/goat-breeds-in-south-africa.html",
        note: "Provides South African goat breed context and regional concentration cues."
      },
      {
        title: "African Farming Goat Areas",
        url: "https://www.africanfarming.com/2025/04/14/areas-suitable-for-goat-farming-in-south-africa/",
        note: "Supports province-level goat concentration notes."
      }
    ]
  },
  {
    id: "nguni",
    name: "Nguni",
    category: "cattle",
    color: "#2dd4bf",
    provinces: ["EC", "KZN", "LP", "MP", "NW"],
    summary: "An indigenous cattle breed produced widely in South Africa and especially associated with eastern and northern grazing systems.",
    sources: [
      {
        title: "South Africa Online Nguni Cattle",
        url: "https://southafrica.co.za/nguni-cattle.html",
        note: "States that Nguni cattle are produced throughout South Africa."
      },
      {
        title: "SA Stud Book Elite Awards",
        url: "https://www.sastudbook.co.za/p207/elite-awards/sa-studbook-elite-2018-awards.html",
        note: "Confirms Nguni participation within SA Stud Book's cattle ecosystem."
      }
    ]
  },
  {
    id: "bonsmara",
    name: "Bonsmara",
    category: "cattle",
    color: "#52b788",
    provinces: ["FS", "NW", "NC", "LP", "MP", "EC"],
    summary: "A dominant South African beef breed with broad commercial adoption across inland and mixed grazing regions.",
    sources: [
      {
        title: "SA Stud Book Elite Awards 2016",
        url: "https://www.sastudbook.co.za/images/photos/Uitgawe44_2016_pg10-17.pdf",
        note: "Includes Bonsmara stud references in Eastern Cape production areas."
      },
      {
        title: "South Africa Online Nguni and Beef Context",
        url: "https://southafrica.co.za/nguni-cattle.html",
        note: "Used with South African beef production patterns for broad province mapping."
      }
    ]
  },
  {
    id: "afrikaner-cattle",
    name: "Afrikaner Cattle",
    category: "cattle",
    color: "#ef476f",
    provinces: ["FS", "NC", "NW", "LP"],
    summary: "A hardy indigenous-derived cattle breed associated with hot, extensive beef systems.",
    sources: [
      {
        title: "SA Stud Book Welcome",
        url: "https://www.sastudbook.co.za/?CID=2",
        note: "Confirms SA Stud Book's role in South African breed registration and recording."
      },
      {
        title: "South Africa Online Nguni and Beef Context",
        url: "https://southafrica.co.za/nguni-cattle.html",
        note: "Used for broad cattle-region context in South Africa."
      }
    ]
  },
  {
    id: "drakensberger",
    name: "Drakensberger",
    category: "cattle",
    color: "#6c63ff",
    provinces: ["KZN", "FS", "MP", "GP"],
    summary: "A South African beef breed strongly linked to the eastern interior and Drakensberg-adjacent regions.",
    sources: [
      {
        title: "SA Stud Book Welcome",
        url: "https://www.sastudbook.co.za/?CID=2",
        note: "Used as the registration-system reference point."
      },
      {
        title: "Farmer's Weekly Nguni Article",
        url: "https://www.farmersweekly.co.za/animals/cattle/nguni-the-legacy-of-the-land/",
        note: "Supports eastern interior cattle adaptation patterns used in mapping."
      }
    ]
  },
  {
    id: "brahman",
    name: "Brahman",
    category: "cattle",
    color: "#06d6a0",
    provinces: ["LP", "NW", "MP", "KZN", "FS", "GP"],
    summary: "A heat-tolerant beef breed widely used in South Africa's warm commercial cattle areas and crossbreeding systems.",
    sources: [
      {
        title: "SA Stud Book Welcome",
        url: "https://www.sastudbook.co.za/?CID=2",
        note: "Used as the general breed-registration reference."
      },
      {
        title: "South Africa Online Nguni and Beef Context",
        url: "https://southafrica.co.za/nguni-cattle.html",
        note: "Supports broad cattle distribution context across provinces."
      }
    ]
  }
];

const state = {
  category: "all",
  search: "",
  activeAnimalId: null,
  activeProvince: null,
  selectedProvinceCode: null,
  searchExpandedBreedList: false
};

const breedList = document.getElementById("breedList");
const selectedCount = document.getElementById("selectedCount");
const breedCountElements = [...document.querySelectorAll("[data-breed-count]")];
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const breedListSummaryState = document.getElementById("breedListSummaryState");
const statusChip = document.getElementById("statusChip");
const provinceTitle = document.getElementById("provinceTitle");
const provinceDescription = document.getElementById("provinceDescription");
const provinceLegend = document.getElementById("provinceLegend");
const sourceList = document.getElementById("sourceList");
const provinceSelector = document.getElementById("provinceSelector");
const mapFrame = document.querySelector(".map-frame");
const mapOverlay = document.getElementById("mapOverlay");
const mapOverlayStage = mapOverlay?.querySelector("[data-map-overlay-stage]");
const enlargeMapButtons = [...document.querySelectorAll("[data-enlarge-map]")];
const returnMapButtons = [...document.querySelectorAll("[data-return-map]")];
const mapController = window.SouthAfricaMap.createMapController({
  svgId: "saMapSvg",
  defsId: "mapDefs",
  regionsId: "mapRegions",
  onProvinceInteract: updateProvinceDetail,
  onProvinceSelect: selectProvince
});
let mapFramePlaceholder = null;

if (breedCountElements.length) {
  breedCountElements.forEach((element) => {
    element.textContent = String(animals.length);
  });
}

function categoryLabel(category) {
  if (category === "sheep") return t("categories.sheep");
  if (category === "goat") return t("categories.goat");
  return t("categories.cattle");
}

function provinceAbbreviations(item) {
  return item.provinces.map((provinceCode) => {
    const label = provinceName(provinceCode);
    return `<span class="province-tag">${provinceCode}<span>${label}</span></span>`;
  }).join("");
}

function animalSummaryText(item) {
  return animalSummary(item.id, item.summary);
}

function activeAnimal() {
  return animals.find((item) => item.id === state.activeAnimalId) ?? null;
}

function filteredAnimals() {
  const query = state.search.trim().toLowerCase();

  return animals.filter((item) => {
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesQuery = query === "" || item.name.toLowerCase().startsWith(query);

    return matchesCategory && matchesQuery;
  });
}

function renderAnimalList() {
  const results = filteredAnimals();

  updateBreedListSummary(results.length);

  if (!results.length) {
    breedList.innerHTML = `<div class="empty-state">${t("atlas.emptyBreeds")}</div>`;
    updateSelectedCount();
    return;
  }

  breedList.innerHTML = results.map((item) => `
    <article class="breed-card ${item.id === state.activeAnimalId ? "active" : ""}" data-card-id="${item.id}">
      <div class="breed-card-top">
        <div>
          <div class="breed-name">${item.name}</div>
          <div class="breed-meta">${categoryLabel(item.category)}</div>
        </div>
        <div class="breed-controls">
          <span class="breed-trigger">${item.id === state.activeAnimalId ? t("home.breed.live") : t("home.breed.show")}</span>
          <input class="color-input" type="color" data-color-id="${item.id}" value="${item.color}" aria-label="${t("home.breed.colorAria", { animal: item.name })}" />
        </div>
      </div>
      <p class="breed-summary">${animalSummaryText(item)}</p>
      <div class="province-count mb-2">${t("home.breed.foundIn", { count: item.provinces.length })}</div>
      <div class="province-tags">${provinceAbbreviations(item)}</div>
    </article>
  `).join("");

  updateSelectedCount();
}

function updateSelectedCount() {
  if (!selectedCount) {
    return;
  }

  selectedCount.textContent = state.activeAnimalId ? "1" : "0";
}

function updateBreedListSummary(count) {
  if (!breedListSummaryState) {
    return;
  }

  breedListSummaryState.textContent = t("home.breeds.count", { count });
}

function syncBreedListSearchVisibility() {
  const breedListDetails = document.getElementById("breedListDetails");
  if (!breedListDetails) {
    return;
  }

  const hasSearch = state.search.trim().length > 0;

  if (hasSearch) {
    breedListDetails.open = true;
    state.searchExpandedBreedList = true;
    return;
  }

  if (state.searchExpandedBreedList) {
    breedListDetails.open = false;
    state.searchExpandedBreedList = false;
  }
}

function updateReturnMapButton() {
  if (!returnMapButtons.length) {
    return;
  }

  const isDisabled = !state.selectedProvinceCode;
  returnMapButtons.forEach((button) => {
    button.disabled = isDisabled;
  });
}

function isMapOverlayOpen() {
  return Boolean(mapOverlay && !mapOverlay.hidden);
}

function syncEnlargeMapButtons() {
  if (!enlargeMapButtons.length) {
    return;
  }

  const isOpen = isMapOverlayOpen();
  const label = t(isOpen ? "home.drilldown.close" : "home.drilldown.enlarge");

  enlargeMapButtons.forEach((button) => {
    button.textContent = label;
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

function openMapOverlay() {
  if (!mapFrame || !mapOverlay || !mapOverlayStage || isMapOverlayOpen()) {
    return;
  }

  mapFramePlaceholder = document.createElement("div");
  mapFramePlaceholder.hidden = true;
  mapFrame.before(mapFramePlaceholder);
  mapOverlayStage.appendChild(mapFrame);
  mapOverlay.hidden = false;
  mapOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("map-overlay-open");
  syncEnlargeMapButtons();
}

function closeMapOverlay() {
  if (!mapFrame || !mapOverlay || !mapFramePlaceholder) {
    return;
  }

  mapFramePlaceholder.before(mapFrame);
  mapFramePlaceholder.remove();
  mapFramePlaceholder = null;
  mapOverlay.hidden = true;
  mapOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("map-overlay-open");
  syncEnlargeMapButtons();
}

function toggleMapOverlay() {
  if (isMapOverlayOpen()) {
    closeMapOverlay();
    return;
  }

  openMapOverlay();
}

function renderProvinceSelector() {
  updateReturnMapButton();

  if (!provinceSelector) {
    return;
  }

  provinceSelector.innerHTML = Object.entries(provinces).map(([provinceCode, provinceLabel]) => `
    <button
      type="button"
      class="province-selector-chip ${state.selectedProvinceCode === provinceCode ? "active" : ""}"
      data-province-select="${provinceCode}"
      aria-pressed="${state.selectedProvinceCode === provinceCode ? "true" : "false"}"
      aria-label="${t("home.drilldown.focusAria", { province: provinceName(provinceCode) })}"
    >
      <span>${provinceCode}</span>
      <strong>${provinceName(provinceCode)}</strong>
    </button>
  `).join("");

}

function syncProvinceFocus() {
  if (!state.selectedProvinceCode) {
    mapController.clearProvinceFocus();
    return;
  }

  mapController.setProvinceFocus(state.selectedProvinceCode);
}

function selectProvince(provinceCode) {
  state.selectedProvinceCode = provinceCode;
  state.activeProvince = provinceCode;

  renderProvinceSelector();
  syncProvinceFocus();
  updateProvinceDetail(provinceCode);
}

function provinceBreakdown(provinceCode) {
  const item = activeAnimal();
  const matches = item && item.provinces.includes(provinceCode) ? [item] : [];

  if (!matches.length) {
    return [];
  }

  return matches.map((match) => ({ ...match, percentage: 100 }));
}

function paintMap() {
  const picked = activeAnimal();

  if (!picked) {
    Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
      mapController.setProvinceVisual(provinceCode, [], false);
    });
    statusChip.textContent = t("home.status.default");
    if (state.activeProvince) {
      updateProvinceDetail(state.activeProvince);
    }
    syncProvinceFocus();
    renderSourceList([]);
    return;
  }

  Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
    mapController.setProvinceVisual(provinceCode, provinceBreakdown(provinceCode), true);
  });

  statusChip.textContent = t("home.status.painted", { animal: picked.name });

  if (state.activeProvince) {
    updateProvinceDetail(state.activeProvince);
  }

  syncProvinceFocus();
  renderSourceList([picked]);
}

function clearMap() {
  state.activeAnimalId = null;
  Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
    mapController.setProvinceVisual(provinceCode, [], false);
  });
  mapController.clearActiveProvince();

  state.activeProvince = null;
  statusChip.textContent = t("home.status.default");
  provinceTitle.textContent = t("home.province.defaultTitle");
  provinceDescription.textContent = t("home.province.defaultDescription");
  provinceLegend.innerHTML = "";
  renderProvinceSelector();
  syncProvinceFocus();
  renderAnimalList();
  renderSourceList([]);
}

function updateProvinceDetail(provinceCode) {
  const translatedProvinceName = provinceName(provinceCode);
  const matches = provinceBreakdown(provinceCode);

  mapController.setActiveProvince(provinceCode);

  state.activeProvince = provinceCode;
  provinceTitle.textContent = translatedProvinceName;

  const currentAnimal = activeAnimal();

  if (!currentAnimal) {
    provinceDescription.textContent = t("atlas.chooseAnimalForProvince");
    provinceLegend.innerHTML = "";
    return;
  }

  if (!matches.length) {
    provinceDescription.textContent = t("atlas.notMappedToProvince", { animal: currentAnimal.name, province: translatedProvinceName });
    provinceLegend.innerHTML = "";
    return;
  }

  provinceDescription.textContent = t("atlas.mappedToProvince", { animal: currentAnimal.name, province: translatedProvinceName });
  provinceLegend.innerHTML = matches.map((item) => `
    <div class="legend-item">
      <span class="legend-swatch" style="background:${item.color}"></span>
      <div class="legend-copy">
        <strong>${item.name}</strong>
        <span>${t("atlas.coverage", { category: categoryLabel(item.category), percentage: item.percentage })}</span>
      </div>
    </div>
  `).join("");
}

function uniqueSources(items) {
  const seen = new Map();

  items.forEach((item) => {
    item.sources.forEach((source, sourceIndex) => {
      if (!seen.has(source.url)) {
        seen.set(source.url, {
          ...source,
          animalId: item.id,
          sourceIndex
        });
      }
    });
  });

  return [...seen.values()];
}

function renderSourceList(items) {
  if (!sourceList) {
    return;
  }

  const displayItems = items.length ? items : animals.slice(0, 6);
  const sources = uniqueSources(displayItems).slice(0, 8);

  sourceList.innerHTML = sources.map((source) => `
    <div class="source-item">
      <div>
        <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>
        <div class="source-text">${animalSourceNote(source.animalId, source.sourceIndex, source.note)}</div>
      </div>
    </div>
  `).join("");
}

function refreshLanguage() {
  applyTranslations(document);
  mapController.setLanguage(getLanguage());
  syncEnlargeMapButtons();
  renderProvinceSelector();
  renderAnimalList();

  if (state.activeAnimalId) {
    paintMap();
  } else {
    statusChip.textContent = t("home.status.default");
    renderSourceList([]);
    if (!state.activeProvince) {
      provinceTitle.textContent = t("home.province.defaultTitle");
      provinceDescription.textContent = t("home.province.defaultDescription");
    }
  }

  if (state.activeProvince) {
    updateProvinceDetail(state.activeProvince);
  }
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    syncBreedListSearchVisibility();
    renderAnimalList();
  });
}

if (categoryFilters) {
  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) {
      return;
    }

    state.category = button.dataset.category;
    [...categoryFilters.querySelectorAll("button")].forEach((chip) => {
      chip.classList.toggle("active", chip === button);
    });
    renderAnimalList();
  });
}

if (breedList) {
  breedList.addEventListener("input", (event) => {
    const colorInput = event.target.closest("input[data-color-id]");

    if (colorInput) {
      const item = animals.find((entry) => entry.id === colorInput.dataset.colorId);
      item.color = colorInput.value;
      if (state.activeAnimalId === item.id) {
        paintMap();
      }
    }
  });

  breedList.addEventListener("click", (event) => {
    if (event.target.closest("input[data-color-id]")) {
      return;
    }

    const card = event.target.closest("[data-card-id]");
    if (!card) {
      return;
    }

    const nextId = card.dataset.cardId;
    state.activeAnimalId = state.activeAnimalId === nextId ? null : nextId;
    renderAnimalList();

    if (!state.activeAnimalId) {
      clearMap();
      return;
    }

    paintMap();
  });
}

provinceSelector?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-province-select]");
  if (!button) {
    return;
  }

  selectProvince(button.dataset.provinceSelect);
});

enlargeMapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleMapOverlay();
  });
});

returnMapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedProvinceCode = null;
    renderProvinceSelector();
    syncProvinceFocus();
    provinceTitle.textContent = t("home.province.defaultTitle");
    provinceDescription.textContent = t("home.province.defaultDescription");
    provinceLegend.innerHTML = "";
    mapController.clearActiveProvince();
    state.activeProvince = null;
  });
});

mapOverlay?.addEventListener("click", (event) => {
  if (event.target === mapOverlay) {
    closeMapOverlay();
    return;
  }

  if (!isMapOverlayOpen() || !mapFrame?.contains(event.target)) {
    return;
  }

  if (event.target.closest("button")) {
    return;
  }

  if (event.target.closest("[data-province], .province-label-group")) {
    return;
  }

  if (event.target.closest(".map-frame")) {
    closeMapOverlay();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMapOverlayOpen()) {
    closeMapOverlay();
  }
});

window.addEventListener("site-language-change", refreshLanguage);

if (breedList && breedCountElements.length && searchInput && categoryFilters && statusChip && provinceTitle && provinceDescription && provinceLegend && sourceList) {
  applyTranslations(document);
  Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
    mapController.setProvinceVisual(provinceCode, [], false);
  });
  mapController.setLanguage(getLanguage());
  syncEnlargeMapButtons();
  renderProvinceSelector();
  syncProvinceFocus();
  renderAnimalList();
  renderSourceList([]);
}