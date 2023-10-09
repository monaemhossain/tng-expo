import { Button, Divider } from "@nextui-org/react";

const Newsletter = () => {
    return (
        <div className="max-w-md mx-auto grid px-4 mb-14"  data-aos="fade-up">
            <div className='grid justify-center items-center pb-6'>
                <h1 className='text-center text-4xl font-bold pb-2'>Newsletter</h1>
                <Divider className="bg-foreground-600 h-1" />
            </div>
            <div>
                <input
                    className="w-full p-2 border-2 border-neutral-500 rounded-lg"
                    type="text"
                    placeholder="Enter Your Email Here" />
            </div>
            <div className="flex justify-center items-center py-4">
                <Button className="bg-neutral-600 text-white rounded-lg">Subscribe</Button>
            </div>
        </div>
    );
};

export default Newsletter;