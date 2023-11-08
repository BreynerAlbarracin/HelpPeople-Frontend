import axiosInstance from '../Configs/axios.config';
import CitizenApiEnum from '../Enums/citizen-api-enum';
import { formatDateSystem } from '../Tools/Dates/format-dates';

export const getCitizensApi = () => axiosInstance.get(CitizenApiEnum.Citizen)
  .then(({ data }) => (data.map((elem) => ({
    ...elem,
    aspiracionSalarial: elem.aspiracionSalarial.toString(),
    cedula: elem.cedula.toString(),
    fechaNacimiento: formatDateSystem(elem.fechaNacimiento),
  })))).catch(() => ([]));

export const createCitizensApi = (citize) => axiosInstance.post(
  CitizenApiEnum.CreateCitizen,
  {
    ...citize,
    fechaNacimiento: formatDateSystem(citize.fechaNacimiento),
  },
).then(({ data }) => data).catch(() => (false));

export const editCitizensApi = (citizen) => axiosInstance.put(
  CitizenApiEnum.UpdateCitizen,
  {
    ...citizen,
    fechaNacimiento: formatDateSystem(citizen.fechaNacimiento),
  },
).then(({ data }) => data).catch(() => (false));

export const deleteCitizensApi = (citizenId) => axiosInstance.put(
  CitizenApiEnum.DeleteCitizen,
  {
    id: citizenId,
  },
).then(({ data }) => data).catch(() => (false));
