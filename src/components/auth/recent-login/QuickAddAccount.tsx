import FadeDiv from "src/components/common/animated-elements/FadeDiv";
import FButton from "src/components/common/button/FButton";
import IconButton from "src/components/common/icon-button/IconButton";
import { Close } from "src/components/common/icons";
import Input from "src/components/common/input/FCInput";

type Props = {
  toggle();
};
export default function QuickAddAccount({ toggle }: Props) {
  return (
    <>
      <div className="relative w-full mx-auto my-6 lg:w-1/4 md:max-w-3xl">
        <FadeDiv className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none divide-y divide-gray-200 dark:divide-darkGray-light rounded-3xl dark:bg-darkGray focus:outline-none">
          <IconButton onClick={toggle}>
            <Close />
          </IconButton>
          <div className="px-4 py-6 text-center border-b">
            <h1 role="heading" className="text-2xl font-bold">
              Log into Facebook{" "}
            </h1>
          </div>

          <div className="px-4 py-4 border-b">
            <Input
              name="email-field"
              role="textbox"
              type="text"
              placeholder="Email of phone number"
              className="mb-2"
            />
            <Input
              placeholder="Password"
              name="password-field"
              role="textbox"
              type="password"
            />
            <div className="flex items-center pt-4 pb-6">
              {/* Fixme: put the color primary in the checked variant */}
              <input
                role="checkbox"
                type="checkbox"
                className="w-4 h-4 mr-2 border-gray-600  checked:border-gray checked:bg-primary-500"
              />
              <span className="text-gray-500">Remember password</span>
            </div>
            <div className="pb-2">
              <FButton size="sm">Log in</FButton>
            </div>
            <FButton size="sm" type="text">
              Forgot your password
            </FButton>
          </div>
        </FadeDiv>
      </div>
    </>
  );
}
