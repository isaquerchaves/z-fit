import { Dumbbell, Home, Settings, User } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-8 py-4 flex flex-row justify-around items-center">
            <Link href='/' >
                <button className="flex flex-col items-center">
                    <Home/>
                    <p className="pt-1 text-xs">Home</p>
                </button>
            </Link>
            <Link href='/' >
                <button className="flex flex-col items-center">
                    <Dumbbell />
                    <p className="pt-1 text-xs">Treinos</p>
                </button>
            </Link>
            <Link href='/' >
                <button className="flex flex-col items-center">
                    <User />
                    <p className="pt-1 text-xs">Usuário</p>
                </button>
            </Link>
            <Link href='/' >
                <button className="flex flex-col items-center">
                    <Settings />
                    <p className="pt-1 text-xs">Configurações</p>
                </button>
            </Link>
        </div>
    );
}

export default Footer;