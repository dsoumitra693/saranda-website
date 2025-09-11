import Image from "next/image"
import Link from "next/link"

export interface FooterLink {
    title: string;
    src: string;
}

export interface FooterIconLink {
    alt: string;
    src: string;
    icon: string;
    size?: number
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
    iconLinks?: FooterIconLink[];
    otherIcons?: FooterIconLink[];
}

export interface FooterLinkProps {
    src: string;
    title: string;
}

export interface FooterIconLinkProps {
    src: string;
    icon: string;
    alt: string;
    size?: number
}

export interface FooterLinkGroupProps {
    title: string;
    links: FooterLink[];
    iconLinks?: FooterIconLink[];
    otherIcons?: FooterIconLink[];
}


const footerConfig: FooterSection[] = [
    {
        title: "Contacts",
        links: [
            {
                title: "saranda-webad@ds.study.iitm.ac.in",
                src: "mailto:saranda-webad@ds.study.iitm.ac.in"
            },
            {
                title: "saranda-sec@ds.study.iitm.ac.in",
                src: "mailto:saranda-sec@ds.study.iitm.ac.in"
            },
            {
                title: "saranda-ds@ds.study.iitm.ac.in",
                src: "mailto:saranda-ds@ds.study.iitm.ac.in"
            }
        ],
        iconLinks: [
            {
                alt: "Instagram",
                src: "https://www.instagram.com/saranda.iitm/",
                icon: "/instagram.svg"
            },
            {
                alt: "YouTube",
                src: "https://www.facebook.com/saranda.iitm/",
                icon: "/youtube.svg"
            },
            {
                alt: "WhatsApp",
                src: "https://twitter.com/saranda_iitm",
                icon: "/whatsapp.svg",
                size: 24
            },
            {
                alt: "LinkedIn",
                src: "https://www.linkedin.com/school/saranda-iitm/",
                icon: "/linkedin.svg"
            }
        ],
        otherIcons: [
            { alt: "iitm", icon: "/iitm_logo.png", src: "*", size: 36 },
            { alt: "saranda", icon: "/saranda_logo.png", src: "*", size: 36 }
        ]
    },
    {
        title: "Quick links",
        links: [
            { title: "Home", src: "/" },
            { title: "Core Team", src: "/core-team" },
            { title: "Events", src: "/events" },
            { title: "Meet Ups", src: "/meet-ups" },
            { title: "Art Gallery", src: "/art-gallery" },
            { title: "Saranda Culturals Community", src: "/culturals-community" },
            { title: "Saranda eSports Community", src: "/esports-community" },
            { title: "Saranda Analytics Community", src: "/analytics-community" }
        ]
    },
    {
        title: "Useful links",
        links: [
            { title: "Student Handbook", src: "/student-handbook" },
            { title: "Grading Document", src: "/grading-document" },
            { title: "Score-Checker", src: "/score-checker" }
        ]
    }
]

export default function Footer() {
    return (
        <div className="w-full h-auto min-h-[350px] bg-primary-dark flex flex-wrap items-start justify-center gap-6 pt-4 px-4 pb-8 md:gap-15 md:pt-2 md:px-2.5 md:h-[350px]">
            {footerConfig.map((section, index) => (
                <FooterLinkGroup key={index} {...section} />
            ))}
        </div>
    )
}


export const FooterLink = ({ src, title }: FooterLinkProps) => {
    return (
        <Link href={src}>
            <p className="text-primary-light-gray text-sm font-medium hover:text-primary-light-lime transition-all duration-200 py-1 text-center md:text-left md:text-[14px] md:hover:text-[16px]">
                {title}
            </p>
        </Link>
    );
};


export const FooterIconLink = ({ src, icon, alt, size }: FooterIconLinkProps) => {
    return (
        <Link 
            href={src} 
            className="hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg hover:shadow-primary-lime/50 rounded-full"
        >
            <Image 
                src={icon} 
                alt={alt} 
                width={size ?? 32} 
                height={size ?? 32}
                className="hover:animate-pulse transition-all duration-300"
            />
        </Link>
    );
};

export const FooterLinkGroup = ({ title, links, iconLinks, otherIcons }: FooterLinkGroupProps) => {
    return (
        <div className="flex flex-col items-center justify-start w-full pb-8 pt-2 md:w-[25%] md:items-start md:mb-0">
            <h3 className="text-primary-light-lime text-xl font-bold mb-4 text-center md:text-left md:text-2xl">
                {title}
            </h3>

            <div className="flex flex-col items-center md:items-start w-full">
                {links.map((link, index) => (
                    <FooterLink key={index} {...link} />
                ))}
            </div>

            {iconLinks && (
                <div className="flex items-center justify-center gap-3 mt-4 md:justify-start md:gap-2">
                    {iconLinks.map((link, index) => (
                        <FooterIconLink key={index} {...link} />
                    ))}
                </div>
            )}
            {otherIcons && (
                <div className="flex items-center justify-center gap-5 mt-4 md:justify-start md:gap-2">
                    {otherIcons.map((link, index) => (
                        <FooterIconLink key={index} {...link} />
                    ))}
                </div>
            )}
        </div>
    );
};
