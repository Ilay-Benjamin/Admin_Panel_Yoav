import appConfigJSON from './app.config.json';

export const appConfig = JSON.parse(JSON.stringify(appConfigJSON));

// הגדרת משתני הסביבה
process.env.APP_NAME = appConfig.name;
process.env.APP_VERSION = appConfig.version;
process.env.APP_PORT = appConfig.port;


// ייצוא הנתונים לשימוש בפרויקט
export const appDetails = appConfig.app.details;
export const appData = appConfig.app.data;
export const credits = appConfig.description.credits;
export const appPort = appConfig.port;

export const appPages = {
    pages: appConfig.app.details.pages,
    routes: () => {
        var routesList = [];
        appConfig.app.details.pages.forEach(page => {
            if (!routesList.includes(page.route)) {
                routesList.push(page.route);
            }
        });
        return routesList;
    },
    getRoutesList: () => {
        var routesMap = {};
        appConfig.app.details.pages.forEach(page => {
            if (!appConfig.app.details.pages.includes(page.route)) {
                routesMap[page.route] = Array.from([]).push(page);
            } else {
                routesMap[page.route].push(page);
            }
        })
        return routesMap
    },
    getRoute: (route) => {
        var routeMap = {};
        routeMap[route] = [];
        appConfig.app.details.pages.forEach(page => {
            if (page.route === route) {
                routeMap[route].push(page);
            }
        });
        return routeMap;
    },
    getPagesList: (route) => {
        return appConfig.app.details.pages.filter(page => page.route === route);
    },
    getPage: (route, pageName) => {
        return appConfig.app.details.pages.find(page => page.route === route && page.name === pageName);
    }
}