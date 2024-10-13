"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button
      className="text-base font-spaceGrotesk text-gray-400 hover:text-[#c73808]"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TransitionLink