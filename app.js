const FAMILY = { adults: 2, kids: 2 };

const RULES = [
  "Plan anual completo con 730 platos unicos: una comida y una cena por dia.",
  "No se repite ninguna combinacion culinaria en todo el ano.",
  "La cena nunca usa ni cerdo ni ternera: solo pollo o atun.",
  "La cena evita ingredientes pesados de digerir y no usa arroz ni legumbres por la noche.",
  "De lunes a viernes, los ninos solo cenan en casa.",
  "Sabados y domingos, comen y cenan en casa los 4.",
  "Proteinas base: pollo, ternera, cerdo y atun enlatado.",
  "No mezclar tipos de proteina en una misma receta.",
  "No mezclar carne y pescado.",
  "Cada receta muestra cantidades de preparacion y servicio.",
  "Cada procedimiento esta escrito para no-chefs con pasos muy guiados."
];

const PROTEIN_LABEL = {
  chicken: "Pollo",
  beef: "Ternera",
  pork: "Cerdo",
  tuna: "Atun enlatado"
};

const WEEKDAY_SHORT = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

const BLUEPRINTS = {
  chicken: {
    lunch: {
      methods: [
        { id: "grill", name: "a la plancha", heat: "sarten" },
        { id: "traybake", name: "al horno", heat: "horno" },
        { id: "stew", name: "guisado suave", heat: "cazuela" },
        { id: "skillet", name: "salteado", heat: "sarten" },
        { id: "papillote", name: "en papillote", heat: "horno" },
        { id: "crumb", name: "empanado ligero", heat: "horno" },
        { id: "roast", name: "asado", heat: "horno" },
        { id: "meatball", name: "en albondigas", heat: "cazuela" },
        { id: "stir", name: "al wok suave", heat: "sarten" },
        { id: "braise", name: "braseado", heat: "cazuela" }
      ],
      carbs: [
        { id: "potato", name: "patata asada", base: "Patata", adult: 220, kid: 120, unit: "g" },
        { id: "mashed", name: "pure rustico de patata", base: "Patata", adult: 220, kid: 120, unit: "g" },
        { id: "rice", name: "arroz blanco", base: "Arroz crudo", adult: 95, kid: 55, unit: "g" },
        { id: "sweetpotato", name: "boniato asado", base: "Boniato", adult: 220, kid: 120, unit: "g" },
        { id: "couscous", name: "cuscus sencillo", base: "Cuscus seco", adult: 90, kid: 50, unit: "g" },
        { id: "orzo", name: "orzo suave", base: "Orzo seco", adult: 90, kid: 50, unit: "g" },
        { id: "polenta", name: "polenta cremosa", base: "Polenta seca", adult: 85, kid: 45, unit: "g" },
        { id: "newpotatoes", name: "patata cocida", base: "Patata", adult: 210, kid: 110, unit: "g" }
      ],
      vegs: [
        { id: "zucchini", name: "calabacin", adult: 130, kid: 80, unit: "g" },
        { id: "carrot", name: "zanahoria", adult: 120, kid: 70, unit: "g" },
        { id: "greenbeans", name: "judia verde", adult: 130, kid: 70, unit: "g" },
        { id: "pepper", name: "pimiento rojo", adult: 120, kid: 70, unit: "g" },
        { id: "broccoli", name: "brocoli", adult: 120, kid: 70, unit: "g" },
        { id: "leek", name: "puerro", adult: 110, kid: 60, unit: "g" },
        { id: "peas", name: "guisantes", adult: 110, kid: 60, unit: "g" },
        { id: "spinach", name: "espinaca cocinada", adult: 100, kid: 55, unit: "g" }
      ],
      profiles: [
        "limon y oregano",
        "ajo y perejil",
        "pimenton dulce",
        "mostaza suave",
        "hierbas mediterraneas",
        "tomate y albahaca",
        "romero y limon",
        "yogur y especias suaves"
      ]
    },
    dinner: {
      methods: [
        { id: "grill", name: "a la plancha", heat: "sarten" },
        { id: "traybake", name: "al horno suave", heat: "horno" },
        { id: "papillote", name: "en papillote", heat: "horno" },
        { id: "skillet", name: "salteado suave", heat: "sarten" },
        { id: "stew", name: "guisado ligero", heat: "cazuela" },
        { id: "meatball", name: "en albondigas suaves", heat: "cazuela" },
        { id: "roast", name: "asado suave", heat: "horno" },
        { id: "crumb", name: "al horno crujiente ligero", heat: "horno" }
      ],
      carbs: [
        { id: "potato", name: "patata cocida", base: "Patata", adult: 180, kid: 100, unit: "g" },
        { id: "mashed", name: "pure suave de patata", base: "Patata", adult: 185, kid: 100, unit: "g" },
        { id: "sweetpotato", name: "boniato suave", base: "Boniato", adult: 180, kid: 100, unit: "g" },
        { id: "cauliflower", name: "pure de coliflor", base: "Coliflor", adult: 170, kid: 90, unit: "g" },
        { id: "pumpkin", name: "calabaza asada", base: "Calabaza", adult: 180, kid: 100, unit: "g" },
        { id: "newpotatoes", name: "patata templada", base: "Patata", adult: 175, kid: 95, unit: "g" }
      ],
      vegs: [
        { id: "zucchini", name: "calabacin suave", adult: 120, kid: 70, unit: "g" },
        { id: "carrot", name: "zanahoria cocinada", adult: 110, kid: 60, unit: "g" },
        { id: "leek", name: "puerro muy tierno", adult: 100, kid: 55, unit: "g" },
        { id: "spinach", name: "espinaca cocinada", adult: 90, kid: 50, unit: "g" },
        { id: "courgette", name: "calabacin pelado", adult: 120, kid: 70, unit: "g" },
        { id: "pumpkinveg", name: "calabaza suave", adult: 110, kid: 60, unit: "g" }
      ],
      profiles: [
        "limon suave",
        "oregano ligero",
        "ajo muy suave",
        "perejil fresco",
        "romero suave",
        "yogur ligero"
      ]
    }
  },
  beef: {
    lunch: {
      methods: [
        { id: "stir", name: "salteada", heat: "sarten" },
        { id: "braise", name: "braseada", heat: "cazuela" },
        { id: "stew", name: "guisada", heat: "cazuela" },
        { id: "meatball", name: "en albondigas", heat: "cazuela" },
        { id: "grill", name: "a la plancha", heat: "sarten" },
        { id: "roast", name: "asada", heat: "horno" },
        { id: "skillet", name: "en sarten", heat: "sarten" },
        { id: "ragu", name: "en ragu", heat: "cazuela" },
        { id: "slow", name: "a fuego lento", heat: "cazuela" },
        { id: "chilli", name: "estofada con tomate", heat: "cazuela" }
      ],
      carbs: [
        { id: "potato", name: "patata asada", base: "Patata", adult: 220, kid: 120, unit: "g" },
        { id: "mashed", name: "pure de patata", base: "Patata", adult: 220, kid: 120, unit: "g" },
        { id: "rice", name: "arroz blanco", base: "Arroz crudo", adult: 95, kid: 55, unit: "g" },
        { id: "pasta", name: "pasta corta", base: "Pasta seca", adult: 90, kid: 50, unit: "g" },
        { id: "polenta", name: "polenta", base: "Polenta seca", adult: 85, kid: 45, unit: "g" },
        { id: "noodle", name: "fideos finos", base: "Fideos secos", adult: 85, kid: 45, unit: "g" },
        { id: "orzo", name: "orzo", base: "Orzo seco", adult: 85, kid: 45, unit: "g" },
        { id: "sweetpotato", name: "boniato", base: "Boniato", adult: 210, kid: 110, unit: "g" }
      ],
      vegs: [
        { id: "pepper", name: "pimiento rojo", adult: 120, kid: 70, unit: "g" },
        { id: "carrot", name: "zanahoria", adult: 120, kid: 70, unit: "g" },
        { id: "leek", name: "puerro", adult: 110, kid: 60, unit: "g" },
        { id: "peas", name: "guisantes", adult: 110, kid: 60, unit: "g" },
        { id: "zucchini", name: "calabacin", adult: 120, kid: 70, unit: "g" },
        { id: "mushroom", name: "champinon", adult: 120, kid: 70, unit: "g" },
        { id: "tomato", name: "tomate cocinado", adult: 120, kid: 70, unit: "g" },
        { id: "broccoli", name: "brocoli", adult: 120, kid: 70, unit: "g" }
      ],
      profiles: [
        "pimenton y ajo",
        "tomate y oregano",
        "romero y cebolla",
        "mostaza suave",
        "comino suave",
        "hierbas provenzales",
        "laurel y tomate",
        "perejil y limon"
      ]
    }
  },
  pork: {
    lunch: {
      methods: [
        { id: "grill", name: "a la plancha", heat: "sarten" },
        { id: "roast", name: "asado", heat: "horno" },
        { id: "stew", name: "guisado", heat: "cazuela" },
        { id: "braise", name: "braseado", heat: "cazuela" },
        { id: "skillet", name: "en sarten", heat: "sarten" },
        { id: "paprika", name: "al pimenton", heat: "cazuela" },
        { id: "medallion", name: "en medallones", heat: "sarten" },
        { id: "stir", name: "salteado", heat: "sarten" },
        { id: "tray", name: "en bandeja", heat: "horno" },
        { id: "slow", name: "a fuego lento", heat: "cazuela" }
      ],
      carbs: [
        { id: "potato", name: "patata asada", base: "Patata", adult: 220, kid: 120, unit: "g" },
        { id: "mashed", name: "pure de patata", base: "Patata", adult: 220, kid: 120, unit: "g" },
        { id: "rice", name: "arroz blanco", base: "Arroz crudo", adult: 95, kid: 55, unit: "g" },
        { id: "sweetpotato", name: "boniato", base: "Boniato", adult: 210, kid: 110, unit: "g" },
        { id: "couscous", name: "cuscus", base: "Cuscus seco", adult: 90, kid: 50, unit: "g" },
        { id: "polenta", name: "polenta", base: "Polenta seca", adult: 85, kid: 45, unit: "g" },
        { id: "orzo", name: "orzo", base: "Orzo seco", adult: 85, kid: 45, unit: "g" },
        { id: "newpotatoes", name: "patata cocida", base: "Patata", adult: 210, kid: 110, unit: "g" }
      ],
      vegs: [
        { id: "greenbeans", name: "judia verde", adult: 120, kid: 70, unit: "g" },
        { id: "zucchini", name: "calabacin", adult: 120, kid: 70, unit: "g" },
        { id: "carrot", name: "zanahoria", adult: 120, kid: 70, unit: "g" },
        { id: "pepper", name: "pimiento", adult: 120, kid: 70, unit: "g" },
        { id: "mushroom", name: "champinon", adult: 120, kid: 70, unit: "g" },
        { id: "leek", name: "puerro", adult: 110, kid: 60, unit: "g" },
        { id: "spinach", name: "espinaca cocinada", adult: 100, kid: 55, unit: "g" },
        { id: "tomato", name: "tomate cocinado", adult: 120, kid: 70, unit: "g" }
      ],
      profiles: [
        "mostaza y miel suave",
        "pimenton y ajo",
        "romero y limon",
        "hierbas mediterraneas",
        "oregano y tomate",
        "manzana suave y romero",
        "perejil y ajo",
        "limon y tomillo"
      ]
    }
  },
  tuna: {
    lunch: {
      methods: [
        { id: "patty", name: "en tortitas", heat: "sarten" },
        { id: "bowl", name: "en bol templado", heat: "mezcla" },
        { id: "potato", name: "con patata templada", heat: "mezcla" },
        { id: "salad", name: "en ensalada proteica", heat: "mezcla" },
        { id: "bake", name: "al horno suave", heat: "horno" },
        { id: "stuffed", name: "en relleno", heat: "horno" },
        { id: "mix", name: "mezclado", heat: "mezcla" },
        { id: "scramble", name: "templado en sarten", heat: "sarten" }
      ],
      carbs: [
        { id: "potato", name: "patata", base: "Patata", adult: 210, kid: 110, unit: "g" },
        { id: "rice", name: "arroz blanco", base: "Arroz crudo", adult: 90, kid: 50, unit: "g" },
        { id: "pasta", name: "pasta corta", base: "Pasta seca", adult: 85, kid: 45, unit: "g" },
        { id: "couscous", name: "cuscus", base: "Cuscus seco", adult: 85, kid: 45, unit: "g" },
        { id: "orzo", name: "orzo", base: "Orzo seco", adult: 85, kid: 45, unit: "g" },
        { id: "sweetpotato", name: "boniato", base: "Boniato", adult: 200, kid: 110, unit: "g" },
        { id: "chickpea", name: "garbanzo cocido", base: "Garbanzo cocido escurrido", adult: 140, kid: 80, unit: "g" },
        { id: "lentil", name: "lenteja cocida", base: "Lenteja cocida escurrida", adult: 140, kid: 80, unit: "g" }
      ],
      vegs: [
        { id: "tomato", name: "tomate", adult: 130, kid: 70, unit: "g" },
        { id: "pepino", name: "pepino", adult: 130, kid: 70, unit: "g" },
        { id: "carrot", name: "zanahoria", adult: 110, kid: 60, unit: "g" },
        { id: "zucchini", name: "calabacin", adult: 110, kid: 60, unit: "g" },
        { id: "pepper", name: "pimiento rojo", adult: 120, kid: 70, unit: "g" },
        { id: "corn", name: "maiz dulce", adult: 100, kid: 55, unit: "g" },
        { id: "spinach", name: "espinaca", adult: 100, kid: 55, unit: "g" },
        { id: "greenbeans", name: "judia verde", adult: 120, kid: 70, unit: "g" }
      ],
      profiles: [
        "limon y perejil",
        "oregano y tomate",
        "ajo suave y limon",
        "mostaza ligera",
        "aceite y hierbas",
        "pimenton dulce",
        "albahaca y limon",
        "perejil y yogur"
      ]
    },
    dinner: {
      methods: [
        { id: "patty", name: "en tortitas", heat: "sarten" },
        { id: "warmbowl", name: "templado", heat: "mezcla" },
        { id: "skillet", name: "en sarten suave", heat: "sarten" },
        { id: "stuffed", name: "en relleno suave", heat: "horno" },
        { id: "mashmix", name: "mezclado con pure", heat: "mezcla" },
        { id: "bake", name: "al horno ligero", heat: "horno" },
        { id: "potato", name: "con patata cocida", heat: "mezcla" },
        { id: "flaked", name: "desmigado templado", heat: "mezcla" }
      ],
      carbs: [
        { id: "potato", name: "patata cocida", base: "Patata", adult: 180, kid: 100, unit: "g" },
        { id: "mashed", name: "pure suave de patata", base: "Patata", adult: 185, kid: 100, unit: "g" },
        { id: "sweetpotato", name: "boniato suave", base: "Boniato", adult: 180, kid: 100, unit: "g" },
        { id: "pumpkin", name: "calabaza asada", base: "Calabaza", adult: 180, kid: 100, unit: "g" },
        { id: "cauliflowermash", name: "pure de coliflor", base: "Coliflor", adult: 170, kid: 90, unit: "g" },
        { id: "newpotatoes", name: "patata templada", base: "Patata", adult: 175, kid: 95, unit: "g" }
      ],
      vegs: [
        { id: "zucchini", name: "calabacin pelado", adult: 120, kid: 70, unit: "g" },
        { id: "carrot", name: "zanahoria cocinada", adult: 110, kid: 60, unit: "g" },
        { id: "leek", name: "puerro tierno", adult: 100, kid: 55, unit: "g" },
        { id: "spinach", name: "espinaca cocinada", adult: 90, kid: 50, unit: "g" },
        { id: "pumpkinveg", name: "calabaza suave", adult: 110, kid: 60, unit: "g" },
        { id: "greenbeans", name: "judia verde tierna", adult: 110, kid: 60, unit: "g" }
      ],
      profiles: [
        "limon suave",
        "oregano ligero",
        "perejil fresco",
        "yogur ligero",
        "aceite y limon",
        "ajo muy suave"
      ]
    }
  }
};

