import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import Link from "next/link";

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
                        <SheetTitle>Z-Fit</SheetTitle>
                        <SheetDescription>
                            <SheetClose asChild>
                                <Link href={'/muscles'}>
                                    Músculos
                                </Link>
                            </SheetClose>
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