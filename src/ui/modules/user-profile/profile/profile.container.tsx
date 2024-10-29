import { useAuth } from "@/context/AuthUserContext";
import { ProfileView } from "./profile.view";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserProfileFormFieldsType } from "@/types/forms";
import { useEffect } from "react";
import { FirestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

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

  const { displayName, expertise, biography, linkedin, github } =
    authUser.userDocument;
  useEffect(() => {
    const fieldsToUpdate: (
      | "displayName"
      | "expertise"
      | "biography"
      | "linkedin"
      | "github"
    )[] = ["displayName", "expertise", "biography", "linkedin", "github"];
    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleUpdateUserDocument = async (
    formData: UserProfileFormFieldsType
  ) => {
    setLoading(true);

    const { error } = await FirestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );

    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Ton profil a été mis à jour");
    setLoading(false);
  };
  const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (
    formData
  ) => {
    //@todo
    if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
      setError("linkedin", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil linkedin"
      });
      return;
    }
    if (formData.github && !formData.github.includes("github.com/")) {
      setError("github", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil github"
      });
      return;
    }
    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography ||
      linkedin !== formData.linkedin ||
      github !== formData.github
    ) {
      for (const key in formData) {
        if (
          formData.hasOwnProperty(key) &&
          formData[key as keyof UserProfileFormFieldsType] === undefined
        ) {
          delete formData[key as keyof UserProfileFormFieldsType];
        }
      }
      handleUpdateUserDocument(formData);
      return;
    }
  };

  return (
    <>
      <ProfileView
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading
        }}
      />
    </>
  );
};
