import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

export default function Photos() {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      images: [],
    },
  });

  const images = watch("images");

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(
      (file) =>
        file.type.startsWith("image/") &&
        file.size <= 10 * 1024 * 1024
    );

    setValue("images", [...images, ...validFiles], {
      shouldValidate: true,
    });
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setValue("images", updated, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log("Submitted images:", data.images);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl">
     
      <h1 className="text-brandDark font-head text-3xl font-semibold mb-7">Property Photos</h1>

      <Controller
        name="images"
        control={control}
        rules={{
          required: "At least one image is required",
          validate: (files) =>
            files.every(
              (file) =>
                file.type.startsWith("image/") &&
                file.size <= 10 * 1024 * 1024
            ) || "Invalid file detected",
        }}
        render={() => (
          <>
            {/* Dropzone */}
            <div
              onDrop={(e) => {
                e.preventDefault();
                handleFiles(e.dataTransfer.files);
              }}
              onDragOver={(e) => e.preventDefault()}
              className={`border-2 border-dashed rounded-xl p-12 text-center bg-brandLight transition
                ${
                  errors.images
                    ? "border-red-500"
                    : "border-gray-300 hover:border-brandGreen"
                }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-12 h-12 text-black" />
                <p className="text-xl font-medium font-para">
                  Drag and drop your images here
                </p>
                <p className="text-sm text-gray-500 font-para">
                  PNG, JPG, WEBP up to 10MB each
                </p>

                <label>
                  <input
                    type="file"
                    multiple
                    accept="image/png,image/jpeg,image/webp"
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                  <button className="mt-4 bg-brandGreen text-brandLight px-5 py-2.5 rounded-lg font-para">
                    Select Files
                  </button>
                </label>
              </div>
            </div>

            {errors.images && (
              <p className="mt-2 text-sm text-red-500">
                {errors.images.message}
              </p>
            )}
          </>
        )}
      />

      
      {images.length > 0 && (
        <>
          <p className="mt-6 mb-3 font-medium">Selected Images*</p>

          <div className="flex flex-wrap gap-4">
            {images.map((file, index) => (
              <div
                key={index}
                className="relative w-28 h-28 rounded-lg overflow-hidden border"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-violet-600 text-white rounded-full p-1 hover:bg-brandGreen"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </form>
  );
}

