// ===== QUESTIONS DATA =====
// Scoring keys:
// Each option has a score key: 'A', 'B', or 'C'
const questions = [
  {
    text: "เมื่อก้าวเข้าร้าน S&P สิ่งแรกที่คุณมองหาคือ?",
    options: [
      { label: "ก", text: "เมนูที่เป็น Signature มาตรฐาน", score: "A" },
      { label: "ข", text: "เมนูที่จัดวางสวยงามสะดุดตา",   score: "C" }
    ]
  },
  {
    text: "สไตล์การพักผ่อนที่คุณโปรดปรานที่สุดคือ?",
    options: [
      { label: "ก", text: "จัดโต๊ะ เคลียร์งานให้เสร็จ",          score: "A" },
      { label: "ข", text: "ออกไปหาประสบการณ์ใหม่กับเพื่อน", score: "B" }
    ]
  },
  {
    text: "คุณคิดว่าอะไรคือเสน่ห์ที่โดดเด่นที่สุดในตัวคุณ?",
    options: [
      { label: "ก", text: "ความเนี้ยบ ความรอบคอบ",        score: "C" },
      { label: "ข", text: "ความเข้าถึงง่าย สดใส",            score: "B" }
    ]
  },
  {
    text: "ในยามที่ต้องตัดสินใจเรื่องสำคัญ คุณมักจะ?",
    options: [
      { label: "ก", text: "พิจารณาตามหลักการและข้อมูล",  score: "C" },
      { label: "ข", text: "ตามสัญชาตญาณและความรู้สึก",   score: "B" }
    ]
  },
  {
    text: "เวลาทานขนม คุณมักจะชอบ Texture แบบไหน?",
    options: [
      { label: "ก", text: "นุ่มละมุน คุ้นเคย",                  score: "A" },
      { label: "ข", text: "มีมิติ มีเลเยอร์น่าค้นหา",           score: "C" }
    ]
  },
  {
    text: "ถ้าเพื่อนต้องการความช่วยเหลือ คุณจะเป็นคนประเภทไหน?",
    options: [
      { label: "ก", text: "คนที่วางแผนจัดการให้เป็นระบบ", score: "A" },
      { label: "ข", text: "คนที่อยู่ข้างๆ ให้กำลังใจ",         score: "B" }
    ]
  },
  {
    text: "เป้าหมายสูงสุดในตอนนี้คืออะไร?",
    options: [
      { label: "ก", text: "ความมั่นคงและความสำเร็จที่วัดผลได้", score: "A" },
      { label: "ข", text: "ความสุขและการได้ทำสิ่งที่ชอบ",          score: "B" }
    ]
  },
  {
    text: "เวลาเจอความเครียด คุณจัดการอย่างไร?",
    options: [
      { label: "ก", text: "ทานของอร่อยที่ช่วยปลอบประโลมจิตใจ", score: "B" },
      { label: "ข", text: "วิเคราะห์ปัญหาแล้วแก้ให้จบ",               score: "C" }
    ]
  },
  {
    text: "ถ้าต้องแต่งตัวไปงานปาร์ตี้ คุณจะ?",
    options: [
      { label: "ก", text: "เน้นความเรียบโก้ ดูดีเสมอ",     score: "A" },
      { label: "ข", text: "เน้นสีสันสดใส ให้คนจำได้",       score: "B" }
    ]
  },
  {
    text: "รสชาติที่คุณประทับใจที่สุดในความทรงจำคือ?",
    options: [
      { label: "ก", text: "รสชาติที่หอมหวานเรียบง่าย",         score: "A" },
      { label: "ข", text: "รสชาติที่ตัดกันอย่างลงตัว",           score: "C" }
    ]
  }
];

// ===== RESULTS DATA =====
const results = {
  A: {
    name: "เค้กเนยสด (Butter Cake)",
    definition: "The Classic Achiever — ผู้แสวงหาความมั่นคง",
    desc: "คุณเป็นคนที่มีมาตรฐานในชีวิตสูง ให้ความสำคัญกับความสม่ำเสมอและความเชื่อใจได้ เค้กเนยสดที่เรียบง่ายแต่เข้มข้นด้วยวัตถุดิบคุณภาพดี คือภาพสะท้อนของตัวคุณที่ไม่จำเป็นต้องหวือหวา แต่ทุกคนรอบข้างรู้ดีว่าคุณคือ \"เสาหลัก\" ที่พึ่งพาได้เสมอ",
    image: "butter-cake.svg"
  },
  B: {
    name: "เค้กช็อกโกแลตหน้านิ่ม (Chocolate Cake)",
    definition: "The Social Connector — ผู้เชื่อมโยงสังคม",
    desc: "คุณเป็นคนที่มีพลังงานบวกและเป็นที่รักของเพื่อนฝูง ความหอมหวานของช็อกโกแลตที่ใครๆ ก็เข้าถึงได้ สะท้อนถึงความเป็นคนมีเสน่ห์ เข้ากับคนง่าย และพร้อมจะแบ่งปันความสุขให้กับผู้คนรอบข้างเหมือนกับเค้กชิ้นนี้",
    image: "chocolate-cake.svg"
  },
  TIE: {
    name: "เค้กสตรอว์เบอร์รี่เฟรชครีม (Strawberry Fresh Cream)",
    definition: "The Modern Optimist — ผู้มองโลกในแง่ดี",
    desc: "คุณเป็นคนทันสมัยที่รักความสดชื่น ชอบเปิดรับสิ่งใหม่ๆ และมีมุมมองที่สว่างไสวเหมือนเนื้อครีมเบาๆ ตัดกับความเปรี้ยวอมหวานของสตรอว์เบอร์รี่ คุณคือคนประเภทที่เมื่อใครได้อยู่ใกล้ก็จะรู้สึกสบายใจและสดชื่นตามไปด้วย",
    image: "strawberry-cake.svg"
  },
  C: {
    name: "เค้กแบล็คฟอเรสต์ (Black Forest)",
    definition: "The Deep Analyst — ผู้มีความคิดลึกซึ้ง",
    desc: "คุณไม่ได้มองโลกแค่ผิวเผิน แต่คุณเป็นคนละเอียดอ่อน มีความซับซ้อนในแง่ของความคิดและการทำงานเหมือนกับชั้นเลเยอร์ของเค้กชิ้นนี้ คุณมีความเป็นมืออาชีพและพิถีพิถัน เหมาะกับบทบาทการเป็นผู้วางแผนหรือผู้ที่ต้องการความสมบูรณ์แบบ",
    image: "blackforest-cake.svg"
  }
};

