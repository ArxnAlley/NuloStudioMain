/* ============================================================

   ELEMENTS

============================================================ */

const heroLogoWrap = document.querySelector(".heroLogoWrap");

const heroSection = document.querySelector(".heroSection");

const siteHeader = document.querySelector(".siteHeader");

const requestCtaBtn = document.getElementById("requestCtaBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const requestModal = document.getElementById("requestModal");

const requestForm = document.getElementById("requestForm");

const formSubmitBtn = document.getElementById("formSubmitBtn");

const successToast = document.getElementById("successToast");

const newsletterTab = document.getElementById("newsletterTab");

const newsletterPanel = document.getElementById("newsletterPanel");

const newsletterInner = document.querySelector(

  "#newsletterPanel .newsletterInner",

);

const openNewsletterFormBtn = document.getElementById("openNewsletterForm");

const newsletterModal = document.getElementById("newsletterModal");

const closeNewsletterModalBtn = document.getElementById("closeNewsletterModal");

const closeNewsletterPanelBtn = document.getElementById("closeNewsletterPanel");

const newsletterFormEl = document.getElementById("newsletterFormEl");

const buildUpdatesPanel = document.getElementById("buildUpdatesPanel");

const buildUpdatesInner = document.querySelector(

  "#buildUpdatesPanel .newsletterInner",

);

const closeBuildUpdatesPanelBtn = document.getElementById(

  "closeBuildUpdatesPanel",

);

const buildUpdatesFormEl = document.getElementById("buildUpdatesFormEl");

const banner = document.querySelector(".scrollBanner");

const track = document.querySelector(".scrollTrack");

const newsletterCtas = document.querySelectorAll(".newsletterCta");


/* ============================================================

   LOGO ANIMATION — TRACE REVEAL SYSTEM

============================================================ */

function skipIntroAnimation() {

  const stage = document.getElementById("logoStage");

  if (stage) stage.classList.add("isFilled");

  revealSequence();

}

window.addEventListener("load", () => {

  const hasPlayedIntro = sessionStorage.getItem("introPlayed");

  if (hasPlayedIntro) {

    skipIntroAnimation();

    return;

  }

  sessionStorage.setItem("introPlayed", "true");

  const stage = document.getElementById("logoStage");

  const fillSvg = document.querySelector(".nuloFillSvg");

  const outlineSvg = document.getElementById("nuloOutlineSvg");

  if (!stage || !fillSvg || !outlineSvg) {

    revealSequence();

    return;

  }

  const sourcePathList = [...fillSvg.querySelectorAll(".sourcePath")];

  const svgNamespace = "http://www.w3.org/2000/svg";

  const traceMetaList = [];

  const controlledLPathList = [

    {

      className: "tracePath lOuter",

      d: "M958.759277,508.048096 C957.415466,525.920593 956.117676,543.323975 954.770203,561.394470 C960.500671,561.394470 965.840332,561.394470 971.399536,561.394470 C972.246887,548.379456 973.152039,535.279480 973.937988,522.172424 C974.675293,509.876404 975.200073,497.566742 976.062073,485.280182 C976.170227,483.738007 977.458008,481.942505 978.715027,480.867493 C996.300476,465.828522 1013.692261,450.535278 1031.846436,436.210297 C1035.927612,432.989868 1042.743896,432.096558 1048.308594,432.074951 C1094.461426,431.895782 1140.616455,432.084473 1186.769043,432.424408 C1192.526733,432.466827 1198.286621,433.963470 1204.013916,434.966492 C1205.216675,435.177155 1206.451050,435.994629 1207.383301,436.846985 C1224.582397,452.573059 1241.777710,468.304291 1258.833130,484.185394 C1260.329102,485.578278 1261.771851,488.064209 1261.681641,489.968872 C1260.353638,518.067200 1258.902588,546.162415 1257.038208,574.229004 C1256.826172,577.420044 1254.646851,581.238708 1252.181396,583.397827 C1236.910767,596.770996 1221.546021,610.067566 1205.622803,622.642883 C1201.646851,625.782898 1195.498169,627.635925 1190.358032,627.615356 C1126.891479,627.361450 1063.426270,626.690002 999.961670,626.030701 C982.649841,625.850891 965.314758,625.832275 948.038208,624.875549 C927.935608,623.762390 908.025146,621.230042 890.353149,610.163086 C877.828369,602.319458 870.545959,591.177612 870.959656,576.359558 C871.521423,556.239990 873.114990,536.149048 874.276062,516.046326 C875.514038,494.611633 877.121216,473.190796 877.910339,451.739716 C878.742676,429.114319 878.801208,406.460388 879.190369,383.818817 C879.221069,382.031433 879.194336,380.243042 879.194336,377.953217 C909.114563,378.989258 938.358704,380.001892 968.133057,381.032867 C965.015198,423.332367 961.910278,465.455688 958.759277,508.048096 Z"

    },

    {

      className: "tracePath lInner",

      d: "M1003.000244,612.973022 C980.528320,612.304443 958.535889,612.014404 936.592041,610.826050 C923.262268,610.104248 910.256226,607.302124 898.631470,599.920410 C887.577942,592.901367 883.592407,582.840759 884.509644,570.156311 C885.805054,552.239868 886.890686,534.307617 887.960876,516.375854 C889.319153,493.617767 890.593384,470.854584 891.862305,448.091278 C892.593933,434.965057 893.535950,421.839874 893.787720,408.702789 C893.889404,403.391510 892.403076,398.049774 891.647095,392.775208 C912.230164,392.775208 932.757141,392.775208 953.777039,392.775208 C953.043274,403.766510 952.416992,413.985870 951.666687,424.196106 C950.446777,440.796448 949.042664,457.383728 947.901855,473.989288 C945.974609,502.042847 944.298889,530.113953 942.303223,558.162415 C941.350769,571.549194 944.433411,575.461731 958.159485,575.967285 C972.304382,576.488220 986.468445,576.486816 1000.614197,576.992126 C1002.798523,577.070129 1005.324707,578.168274 1007.021973,579.593445 C1018.733521,589.427368 1030.269775,599.470032 1041.853149,609.456482 C1042.962891,610.413208 1044.007935,611.444824 1045.655762,612.972900 C1031.143555,612.972900 1017.321899,612.972900 1003.000244,612.973022 Z"

    }

  ];

  const controlledOPathList = [

    {

      className: "tracePath oOuter",

      d: "M1248.456543,501.494507 C1247.240967,523.399109 1245.983398,544.843750 1244.975098,566.299988 C1244.773804,570.584839 1243.570435,573.749390 1240.133667,576.570129 C1225.333740,588.717407 1210.776001,601.159485 1196.013550,613.353027 C1194.630737,614.495239 1192.431030,615.176941 1190.608765,615.180664 C1150.285156,615.262756 1109.960205,615.357605 1069.640259,614.954956 C1066.145264,614.920166 1062.684692,611.444153 1059.208130,609.566528 C1059.363037,609.106567 1059.518066,608.646606 1059.672974,608.186584 C1060.721680,608.119141 1061.770386,607.991333 1062.818848,607.992981 C1101.643799,608.052734 1140.468872,608.162354 1179.293579,608.098450 C1181.566528,608.094666 1184.275269,607.258667 1186.039795,605.868713 C1200.940552,594.130798 1215.701538,582.213623 1230.388672,570.208618 C1231.603027,569.216003 1232.540283,567.218384 1232.639282,565.627502 C1233.994507,543.854126 1235.227051,522.072571 1236.302368,500.283691 C1236.377441,498.764404 1235.359131,496.757080 1234.197510,495.677734 C1222.000122,484.343597 1209.054199,473.739410 1197.591187,461.716797 C1189.850464,453.598083 1181.077759,452.043549 1170.939087,452.065552 C1132.447510,452.149200 1093.955444,452.007355 1055.464478,452.175079 C1052.791260,452.186737 1049.619019,453.421021 1047.538696,455.132263 C1032.496582,467.505585 1017.609863,480.071594 1002.875061,492.809265 C1001.166016,494.286682 999.926575,497.133972 999.759399,499.439636 C998.207336,520.847290 996.938293,542.275513 995.564819,564.049744 C991.677979,564.049744 988.104248,564.049744 983.815063,564.049744 C984.130493,560.775024 984.567322,557.391479 984.765503,553.994080 C985.928589,534.049683 987.117920,514.106018 988.080139,494.151581 C988.238159,490.873718 989.238831,488.644684 991.762634,486.557922 C1006.903015,474.039124 1021.995239,461.459412 1036.941406,448.710022 C1041.128540,445.138336 1045.980957,444.571167 1050.935181,444.617767 C1098.075073,445.061432 1145.215210,445.559662 1192.349976,446.350677 C1195.615112,446.405487 1199.447510,448.223206 1201.980591,450.416809 C1215.950684,462.515167 1229.427856,475.184387 1243.454346,487.214569 C1248.077881,491.180145 1249.869141,495.311798 1248.456543,501.494507 Z"

    },

    {

      className: "tracePath oMid",

      d: "M1168.754272,571.739136 C1162.642212,578.656677 1155.530640,580.889221 1146.485718,580.644104 C1123.508179,580.021362 1100.500732,580.578674 1077.508301,580.353027 C1074.677612,580.325195 1071.387085,579.021118 1069.129883,577.258301 C1060.735107,570.701965 1052.605591,563.795593 1044.575317,556.792725 C1043.183105,555.578674 1041.958984,553.238892 1042.006470,551.455017 C1042.369385,537.815125 1042.959717,524.177673 1043.777100,510.557373 C1043.897217,508.555481 1045.120972,506.121429 1046.629150,504.783325 C1055.470581,496.939209 1064.502930,489.306915 1073.598633,481.757111 C1074.852905,480.716064 1076.815186,480.026367 1078.451782,480.022186 C1104.779297,479.955170 1131.107788,479.979645 1157.434692,480.160614 C1159.354858,480.173798 1161.656128,481.096985 1163.116943,482.362640 C1172.047974,490.100708 1180.863159,497.978821 1189.512085,506.030121 C1190.859253,507.284180 1191.888672,509.690308 1191.824463,511.520233 C1191.357300,524.830566 1190.651611,538.134888 1189.781982,551.425415 C1189.680664,552.971985 1188.417847,554.759216 1187.182129,555.861267 C1181.219849,561.177917 1175.082520,566.298157 1168.754272,571.739136 Z"

    },

    {

      className: "tracePath oInner",

      d: "M1055.847412,511.414429 C1063.272583,505.406799 1070.322510,499.565826 1077.605591,494.031525 C1079.437378,492.639648 1082.011108,491.496857 1084.251587,491.483032 C1106.411743,491.346191 1128.574951,491.364105 1150.732910,491.664154 C1153.362915,491.699799 1156.358398,493.179810 1158.509399,494.856293 C1165.072144,499.971130 1171.373779,505.431519 1177.604858,510.951843 C1178.773438,511.987152 1179.827148,513.943542 1179.776733,515.435852 C1179.423584,525.914612 1178.853882,536.389404 1178.101318,546.847229 C1178.002686,548.217834 1176.715332,549.774719 1175.561157,550.752563 C1168.955078,556.348938 1162.286011,561.876465 1155.481934,567.228638 C1154.068481,568.340454 1151.998779,569.181274 1150.227295,569.189453 C1126.899414,569.296753 1103.570679,569.262024 1080.242676,569.141113 C1078.759033,569.133423 1076.995972,568.467041 1075.846802,567.519897 C1069.173584,562.019531 1062.589600,556.405823 1056.123047,550.664246 C1055.044556,549.706543 1054.059448,547.914429 1054.100342,546.539612 C1054.445801,534.920532 1055.039551,523.308777 1055.847412,511.414429 Z"

    }

  ];

  function splitSubpathList(pathData) {

    if (!pathData) return [];

    const cleanData = pathData.replace(/\s+/g, " ").trim();

    return cleanData.match(/[Mm][^Mm]*/g) || [];

  }

  function createMeasurePath(pathData) {

    const pathElement = document.createElementNS(svgNamespace, "path");

    pathElement.setAttribute("d", pathData);

    pathElement.setAttribute("fill", "none");

    pathElement.setAttribute("stroke", "none");

    pathElement.setAttribute("opacity", "0");

    outlineSvg.appendChild(pathElement);

    return pathElement;

  }

  function appendTracePath(pathData, className = "tracePath") {

    const tracePath = document.createElementNS(svgNamespace, "path");

    tracePath.setAttribute("d", pathData);

    tracePath.setAttribute("class", className);

    tracePath.style.animation = "none";

    outlineSvg.appendChild(tracePath);

    const pathLength = tracePath.getTotalLength();

    tracePath.style.setProperty("--pathLength", String(pathLength));

    return tracePath;

  }

  sourcePathList.forEach((sourcePath) => {

    const subpathList = splitSubpathList(sourcePath.getAttribute("d"));

    subpathList.forEach((subpathData) => {

      const measurePath = createMeasurePath(subpathData);

      let bbox = null;

      let pathLength = 0;

      try { bbox = measurePath.getBBox(); } catch (e) { bbox = null; }

      try { pathLength = measurePath.getTotalLength(); } catch (e) { pathLength = 0; }

      measurePath.remove();

      if (!bbox || !pathLength) return;

      const isBackgroundShape = bbox.width > 1450 && bbox.height > 900;

      const isStudioShape = bbox.y > 650;

      const isTinyNoise = bbox.width < 2 || bbox.height < 2;

      if (isBackgroundShape || isStudioShape || isTinyNoise) return;

      traceMetaList.push({ d: subpathData, y: bbox.y, x: bbox.x, length: pathLength, area: bbox.width * bbox.height });

    });

  });

  traceMetaList.sort((a, b) => {

    if (Math.abs(a.y - b.y) > 24) return a.y - b.y;

    return a.x - b.x;

  });

  const groups = [];

  if (traceMetaList.length) {

    const xSortedTraceList = [...traceMetaList].sort((a, b) => a.x - b.x);

    const splitList = [];

    for (let i = 1; i < xSortedTraceList.length; i++) {

      splitList.push({ index: i, gap: xSortedTraceList[i].x - xSortedTraceList[i - 1].x });

    }

    const topGapList = splitList

      .sort((a, b) => b.gap - a.gap)

      .slice(0, 3)

      .sort((a, b) => a.index - b.index);

    if (topGapList.length) {

      topGapList.forEach((splitMeta, splitIndex) => {

        const startIndex = splitIndex === 0 ? 0 : topGapList[splitIndex - 1].index;

        groups.push(xSortedTraceList.slice(startIndex, splitMeta.index));

      });

      groups.push(xSortedTraceList.slice(topGapList[topGapList.length - 1].index));

    } else {

      groups.push(xSortedTraceList);

    }

  }

  const finalPaths = [];

  groups.forEach((group, i) => {

    if (!group.length) return;

    group.sort((a, b) => b.area - a.area);

    let selected = [];

    if (i > 1) return;

    if (i === 0) { selected = group.slice(0, 3); }

    else if (i === 1) { selected = group.slice(0, 2); }

    selected.forEach((traceMeta) => {

      finalPaths.push(appendTracePath(traceMeta.d));

    });

  });

  const nPaths = finalPaths.slice(0, 3);

  const uPaths = finalPaths.slice(3, 5);

  const lPaths = controlledLPathList.map((p) => appendTracePath(p.d, p.className));

  const oPaths = controlledOPathList.map((p) => appendTracePath(p.d, p.className));

  const sequenceGroups = [nPaths, uPaths, lPaths, oPaths];

  let delay = 0;

  sequenceGroups.forEach((group, groupIndex) => {

    group.forEach((path, pathIndex) => {

      const len = path.getTotalLength();

      const oCascadeOffset = groupIndex === 3 ? pathIndex * 120 : pathIndex * 10;

      const cascadeDelay = delay + oCascadeOffset;

      path.style.strokeDasharray = len;

      path.style.strokeDashoffset = len;

      window.setTimeout(() => {

        path.style.transition = "stroke-dashoffset 4s cubic-bezier(0.4, 0, 0.2, 1)";

        path.style.strokeDashoffset = "0";

      }, cascadeDelay);

    });

    delay += groupIndex === 2 ? 45 : 70;

  });

  // Reveal fill layer
  window.setTimeout(() => {

    stage.classList.add("isFilled");

  }, 3200);

  // Fire hero reveal after fill settles
  window.setTimeout(revealSequence, 3500);

});

/* ============================================================

   MODAL — OPEN / CLOSE

============================================================ */

function initScrollBanner() {

  const content = document.getElementById("scrollContent");

  if (!content || !track) return;

  /* Clone the content block once — CSS animates -50% for seamless loop */

  const trackWidth = track.offsetWidth;

  let contentWidth = content.offsetWidth;

  /* Clone until we overflow viewport */

  while (contentWidth < window.innerWidth * 2) {

    const clone = content.cloneNode(true);

    clone.removeAttribute("id");

    track.appendChild(clone);

    contentWidth += clone.offsetWidth;

  }

  requestAnimationFrame(() => {

    track.classList.add("isAnimating");

  });

}

function syncNewsletterPanelPosition() {

  if (!newsletterTab) return;

  const tabRect          = newsletterTab.getBoundingClientRect();
  const bottomFromScreen = window.innerHeight - tabRect.bottom;

  [newsletterInner, buildUpdatesInner].forEach((el) => {
    if (!el) return;
    el.style.top       = "auto";
    el.style.bottom    = `${bottomFromScreen}px`;
    el.style.maxHeight = "";
    el.style.overflowY = "";
  });

}

function openModal() {

  requestModal.removeAttribute("hidden");

  requestModal.setAttribute("aria-hidden", "false");

  window.requestAnimationFrame(() => {

    requestModal.classList.add("isOpen");

  });

  document.body.style.overflow = "hidden";

  /* Focus first input */

  const firstInput = requestModal.querySelector("input");

  if (firstInput) {

    window.setTimeout(() => {

      firstInput.focus();

    }, 360);

  }

}

function closeModal() {

  requestModal.classList.remove("isOpen");

  requestModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  if (requestForm) {

    requestForm.reset();

  }

  window.setTimeout(() => {

    requestModal.setAttribute("hidden", "");

  }, 380);

}

/* ============================================================

   MODAL — EVENT LISTENERS

============================================================ */

function initModal() {

  if (!requestModal) return;

  if (requestCtaBtn) {

    requestCtaBtn.addEventListener("click", openModal);

  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", () => {

    closeModal();

  });

  requestModal.addEventListener("click", (e) => {

    if (e.target === requestModal) {

      closeModal();

    }

  });

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && requestModal.classList.contains("isOpen")) {

      closeModal();

    }

  });

}

