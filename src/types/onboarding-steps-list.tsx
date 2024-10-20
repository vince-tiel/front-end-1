export interface BaseComponentProps {
    next: () => void;
    prev: () => void;
    isFirstStep:() => boolean;
    isFinalStep:() => boolean;
    stepList: OnboardingStepsListInterface[];
    getCurrentStep: ()=>OnboardingStepsListInterface | undefined;
}

export interface OnboardingStepsListInterface {
    id: number;
    label: string;
    component: {
        step: React.ComponentType<BaseComponentProps>
    }
}