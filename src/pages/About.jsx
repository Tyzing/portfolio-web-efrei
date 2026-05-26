import { Header, Footer, Button } from "../components";

function About({ name }) {
  return (
    <div className="bg-[#F9FAFF] min-h-screen flex flex-col">
      <Header name={name} />
      <div className="flex flex-col md:flex-row items-center mx-[8%] mt-[60px] md:mt-[100px] gap-[48px] flex-1">
        <div className="flex flex-col gap-[32px] w-full md:w-[45%]">
          <h1 className="font-playfair text-[36px] md:text-[48px] text-charcoal font-bold">About me</h1>
          <p className="font-nunito text-[18px] md:text-[20px] text-gray">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum.
            Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
          </p>
          <div>
            <Button text="Resume" link="/CV_Bastien_Dubile.pdf" backgroundColor="var(--color-yellow)" borderColor="var(--color-yellow)" textColor="var(--color-charcoal)" />
          </div>
        </div>
        <div className="flex justify-center w-full md:flex-1">
          <div className="w-[70vw] h-[70vw] md:w-[36vw] md:h-[36vw] rounded-full overflow-hidden">
            <img
              src="/image-about.svg"
              alt="About me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-[8%] mt-[60px]">
        <Footer />
      </div>
    </div>
  );
}

export default About;
