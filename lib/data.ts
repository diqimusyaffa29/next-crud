import { prisma } from "@/lib/prisma";

export const getAthletes = async () =>{
    try{
        const athlete = await prisma.athlete.findMany();
        return athlete;
    } catch (error){
        throw new Error("Failed to fetch contact Data");
    }
}