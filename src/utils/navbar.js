import useId from "../hooks/useId";
import NextStepPage from "../pages/NextStep";
import MainPage from "../pages/Main"
import StoryHomePage from "../pages/StoryHome";
import SuccessHomePage from "../pages/SuccessHome";
import PricingHomePage from "../pages/PricingHome";
import ExtendPage from "../pages/Extend";
import FeaturesPage from "../pages/Features";
import PaymentFormPage from "../pages/Payment_Form";
import Step1Page from "../pages/Form_Step_1";
import Step2Page from "../pages/Form_Step_2";
import Step3Page from "../pages/Form_Step_3";
import Step4Page from "../pages/Form_Step_4";
import Step5Page from "../pages/Form_Step_5";
import VideoPagePage from "../pages/VideoPage";
export const navbar = [
  {
    id: useId, 
    element: <MainPage/>, 
    title: 'Main', 
    path:'/main', 
    private: false, 
    hidden: false
  },

  {
    id: useId,
    element: <NextStepPage/>,
    path: '/next-step',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <ExtendPage/>,
    path: '/extend',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <StoryHomePage/>,
    path: '/story-home',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <SuccessHomePage/>,
    path: '/success-home',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <PricingHomePage/>,
    path: '/pricing-home',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <VideoPagePage/>,
    path: '/video-page',
    private: false,
    hidden: true
  },


  {
    id: useId,
    element: <PaymentFormPage/>,
    path: '/payment-form',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <FeaturesPage/>,
    path: '/features',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <Step1Page/>,
    path: '/form/step-1',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <Step2Page/>,
    path: '/form/step-2',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <Step3Page/>,
    path: '/form/step-3',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <Step4Page/>,
    path: '/form/step-4',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <Step5Page/>,
    path: '/form/step-5',
    private: false,
    hidden: true
  },

];