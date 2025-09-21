import React from 'react'

const VipInfo = ({ items }) => {
  return (
    <div className="row mt-3 text-center">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded shadow w-75"
            />
            <h4 className="mt-2">{item.name}</h4>
            <div>Worth: {item.worth}</div>
            <div>Birth Year: {item.birth_year}</div>
            <div>Source: {item.source}</div>
            <div>Country: {item.country}</div>
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

export default VipInfo
