import axiosInstance from '../../axiosConfig';

const apiService = async ({ payload, meta }) => {
  const { url, method } = meta;
  try {
    const response = await axiosInstance({ method, url, data: payload });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default apiService;
