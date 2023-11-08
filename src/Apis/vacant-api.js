import axiosInstance from '../Configs/axios.config';
import VacantApiEnum from '../Enums/vacant-api-enum';

export const getVacanciesApi = () => axiosInstance.get(VacantApiEnum.GetVacant)
  .then(({ data }) => data).catch(() => ([]));

export const assignVacantApi = (assignData) => axiosInstance.post(
  VacantApiEnum.AssignVacant,
  {
    ...assignData,
  },
).then(({ data }) => data).catch(() => (false));
