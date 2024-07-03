import { SocialPlatform } from "@lib/types"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

const socialMedia: SocialPlatform[] = [
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/davee-scott",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/OnlyForward0613",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/numanibnmazid/",
  },
  {
    title: "Facebook",
    Icon: BsFacebook,
    url: "https://www.facebook.com/profile.php?id=61561446326312&mibextid=ZbWKwL",
  },
  {
    title: "YouTube",
    Icon: BsYoutube,
    url: "https://www.youtube.com/channel/UCNNlfUfTU61QaJDWPEakkeg",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:daveescott0509@gmail.com",
  },
]

export default socialMedia
