import LoginCard from "components/auth/login-card/LoginCard";
import WelcomeSection from "components/auth/welcome/WelcomeSection";
import Navbar from "components/layout/navbar/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="mx-auto sm:px-14 sm:pt-12 xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <div className="order-2 max-w-lg lg:order-1">
            <WelcomeSection />
          </div>
          <LoginCard />
        </div>
      </div>
    </>
  );
}
