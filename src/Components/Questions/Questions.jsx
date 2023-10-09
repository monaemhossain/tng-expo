import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

const Questions = () => {
    const accordion1 = "The expo showcases the latest advancements in technology and gaming, offering hands-on experiences with cutting-edge products and immersive gaming demos. It also provides ample networking opportunities with industry experts and like-minded enthusiasts.";

    const accordion2 = "To maximize networking, attendees can participate in scheduled meet-and-greet sessions, engage in panel discussions, and join industry-specific workshops. Additionally, designated networking zones and social events are available for connecting with fellow attendees.";

    const accordion3 = "Absolutely! The expo agenda includes a variety of workshops and panel discussions covering topics such as AI, machine learning, cybersecurity, and the future of gaming. These sessions provide valuable insights and opportunities to learn from industry experts.";
    const accordion4 = "Yes, there's a mobile app available for navigating the expo. It provides a detailed map of the venue, schedules for workshops and sessions, and real-time updates on special events and announcements. The app is designed to enhance the attendee's overall experience and make navigation seamless."

    return (
        <div className='max-w-[1024px] mx-auto px-4 mb-10'>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center' data-aos="fade-up">
                <div className="grayscale hover:grayscale-0 transition-all">
                    <img src="/accordion.svg" alt="accordion image" />
                </div>
                <div className='w-full mt-4 mx-auto'>
                    <div className='grid justify-center items-center pb-6'>
                        <h1 className='text-center text-4xl font-bold pb-2'>Questions you might be curious about.</h1>
                        <Divider className="bg-foreground-600 h-1" />
                    </div>
                    <Accordion>
                        <AccordionItem key="1" aria-label="Accordion 1" title="What are the key highlights of this year's expo?">
                            {accordion1}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="How can attendees make the most of networking opportunities at the expo?">
                            {accordion2}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Are there any specific workshops or panel discussions scheduled during the event?">
                            {accordion3}
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4" title="Is there a mobile app or guide available for navigating the expo?">
                            {accordion4}
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Questions;