/* ============================================================

   FORM — SUBMISSION

============================================================ */

function showSuccessToast() {

  successToast.removeAttribute("hidden");

  window.requestAnimationFrame(() => {

    successToast.classList.add("isVisible");

  });

  window.setTimeout(() => {

    successToast.classList.remove("isVisible");

    window.setTimeout(() => {

      successToast.setAttribute("hidden", "");

    }, 450);

  }, 5000);

}

function setFormLoading(isLoading) {

  if (!formSubmitBtn) return;

  if (isLoading) {

    formSubmitBtn.classList.add("isLoading");

    formSubmitBtn.disabled = true;

  } else {

    formSubmitBtn.classList.remove("isLoading");

    formSubmitBtn.disabled = false;

  }

}

/* ============================================================

   FORM — CUSTOM VALIDATION ENGINE

============================================================ */

function validateField(input) {

  const value = input.value.trim();

  const name = input.name;

  let error = "";

  if (input.hasAttribute("required") && !value) {

    error = "This field is required";

  }

  if (name === "email" && value) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {

      error = "Enter a valid email address";

    }

  }

  if (name === "phone" && value) {

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (!phoneRegex.test(value)) {

      error = "Format: (555) 000-0000";

    }

  }

  showFieldState(input, error);

  return !error;

}

