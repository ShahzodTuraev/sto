import useId from "../hooks/useId";
import NextStepPage from "../pages/NextStep";
import MainPage from "../pages/Main"
import StoryHomePage from "../pages/StoryHome";
import SuccessHomePage from "../pages/SuccessHome";
import PricingHomePage from "../pages/PricingHome";
import ExtendPage from "../pages/Extend";
import FeaturesPage from "../pages/Features";
import PaymentFormPage from "../pages/Payment_Form";
import Step1Page from "../pages/Form";
import FormGeneratePage from "../pages/FormGenerate";
export const navbar = [
  {
    id: useId, 
    element: <MainPage/>, 
    title: 'Main', 
    path:'/', 
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
    path: '/story',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <SuccessHomePage/>,
    path: '/lectures',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <PricingHomePage/>,
    path: '/pricing',
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
    path: '/form',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <FormGeneratePage/>,
    path: '/form-generate',
    private: false,
    hidden: true
  }
];