(() => {
  const visibilityThreshold = 24;
  const autoScrollSettleDelay = 140;
  let controls;
  let scrollToTopButton;
  let scrollToBottomButton;
  let themeToggleButton;
  let resizeObserver;
  let frameId = 0;
  let autoScrollDirection = null;
  let autoScrollSettleTimer = 0;

  function translate(key, fallback) {
    return window.SiteI18n?.t?.(key) ?? fallback;
  }

  function scrollingElement() {
    return document.scrollingElement || document.documentElement;
  }

  function maxScrollTop() {
    return Math.max(scrollingElement().scrollHeight - window.innerHeight, 0);
  }

  function currentScrollTop() {
    return window.scrollY || scrollingElement().scrollTop || 0;
  }

  function updateLabels() {
    if (!scrollToTopButton || !scrollToBottomButton) {
      return;
    }

    const scrollToTopLabel = translate("common.scrollToTop", "Scroll to top");
    const scrollToBottomLabel = translate("common.scrollToBottom", "Scroll to bottom");

    scrollToTopButton.setAttribute("aria-label", scrollToTopLabel);
    scrollToTopButton.setAttribute("title", scrollToTopLabel);
    scrollToBottomButton.setAttribute("aria-label", scrollToBottomLabel);
    scrollToBottomButton.setAttribute("title", scrollToBottomLabel);
  }

  function updateVisibility() {
    if (!controls || !scrollToTopButton || !scrollToBottomButton) {
      return;
    }

    const maxScroll = maxScrollTop();
    const scrollTop = currentScrollTop();
    const pageIsScrollable = maxScroll > visibilityThreshold;
    const atTop = scrollTop <= visibilityThreshold;
    const atBottom = maxScroll <= visibilityThreshold || scrollTop >= maxScroll - visibilityThreshold;
    const hasThemeToggle = Boolean(themeToggleButton);

    controls.hidden = !pageIsScrollable && !hasThemeToggle;

    if (themeToggleButton) {
      themeToggleButton.hidden = false;
    }

    if (autoScrollDirection === "top") {
      scrollToTopButton.hidden = !pageIsScrollable || atTop;
      scrollToBottomButton.hidden = true;
      return;
    }

    if (autoScrollDirection === "bottom") {
      scrollToTopButton.hidden = true;
      scrollToBottomButton.hidden = !pageIsScrollable || atBottom;
      return;
    }

    scrollToTopButton.hidden = !pageIsScrollable || atTop;
    scrollToBottomButton.hidden = !pageIsScrollable || atBottom;
  }

  function clearAutoScrollLock() {
    autoScrollDirection = null;

    if (autoScrollSettleTimer) {
      window.clearTimeout(autoScrollSettleTimer);
      autoScrollSettleTimer = 0;
    }

    scheduleUpdate();
  }

  function autoScrollTargetReached() {
    if (!autoScrollDirection) {
      return false;
    }

    const scrollTop = currentScrollTop();

    if (autoScrollDirection === "top") {
      return scrollTop <= visibilityThreshold;
    }

    return scrollTop >= maxScrollTop() - visibilityThreshold;
  }

  function refreshAutoScrollLock() {
    if (!autoScrollDirection) {
      return;
    }

    if (autoScrollTargetReached()) {
      clearAutoScrollLock();
      return;
    }

    if (autoScrollSettleTimer) {
      window.clearTimeout(autoScrollSettleTimer);
    }

    autoScrollSettleTimer = window.setTimeout(() => {
      clearAutoScrollLock();
    }, autoScrollSettleDelay);
  }

  function scheduleUpdate() {
    if (frameId) {
      return;
    }

    frameId = window.requestAnimationFrame(() => {
      frameId = 0;
      updateVisibility();
    });
  }

  function scrollToPosition(top) {
    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }

  function startAutoScroll(direction) {
    autoScrollDirection = direction;
    updateVisibility();
    refreshAutoScrollLock();
  }

  function createControls() {
    controls = document.createElement("div");
    controls.className = "scroll-jump-controls";
    controls.hidden = true;

    themeToggleButton = document.querySelector(".js-theme-toggle");

    if (themeToggleButton) {
      themeToggleButton.classList.add("scroll-jump-theme-button");
      controls.appendChild(themeToggleButton);
    }

    scrollToTopButton = document.createElement("button");
    scrollToTopButton.type = "button";
    scrollToTopButton.className = "scroll-jump-button";
    scrollToTopButton.innerHTML = '<span class="scroll-jump-button-arrow" aria-hidden="true">&#8593;</span>';
    scrollToTopButton.addEventListener("click", () => {
      startAutoScroll("top");
      scrollToPosition(0);
    });

    scrollToBottomButton = document.createElement("button");
    scrollToBottomButton.type = "button";
    scrollToBottomButton.className = "scroll-jump-button";
    scrollToBottomButton.innerHTML = '<span class="scroll-jump-button-arrow" aria-hidden="true">&#8595;</span>';
    scrollToBottomButton.addEventListener("click", () => {
      startAutoScroll("bottom");
      scrollToPosition(scrollingElement().scrollHeight);
    });

    controls.append(scrollToTopButton, scrollToBottomButton);
    document.body.appendChild(controls);

    updateLabels();
    updateVisibility();
  }

  function bindEvents() {
    window.addEventListener("scroll", () => {
      refreshAutoScrollLock();
      scheduleUpdate();
    }, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
    window.addEventListener("site-language-change", updateLabels);

    ["wheel", "touchstart", "keydown"].forEach((eventName) => {
      window.addEventListener(eventName, () => {
        clearAutoScrollLock();
      }, { passive: true });
    });

    if (typeof ResizeObserver === "function") {
      resizeObserver = new ResizeObserver(() => {
        scheduleUpdate();
      });
      resizeObserver.observe(document.body);
      resizeObserver.observe(document.documentElement);
    }
  }

  function init() {
    if (!document.body) {
      return;
    }

    createControls();
    bindEvents();
    scheduleUpdate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();