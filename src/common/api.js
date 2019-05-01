import got from "got";
import { API_URL } from './config.js';

const api = got.extend({
  baseUrl: API_URL,
  responseType: 'json',
});
