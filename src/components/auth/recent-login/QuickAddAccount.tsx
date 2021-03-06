import Image from "next/image";

import FadeDiv from "components/common/animated-elements/FadeDiv";
import FButton from "components/common/button/FButton";
import IconButton from "components/common/icon-button/IconButton";
import { Close } from "components/common/icons";
import Input from "components/common/input/FCInput";

type Props = {
  toggle();
  imageUrl?: string;
};
export default function QuickAddAccount({ toggle, imageUrl }: Props) {
  return (
    <>
      <div className="relative w-full my-6 md:max-w-lg">
        <FadeDiv className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none divide-y divide-gray-200 dark:divide-darkGray-light rounded-3xl dark:bg-darkGray focus:outline-none">
          <IconButton onClick={toggle}>
            <Close />
          </IconButton>

          <div className="items-center justify-center px-4 py-6 text-center border-b">
            {imageUrl ? (
              <>
                <div className="w-full">
                  <Image
                    src={imageUrl}
                    width={250}
                    className="rounded-full"
                    height={250}
                    alt="Profile picture"
                  />
                </div>
                <div className="text-center">
                  <span className="font-semibold text-md">Steve Rogers</span>
                </div>
              </>
            ) : (
              <h1 role="heading" className="text-2xl font-bold">
                Log into Facebook{" "}
              </h1>
            )}
          </div>

          <div className="px-4 py-4 border-b">
            {!imageUrl && (
              <Input
                name="email-field"
                role="textbox"
                type="text"
                placeholder="Email of phone number"
                className="mb-2"
              />
            )}

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

QuickAddAccount.defaultProps = {
  imageUrl: null,
};
