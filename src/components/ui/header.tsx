import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center p-8">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/z-fit-logo.png'
                        alt='Z-Fit'
                        width={25}
                        height={0}
                        className="h-full"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#181A20]">
                    <SheetHeader className="text-left text-lg font-semibold">
                        <SheetTitle>Titulo</SheetTitle>
                        <SheetDescription>
                            Em breve
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Image
                src='/z-fit.webp'
                alt='Z-Fit'
                width={80}
                height={0}
                className="h-full"
            />
            <div></div>
        </div>
    );
}

export default Header;