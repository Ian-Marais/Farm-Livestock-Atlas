const provinces = window.SouthAfricaMap.provinces;
const { t, provinceName, applyTranslations, getLanguage, animalSummary, animalSourceNote } = window.SiteI18n;

const sharedLivestockWebsites = [
  {
    name: "BKB Livestock & Auctioneering",
    url: "https://www.bkb.co.za/livestock-and-auctioneering"
  }
];

const stellardsFarmerWebsites = {
  dorper: sharedLivestockWebsites,
  merino: sharedLivestockWebsites,
  "dohne-merino": sharedLivestockWebsites,
  "namaqua-afrikaner": sharedLivestockWebsites,
  damara: sharedLivestockWebsites,
  "boer-goat": sharedLivestockWebsites,
  "kalahari-red": sharedLivestockWebsites,
  "savanna-goat": sharedLivestockWebsites,
  angora: sharedLivestockWebsites,
  nguni: sharedLivestockWebsites,
  bonsmara: sharedLivestockWebsites,
  "afrikaner-cattle": sharedLivestockWebsites,
  drakensberger: sharedLivestockWebsites,
  brahman: sharedLivestockWebsites
};
const highlightColor = "#cf7a2f";

const sheepCatalogMeta = {
  dorper: {
    color: "#ff8b5f",
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
  merino: {
    color: "#4dc3ff",
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
  "dohne-merino": {
    color: "#7d95ff",
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
  "namaqua-afrikaner": {
    color: "#f4b942",
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
  damara: {
    color: "#c17eff",
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
  }
};

const goatCatalogMeta = {
  "boer-goat": {
    color: "#ff6b6b",
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
  "kalahari-red": {
    color: "#ff9d4d",
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
  "savanna-goat": {
    color: "#ffd166",
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
  angora: {
    color: "#90e0ef",
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
  }
};
const cattleCatalogMeta = {
  nguni: {
    color: "#2dd4bf",
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
  bonsmara: {
    color: "#52b788",
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
  "afrikaner-cattle": {
    color: "#ef476f",
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
  drakensberger: {
    color: "#6c63ff",
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
  brahman: {
    color: "#06d6a0",
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
};

let animals = [];

function normaliseAnimalEntry(entry, category, metadataMap) {
  const name = String(entry?.Name ?? "").trim();
  const id = slugify(name);
  const metadata = metadataMap[id] ?? {};
  const provinces = String(entry?.Location ?? entry?.location ?? "")
    .split(",")
    .map((provinceCode) => provinceCode.trim().toUpperCase())
    .filter(Boolean);

  return {
    id,
    name,
    category,
    color: highlightColor,
    provinces,
    summary: String(entry?.Description ?? "").trim(),
    imageUrl: String(entry?.Image ?? entry?.["image link"] ?? entry?.imageLink ?? "").trim(),
    sources: metadata.sources ?? []
  };
}

async function loadAnimalCatalog(filePath, category, metadataMap) {
  const response = await fetch(new URL(filePath, window.location.href));

  if (!response.ok) {
    throw new Error(`Failed to load ${category} catalog: ${response.status}`);
  }

  const entries = await response.json();

  if (!Array.isArray(entries)) {
    throw new Error(`${category} catalog must be an array`);
  }

  return entries.map((entry) => normaliseAnimalEntry(entry, category, metadataMap)).filter((entry) => entry.id && entry.name);
}

let itemsCatalog = [];

function normaliseItemEntry(entry) {
  const name = String(entry?.Name ?? "").trim();
  const id = slugify(name);
  const provinces = String(entry?.Location ?? entry?.location ?? "")
    .split(",")
    .map((provinceCode) => provinceCode.trim().toUpperCase())
    .filter(Boolean);

  return {
    id,
    name,
    group: String(entry?.Group ?? entry?.group ?? "").trim(),
    color: String(entry?.Color ?? entry?.color ?? "#cf7a2f").trim(),
    provinces,
    summary: String(entry?.Description ?? "").trim(),
    imageUrl: String(entry?.Image ?? entry?.["image link"] ?? entry?.imageLink ?? "").trim(),
    tags: Array.isArray(entry?.Tags) ? entry.Tags : [],
    sources: Array.isArray(entry?.Sources) ? entry.Sources : []
  };
}

async function loadItemCatalog(filePath) {
  const response = await fetch(new URL(filePath, window.location.href));

  if (!response.ok) {
    throw new Error(`Failed to load items catalog: ${response.status}`);
  }

  const entries = await response.json();

  if (!Array.isArray(entries)) {
    throw new Error("Items catalog must be an array");
  }

  return entries.map(normaliseItemEntry).filter((entry) => entry.id && entry.name);
}

let plantsCatalog = [];

async function loadPlantCatalog(filePath) {
  const response = await fetch(new URL(filePath, window.location.href));

  if (!response.ok) {
    throw new Error(`Failed to load plants catalog: ${response.status}`);
  }

  const entries = await response.json();

  if (!Array.isArray(entries)) {
    throw new Error("Plants catalog must be an array");
  }

  return entries.map(normaliseItemEntry).filter((entry) => entry.id && entry.name);
}

const serviceCatalogMeta = {
  "fencing-installation": {
    group: "Farm Infrastructure",
    color: "#8d7a42",
    sources: [
      {
        title: "Planned Stellards service example",
        note: "This service is shown as a sample provider category while service tables are still pending in Stellards."
      }
    ]
  },
  "animal-transport": {
    group: "Logistics",
    color: "#3f8f7a",
    sources: [
      {
        title: "Planned Stellards service example",
        note: "Transport services are illustrated here to preview how provincial service availability will be shown later."
      }
    ]
  }
};

function normaliseServiceEntry(entry) {
  const name = String(entry?.Name ?? "").trim();
  const id = slugify(name);
  const metadata = serviceCatalogMeta[id] ?? {};
  const provinces = String(entry?.Location ?? entry?.location ?? "")
    .split(",")
    .map((provinceCode) => provinceCode.trim().toUpperCase())
    .filter(Boolean);

  return {
    id,
    name,
    group: String(entry?.Group ?? entry?.group ?? metadata.group ?? "").trim(),
    color: String(entry?.Color ?? entry?.color ?? metadata.color ?? "#8d7a42").trim(),
    provinces,
    summary: String(entry?.Description ?? "").trim(),
    imageUrl: String(entry?.Image ?? entry?.["image link"] ?? entry?.imageLink ?? "").trim(),
    tags: Array.isArray(entry?.Tags) ? entry.Tags : [],
    sources: metadata.sources ?? []
  };
}

async function loadServiceCatalog(filePath) {
  const response = await fetch(new URL(filePath, window.location.href));

  if (!response.ok) {
    throw new Error(`Failed to load services catalog: ${response.status}`);
  }

  const entries = await response.json();

  if (!Array.isArray(entries)) {
    throw new Error("Services catalog must be an array");
  }

  return entries.map(normaliseServiceEntry).filter((entry) => entry.id && entry.name);
}

let servicesCatalog = [];

const catalogHashes = {
  animals: "#animalsSection",
  plants: "#plantsSection",
  items: "#itemsSection",
  services: "#servicesSection"
};

function initialCatalogView() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "plantsSection") {
    return "plants";
  }

  if (hash === "itemsSection") {
    return "items";
  }

  if (hash === "servicesSection") {
    return "services";
  }

  return "animals";
}

const state = {
  activeProvince: null,
  selectedProvinceCode: null,
  searchExpandedBreedList: false,
  catalogView: initialCatalogView(),
  searches: {
    animals: "",
    plants: "",
    items: "",
    services: ""
  },
  filters: {
    animals: "all",
    plants: "all",
    items: "all",
    services: "all"
  },
  activeIds: {
    animals: null,
    plants: null,
    items: null,
    services: null
  }
};

const breedList = document.getElementById("breedList");
const breedListDetails = document.getElementById("breedListDetails");
const selectedCount = document.getElementById("selectedCount");
const breedCountElements = [...document.querySelectorAll("[data-breed-count]")];
const catalogViewButtons = [...document.querySelectorAll("[data-catalog-view]")];
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const breedListSummaryState = document.getElementById("breedListSummaryState");
const catalogPanelKicker = document.getElementById("catalogPanelKicker");
const catalogPanelTitle = document.getElementById("catalogPanelTitle");
const catalogSearchLabel = document.getElementById("catalogSearchLabel");
const catalogListTitle = document.getElementById("catalogListTitle");
const catalogListHint = document.getElementById("catalogListHint");
const catalogRequestKicker = document.getElementById("catalogRequestKicker");
const catalogRequestTitle = document.getElementById("catalogRequestTitle");
const catalogRequestCopy = document.getElementById("catalogRequestCopy");
const catalogRequestAction = document.getElementById("catalogRequestAction");
const statusChip = document.getElementById("statusChip");
const catalogMapKicker = document.getElementById("catalogMapKicker");
const catalogMapTitle = document.getElementById("catalogMapTitle");
const provinceTitle = document.getElementById("provinceTitle");
const provinceDescription = document.getElementById("provinceDescription");
const catalogProvinceKicker = document.getElementById("catalogProvinceKicker");
const provinceLegend = document.getElementById("provinceLegend");
const sourceList = document.getElementById("sourceList");
const sourceContent = document.getElementById("sourceContent");
const sourceToggleButton = document.querySelector("[data-source-toggle]");
const catalogSourceTitle = document.getElementById("catalogSourceTitle");
const catalogSourceKicker = document.getElementById("catalogSourceKicker");
const catalogSourceBadge = document.getElementById("catalogSourceBadge");
const catalogSourceCopy = document.getElementById("catalogSourceCopy");
const farmerWebsitesSection = document.getElementById("farmerWebsitesSection");
const farmerWebsitesDescription = document.getElementById("farmerWebsitesDescription");
const farmerWebsitesList = document.getElementById("farmerWebsitesList");
const noteDescription = document.getElementById("noteDescription");
const noteToggleButton = document.querySelector("[data-note-toggle]");
const mapHelper = document.getElementById("mapHelper");
const provinceSelector = document.getElementById("provinceSelector");
const sidebarCard = document.querySelector(".sidebar-card");
const mapStage = document.querySelector("[data-map-stage]");
const mapOverlayBackdrop = document.querySelector("[data-map-overlay-backdrop]");
const mapOverlayToggle = document.querySelector("[data-map-overlay-toggle]");
const returnMapButtons = [...document.querySelectorAll("[data-return-map]")];
const sidebarCardOriginalParent = sidebarCard?.parentElement ?? null;
const sidebarCardOriginalNextSibling = sidebarCard?.nextElementSibling ?? null;
const mapStageOriginalParent = mapStage?.parentElement ?? null;
const mapStageOriginalNextSibling = mapStage?.nextElementSibling ?? null;
const mapOverlayBackdropOriginalParent = mapOverlayBackdrop?.parentElement ?? null;
const mapOverlayBackdropOriginalNextSibling = mapOverlayBackdrop?.nextElementSibling ?? null;
const mapOverlayState = {
  scrollX: 0,
  scrollY: 0,
  restoreFocusTarget: null
};
const mapController = window.SouthAfricaMap.createMapController({
  svgId: "saMapSvg",
  defsId: "mapDefs",
  regionsId: "mapRegions",
  onProvinceInteract: updateProvinceDetail,
  onProvinceLeave: handleProvinceLeave,
  onProvinceSelect: selectProvince
});

if (breedCountElements.length) {
  breedCountElements.forEach((element) => {
    element.textContent = String(animals.length);
  });
}

function syncMapOverlayControls() {
  if (!mapOverlayToggle) {
    return;
  }

  const isOpen = document.body.classList.contains("map-overlay-open");
  mapOverlayToggle.textContent = isOpen ? t("home.drilldown.closeOverlay") : t("home.drilldown.enlarge");
  mapOverlayToggle.setAttribute("aria-pressed", String(isOpen));

  if (mapOverlayBackdrop) {
    mapOverlayBackdrop.hidden = !isOpen;
  }
}

function syncNoteToggle() {
  if (!noteToggleButton || !noteDescription) {
    return;
  }

  const isExpanded = !noteDescription.hidden;
  noteToggleButton.textContent = isExpanded ? t("home.note.hide") : t("home.note.show");
  noteToggleButton.setAttribute("aria-expanded", String(isExpanded));
}

function syncSourceToggle() {
  if (!sourceToggleButton || !sourceContent) {
    return;
  }

  const isExpanded = !sourceContent.hidden;
  sourceToggleButton.textContent = isExpanded ? t("home.source.hide") : t("home.source.show");
  sourceToggleButton.setAttribute("aria-expanded", String(isExpanded));
}

function restoreMapOverlayNode(node, parent, nextSibling) {
  if (!node || !parent) {
    return;
  }

  if (nextSibling && nextSibling.parentElement === parent) {
    parent.insertBefore(node, nextSibling);
    return;
  }

  parent.appendChild(node);
}

function storeMapOverlayViewport() {
  mapOverlayState.scrollX = window.scrollX;
  mapOverlayState.scrollY = window.scrollY;
  mapOverlayState.restoreFocusTarget = document.activeElement instanceof HTMLElement ? document.activeElement : null;
}

function restoreMapOverlayViewport() {
  window.scrollTo(mapOverlayState.scrollX, mapOverlayState.scrollY);

  const focusTarget = mapOverlayState.restoreFocusTarget instanceof HTMLElement
    && document.contains(mapOverlayState.restoreFocusTarget)
    ? mapOverlayState.restoreFocusTarget
    : mapOverlayToggle;

  focusTarget?.focus?.({ preventScroll: true });
}

function openMapOverlay() {
  if (!mapStage || document.body.classList.contains("map-overlay-open")) {
    return;
  }

  storeMapOverlayViewport();

  if (mapOverlayBackdrop) {
    document.body.appendChild(mapOverlayBackdrop);
  }

  if (sidebarCard) {
    mapStage.insertBefore(sidebarCard, mapStage.firstChild);
  }

  document.body.appendChild(mapStage);
  document.body.classList.add("map-overlay-open");
  syncMapOverlayControls();
}

function closeMapOverlay() {
  if (!document.body.classList.contains("map-overlay-open")) {
    return;
  }

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  document.body.classList.remove("map-overlay-open");
  restoreMapOverlayNode(mapOverlayBackdrop, mapOverlayBackdropOriginalParent, mapOverlayBackdropOriginalNextSibling);
  restoreMapOverlayNode(mapStage, mapStageOriginalParent, mapStageOriginalNextSibling);
  restoreMapOverlayNode(sidebarCard, sidebarCardOriginalParent, sidebarCardOriginalNextSibling);
  syncMapOverlayControls();

  requestAnimationFrame(() => {
    restoreMapOverlayViewport();
  });
}

function toggleMapOverlay() {
  if (!mapStage) {
    return;
  }

  if (document.body.classList.contains("map-overlay-open")) {
    closeMapOverlay();
    return;
  }

  openMapOverlay();
}

function categoryLabel(category) {
  if (category === "sheep") return t("categories.sheep");
  if (category === "goat") return t("categories.goat");
  return t("categories.cattle");
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function catalogConfig(view = state.catalogView) {
  if (view === "plants") {
    return {
      view,
      entries: plantsCatalog,
      filterProperty: "group",
      panelKickerKey: "home.catalog.plants.kicker",
      panelTitleKey: "home.catalog.plants.title",
      searchLabelKey: "home.catalog.plants.searchLabel",
      searchPlaceholderKey: "home.catalog.plants.searchPlaceholder",
      listTitleKey: "home.catalog.plants.listTitle",
      listHintKey: "home.catalog.plants.listHint",
      countKey: "home.catalog.plants.count",
      noteCopyKey: "home.catalog.plants.noteCopy",
      requestKickerKey: "home.catalog.plants.requestKicker",
      requestTitleKey: "home.catalog.plants.requestTitle",
      requestCopyKey: "home.catalog.plants.requestCopy",
      requestActionKey: "home.catalog.plants.requestAction",
      mapKickerKey: "home.map.kicker",
      mapTitleKey: "home.catalog.plants.mapTitle",
      mapHelperKey: "home.catalog.plants.mapHelper",
      statusDefaultKey: "home.catalog.plants.statusDefault",
      statusPaintedKey: "home.catalog.plants.statusPainted",
      provinceKickerKey: "home.province.kicker",
      provinceDefaultTitleKey: "home.province.defaultTitle",
      provinceDefaultDescriptionKey: "home.catalog.plants.provinceDefaultDescription",
      provinceNoSelectionKey: "home.catalog.plants.provinceNoSelection",
      provinceNotMappedKey: "home.catalog.plants.provinceNotMapped",
      provinceMappedKey: "home.catalog.plants.provinceMapped",
      sourceTitleKey: "home.source.title",
      sourceKickerKey: "home.source.kicker",
      sourceBadgeKey: "home.source.badge",
      sourceCopyKey: "home.catalog.plants.sourceCopy",
      sourceEmptyKey: "home.catalog.plants.sourceEmpty",
      foundInKey: "home.catalog.plants.foundIn",
      colorAriaKey: "home.catalog.plants.colorAria",
      emptyKey: "home.catalog.plants.empty",
      websitesEnabled: false
    };
  }

  if (view === "items") {
    return {
      view,
      entries: itemsCatalog,
      filterProperty: "group",
      panelKickerKey: "home.catalog.items.kicker",
      panelTitleKey: "home.catalog.items.title",
      searchLabelKey: "home.catalog.items.searchLabel",
      searchPlaceholderKey: "home.catalog.items.searchPlaceholder",
      listTitleKey: "home.catalog.items.listTitle",
      listHintKey: "home.catalog.items.listHint",
      countKey: "home.catalog.items.count",
      noteCopyKey: "home.catalog.items.noteCopy",
      requestKickerKey: "home.catalog.items.requestKicker",
      requestTitleKey: "home.catalog.items.requestTitle",
      requestCopyKey: "home.catalog.items.requestCopy",
      requestActionKey: "home.catalog.items.requestAction",
      mapKickerKey: "home.map.kicker",
      mapTitleKey: "home.catalog.items.mapTitle",
      mapHelperKey: "home.catalog.items.mapHelper",
      statusDefaultKey: "home.catalog.items.statusDefault",
      statusPaintedKey: "home.catalog.items.statusPainted",
      provinceKickerKey: "home.province.kicker",
      provinceDefaultTitleKey: "home.province.defaultTitle",
      provinceDefaultDescriptionKey: "home.catalog.items.provinceDefaultDescription",
      provinceNoSelectionKey: "home.catalog.items.provinceNoSelection",
      provinceNotMappedKey: "home.catalog.items.provinceNotMapped",
      provinceMappedKey: "home.catalog.items.provinceMapped",
      sourceTitleKey: "home.source.title",
      sourceKickerKey: "home.source.kicker",
      sourceBadgeKey: "home.source.badge",
      sourceCopyKey: "home.catalog.items.sourceCopy",
      sourceEmptyKey: "home.catalog.items.sourceEmpty",
      foundInKey: "home.catalog.items.foundIn",
      colorAriaKey: "home.catalog.items.colorAria",
      emptyKey: "home.catalog.items.empty",
      websitesEnabled: false
    };
  }

  if (view === "services") {
    return {
      view,
      entries: servicesCatalog,
      filterProperty: "group",
      panelKickerKey: "home.catalog.services.kicker",
      panelTitleKey: "home.catalog.services.title",
      searchLabelKey: "home.catalog.services.searchLabel",
      searchPlaceholderKey: "home.catalog.services.searchPlaceholder",
      listTitleKey: "home.catalog.services.listTitle",
      listHintKey: "home.catalog.services.listHint",
      countKey: "home.catalog.services.count",
      noteCopyKey: "home.catalog.services.noteCopy",
      requestKickerKey: "home.catalog.services.requestKicker",
      requestTitleKey: "home.catalog.services.requestTitle",
      requestCopyKey: "home.catalog.services.requestCopy",
      requestActionKey: "home.catalog.services.requestAction",
      mapKickerKey: "home.map.kicker",
      mapTitleKey: "home.catalog.services.mapTitle",
      mapHelperKey: "home.catalog.services.mapHelper",
      statusDefaultKey: "home.catalog.services.statusDefault",
      statusPaintedKey: "home.catalog.services.statusPainted",
      provinceKickerKey: "home.province.kicker",
      provinceDefaultTitleKey: "home.province.defaultTitle",
      provinceDefaultDescriptionKey: "home.catalog.services.provinceDefaultDescription",
      provinceNoSelectionKey: "home.catalog.services.provinceNoSelection",
      provinceNotMappedKey: "home.catalog.services.provinceNotMapped",
      provinceMappedKey: "home.catalog.services.provinceMapped",
      sourceTitleKey: "home.source.title",
      sourceKickerKey: "home.source.kicker",
      sourceBadgeKey: "home.source.badge",
      sourceCopyKey: "home.catalog.services.sourceCopy",
      sourceEmptyKey: "home.catalog.services.sourceEmpty",
      foundInKey: "home.catalog.services.foundIn",
      colorAriaKey: "home.catalog.services.colorAria",
      emptyKey: "home.catalog.services.empty",
      websitesEnabled: false
    };
  }

  return {
    view,
    entries: animals,
    filterProperty: "category",
    panelKickerKey: "home.catalog.animals.kicker",
    panelTitleKey: "home.catalog.animals.title",
    searchLabelKey: "home.search.label",
    searchPlaceholderKey: "home.search.placeholder",
    listTitleKey: "home.breeds.toggle",
    listHintKey: "home.breeds.toggleHint",
    countKey: "home.breeds.count",
    noteCopyKey: "home.note.copy",
    requestKickerKey: "home.catalog.animals.requestKicker",
    requestTitleKey: "home.catalog.animals.requestTitle",
    requestCopyKey: "home.catalog.animals.requestCopy",
    requestActionKey: "home.catalog.animals.requestAction",
    mapKickerKey: "home.map.kicker",
    mapTitleKey: "home.map.title",
    mapHelperKey: "home.map.helper",
    statusDefaultKey: "home.status.default",
    statusPaintedKey: "home.status.painted",
    provinceKickerKey: "home.province.kicker",
    provinceDefaultTitleKey: "home.province.defaultTitle",
    provinceDefaultDescriptionKey: "home.province.defaultDescription",
    provinceNoSelectionKey: "atlas.chooseAnimalForProvince",
    provinceNotMappedKey: "atlas.notMappedToProvince",
    provinceMappedKey: "atlas.mappedToProvince",
    sourceTitleKey: "home.source.title",
    sourceKickerKey: "home.source.kicker",
    sourceBadgeKey: "home.source.badge",
    sourceCopyKey: "home.source.copy",
    sourceEmptyKey: null,
    foundInKey: "home.breed.foundIn",
    colorAriaKey: "home.breed.colorAria",
    emptyKey: "atlas.emptyBreeds",
    websitesEnabled: true
  };
}

function currentSearch(view = state.catalogView) {
  return state.searches[view] ?? "";
}

function setCurrentSearch(view, value) {
  state.searches[view] = value;
}

function currentFilter(view = state.catalogView) {
  return state.filters[view] ?? "all";
}

function setCurrentFilter(view, value) {
  state.filters[view] = value;
}

function activeEntryId(view = state.catalogView) {
  return state.activeIds[view] ?? null;
}

function setActiveEntryId(view, value) {
  state.activeIds[view] = value;
}

function activeEntry(view = state.catalogView) {
  return catalogConfig(view).entries.find((entry) => entry.id === activeEntryId(view)) ?? null;
}

function activeAnimal() {
  return activeEntry("animals");
}

function provinceAbbreviations(entry) {
  return entry.provinces.map((provinceCode) => {
    const label = provinceName(provinceCode);
    return `<span class="province-tag">${provinceCode}<span>${label}</span></span>`;
  }).join("");
}

function entrySummaryText(entry, view = state.catalogView) {
  return view === "animals" ? animalSummary(entry.id, entry.summary) : entry.summary;
}

function entryMetaLabel(entry, view = state.catalogView) {
  return view === "animals" ? categoryLabel(entry.category) : entry.group;
}

function entryFilterValue(entry, view = state.catalogView) {
  return view === "animals" ? entry.category : slugify(entry.group);
}

function filterOptions(view = state.catalogView) {
  if (view === "animals") {
    return [
      { value: "all", label: t("home.filters.all") },
      { value: "sheep", label: t("home.filters.sheep") },
      { value: "goat", label: t("home.filters.goat") },
      { value: "cattle", label: t("home.filters.cattle") }
    ];
  }

  const groups = [...new Set(catalogConfig(view).entries.map((entry) => entry.group))];
  return [
    { value: "all", label: t("home.filters.all") },
    ...groups.map((group) => ({ value: slugify(group), label: group }))
  ];
}

function filteredEntries(view = state.catalogView) {
  const query = currentSearch(view).trim().toLowerCase();
  const filter = currentFilter(view);

  return catalogConfig(view).entries.filter((entry) => {
    const matchesFilter = filter === "all" || entryFilterValue(entry, view) === filter;
    const haystack = [entry.name, entry.group, entrySummaryText(entry, view), ...(entry.tags || [])].join(" ").toLowerCase();
    const matchesQuery = query === "" || haystack.includes(query);
    return matchesFilter && matchesQuery;
  });
}

function entryTextVars(entry, province = "") {
  return {
    animal: entry?.name || "",
    plant: entry?.name || "",
    item: entry?.name || "",
    service: entry?.name || "",
    entry: entry?.name || "",
    province
  };
}

function refreshCatalogCopy() {
  const config = catalogConfig();

  if (catalogPanelKicker) catalogPanelKicker.textContent = t(config.panelKickerKey);
  if (catalogPanelTitle) catalogPanelTitle.textContent = t(config.panelTitleKey);
  if (catalogSearchLabel) catalogSearchLabel.textContent = t(config.searchLabelKey);
  if (searchInput) {
    searchInput.placeholder = t(config.searchPlaceholderKey);
    searchInput.value = currentSearch();
  }
  if (catalogListTitle) catalogListTitle.textContent = t(config.listTitleKey);
  if (catalogListHint) catalogListHint.textContent = t(config.listHintKey);
  if (noteDescription) noteDescription.textContent = t(config.noteCopyKey);
  if (catalogRequestKicker) catalogRequestKicker.textContent = t(config.requestKickerKey);
  if (catalogRequestTitle) catalogRequestTitle.textContent = t(config.requestTitleKey);
  if (catalogRequestCopy) catalogRequestCopy.textContent = t(config.requestCopyKey);
  if (catalogRequestAction) {
    catalogRequestAction.textContent = t(config.requestActionKey);
    catalogRequestAction.href = "signup.html#entryRequestSection";
  }
  if (catalogMapKicker) catalogMapKicker.textContent = t(config.mapKickerKey);
  if (catalogMapTitle) catalogMapTitle.textContent = t(config.mapTitleKey);
  if (mapHelper) mapHelper.textContent = t(config.mapHelperKey);
  if (catalogProvinceKicker) catalogProvinceKicker.textContent = t(config.provinceKickerKey);
  if (catalogSourceTitle) catalogSourceTitle.textContent = t(config.sourceTitleKey);
  if (catalogSourceKicker) catalogSourceKicker.textContent = t(config.sourceKickerKey);
  if (catalogSourceBadge) catalogSourceBadge.textContent = t(config.sourceBadgeKey);
  if (catalogSourceCopy) catalogSourceCopy.textContent = t(config.sourceCopyKey);

  if (!state.activeProvince) {
    provinceTitle.textContent = t(config.provinceDefaultTitleKey);
    provinceDescription.textContent = t(config.provinceDefaultDescriptionKey);
  }
}

function syncCatalogButtons() {
  catalogViewButtons.forEach((button) => {
    const isActive = button.dataset.catalogView === state.catalogView;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function catalogHash(view) {
  return catalogHashes[view] ?? catalogHashes.animals;
}

function syncCatalogHash() {
  const nextUrl = new URL(window.location.href);
  nextUrl.hash = catalogHash(state.catalogView);
  window.history.replaceState({}, "", nextUrl);
}

function renderFilterOptions() {
  if (!categoryFilters) {
    return;
  }

  const view = state.catalogView;
  const options = filterOptions(view);
  const activeFilter = currentFilter(view);

  categoryFilters.innerHTML = options.map((option) => `
    <button class="filter-chip ${option.value === activeFilter ? "active" : ""}" data-filter-value="${option.value}" type="button">${option.label}</button>
  `).join("");
}

function renderEntryList() {
  const view = state.catalogView;
  const config = catalogConfig(view);
  const results = filteredEntries(view);

  updateBreedListSummary(results.length);

  if (activeEntryId(view) && !results.some((entry) => entry.id === activeEntryId(view))) {
    setActiveEntryId(view, null);
  }

  if (!results.length) {
    breedList.innerHTML = `<div class="empty-state">${t(config.emptyKey)}</div>`;
    updateSelectedCount();
    return;
  }

  breedList.innerHTML = results.map((entry) => `
    <article class="breed-card ${entry.id === activeEntryId(view) ? "active" : ""}" data-card-id="${entry.id}">
      ${entry.imageUrl ? `<img class="breed-card-image" src="${entry.imageUrl}" alt="${entry.name}" loading="lazy" />` : ""}
      <div class="breed-card-top">
        <div>
          <div class="breed-name">${entry.name}</div>
          <div class="breed-meta">${entryMetaLabel(entry, view)}</div>
        </div>
        <div class="breed-controls">
          <span class="breed-trigger">${entry.id === activeEntryId(view) ? t("home.breed.live") : t("home.breed.show")}</span>
          <span class="breed-color-swatch" aria-hidden="true" style="background:${highlightColor}"></span>
        </div>
      </div>
      <p class="breed-summary">${entrySummaryText(entry, view)}</p>
      <div class="province-count mb-2">${t(config.foundInKey, { count: entry.provinces.length })}</div>
      <div class="province-tags">${provinceAbbreviations(entry)}</div>
    </article>
  `).join("");

  updateSelectedCount();
}

function updateSelectedCount() {
  if (!selectedCount) {
    return;
  }

  selectedCount.textContent = activeEntry() ? "1" : "0";
}

function updateBreedListSummary(count) {
  if (!breedListSummaryState) {
    return;
  }

  breedListSummaryState.textContent = t(catalogConfig().countKey, { count });
}

function syncBreedListSearchVisibility() {
  if (!breedListDetails) {
    return;
  }

  const hasSearch = currentSearch().trim().length > 0;

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
  const selectedEntry = activeEntry();
  const matches = selectedEntry && selectedEntry.provinces.includes(provinceCode) ? [selectedEntry] : [];

  if (!matches.length) {
    return [];
  }

  return matches.map((match) => ({ ...match, percentage: 100 }));
}

function paintMap() {
  const config = catalogConfig();
  const picked = activeEntry();

  if (!picked) {
    Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
      mapController.setProvinceVisual(provinceCode, [], false);
    });
    statusChip.textContent = t(config.statusDefaultKey);
    if (state.activeProvince) {
      updateProvinceDetail(state.activeProvince);
    }
    syncProvinceFocus();
    renderSourceList();
    renderFarmerWebsites();
    return;
  }

  Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
    mapController.setProvinceVisual(provinceCode, provinceBreakdown(provinceCode), true);
  });

  statusChip.textContent = t(config.statusPaintedKey, entryTextVars(picked));

  if (state.activeProvince) {
    updateProvinceDetail(state.activeProvince);
  }

  syncProvinceFocus();
  renderSourceList();
  renderFarmerWebsites();
}

function clearMap() {
  setActiveEntryId(state.catalogView, null);
  Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
    mapController.setProvinceVisual(provinceCode, [], false);
  });
  mapController.clearActiveProvince();

  const config = catalogConfig();
  state.activeProvince = null;
  statusChip.textContent = t(config.statusDefaultKey);
  provinceTitle.textContent = t(config.provinceDefaultTitleKey);
  provinceDescription.textContent = t(config.provinceDefaultDescriptionKey);
  provinceLegend.innerHTML = "";
  renderProvinceSelector();
  syncProvinceFocus();
  renderEntryList();
  renderSourceList();
  renderFarmerWebsites();
}

function updateProvinceDetail(provinceCode) {
  const config = catalogConfig();
  const translatedProvinceName = provinceName(provinceCode);
  const matches = provinceBreakdown(provinceCode);

  mapController.setActiveProvince(provinceCode);

  state.activeProvince = provinceCode;
  provinceTitle.textContent = translatedProvinceName;

  const currentSelection = activeEntry();

  if (!currentSelection) {
    provinceDescription.textContent = t(config.provinceNoSelectionKey);
    provinceLegend.innerHTML = "";
    return;
  }

  if (!matches.length) {
    provinceDescription.textContent = t(config.provinceNotMappedKey, entryTextVars(currentSelection, translatedProvinceName));
    provinceLegend.innerHTML = "";
    return;
  }

  provinceDescription.textContent = t(config.provinceMappedKey, entryTextVars(currentSelection, translatedProvinceName));
  provinceLegend.innerHTML = matches.map((item) => `
    <div class="legend-item">
      <span class="legend-swatch" style="background:${item.color}"></span>
      <div class="legend-copy">
        <strong>${item.name}</strong>
        <span>${t("atlas.coverage", { category: entryMetaLabel(item), percentage: item.percentage })}</span>
      </div>
    </div>
  `).join("");
}

function resetProvinceDetail() {
  const config = catalogConfig();

  provinceTitle.textContent = t(config.provinceDefaultTitleKey);
  provinceDescription.textContent = t(config.provinceDefaultDescriptionKey);
  provinceLegend.innerHTML = "";
}

function handleProvinceLeave(provinceCode) {
  if (state.selectedProvinceCode) {
    updateProvinceDetail(state.selectedProvinceCode);
    return;
  }

  if (state.activeProvince !== provinceCode) {
    return;
  }

  mapController.clearActiveProvince();
  state.activeProvince = null;
  resetProvinceDetail();
}

function uniqueSources(items, view = state.catalogView) {
  const seen = new Map();

  items.forEach((item) => {
    item.sources.forEach((source, sourceIndex) => {
      const key = source.url || `${view}:${item.id}:${source.title || sourceIndex}`;
      if (!seen.has(key)) {
        seen.set(key, {
          ...source,
          animalId: item.id,
          sourceIndex
        });
      }
    });
  });

  return [...seen.values()];
}

function websiteHostLabel(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function websiteInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function renderFarmerWebsites() {
  if (!farmerWebsitesSection || !farmerWebsitesList || !farmerWebsitesDescription) {
    return;
  }

  if (state.catalogView !== "animals") {
    farmerWebsitesSection.hidden = true;
    farmerWebsitesList.innerHTML = "";
    return;
  }

  const currentAnimal = activeAnimal();
  const websites = currentAnimal ? (stellardsFarmerWebsites[currentAnimal.id] ?? []) : [];

  if (!currentAnimal || !websites.length) {
    farmerWebsitesSection.hidden = true;
    farmerWebsitesList.innerHTML = "";
    return;
  }

  farmerWebsitesSection.hidden = false;
  farmerWebsitesDescription.textContent = t("home.farmerWebsites.copy");
  farmerWebsitesList.innerHTML = websites.map((website) => {
    const logo = website.logoUrl
      ? `<span class="farmer-website-logo"><img src="${website.logoUrl}" alt="${website.name} logo" loading="lazy" /></span>`
      : `<span class="farmer-website-logo">${websiteInitials(website.name)}</span>`;

    return `
      <a class="farmer-website-link" href="${website.url}" target="_blank" rel="noreferrer">
        ${logo}
        <span class="farmer-website-copy">
          <span class="farmer-website-name">${website.name}</span>
          <span class="farmer-website-url">${websiteHostLabel(website.url)}</span>
        </span>
      </a>
    `;
  }).join("");
}

function renderSourceList() {
  if (!sourceList) {
    return;
  }

  const config = catalogConfig();
  const selectedEntry = activeEntry();
  const sources = state.catalogView === "animals"
    ? uniqueSources(selectedEntry ? [selectedEntry] : animals.slice(0, 6), "animals").slice(0, 8)
    : (selectedEntry?.sources ?? []);

  if (!sources.length && config.sourceEmptyKey) {
    sourceList.innerHTML = `
      <div class="source-item">
        <div>
          <span class="source-link source-link-static">${t(config.sourceEmptyKey)}</span>
        </div>
      </div>
    `;
    return;
  }

  sourceList.innerHTML = sources.map((source) => `
    <div class="source-item">
      <div>
        ${source.url ? `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>` : `<span class="source-link source-link-static">${source.title}</span>`}
        <div class="source-text">${state.catalogView === "animals" ? animalSourceNote(source.animalId, source.sourceIndex, source.note) : source.note}</div>
      </div>
    </div>
  `).join("");
}

function setCatalogView(view) {
  if (!["animals", "plants", "items", "services"].includes(view)) {
    return;
  }

  state.catalogView = view;
  syncCatalogButtons();
  refreshCatalogCopy();
  renderFilterOptions();
  syncBreedListSearchVisibility();
  renderEntryList();
  syncCatalogHash();
  paintMap();
}

function refreshLanguage() {
  applyTranslations(document);
  mapController.setLanguage(getLanguage());
  syncNoteToggle();
  syncSourceToggle();
  syncMapOverlayControls();
  renderProvinceSelector();
  refreshCatalogCopy();
  renderFilterOptions();
  renderEntryList();
  paintMap();
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    setCurrentSearch(state.catalogView, event.target.value);
    syncBreedListSearchVisibility();
    renderEntryList();
    paintMap();
  });
}

catalogViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCatalogView(button.dataset.catalogView);
  });
});

if (categoryFilters) {
  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter-value]");
    if (!button) {
      return;
    }

    setCurrentFilter(state.catalogView, button.dataset.filterValue);
    renderFilterOptions();
    renderEntryList();
    paintMap();
  });
}

