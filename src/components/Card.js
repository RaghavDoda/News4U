

const Card = ({props}) => {
    return (
        <>
        <center>
            <div className="max-w-sm rounded overflow-hidden shadow-lg" >
            {props.urlToImage && <img className="w-full" src={props.urlToImage}/>}
            {!props.urlToImage && <img className="w-full" src="https://thumbs.dreamstime.com/b/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg"/>}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                {/* <p className="text-gray-700 text-base">{props.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.author && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.author}</span>}
                {props.source.name && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.source.name}</span>}
            </div>
            </div>
            </center>
        </>
    )
}

export default Card