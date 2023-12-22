import { revalidatePath } from "next/cache";
import { connectToDb } from "../db";
import About from "../model/about.model";


export async function getAbout() {
    try {
        await connectToDb();

        const about = await About.find();
        if (!about) return null;

        return about;
    } catch (error: any) {
        console.log({ message: error.message })
    }
}

export async function createAbout(aboutData: AboutType) {
    try {
        const about = await About.create(aboutData);
        if (!about) return null;

        revalidatePath('/skills')
        revalidatePath('/about')
        return about;

    } catch (error: any) {
        console.log({ message: error.message })
    }
}