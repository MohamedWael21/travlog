import FooterNavItem from "@/components/Footer/FooterNavItem";

const FooterNav = () => {
  return (
    <div className="flex flex-col gap-16 md:flex-row md:justify-between lg:w-[50%]">
      <FooterNavItem
        title="Company"
        links={[
          { text: "About", href: "#" },
          { text: "Career", href: "/#" },
          { text: "Mobile", href: "/#" },
        ]}
      />
      <FooterNavItem
        title="Contact Us"
        links={[
          { text: "Why Travlog?", href: "/#" },
          { text: "Partner with us", href: "/#" },
          { text: "FAQ's", href: "/FAQ's" },
          { text: "Blog", href: "/Blog" },
        ]}
      />
      <FooterNavItem
        title="Meet Us"
        links={[
          { text: "+00 92 1234 56789", href: "#" },
          { text: "info@travlog.com", href: "#" },
          { text: "205. R Street, New York", href: "/#" },
        ]}
      />
    </div>
  );
};

export default FooterNav;
