import { Button } from "@/components/ui/button"
import { CheckCheck } from "lucide-react"
import Link from "next/link"

export default function page() {
    return (
        <div className="h-screen ">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6"/>
                <div className="text-center">
                    <h2 className="text-base md:text-2xl text-gray-900 font-semibold text-center">payment done!</h2>
                    <p className="text-gray-600 my-2">thank you for your purchase; we hope you enjoy it</p>
                    <p>have a great day!</p>
                    <Button asChild className="mt-5">
                        <Link href={"/"}>Go back</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
