import { toast } from "react-toastify";
import BaseClient from "../../services/BaseClient";

export const handleFormSubmit = async ({ path, data, modifyData, setLoading, closeModal, afterSubmit, reset }) => {
  setLoading(true);
  if (modifyData) {
    data = modifyData({ data });
  }
  if (!path) {
    toast("Path Not Found");
    setLoading(false);
    return;
  }
  // const result = await BaseClient.post({ path, data });

  setLoading(false);
  if (result) {
    afterSubmit && afterSubmit(result);
    reset && reset();
    closeModal && closeModal();
  }

  return result;
};

export const handleEditFormSubmit = async ({
  item,
  path,
  data,
  modifyData,
  setLoading,
  closeModal,
  afterSubmit,
  reset,
}) => {
  setLoading(true);
  if (modifyData) {
    data = modifyData({ data });
  }
  if (!path) {
    toast("Path Not Found");
    setLoading(false);
    return;
  }
  path = `${path}/${item?._id}`;
  const result = await BaseClient.patch({ path, data });

  setLoading(false);
  if (result) {
    afterSubmit && afterSubmit(result);
    reset && reset();
    closeModal && closeModal();
  }

  return result;
};
