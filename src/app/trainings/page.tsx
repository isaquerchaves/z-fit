"use client"

import Login from "@/components/ui/login";
import { PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import NoTraining from "./components/no-training";

const Trainings = () => {
    const { data } = useSession();

    return (
        <>
            {data ?
                <NoTraining/>
                : <Login />
            }
        </>
    );
}

export default Trainings;