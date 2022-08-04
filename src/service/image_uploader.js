class ImageUploader {
  constructor(uploadPreset, cloudName) {
    this.uploadPreset = uploadPreset;
    this.cloudName = cloudName;
  }
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", this.uploadPreset);
    const result = await fetch(`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`, {
      method: "post",
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;
