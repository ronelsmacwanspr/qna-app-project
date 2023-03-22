import { getUser } from "../utils";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";

export const RedirectToLoginScreenIfUserAbsent = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const router = useRouter();
  console.log("here in redirect screen user is", getUser());
  useEffect(() => {
    const user = getUser();
    if (!user && router.isReady) {
      router.push("/userLogin");
    }
  }, [router.isReady]);

  return <div>{children}</div>;
};
