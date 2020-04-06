import { wrapRootElement as wrap } from './root-wrapper';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import CMS from 'netlify-cms-app';

CMS.registerPreviewStyle('./src/components/css/Admin-Preview.css');

export const wrapRootElement = wrap;