if (breedList) {
  breedList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-card-id]");
    if (!card) {
      return;
    }

    const nextId = card.dataset.cardId;
    setActiveEntryId(state.catalogView, activeEntryId() === nextId ? null : nextId);
    renderEntryList();
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

noteToggleButton?.addEventListener("click", () => {
  if (!noteDescription) {
    return;
  }

  noteDescription.hidden = !noteDescription.hidden;
  syncNoteToggle();
});

sourceToggleButton?.addEventListener("click", () => {
  if (!sourceContent) {
    return;
  }

  sourceContent.hidden = !sourceContent.hidden;
  syncSourceToggle();
});

mapOverlayToggle?.addEventListener("click", toggleMapOverlay);
mapOverlayBackdrop?.addEventListener("click", closeMapOverlay);

returnMapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedProvinceCode = null;
    renderProvinceSelector();
    syncProvinceFocus();
    mapController.clearActiveProvince();
    state.activeProvince = null;
    resetProvinceDetail();
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMapOverlay();
  }
});

window.addEventListener("hashchange", () => {
  setCatalogView(initialCatalogView());
});

window.addEventListener("site-language-change", refreshLanguage);

async function initializeApp() {
  if (!(breedList && breedCountElements.length && searchInput && categoryFilters && statusChip && provinceTitle && provinceDescription && provinceLegend && sourceList)) {
    return;
  }

  try {
    const [sheepEntries, goatEntries, cattleEntries, plantEntries, itemEntries, serviceEntries] = await Promise.all([
      loadAnimalCatalog("Data/sheep.json", "sheep", sheepCatalogMeta),
      loadAnimalCatalog("Data/goats.json", "goat", goatCatalogMeta),
      loadAnimalCatalog("Data/cattle.json", "cattle", cattleCatalogMeta),
      loadPlantCatalog("Data/plants.json"),
      loadItemCatalog("Data/items.json"),
      loadServiceCatalog("Data/services.json")
    ]);
    animals = [...sheepEntries, ...goatEntries, ...cattleEntries];
    plantsCatalog = plantEntries;
    itemsCatalog = itemEntries;
    servicesCatalog = serviceEntries;
  } catch (error) {
    console.error(error);
  }

  breedCountElements.forEach((element) => {
    element.textContent = String(animals.length);
  });

  applyTranslations(document);
  Object.keys(mapController.provinceShapes).forEach((provinceCode) => {
    mapController.setProvinceVisual(provinceCode, [], false);
  });
  mapController.setLanguage(getLanguage());
  syncNoteToggle();
  syncSourceToggle();
  syncMapOverlayControls();
  renderProvinceSelector();
  syncProvinceFocus();
  refreshCatalogCopy();
  renderFilterOptions();
  renderEntryList();
  paintMap();
  setCatalogView(state.catalogView);
}

initializeApp();