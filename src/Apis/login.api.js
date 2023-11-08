import axiosInstance from '../Configs/axios.config';
import LoginApiEnum from '../Enums/login-api-enum';

export const onLoginApi = (loginData) => axiosInstance.post(
  LoginApiEnum.login,
  { ...loginData },
).then(({ data }) => data).catch(() => ({}));

export const onLogoutApi = () => {

};
