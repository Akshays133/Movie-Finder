import React from 'react';

const Movie = (props) => {
    
    return (
      <div className='col s12 m12'>
        <div
          className='card medium horizontal hoverable'
          style={{ borderRadius: "20px" }}
        >
          <div className='card-image valign-wrapper center'>
            {props.image == null ? (
              <img
                className='valign-wrapper center'
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt='CardImage cap'
                style={{
                  width: "90%",
                  height: 320,
                  borderRadius: "10px",
                  marginLeft: "18px",
                }}
              />
            ) : (
              <img
                className='valign-wrapper center'
                src={`http://image.tmdb.org/t/p/w185${props.image}`}
                alt='CardImage cap'
                style={{
                  width: "90%",
                  height: 320,
                  borderRadius: "10px",
                  marginLeft: "18px",
                }}
              />
            )}
          </div>
          <div className='card-stacked'>
            <div
              className='card-content'
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <h4 className='grey-text text-darken-2' style={{ fontWeight: "700" }}>
                {props.title}
              </h4>
              <h6 style={{ fontWeight: "500", opacity: "0.6" }}>
                RELEASE DATE : {props.date}
              </h6>
              <h6 style={{ fontWeight: "500", opacity: "0.6" }}>
                RATING : {props.rating}
              </h6>
              <p>{props.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Movie;
