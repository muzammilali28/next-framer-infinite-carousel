import Image from "next/image";

import image1 from "@/public/image-1.jpg";
import image2 from "@/public/image-2.jpg";

const ImageFitTest = () => {
    return (
        <section className="pt-72 flex gap-x-5">
            <div className="size-[200px] relative">
                <Image src={image1} alt="test-photo-1" className="object-cover absolute inset-0 w-full h-full rounded-2xl" />
            </div>
            <div className="size-[200px] relative">
                <Image src={image2} alt="test-photo-2" fill className="object-cover rounded-2xl" />
            </div>
        </section>
    )
}

export default ImageFitTest
