"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Login from "@/components/ui/login";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Lock, LogOutIcon, Save } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const User = () => {
    const { data } = useSession();

    const handleLogoutClick = async () => {
        await signOut()
    };
    return (
        <>
            {data ?
                <div className="flex flex-col justify-between p-4 h-full">
                    <div>
                        <div className="flex justify-center">
                            <Avatar>
                                <AvatarFallback>{data?.user?.name}</AvatarFallback>
                                {data.user?.image && <AvatarImage src={data.user?.image} />}
                            </Avatar>
                        </div>

                        <div className="pt-4">
                            <p className="pb-2 ">Nome</p>
                            <div className="flex flex-row justify-between bg-[#15171CF2] w-full h-10 rounded-md border border-input px-3 py-2 text-sm items-center">
                                <p>{data.user?.name}</p>
                                <Lock size={15} />
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="pb-2 ">E-mail</p>
                            <div className="flex flex-row justify-between bg-[#15171CF2] w-full h-10 rounded-md border border-input px-3 py-2 text-sm items-center">
                                <p>{data.user?.email}</p>
                                <Lock size={15} />
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="pb-2 ">Telefone</p>
                            <Input className="bg-[#15171CF2] text-white" type="text" id="phone" placeholder="Insira seu número de telefone" />
                        </div>
                        <div className="pt-4">
                            <p className="pb-2 ">Gênero</p>
                            <Select >
                                <SelectTrigger className="w-full bg-[#15171CF2]">
                                    <SelectValue placeholder="Selecione seu gênero" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="masculino">Masculino</SelectItem>
                                        <SelectItem value="feminino">Feminino</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-col gap-4">
                        <button className="flex justify-center gap-4 bg-[#0B46C7] p-3 w-full rounded-full">
                            <Save size={20}/>
                            <p className="text-sm">Salvar</p>
                        </button>
                        <button onClick={handleLogoutClick} className="flex justify-center gap-4 bg-red-500 p-3 w-full rounded-full">
                            <LogOutIcon size={20}/>
                            <p className="text-sm">Sair</p>
                        </button>
                    </div>
                </div>
                : <Login />
            }
        </>
    );
}

export default User;