function showFieldState(input, error) {

  const errorEl = input.parentElement.querySelector(".formError");

  input.classList.remove("isError", "isValid");

  if (error) {

    input.classList.add("isError");

    if (errorEl) {

      errorEl.textContent = error;

      errorEl.classList.add("isVisible");

    }

  } else {

    input.classList.add("isValid");

    if (errorEl) {

      errorEl.textContent = "";

      errorEl.classList.remove("isVisible");

    }

  }

}

function initLiveValidation() {

  const inputs = document.querySelectorAll(".formInput");

  inputs.forEach((input) => {

    input.addEventListener("input", () => {

      validateField(input);

    });

    input.addEventListener("blur", () => {

      validateField(input);

    });

  });

}

function initPhoneMask() {

  const phoneInput = document.querySelector("input[name='phone']");

  if (!phoneInput) return;

  phoneInput.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g, "").slice(0, 10);

    if (value.length >= 6) {

      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;

    } else if (value.length >= 3) {

      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;

    }

    e.target.value = value;

  });

}

function initFormSubmit() {

  if (!requestForm) return;

  const successMsg = document.getElementById("formSuccessMessage");

  requestForm.addEventListener("submit", async (e) => {

    let isValid = true;

    const inputs = requestForm.querySelectorAll(".formInput");

    inputs.forEach((input) => {

      if (!validateField(input)) {

        isValid = false;

      }

    });

    if (!isValid) {

      e.preventDefault();

      return;

    }

    e.preventDefault();

    setFormLoading(true);

    if (successMsg) successMsg.classList.remove("show");

    const formData = new FormData(requestForm);

    try {

      const response = await fetch(requestForm.action, {

        method: "POST",

        body: formData,

        headers: { Accept: "application/json" },

      });

      if (response.ok) {

        /* ========================================
           GA4 FORM SUBMIT TRACKING
        ======================================== */

        if (typeof gtag === "function") {

          gtag("event", "form_submit", {
            eventCategory: "lead",
            eventLabel: "requestForm"
          });

        }

        const emailInput = requestForm.querySelector("input[name='email']");
        const nameInput = requestForm.querySelector("input[name='name']");

        sessionStorage.setItem("nuloUserEmail", emailInput?.value ?? "");
        sessionStorage.setItem("nuloUserName", nameInput?.value ?? "");

        requestForm.reset();

        if (requestModal) {

          requestModal.classList.remove("isOpen");

          requestModal.setAttribute("aria-hidden", "true");

          document.body.style.overflow = "";

          window.setTimeout(() => {
            requestModal.setAttribute("hidden", "");
          }, 380);

        }

        showSuccessToast();

        window.setTimeout(() => {
          syncNewsletterPanelPosition();

          if (newsletterPanel) {
            newsletterPanel.classList.add("open");
          }

        }, 1000);

      } else {

        console.error("Form submission failed");

      }

    } catch (err) {

      console.error("Form submission error:", err);

    } finally {

      setFormLoading(false);

    }

  });

}

