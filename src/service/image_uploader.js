class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pp6uavko");
    const result = await fetch("https://api.cloudinary.com/v1_1/dyon4mwx5/upload", {
      method: "post",
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;
