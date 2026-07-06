import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6"

const socialIcons = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "X", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "YouTube", icon: FaYoutube },
]

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socialIcons.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.label}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:h-16 md:w-16"
            aria-label={item.label}
          >
            <Icon className="h-5 w-5" />
          </button>
        )
      })}
    </div>
  )
}
