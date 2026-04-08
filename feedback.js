(function () {
  const { t, provinceName, applyTranslations, getLanguage } = window.SiteI18n;
  const provinceCodes = ["WC", "NC", "EC", "FS", "NW", "GP", "MP", "LP", "KZN"];

  const feedbackStorageKey = "south-african-livestock-atlas-feedback";
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackProvince = document.getElementById("feedbackProvince");
  const farmImages = document.getElementById("farmImages");
  const imagePreview = document.getElementById("imagePreview");
  const feedbackStatus = document.getElementById("feedbackStatus");
  const feedbackSubmissionList = document.getElementById("feedbackSubmissionList");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function feedbackEntries() {
    try {
      const stored = window.localStorage.getItem(feedbackStorageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  function setFeedbackStatus(message, tone = "neutral") {
    if (!feedbackStatus) {
      return;
    }

    feedbackStatus.textContent = message;
    feedbackStatus.dataset.tone = tone;
  }

  function saveFeedbackEntries(entries) {
    try {
      window.localStorage.setItem(feedbackStorageKey, JSON.stringify(entries));
    } catch {
      setFeedbackStatus(t("feedback.status.storageUnavailable"), "error");
    }
  }

  function populateFeedbackProvinceOptions() {
    if (!feedbackProvince) {
      return;
    }

    feedbackProvince.innerHTML = [
      `<option value="">${t("common.selectProvince")}</option>`,
      ...provinceCodes.map((provinceCode) => `
        <option value="${provinceCode}">${provinceName(provinceCode)}</option>
      `)
    ].join("");
  }

  function renderImagePreview() {
    if (!imagePreview || !farmImages) {
      return;
    }

    const files = [...farmImages.files];
    if (!files.length) {
      imagePreview.innerHTML = "";
      return;
    }

    imagePreview.innerHTML = files.map((file) => `
      <div class="image-preview-card">
        <div class="image-preview-name">${escapeHtml(file.name)}</div>
        <div class="image-preview-meta">${Math.max(1, Math.round(file.size / 1024))} KB</div>
      </div>
    `).join("");
  }

  function renderFeedbackSubmissionList() {
    if (!feedbackSubmissionList) {
      return;
    }

    const entries = feedbackEntries();
    if (!entries.length) {
      feedbackSubmissionList.innerHTML = `<div class="empty-state">${t("common.noLocalSubmissions")}</div>`;
      return;
    }

    feedbackSubmissionList.innerHTML = entries.map((entry) => `
      <article class="feedback-submission-item">
        <div class="feedback-submission-top">
          <strong>${escapeHtml(entry.contributorName || t("common.anonymousContributor"))}</strong>
          <span>${escapeHtml(entry.provinceCode ? provinceName(entry.provinceCode) : t("common.provinceNotSupplied"))}</span>
        </div>
        <div class="feedback-submission-meta">${escapeHtml(entry.submittedAt)}</div>
        <p class="feedback-submission-copy">${escapeHtml(entry.animalSpecies || entry.propertyDetails || t("common.contributionSavedFallback"))}</p>
        <div class="feedback-submission-tags">
          ${entry.mapsLinks ? `<span class="feedback-tag">${t("feedback.tags.mapsLink")}</span>` : ""}
          ${entry.boundaryNotes ? `<span class="feedback-tag">${t("feedback.tags.boundaryNotes")}</span>` : ""}
          ${entry.farmImageLinks ? `<span class="feedback-tag">${t("feedback.tags.imageLinks")}</span>` : ""}
          ${entry.fileNames.length ? `<span class="feedback-tag">${t("feedback.tags.images", { count: entry.fileNames.length, plural: entry.fileNames.length === 1 ? "" : getLanguage() === "af" ? "e" : "s" })}</span>` : ""}
        </div>
      </article>
    `).join("");
  }

  function handleFeedbackSubmit(event) {
    event.preventDefault();

    const formData = new FormData(feedbackForm);
    const provinceCode = String(formData.get("feedbackProvince") || "").trim();
    const animalSpecies = String(formData.get("animalSpecies") || "").trim();
    const propertyDetails = String(formData.get("propertyDetails") || "").trim();
    const mapsLinks = String(formData.get("mapsLinks") || "").trim();
    const boundaryNotes = String(formData.get("boundaryNotes") || "").trim();
    const farmImageLinks = String(formData.get("farmImageLinks") || "").trim();
    const fileNames = farmImages ? [...farmImages.files].map((file) => file.name) : [];

    const hasContribution = [animalSpecies, propertyDetails, mapsLinks, boundaryNotes, farmImageLinks].some(Boolean) || fileNames.length > 0;

    if (!provinceCode) {
      setFeedbackStatus(t("feedback.status.chooseProvince"), "error");
      return;
    }

    if (!hasContribution) {
      setFeedbackStatus(t("feedback.status.addContribution"), "error");
      return;
    }

    const entry = {
      id: `${Date.now()}`,
      contributorName: String(formData.get("contributorName") || "").trim(),
      contributorContact: String(formData.get("contributorContact") || "").trim(),
      provinceCode,
      provinceName: provinceName(provinceCode),
      animalSpecies,
      propertyDetails,
      mapsLinks,
      boundaryNotes,
      farmImageLinks,
      fileNames,
      submittedAt: new Date().toLocaleString(getLanguage() === "af" ? "af-ZA" : "en-ZA", {
        dateStyle: "medium",
        timeStyle: "short"
      })
    };

    const entries = [entry, ...feedbackEntries()].slice(0, 10);
    saveFeedbackEntries(entries);
    renderFeedbackSubmissionList();
    feedbackForm.reset();
    renderImagePreview();
    setFeedbackStatus(t("feedback.status.saved"), "success");
  }

  function refreshLanguage() {
    applyTranslations(document);
    populateFeedbackProvinceOptions();
    renderFeedbackSubmissionList();
  }

  populateFeedbackProvinceOptions();
  applyTranslations(document);
  renderFeedbackSubmissionList();
  feedbackForm?.addEventListener("submit", handleFeedbackSubmit);
  farmImages?.addEventListener("change", renderImagePreview);
  window.addEventListener("site-language-change", refreshLanguage);
})();