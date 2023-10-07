import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter, BiLogoPinterest, BiLogoYoutube } from "react-icons/bi";
const Footer = () => {
    return (
        <div className="bg-neutral-800 text-white py-8">
            <div className="max-w-[1024px] mx-auto flex items-center justify-between">
                <div><p>© 2020 Your Company, Inc. All rights reserved.</p></div>
                <div>
                    <ul className="flex gap-2">
                        <li><a href="#"><BiLogoFacebookCircle className="text-2xl"></BiLogoFacebookCircle></a></li>
                        <li><a href="#"><BiLogoInstagram className="text-2xl"></BiLogoInstagram></a></li>
                        <li><a href="#"><BiLogoTwitter className="text-2xl"></BiLogoTwitter></a></li>
                        <li><a href="#"><BiLogoPinterest className="text-2xl"></BiLogoPinterest></a></li>
                        <li><a href="#"><BiLogoYoutube className="text-2xl"></BiLogoYoutube></a></li>
                    </ul>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;