import { useAuth } from "@/context/AuthUserContext"
import { Avatar } from "@/ui/modules/onboarding/components/steps/avatar-step/avatar-step";
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () => {
    const { authUser } = useAuth();

    const { photoURL, displayName } = authUser;
    return (
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src={photoURL} alt={displayName ? `avatar de ${displayName}`  :"avatar"} size="large" />
            <div className="max-w-[160px]">
                <Typography variant="caption2" weight="medium" className="truncate">
                    {displayName ? displayName : "Bienvenue"}
                </Typography>
                <Typography variant="caption4" weight="medium" theme="gray" >
                    mon compte
                </Typography>
            </div>
        </Link>
    )
}