const refs = {
  drawer: document.querySelector("#drawer"),
  openDrawerBtn: document.querySelector("#openDrawerBtn"),
  closeDrawerBtn: document.querySelector("#closeDrawerBtn"),
  navLinks: Array.from(document.querySelectorAll(".nav-link")),
  pages: Array.from(document.querySelectorAll(".page")),
  yearPicker: document.querySelector("#yearPicker"),
  generateBtn: document.querySelector("#generateBtn"),
  installBtn: document.querySelector("#installBtn"),
  prevWeekBtn: document.querySelector("#prevWeekBtn"),
  nextWeekBtn: document.querySelector("#nextWeekBtn"),
  currentWeekLabel: document.querySelector("#currentWeekLabel"),
  ingredientSearch: document.querySelector("#ingredientSearch"),
  mealTypeSearch: document.querySelector("#mealTypeSearch"),
  searchBtn: document.querySelector("#searchBtn"),
  searchResults: document.querySelector("#searchResults"),
  rulePills: document.querySelector("#rulePills"),
  calendar: document.querySelector("#calendar"),
  shoppingWeeks: document.querySelector("#shoppingWeeks"),
  lunchCount: document.querySelector("#lunchCount"),
  dinnerCount: document.querySelector("#dinnerCount"),
  adultServings: document.querySelector("#adultServings"),
  kidServings: document.querySelector("#kidServings"),
  dialog: document.querySelector("#recipeDialog"),
  closeDialog: document.querySelector("#closeDialog"),
  dialogMealTag: document.querySelector("#dialogMealTag"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogMeta: document.querySelector("#dialogMeta"),
  prepList: document.querySelector("#prepList"),
  serviceList: document.querySelector("#serviceList"),
  stepsList: document.querySelector("#stepsList")
};

let deferredPrompt;
let activePlan = [];
let activeYearContext = null;
let currentWeekIndex = 0;
let shoppingSelectionState = {};

function formatQty(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : `${rounded.toFixed(1)}`;
}

function dateKey(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isWorkday(date) {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

function weekStartKey(date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const offsetToMonday = day === 0 ? -6 : 1 - day;
  copy.setDate(copy.getDate() + offsetToMonday);
  return dateKey(copy);
}

function toLongDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(date);
}

function toShortDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short"
  }).format(date);
}

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getYearContext(year) {
  const days = [];
  const date = new Date(year, 0, 1);

  while (date.getFullYear() === year) {
    days.push({
      date: new Date(date),
      dateKey: dateKey(date),
      weekKey: weekStartKey(date)
    });
    date.setDate(date.getDate() + 1);
  }

  const weekMap = new Map();
  days.forEach((dayInfo) => {
    if (!weekMap.has(dayInfo.weekKey)) weekMap.set(dayInfo.weekKey, []);
    weekMap.get(dayInfo.weekKey).push(dayInfo);
  });

  const weeks = Array.from(weekMap.entries())
    .map(([key, weekDays], idx) => ({
      key,
      index: idx + 1,
      days: weekDays.sort((a, b) => a.date - b.date)
    }))
    .sort((a, b) => a.days[0].date - b.days[0].date);

  return { year, days, weeks };
}

