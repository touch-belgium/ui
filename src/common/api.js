import ky from "ky";

export default ky.extend({
  prefixUrl: API_URL,
});