const CLOSING = "ความแม่นยำของเรามาจากพฤติกรรมการตัดสินใจของคุณ หากวันนี้เหนื่อยจากการเรียน การทำงาน หรืออยากให้รางวัลกับตัวเอง อย่าลืมแวะไปที่ S&P สาขาใกล้บ้าน เพื่อเติมพลังและความสุข ด้วยเค้กที่ใช่ของคุณนะคะ :)";

// ===== STATE =====
let currentQ = 0;
let answers = new Array(questions.length).fill(null); // null | 'A' | 'B' | 'C'

// ===== ELEMENTS =====
const screenLanding = document.getElementById("screen-landing");
const screenQuiz    = document.getElementById("screen-quiz");
const screenResult  = document.getElementById("screen-result");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const questionArea = document.getElementById("questionArea");
const btnBack      = document.getElementById("btnBack");
const btnStart     = document.getElementById("btnStart");
const btnRetry     = document.getElementById("btnRetry");

// ===== HELPERS =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const pct = ((currentQ + 1) / questions.length) * 100;
  progressFill.style.width = pct + "%";
  progressText.textContent = (currentQ + 1) + " / " + questions.length;
  btnBack.disabled = currentQ === 0;
}

function renderQuestion(idx, direction = "right") {
  const q = questions[idx];
  const selected = answers[idx];

  // Fade out
  questionArea.classList.remove("visible", "fade-in", "fade-out");
  questionArea.classList.add("fade-out");

  setTimeout(() => {
    questionArea.innerHTML = `
      <span class="question-num">ข้อ ${idx + 1}</span>
      <p class="question-text">${q.text}</p>
      <ul class="options-list">
        ${q.options.map((opt, i) => `
          <li>
            <button class="option-btn ${selected === opt.score ? 'selected' : ''}"
                    data-score="${opt.score}" data-index="${i}">
              <span class="option-letter">${opt.label}</span>
              <span>${opt.text}</span>
            </button>
          </li>
        `).join("")}
      </ul>
    `;

    // Attach option listeners
    questionArea.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => handleAnswer(btn.dataset.score));
    });

    questionArea.classList.remove("fade-out");
    questionArea.classList.add("fade-in");
    // force reflow
    questionArea.offsetHeight;
    questionArea.classList.add("visible");
    questionArea.classList.remove("fade-in");
  }, 180);
}

function handleAnswer(scoreKey) {
  answers[currentQ] = scoreKey;

  if (currentQ < questions.length - 1) {
    currentQ++;
    updateProgress();
    renderQuestion(currentQ);
  } else {
    showResult();
  }
}

function calculateResult() {
  let totals = { A: 0, B: 0, C: 0 };
  answers.forEach(a => { if (a) totals[a]++; });

  const maxVal = Math.max(totals.A, totals.B, totals.C);
  const winners = Object.keys(totals).filter(k => totals[k] === maxVal);

  if (winners.length > 1) return "TIE";
  return winners[0];
}

function showResult() {
  const key = calculateResult();
  const r = results[key];

  document.getElementById("resultImage").src = r.image;
  document.getElementById("resultImage").alt = r.name;
  document.getElementById("resultName").textContent = r.name;
  document.getElementById("resultDefinition").textContent = r.definition;
  document.getElementById("resultDesc").textContent = r.desc;
  document.getElementById("resultClosing").textContent = CLOSING;

  showScreen("screen-result");
}

function resetQuiz() {
  currentQ = 0;
  answers = new Array(questions.length).fill(null);
  updateProgress();
  renderQuestion(0);
  showScreen("screen-quiz");
}

// ===== EVENT LISTENERS =====
btnStart.addEventListener("click", () => {
  resetQuiz();
});

btnBack.addEventListener("click", () => {
  if (currentQ > 0) {
    currentQ--;
    updateProgress();
    renderQuestion(currentQ);
  }
});

btnRetry.addEventListener("click", () => {
  resetQuiz();
});

// ===== INIT =====
updateProgress();
