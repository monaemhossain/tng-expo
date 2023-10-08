import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        {
            menu: "Home",
            address: "/"
        },
        {
            menu: "Services",
            address: "/services"
        },
        {
            menu: "Gallery",
            address: "/gallery"
        }
    ];
    const logInReg = <>
        <NavbarItem>
            <NavLink to="/login">Login</NavLink>
        </NavbarItem>
        <NavbarItem>
            <NavLink as={Link} color="primary" to="./sign-up" variant="flat">
                Sign Up
            </NavLink>
        </NavbarItem>
    </>

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBlurred={true} className="bg-neutral-800 text-white">

            <NavbarBrand>
                <Image src="/tng.png" className="w-10 h-10" />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    menuItems.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`} className="flex items-center justify-center">
                            <NavLink
                                to={item.address}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "btn bg-neutral-600 rounded-lg py-1 px-3" : ""
                                }
                            >
                                {item.menu}
                            </NavLink>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarContent justify="end" className="max-sm:hidden">
                {logInReg}
            </NavbarContent>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />

            <NavbarMenu className="grid justify-center items-center">
                <div className="grid gap-4">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className="flex items-center justify-center">
                            <NavLink
                                to={item.address}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500" : ""
                                }
                            >
                                {item.menu}
                            </NavLink>
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem className="mt-3 flex flex-col items-center justify-center gap-3">
                        {logInReg}
                    </NavbarMenuItem>
                </div>
            </NavbarMenu>

        </Navbar>
    );
}
export default NavigationBar;