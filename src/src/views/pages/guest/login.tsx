import LoginForm from "~/views/components/authentication/login-form";
import LoadingIndicator from "~/views/components/loading-indicator";
import HxBackLink from "~/views/components/hx-back-link";

export default function Login(): any {
    return (
        <div class="h-screen w-full ">
            <LoadingIndicator />
            <div class={'w-full flex justify-center items-center'}>
                <img src="/LOGOS-VIOLET.png" alt="logo purple" class="w-1/2 absolute top-0 mt-4" />
            </div>
            <div class="mt-24 mx-5 flex flex-col justify-center items-center">
                <HxBackLink method="get" url="/auth/home" target="#home-guest" swap="innerHTML"/>
                <div class="bg-light w-full mt-4">
                    <LoginForm/>
                </div>
{/*                <div
                    class="w-full py-3 flex items-center text-sm font-color-dark before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6 before:border-neutral-600 after:border-neutral-600">
                    ou
                </div>*/}
                <img src="/VIOLETTE_bonjour.png" alt="Violette Bonjour" class="absolute bottom-0 right-0 w-3/4"/>
            </div>
        </div>
    );
}