import { useState } from "react";
import {copy, linkIcon, loader, tick} from "../assets";
const Demo = () => {

    return (
        const [article, setArticle] = useState()
        <section className="w-full max-w-xl  mt-16">
            {/* search */}
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center" onSubmit={() => {}}>
                    <img src={linkIcon} className="absolute left-0 my-2 ml-3 w-5" alt="link_icon" />
                    <input type="url" placeholder="Enter an URL" value="" onChange={() => {}} required className="url_input peer" />
                    <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">=></button>
                </form>

                {/* URL Browser History */}
            </div>

            {/* Display Summery Result */}
        </section>
    );
};

export default Demo;