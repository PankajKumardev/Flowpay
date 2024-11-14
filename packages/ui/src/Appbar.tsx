import { Button } from "./button";
import { useRouter } from 'next/navigation'; 

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}


export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  const router = useRouter();
  function handleRedirect() {
    router.push('/');
    console.log('redirecting to home page');
  }
  return (
    <div className="flex justify-between border-b px-4 ">
    <div className="text-[20px] flex flex-col justify-center">
        <div className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={handleRedirect}>
       Flowpay
        </div>
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
