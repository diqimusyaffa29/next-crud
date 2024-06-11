"use client";

import {ColumnDef} from "@tanstack/react-table";
import {Checkbox} from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Athletes = {
    id: number;
    name: string;
    gender: string;
    ktp: number;
    kta: string;
    ttl: string;
    class: string;
    achievement: string;
    address: string;
    phone: string;
    height: number;
    weight: number;
};

export const columns: ColumnDef<Athletes>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "id",
        header: "No.",
    },
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "gender",
        header: "Jenis Kelamin",
    },
    {
        accessorKey: "ktp",
        header: "No. KTP/KIA",
    },
    {
        accessorKey: "kta",
        header: "No. KTA",
    },
    {
        accessorKey: "ttl",
        header: "Tempat Tanggal Lahir",
    },
    {
        accessorKey: "class",
        header: "Nomor Kelas/Spesialis",
    },
    {
        accessorKey: "achievement",
        header: "Prestasi",
    },
    {
        accessorKey: "adress",
        header: "Alamat Lengkap",
    },
    {
        accessorKey: "phone",
        header: "No. HP",
    },
    {
        accessorKey: "height",
        header: "Tinggi Badan",
    },
    {
        accessorKey: "weight",
        header: "Berat Badan",
    },
];
