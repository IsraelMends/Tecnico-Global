import { delay } from "@/utils/delay";

export default async function Page() {
    await delay(2000);
    return (
        <div>
            <p>Obrigado por se inscrever!</p>
        </div>
    )
}