const FAMILY = { adults: 2, kids: 2 };

const RULES = [
  "Comidas y cenas hiper proteicas para organizacion mensual.",
  "Lunes a viernes: los ninos solo cenan en casa.",
  "Hogar de 2 adultos + 2 ninos.",
  "Proteinas base: pollo, ternera, cerdo y atun enlatado.",
  "No mezclar tipos de proteina en una misma receta.",
  "No mezclar carne y pescado.",
  "Cada receta muestra cantidades de preparacion y servicio.",
  "Pasos detallados y claros para personas sin experiencia de cocina."
];

const PROTEIN_ROTATION = ["chicken", "beef", "pork", "tuna"];

const PROTEIN_LABEL = {
  chicken: "Pollo",
  beef: "Ternera",
  pork: "Cerdo",
  tuna: "Atun enlatado"
};

const RECIPES = [
  {
    id: "chicken-pan-paprika",
    title: "Pollo a la plancha con patata al pimenton",
    protein: "chicken",
    mealTags: ["lunch", "dinner"],
    time: "35 min",
    level: "Basico",
    components: {
      protein: { label: "Pechuga de pollo cruda", adult: 250, kid: 150, unit: "g" },
      carb: { label: "Patata", adult: 220, kid: 120, unit: "g" },
      veg: { label: "Calabacin", adult: 130, kid: 80, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 10, kid: 6, unit: "ml" },
      seasoning: { label: "Sal + pimenton dulce", adult: 2, kid: 1.2, unit: "g" }
    },
    serviceGuide: [
      "Adulto: 1 filete grande (250 g crudo) + 1 porcion de patata + calabacin.",
      "Nino: 1 filete pequeno (150 g crudo) + porcion reducida de patata + calabacin."
    ],
    steps: (q) => [
      `Saca ${q.protein} de pollo de la nevera y dejalo 10 minutos fuera para que no este helado al cocinarlo.`,
      `Lava y corta ${q.carb} de patata en cubos de 2 cm. Cuecelos 12 minutos en agua con sal hasta que puedas pincharlos con un tenedor.`,
      `Mientras tanto, corta ${q.veg} de calabacin en medias lunas. Prepara una sarten amplia a fuego medio con la mitad del aceite.`,
      "Seca el pollo con papel de cocina para que se dore mejor. Sazona con sal y pimenton por ambos lados.",
      "Cocina el pollo 4-5 minutos por lado. Debe quedar dorado por fuera y sin partes rosadas por dentro.",
      "En otra sarten, saltea patata cocida y calabacin con el resto del aceite durante 5 minutos para dar color y sabor.",
      "Sirve en platos separados para adulto y nino siguiendo las porciones indicadas."
    ]
  },
  {
    id: "chicken-oven-strips",
    title: "Tiras de pollo al horno con arroz suelto",
    protein: "chicken",
    mealTags: ["lunch", "dinner"],
    time: "40 min",
    level: "Basico",
    components: {
      protein: { label: "Pechuga de pollo en tiras", adult: 240, kid: 140, unit: "g" },
      carb: { label: "Arroz crudo", adult: 95, kid: 55, unit: "g" },
      veg: { label: "Zanahoria", adult: 120, kid: 70, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 8, kid: 5, unit: "ml" },
      seasoning: { label: "Sal + ajo en polvo + oregano", adult: 2, kid: 1.2, unit: "g" }
    },
    serviceGuide: [
      "Adulto: bol con base de arroz, tiras de pollo y zanahoria asada.",
      "Nino: mismo plato con porcion reducida y piezas pequenas."
    ],
    steps: (q) => [
      `Calienta el horno a 210 C. Prepara una bandeja con papel de horno.`,
      `Coloca ${q.protein} de pollo en tiras. Mezcla con sal, ajo en polvo, oregano y aceite. Reparte en una sola capa.`,
      `Pela y corta ${q.veg} de zanahoria en bastones finos y ponla junto al pollo.`,
      "Hornea 18-20 minutos. A mitad de tiempo, remueve para que se cocine uniforme.",
      `Mientras, lava ${q.carb} de arroz hasta que el agua salga clara. Cocina con el doble de agua durante 12 minutos y deja reposar 5 minutos.`,
      "Comprueba el pollo: al cortar una tira debe salir jugo claro, nunca rosado.",
      "Sirve arroz abajo, pollo encima y zanahoria al lado para que cada persona vea bien las cantidades."
    ]
  },
  {
    id: "beef-strips-rice",
    title: "Tiras de ternera salteadas con arroz y pimiento",
    protein: "beef",
    mealTags: ["lunch", "dinner"],
    time: "30 min",
    level: "Basico",
    components: {
      protein: { label: "Ternera en tiras", adult: 230, kid: 130, unit: "g" },
      carb: { label: "Arroz crudo", adult: 90, kid: 50, unit: "g" },
      veg: { label: "Pimiento rojo", adult: 120, kid: 75, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 9, kid: 5, unit: "ml" },
      seasoning: { label: "Sal + pimienta + comino suave", adult: 2, kid: 1.2, unit: "g" }
    },
    serviceGuide: [
      "Adulto: 1 plato hondo con arroz base y ternera abundante arriba.",
      "Nino: version troceada mas pequena para masticar facil."
    ],
    steps: (q) => [
      `Inicia el arroz: enjuaga ${q.carb} y cocina con agua y una pizca de sal.`,
      `Seca ${q.protein} de ternera con papel de cocina. Esto evita que hierva en vez de dorarse.`,
      `Calienta una sarten grande con aceite. Saltea la ternera en tandas para no amontonar.`,
      "Cuando la ternera este sellada por fuera, retira temporalmente a un plato.",
      `En la misma sarten, cocina ${q.veg} de pimiento en tiras 4 minutos hasta que se ablande.`,
      "Devuelve la ternera a la sarten, sazona y remueve 2 minutos para integrar sabor.",
      "Sirve con arroz. Para ninos, corta las tiras largas en trozos pequenos antes de emplatar."
    ]
  },
  {
    id: "beef-meatballs",
    title: "Albondagas de ternera al tomate natural",
    protein: "beef",
    mealTags: ["lunch", "dinner"],
    time: "45 min",
    level: "Basico+",
    components: {
      protein: { label: "Carne picada de ternera", adult: 240, kid: 140, unit: "g" },
      carb: { label: "Pure de patata (patata cruda)", adult: 210, kid: 110, unit: "g" },
      veg: { label: "Tomate triturado", adult: 140, kid: 80, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 8, kid: 4, unit: "ml" },
      seasoning: { label: "Sal + ajo en polvo + oregano", adult: 2, kid: 1.1, unit: "g" }
    },
    serviceGuide: [
      "Adulto: 4-5 albondagas medianas + pure de patata + salsa.",
      "Nino: 3 albondagas pequenas + pure suave + salsa ligera."
    ],
    steps: (q) => [
      `Mezcla ${q.protein} de ternera con sal, ajo en polvo y oregano en un bol grande.`,
      "Forma bolas del tamano de una nuez grande para adultos y algo menores para ninos.",
      "Marca las albondagas en una sarten con aceite 2 minutos por lado para sellarlas.",
      `Anade ${q.veg} de tomate triturado, baja el fuego y cocina tapado 15 minutos.`,
      `Aparte, cuece ${q.carb} de patata para pure. Tritura con un poco de agua de coccion y sal hasta textura cremosa.`,
      "Prueba una albondaga partida por la mitad: el centro debe verse totalmente cocinado.",
      "Sirve pure como base y coloca las albondagas encima para controlar bien la porcion."
    ]
  },
  {
    id: "pork-loin-mash",
    title: "Medallones de lomo de cerdo con pure rustico",
    protein: "pork",
    mealTags: ["lunch", "dinner"],
    time: "35 min",
    level: "Basico",
    components: {
      protein: { label: "Lomo de cerdo", adult: 235, kid: 135, unit: "g" },
      carb: { label: "Patata", adult: 220, kid: 110, unit: "g" },
      veg: { label: "Judia verde", adult: 130, kid: 70, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 8, kid: 4, unit: "ml" },
      seasoning: { label: "Sal + pimenton + ajo en polvo", adult: 2, kid: 1.1, unit: "g" }
    },
    serviceGuide: [
      "Adulto: 2 medallones de lomo + pure + judia verde.",
      "Nino: 1 medallon mediano en tiras + pure + judia en trozos pequenos."
    ],
    steps: (q) => [
      `Pon a hervir ${q.carb} de patata en trozos. Tardara 15-18 minutos.`,
      `Limpia y cuece ${q.veg} de judia verde 6-8 minutos para que quede tierna.`,
      `Seca ${q.protein} de lomo y cortalo en medallones de 2 cm. Sazona por ambos lados.`,
      "Sella el lomo en sarten caliente con aceite 3 minutos por lado y deja reposar 3 minutos fuera del fuego.",
      "Tritura la patata con un tenedor. Anade sal y una cucharada del agua de coccion si necesita mas suavidad.",
      "Verifica coccion del cerdo: color uniforme sin zonas crudas ni brillantes en el centro.",
      "Emplata con porciones claras por persona y sirve caliente."
    ]
  },
  {
    id: "pork-stirfry-sweet-potato",
    title: "Cerdo salteado con boniato asado",
    protein: "pork",
    mealTags: ["lunch", "dinner"],
    time: "40 min",
    level: "Basico",
    components: {
      protein: { label: "Magro de cerdo en tiras", adult: 230, kid: 130, unit: "g" },
      carb: { label: "Boniato", adult: 230, kid: 120, unit: "g" },
      veg: { label: "Cebolla + calabacin", adult: 150, kid: 90, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 9, kid: 5, unit: "ml" },
      seasoning: { label: "Sal + pimenton + oregano", adult: 2, kid: 1.1, unit: "g" }
    },
    serviceGuide: [
      "Adulto: plato combinado con cerdo principal y boniato de acompanamiento.",
      "Nino: cerdo en trozos pequenos, boniato blando y verduras bien cocinadas."
    ],
    steps: (q) => [
      `Precalienta horno a 210 C y corta ${q.carb} de boniato en cubos medianos.`,
      "Mezcla boniato con la mitad del aceite y una pizca de sal. Hornea 22 minutos.",
      `Calienta sarten grande y saltea ${q.protein} de cerdo en tandas. Retira cuando este dorado.`,
      `En la misma sarten cocina ${q.veg} de cebolla y calabacin hasta que este muy tierno.`,
      "Devuelve el cerdo, anade especias y cocina 2 minutos mas para integrar sabores.",
      "Revisa boniato: debe entrar el tenedor sin esfuerzo.",
      "Sirve cerdo y boniato por separado para controlar la porcion de cada persona."
    ]
  },
  {
    id: "tuna-patties-potato",
    title: "Tortitas de atun enlatado con patata cocida",
    protein: "tuna",
    mealTags: ["lunch", "dinner"],
    time: "30 min",
    level: "Basico",
    components: {
      protein: { label: "Atun enlatado escurrido", adult: 200, kid: 120, unit: "g" },
      carb: { label: "Patata", adult: 210, kid: 110, unit: "g" },
      veg: { label: "Zanahoria rallada", adult: 90, kid: 50, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 7, kid: 4, unit: "ml" },
      seasoning: { label: "Sal + ajo en polvo + perejil", adult: 1.8, kid: 1, unit: "g" }
    },
    serviceGuide: [
      "Adulto: 3-4 tortitas + patata cocida + zanahoria.",
      "Nino: 2-3 tortitas pequenas + patata en dados blandos."
    ],
    steps: (q) => [
      `Cuece ${q.carb} de patata en dados hasta que esten blandos. Escurre y reserva.`,
      `Escurre muy bien ${q.protein} de atun para quitar exceso de liquido y mejorar textura.`,
      `Mezcla atun con ${q.veg} de zanahoria rallada y especias. Forma tortitas firmes con la mano.`,
      "Calienta sarten antiadherente con aceite y cocina las tortitas 3 minutos por cada lado.",
      "No muevas las tortitas antes de tiempo para que no se rompan.",
      "Sirve con patata templada. Para ninos, aplasta ligeramente la patata para facilitar masticacion.",
      "Comprueba sal al final y ajusta con una pizca minima si hace falta."
    ]
  },
  {
    id: "tuna-chickpea-bowl",
    title: "Bol templado de atun con garbanzo y verduras",
    protein: "tuna",
    mealTags: ["lunch", "dinner"],
    time: "25 min",
    level: "Basico",
    components: {
      protein: { label: "Atun enlatado escurrido", adult: 190, kid: 110, unit: "g" },
      carb: { label: "Garbanzo cocido escurrido", adult: 140, kid: 80, unit: "g" },
      veg: { label: "Pepino + tomate", adult: 150, kid: 90, unit: "g" },
      oil: { label: "Aceite de oliva", adult: 7, kid: 4, unit: "ml" },
      seasoning: { label: "Sal + limon + oregano", adult: 1.8, kid: 1, unit: "g" }
    },
    serviceGuide: [
      "Adulto: bol grande con atun visible como ingrediente principal.",
      "Nino: bol pequeno con garbanzo aplastado parcialmente para textura mas suave."
    ],
    steps: (q) => [
      `Escurre y enjuaga ${q.carb} de garbanzo cocido para quitar exceso de salmuera.`,
      `Escurre ${q.protein} de atun y desmigalo en trozos medianos con un tenedor.`,
      `Corta ${q.veg} de pepino y tomate en dados pequenos y uniformes.`,
      "Calienta los garbanzos 3 minutos en sarten con una cucharadita de aceite para que queden templados.",
      "Mezcla atun, garbanzo y verduras con el resto de aceite, limon y oregano.",
      "Para ninos, aplasta una parte del garbanzo para que el conjunto sea facil de comer.",
      "Sirve inmediatamente y verifica que cada bol tenga una porcion clara de atun."
    ]
  }
];

