import  Link  from 'next/link'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Card = ({ props }) => {
    return (
        <>
            <Link href={props.url} target="_blank">
                <div className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    {props.urlToImage && <img className="object-cover w-full rounded-t-lg h-96 md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg" src={props.urlToImage} alt="" />}
                    {!props.urlToImage && <img className="object-cover w-full rounded-t-lg h-96 md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg" src="https://thumbs.dreamstime.com/b/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg" />}
                    <div className="flex flex-col w-full justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                        <div className="flex justify-between">
                            <p className='flex text-sm justify-start'>{props.source.name}</p>
                            <p className='flex text-sm justify-end'>{formatDistanceToNow(new Date(props.publishedAt), { addSuffix: true })}</p>
                        </div>
                        
                    </div>
                </div>
            </Link>

        </>
    )
}

export default Card