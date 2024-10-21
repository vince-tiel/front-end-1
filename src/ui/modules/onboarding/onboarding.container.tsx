import { useState } from "react";
import { OnboardingView } from "./onboarding.view"
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { OnboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { ProfileStep } from "./components/steps/profile-step/profile-step";
import { AvatarStep } from "./components/steps/avatar-step/avatar-step";

export const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepsList: OnboardingStepsListInterface[] = [
    {
      id: 1,
      label: "Bienvenue",
      component: { step: WelcomeStep }
    },
    {
      id: 2,
      label: "Profile",
      component: { step: ProfileStep }
    },
    {
      id: 3,
      label: "Avatar",
      component: { step: AvatarStep }
    }
  ];

  const getCurrentStep = () => {
    return stepsList.find((el) => el.id === currentStep);
  };

  const next = () => {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = () => {
    if (currentStep === 1) {
      return true;
    }
    return false;
  };
  const isFinalStep = () => {
    if (currentStep === stepsList.length) {
      return true;
    }
    return false;
  };

  return (
    <OnboardingView
      getCurrentStep={getCurrentStep}
      next={next}
      prev={prev}
      isFirstStep={isFirstStep}
      isFinalStep={isFinalStep}
      stepList={stepsList}
    />
  );
};