import toast from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { catalogData } from '../apis';

export const getCatalogPageData = async (categoryId) => {
  let result = [];
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      catalogData.CATALOGPAGEDATA_API,
      { categoryId: categoryId }
    );
    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }
    console.log("CATALOGPAGEDATA_APIRESPONSE ====>", response?.data?.data);
    result = response?.data?.data;
  } catch (error) {
    console.log("CATALOGPAGEDATA_API ERROR ---", error);
    // toast.error(error.message);
    result = error?.response?.message;
  }
  toast.dismiss(toastId);
  return result;
};

