import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
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
            menu: "About",
            address: "/about"
        }
    ];
 
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBlurred={true} className="bg-neutral-800 text-white">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand>
                <p className="font-bold text-inherit">TnG Expo</p>
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

            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
export default NavigationBar;