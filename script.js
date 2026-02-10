const links = {
  discord: "https://discord.gg/juegantodosconmati",
  instagram: "https://www.instagram.com/juegan.todos.con.mati?igsh=MW5mZXVtdGF6NGJ5dg==",
  tiktok: "https://www.tiktok.com/@juegan_todos_con_mati?is_from_webapp=1&sender_device=pc"
};

const communityStats = {
  discord: "500",
  instagram: "200",
  tiktok: "3000+"
};

const translations = {
  es: {
    siteOfficial: ":: SITIO OFICIAL",
    heroSubtitle: "Comunidad, musica y contenido en un solo lugar.",
    host247: "Host 24/7 Online",
    officialStore: "Tienda Oficial",
    founder: "Fundador: Mati",
    foundation: "Fundacion: 17/10/24",
    copyIpButton: "IP Minecraft",
    copiedOk: "Copiado!",
    copyFailed: "No se pudo copiar",
    communityTitle: "Comunidad",
    communitySubtitle: "Numeros de nuestra comunidad",
    rulesTitle: "Reglas Rapidas",
    rulesSubtitle: "Resumen para nuevos jugadores",
    modesTitle: "Modalidades de Sala",
    modesSubtitle: "Entrena y compite en distintos formatos",
    gamesTitle: "Juegos Destacados en Discord",
    gamesSubtitle: "Nuestros juegos mas activos y populares",
    rule1: "Respeta a todos en chat y voz.",
    rule2: "No uses hacks, macros ni exploits.",
    rule3: "No grief, no spam y no toxicidad.",
    rule4: "Sigue las indicaciones del staff.",
    rule5: "Diviertete y juega limpio."
  },
  en: {
    siteOfficial: ":: OFFICIAL SITE",
    heroSubtitle: "Community, music and content in one place.",
    host247: "24/7 Host Online",
    officialStore: "Official Store",
    founder: "Founder: Mati",
    foundation: "Founded: 10/17/24",
    copyIpButton: "Minecraft IP",
    copiedOk: "Copied!",
    copyFailed: "Copy failed",
    communityTitle: "Community",
    communitySubtitle: "Our community numbers",
    rulesTitle: "Quick Rules",
    rulesSubtitle: "Summary for new players",
    modesTitle: "Room Modes",
    modesSubtitle: "Train and compete in different formats",
    gamesTitle: "Featured Games on Discord",
    gamesSubtitle: "Our most active and popular games",
    rule1: "Respect everyone in chat and voice.",
    rule2: "Do not use hacks, macros or exploits.",
    rule3: "No griefing, no spam and no toxicity.",
    rule4: "Follow staff instructions.",
    rule5: "Have fun and play fair."
  }
};

const minecraftIp = "Respaldos.aternos.me:53278";
let currentLang = "es";

const discordTopLink = document.getElementById("discordTopLink");
const discordBtn = document.getElementById("discordBtn");
const instagramBtn = document.getElementById("instagramBtn");
const tiktokBtn = document.getElementById("tiktokBtn");
const copyIpBtn = document.getElementById("copyIpBtn");
const langButtons = document.querySelectorAll(".lang-btn");
const statDiscord = document.getElementById("statDiscord");
const statInstagram = document.getElementById("statInstagram");
const statTiktok = document.getElementById("statTiktok");

if (discordTopLink) discordTopLink.href = links.discord;
if (discordBtn) discordBtn.href = links.discord;
if (instagramBtn) instagramBtn.href = links.instagram;
if (tiktokBtn) tiktokBtn.href = links.tiktok;
if (statDiscord) statDiscord.textContent = communityStats.discord;
if (statInstagram) statInstagram.textContent = communityStats.instagram;
if (statTiktok) statTiktok.textContent = communityStats.tiktok;

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "es";
  currentLang = selected;
  document.documentElement.lang = selected;

  const dict = translations[selected];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dict[key]) {
      element.textContent = dict[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === selected);
  });
}

function copyWithFallback(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(tempInput);
  return ok;
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang || "es");
  });
});

if (copyIpBtn) {
  copyIpBtn.addEventListener("click", async () => {
    const dict = translations[currentLang];
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(minecraftIp);
      } else {
        const copied = copyWithFallback(minecraftIp);
        if (!copied) throw new Error("fallback-copy-failed");
      }

      copyIpBtn.textContent = dict.copiedOk;
      copyIpBtn.classList.add("copy-ok");
      setTimeout(() => {
        copyIpBtn.textContent = dict.copyIpButton;
        copyIpBtn.classList.remove("copy-ok");
      }, 1500);
    } catch {
      const copied = copyWithFallback(minecraftIp);
      copyIpBtn.textContent = copied ? dict.copiedOk : dict.copyFailed;
      if (copied) copyIpBtn.classList.add("copy-ok");
      setTimeout(() => {
        copyIpBtn.textContent = dict.copyIpButton;
        copyIpBtn.classList.remove("copy-ok");
      }, 1800);
    }
  });
}

setLanguage("es");