function buildDefaultShoppingSelection(yearContext) {
  const config = {};
  yearContext.weeks.forEach((week) => {
    config[week.key] = {};
    week.days.forEach((dayInfo) => {
      config[week.key][dayInfo.dateKey] = true;
    });
  });
  return config;
}

function crossBlueprints(protein, mealTag) {
  const blueprint = BLUEPRINTS[protein][mealTag];
  const meals = [];

  blueprint.methods.forEach((method) => {
    blueprint.carbs.forEach((carb) => {
      blueprint.vegs.forEach((veg) => {
        blueprint.profiles.forEach((profile) => {
          const combinationKey = `${protein}-${mealTag}-${method.id}-${carb.id}-${veg.id}-${normalizeText(profile)}`;
          meals.push({ protein, mealTag, method, carb, veg, profile, combinationKey });
        });
      });
    });
  });

  return meals;
}

function buildCandidatePools() {
  return {
    chicken: {
      lunch: crossBlueprints("chicken", "lunch"),
      dinner: crossBlueprints("chicken", "dinner")
    },
    beef: {
      lunch: crossBlueprints("beef", "lunch")
    },
    pork: {
      lunch: crossBlueprints("pork", "lunch")
    },
    tuna: {
      lunch: crossBlueprints("tuna", "lunch"),
      dinner: crossBlueprints("tuna", "dinner")
    }
  };
}

