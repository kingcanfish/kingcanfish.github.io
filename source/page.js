// 如果你看到这段文字了，你懂我什么意思吧。
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

function initStarfield(){

  var cf = document.createElement("canvas");
  var c = document.getElementById('startrack');

  let cw, ch;

  c.width = cf.width = cw = c.offsetWidth;
  c.height = cf.height = ch = c.offsetHeight;
  var longside = Math.max(cw,ch);
  cf.width = longside * 2.6
  cf.height = longside * 2.6

  var ctx = c.getContext('2d');
  var cftx = cf.getContext('2d');


  // ctx.beginPath(); 
  // ctx.rect(0, 0,  cw, ch); 
  // ctx.fillStyle='rgba(0,255,0,.1)'; 
  // ctx.closePath(); 
  // ctx.fill();

  // cftx.beginPath(); 
  // cftx.rect(0, 0,  cf.width, cf.height); 
  // cftx.fillStyle='rgba(255,255,255,.1)'; 
  // cftx.strokeStyle='rgba(255,255,255,.1)'; 
  // cftx.closePath(); 
  // cftx.stroke();


  var centerX = cw;
  var centerY = 0//-ch;
  var stars = [];
  var drawTimes = 0;

  ctx.fillStyle = "rgba(21,21,21,1)";
  ctx.fillRect(0,0,cw,ch);

  ctx.lineCap = 'round';

  function rand(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
  }

  function createStar(){
    stars.push({
      x: rand(-cf.width,cf.width),
      y: rand(-cf.height, cf.height),
      size: rand(9,18) / 10,
      color: randomColor(),
    })
  }

  function randomColor(){
    var hue = rand(0, 359);
    var saturation = rand(65, 95);
    var lightness = rand(68, 88);
    var alpha = rand(45, 95) / 100;
    return "hsla(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")";
  }

  function drawStar(){
    var count = stars.length;
    while(count--){
      var cs = stars[count];
      cftx.beginPath(); 
      cftx.arc(cs.x, cs.y, cs.size, 0,Math.PI*2,true); 
      cftx.fillStyle=cs.color; 
      cftx.closePath(); 
      cftx.fill();
    }
  }

  function drawfromCache(){
    // Subtle breathing twinkle for the whole star field.
    var twinkle = 0.94 + Math.sin(drawTimes * 0.02) * 0.06;
    ctx.save();
    ctx.globalAlpha = twinkle;
    ctx.drawImage(cf, -cf.width/2,-cf.height/2);
    ctx.restore();
  }

  function loop(){

    drawfromCache()
    
    drawTimes++;

    if(drawTimes > 400 ){
      if(drawTimes % 8==0){
        ctx.fillStyle = 'rgba(0,0,0,.025)';
        ctx.fillRect(-(longside*3),-(longside*3),longside*6,longside*6);
      }
    }
    rotateCanvas(0.025);

  }

  function rotateCanvas(deg){
    ctx.rotate(deg*Math.PI/180);
  }

  var count = 22000;
  while(count--){
      createStar();
  }
  drawStar();

  var x = centerX;
  var y = centerY;
  ctx.translate(x,y);

  function fireAnimate() {
      requestAnimFrame( fireAnimate );
      loop();
  }

  fireAnimate();
}


