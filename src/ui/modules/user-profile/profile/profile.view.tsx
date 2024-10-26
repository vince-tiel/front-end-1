import { Typography } from "@/ui/design-system/typography/typography";
import { ProfileForm } from "./profile.form";

export const ProfileView = () => {
  return (
    <div className="space-y-5">
      <Typography variant="h1" component="h1">
        Mon compte
      </Typography>
      <ProfileForm />
    </div>
  );
};