function proteinForLunch(dayIndex) {
  return ["chicken", "beef", "pork", "tuna"][dayIndex % 4];
}

function proteinForDinner(dayIndex) {
  return dayIndex % 2 === 0 ? "chicken" : "tuna";
}

function getProteinAmount(protein, adults, kids) {
  const perAdult = protein === "tuna" ? 190 : 240;
  const perKid = protein === "tuna" ? 110 : 140;
  return {
    label: protein === "tuna" ? "Atun enlatado escurrido" : `${PROTEIN_LABEL[protein]} crudo`,
    total: perAdult * adults + perKid * kids,
    adult: perAdult,
    kid: perKid,
    unit: "g"
  };
}

function composeTitle(blueprint) {
  const mealWord = blueprint.mealTag === "dinner" ? "con" : "sobre";
  return `${PROTEIN_LABEL[blueprint.protein]} ${blueprint.method.name} ${mealWord} ${blueprint.carb.name} y ${blueprint.veg.name} al perfil ${blueprint.profile}`;
}

function buildMealFromBlueprint(blueprint, audience) {
  const proteinComponent = getProteinAmount(blueprint.protein, audience.adults, audience.kids);
  const oilAdult = blueprint.mealTag === "dinner" ? 7 : 9;
  const oilKid = blueprint.mealTag === "dinner" ? 4 : 5;
  const seasoningAdult = blueprint.mealTag === "dinner" ? 1.6 : 2.1;
  const seasoningKid = blueprint.mealTag === "dinner" ? 0.9 : 1.2;

  return {
    title: composeTitle(blueprint),
    protein: blueprint.protein,
    mealTag: blueprint.mealTag,
    profile: blueprint.profile,
    time: blueprint.mealTag === "dinner" ? "25-35 min" : "35-50 min",
    level: "Basico",
    combinationKey: blueprint.combinationKey,
    components: {
      protein: {
        label: proteinComponent.label,
        adult: proteinComponent.adult,
        kid: proteinComponent.kid,
        unit: proteinComponent.unit
      },
      carb: {
        label: blueprint.carb.base,
        adult: blueprint.carb.adult,
        kid: blueprint.carb.kid,
        unit: blueprint.carb.unit
      },
      veg: {
        label: blueprint.veg.name.charAt(0).toUpperCase() + blueprint.veg.name.slice(1),
        adult: blueprint.veg.adult,
        kid: blueprint.veg.kid,
        unit: blueprint.veg.unit
      },
      oil: {
        label: "Aceite de oliva",
        adult: oilAdult,
        kid: oilKid,
        unit: "ml"
      },
      seasoning: {
        label: `Sal + perfil ${blueprint.profile}`,
        adult: seasoningAdult,
        kid: seasoningKid,
        unit: "g"
      }
    },
    serviceGuide: [
      `Adulto: ${PROTEIN_LABEL[blueprint.protein]} como parte principal con ${blueprint.carb.name} y ${blueprint.veg.name}.`,
      `Nino: misma receta en porcion reducida y con piezas mas pequenas para facilitar el servicio.`
    ],
    steps: (q) => [
      `Prepara todo antes de encender el fuego: mide ${q.protein}, ${q.carb} y ${q.veg}. Deja cada ingrediente a mano para cocinar sin prisas.`,
      `Pon primero la base de ${blueprint.carb.name}. Cocina ${q.carb} de ${blueprint.carb.base.toLowerCase()} hasta que quede tierna, nunca dura. Si es patata o boniato, comprueba con un tenedor que entra sin resistencia.`,
      `Mientras se hace la base, corta ${q.veg} de ${blueprint.veg.name} en trozos regulares. Que todos tengan tamano parecido ayuda a que se cocinen por igual.`,
      `Calienta una ${blueprint.method.heat} con parte del aceite. Cocina la ${PROTEIN_LABEL[blueprint.protein].toLowerCase()} ${blueprint.method.name} y mueve solo cuando veas que ya ha tomado color.`,
      `Anade la verdura y cocina a fuego medio hasta que quede tierna. Si ves que se seca demasiado, anade una cucharada de agua y sigue cocinando suave.`,
      `Sazona con el perfil ${blueprint.profile}. Remueve bien para repartir sabor sin que unas zonas queden muy fuertes y otras sosas.`,
      `Monta el plato colocando primero ${blueprint.carb.name}, luego la ${PROTEIN_LABEL[blueprint.protein].toLowerCase()} y por ultimo ${blueprint.veg.name}. Sirve las cantidades de adulto y nino por separado.`
    ]
  };
}

