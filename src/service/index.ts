import api from "./api";
import request from "./request";

export default {
  loginCode: (params: any) => request.post({ url: api.loginCode, params }),
};