const DEFAULT_SITE_CONFIG = {
  site: {
    lang: "zh",
    title: "Xinyu Kuo · Homepage",
    description: "Xinyu Kuo 的个人主页",
    keywords: "Xinyu Kuo, Homepage, Backend, Go, Rust, Cloud Native",
  },
  profile: {
    readme: {
      line1Html: "Though my own steps may be confined,<br>my data packets dance across the world.",
      line2Html: "<span class=\"b\">你好，我是 Xinyu Kuo<sup>@kingcanfish</sup>。</span><br> Back End Developer, focus on Go and Web Development.<br> Interested in Rust, Distributed Systems and Cloud Native.",
      rollPromptPrefixHtml: "如果你对我感兴趣，可以",
      rollLinkText: "点这里",
      rollPromptSuffixHtml: " Roll 一个关于我的标签，<br> 也欢迎在下面的链接中关注我或直接发邮件联系我。",
      line4Html: "希望能与你在比特之海的繁星下相见。",
    },
  },
  socialLinks: [
    { label: "GitHub", iconClass: "fa-brands fa-github fa-fw", url: "https://github.com/kingcanfish", newTab: true },
    { label: "Blog", iconClass: "fa-solid fa-blog fa-fw", url: "https://blog.gxy.plus", newTab: true },
    { label: "Email", iconClass: "fa-solid fa-envelope fa-fw", url: "mailto:i@gxy.plus", newTab: true },
    { label: "Instagram", iconClass: "fa-brands fa-instagram fa-fw", url: "https://www.instagram.com/kuoisguo/", newTab: true },
    { label: "Running", iconClass: "fa-solid fa-person-running fa-fw", url: "https://run.gxy.plus", newTab: true },
    { label: "Steam", iconClass: "fa-brands fa-steam fa-fw", url: "https://steamcommunity.com/profiles/76561198863453815", newTab: true },
    { label: "Telegram", iconClass: "fa-brands fa-telegram fa-fw", url: "https://t.me/", newTab: true },
    { label: "X", iconClass: "fa-brands fa-x-twitter fa-fw", url: "https://x.com/", newTab: true },
  ],
  entries: {
    blog: { label: "博客", url: "https://blog.gxy.plus" },
    running: { label: "跑步轨迹", url: "https://run.gxy.plus" },
  },
  footer: {
    text: "赣ICP备2022003182号-1",
    url: "https://beian.miit.gov.cn/",
    newTab: true,
  },
  slogans: [
    "Though my own steps may be confined,<br>my data packets dance across the world.",
    "你好，<br>请多指教。",
    "Keep building, keep shipping.",
    "Backend first,<br>curiosity always.",
    "平凡日常里，<br>也有小小奇迹。",
    "你好世界，<br>今天也继续写代码。",
    "敬畏技术，<br>保持热爱。",
    "Distributed systems,<br>Cloud native.",
    "Roll 一下，<br>看看我还有什么标签。",
    "Welcome to my homepage.",
  ],
  tags: [
    "Back End Developer",
    "Go",
    "Rust",
    "Web Development",
    "Distributed Systems",
    "Cloud Native",
    "Open Source Learner",
    "Linux User",
    "Coffee Driven",
    "Shipping > Talking",
    "Lifelong Learner",
    "Runner",
    "Steam 玩家",
    "把复杂问题拆小",
    "持续交付爱好者",
    "如果这个标签没意思，就再 Roll 一次",
  ],
};

let slogans = DEFAULT_SITE_CONFIG.slogans.slice();
let tags = DEFAULT_SITE_CONFIG.tags.slice();

let rollTimer = null;

function mergeSiteConfig(defaults, userConfig){
  const user = userConfig || {};
  const userProfile = user.profile || {};
  const userEntries = user.entries || {};

  return {
    site: { ...defaults.site, ...(user.site || {}) },
    profile: {
      ...defaults.profile,
      ...userProfile,
      readme: {
        ...defaults.profile.readme,
        ...(userProfile.readme || {}),
      },
    },
    socialLinks: Array.isArray(user.socialLinks) ? user.socialLinks : defaults.socialLinks,
    entries: {
      ...defaults.entries,
      ...userEntries,
      blog: { ...defaults.entries.blog, ...(userEntries.blog || {}) },
      running: { ...defaults.entries.running, ...(userEntries.running || {}) },
    },
    footer: { ...defaults.footer, ...(user.footer || {}) },
    slogans: Array.isArray(user.slogans) && user.slogans.length ? user.slogans : defaults.slogans,
    tags: Array.isArray(user.tags) && user.tags.length ? user.tags : defaults.tags,
  };
}

