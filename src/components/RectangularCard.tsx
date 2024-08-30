import './RectangularCard.css';

interface RectangularCardProps {
    image: string;
    title: string;
    url: string;
    listElements: string[];
}

export function RectangularCard({image, title, url, listElements}: RectangularCardProps) {
    return (
        <a href={url}
           className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-s-lg"
                 src={image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{listElements}</p>
                {listElements.map((element, index) => (
                    <li key={index} className="mb-2 text-gray-700 dark:text-gray-400">{element}</li>
                ))}
            </div>
        </a>
    )
}