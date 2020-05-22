const setEditorThemeBasedOnTimeOfDay = (sunriseHour, sunsetHour, themes) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const sunriseTheme = themes.sunriseTheme;
    const sunsetTheme = themes.sunsetTheme;

    if (currentHour >= sunriseHour && currentHour < sunsetHour) {
        return sunriseTheme;
    } else {
        return sunsetTheme;
    }
}

export default setEditorThemeBasedOnTimeOfDay;