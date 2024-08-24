import appConfigJSON from './app.config.json';
import Home from '../../pages/Home/index.Home';
import ErrorPage from '../../pages/Error/index.Error';
import SettingsPage from '../../pages/other/Settings/index.Settings';
import IssuePage from '../../pages/other/Issue/index.Issue';
import BulletinEditorPage from '../../pages/editors/BulletinEditor/index.BulletinEditor';
import ContactEditorPage from '../../pages/editors/ContactEditor/index.ContactEditor';
import HoursEditorPage from '../../pages/editors/HoursEditor/index.HoursEditor';
import SearhPage from '../../pages/assistance/Search/index.Search';
import HelpPage from '../../pages/assistance/Help/index.Help';
import ContactPage from '../../pages/assistance/Contact/index.Contact';



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

    //  [Page1, Page2, ..., PageN]
    pages: appConfig.app.details.pages,

    //  [RouteName1, RouteName2, ..., RouteNameN]
    routes: () => {
        var routesList = [];
        appConfig.app.details.pages.forEach(page => {
            if (!routesList.includes(page.route)) {
                routesList.push(page.route);
            }
        });
        return routesList;
    },

    //  {
    //      RouteName1: {
    //          Page1: Page1, Page2: Page2, ..., PageN: PageN
    //      },
    //      RouteName2: {
    //          Page1: Page1, Page2: Page2, ..., PageN: PageN
    //      },
    //      ...,
    //      RouteNameN: {
    //          Page1: Page1, Page2: Page2, ..., PageN: PageN
    //      }
    //  }
    pagesMap: () => {
        var pagesMap = {};
        appConfig.app.details.pages.forEach(page => {
            if (!pagesMap[page.route]) {
                pagesMap[page.route] = {};
            }
            pagesMap[page.route][page.name] = page;
        });
        return pagesMap;
    },

    //  {
    //      RouteName1: [
    //          Page1, Page2, ..., PageN
    //      ], 
    //      RouteName2: [
    //          Page1, Page2, ..., PageN
    //      ], 
    //      ..., 
    //      RouteNameN: [
    //          Page1, Page2, ..., PageN
    //      ]
    //  }
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

    // {
    //      RouteName1: [
    //          Page1, Page2, ..., PageN
    //      ]
    //  }
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

    // [Page1, Page2, ..., PageN] (Where Page1.route === route)
    getPagesList: (route) => {
        return appConfig.app.details.pages.filter(page => page.route === route);
    },

    // Page (Where Page.route === route && Page.name === pageName)
    getPage: (route, pageName) => {
        return appConfig.app.details.pages.find(page => page.route === route && page.name === pageName);
    },


    builder: {

        getPageComponent: (route, pageName) => {
            var page = appConfig.app.details.pages.find(page => page.route === route && page.name === pageName);
            var componentPath = page.component;
            if (!componentPath) {
                return null;
            }
            var fixedComponentPath = componentPath.toLowerCase();
            fixedComponentPath = fixedComponentPath.startsWith('/') ? fixedComponentPath.substring(1) : fixedComponentPath;
            var pathComponents = fixedComponentPath.split('/');
            pathComponents.shift();
            fixedComponentPath = pathComponents.join('/');
            fixedComponentPath = fixedComponentPath.replace('.js', '');
            pathComponents = fixedComponentPath.split('.');
            fixedComponentPath = pathComponents[0];
            switch (fixedComponentPath) {
                case "home/index":
                    return Home;
                case "error/index":
                    return ErrorPage;
                case 'other/settings/index':
                    return SettingsPage;
                case 'other/issue/index':
                    return IssuePage;
                case 'editors/bulletineditor/index':
                    return BulletinEditorPage;
                case 'editors/contactEditor/index':
                    return ContactEditorPage;
                case 'editors/hoursEditor/index':
                    return HoursEditorPage;
                case 'assistance/search/index':
                    return SearhPage;
                case 'assistance/help/index':
                    return HelpPage;
                case 'assistance/contact/index':
                    return ContactPage;
                default:
                    return ErrorPage;
            }
        },

        createPageData: (route, name, props) => {
            var newPage = appPages.getPage(route, name);
            var newPageData = {
                name: newPage.name,
                route: newPage.route,
                props: Object.assign(props),
                component: appPages.builder.getPageComponent(newPage.route, newPage.name),
                buildComponent: () => {
                    return <newPageData.component {...props}/>
                }
            }
            return newPageData;
        }
    }
}

