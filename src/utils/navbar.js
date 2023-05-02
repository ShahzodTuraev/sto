import useId from "../hooks/useId";
import NextStepPage from "../pages/NextStep";
import MainPage from "../pages/Main"
import StoryHomePage from "../pages/StoryHome";
import SuccessHomePage from "../pages/Lectures";
import PricingHomePage from "../pages/Pricing";
import ExtendPage from "../pages/Extend";
import FeaturesPage from "../pages/Features";
import PaymentFormPage from "../pages/Payment_Form";
import Step1Page from "../pages/Form";
import FormGeneratePage from "../pages/FormGenerate";
import LogInPage from "../pages/LogIn";
export const navbar = [
  {
    id: useId, 
    element: <MainPage/>, 
    title: 'Main', 
    path:'/main/page',
    private: false, 
    hidden: false
  },

  {
    id: useId,
    element: <NextStepPage/>,
    path: '/main/next-step',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <ExtendPage/>,
    path: '/main/extend',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <StoryHomePage/>,
    path: '/main/story',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <SuccessHomePage/>,
    path: '/main/lectures',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <PricingHomePage/>,
    path: '/main/pricing',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <PaymentFormPage/>,
    path: '/main/payment-form',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <FeaturesPage/>,
    path: '/main/features',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <Step1Page/>,
    path: '/main/form',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <FormGeneratePage/>,
    path: '/main/form-generate',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <LogInPage/>,
    path: '/main/login',
    private: false,
    hidden: true
  }
];