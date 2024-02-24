import logo from "../assets/logo.svg";
const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="logo" className="w-28 object-contain" />
                <button type="button" className="black_btn" onClick={() => window.open("https://github.com/rafiulislamrana/")}>Github</button>
            </nav>

            <h1 className="head_text">Summerize Articles with <br className="max-md:hidden" /> <span className="orange_gradient">Chat GPT-4</span></h1>
            <h2 className="desc">
                This field is currently in high demand across industries, with a significant shortage of skilled professionals. Data Scientists and Data Analysts command high salaries and have diverse job opportunities in various sectors, making it the top choice for many statisticians.
            </h2>
        </header>

    );
};

export default Hero;