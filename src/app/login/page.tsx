import { HandMetal, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col gap-3 py-2">
                <div className="flex flex-row items-center gap-2">
                    <p className="text-2xl">Bem vindo de volta!</p>
                    <HandMetal color="#0B46C7" />
                </div>
                <p className="text-sm opacity-70">Faça login para montar ou acessar seus treinos personalizados e acompanhar ser progresso</p>
            </div>
            <div>
                <div>
                    <div className="pt-4">
                        <p className="pb-2 ">Email</p>
                        <Input className="bg-[#15171CF2]" type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="pt-4">
                        <p className="pb-2 ">Senha</p>
                        <Input className="bg-[#15171CF2]" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-between">
                        <button>
                            <p className="pt-4 text-xs">Esqueceu a senha ?</p>
                        </button>
                        <Link href='/register'>
                        <p className="pt-4 text-xs">Não tem uma conta? Cadastre-se</p>
                        </Link>
                    </div>
                    <div className="pt-4">
                        <button className="bg-[#0B46C7] p-4 w-full rounded-full">
                        <p className="text-sm">Entrar</p>
                </button>
                    </div>
                </div>

            </div>
            <div className="flex flex-row justify-center items-center gap-4 py-4">
                <Separator />
                <p className="text-sm">ou</p>
                <Separator />
            </div>
            <div>
                <button className="bg-[#15171CF2] p-4 w-full rounded-full">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Image 
                            src="/google.png"
                            alt="google"
                            width={20}
                            height={20}
                        />
                        <p className="text-sm">Continue com o Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Login;