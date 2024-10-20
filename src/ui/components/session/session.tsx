import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";
import { useRouter } from "next/router";


interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes;
}
export const Session = ({ children,sessionStatus }: Props) => {
    const router = useRouter();
    const { authUserIsLoading, authUser } = useAuth();
    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted

    const shouldRedirectToOnBoarding = () => {
        return (
            !authUserIsLoading && authUser && !onboardingIsCompleted && router.asPath !== "/onboarding"
        );
    };
    const shouldNotRedirectToOnBoarding = () => {
        return (
            !authUserIsLoading && authUser && onboardingIsCompleted && router.asPath === "/onboarding"
        );
    };

    if (shouldRedirectToOnBoarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />;
    }
    if (shouldNotRedirectToOnBoarding()) {
        router.push("/mon-espace");
        return <ScreenSpinner />;
    }

     if (sessionStatus === GUEST  && !authUserIsLoading) {
        if (!authUser) {
            return <>{children}</>;
        }
        else {
            router.push("/mon-espace");
        }
    }
    
    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>;
        }
        else {
            router.push("/connexion");
        }
    }
    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    }
    return <ScreenSpinner />;

    
}