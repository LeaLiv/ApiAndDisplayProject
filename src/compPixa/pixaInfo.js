import React from 'react'

const PixaInfo = ({ items }) => {
  return (
    <div className="row mt-3 text-center">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <a href={item.pageURL} target="_blank" rel="noreferrer">
              <img
                src={item.webformatURL}
                alt={item.tags}
                className="img-fluid rounded shadow w-75"
              />
            </a>
            <h4 className="mt-2">{item.user}</h4>
            <div>Tags: {item.tags}</div>
            <div>
              👍 {item.likes?.toLocaleString()} | 👁 {item.views?.toLocaleString()}
            </div>
          </div>
        ))
      ) : (
        <div
          style={{ width: '5rem', height: '5rem' }}
          className="spinner-border text-primary mx-auto"
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  )
}

export default PixaInfo