function buildPlan(yearContext) {
  const pools = buildCandidatePools();
  const indices = {
    chicken: { lunch: 0, dinner: 0 },
    beef: { lunch: 0 },
    pork: { lunch: 0 },
    tuna: { lunch: 0, dinner: 0 }
  };
  const usedCombinations = new Set();

  return yearContext.days.map((dayInfo, dayIndex) => {
    const workday = isWorkday(dayInfo.date);
    const lunchProtein = proteinForLunch(dayIndex);
    const dinnerProtein = proteinForDinner(dayIndex);
    const lunchAudience = workday ? { adults: FAMILY.adults, kids: 0 } : { adults: FAMILY.adults, kids: FAMILY.kids };
    const dinnerAudience = { adults: FAMILY.adults, kids: FAMILY.kids };

    const lunchBlueprint = pools[lunchProtein].lunch[indices[lunchProtein].lunch];
    const dinnerBlueprint = pools[dinnerProtein].dinner[indices[dinnerProtein].dinner];

    if (!lunchBlueprint || !dinnerBlueprint) {
      throw new Error("No hay suficientes combinaciones unicas para completar el ano.");
    }

    if (usedCombinations.has(lunchBlueprint.combinationKey) || usedCombinations.has(dinnerBlueprint.combinationKey)) {
      throw new Error("Se detecto una repeticion de combinacion en el plan anual.");
    }

    indices[lunchProtein].lunch += 1;
    indices[dinnerProtein].dinner += 1;
    usedCombinations.add(lunchBlueprint.combinationKey);
    usedCombinations.add(dinnerBlueprint.combinationKey);

    return {
      date: dayInfo.date,
      dateKey: dayInfo.dateKey,
      weekKey: dayInfo.weekKey,
      workday,
      lunch: {
        tag: "lunch",
        title: "Comida",
        protein: lunchProtein,
        audience: lunchAudience,
        recipe: buildMealFromBlueprint(lunchBlueprint, lunchAudience)
      },
      dinner: {
        tag: "dinner",
        title: "Cena",
        protein: dinnerProtein,
        audience: dinnerAudience,
        recipe: buildMealFromBlueprint(dinnerBlueprint, dinnerAudience)
      }
    };
  });
}

