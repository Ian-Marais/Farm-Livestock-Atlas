(function () {
  const storageKey = "south-african-livestock-atlas-language";
  const themeStorageKey = "south-african-livestock-atlas-theme";

  const provinceNames = {
    en: {
      WC: "Western Cape",
      NC: "Northern Cape",
      EC: "Eastern Cape",
      FS: "Free State",
      NW: "North West",
      GP: "Gauteng",
      MP: "Mpumalanga",
      LP: "Limpopo",
      KZN: "KwaZulu-Natal"
    },
    af: {
      WC: "Wes-Kaap",
      NC: "Noord-Kaap",
      EC: "Oos-Kaap",
      FS: "Vrystaat",
      NW: "Noordwes",
      GP: "Gauteng",
      MP: "Mpumalanga",
      LP: "Limpopo",
      KZN: "KwaZulu-Natal"
    }
  };

  const animalSummaries = {
    af: {
      dorper: "'n Gehardde vleisskaap wat vir droe Suid-Afrikaanse toestande ontwikkel is en sterk met die Karoo en binnelandse produksiestreke verbind word.",
      merino: "Fynwolskaap wat in die Kaap, Vrystaat en sentrale wolproduserende provinsies gekonsentreer is.",
      "dohne-merino": "Dubbeldoelskaap met sterk wortels in die Oos-Kaap en groot wol-en-vleis produksiegordels.",
      "namaqua-afrikaner": "'n Droogtegebied-vetstertskaap wat die nouste met westelike en noordwestelike droelandstelsels verbind word.",
      damara: "'n Droogteverdraagsame skaap wat geskik is vir uitgestrekte en halfdroë weiding.",
      "boer-goat": "Suid-Afrika se vlagskip-vleisras vir bokke, met sterk Oos-Kaapse wortels en wydverspreide gebruik in die binneland en noorde.",
      "kalahari-red": "'n Rooibedekte vleisbok wat aangepas is vir warm, droë weidingstoestande in binnelandse provinsies.",
      "savanna-goat": "'n Gehardde kommersiële vleisbok wat dikwels met bosveld- en warmer somerreënvalstreke geassosieer word.",
      angora: "Die mohêrbokras wat die sterkste in die Oos-Kaap en aangrensende Karoo-produksiegordels voorkom.",
      nguni: "'n Inheemse beesras wat wyd in Suid-Afrika geproduseer word en veral met oostelike en noordelike weidingstelsels verbind word.",
      bonsmara: "'n Oorheersende Suid-Afrikaanse vleisbeesras met wye kommersiële aanvaarding in binnelandse en gemengde weidingstreke.",
      "afrikaner-cattle": "'n Gehardde inheems-afgeleide beesras wat met warm, uitgestrekte vleisstelsels geassosieer word.",
      drakensberger: "'n Suid-Afrikaanse vleisbeesras wat sterk met die oostelike binneland en Drakensberg-aangrensende streke verbind word.",
      brahman: "'n Hitteverdraagsame vleisbeesras wat wyd in Suid-Afrika se warm kommersiële beesgebiede en kruisteelstelsels gebruik word."
    }
  };

  const sourceNotes = {
    af: {
      "dorper:0": "Bevestig Dorper as 'n geregistreerde rasgenootskap binne die Suid-Afrikaanse stoetbedryf.",
      "dorper:1": "Beskryf die ras se Suid-Afrikaanse ontwikkeling en geskiktheid vir droë gebiede.",
      "merino:0": "Lys Merino-verwante skaapgenootskappe onder SA Stud Book.",
      "merino:1": "Verskaf Suid-Afrikaanse raskonteks wat vir breë provinsiale kartering gebruik word.",
      "dohne-merino:0": "Gebruik as die anker vir rasregistrasie.",
      "dohne-merino:1": "Ondersteun provinsiale konteks vir wol- en vleisskape.",
      "namaqua-afrikaner:0": "Verskaf die amptelike basis vir die stoetboeklys.",
      "namaqua-afrikaner:1": "Gebruik vir streeksaanpassingsriglyne in droë westelike provinsies.",
      "damara:0": "Gebruik vir rasverifikasie.",
      "damara:1": "Gebruik vir aanpassingsgedrewe provinsiale kartering.",
      "boer-goat:0": "Bevestig die Boerbok as 'n belangrike kommersiële vleisras in Suid-Afrika.",
      "boer-goat:1": "Verskaf provinsiale leidrade vir groot bokproduksiegebiede.",
      "kalahari-red:0": "Lys Kalahari Red onder die erkende kommersiële vleisbokrasse.",
      "kalahari-red:1": "Gebruik vir breë binnelandse leiding oor bokverspreiding.",
      "savanna-goat:0": "Identifiseer Savanna as 'n groot Suid-Afrikaanse kommersiële bokras.",
      "savanna-goat:1": "Gebruik saam met aanpassingspatrone om provinsiale teenwoordigheid te karteer.",
      "angora:0": "Verskaf Suid-Afrikaanse bokraskonteks en leidrade oor streekskonsentrasie.",
      "angora:1": "Ondersteun provinsiale notas oor bokkonsentrasie.",
      "nguni:0": "Stel dat Nguni-beeste regoor Suid-Afrika geproduseer word.",
      "nguni:1": "Bevestig Nguni se deelname binne SA Stud Book se bees-ekosisteem.",
      "bonsmara:0": "Sluit Bonsmara-stoetverwysings in Oos-Kaapse produksiegebiede in.",
      "bonsmara:1": "Gebruik saam met Suid-Afrikaanse vleisproduksiepatrone vir breë provinsiale kartering.",
      "afrikaner-cattle:0": "Bevestig SA Stud Book se rol in Suid-Afrikaanse rasregistrasie en aantekening.",
      "afrikaner-cattle:1": "Gebruik vir breë streekskonteks van beeste in Suid-Afrika.",
      "drakensberger:0": "Gebruik as verwysingspunt vir die registrasiestelsel.",
      "drakensberger:1": "Ondersteun oostelike binnelandse beesaanpassingspatrone wat in kartering gebruik word.",
      "brahman:0": "Gebruik as algemene verwysing vir rasregistrasie.",
      "brahman:1": "Ondersteun breë verspreidingskonteks van beeste oor provinsies."
    }
  };

  const dictionary = {
    en: {
      pageTitles: {
        home: "South African Livestock Atlas",
        feedback: "Community Feedback | South African Livestock Atlas"
      },
      common: {
        brand: "South African Livestock Atlas",
        language: "Language",
        languageSelector: "Language selector",
        theme: {
          light: "Light mode",
          dark: "Dark mode",
          switchToLight: "Switch to light mode",
          switchToDark: "Switch to dark mode"
        },
        public: "Public",
        active: "active",
        browserOnly: "Browser only",
        selectProvince: "Select a province",
        noLocalSubmissions: "No local contributions have been saved in this browser yet.",
        anonymousContributor: "Anonymous contributor",
        provinceNotSupplied: "Province not supplied",
        contributionSavedFallback: "Contribution details saved locally.",
        lang: {
          en: "English",
          af: "Afrikaans"
        }
      },
      home: {
        hero: {
          title: "Explore where key sheep, goat and cattle breeds are commonly found across South Africa.",
          copy: "Filter breeds, choose one animal, and the provincial map updates immediately to show where it is commonly found.",
          feedbackLink: "Community Feedback"
        },
        callout: {
          kicker: "Community Feedback",
          title: "Help improve local livestock mapping",
          copy: "Open the dedicated feedback page to submit farm details, Google Maps locations, property boundary notes, images, and species information for more accurate provincial mapping.",
          link: "Open feedback page"
        },
        services: {
          kicker: "Farm Websites & Software",
          copy: "If your farm does not have a website yet, we will create a professional-looking website for you with any features you require. Additionally, if custom software is required to streamline any farm process, also contact us via WhatsApp or E-mail below.",
          whatsappLabel: "WhatsApp",
          whatsappAria: "Open WhatsApp chat",
          emailLabel: "E-mail",
          emailAria: "Send an email"
        },
        metrics: {
          breeds: "Breeds loaded",
          provinces: "South African provinces",
          sources: "Source-based dataset"
        },
        controls: {
          kicker: "Breed Controls",
          title: "Choose one animal and assign a color"
        },
        search: {
          label: "Search animals",
          placeholder: "Search Dorper, Nguni, Boer goat..."
        },
        breeds: {
          toggle: "Breed list",
          toggleHint: "Tap to expand and scroll the full list",
          count: "{count} breeds"
        },
        filters: {
          toggle: "Species filters",
          toggleHint: "Tap to show all categories",
          all: "All",
          sheep: "Sheep",
          goat: "Goats",
          cattle: "Cattle"
        },
        note: {
          title: "How to use it",
          copy: "Either type the name of the specific species you are looking for in the \"Search animals\" field or, to view the entire range of species, use the arrow to expand the list of animals. Use the middle mouse wheel on the list of species to scroll through. Click any animal card to paint the map immediately. Only one animal is active at a time, and changing its color updates the map straight away.",
          show: "Click here to read",
          hide: "Click here to hide description"
        },
        map: {
          kicker: "Provincial View",
          title: "South Africa breed distribution map",
          helper: "The active animal is painted immediately across every province where it is mapped.",
          aria: "Detailed map of South Africa provinces"
        },
        province: {
          kicker: "Province Focus",
          defaultTitle: "Select or hover a province",
          defaultDescription: "The detail panel shows whether the active animal is displayed in the chosen province."
        },
        source: {
          kicker: "Data Notes",
          title: "Source transparency",
          badge: "Province-level",
          copy: "This demo uses public breed directories and agricultural references, including SA Stud Book society listings and South African livestock reference pages. The map indicates broad provincial presence and adaptation, not live farm-by-farm registry counts."
        },
        drilldown: {
          kicker: "Province Zoom",
          title: "Select a province to focus the map",
          copy: "Province drill-down is available now, but not all area-level livestock data has been added yet. The focused provincial view will become more accurate as more regional information becomes available.",
          enlarge: "Enlarge",
          closeOverlay: "Close",
          return: "Return to South Africa",
          focusAria: "Focus {province}"
        },
        status: {
          default: "Choose an animal to paint the map",
          painted: "{animal} is painted across the map"
        },
        breed: {
          live: "Live",
          show: "Show",
          foundIn: "Found in {count} mapped provinces",
          colorAria: "Choose color for {animal}"
        }
      },
      categories: {
        sheep: "Sheep",
        goat: "Goat",
        cattle: "Cattle"
      },
      feedback: {
        backHome: "Back to Atlas Home",
        kicker: "Community Feedback",
        title: "Submit farm information and location details",
        note: "Contributions are currently stored locally in this browser so the submission flow is ready before a backend capture service is added.",
        recent: {
          title: "Recent local submissions"
        },
        form: {
          optionalPlaceholder: "Optional",
          nameLabel: "Name or farm name",
          contactLabel: "Contact email or phone",
          provinceLabel: "Province",
          speciesLabel: "Animal species or breeds",
          speciesPlaceholder: "Dorper, Boer Goat, Nguni, mixed cattle...",
          propertyLabel: "Property and livestock details",
          propertyPlaceholder: "Describe the livestock on your property, grazing area, production type, or local conditions.",
          mapsLabel: "Google Maps links or coordinates",
          mapsPlaceholder: "Paste Google Maps links, pins, or latitude/longitude coordinates.",
          boundaryLabel: "Boundary notes or area outline request",
          boundaryPlaceholder: "Describe farm borders, camp layout, or where area boundaries should be indicated on the provincial map.",
          imageLinksLabel: "Farm image links",
          imageLinksPlaceholder: "Paste links to farm images if they are already online.",
          uploadLabel: "Upload farm images",
          uploadNote: "Images stay in this browser session for preview until a live submission service is connected.",
          submit: "Submit local contribution"
        },
        status: {
          chooseProvince: "Choose a province before saving a contribution.",
          addContribution: "Add at least one contribution detail, map link, boundary note, image link, or farm image.",
          saved: "Contribution saved locally in this browser. It is ready to be connected to a future submission service.",
          storageUnavailable: "Local storage is unavailable in this browser, so the submission could not be saved."
        },
        tags: {
          mapsLink: "Maps link",
          boundaryNotes: "Boundary notes",
          imageLinks: "Image links",
          images: "{count} image{plural}"
        }
      },
      atlas: {
        emptyBreeds: "No breeds match the current search and filter.",
        chooseAnimalForProvince: "Choose an animal to see its mapped presence in this province.",
        notMappedToProvince: "{animal} is not currently mapped to {province}.",
        mappedToProvince: "{animal} is mapped to {province}. The province is filled immediately when you choose the animal.",
        coverage: "{category} · {percentage}% coverage"
      }
    },
    af: {
      pageTitles: {
        home: "Suid-Afrikaanse Lewendehawe-atlas",
        feedback: "Gemeenskapsterugvoer | Suid-Afrikaanse Lewendehawe-atlas"
      },
      common: {
        brand: "Suid-Afrikaanse Lewendehawe-atlas",
        language: "Taal",
        languageSelector: "Taalkieser",
        theme: {
          light: "Ligte modus",
          dark: "Donker modus",
          switchToLight: "Skakel na ligte modus",
          switchToDark: "Skakel na donker modus"
        },
        public: "Publiek",
        active: "aktief",
        browserOnly: "Slegs blaaier",
        selectProvince: "Kies 'n provinsie",
        noLocalSubmissions: "Geen plaaslike bydraes is nog in hierdie blaaier gestoor nie.",
        anonymousContributor: "Anonieme bydraer",
        provinceNotSupplied: "Provinsie nie verskaf nie",
        contributionSavedFallback: "Bydraebesonderhede is plaaslik gestoor.",
        lang: {
          en: "Engels",
          af: "Afrikaans"
        }
      },
      home: {
        hero: {
          title: "Verken waar belangrike skaap-, bok- en beesrasse algemeen regoor Suid-Afrika voorkom.",
          copy: "Filtreer rasse, kies een dier, en die provinsiale kaart werk onmiddellik by om te wys waar dit algemeen voorkom.",
          feedbackLink: "Gemeenskapsterugvoer"
        },
        callout: {
          kicker: "Gemeenskapsterugvoer",
          title: "Help om plaaslike lewendehawe-kartering te verbeter",
          copy: "Maak die toegewyde terugvoerblad oop om plaasbesonderhede, Google Maps-liggings, grensnotas, beelde en spesie-inligting in te dien vir meer akkurate provinsiale kartering.",
          link: "Maak terugvoerblad oop"
        },
        services: {
          kicker: "Plaaswebwerwe & Sagteware",
          copy: "As jou plaas nog nie 'n webwerf het nie, sal ons 'n professioneel-voorkomende webwerf vir jou bou met enige funksies wat jy benodig. Indien pasgemaakte sagteware nodig is om enige plaasproses te stroomlyn, kontak ons ook via WhatsApp of E-pos hieronder.",
          whatsappLabel: "WhatsApp",
          whatsappAria: "Maak WhatsApp-gesprek oop",
          emailLabel: "E-pos",
          emailAria: "Stuur 'n e-pos"
        },
        metrics: {
          breeds: "Rasse gelaai",
          provinces: "Suid-Afrikaanse provinsies",
          sources: "Brongebaseerde datastel"
        },
        controls: {
          kicker: "Rasbeheer",
          title: "Kies een dier en ken 'n kleur toe"
        },
        search: {
          label: "Soek diere",
          placeholder: "Soek Dorper, Nguni, Boerbok..."
        },
        breeds: {
          toggle: "Raslys",
          toggleHint: "Tik om die volledige lys oop te vou en te blaai",
          count: "{count} rasse"
        },
        filters: {
          toggle: "Spesie-filters",
          toggleHint: "Tik om al die kategorieë te wys",
          all: "Alles",
          sheep: "Skape",
          goat: "Bokke",
          cattle: "Beeste"
        },
        note: {
          title: "Hoe om dit te gebruik",
          copy: "Klik op enige dierekaart om die kaart onmiddellik in te kleur. Slegs een dier is op 'n slag aktief, en 'n kleurverandering werk die kaart dadelik by.",
          show: "Klik hier om te lees",
          hide: "Klik hier om beskrywing te versteek"
        },
        map: {
          kicker: "Provinsiale Aansig",
          title: "Suid-Afrika se rasverspreidingskaart",
          helper: "Die aktiewe dier word onmiddellik oor elke provinsie ingekleur waar dit gekarteer is.",
          aria: "Gedetailleerde kaart van Suid-Afrika se provinsies"
        },
        province: {
          kicker: "Provinsiefokus",
          defaultTitle: "Kies of wys na 'n provinsie",
          defaultDescription: "Die detailpaneel wys of die aktiewe dier in die gekose provinsie vertoon word."
        },
        source: {
          kicker: "Datanotas",
          title: "Brondeursigtigheid",
          badge: "Provinsievlak",
          copy: "Hierdie demonstrasie gebruik openbare rasgidse en landbouverwysings, insluitend SA Stud Book-genootskapslyste en Suid-Afrikaanse lewendehawe-verwysingsbladsye. Die kaart dui breë provinsiale teenwoordigheid en aanpassing aan, nie lewende plaas-tot-plaas registrasietellings nie."
        },
        drilldown: {
          kicker: "Provinsie-zoem",
          title: "Kies 'n provinsie om die kaart te fokus",
          copy: "Provinsiale afboor is nou beskikbaar, maar nie alle gebiedsvlak-lewendehawe data is nog bygevoeg nie. Die gefokusde provinsiale aansig sal meer akkuraat word soos meer streeksinligting beskikbaar raak.",
          enlarge: "Vergroot",
          closeOverlay: "Maak toe",
          return: "Keer terug na Suid-Afrika",
          focusAria: "Fokus {province}"
        },
        status: {
          default: "Kies 'n dier om die kaart in te kleur",
          painted: "{animal} is oor die kaart ingekleur"
        },
        breed: {
          live: "Lewend",
          show: "Wys",
          foundIn: "Kom in {count} gekarteerde provinsies voor",
          colorAria: "Kies kleur vir {animal}"
        }
      },
      categories: {
        sheep: "Skaap",
        goat: "Bok",
        cattle: "Bees"
      },
      feedback: {
        backHome: "Terug na Atlas Tuis",
        kicker: "Gemeenskapsterugvoer",
        title: "Dien plaasinligting en liggingbesonderhede in",
        note: "Bydraes word tans plaaslik in hierdie blaaier gestoor sodat die indieningsvloei gereed is voordat 'n agtergronddiens bygevoeg word.",
        recent: {
          title: "Onlangse plaaslike indienings"
        },
        form: {
          optionalPlaceholder: "Opsioneel",
          nameLabel: "Naam of plaasnaam",
          contactLabel: "Kontak-e-pos of telefoon",
          provinceLabel: "Provinsie",
          speciesLabel: "Dierspesies of rasse",
          speciesPlaceholder: "Dorper, Boerbok, Nguni, gemengde beeste...",
          propertyLabel: "Plaas- en lewendehawebesonderhede",
          propertyPlaceholder: "Beskryf die lewendehawe op jou eiendom, weidingsgebied, produksietipe of plaaslike toestande.",
          mapsLabel: "Google Maps-skakels of koördinate",
          mapsPlaceholder: "Plak Google Maps-skakels, penne of breedte-/lengtegraad koördinate.",
          boundaryLabel: "Grensnotas of versoek vir area-afbakening",
          boundaryPlaceholder: "Beskryf plaasgrense, kampuitleg, of waar area-grense op die provinsiale kaart aangedui moet word.",
          imageLinksLabel: "Plaasbeeld-skakels",
          imageLinksPlaceholder: "Plak skakels na plaasbeelde indien dit reeds aanlyn is.",
          uploadLabel: "Laai plaasbeelde op",
          uploadNote: "Beelde bly in hierdie blaaiersessie vir voorskou totdat 'n lewendige indieningsdiens gekoppel word.",
          submit: "Dien plaaslike bydrae in"
        },
        status: {
          chooseProvince: "Kies 'n provinsie voordat jy 'n bydrae stoor.",
          addContribution: "Voeg ten minste een bydraebesonderheid, kaartskakel, grensnota, beeldskakel of plaasbeeld by.",
          saved: "Bydrae is plaaslik in hierdie blaaier gestoor. Dit is gereed om aan 'n toekomstige indieningsdiens gekoppel te word.",
          storageUnavailable: "Plaaslike stoorplek is nie in hierdie blaaier beskikbaar nie, daarom kon die bydrae nie gestoor word nie."
        },
        tags: {
          mapsLink: "Kaartskakel",
          boundaryNotes: "Grensnotas",
          imageLinks: "Beeldskakels",
          images: "{count} beeld{plural}"
        }
      },
      atlas: {
        emptyBreeds: "Geen rasse pas by die huidige soektog en filter nie.",
        chooseAnimalForProvince: "Kies 'n dier om sy gekarteerde teenwoordigheid in hierdie provinsie te sien.",
        notMappedToProvince: "{animal} is tans nie aan {province} gekarteer nie.",
        mappedToProvince: "{animal} is aan {province} gekarteer. Die provinsie word onmiddellik ingekleur wanneer jy die dier kies.",
        coverage: "{category} · {percentage}% dekking"
      }
    }
  };

  function getLanguage() {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "af" ? "af" : "en";
  }

  function getTheme() {
    try {
      const stored = window.localStorage.getItem(themeStorageKey);
      if (stored === "dark" || stored === "light") {
        return stored;
      }

      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  }

  function interpolate(template, vars = {}) {
    return template.replace(/\{(.*?)\}/g, (_, key) => String(vars[key] ?? ""));
  }

  function resolveKey(key, language = getLanguage()) {
    return key.split(".").reduce((result, part) => result?.[part], dictionary[language]);
  }

  function t(key, vars = {}) {
    const resolved = resolveKey(key, getLanguage());
    if (typeof resolved !== "string") {
      return key;
    }

    return interpolate(resolved, vars);
  }

  function provinceName(code, language = getLanguage()) {
    return provinceNames[language]?.[code] ?? provinceNames.en[code] ?? code;
  }

  function animalSummary(id, fallback) {
    return animalSummaries[getLanguage()]?.[id] ?? fallback;
  }

  function animalSourceNote(id, index, fallback) {
    return sourceNotes[getLanguage()]?.[`${id}:${index}`] ?? fallback;
  }

  function setDocumentLanguage() {
    const language = getLanguage();
    document.documentElement.lang = language === "af" ? "af" : "en";
    const page = document.body?.dataset.page;
    if (page) {
      document.title = dictionary[language].pageTitles[page];
    }
  }

  function applyTranslations(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });

    root.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    root.querySelectorAll(".js-language-select").forEach((select) => {
      select.value = getLanguage();
      [...select.options].forEach((option) => {
        if (option.dataset.i18n) {
          option.textContent = t(option.dataset.i18n);
        }
      });
    });

    setDocumentLanguage();
    updateThemeToggles(root);
  }

  function updateThemeToggles(root = document) {
    const isDark = getTheme() === "dark";
    const labelKey = isDark ? "common.theme.light" : "common.theme.dark";
    const ariaKey = isDark ? "common.theme.switchToLight" : "common.theme.switchToDark";
    const nextTheme = isDark ? "light" : "dark";

    root.querySelectorAll(".js-theme-toggle").forEach((button) => {
      button.dataset.nextTheme = nextTheme;
      button.setAttribute("aria-label", t(ariaKey));
      button.setAttribute("title", t(ariaKey));
      button.setAttribute("aria-pressed", isDark ? "true" : "false");

      const label = button.querySelector(".theme-toggle-label");
      if (label) {
        label.textContent = t(labelKey);
      }
    });
  }

  function applyTheme(theme = getTheme()) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    if (document.body) {
      document.body.dataset.theme = next;
    }
    updateThemeToggles(document);
  }

  function setLanguage(language) {
    const next = language === "af" ? "af" : "en";
    window.localStorage.setItem(storageKey, next);
    applyTranslations(document);
    window.dispatchEvent(new CustomEvent("site-language-change", { detail: { language: next } }));
  }

  function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";

    try {
      window.localStorage.setItem(themeStorageKey, next);
    } catch {
      // Ignore storage failures and still apply the theme for the current session.
    }

    applyTheme(next);
    window.dispatchEvent(new CustomEvent("site-theme-change", { detail: { theme: next } }));
  }

  function toggleTheme() {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  }

  function initSelectors() {
    document.querySelectorAll(".js-language-select").forEach((select) => {
      select.value = getLanguage();
      select.addEventListener("change", (event) => {
        setLanguage(event.target.value);
      });
    });

    document.querySelectorAll(".js-theme-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        toggleTheme();
      });
    });
  }

  function init() {
    applyTheme(getTheme());
    applyTranslations(document);
    initSelectors();
  }

  window.SiteI18n = {
    t,
    getLanguage,
    getTheme,
    setLanguage,
    setTheme,
    applyTranslations,
    provinceName,
    animalSummary,
    animalSourceNote
  };

  init();
})();