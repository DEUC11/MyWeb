document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const timezoneSelect = document.getElementById("timezone");
    const languageSelect = document.getElementById("language");
    const emailCheckbox = document.getElementById("email-notifications");
    const smsCheckbox = document.getElementById("sms-notifications");
    const saveButton = document.getElementById("saveChangesBtn");

    // Text elements for translation
    const textElements = {
      title: document.getElementById("settings-title"),
      systemSettings: document.getElementById("system-settings-title"),
      timeZone: document.getElementById("timezone-label"),
      language: document.getElementById("language-label"),
      notificationSettings: document.getElementById(
        "notification-settings-title"
      ),
      emailNotifications: document.getElementById(
        "email-notifications-label"
      ),
      smsNotifications: document.getElementById("sms-notifications-label"),
      saveChanges: document.getElementById("saveChangesBtn"),
    };

    // Translations for English and Tagalog
    const translations = {
      en: {
        title: "Admin Settings",
        systemSettings: "System Settings",
        timeZone: "Time Zone",
        language: "Language",
        notificationSettings: "Notification Settings",
        emailNotifications: "Email Notifications",
        smsNotifications: "SMS Notifications",
        saveChanges: "Save Changes",
      },
      tl: {
        title: "Mga Setting ng Admin",
        systemSettings: "Mga Setting ng Sistema",
        timeZone: "Oras ng Rehiyon",
        language: "Wika",
        notificationSettings: "Mga Setting ng Notipikasyon",
        emailNotifications: "Notipikasyon sa Email",
        smsNotifications: "Notipikasyon sa SMS",
        saveChanges: "I-save ang mga Pagbabago",
      },
    };

    // Load saved settings from localStorage (if any)
    function loadSettings() {
      const settings = JSON.parse(localStorage.getItem("adminSettings"));

      if (settings) {
        timezoneSelect.value = settings.timezone || "UTC";
        languageSelect.value = settings.language || "en";
        emailCheckbox.checked = settings.emailNotifications ?? true;
        smsCheckbox.checked = settings.smsNotifications ?? false;

        // Change the language of the page
        updateLanguage(settings.language || "en");
      }
    }

    // Update page content based on the selected language
    function updateLanguage(language) {
      const translation = translations[language];
      if (translation) {
        textElements.title.textContent = translation.title;
        textElements.systemSettings.textContent =
          translation.systemSettings;
        textElements.timeZone.textContent = translation.timeZone;
        textElements.language.textContent = translation.language;
        textElements.notificationSettings.textContent =
          translation.notificationSettings;
        textElements.emailNotifications.textContent =
          translation.emailNotifications;
        textElements.smsNotifications.textContent =
          translation.smsNotifications;
        textElements.saveChanges.textContent = translation.saveChanges;
      }
    }

    // Save settings to localStorage
    function saveSettings() {
      const settings = {
        timezone: timezoneSelect.value,
        language: languageSelect.value,
        emailNotifications: emailCheckbox.checked,
        smsNotifications: smsCheckbox.checked,
      };

      localStorage.setItem("adminSettings", JSON.stringify(settings));

      // Update language based on the selected one
      updateLanguage(languageSelect.value);

      alert("Settings saved!");
    }

    // Event listener for save button
    saveButton.addEventListener("click", function () {
      saveSettings();
    });

    // Event listener for language change
    languageSelect.addEventListener("change", function () {
      updateLanguage(languageSelect.value);
    });

    // Initial load
    loadSettings();
  });