function getMealIngredients(meal) {
  return Object.values(meal.recipe.components).map((component) => ({
    label: component.label,
    unit: component.unit,
    total: component.adult * meal.audience.adults + component.kid * meal.audience.kids
  }));
}

function makeQuantities(recipe, audience) {
  const prep = Object.values(recipe.components).map((component) => {
    const total = component.adult * audience.adults + component.kid * audience.kids;
    return `${component.label}: ${formatQty(total)} ${component.unit}`;
  });

  const service = [
    `Raciones adulto: ${audience.adults}`,
    `Raciones nino: ${audience.kids}`,
    ...recipe.serviceGuide,
    `Combinacion unica del ano: ${recipe.combinationKey}`
  ];

  const q = {};
  Object.entries(recipe.components).forEach(([key, value]) => {
    const total = value.adult * audience.adults + value.kid * audience.kids;
    q[key] = `${formatQty(total)} ${value.unit}`;
  });

  return { prep, service, q };
}

function getVisibleWeek() {
  return activeYearContext?.weeks[currentWeekIndex] || null;
}

function getVisibleWeekPlan() {
  const week = getVisibleWeek();
  return week ? activePlan.filter((day) => day.weekKey === week.key) : [];
}

function renderRules() {
  refs.rulePills.innerHTML = RULES.map((rule) => `<div class="rule-pill">${rule}</div>`).join("");
}

function updateStats(weekPlan) {
  refs.lunchCount.textContent = String(weekPlan.length);
  refs.dinnerCount.textContent = String(weekPlan.length);
  refs.adultServings.textContent = String(weekPlan.reduce((acc, day) => acc + day.lunch.audience.adults + day.dinner.audience.adults, 0));
  refs.kidServings.textContent = String(weekPlan.reduce((acc, day) => acc + day.lunch.audience.kids + day.dinner.audience.kids, 0));
}

function updateWeekNavigation() {
  const week = getVisibleWeek();
  if (!week) return;
  refs.currentWeekLabel.textContent = `Semana ${week.index} · ${toShortDate(week.days[0].date)} - ${toShortDate(week.days[week.days.length - 1].date)}`;
  refs.prevWeekBtn.disabled = currentWeekIndex === 0;
  refs.nextWeekBtn.disabled = currentWeekIndex === activeYearContext.weeks.length - 1;
}

function openRecipeDialog(dayText, meal) {
  const { prep, service, q } = makeQuantities(meal.recipe, meal.audience);
  refs.dialogMealTag.textContent = `${dayText} · ${meal.title}`;
  refs.dialogTitle.textContent = meal.recipe.title;
  refs.dialogMeta.textContent = `Proteina principal: ${PROTEIN_LABEL[meal.recipe.protein]} · Perfil: ${meal.recipe.profile} · Tiempo: ${meal.recipe.time}`;
  refs.prepList.innerHTML = prep.map((item) => `<li>${item}</li>`).join("");
  refs.serviceList.innerHTML = service.map((item) => `<li>${item}</li>`).join("");
  refs.stepsList.innerHTML = meal.recipe.steps(q).map((step) => `<li>${step}</li>`).join("");
  refs.dialog.showModal();
}

