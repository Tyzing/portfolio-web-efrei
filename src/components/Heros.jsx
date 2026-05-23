import Button from "./Button"

function Heros({ name }) {
  return (
    <div className="w-[36%] flex flex-col gap-[12px] mt-[64px]">
      <p className="font-nunito text-[20px] text-yellow">DEVELOPPEUR WEB</p>
      <div className="flex flex-col gap-[32px]">
        <h1 className="font-poppins font-bold text-[64px] leading-[1.1] text-charcoal m-0">Hello,  my name is {name}</h1>
        <p className="font-raleway text-[24px] text-gray">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
        <div className="flex gap-[12px]">
          <Button text="Projects" link="#projects" backgroundColor="var(--color-yellow)" borderColor="var(--color-yellow)" textColor="var(--color-charcoal)" />
          <Button text="LinkedIn" link="https://www.linkedin.com/in/bastien-dubile" backgroundColor="transparent" borderColor="var(--color-charcoal)" textColor="var(--color-charcoal)" />
        </div>
      </div>
    </div>
  )
}

export default Heros