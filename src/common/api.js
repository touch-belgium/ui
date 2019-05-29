import ky from "ky";
import { API_URL } from './config.js';

export default ky.extend({
  prefixUrl: API_URL,
});