const refs = {
  monthPicker: document.querySelector("#monthPicker"),
  generateBtn: document.querySelector("#generateBtn"),
  installBtn: document.querySelector("#installBtn"),
  rulePills: document.querySelector("#rulePills"),
  calendar: document.querySelector("#calendar"),
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

function formatMonthISO(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  return `${y}-${m}`;
}

function isWeekday(date) {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

function toLongDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(date);
}

function formatQty(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : `${rounded.toFixed(1)}`;
}

function pickRecipe(recipesByProtein, protein, mealTag, state) {
  const candidates = recipesByProtein[protein].filter((r) => r.mealTags.includes(mealTag));
  const key = `${protein}-${mealTag}`;
  const idx = state[key] || 0;
  const recipe = candidates[idx % candidates.length];
  state[key] = idx + 1;
  return recipe;
}

function buildPlan(year, monthIndex) {
  const recipesByProtein = PROTEIN_ROTATION.reduce((acc, protein) => {
    acc[protein] = RECIPES.filter((r) => r.protein === protein);
    return acc;
  }, {});

  const state = {};
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();
  const plan = [];

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(year, monthIndex, day);
    const dayIndex = day - 1;
    const lunchProtein = PROTEIN_ROTATION[dayIndex % PROTEIN_ROTATION.length];
    let dinnerProtein = PROTEIN_ROTATION[(dayIndex + 1) % PROTEIN_ROTATION.length];

    if (dinnerProtein === lunchProtein) {
      dinnerProtein = PROTEIN_ROTATION[(dayIndex + 2) % PROTEIN_ROTATION.length];
    }

    const lunchAudience = isWeekday(date)
      ? { adults: FAMILY.adults, kids: 0 }
      : { adults: FAMILY.adults, kids: FAMILY.kids };

    const dinnerAudience = { adults: FAMILY.adults, kids: FAMILY.kids };

    const lunch = {
      tag: "lunch",
      title: "Comida",
      protein: lunchProtein,
      audience: lunchAudience,
      recipe: pickRecipe(recipesByProtein, lunchProtein, "lunch", state)
    };

    const dinner = {
      tag: "dinner",
      title: "Cena",
      protein: dinnerProtein,
      audience: dinnerAudience,
      recipe: pickRecipe(recipesByProtein, dinnerProtein, "dinner", state)
    };

    plan.push({ date, lunch, dinner });
  }

  return plan;
}

