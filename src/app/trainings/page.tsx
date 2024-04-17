'use client'

import CreateTraining from "./components/create-training";
import Login from "@/components/ui/login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Trainings = async () => {
    // const session = await getServerSession(authOptions);

    // if (!session || !session.user) {
    //     return <Login />;
    // }

    return (
        <>
            <CreateTraining />
        </>
    );
}

export default Trainings;
