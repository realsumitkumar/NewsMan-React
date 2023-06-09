import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props
  return (
    <>
      <div className="card my-2" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '50%' }}>
            {source}
          </span>
          <h5 className="card-title">{title}..</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">{author} {new Date(date).toLocaleTimeString()} </small></p>
          <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </>
  )
}


export default NewsItem