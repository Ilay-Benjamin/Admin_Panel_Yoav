import globalConfigJSON from './global.config.json';

export const globalConfig = JSON.parse(JSON.stringify(globalConfigJSON));


// ייצוא תצורת Firebase
export const firebaseConfig = globalConfig.data.landingPageProject.firebase.configuration;
export const firebaseCollections = globalConfig.data.landingPageProject.firebase.collections;
