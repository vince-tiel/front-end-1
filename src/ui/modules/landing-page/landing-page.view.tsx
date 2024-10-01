import { CurrentCourseCtaView } from "@/ui/components/current-course-cta/current-course-cta.view"
import { CodersMonkeysSlackView } from "./components/coders-monkeys-slack/coders-monkeys-slack.view"
import { FeaturedView } from "./components/featured/featured.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"
import { HightLightListView } from "./components/hight-light-list/hight-light-list.view"
import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view"

export const LandingPageView = () => {
    return <>
        <HeroTopView />
        <FeaturedView />
        <CodersMonkeysSlackView />
        <CurrentCourseCtaView />
        <HightLightListView />
        <CallToActionView />
    
    
    </>
};