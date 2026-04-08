(function () {
  const languageApi = window.SiteI18n;
  const apiBaseUrl = "https://api.stellards.io/v1";
  const projectId = "825c1d34-14ee-44ce-1c88-08de95b8d103";
  const usersTableId = 549;
  const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhY2Nlc3MtdG9rZW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllci10b2tlbiI6IjE1MzY4YTgxLTE0ZGItNDQzYy01N2ViLTA4ZGU5NWJiMGIwNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyLXByb2plY3QiOiI4MjVjMWQzNC0xNGVlLTQ0Y2UtMWM4OC0wOGRlOTViOGQxMDMiLCJleHAiOjI1MzQwMjI5NzIwMCwiaXNzIjoiaHR0cHM6Ly9zdGVsbGFyZHMuaW8iLCJhdWQiOiJodHRwczovL2FwaS5zdGVsbGFyZHMuaW8ifQ.YrqjsPt1_eWNXiMFCco8Si1NBNxEWdDaVB1c8iNiZMc";
  const authStorageKey = "south-african-livestock-atlas-auth-session";
  const authEventName = "site-auth-change";
  const minPasswordLength = 7;
  let authMenuListenersBound = false;

  const copy = {
    en: {
      nav: {
        home: "Atlas",
        feedback: "Feedback",
        login: "Log in",
        signup: "Sign up",
        profile: "Profile",
        logout: "Log out"
      },
      header: {
        appLabel: "Livestock Atlas",
        signedInAs: "Signed in",
        guestCta: "Join the atlas community"
      },
      auth: {
        loginTitle: "Log in to your livestock atlas account",
        loginCopy: "Use your email and password to sign in, manage your profile, and keep your details up to date.",
        signupTitle: "Create your account",
        signupCopy: "Add your personal details so your profile and future farm submissions are tied to your account.",
        profileTitle: "Your profile",
        profileCopy: "Update the details shown in the header and keep your account information current.",
        email: "Email address",
        password: "Password",
        confirmPassword: "Confirm password",
        firstName: "First name",
        lastName: "Last name",
        mobileNumber: "Mobile number",
        profilePicture: "Profile picture URL",
        profilePictureHint: "Paste an image URL, or leave it blank to use initials.",
        saveProfile: "Save profile",
        createAccount: "Create account",
        signIn: "Sign in",
        newPassword: "New password",
        currentStatus: "Account status",
        currentRole: "Role",
        roleUser: "User",
        roleDeveloper: "Developer",
        optional: "Optional",
        alreadyHaveAccount: "Already have an account?",
        noAccountYet: "Need an account?",
        saved: "Your profile has been updated.",
        signupSuccess: "Your account has been created and you are now signed in.",
        loginSuccess: "Signed in successfully.",
        logoutSuccess: "You have been logged out.",
        duplicateEmail: "An account with this email already exists.",
        invalidLogin: "Incorrect email or password.",
        passwordMismatch: "Passwords do not match.",
        passwordLength: "Use at least 7 characters for your password.",
        requiredFields: "Complete all required fields before continuing.",
        authRequired: "Please log in to view your profile.",
        unexpectedError: "Something went wrong while talking to Stellards. Please try again.",
        profileIntro: "Header preview",
        profileFallback: "No profile picture set",
        developerTitle: "Developer console",
        developerCopy: "Review every account in the system, inspect role assignments, and update user details directly from Stellards.",
        developerUsers: "System users",
        developerEmpty: "No users found yet.",
        developerRefresh: "Refresh users",
        developerEdit: "Edit",
        developerEditTitle: "Edit selected user",
        developerSaveUser: "Save user",
        developerNewPassword: "Reset password",
        developerSelectedUser: "Selected user",
        developerStatus: "Status",
        developerRole: "Role",
        developerSaved: "User updated successfully.",
        developerAccessDenied: "Only developer accounts can access this section.",
        developerNoSelection: "Select a user from the table to edit them.",
        developerTableName: "Name",
        developerTableEmail: "Email",
        developerTableRole: "Role",
        developerTableStatus: "Status",
        developerTableActions: "Actions"
      }
    },
    af: {
      nav: {
        home: "Atlas",
        feedback: "Terugvoer",
        login: "Meld aan",
        signup: "Registreer",
        profile: "Profiel",
        logout: "Meld af"
      },
      header: {
        appLabel: "Lewendehawe-atlas",
        signedInAs: "Aangemeld",
        guestCta: "Sluit by die atlas-gemeenskap aan"
      },
      auth: {
        loginTitle: "Meld aan by jou lewendehawe-atlas rekening",
        loginCopy: "Gebruik jou e-posadres en wagwoord om aan te meld, jou profiel te bestuur en jou besonderhede op datum te hou.",
        signupTitle: "Skep jou rekening",
        signupCopy: "Voeg jou persoonlike besonderhede by sodat jou profiel en toekomstige plaasinskrywings aan jou rekening gekoppel is.",
        profileTitle: "Jou profiel",
        profileCopy: "Werk die besonderhede op wat in die kopbalk gewys word en hou jou rekeninginligting op datum.",
        email: "E-posadres",
        password: "Wagwoord",
        confirmPassword: "Bevestig wagwoord",
        firstName: "Voornaam",
        lastName: "Van",
        mobileNumber: "Selfoonnommer",
        profilePicture: "Profielprent-URL",
        profilePictureHint: "Plak 'n beeld-URL, of laat dit leeg om voorletters te gebruik.",
        saveProfile: "Stoor profiel",
        createAccount: "Skep rekening",
        signIn: "Meld aan",
        newPassword: "Nuwe wagwoord",
        currentStatus: "Rekeningstatus",
        currentRole: "Rol",
        roleUser: "Gebruiker",
        roleDeveloper: "Ontwikkelaar",
        optional: "Opsioneel",
        alreadyHaveAccount: "Het jy reeds 'n rekening?",
        noAccountYet: "Het jy 'n rekening nodig?",
        saved: "Jou profiel is opgedateer.",
        signupSuccess: "Jou rekening is geskep en jy is nou aangemeld.",
        loginSuccess: "Suksesvol aangemeld.",
        logoutSuccess: "Jy is afgemeld.",
        duplicateEmail: "'n Rekening met hierdie e-posadres bestaan reeds.",
        invalidLogin: "Verkeerde e-posadres of wagwoord.",
        passwordMismatch: "Wagwoorde stem nie ooreen nie.",
        passwordLength: "Gebruik minstens 7 karakters vir jou wagwoord.",
        requiredFields: "Voltooi alle verpligte velde voordat jy voortgaan.",
        authRequired: "Meld asseblief aan om jou profiel te sien.",
        unexpectedError: "Iets het verkeerd geloop terwyl Stellards gekontak is. Probeer asseblief weer.",
        profileIntro: "Kopbalk-voorskou",
        profileFallback: "Geen profielprent gestel nie",
        developerTitle: "Ontwikkelaar-konsole",
        developerCopy: "Hersien elke rekening in die stelsel, inspekteer roltoekennings, en werk gebruikersbesonderhede direk vanaf Stellards by.",
        developerUsers: "Stelselgebruikers",
        developerEmpty: "Geen gebruikers is nog gevind nie.",
        developerRefresh: "Herlaai gebruikers",
        developerEdit: "Wysig",
        developerEditTitle: "Wysig gekose gebruiker",
        developerSaveUser: "Stoor gebruiker",
        developerNewPassword: "Stel wagwoord terug",
        developerSelectedUser: "Gekose gebruiker",
        developerStatus: "Status",
        developerRole: "Rol",
        developerSaved: "Gebruiker suksesvol opgedateer.",
        developerAccessDenied: "Slegs ontwikkelaar-rekeninge het toegang tot hierdie afdeling.",
        developerNoSelection: "Kies 'n gebruiker uit die tabel om hom of haar te wysig.",
        developerTableName: "Naam",
        developerTableEmail: "E-pos",
        developerTableRole: "Rol",
        developerTableStatus: "Status",
        developerTableActions: "Aksies"
      }
    }
  };

  function language() {
    return languageApi?.getLanguage?.() === "af" ? "af" : "en";
  }

  function tr(key) {
    const scoped = key.split(".").reduce((result, part) => result?.[part], copy[language()]);
    return typeof scoped === "string" ? scoped : key;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function isDeveloper(user = currentUser()) {
    return String(user?.role || "").toLowerCase() === "developer";
  }

  function roleLabel(role) {
    return String(role || "").toLowerCase() === "developer" ? tr("auth.roleDeveloper") : tr("auth.roleUser");
  }

  function initials(user) {
    const first = String(user?.first_name || "").trim().charAt(0);
    const last = String(user?.last_name || "").trim().charAt(0);
    const joined = `${first}${last}`.trim();
    return joined ? joined.toUpperCase() : "SA";
  }

  function avatarMarkup(user, extraClass = "") {
    const className = ["auth-avatar", extraClass].filter(Boolean).join(" ");
    const picture = String(user?.profile_picture || "").trim();
    if (picture) {
      return `<img class="${className}" src="${escapeHtml(picture)}" alt="${escapeHtml(`${user.first_name || ""} ${user.last_name || ""}`.trim() || tr("nav.profile"))}" />`;
    }

    return `<span class="${className} auth-avatar-fallback" aria-hidden="true">${escapeHtml(initials(user))}</span>`;
  }

  function session() {
    try {
      const stored = window.localStorage.getItem(authStorageKey);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  function currentUser() {
    return session()?.user ?? null;
  }

  function closeActiveMenu() {
    const button = document.querySelector("[data-auth-menu-button]");
    const panel = document.querySelector("[data-auth-menu-panel]");
    if (!button || !panel) {
      return;
    }

    panel.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }

  function ensureMenuListeners() {
    if (authMenuListenersBound) {
      return;
    }

    document.addEventListener("click", (event) => {
      const menu = document.querySelector("[data-auth-menu]");
      if (menu && !menu.contains(event.target)) {
        closeActiveMenu();
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeActiveMenu();
      }
    });

    authMenuListenersBound = true;
  }

  function setSession(user) {
    const payload = {
      user,
      signedInAt: new Date().toISOString()
    };

    window.localStorage.setItem(authStorageKey, JSON.stringify(payload));
    window.dispatchEvent(new CustomEvent(authEventName, { detail: payload }));
  }

  function clearSession(message) {
    window.localStorage.removeItem(authStorageKey);
    window.dispatchEvent(new CustomEvent(authEventName, { detail: { user: null, message } }));
  }

  async function request(path, options = {}) {
    const response = await fetch(`${apiBaseUrl}${path}`, {
      ...options,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(options.headers || {})
      }
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.isSuccess === false) {
      const message = result?.messages?.map((entry) => entry.message || entry).filter(Boolean).join(" ") || tr("auth.unexpectedError");
      throw new Error(message);
    }

    return result;
  }

  async function queryUsers(whereQuery) {
    const params = new URLSearchParams({
      project: projectId,
      table: String(usersTableId)
    });

    if (whereQuery) {
      params.set("wherequery", whereQuery);
    }

    const result = await request(`/data/table?${params.toString()}`);
    return Array.isArray(result.data) ? result.data : [];
  }

  async function createUserRecord(record) {
    const result = await request(`/data/table?project=${encodeURIComponent(projectId)}&table=${usersTableId}`, {
      method: "POST",
      body: JSON.stringify({ records: [record] })
    });

    return result.data?.[0] ?? null;
  }

  async function updateUserRecord(id, record) {
    const result = await request(`/data/table?project=${encodeURIComponent(projectId)}&table=${usersTableId}`, {
      method: "PUT",
      body: JSON.stringify({
        idList: [id],
        record
      })
    });

    return result.data?.[0] ?? null;
  }

  async function listUsers() {
    return queryUsers();
  }

  async function digestPassword(password, salt) {
    const encoder = new TextEncoder();
    const buffer = encoder.encode(`${salt}:${password}`);
    const hash = await window.crypto.subtle.digest("SHA-256", buffer);
    return [...new Uint8Array(hash)].map((value) => value.toString(16).padStart(2, "0")).join("");
  }

  function generateSalt() {
    const values = new Uint8Array(16);
    window.crypto.getRandomValues(values);
    return [...values].map((value) => value.toString(16).padStart(2, "0")).join("");
  }

  function normalizeUser(record) {
    return {
      id: record.id,
      first_name: record.first_name || "",
      last_name: record.last_name || "",
      email: normalizeEmail(record.email),
      mobile_number: record.mobile_number || "",
      role: record.role || "user",
      status: record.status || "active",
      profile_picture: record.profile_picture || "",
      created_by_timestamp: record.created_by_timestamp || ""
    };
  }

  async function findUserByEmail(email) {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) {
      return null;
    }

    const rows = await queryUsers(`email;equal;${normalizedEmail}`);
    return rows.find((entry) => normalizeEmail(entry.email) === normalizedEmail) ?? null;
  }

  async function signUp(payload) {
    const firstName = String(payload.first_name || "").trim();
    const lastName = String(payload.last_name || "").trim();
    const email = normalizeEmail(payload.email);
    const mobileNumber = String(payload.mobile_number || "").trim();
    const password = String(payload.password || "");
    const profilePicture = String(payload.profile_picture || "").trim();

    if (!firstName || !lastName || !email || !password) {
      throw new Error(tr("auth.requiredFields"));
    }

    if (password.length < minPasswordLength) {
      throw new Error(tr("auth.passwordLength"));
    }

    const existing = await findUserByEmail(email);
    if (existing) {
      throw new Error(tr("auth.duplicateEmail"));
    }

    const salt = generateSalt();
    const passwordHash = await digestPassword(password, salt);
    const saved = await createUserRecord({
      first_name: firstName,
      last_name: lastName,
      email,
      mobile_number: mobileNumber,
      password: passwordHash,
      salt,
      role: "user",
      status: "active",
      profile_picture: profilePicture,
      created_by_timestamp: new Date().toISOString()
    });

    const user = normalizeUser(saved || {
      id: null,
      first_name: firstName,
      last_name: lastName,
      email,
      mobile_number: mobileNumber,
      role: "user",
      status: "active",
      profile_picture: profilePicture,
      created_by_timestamp: new Date().toISOString()
    });

    setSession(user);
    return user;
  }

  async function login(email, password) {
    const userRecord = await findUserByEmail(email);
    if (!userRecord) {
      throw new Error(tr("auth.invalidLogin"));
    }

    const passwordHash = await digestPassword(String(password || ""), String(userRecord.salt || ""));
    if (passwordHash !== userRecord.password) {
      throw new Error(tr("auth.invalidLogin"));
    }

    const user = normalizeUser(userRecord);
    setSession(user);
    return user;
  }

  async function updateProfile(payload) {
    const user = currentUser();
    if (!user?.id) {
      throw new Error(tr("auth.authRequired"));
    }

    const firstName = String(payload.first_name || "").trim();
    const lastName = String(payload.last_name || "").trim();
    const mobileNumber = String(payload.mobile_number || "").trim();
    const profilePicture = String(payload.profile_picture || "").trim();
    const nextPassword = String(payload.new_password || "");

    if (!firstName || !lastName) {
      throw new Error(tr("auth.requiredFields"));
    }

    const record = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobileNumber,
      profile_picture: profilePicture
    };

    if (nextPassword) {
      if (nextPassword.length < minPasswordLength) {
        throw new Error(tr("auth.passwordLength"));
      }

      const salt = generateSalt();
      record.salt = salt;
      record.password = await digestPassword(nextPassword, salt);
    }

    const updated = await updateUserRecord(user.id, record);
    const merged = normalizeUser({ ...user, ...updated, ...record });
    setSession(merged);
    return merged;
  }

  async function updateUserByDeveloper(payload) {
    const current = currentUser();
    if (!isDeveloper(current)) {
      throw new Error(tr("auth.developerAccessDenied"));
    }

    const userId = Number(payload.id);
    const firstName = String(payload.first_name || "").trim();
    const lastName = String(payload.last_name || "").trim();
    const email = normalizeEmail(payload.email);
    const mobileNumber = String(payload.mobile_number || "").trim();
    const role = String(payload.role || "user").toLowerCase() === "developer" ? "developer" : "user";
    const status = String(payload.status || "active").trim() || "active";
    const profilePicture = String(payload.profile_picture || "").trim();
    const nextPassword = String(payload.new_password || "");

    if (!userId || !firstName || !lastName || !email) {
      throw new Error(tr("auth.requiredFields"));
    }

    const existing = await findUserByEmail(email);
    if (existing && Number(existing.id) !== userId) {
      throw new Error(tr("auth.duplicateEmail"));
    }

    const record = {
      first_name: firstName,
      last_name: lastName,
      email,
      mobile_number: mobileNumber,
      role,
      status,
      profile_picture: profilePicture
    };

    if (nextPassword) {
      if (nextPassword.length < minPasswordLength) {
        throw new Error(tr("auth.passwordLength"));
      }

      const salt = generateSalt();
      record.salt = salt;
      record.password = await digestPassword(nextPassword, salt);
    }

    const updated = await updateUserRecord(userId, record);
    const normalized = normalizeUser({ ...updated, ...record, id: userId });
    if (Number(current?.id) === userId) {
      setSession(normalized);
    }

    return normalized;
  }

  function statusMessage(container, message, tone = "neutral") {
    if (!container) {
      return;
    }

    container.textContent = message || "";
    container.dataset.tone = tone;
  }

  function pageLink(path, params = {}) {
    const url = new URL(path, window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });
    return `${url.pathname.split("/").pop()}${url.search}`;
  }

  function targetAfterAuth(defaultTarget = "index.html") {
    const requested = new URLSearchParams(window.location.search).get("next");
    if (!requested) {
      return defaultTarget;
    }

    if (requested.includes("://") || requested.startsWith("//")) {
      return defaultTarget;
    }

    return requested;
  }

  function defaultPostLoginTarget(user) {
    return isDeveloper(user) ? "profile.html" : "index.html";
  }

  function renderHeader() {
    const shell = document.querySelector(".page-shell") || document.body;
    if (!shell) {
      return;
    }

    let host = shell.querySelector("[data-site-header]");
    if (!host) {
      host = document.createElement("header");
      host.dataset.siteHeader = "true";
      host.className = "site-auth-header";
      shell.insertBefore(host, shell.firstChild);
    }

    const user = currentUser();
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    host.innerHTML = `
      <div class="site-auth-header-inner">
        <a class="site-auth-brand" href="index.html">
          <span class="site-auth-brand-mark">SA</span>
          <span>
            <strong>South African</strong>
            <small>${escapeHtml(tr("header.appLabel"))}</small>
          </span>
        </a>

        <nav class="site-auth-nav" aria-label="Primary">
          <a class="site-auth-nav-link ${currentPath === "index.html" ? "active" : ""}" href="index.html">${escapeHtml(tr("nav.home"))}</a>
          <a class="site-auth-nav-link ${currentPath === "feedback.html" ? "active" : ""}" href="feedback.html">${escapeHtml(tr("nav.feedback"))}</a>
        </nav>

        <div class="site-auth-tools">
          ${user ? `
            <div class="site-auth-user-menu" data-auth-menu>
              <button type="button" class="site-auth-user-button" data-auth-menu-button aria-expanded="false">
                ${avatarMarkup(user, "site-auth-user-avatar")}
                <span class="site-auth-user-copy">
                  <strong>${escapeHtml(`${user.first_name} ${user.last_name}`.trim())}</strong>
                  <small>${escapeHtml(`${tr("header.signedInAs")} · ${roleLabel(user.role)}`)}</small>
                </span>
              </button>
              <div class="site-auth-dropdown" data-auth-menu-panel hidden>
                <a class="site-auth-dropdown-link" href="profile.html">${escapeHtml(tr("nav.profile"))}</a>
                <button type="button" class="site-auth-dropdown-link site-auth-dropdown-button" data-auth-logout>${escapeHtml(tr("nav.logout"))}</button>
              </div>
            </div>
          ` : `
            <span class="site-auth-guest-copy">${escapeHtml(tr("header.guestCta"))}</span>
            <a class="site-auth-action site-auth-action-secondary" href="${escapeHtml(pageLink("login.html", { next: currentPath }))}">${escapeHtml(tr("nav.login"))}</a>
            <a class="site-auth-action" href="signup.html">${escapeHtml(tr("nav.signup"))}</a>
          `}
        </div>
      </div>
    `;

    const logoutButton = host.querySelector("[data-auth-logout]");
    logoutButton?.addEventListener("click", () => {
      clearSession(tr("auth.logoutSuccess"));
      if (window.location.pathname.endsWith("profile.html")) {
        window.location.href = "index.html";
      }
    });

    const button = host.querySelector("[data-auth-menu-button]");
    const panel = host.querySelector("[data-auth-menu-panel]");

    if (button && panel) {
      ensureMenuListeners();
      button.addEventListener("click", () => {
        const isOpen = !panel.hidden;
        panel.hidden = isOpen;
        button.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });
    }
  }

  function bindLoginForm() {
    const form = document.getElementById("loginForm");
    if (!form) {
      return;
    }

    const status = document.getElementById("loginStatus");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const email = String(formData.get("email") || "").trim();
      const password = String(formData.get("password") || "");

      if (!email || !password) {
        statusMessage(status, tr("auth.requiredFields"), "error");
        return;
      }

      statusMessage(status, "", "neutral");

      try {
        const user = await login(email, password);
        statusMessage(status, tr("auth.loginSuccess"), "success");
        window.location.href = targetAfterAuth(defaultPostLoginTarget(user));
      } catch (error) {
        statusMessage(status, error.message || tr("auth.unexpectedError"), "error");
      }
    });
  }

  function bindSignupForm() {
    const form = document.getElementById("signupForm");
    if (!form) {
      return;
    }

    const status = document.getElementById("signupStatus");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const password = String(formData.get("password") || "");
      const confirmPassword = String(formData.get("confirm_password") || "");

      if (password !== confirmPassword) {
        statusMessage(status, tr("auth.passwordMismatch"), "error");
        return;
      }

      try {
        await signUp({
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          email: formData.get("email"),
          mobile_number: formData.get("mobile_number"),
          password,
          profile_picture: formData.get("profile_picture")
        });
        statusMessage(status, tr("auth.signupSuccess"), "success");
        window.location.href = targetAfterAuth("profile.html");
      } catch (error) {
        statusMessage(status, error.message || tr("auth.unexpectedError"), "error");
      }
    });
  }

  function renderProfileSummary(user) {
    const card = document.getElementById("profileSummaryCard");
    if (!card || !user) {
      return;
    }

    card.innerHTML = `
      <div class="profile-summary-avatar-wrap">
        ${avatarMarkup(user, "profile-summary-avatar")}
      </div>
      <div>
        <p class="panel-kicker mb-1">${escapeHtml(tr("auth.profileIntro"))}</p>
        <h2 class="panel-title mb-2">${escapeHtml(`${user.first_name} ${user.last_name}`.trim())}</h2>
        <div class="profile-summary-meta">${escapeHtml(user.email)}</div>
        <div class="profile-summary-meta">${escapeHtml(tr("auth.currentRole"))}: ${escapeHtml(roleLabel(user.role))}</div>
        <div class="profile-summary-meta">${escapeHtml(tr("auth.currentStatus"))}: ${escapeHtml(user.status || "active")}</div>
      </div>
    `;
  }

  function renderDeveloperUsersTable(users) {
    const body = document.getElementById("developerUsersTableBody");
    if (!body) {
      return;
    }

    if (!users.length) {
      body.innerHTML = `<tr><td colspan="5"><div class="empty-state">${escapeHtml(tr("auth.developerEmpty"))}</div></td></tr>`;
      return;
    }

    body.innerHTML = users.map((user) => `
      <tr>
        <td>
          <div class="developer-user-cell">
            ${avatarMarkup(user, "developer-user-avatar")}
            <div>
              <strong>${escapeHtml(`${user.first_name} ${user.last_name}`.trim())}</strong>
              <div class="developer-user-subtext">#${escapeHtml(user.id)}</div>
            </div>
          </div>
        </td>
        <td>${escapeHtml(user.email)}</td>
        <td><span class="developer-badge">${escapeHtml(roleLabel(user.role))}</span></td>
        <td><span class="developer-badge developer-badge-muted">${escapeHtml(user.status || "active")}</span></td>
        <td><button type="button" class="site-auth-action site-auth-action-secondary developer-edit-button" data-developer-edit="${escapeHtml(user.id)}">${escapeHtml(tr("auth.developerEdit"))}</button></td>
      </tr>
    `).join("");
  }

  function populateDeveloperForm(user) {
    const form = document.getElementById("developerUserForm");
    const title = document.getElementById("developerSelectedUserTitle");
    if (!form || !user) {
      return;
    }

    form.hidden = false;
    title.textContent = `${user.first_name} ${user.last_name}`.trim();
    form.elements.id.value = user.id;
    form.elements.first_name.value = user.first_name || "";
    form.elements.last_name.value = user.last_name || "";
    form.elements.email.value = user.email || "";
    form.elements.mobile_number.value = user.mobile_number || "";
    form.elements.role.value = String(user.role || "user").toLowerCase() === "developer" ? "developer" : "user";
    form.elements.status.value = user.status || "active";
    form.elements.profile_picture.value = user.profile_picture || "";
    form.elements.new_password.value = "";
  }

  async function loadDeveloperUsers(selectUserId = null) {
    const panel = document.getElementById("developerPanel");
    const status = document.getElementById("developerStatus");
    const form = document.getElementById("developerUserForm");
    const emptyState = document.getElementById("developerNoSelection");
    if (!panel) {
      return;
    }

    const user = currentUser();
    if (!isDeveloper(user)) {
      panel.hidden = true;
      return;
    }

    panel.hidden = false;
    statusMessage(status, "", "neutral");

    try {
      const users = (await listUsers()).map(normalizeUser);
      renderDeveloperUsersTable(users);

      const picked = users.find((entry) => String(entry.id) === String(selectUserId)) || users.find((entry) => String(entry.id) === String(form?.elements.id.value || ""));
      if (picked) {
        emptyState.hidden = true;
        populateDeveloperForm(picked);
      } else if (form) {
        form.hidden = true;
        emptyState.hidden = false;
      }
    } catch (error) {
      statusMessage(status, error.message || tr("auth.unexpectedError"), "error");
    }
  }

  function bindDeveloperPanel() {
    const panel = document.getElementById("developerPanel");
    if (!panel) {
      return;
    }

    const refreshButton = document.getElementById("developerRefreshButton");
    const tableBody = document.getElementById("developerUsersTableBody");
    const form = document.getElementById("developerUserForm");
    const status = document.getElementById("developerStatus");
    const emptyState = document.getElementById("developerNoSelection");

    refreshButton?.addEventListener("click", () => {
      loadDeveloperUsers();
    });

    tableBody?.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-developer-edit]");
      if (!button) {
        return;
      }

      emptyState.hidden = true;
      await loadDeveloperUsers(button.dataset.developerEdit);
    });

    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      try {
        const updated = await updateUserByDeveloper({
          id: formData.get("id"),
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          email: formData.get("email"),
          mobile_number: formData.get("mobile_number"),
          role: formData.get("role"),
          status: formData.get("status"),
          profile_picture: formData.get("profile_picture"),
          new_password: formData.get("new_password")
        });
        form.elements.new_password.value = "";
        await loadDeveloperUsers(updated.id);
        statusMessage(status, tr("auth.developerSaved"), "success");
      } catch (error) {
        statusMessage(status, error.message || tr("auth.unexpectedError"), "error");
      }
    });

    loadDeveloperUsers();
  }

  function bindProfileForm() {
    const form = document.getElementById("profileForm");
    if (!form) {
      return;
    }

    const user = currentUser();
    const status = document.getElementById("profileStatus");

    if (!user) {
      statusMessage(status, tr("auth.authRequired"), "error");
      window.location.href = pageLink("login.html", { next: "profile.html" });
      return;
    }

    form.elements.first_name.value = user.first_name || "";
    form.elements.last_name.value = user.last_name || "";
    form.elements.email.value = user.email || "";
    form.elements.mobile_number.value = user.mobile_number || "";
    form.elements.profile_picture.value = user.profile_picture || "";
    renderProfileSummary(user);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const newPassword = String(formData.get("new_password") || "");
      const confirmPassword = String(formData.get("confirm_password") || "");

      if (newPassword && newPassword !== confirmPassword) {
        statusMessage(status, tr("auth.passwordMismatch"), "error");
        return;
      }

      try {
        const updated = await updateProfile({
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          mobile_number: formData.get("mobile_number"),
          profile_picture: formData.get("profile_picture"),
          new_password: newPassword
        });
        form.elements.new_password.value = "";
        form.elements.confirm_password.value = "";
        renderProfileSummary(updated);
        statusMessage(status, tr("auth.saved"), "success");
      } catch (error) {
        statusMessage(status, error.message || tr("auth.unexpectedError"), "error");
      }
    });
  }

  function applyStaticCopy() {
    document.querySelectorAll("[data-auth-copy]").forEach((element) => {
      element.textContent = tr(element.dataset.authCopy);
    });
  }

  function guardGuestPages() {
    const user = currentUser();
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    if (!user && currentPath === "profile.html") {
      window.location.href = pageLink("login.html", { next: "profile.html" });
      return;
    }

    if (user && (currentPath === "login.html" || currentPath === "signup.html")) {
      const next = targetAfterAuth("profile.html");
      if (next !== currentPath) {
        window.location.href = next;
      }
    }
  }

  function init() {
    guardGuestPages();
    renderHeader();
    applyStaticCopy();
    bindLoginForm();
    bindSignupForm();
    bindProfileForm();
    bindDeveloperPanel();
  }

  window.SiteAuth = {
    currentUser,
    login,
    signUp,
    updateProfile,
    updateUserByDeveloper,
    isDeveloper,
    logout: () => clearSession(tr("auth.logoutSuccess")),
    renderHeader,
    tr
  };

  window.addEventListener(authEventName, () => {
    renderHeader();
    applyStaticCopy();
    const user = currentUser();
    if (user) {
      renderProfileSummary(user);
    }
    loadDeveloperUsers();
  });

  window.addEventListener("site-language-change", () => {
    renderHeader();
    applyStaticCopy();
    const user = currentUser();
    if (user) {
      renderProfileSummary(user);
    }
    loadDeveloperUsers();
  });

  init();
})();