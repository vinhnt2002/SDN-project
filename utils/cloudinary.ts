import cloudinary from "cloudinary";

export const uploadImageToCloudinary = async (
  image: string,
  folder: string,
  width?: number
  ) => {
    try {
      const result = await cloudinary.v2.uploader.upload(image, { width, folder });
      return {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error; 
    }
};

export const deleteImageFromCloudinary = async (public_id: string) => {
  await cloudinary.v2.uploader.destroy(public_id);
};
