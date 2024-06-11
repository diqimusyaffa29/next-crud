import {Athletes, columns} from "./columns";
import {DataTable} from "./athlete-table";

async function getData(): Promise<Athletes[]> {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            name: "Muhammad Shiddiqi Musyaffa'",
            gender: "Pa",
            ktp: 637102290900010,
            kta: "-",
            ttl: "Banjarmasin, 29 September 2000",
            class: "Ganda Putra",
            achievement: "Juara Nasional",
            address: "Jl. Kocak Gaming",
            phone: "081250456484",
            height: 174,
            weight: 90,
        },
        {
            id: 2,
            name: "LOL",
            gender: "Pa",
            ktp: 637102290900010,
            kta: "-",
            ttl: "Banjarmasin, 29 September 2000",
            class: "Ganda Putra",
            achievement: "Juara Nasional",
            address: "Jl. Kocak Gaming",
            phone: "081250456484",
            height: 174,
            weight: 90,
        },
        // ...
    ];
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
