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
        home: "Agri Atlas",
        feedback: "Community Feedback | Agri Atlas"
      },
      common: {
        brand: "Agri Atlas",
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
        scrollToTop: "Scroll to top",
        scrollToBottom: "Scroll to bottom",
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
          title: "Welcome to Agri Atlas!\nExplore registered farmers offering products and services by searching the categories below — see their area data highlighted on the map to find business opportunities and lasting partnerships. Agri Atlas is not part of any other Agri company, it is an entity on its own.",
          titleIntro: "Welcome to Agri Atlas!",
          titleBody: "Explore registered farmers offering products and services by searching the categories below — see their area data highlighted on the map to find business opportunities and lasting partnerships.",
          disclaimerLineOne: "Agri Atlas is not part of any other Agri",
          disclaimerLineTwo: "company, it is an entity on its own.",
          feedbackLink: "Community Feedback",
          categoriesLabel: "Categories",
          categories: {
            animals: "Animals",
            plants: "Plants",
            items: "Items",
            services: "Services"
          }
        },
        callout: {
          kicker: "Community Feedback",
          title: "Help improve local livestock mapping",
          copy: "Open the dedicated feedback page to submit farm details, Google Maps locations, property boundary notes, images, and species information for more accurate provincial mapping.",
          link: "Open feedback page"
        },
        services: {
          kicker: "Farm Websites & Software",
          badge: "Advertisement",
          copy: "Agri Atlas also offers software development services for your farming needs whether you require a farm website or custom software. Contact us below via WhatsApp or E-mail for a quotation — provide as much information about your requirements as possible for a speedy process.",
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
        catalog: {
          animals: {
            kicker: "Animals",
            title: "Choose one animal and assign a color",
            requestKicker: "Missing animal or breed?",
            requestTitle: "Request it before registration is completed",
            requestCopy: "If a farmer needs an animal type or breed that does not exist in Stellards yet, they should submit it on the Sign up page so it can be added before registration is completed.",
            requestAction: "Open the Sign up request section"
          },
          plants: {
            kicker: "Plants",
            title: "Search trees, fruits, vegetables, and crop plants",
            badge: "Unavailable until package upgrade",
            searchLabel: "Search plants",
            searchPlaceholder: "Search citrus tree, spinach seedlings, maize seed...",
            listTitle: "Plant list",
            listHint: "Tap to expand and browse all current plant examples",
            count: "{count} plants",
            noteCopy: "Search the plant name or expand the list to browse trees, fruit plants, vegetables, and crop-based plant examples. Click any plant card to highlight the provinces where that sample plant would be shown in the atlas. Only one plant is active at a time, and changing its color updates the map immediately.",
            availabilityKicker: "Availability",
            availabilityTitle: "Plants are not connected to Stellards yet",
            availabilityCopy: "Plant seller registrations remain pending until the higher package unlocks dedicated plant tables.",
            requestKicker: "Missing plant?",
            requestTitle: "Ask for a new plant before registration is completed",
            requestCopy: "If the tree, fruit plant, vegetable, or crop plant you want to register is missing, use the Sign up request section and contact us so it can be added before registration is finalised.",
            requestAction: "Request a plant on Sign up",
            mapTitle: "South Africa plant availability map",
            mapHelper: "The active plant is highlighted immediately across every province where the current sample listing is shown.",
            statusDefault: "Choose a plant to paint the map",
            statusPainted: "{plant} is painted across the map",
            provinceDefaultDescription: "The detail panel shows whether the active plant is displayed in the chosen province.",
            provinceNoSelection: "Choose a plant to see its mapped availability in this province.",
            provinceMapped: "{plant} is shown in {province}. The province is filled immediately when you choose the plant.",
            provinceNotMapped: "{plant} is not currently shown in {province}.",
            sourceCopy: "These sample plant entries are temporary placeholders for your future Stellards plant catalog. They show how provincial discovery and transparency will work once plant tables are available.",
            sourceEmpty: "Select a plant to load its current sample availability notes.",
            foundIn: "Shown in {count} mapped provinces",
            colorAria: "Choose color for {plant}",
            resultsKicker: "Plants Directory",
            resultsTitle: "Searchable plant examples",
            defaultStatus: "Plants pending database upgrade",
            selectedStatus: "Selected plant: {entry}",
            detailKicker: "Selected plant",
            defaultDetailTitle: "Select a plant",
            defaultDetailCopy: "Choose a plant card to preview how it will be grouped once plant tables are available.",
            defaultDetailMeta: "Registration for plant sellers stays pending until Stellards plant tables are enabled.",
            selectedDetailMeta: "Category: {group}. Plant seller registration still waits for the plant tables to be enabled.",
            empty: "No plants match the current search."
          },
          items: {
            kicker: "Items",
            title: "Search farm items and supplies",
            badge: "Unavailable until package upgrade",
            searchLabel: "Search items",
            searchPlaceholder: "Search Red-Cat cage, trough, feeder...",
            listTitle: "Item list",
            listHint: "Tap to expand and browse all current item examples",
            count: "{count} items",
            noteCopy: "Search the item name or expand the list to browse all current item examples. Click any item card to highlight the provinces where that sample item would be shown in the atlas. Only one item is active at a time, and changing its color updates the map immediately.",
            availabilityKicker: "Availability",
            availabilityTitle: "Items are not connected to Stellards yet",
            availabilityCopy: "Only the animal database is active right now. Item seller registrations remain pending until the higher package unlocks item tables.",
            requestKicker: "Missing item?",
            requestTitle: "Ask for a new item before registration is completed",
            requestCopy: "If the item you want to trade in is missing, use the Sign up request section and contact us so it can be added before the registration is finalised.",
            requestAction: "Request an item on Sign up",
            mapTitle: "South Africa item availability map",
            mapHelper: "The active item is highlighted immediately across every province where the current sample listing is shown.",
            statusDefault: "Choose an item to paint the map",
            statusPainted: "{item} is painted across the map",
            provinceDefaultDescription: "The detail panel shows whether the active item is displayed in the chosen province.",
            provinceNoSelection: "Choose an item to see its mapped availability in this province.",
            provinceMapped: "{item} is shown in {province}. The province is filled immediately when you choose the item.",
            provinceNotMapped: "{item} is not currently shown in {province}.",
            sourceCopy: "These sample item entries are temporary placeholders for your future Stellards item catalog. They show how provincial discovery and transparency will work once item tables are available.",
            sourceEmpty: "Select an item to load its current sample availability notes.",
            foundIn: "Shown in {count} mapped provinces",
            colorAria: "Choose color for {item}",
            resultsKicker: "Items Directory",
            resultsTitle: "Searchable item examples",
            defaultStatus: "Items pending database upgrade",
            selectedStatus: "Selected item: {entry}",
            detailKicker: "Selected item",
            defaultDetailTitle: "Select an item",
            defaultDetailCopy: "Choose an item card to preview how it will be grouped once item tables are available.",
            defaultDetailMeta: "Registration for item sellers stays pending until Stellards item tables are enabled.",
            selectedDetailMeta: "Category: {group}. Item seller registration still waits for the item tables to be enabled.",
            empty: "No items match the current search."
          },
          services: {
            kicker: "Services",
            title: "Search farm services",
            badge: "Unavailable until package upgrade",
            searchLabel: "Search services",
            searchPlaceholder: "Search fencing, transport, shearing...",
            listTitle: "Service list",
            listHint: "Tap to expand and browse all current service examples",
            count: "{count} services",
            noteCopy: "Search the service name or expand the list to browse all current service examples. Click any service card to highlight the provinces where that sample service would be shown in the atlas. Only one service is active at a time, and changing its color updates the map immediately.",
            availabilityKicker: "Availability",
            availabilityTitle: "Services are not connected to Stellards yet",
            availabilityCopy: "Service provider registrations remain pending until Stellards supports dedicated service tables in your upgraded package.",
            requestKicker: "Missing service?",
            requestTitle: "Ask for a new service before registration is completed",
            requestCopy: "If a service is missing from Stellards, use the Sign up request section and contact us so the service can be added before registration is finalised.",
            requestAction: "Request a service on Sign up",
            mapTitle: "South Africa service availability map",
            mapHelper: "The active service is highlighted immediately across every province where the current sample listing is shown.",
            statusDefault: "Choose a service to paint the map",
            statusPainted: "{service} is painted across the map",
            provinceDefaultDescription: "The detail panel shows whether the active service is displayed in the chosen province.",
            provinceNoSelection: "Choose a service to see its mapped availability in this province.",
            provinceMapped: "{service} is shown in {province}. The province is filled immediately when you choose the service.",
            provinceNotMapped: "{service} is not currently shown in {province}.",
            sourceCopy: "These sample service entries are temporary placeholders for your future Stellards service catalog. They show how provincial discovery and transparency will work once service tables are available.",
            sourceEmpty: "Select a service to load its current sample availability notes.",
            foundIn: "Shown in {count} mapped provinces",
            colorAria: "Choose color for {service}",
            resultsKicker: "Services Directory",
            resultsTitle: "Searchable service examples",
            defaultStatus: "Services pending database upgrade",
            selectedStatus: "Selected service: {entry}",
            detailKicker: "Selected service",
            defaultDetailTitle: "Select a service",
            defaultDetailCopy: "Choose a service card to preview how it will be grouped once service tables are available.",
            defaultDetailMeta: "Registration for service providers stays pending until Stellards service tables are enabled.",
            selectedDetailMeta: "Category: {group}. Service provider registration still waits for the service tables to be enabled.",
            empty: "No services match the current search."
          }
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
          copy: "This demo uses public breed directories and agricultural references, including SA Stud Book society listings and South African livestock reference pages. The map indicates broad provincial presence and adaptation, not live farm-by-farm registry counts.",
          show: "Click here to read",
          hide: "Click here to hide description"
        },
        farmerWebsites: {
          kicker: "Farmer Websites",
          title: "Available farmer websites",
          copy: "These Stellards-linked farmer websites sell the selected animal. Click any logo or website name to open it in a new tab."
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
        home: "Agri Atlas",
        feedback: "Gemeenskapsterugvoer | Agri Atlas"
      },
      common: {
        brand: "Agri Atlas",
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
        scrollToTop: "Blaai na bo",
        scrollToBottom: "Blaai na onder",
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
          title: "Verken waar belangrike skaap-, bok- en beesrasse algemeen regoor Suid-Afrika voorkom. Agri Atlas is nie deel van enige ander Agri-maatskappy nie; dit is 'n selfstandige entiteit.",
          titleIntro: "Welkom by Agri Atlas!",
          titleBody: "Verken waar belangrike skaap-, bok- en beesrasse algemeen regoor Suid-Afrika voorkom.",
          disclaimerLineOne: "Agri Atlas is nie deel van enige ander",
          disclaimerLineTwo: "Agri-maatskappy nie; dit is 'n selfstandige entiteit.",
          feedbackLink: "Gemeenskapsterugvoer",
          categoriesLabel: "Kategoriee",
          categories: {
            animals: "Diere",
            plants: "Plante",
            items: "Items",
            services: "Dienste"
          }
        },
        callout: {
          kicker: "Gemeenskapsterugvoer",
          title: "Help om plaaslike lewendehawe-kartering te verbeter",
          copy: "Maak die toegewyde terugvoerblad oop om plaasbesonderhede, Google Maps-liggings, grensnotas, beelde en spesie-inligting in te dien vir meer akkurate provinsiale kartering.",
          link: "Maak terugvoerblad oop"
        },
        services: {
          kicker: "Plaaswebwerwe & Sagteware",
          badge: "Advertensie",
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
        catalog: {
          animals: {
            kicker: "Diere",
            title: "Kies een dier en ken 'n kleur toe",
            requestKicker: "Ontbrekende dier of ras?",
            requestTitle: "Versoek dit voordat registrasie afgehandel word",
            requestCopy: "As 'n boer 'n diertipe of ras nodig het wat nog nie in Stellards bestaan nie, moet dit op die Sign up-blad ingedien word sodat dit bygevoeg kan word voordat registrasie afgehandel word.",
            requestAction: "Open die Sign up-versoekafdeling"
          },
          plants: {
            kicker: "Plante",
            title: "Soek bome, vrugte, groente, en gewasplante",
            badge: "Nie beskikbaar tot pakket-opgradering nie",
            searchLabel: "Soek plante",
            searchPlaceholder: "Soek sitrusboom, spinasiesaailinge, mieliesaad...",
            listTitle: "Plantlys",
            listHint: "Tik om uit te vou en alle huidige plantvoorbeelde te blaai",
            count: "{count} plante",
            noteCopy: "Soek vir die plantnaam of vou die lys oop om bome, vrugteplante, groente, en gewasplant-voorbeelde te blaai. Klik op enige plantkaart om die provinsies uit te lig waar daardie voorbeeldplant in die atlas gewys sou word. Net een plant is op 'n slag aktief en kleurveranderinge werk die kaart onmiddellik by.",
            availabilityKicker: "Beskikbaarheid",
            availabilityTitle: "Plante is nog nie aan Stellards gekoppel nie",
            availabilityCopy: "Registrasies vir plantverkopers bly hangend totdat die hoer pakket toegewyde planttabelle ontsluit.",
            requestKicker: "Ontbrekende plant?",
            requestTitle: "Vra vir 'n nuwe plant voordat registrasie afgehandel word",
            requestCopy: "As die boom, vrugteplant, groente, of gewasplant wat jy wil registreer ontbreek, gebruik die Sign up-versoekafdeling en kontak ons sodat dit bygevoeg kan word voordat registrasie afgehandel word.",
            requestAction: "Versoek 'n plant op Sign up",
            mapTitle: "Suid-Afrika plantbeskikbaarheidskaart",
            mapHelper: "Die aktiewe plant word onmiddellik uitgelig oor elke provinsie waar die huidige voorbeeldlys dit wys.",
            statusDefault: "Kies 'n plant om die kaart in te kleur",
            statusPainted: "{plant} is oor die kaart ingekleur",
            provinceDefaultDescription: "Die detailpaneel wys of die aktiewe plant in die gekose provinsie vertoon word.",
            provinceNoSelection: "Kies 'n plant om sy gekarteerde beskikbaarheid in hierdie provinsie te sien.",
            provinceMapped: "{plant} word in {province} gewys. Die provinsie word onmiddellik ingevul wanneer jy die plant kies.",
            provinceNotMapped: "{plant} word tans nie in {province} gewys nie.",
            sourceCopy: "Hierdie voorbeeldplante is tydelike plekhouers vir jou toekomstige Stellards-plantkatalogus. Hulle wys hoe provinsiale ontdekking en deursigtigheid sal werk sodra planttabelle beskikbaar is.",
            sourceEmpty: "Kies 'n plant om sy huidige voorbeeld-beskikbaarheidsnotas te laai.",
            foundIn: "Word in {count} gekarteerde provinsies gewys",
            colorAria: "Kies kleur vir {plant}",
            resultsKicker: "Plantgids",
            resultsTitle: "Soekbare plantvoorbeelde",
            defaultStatus: "Plante wag vir databasis-opgradering",
            selectedStatus: "Geselekteerde plant: {entry}",
            detailKicker: "Geselekteerde plant",
            defaultDetailTitle: "Kies 'n plant",
            defaultDetailCopy: "Kies 'n plantkaart om te sien hoe dit gegroepeer sal word sodra planttabelle beskikbaar is.",
            defaultDetailMeta: "Registrasie vir plantverkopers bly hangend totdat Stellards se planttabelle geaktiveer is.",
            selectedDetailMeta: "Kategorie: {group}. Registrasie vir plantverkopers wag steeds vir planttabelle om geaktiveer te word.",
            empty: "Geen plante pas by die huidige soektog nie."
          },
          items: {
            kicker: "Items",
            title: "Soek plaasitems en voorraad",
            badge: "Nie beskikbaar tot pakket-opgradering nie",
            searchLabel: "Soek items",
            searchPlaceholder: "Soek Red-Cat hok, trog, voerder...",
            listTitle: "Itemlys",
            listHint: "Tik om uit te vou en alle huidige itemvoorbeelde te blaai",
            count: "{count} items",
            noteCopy: "Soek vir die itemnaam of vou die lys oop om alle huidige itemvoorbeelde te blaai. Klik op enige itemkaart om die provinsies uit te lig waar daardie voorbeelditem in die atlas gewys sou word. Net een item is op 'n slag aktief en kleurveranderinge werk die kaart onmiddellik by.",
            availabilityKicker: "Beskikbaarheid",
            availabilityTitle: "Items is nog nie aan Stellards gekoppel nie",
            availabilityCopy: "Slegs die dieredatabasis is tans aktief. Registrasies vir itemverkopers bly hangend totdat die hoer pakket itemtabelle ontsluit.",
            requestKicker: "Ontbrekende item?",
            requestTitle: "Vra vir 'n nuwe item voordat registrasie afgehandel word",
            requestCopy: "As die item waarmee jy wil handel ontbreek, gebruik die Sign up-versoekafdeling en kontak ons sodat dit bygevoeg kan word voordat registrasie afgehandel word.",
            requestAction: "Versoek 'n item op Sign up",
            mapTitle: "Suid-Afrika itembeskikbaarheidskaart",
            mapHelper: "Die aktiewe item word onmiddellik uitgelig oor elke provinsie waar die huidige voorbeeldlys dit wys.",
            statusDefault: "Kies 'n item om die kaart in te kleur",
            statusPainted: "{item} is oor die kaart ingekleur",
            provinceDefaultDescription: "Die detailpaneel wys of die aktiewe item in die gekose provinsie vertoon word.",
            provinceNoSelection: "Kies 'n item om sy gekarteerde beskikbaarheid in hierdie provinsie te sien.",
            provinceMapped: "{item} word in {province} gewys. Die provinsie word onmiddellik ingevul wanneer jy die item kies.",
            provinceNotMapped: "{item} word tans nie in {province} gewys nie.",
            sourceCopy: "Hierdie voorbeelditems is tydelike plekhouers vir jou toekomstige Stellards-itemkatalogus. Hulle wys hoe provinsiale ontdekking en deursigtigheid sal werk sodra itemtabelle beskikbaar is.",
            sourceEmpty: "Kies 'n item om sy huidige voorbeeld-beskikbaarheidsnotas te laai.",
            foundIn: "Word in {count} gekarteerde provinsies gewys",
            colorAria: "Kies kleur vir {item}",
            resultsKicker: "Itemgids",
            resultsTitle: "Soekbare itemvoorbeelde",
            defaultStatus: "Items wag vir databasis-opgradering",
            selectedStatus: "Geselekteerde item: {entry}",
            detailKicker: "Geselekteerde item",
            defaultDetailTitle: "Kies 'n item",
            defaultDetailCopy: "Kies 'n itemkaart om te sien hoe dit gegroepeer sal word sodra itemtabelle beskikbaar is.",
            defaultDetailMeta: "Registrasie vir itemverkopers bly hangend totdat Stellards se itemtabelle geaktiveer is.",
            selectedDetailMeta: "Kategorie: {group}. Registrasie vir itemverkopers wag steeds vir itemtabelle om geaktiveer te word.",
            empty: "Geen items pas by die huidige soektog nie."
          },
          services: {
            kicker: "Dienste",
            title: "Soek plaasdienste",
            badge: "Nie beskikbaar tot pakket-opgradering nie",
            searchLabel: "Soek dienste",
            searchPlaceholder: "Soek heinings, vervoer, skeer...",
            listTitle: "Dienslys",
            listHint: "Tik om uit te vou en alle huidige diensvoorbeelde te blaai",
            count: "{count} dienste",
            noteCopy: "Soek vir die diensnaam of vou die lys oop om alle huidige diensvoorbeelde te blaai. Klik op enige dienskaart om die provinsies uit te lig waar daardie voorbeeld-diens in die atlas gewys sou word. Net een diens is op 'n slag aktief en kleurveranderinge werk die kaart onmiddellik by.",
            availabilityKicker: "Beskikbaarheid",
            availabilityTitle: "Dienste is nog nie aan Stellards gekoppel nie",
            availabilityCopy: "Registrasies vir diensverskaffers bly hangend totdat Stellards toegewyde dienstetabelle in jou opgegradeerde pakket ondersteun.",
            requestKicker: "Ontbrekende diens?",
            requestTitle: "Vra vir 'n nuwe diens voordat registrasie afgehandel word",
            requestCopy: "As 'n diens in Stellards ontbreek, gebruik die Sign up-versoekafdeling en kontak ons sodat die diens bygevoeg kan word voordat registrasie afgehandel word.",
            requestAction: "Versoek 'n diens op Sign up",
            mapTitle: "Suid-Afrika diensbeskikbaarheidskaart",
            mapHelper: "Die aktiewe diens word onmiddellik uitgelig oor elke provinsie waar die huidige voorbeeldlys dit wys.",
            statusDefault: "Kies 'n diens om die kaart in te kleur",
            statusPainted: "{service} is oor die kaart ingekleur",
            provinceDefaultDescription: "Die detailpaneel wys of die aktiewe diens in die gekose provinsie vertoon word.",
            provinceNoSelection: "Kies 'n diens om sy gekarteerde beskikbaarheid in hierdie provinsie te sien.",
            provinceMapped: "{service} word in {province} gewys. Die provinsie word onmiddellik ingevul wanneer jy die diens kies.",
            provinceNotMapped: "{service} word tans nie in {province} gewys nie.",
            sourceCopy: "Hierdie voorbeelddienste is tydelike plekhouers vir jou toekomstige Stellards-dienskatalogus. Hulle wys hoe provinsiale ontdekking en deursigtigheid sal werk sodra dienstetabelle beskikbaar is.",
            sourceEmpty: "Kies 'n diens om sy huidige voorbeeld-beskikbaarheidsnotas te laai.",
            foundIn: "Word in {count} gekarteerde provinsies gewys",
            colorAria: "Kies kleur vir {service}",
            resultsKicker: "Diensegids",
            resultsTitle: "Soekbare diensvoorbeelde",
            defaultStatus: "Dienste wag vir databasis-opgradering",
            selectedStatus: "Geselekteerde diens: {entry}",
            detailKicker: "Geselekteerde diens",
            defaultDetailTitle: "Kies 'n diens",
            defaultDetailCopy: "Kies 'n dienskaart om te sien hoe dit gegroepeer sal word sodra dienstetabelle beskikbaar is.",
            defaultDetailMeta: "Registrasie vir diensverskaffers bly hangend totdat Stellards se dienstetabelle geaktiveer is.",
            selectedDetailMeta: "Kategorie: {group}. Registrasie vir diensverskaffers wag steeds vir dienstetabelle om geaktiveer te word.",
            empty: "Geen dienste pas by die huidige soektog nie."
          }
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
          copy: "Hierdie demonstrasie gebruik openbare rasgidse en landbouverwysings, insluitend SA Stud Book-genootskapslyste en Suid-Afrikaanse lewendehawe-verwysingsbladsye. Die kaart dui breë provinsiale teenwoordigheid en aanpassing aan, nie lewende plaas-tot-plaas registrasietellings nie.",
          show: "Klik hier om te lees",
          hide: "Klik hier om beskrywing te versteek"
        },
        farmerWebsites: {
          kicker: "Boerewebwerwe",
          title: "Beskikbare boerewebwerwe",
          copy: "Hierdie Stellards-gekoppelde boerewebwerwe verkoop die geselekteerde dier. Klik op enige logo of webwerfnaam om dit in 'n nuwe oortjie oop te maak."
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