/* ============================================================

   SUCCESS TOAST — INIT

============================================================ */

function initSuccessToast() {

  successToast.setAttribute("hidden", "");

}

/* ============================================================

   NEWSLETTER SYSTEM

============================================================ */

function prefillNewsletterFields() {

  const savedEmail = sessionStorage.getItem("nuloUserEmail");

  const savedName = sessionStorage.getItem("nuloUserName");

  const newsletterInput = document.querySelector(

    "#newsletterFormEl input[name='email']",

  );

  const nameInput = document.querySelector(

    "#newsletterFormEl input[name='name']",

  );

  if (newsletterInput && savedEmail && !newsletterInput.value) {

    newsletterInput.value = savedEmail;

  }

  if (nameInput && savedName && !nameInput.value) {

    nameInput.value = savedName;

  }

}

function prefillBuildUpdates() {

  const savedEmail = sessionStorage.getItem("nuloUserEmail");

  const savedName = sessionStorage.getItem("nuloUserName");

  const emailInput = document.querySelector(

    "#buildUpdatesFormEl input[name='email']",

  );

  const nameInput = document.querySelector(

    "#buildUpdatesFormEl input[name='name']",

  );

  if (emailInput && savedEmail) {

    emailInput.value = savedEmail;

  }

  if (nameInput && savedName) {

    nameInput.value = savedName;

  }

  sessionStorage.removeItem("nuloUserEmail");

  sessionStorage.removeItem("nuloUserName");

}

