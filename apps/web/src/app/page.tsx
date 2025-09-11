import Card from "../../components/ui/card";

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-[100%] w-[100%] gap-6 p-6 bg-primary-light-gray">
            <Card
                title="Pay-per-click advertising"
                subtitle="Welinq and QphoX Partner to Create Seamless Connections Between Superconducting Quantum Processors for Scalable Computing"
                category="PRESS RELEASE"
                date="25/2/2025"
                buttonText="read the article"
                image="/ppc_ad.svg"
            />
        </div>
    );
}