function renderWeekPlan() {
  const weekPlan = getVisibleWeekPlan();
  refs.calendar.innerHTML = "";

  weekPlan.forEach((dayInfo) => {
    const dayCard = document.createElement("article");
    dayCard.className = "day-card";

    const dayText = toLongDate(dayInfo.date);
    const dayTitle = document.createElement("h3");
    dayTitle.className = "day-title";
    dayTitle.textContent = dayText.charAt(0).toUpperCase() + dayText.slice(1);

    const dayType = document.createElement("p");
    dayType.className = "day-type";
    dayType.textContent = dayInfo.workday ? "Dia laborable" : "Fin de semana";

    dayCard.append(dayTitle, dayType);

    [dayInfo.lunch, dayInfo.dinner].forEach((meal) => {
      const slot = document.createElement("div");
      slot.className = "meal-slot";

      const slotTop = document.createElement("div");
      slotTop.className = "slot-top";

      const badge = document.createElement("span");
      badge.className = "meal-badge";
      badge.textContent = meal.title;

      const detailBtn = document.createElement("button");
      detailBtn.type = "button";
      detailBtn.textContent = "Ver receta";
      detailBtn.addEventListener("click", () => openRecipeDialog(dayTitle.textContent, meal));

      const recipeName = document.createElement("p");
      recipeName.innerHTML = `<strong>${meal.recipe.title}</strong>`;

      const serving = document.createElement("p");
      serving.textContent = `Servicio: ${meal.audience.adults} adultos + ${meal.audience.kids} ninos`;

      const protein = document.createElement("p");
      protein.textContent = `Proteina: ${PROTEIN_LABEL[meal.protein]}`;

      slotTop.append(badge, detailBtn);
      slot.append(slotTop, recipeName, serving, protein);
      dayCard.appendChild(slot);
    });

    refs.calendar.appendChild(dayCard);
  });

  updateStats(weekPlan);
}