function openNewsletterPopup() {

  if (!newsletterPanel) return;

  prefillNewsletterFields();

  newsletterPanel.classList.add("open");

}

function closeNewsletterPopup() {

  if (!newsletterPanel) return;

  newsletterPanel.classList.remove("open");

  if (newsletterModal) {

    newsletterModal.classList.remove("open");

    if (newsletterFormEl) {

      newsletterFormEl.reset();

    }

  }

}

function closeBuildUpdatesPopup() {

  if (!buildUpdatesPanel) return;

  buildUpdatesPanel.classList.remove("open");

  if (buildUpdatesFormEl) {

    buildUpdatesFormEl.reset();

  }

}

function initNewsletter() {

  newsletterCtas.forEach((cta) => {

    cta.addEventListener("mousemove", (e) => {

      const rect = cta.getBoundingClientRect();

      const x = e.clientX - rect.left;

      const y = e.clientY - rect.top;

      cta.style.setProperty("--spotlight-x", `${x}px`);

      cta.style.setProperty("--spotlight-y", `${y}px`);

    });

    cta.addEventListener("mouseleave", () => {

      cta.style.setProperty("--spotlight-x", "50%");

      cta.style.setProperty("--spotlight-y", "50%");

    });

  });

  if (newsletterTab) {

    newsletterTab.addEventListener("click", () => {

      syncNewsletterPanelPosition();

      prefillNewsletterFields();

      if (newsletterPanel) newsletterPanel.classList.add("open");

    });

  }

  if (closeNewsletterPanelBtn) {

    closeNewsletterPanelBtn.addEventListener("click", () => {

      closeNewsletterPopup();

    });

  }

  if (newsletterPanel && newsletterInner) {

    newsletterPanel.addEventListener("click", (e) => {

      if (!newsletterInner.contains(e.target)) {

        closeNewsletterPopup();

      }

    });

  }

  if (closeBuildUpdatesPanelBtn) {

    closeBuildUpdatesPanelBtn.addEventListener("click", () => {

      closeBuildUpdatesPopup();

    });

  }

  if (buildUpdatesPanel && buildUpdatesInner) {

    buildUpdatesPanel.addEventListener("click", (e) => {

      if (!buildUpdatesInner.contains(e.target)) {

        closeBuildUpdatesPopup();

      }

    });

  }

  document.addEventListener("keydown", (e) => {

    if (e.key !== "Escape") return;

    if (newsletterModal && newsletterModal.classList.contains("open")) {

      newsletterModal.classList.remove("open");

      if (newsletterFormEl) {

        newsletterFormEl.reset();

      }

    }

    if (newsletterPanel && newsletterPanel.classList.contains("open")) {

      closeNewsletterPopup();

    }

    if (buildUpdatesPanel && buildUpdatesPanel.classList.contains("open")) {

      closeBuildUpdatesPopup();

    }

  });

  if (openNewsletterFormBtn) {

    openNewsletterFormBtn.addEventListener("click", () => {

      if (!newsletterModal) return;

      newsletterModal.classList.add("open");

      const firstInput = newsletterModal.querySelector("input");

      if (firstInput) {

        window.setTimeout(() => {

          firstInput.focus();

        }, 80);

      }

    });

  }

  if (closeNewsletterModalBtn) {

    closeNewsletterModalBtn.addEventListener("click", () => {

      if (newsletterModal) {

        newsletterModal.classList.remove("open");

        if (newsletterFormEl) {

          newsletterFormEl.reset();

        }

      }

    });

  }

  if (newsletterModal) {

    newsletterModal.addEventListener("click", (e) => {

      if (e.target === newsletterModal) {

        newsletterModal.classList.remove("open");

        newsletterFormEl?.reset();

      }

    });

  }

  if (newsletterFormEl) {

    newsletterFormEl.addEventListener("submit", async (e) => {

      e.preventDefault();

      const formData = new FormData(newsletterFormEl);

      try {

        const response = await fetch(newsletterFormEl.action, {

          method: "POST",

          body: formData,

          headers: {

            Accept: "application/json",

          },

        });

        if (response.ok) {

          newsletterFormEl.reset();

          if (newsletterModal) {

            newsletterModal.classList.remove("open");

          }

          if (newsletterPanel) {

            newsletterPanel.classList.remove("open");

          }

          showSuccessToast();

        } else {

          console.error("Newsletter submission failed");

        }

      } catch (err) {

        console.error("Newsletter error:", err);

      }

    });

  }

  if (buildUpdatesFormEl) {

    buildUpdatesFormEl.addEventListener("submit", async (e) => {

      e.preventDefault();

      const formData = new FormData(buildUpdatesFormEl);

      try {

        const response = await fetch(buildUpdatesFormEl.action, {

          method: "POST",

          body: formData,

          headers: { Accept: "application/json" },

        });

        if (response.ok) {

          buildUpdatesFormEl.reset();

          closeBuildUpdatesPopup();

          showSuccessToast();

          sessionStorage.removeItem("nuloUserEmail");

          sessionStorage.removeItem("nuloUserName");

        } else {

          console.error("Build updates submission failed");

        }

      } catch (err) {

        console.error("Build updates error:", err);

      }

    });

  }

}

