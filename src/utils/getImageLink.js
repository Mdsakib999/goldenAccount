import axios from "axios";

const cloudinaryUpload = async (imageFile) => {
  //   const imageFile = image[0];
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", `${import.meta.env.VITE_PERSENTS}`); // Replace with your Cloudinary upload preset

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUD_NAME
    }/image/upload`,
    formData
  );

  return response.data;
};

export { cloudinaryUpload };
