import axiosInstance from '../Configs/axios.config';
import ListsApiEnum from '../Enums/lists-api-enum';

export const getListDocumentTypes = () => axiosInstance.get(ListsApiEnum.ListDocumentTypes)
  .then(({ data }) => data).catch(() => ([]));

export const getListCitizen = () => axiosInstance.get(ListsApiEnum.ListCitizen)
  .then(({ data }) => data).catch(() => ([]));