function makeQuantities(recipe, audience) {
  const prep = Object.values(recipe.components).map((component) => {
    const total = component.adult * audience.adults + component.kid * audience.kids;
    return `${component.label}: ${formatQty(total)} ${component.unit}`;
  });

  const service = [
    `Raciones adulto: ${audience.adults}`,
    `Raciones nino: ${audience.kids}`,
    ...recipe.serviceGuide
  ];

  const q = {};
  Object.entries(recipe.components).forEach(([key, value]) => {
    const total = value.adult * audience.adults + value.kid * audience.kids;
    q[key] = `${formatQty(total)} ${value.unit}`;
  });

  return { prep, service, q };
}

function updateStats(plan) {
  const lunchMeals = plan.length;
  const dinnerMeals = plan.length;
  const adultServings = plan.reduce((acc, day) => acc + day.lunch.audience.adults + day.dinner.audience.adults, 0);
  const kidServings = plan.reduce((acc, day) => acc + day.lunch.audience.kids + day.dinner.audience.kids, 0);

  refs.lunchCount.textContent = String(lunchMeals);
  refs.dinnerCount.textContent = String(dinnerMeals);
  refs.adultServings.textContent = String(adultServings);
  refs.kidServings.textContent = String(kidServings);
}

function openRecipeDialog(dayText, meal) {
  const { recipe, audience } = meal;
  const { prep, service, q } = makeQuantities(recipe, audience);

  refs.dialogMealTag.textContent = `${dayText} · ${meal.title}`;
  refs.dialogTitle.textContent = recipe.title;
  refs.dialogMeta.textContent = `Proteina principal: ${PROTEIN_LABEL[recipe.protein]} · Tiempo: ${recipe.time} · Nivel: ${recipe.level}`;

  refs.prepList.innerHTML = prep.map((item) => `<li>${item}</li>`).join("");
  refs.serviceList.innerHTML = service.map((item) => `<li>${item}</li>`).join("");
  refs.stepsList.innerHTML = recipe.steps(q).map((step) => `<li>${step}</li>`).join("");

  refs.dialog.showModal();
}