/* ============================================================

   REVEAL SEQUENCE — fires after logo animation completes

============================================================ */

function revealSequence() {

  const ctaGroup  = document.querySelector(".heroCtaGroup");
  const title     = document.querySelector(".heroValueTitle");
  const subtext   = document.querySelector(".heroValueText");
  const microText = document.querySelector(".heroMicroText");

  const show = (el) => {
    if (!el) return;
    el.style.opacity    = "1";
    el.style.visibility = "visible";
    el.style.transform  = "translateY(0)";
  };

  // NAV
  if (siteHeader) { siteHeader.classList.add("heroLoaded"); }

  // HOOK
  setTimeout(() => show(title),   200);

  // SUBTEXT
  setTimeout(() => show(subtext), 450);

  // CTAs
  setTimeout(() => show(ctaGroup), 700);

  // MICRO + BANNER + TAB
  setTimeout(() => {
    show(microText);
    banner?.classList.add("isVisible");
    newsletterTab?.classList.add("isVisible");
    syncNewsletterPanelPosition();
  }, 950);

}

/* ============================================================

   INIT

============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  initScrollBanner();

  syncNewsletterPanelPosition();

  /* Logo wrap fade-in */

  if (heroLogoWrap) {

    window.requestAnimationFrame(() => {

      heroLogoWrap.classList.add("isVisible");

    });

  }

  initModal();

  initLiveValidation();

  initPhoneMask();

  initFormSubmit();

  initSuccessToast();

  initNewsletter();

});

window.addEventListener("resize", syncNewsletterPanelPosition);

/* ============================================================

   TOUCH FALLBACK (IOS + MOBILE RELIABILITY)

============================================================ */

const touchTargets = document.querySelectorAll(

  ".solidCta, .ghostCta, .heroCta, .navCallBtn"

);

touchTargets.forEach((el) => {

  el.addEventListener("touchstart", () => {

    el.classList.add("isPressed");

  }, { passive: true });

  el.addEventListener("touchend", () => {

    el.classList.remove("isPressed");

  });

  el.addEventListener("touchcancel", () => {

    el.classList.remove("isPressed");

  });

});
