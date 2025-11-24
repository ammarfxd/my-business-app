import { Button } from "./button";

const navItems = [
  { name: "About", href: "About" },
  { name: "Skills", href: "Skills" },
  { name: "Portfolio", href: "Portfolio" },
  { name: "Testimonial", href: "Testimonial" },
];

export const NavBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-20 bg-transparent">
      <div className="container mx-auto grid grid-cols-3 gap-4 justify-between py-8 ">
        <a href="#hero" className="text-3xl text-center">
          LOGO
        </a>
        <div className="hidden md:flex space-x-10 items-center justify-center ">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="tracking-tight text-foreground text-lg hover:text-primary transition-colors duration-300 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center ">
          <Button className="border-primary border-2 bg-background text-foreground py-5 tracking-wide">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