function renderPlan(plan) {
  refs.calendar.innerHTML = "";

  plan.forEach((dayInfo) => {
    const dayCard = document.createElement("article");
    dayCard.className = "day-card";

    const dayTitle = document.createElement("h3");
    dayTitle.className = "day-title";
    const dayText = toLongDate(dayInfo.date);
    dayTitle.textContent = dayText.charAt(0).toUpperCase() + dayText.slice(1);

    dayCard.appendChild(dayTitle);

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

      slotTop.append(badge, detailBtn);

      const recipeName = document.createElement("p");
      recipeName.innerHTML = `<strong>${meal.recipe.title}</strong>`;

      const serving = document.createElement("p");
      serving.textContent = `Servicio: ${meal.audience.adults} adultos + ${meal.audience.kids} ninos`;

      const protein = document.createElement("p");
      protein.textContent = `Proteina: ${PROTEIN_LABEL[meal.protein]}`;

      slot.append(slotTop, recipeName, serving, protein);
      dayCard.appendChild(slot);
    });

    refs.calendar.appendChild(dayCard);
  });

  updateStats(plan);
}

function renderRules() {
  refs.rulePills.innerHTML = RULES.map((rule) => `<div class="rule-pill">${rule}</div>`).join("");
}

function generateMonthPlan() {
  const selected = refs.monthPicker.value;
  if (!selected) return;

  const [year, month] = selected.split("-").map(Number);
  activePlan = buildPlan(year, month - 1);
  renderPlan(activePlan);
}

refs.generateBtn.addEventListener("click", generateMonthPlan);
refs.closeDialog.addEventListener("click", () => refs.dialog.close());
refs.dialog.addEventListener("click", (event) => {
  const rect = refs.dialog.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

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
  const now = new Date();
  refs.monthPicker.value = formatMonthISO(now);
  generateMonthPlan();
}

init();
