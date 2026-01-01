import { useForm } from "react-hook-form";

export default function PasswordForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(() => {})}
      className="max-w-xl space-y-6"
    >
      <h2 className="text-xl font-semibold">Change Password</h2>

      <input
        type="password"
        {...register("currentPassword")}
        className="w-full p-3 rounded-lg bg-gray-100"
        placeholder="Current Password"
      />

      <input
        type="password"
        {...register("newPassword")}
        className="w-full p-3 rounded-lg bg-gray-100"
        placeholder="New Password"
      />

      <input
        type="password"
        {...register("confirmPassword")}
        className="w-full p-3 rounded-lg bg-gray-100"
        placeholder="Confirm Password"
      />

      <button className="w-full bg-orange-500 text-white p-3 rounded-lg">
        Update Password
      </button>
    </form>
  );
}
