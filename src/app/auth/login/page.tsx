import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";

import { getSession } from "@/lib/session";
import LoginButton from "@/ui/LoginButton";

type LoginPageProps = {
  searchParams?: {
    callbackUrl: string;
  };
};

const LoginPage = async ({ searchParams }: LoginPageProps) => {
  const session = await getSession();
  const providers = await getProviders();

  if (session) {
    redirect(searchParams.callbackUrl ?? "/");
  }

  return (
    <div className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center gap-12">
      <h1 className="text-[32px] font-bold">
        Log in to Khanh Le&apos;s Portfolio
      </h1>
      <div className="flex w-full max-w-xs flex-col gap-3">
        {Object.values(providers).map((provider) => (
          <LoginButton key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