function renderShoppingForVisibleWeek() {
  const week = getVisibleWeek();
  const weekPlan = getVisibleWeekPlan();
  refs.shoppingWeeks.innerHTML = "";
  if (!week) return;

  const card = document.createElement("article");
  card.className = "shopping-card";

  const title = document.createElement("h3");
  title.textContent = `Semana ${week.index}: ${toShortDate(week.days[0].date)} - ${toShortDate(week.days[week.days.length - 1].date)}`;

  const summary = document.createElement("p");
  summary.className = "week-status";
  const selectedCount = week.days.filter((day) => shoppingSelectionState[week.key]?.[day.dateKey]).length;
  summary.textContent = `Dias incluidos en compra: ${selectedCount} de ${week.days.length}`;

  const toggleWrap = document.createElement("div");
  toggleWrap.className = "day-toggle-wrap";

  week.days.forEach((dayInfo) => {
    const isSelected = Boolean(shoppingSelectionState[week.key]?.[dayInfo.dateKey]);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = isSelected ? "day-chip selected" : "day-chip unselected";
    btn.dataset.weekKey = week.key;
    btn.dataset.dateKey = dayInfo.dateKey;
    btn.textContent = `${WEEKDAY_SHORT[dayInfo.date.getDay()]} ${dayInfo.date.getDate()} · ${isSelected ? "Incluir" : "Excluir"}`;
    toggleWrap.appendChild(btn);
  });

  const ingredients = new Map();
  weekPlan
    .filter((day) => shoppingSelectionState[week.key]?.[day.dateKey])
    .forEach((day) => {
      [day.lunch, day.dinner].forEach((meal) => {
        getMealIngredients(meal).forEach((item) => {
          const key = `${item.label}__${item.unit}`;
          const current = ingredients.get(key) || { label: item.label, unit: item.unit, total: 0 };
          current.total += item.total;
          ingredients.set(key, current);
        });
      });
    });

  card.append(title, summary, toggleWrap);

  const items = Array.from(ingredients.values()).sort((a, b) => a.label.localeCompare(b.label, "es"));
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "week-status";
    empty.textContent = "No hay dias seleccionados para generar la compra.";
    card.appendChild(empty);
    refs.shoppingWeeks.appendChild(card);
    return;
  }

  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.label}: ${formatQty(item.total)} ${item.unit}`;
    list.appendChild(li);
  });

  card.appendChild(list);
  refs.shoppingWeeks.appendChild(card);
}

function renderVisibleWeek() {
  updateWeekNavigation();
  renderWeekPlan();
  renderShoppingForVisibleWeek();
}

function setCurrentWeekIndexFromToday() {
  const today = new Date();
  const todayKey = dateKey(today);
  const idx = activeYearContext.weeks.findIndex((week) => week.days.some((day) => day.dateKey === todayKey));
  currentWeekIndex = idx >= 0 ? idx : 0;
}

function setYearFromPicker() {
  const year = Number(refs.yearPicker.value);
  if (!Number.isFinite(year) || year < 2025 || year > 2035) return;
  activeYearContext = getYearContext(year);
  shoppingSelectionState = buildDefaultShoppingSelection(activeYearContext);
  setCurrentWeekIndexFromToday();
}

function generateYearPlan() {
  if (!activeYearContext) return;
  activePlan = buildPlan(activeYearContext);
  renderVisibleWeek();
  refs.searchResults.innerHTML = "";
}

function switchPage(pageId) {
  refs.pages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  refs.navLinks.forEach((link) => link.classList.toggle("active", link.dataset.page === pageId));
  refs.drawer.classList.remove("open");
  refs.drawer.setAttribute("aria-hidden", "true");
}

function runSearch() {
  if (!activePlan.length) return;
  const rawIngredient = refs.ingredientSearch.value.trim();
  const normalizedIngredient = normalizeText(rawIngredient);
  const mealType = refs.mealTypeSearch.value;

  if (!rawIngredient) {
    refs.searchResults.innerHTML = "<p class='week-status'>Escribe un ingrediente para buscar en el plan anual.</p>";
    return;
  }

  const matches = [];
  activePlan.forEach((day) => {
    [day.lunch, day.dinner].forEach((meal) => {
      if (mealType !== "all" && meal.tag !== mealType) return;
      const haystack = normalizeText([
        meal.recipe.title,
        PROTEIN_LABEL[meal.recipe.protein],
        meal.recipe.profile,
        ...Object.values(meal.recipe.components).map((component) => component.label)
      ].join(" "));

      if (haystack.includes(normalizedIngredient)) {
        matches.push({ day, meal });
      }
    });
  });

  if (!matches.length) {
    refs.searchResults.innerHTML = "<p class='week-status'>No hay resultados para ese ingrediente en este ano.</p>";
    return;
  }

  refs.searchResults.innerHTML = [
    `<p class='week-status'>${matches.length} resultado(s) en el plan anual.</p>`,
    ...matches.slice(0, 150).map(({ day, meal }) => {
      const label = meal.tag === "lunch" ? "Comida" : "Cena";
      const dateLabel = new Intl.DateTimeFormat("es-ES", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(day.date);
      return `<div class='search-item'>
        <p><strong>${label}</strong> · ${dateLabel} · ${meal.recipe.title}</p>
        <button type='button' data-date-key='${day.dateKey}' data-meal-tag='${meal.tag}'>Ver receta</button>
      </div>`;
    })
  ].join("");
}

refs.openDrawerBtn.addEventListener("click", () => {
  refs.drawer.classList.add("open");
  refs.drawer.setAttribute("aria-hidden", "false");
});

refs.closeDrawerBtn.addEventListener("click", () => {
  refs.drawer.classList.remove("open");
  refs.drawer.setAttribute("aria-hidden", "true");
});

refs.drawer.addEventListener("click", (event) => {
  if (event.target === refs.drawer) {
    refs.drawer.classList.remove("open");
    refs.drawer.setAttribute("aria-hidden", "true");
  }
});

refs.navLinks.forEach((link) => {
  link.addEventListener("click", () => switchPage(link.dataset.page));
});

refs.generateBtn.addEventListener("click", () => {
  setYearFromPicker();
  generateYearPlan();
});

refs.prevWeekBtn.addEventListener("click", () => {
  if (currentWeekIndex <= 0) return;
  currentWeekIndex -= 1;
  renderVisibleWeek();
});

refs.nextWeekBtn.addEventListener("click", () => {
  if (!activeYearContext || currentWeekIndex >= activeYearContext.weeks.length - 1) return;
  currentWeekIndex += 1;
  renderVisibleWeek();
});

refs.shoppingWeeks.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-week-key][data-date-key]");
  if (!btn) return;
  const { weekKey, dateKey: dKey } = btn.dataset;
  shoppingSelectionState[weekKey][dKey] = !shoppingSelectionState[weekKey][dKey];
  renderShoppingForVisibleWeek();
});

refs.searchBtn.addEventListener("click", runSearch);
refs.ingredientSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSearch();
});

refs.searchResults.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-date-key][data-meal-tag]");
  if (!btn) return;
  const day = activePlan.find((entry) => entry.dateKey === btn.dataset.dateKey);
  if (!day) return;
  const meal = btn.dataset.mealTag === "lunch" ? day.lunch : day.dinner;
  const dayText = toLongDate(day.date);
  openRecipeDialog(dayText.charAt(0).toUpperCase() + dayText.slice(1), meal);
});

refs.closeDialog.addEventListener("click", () => refs.dialog.close());
refs.dialog.addEventListener("click", (event) => {
  const rect = refs.dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) refs.dialog.close();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  refs.installBtn.hidden = false;
});

refs.installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  refs.installBtn.hidden = true;
});

window.addEventListener("appinstalled", () => {
  refs.installBtn.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

function init() {
  renderRules();
  refs.yearPicker.value = String(new Date().getFullYear());
  setYearFromPicker();
  generateYearPlan();
}

init();
