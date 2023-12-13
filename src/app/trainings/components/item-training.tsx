import { prismaClient } from "@/lib/prisma";

const ItemTraining = async () => {
    const split = await prismaClient.trainingSplit.findMany({
        where: {
            enabled: true,
        }
    });
    return ( 
        <div>
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