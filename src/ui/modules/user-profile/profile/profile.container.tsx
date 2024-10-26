import { useAuth } from "@/context/AuthUserContext";
import { ProfileView } from "./profile.view";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserProfileFormFieldsType } from "@/types/forms";

export const ProfileContainer = () => {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError
  } = useForm<UserProfileFormFieldsType>();
  const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (
    formData
  ) => {};

  return (
    <>
      <ProfileView />
    </>
  );
};
