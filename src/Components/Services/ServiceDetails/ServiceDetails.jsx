import { Button, Image } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
    const passDetails = useLocation();
    const data = passDetails.state?.data

    const {title, image, detailed_description, ticket_price} = data;
    
    return (
        <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-128px)] grid gap-5 pb-14 px-4 ">
            <div className="md:pt-8 pt-4">
                <Image src={image} />
            </div>
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <div>
                <p>{detailed_description}</p>
            </div>
            <div><Button className="bg-neutral-700 rounded-lg text-white">Apply  ${ticket_price}</Button></div>
        </div>
    );
};

export default ServiceDetails;