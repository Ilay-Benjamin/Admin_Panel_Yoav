import { readFile } from 'fs/promises';
import path from 'path';

// קריאת קובץ ה-JSON
const globalConfigPath = path.resolve('config/global/global.config.json');
const globalConfig = JSON.parse(await readFile(globalConfigPath, 'utf-8'));

// ייצוא תצורת Firebase
export const firebaseConfig = globalConfig.data.landingPageProject.firebase.configuration;
export const firebaseCollections = globalConfig.data.landingPageProject.firebase.collections;
