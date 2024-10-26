import { SessionStatusTypes } from "@/types/session-status-types";
import { BreadCrumbs } from "../breadcrumbs/bread-crumbs"
import { Container } from "../container/container";
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import { CallsToActionSidebarContribution } from "../calls-to-action/calls-to-action-side-bar-contribution";

interface Props {
  children: React.ReactNode;
  isDisplayBreadCrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatusTypes;
}
export const Layout = ({
  children,
  isDisplayBreadCrumbs = true,
  withSidebar,
  sessionStatus
}: Props) => {
  let view: React.ReactNode = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 space-y-8">
            <UserAccountNavigation />
            <CallsToActionSidebarContribution />
            <CallsToActionSideBarGroup />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }

  return (
    <Session sessionStatus={sessionStatus}>
      <Navigation />

      {isDisplayBreadCrumbs && <BreadCrumbs />}
      {view}
      <Footer />
    </Session>
  );
};