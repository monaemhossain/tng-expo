import { useLoaderData } from "react-router-dom";

const Gallery = () => {
    const gallery = useLoaderData();
    // console.log(gallery);
    return (
        <div className="min-h-[calc(100vh-128px)] max-w-screen-lg mx-auto py-14">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-4"  data-aos="fade-up">
                {
                    gallery.map(image => <div key={image.id}>
                        <img src={image.img_src} alt={image.img_alt} className="rounded-lg  sm:h-[280px] h-auto w-full object-cover"/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;