import React from 'react';
import PropTypes from 'prop-types';
import { CenterLoading } from './styled';

const Loading = ({ isLoading }) => {
  if (!isLoading) return <></>;
  return (
    <CenterLoading>
      <main className="container">
        <div className="item">
          <i className="loader --2" />
        </div>
        <div className="item">
          <i className="loader --9" />
        </div>
        <div className="item">
          <i className="loader --3" />
        </div>

        <div className="item">
          <i className="loader --4" />
        </div>
        <div className="item">
          <i className="loader --1" />
        </div>
        <div className="item">
          <i className="loader --5" />
        </div>

        <div className="item">
          <i className="loader --6" />
        </div>
        <div className="item">
          <i className="loader --8" />
        </div>
        <div className="item">
          <i className="loader --7" />
        </div>
      </main>
    </CenterLoading>
  );
};

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
export default Loading;
