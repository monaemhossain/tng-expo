import { useLoaderData } from "react-router-dom";

const Gallery = () => {
    const gallery = useLoaderData();
    console.log(gallery);
    return (
        <div className="min-h-[calc(100vh-128px)] max-w-screen-lg mx-auto py-14">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    gallery.map(image => <div key={image.id}>
                        <img src={image.img_src} alt={image.img_alt} className="rounded-lg max-h-[220px]"/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;