import React from 'react';
import Loading from './loading';

const SearchBox = (props) => {
    return (
      <div
        className='container'
        style={{ paddingTop: 30, paddingBottom: 30, fontFamily: "fantasy" }}
      >
        <div className='row'>
          <div
            className='test col s2 grey-text text-darken-1 valign-wrapper'
            style={{ marginTop: "27px" }}
          >
            MOVIE NAME
          </div>
          <section className='test col s8'>
            <form onSubmit={props.handleSubmit} action=''>
              <div className='input-field'>
                <input
                  placeholder='Search movie'
                  onChange={props.handleChange}
                  id='first_name2'
                  type='text'
                  className='validate'
                />
              </div>
            </form>
          </section>
          <a
            href='/'
            onClick={props.handleSubmit}
            className='test col s1 waves-effect waves-light btn black darken-2'
            style={{ marginTop: "25px", borderRadius: '5px' }}
          >
            Search!
          </a>
        </div>
        {props.loading && <Loading />}
      </div>
    );
}

export default SearchBox;
