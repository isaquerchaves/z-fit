import { prismaClient } from "@/lib/prisma";

const ItemTraining = async () => {
    const split = await prismaClient.trainingSplit.findMany({
        where: {
            enabled: true,
        }
    });
    // Divisão de treino
    return (
        <div className="grid grid-cols-2 gap-4">

        </div>
    );
}

export default ItemTraining;