import { Avatar } from "@/ui/design-system/avatar/avatar";
import { RiCamera2Fill } from "react-icons/ri";

interface Props {
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const UploadAvatar = ({ handleImageSelect }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <label className="inline-block text-white bg-primary hover:bg-primary-400 rounded px-[18px] py-[15px] text-caption2 font-medium cursor-pointer animate">
        <div className="flex items-center gap-2">
          <RiCamera2Fill />
          <span>Choisir un fichier</span>
        </div>
        <input type="file" className="hidden" onChange={handleImageSelect} />
      </label>
      <Avatar size="extra-large" alt="avatar" src="/assets/svg/camera.svg" />
    </div>
  );
};
