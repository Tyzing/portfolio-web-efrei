function Footer() {
  return (
    <div className="flex flex-col items-center gap-[32px] mt-[100px] mb-[50px]">
      <div className="flex items-center gap-[24px]">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/InstagramLogo.svg" alt="Instagram" width={37} />
        </a>
        <a href="https://www.linkedin.com/in/bastien-dubile/" target="_blank" rel="noopener noreferrer">
          <img src="/LinkedInLogo.svg" alt="LinkedIn" width={38} />
        </a>
        <a href="mailto:">
          <img src="/MailLogo.svg" alt="Mail" width={40} />
        </a>
      </div>
      <p className="font-nunito text-[16px] text-gray">Bastien Dubile 2026</p>
    </div>
  )
}

export default Footer