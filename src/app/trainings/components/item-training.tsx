import { prismaClient } from "@/lib/prisma";

const ItemTraining = async () => {
    const split = await prismaClient.trainingSplit.findMany({
        where: {
            enabled: true,
        }
    });
    return ( 
        <div className="grid grid-cols-2 gap-4">
            {split.map(
                (split) => (
                    <div>
                        <p key={split.id}>{split.name}</p>
                    </div>
                )
            )}
        </div>
     );
}
 
export default ItemTraining;