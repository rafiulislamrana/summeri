import { useEffect, useState } from "react";
import {copy, linkIcon, loader, tick} from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";


const Demo = () => {
    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();
    const [article, setArticle] = useState({
        url: "",
        summery: "",
    });

    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"))
        if(articlesFromLocalStorage){
            setAllArticles(articlesFromLocalStorage)
        }
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {data} = await getSummary({
            articleUrl: article.url
        });

        if(data?.summary){
            const newArticle = {...article, summery: data.summary}
            const updatedAllArticles = [newArticle, ...allArticles];
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles))
            console.log(newArticle)
        }
        
        
    }

    return (
        <section className="w-full max-w-xl  mt-16">
            {/* search */}
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
                    <img src={linkIcon} className="absolute left-0 my-2 ml-3 w-5" alt="link_icon" />
                    <input type="url" placeholder="Enter an URL" value={article.url} onChange={(e) => setArticle({ ...article, url: e.target.value})} required className="url_input peer" />
                    <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">Go</button>
                </form>

                {/* URL Browser History */}
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {
                        allArticles.map((item,idx) => (
                            <div key={idx} onClick={() => setArticle(item)} className="link_card">
                                <div className="copy_btn">
                                    <img src={copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain" />
                                </div>
                                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* Display Summery Result */}
        </section>
    );
};

export default Demo;