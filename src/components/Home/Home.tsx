import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ITEMS, ITEMS_PER_PAGE } from "./config";
import Pagination from "../Pagination/Pagination";

export interface Item {
    id: number;
    title: string;
};

export const Home = () => {
    const [data] = useState(ITEMS);
    const [currentPageData, setCurrentPageData] = useState<Item[]>([]);

    useEffect(() => {
        handlePageChange(1);
    }, [data]);

    const handlePageChange = (page: number) => {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        const paginatedItems = data.slice(startIndex, endIndex);

        setCurrentPageData(paginatedItems);
    }

    return (
        <div className="home-page">
            {currentPageData.map((item) => (
                <Card key={item.id} item={item} />
            ))}
            <Pagination totalItems={data.length} itemPerPage={ITEMS_PER_PAGE} onPageChange={handlePageChange} isCyclic={true} />
        </div>
    )
};

export default Home;