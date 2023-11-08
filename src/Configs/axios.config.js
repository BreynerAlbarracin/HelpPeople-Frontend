import axios from 'axios';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7048',
});

let countApis = 0;

axiosInstance.interceptors.request.use((config) => {
  countApis += 1;

  if (countApis > 0) {
    Swal.fire({
      title: 'Por favor espere...',
      allowOutsideClick: false,
    });

    Swal.showLoading();
  }

  return config;
}, () => {
  countApis -= 1;

  if (countApis < 1) {
    Swal.close();
  }
});

axiosInstance.interceptors.response.use((response) => {
  countApis -= 1;

  if (countApis < 1) {
    Swal.close();
  }

  return response;
}, () => {
  countApis -= 1;

  if (countApis < 1) {
    Swal.close();
  }
});

export default axiosInstance;
