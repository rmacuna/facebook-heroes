import Navbar from "../components/layout/navbar/Navbar";
import WelcomeSection from "../components/auth/welcome/WelcomeSection";
import LoginCard from "../components/auth/login-card/LoginCard";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="sm:px-14 sm:pt-12 mx-auto xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <div className="max-w-lg order-2 lg:order-1">
            <WelcomeSection />
          </div>
          <LoginCard />
        </div>
      </div>
    </>
  );
}