async function loadSiteConfig(){
  try {
    const response = await fetch("./config/site-config.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    const userConfig = await response.json();
    return mergeSiteConfig(DEFAULT_SITE_CONFIG, userConfig);
  } catch (error) {
    console.warn("Failed to load config/site-config.json, fallback to defaults.", error);
    return DEFAULT_SITE_CONFIG;
  }
}

function setMetaContent(name, content){
  if (!content) {
    return;
  }
  const meta = document.querySelector('meta[name="' + name + '"]');
  if (meta) {
    meta.setAttribute("content", content);
  }
}

function setHtmlById(id, html){
  if (!html) {
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = html;
  }
}

function applyEntry(entryId, textId, entry){
  if (!entry) {
    return;
  }
  const anchor = document.getElementById(entryId);
  if (anchor && entry.url) {
    anchor.setAttribute("href", entry.url);
  }
  const text = document.getElementById(textId);
  if (text && entry.label) {
    text.textContent = entry.label;
  }
}

function resolveSocialIconClass(item){
  return (item && item.iconClass) ? item.iconClass : "fa-solid fa-link fa-fw";
}

function applySiteConfig(config){
  if (config.site) {
    if (config.site.lang) {
      document.documentElement.lang = config.site.lang;
    }
    if (config.site.title) {
      document.title = config.site.title;
    }
    setMetaContent("description", config.site.description);
    setMetaContent("keywords", config.site.keywords);
  }

  if (config.profile && config.profile.readme) {
    const readme = config.profile.readme;
    setHtmlById("readme-line1", readme.line1Html);
    setHtmlById("readme-line2", readme.line2Html);
    setHtmlById("readme-line4", readme.line4Html);

    const line3 = document.getElementById("readme-line3");
    if (line3) {
      line3.innerHTML =
        (readme.rollPromptPrefixHtml || "") +
        '<a href="#" id="roll-trigger">' + (readme.rollLinkText || "点这里") + "</a>" +
        (readme.rollPromptSuffixHtml || "");
    }
  }

  if (Array.isArray(config.socialLinks)) {
    const container = document.getElementById("social-links");
    if (container) {
      container.innerHTML = "";
      config.socialLinks.forEach((item) => {
        if (!item || !item.url) {
          return;
        }
        const a = document.createElement("a");
        a.className = "item";
        a.href = item.url;
        if (item.newTab !== false) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }

        const icon = document.createElement("i");
        icon.className = resolveSocialIconClass(item);

        const label = document.createElement("span");
        label.textContent = item.label || item.url;

        a.appendChild(icon);
        a.appendChild(label);
        container.appendChild(a);
      });
    }
  }

  if (config.entries) {
    applyEntry("entry-blog", "entry-blog-text", config.entries.blog);
    applyEntry("entry-running", "entry-running-text", config.entries.running);
  }

  if (config.footer) {
    const footerLink = document.getElementById("footer-link");
    if (footerLink) {
      if (config.footer.url) {
        footerLink.setAttribute("href", config.footer.url);
      }
      if (config.footer.text) {
        footerLink.textContent = config.footer.text;
      }
      if (config.footer.newTab !== false) {
        footerLink.setAttribute("target", "_blank");
        footerLink.setAttribute("rel", "noopener noreferrer");
      } else {
        footerLink.removeAttribute("target");
        footerLink.removeAttribute("rel");
      }
    }
  }

  slogans = Array.isArray(config.slogans) ? config.slogans.slice() : DEFAULT_SITE_CONFIG.slogans.slice();
  tags = Array.isArray(config.tags) ? config.tags.slice() : DEFAULT_SITE_CONFIG.tags.slice();
}

function bindRollTrigger(){
  const trigger = document.getElementById("roll-trigger");
  if (!trigger) {
    return;
  }
  trigger.addEventListener("click", function(e){
    e.preventDefault();
    rollOnce();
  });
}

function getMsg(){
  if (!slogans.length) {
    return;
  }
	var r = random(0,slogans.length-1);
  const sloganEl = document.getElementById("slogan");
  if (sloganEl) {
	  sloganEl.innerHTML = slogans[r];
  }
}

function random(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range);
      return num;
}

function initPage(){
  loadSiteConfig().then((config) => {
    applySiteConfig(config);
    getMsg();
    bindRollTrigger();
    console.log('Xinyu Kuo Homepage');
  }).finally(() => {
    if (document.body) {
      document.body.classList.remove("pending-init");
    }
  });
}

function rollATag() {
  const container = document.querySelector(".roll-tag");
  if (!container) {
    return;
  }

  container.classList.add("active");
  const existing = container.querySelectorAll("span");
  existing.forEach((el) => el.remove());

  const span = document.createElement("span");
  span.textContent = getRandomTag();
  span.classList.add("ready");
  container.appendChild(span);
}

function rollOnce() {
  clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 20)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 40)
  }, 400)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 80)
  }, 800)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 140)
  }, 1200)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 240)
  }, 1600)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = null
  }, 1800)
}

function getRandomTag() {
  return tags[random(0, tags.length-1)];
}

function bootstrap() {
  initStarfield();
  initPage();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
