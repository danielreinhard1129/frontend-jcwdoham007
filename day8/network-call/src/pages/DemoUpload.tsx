import { useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

function DemoUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    try {
      if (!file) return toast.error("file wajib ada!");

      const formData = new FormData();
      formData.append("file", file);

      const folderName = "images";
      const fileName = Date.now() + Math.floor(Math.random() * 1000);

      await axiosInstance.post(`/files/${folderName}/${fileName}`, formData);

      toast.success("upload image success");

      setFile(null);
    } catch (error) {
      console.log(error);
      toast.error("upload image failed");
    }
  };

  return (
    <div>
      <h1>Demo Upload</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setFile(file);
        }}
      />

      <hr />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default DemoUpload;
